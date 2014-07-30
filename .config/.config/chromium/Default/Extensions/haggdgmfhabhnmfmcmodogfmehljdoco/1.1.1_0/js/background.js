chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {

	if (request.method === "Send Notification") {
	    var notify = webkitNotifications.createNotification(
	      'icons/icon48.png',                       // icon url - can be relative
	      request.title,                      // notification title
	      'New Low Price: $' + request.price  // notification body text
	    );
	    
	    notify.onclick = function() {
	    	chrome.tabs.query({url: request.url}, function(tabs) {
				var tab = tabs[0];
				chrome.tabs.highlight({windowId: tab.windowId, tabs:tab.index}, function(window){
					chrome.windows.update(window.id, {focused:true}, function(){});
				});
			});
	    	this.cancel(); 
	    };
	    setTimeout(function(){ notify.cancel(); }, request.timeout);
		notify.show();
	} else if ( request.method === "getLocalStorage") {
		var result = localStorage[request.key];
		sendResponse({data:result});
	} 
	return true;
 });