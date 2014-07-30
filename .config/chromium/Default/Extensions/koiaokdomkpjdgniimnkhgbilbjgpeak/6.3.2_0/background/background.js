/* CORE CODE */
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	if(tab.url.indexOf("youtube.com/watch") > 0 && changeInfo.status == "complete"){
		chrome.pageAction.show(tabId);
		chrome.tabs.executeScript(tabId,{code:"updateQualityPlease()"});
		GoogleAnalytics.track("YouTubeVideo");
	}
});
localStorage.enabled = 1;
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.method == "getSettings"){
		sendResponse(localStorage);
	}
});

/* ANALYTICS */
GoogleAnalytics.propertyName = "AutoHD";
GoogleAnalytics.propertyID = "UA-7929453-158";
GoogleAnalytics.domain = "autohdyt.appspot.com";
GoogleAnalytics.setup();