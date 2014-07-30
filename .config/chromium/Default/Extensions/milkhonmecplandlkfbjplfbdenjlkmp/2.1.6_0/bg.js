var icon;
$(document).ready(function(){
	chrome.extension.onRequest.addListener(requestListener);
	chrome.tabs.onUpdated.addListener(onUpdated);
	if(localStorage["installed"] != "true") {
		$.getJSON("http://json.adsweep.org/adengine.php?callback=?", function(data){
			$.each(data.rules, function(i, item){
				var object = {};
				object.css = item.css;
				object.except = item.except;
				object.js = Base64.decode(item.js);
				localStorage[item.site] = JSON.stringify(object);
			});
		});
		localStorage["installed"] = "true";
	}
});
var requestListener = function(request, sender, sendResponse) { 
	if(request.purpose == "disable") {
		chrome.tabs.getSelected(null, function(tab) {
			var site = tab2domain(tab);
			if(!localStorage["exceptions"])
				localStorage["exceptions"] = site;
			else
				localStorage["exceptions"] += ","+site;
			if(localStorage["exceptions"] && localStorage["exceptions"].indexOf(site) != -1)
			{
				chrome.extension.sendRequest({"purpose":"pstatus","status":"disabled"});
				chrome.extension.sendRequest({"purpose":"popup","message":"Disabled."});
				chrome.pageAction.setIcon({"path":"icons/icon32.gray.png","tabId":tab.id});
				chrome.tabs.update(tab.id, {"url":tab.url});
			}
			else
				chrome.extension.sendRequest({"purpose":"popup","message":"Something went wrong, please try again."});
		});
	}
	else if(request.purpose == "enable") {
		chrome.tabs.getSelected(null, function(tab) {
			var site = tab2domain(tab);
			var array = localStorage["exceptions"].split(",");
			localStorage["exceptions"] = removeItem(array, site).join();
			if(localStorage["exceptions"] && localStorage["exceptions"].indexOf(site) == -1)
			{
				chrome.pageAction.setIcon({"path":icon,"tabId":tab.id});
				chrome.extension.sendRequest({"purpose":"pstatus","status":"enabled"});
				chrome.extension.sendRequest({"purpose":"popup","message":"Re-enabled."});
				chrome.tabs.update(tab.id, {"url":tab.url});
			}
			else
				chrome.extension.sendRequest({"purpose":"popup","message":"Something went wrong, please try again."});
		});
	}
	else if(request.purpose == "status") {
		chrome.tabs.getSelected(null, function(tab) {
			if(localStorage["js"] == undefined)
				localStorage["js"] = "off";
			var domain = tab2domain(tab);
			if(tab.url.substr(0,5) != "http:")
				chrome.extension.sendRequest({"purpose":"pstatus","status":"hdisabled","js":localStorage["js"]});
			else if(localStorage["exceptions"] && localStorage["exceptions"].indexOf(domain) != -1)
				chrome.extension.sendRequest({"purpose":"pstatus","status":"disabled","js":localStorage["js"]});
			else
				chrome.extension.sendRequest({"purpose":"pstatus","status":"enabled","js":localStorage["js"]});
		});
	}
	else if(request.purpose == "cache") {
		chrome.extension.sendRequest({"purpose":"popup","message":"Downloading cache, please wait."});
		$.getJSON("http://json.adsweep.org/adengine.php?callback=?", function(data){
			$.each(data.rules, function(i, item){
				var object = {};
				object.css = item.css;
				object.except = item.except;
				object.js = Base64.decode(item.js);
				localStorage[item.site] = JSON.stringify(object);
			});
			chrome.extension.sendRequest({"purpose":"popup","message":"Cache is updated. "+data.count+" items downloaded."});
		});
	}
	sendResponse({});
};
var onUpdated = function(tabId, changeInfo, tab) {
	if(changeInfo.status != "loading") return;
	var domain = tab2domain(tab);
	if(tab.url.substr(0,5) != "http:"){
		chrome.pageAction.hide(tabId);
		return;
	}
	chrome.pageAction.show(tabId);
	if(localStorage["exceptions"] && localStorage["exceptions"].indexOf(domain) != -1) {
		chrome.pageAction.setIcon({"path":"icons/icon32.gray.png","tabId":tabId});
		return;
	}
	chrome.pageAction.setIcon({"path":icon,"tabId":tabId});
	var common;
	if(localStorage['common'])
		 common = JSON.parse(localStorage['common']);
	var domrules;
	if(localStorage[domain]) {
		domrules = JSON.parse(localStorage[domain]);
		domrules.js = (localStorage["js"] == "on") ? undefined : domrules.js;
		insertCode(tabId, domrules.css, domrules.js);
	}
	if(common) {
		if(domrules)
			var css = filterCommon(common.css, domrules.except);
		else
			var css = common.css;
		chrome.tabs.insertCSS(tabId, {code:common.css});
		if(localStorage["js"] == "on")
			chrome.tabs.executeScript(tabId, {code:common.js});
	}
};