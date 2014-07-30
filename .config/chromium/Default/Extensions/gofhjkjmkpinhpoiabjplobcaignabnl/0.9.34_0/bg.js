
	// Extension developer? you may need to workaround flashblock for your extension.
	// Read below.
	// if you need additional features please email to josorek@gmail.com
	// if you use this method, please send me an email, and I'll keep you updated
	// for changes regarding this interface
	// The methods below will not throw any error if flashblock is not installed on the user's browser

	// if you need to temporarly disable FlashBlock on specific tab use the following:
	// The request is required if your extension is about to inject Flash component into a a page
	// and you want it to be allowed automatically (without user intervention)
	/**
	chrome.extension.sendRequest("gofhjkjmkpinhpoiabjplobcaignabnl",{method : 'stop-temporarily',tabId:tab.id});
	/**/
	
	// You can also ask to whitelist certain hosts.
	// That request should be executed once, probably in the background page.
	// If the user will uninstall your extension those hosts will be re-blocked.
	// Copy the following code to your background page
	/**--begin--**
	chrome.extension.sendRequest("gofhjkjmkpinhpoiabjplobcaignabnl",  // The ID of FlashBlock
		{method : 'allow-for-hosts',
		 extension_name : 'greate-extension',
		 user_message : "Allowing Flash on this host is required for great-extension to work properly",
		 hosts_list : ['www.example.com','www.example.org']
		}
	)
	
	the response is constructed as follow:
			function(response) {
				if (response == null)
					;// flashblock is not installed
				else if (response.status == 'accepted')
					;// accepted
				else if (respone.status == 'blacklisted'){
					;
					// your extension was blacklisted due to abuse/fatal error.
					// Use it wisely to whitelist hosts that are required for your extension to work properly.
					// You're welcome to use it also if your extension opens a welcome page which embeds
					// youtube video, adsense, google analytics, etc... and you feel it is ok with 
					// your users to allow flash on that welcome page host.
				}
			}
	/**--end--**/
	
	// and this is how it works
	var externalWhiteListMap = {}
	var blacklistedExtensions = []
	chrome.extension.onRequestExternal.addListener(
		function(request, sender, sendResponse) {
			var id = sender.id
			for (var i=0;i<blacklistedExtensions.length;i++){
				if (sender.id == blacklistedExtensions[i]){
					sendResponse({status:'blacklisted'});  // don't allow this extension access
					return;
				}
			}	
			if (request.method == 'stop-temporarily'){
				if (request.tabId == null){
					sendResponse({status:'error',message:'tabId value is missing'});
					return				
				}
				chrome.tabs.sendRequest(request.tabId,{type:'stop-temporarily'});
				sendResponse({status:'accepted',tabId:request.tabId});
			}
			else if (request.method == "allow-for-hosts"){
				if (request.extension_name == null){
					sendResponse({status:'error',message:'extension_name value is missing'});
					return
				}
				if (request.user_message == null){
					sendResponse({status:'error',message:'user_message value is missing'});
					return
				}				
				if (request.hosts_list == null){
					sendResponse({status:'error',message:'hosts_list value is missing'});
					return;
				}else{
					request.extension_id=sender.id
					for (var i=0;i<request.hosts_list.length;i++)
						externalWhiteListMap[request.hosts_list[i]]=request;
					sendResponse({status:'accepted'});
					return
				}
			}else{
				sendResponse({status:'error',message:'unknown request method'});
				return;
			}
		}
	);

	//localStorage.clear()
	//prefs.reset()
	/*
	console.log(prefs['general.version'])
	if (prefs['general.firstRun']){
		chrome.tabs.create({selected:true,url:"flashblock/thanksd/"})
	}else if (prefs['general.version'] < "0.9.30"){
		chrome.tabs.create({selected:true,url:"flashblock/thanksu/"})
	}
	*/
	prefs['general.version']="0.9.31"
	prefs['general.firstRun']=false
	// bind to variables
	prefs.bind('data.whiteList','whiteList')
	prefs.bind('general.enabled','enabled')
	prefs.bind('pageAction.enabled','enablePageAction')
	// bind to listeners
	prefs.bind('data.whiteList',calcWhiteMap)	
	prefs.bind('general.enabled',showStatus)
	prefs.bind('pageAction.enabled',showStatus)

	// variables
	const ALLOWED=0
	const BLOCKED=1;
	const ALLOWED_BY_EXTENSION=2;
	var whiteMap = {}	
		
	// utility
	function getHost(url){
		return url.split('//')[1].split('/')[0]
	}
	
	function updatePageAction(tabId,tabURL){
		if (tabURL.indexOf('chrome://') == 0 || tabURL.indexOf('chrome-extension://') == 0)
			return;
		if (enablePageAction)
			chrome.pageAction.show(tabId)
		else
			chrome.pageAction.hide(tabId)
		if (!enabled && enablePageAction)
			chrome.pageAction.setIcon({tabId:tabId,path:"disabled.png"})
		var host=getHost(tabURL)
		var src = whiteMap[host]
		var extSrc = externalWhiteListMap[host]
		if (extSrc){
			if (enabled && enablePageAction)
				chrome.pageAction.setIcon({tabId:tabId,path:"allowed.png"})		
			return ALLOWED_BY_EXTENSION;
		}else if (src && src.enabled){
			if (enabled && enablePageAction)
				chrome.pageAction.setIcon({tabId:tabId,path:"allowed.png"})
			return ALLOWED;
		}else{
			if (enabled && enablePageAction)
				chrome.pageAction.setIcon({tabId:tabId,path:"blocked.png"})
			return BLOCKED
		}
	}
		
	// prefs listeners
	function calcWhiteMap(){
		whiteMap = {}
		for (var i=0,length=whiteList.length;i<length;i++)
			whiteMap[whiteList[i].host]=whiteList[i]
	}

	function showStatus(){
		eachTab(function(tab){
			try{
				updatePageAction(tab.id,tab.url)
			}catch(e){console.log(e)}
		})
	}

	// popup action
	function allowOrBlock(tabId,tabURL,enable){
		var host=getHost(tabURL)	
		if(whiteMap[host] != null)
			whiteMap[host].enabled=enable
		else{
			whiteList.push({host:host,enabled:enable})
			whiteMap[host]=whiteList[whiteList.length-1]
		}
		prefs['data.whiteList']=whiteList
		updatePageAction(tabId,tabURL)
		//chrome.tabs.executeScript(tabId,{code:"window.location.reload(true)"})
	}

	function openOptions(){
		var url=chrome.extension.getURL('options.html')
		chrome.tabs.getAllInWindow(null,function(tabs){
			for (var i=0;i<tabs.length;i++){
				if (tabs[i].url == url){
					chrome.tabs.update(tabs[i].id, {selected:true})
					window.close()
					return;
				}
			}
			chrome.tabs.create({selected:true,url:url})
			//window.close()
		})	
	}
	// and now..
	showStatus()
	calcWhiteMap()	
	chrome.extension.onRequest.addListener(
		function(request, sender, sendResponse) {
			if(request=='getData'){
				var tab=sender.tab;
				var tabStatus=updatePageAction(tab.id,tab.url)
				if (tabStatus == ALLOWED || tabStatus == ALLOWED_BY_EXTENSION){
					sendResponse({excluded:true})
				}else{
					sendResponse({prefs:prefs.pack(function(name){return name != 'data.whiteList'})})
				}
			}else if (request=='allowAlways'){
				var tab=sender.tab;
				allowOrBlock(tab.id,tab.url,true)
				chrome.tabs.sendRequest(tab.id,{type:'allow'})
			}else if (request=='allowTemp'){
				var tab=sender.tab;
				chrome.tabs.sendRequest(tab.id,{type:'allow'})
			}
			else if (request=="openOptions"){
				openOptions()
			}
		}
	);	