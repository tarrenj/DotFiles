/* Google Analytics Library for Extensions 
 * Automatically track common events like starts, updates
 * Configure by setting propertyID (required).
 * Set category by setting propertyName (recommended if you use the same trackingID across multiple extensions)
 * Track events from content scripts etc by sending a message: {method:'track',name:'whatever',label:'whatever'};
 * Requires Jquery and JqueryUtils... working on a dependency free version later.
 * Use freely.
 * */

var manifest = chrome.runtime.getManifest();
var _gaq = _gaq || [];

var GoogleAnalytics = {
	propertyName:"",
	propertyID:"",
	domain:"",
	uamode:"S",
	track:function(name,label){
		_gaq.push(["_trackEvent",GoogleAnalytics.propertyName,GoogleAnalytics.uamode + manifest.version,name]);
		if(label != null){GoogleAnalytics.setMode(label);}
	},
	setup:function(){
		_gaq.push(['_setAccount', GoogleAnalytics.propertyID]);
		_gaq.push(['_trackPageview']);
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = 'https://ssl.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
		if(!$.utils.exists(localStorage.it)){
			localStorage.it = $.utils.time.epoch();
			localStorage.ut = "S";
		}
		if(!$.utils.exists(localStorage.utx)){
			localStorage.utx = $.utils.time.epoch();
		}
		if(!$.utils.exists(localStorage.uts)){
			localStorage.uts = 0;
		}
		GoogleAnalytics.uamode = localStorage.ut;
		chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
			if(request.method == "track"){
				GoogleAnalytics.track(request.name,request.label);
			}
		});
		chrome.runtime.onStartup.addListener(function(){
			GoogleAnalytics.track("Started");
		});
		chrome.runtime.onInstalled.addListener(function(details) {
			if(details.reason == "install"){
				GoogleAnalytics.track("Installed");
			}
			else{
				GoogleAnalytics.track("Updated");
			}
		});
		chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
			if(changeInfo.status == "complete"){
				if(tab.url.indexOf("chrome://extensions/") != -1){
					GoogleAnalytics.track("Config");
				}
				if(tab.url.indexOf("view-source") != -1){
					GoogleAnalytics.track("Source","P");
				}
			}
		});
	},
	setMode:function(nm){
		GoogleAnalytics.uamode = nm;
		localStorage.ut = nm;
		localStorage.utx = $.utils.time.epoch();
		localStorage.uts = localStorage.uts*1 + 1;
		window.dispatchEvent(new Event("gamc"));
	}
};