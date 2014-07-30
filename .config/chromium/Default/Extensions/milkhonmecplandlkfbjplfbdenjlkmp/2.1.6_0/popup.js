var disabled = false;
$(document).ready(function(){
	$("#download").text("Update cache").click(download);
	$("#donate").text("Please donate if you can").click(donate);
	$("#faq").text("For more info, click here").click(faq);
	document.popup = true;
	chrome.extension.sendRequest({"purpose" : "status"});
});
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) { 
	if(request.purpose == "popup")
		$("#result").html(request.message);
	else if(request.purpose == "pstatus")
	{
		if(request.status == "enabled") {
			$("#site").text("Disable ad-blocking for this site").click(disable);
			$("#xable").show();
			disabled = false;
		}
		else if(request.status == "disabled") {
			$("#site").text("Enable ad-blocking for this site").click(enable);
			$("#xable").show();
			disabled = true;
		}
		else if(request.status == "hdisabled") {
			$("#site").hide();
			$("#xable").hide();
			disabled = true;
		}
		if(request.js == "on") {
			$("#javascript").text("Disable Javascript-based blocking").click(disablejs);
		}
		else if(request.js == "off") {
			$("#javascript").text("Enable Javascript-based blocking").click(enablejs);
		}
	}
});
function disable() {
	chrome.extension.sendRequest({"purpose" : "disable"});
	window.close();
}
function enable() {
	chrome.extension.sendRequest({"purpose" : "enable"});
	window.close();
}
function disablejs() {
	chrome.extension.sendRequest({"purpose" : "js","mode" : "off","disabled" : disabled});
	window.close();
}
function enablejs() {
	chrome.extension.sendRequest({"purpose" : "js","mode" : "on","disabled" : disabled});
	window.close();
}
function download() {
	chrome.extension.sendRequest({"purpose" : "cache"});
}
function donate() {
	chrome.tabs.create({"url": "http://arienh4.net/donate"});
}
function faq() {
	chrome.tabs.create({"url": "http://arienh4.net/adsweep"});
}