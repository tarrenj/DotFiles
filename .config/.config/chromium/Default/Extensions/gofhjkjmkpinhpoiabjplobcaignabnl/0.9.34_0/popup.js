			var pageStatus;
			var askBeforeHidePageAction=prefs['pageAction.askBeforeHide']
											
			// Allow/Block
			function allowOrBlock(){
				chrome.tabs.getSelected(null,function(tab){
					if (pageStatus == 2){
						var bg=chrome.extension.getBackgroundPage()
						var request = bg.externalWhiteListMap[bg.getHost(tab.url)];
						document.body.style.width = "250px";
						document.querySelector('#external-extension-request').style.display="block"
						document.querySelector('#external-extension-request').innerText=
						"Name: " + request.extension_name + "\n\n"+
						"Id:" + request.extension_id + "\n\n" +
						"Nessage:\n" + request.user_message;
						
						document.querySelector('#menu').style.display="none"							
						return;
					}else{
						var enable = pageStatus == 0 ? false : true
						chrome.extension.getBackgroundPage().allowOrBlock(tab.id,tab.url,enable)
						chrome.tabs.sendRequest(tab.id,enable?{type:'allow'}:{type:'block',prefs:prefs.pack()})
						window.close()
					}
				})
			}

			// Options
			function options(){
				chrome.extension.getBackgroundPage().openOptions()
				window.close()
			}
						
			// Hide Page Action
			function hidePageAction(){
				if (!askBeforeHidePageAction)
					prefs['pageAction.askBeforeHide']=false
				prefs['pageAction.enabled']=false
				window.close()	
			}
			
			function popupHidePageAction(){
				if (askBeforeHidePageAction){
					document.body.style.width="250px"
					document.body.style.height="130px"
					document.querySelector('#removePageAction').style.display="block"
					document.querySelector('#menu').style.display="none"				
				}else
					hidePageAction()
			}

			// Enable / Disable
			function toggleEnable(){
				prefs['general.enabled']=!prefs['general.enabled']
				window.close()
			}
			
			function load(){
				var enabled=prefs['general.enabled']
				document.querySelector('#toggleEnable').innerText=(enabled ? 'Disable' : 'Enable')+" Flash Block"
				chrome.tabs.getSelected(null,function(tab){
					pageStatus = chrome.extension.getBackgroundPage().updatePageAction(tab.id,tab.url)
					var allowOrBlock=document.querySelector('#allowOrBlock')
					if (pageStatus == 2){
						allowOrBlock.innerText="Another extension requested to allow Flash on this host.\nDetails.."
						allowOrBlock.className='row';
					}else if (pageStatus == 0) {
						allowOrBlock.innerText="Always block flash on this site"
						allowOrBlock.className='row block'
					}else{
						allowOrBlock.innerText="Always allow flash on this site"
						allowOrBlock.className='row allow'
					}
					if (tab.url.indexOf('chrome') == 0 || !enabled){
						allowOrBlock.className='row disable'
						allowOrBlock.onclick=null
						document.querySelector('#toggleEnable').className='row allow'
					}
				})
				document.querySelector('#options').addEventListener('click',options);
				document.querySelector('#popuphide').addEventListener('click',popupHidePageAction);
				document.querySelector('#toggleEnable').addEventListener('click',toggleEnable);
				document.querySelector('#allowOrBlock').addEventListener('click',allowOrBlock);
				document.querySelector('#askBefore').addEventListener('click',function(){
					window.askBeforeHidePageAction=!this.checked;
				});
				document.querySelector('#hidePageAction').addEventListener('click',hidePageAction);
				document.querySelector('#wClose').addEventListener('click',function(){
					window.close()
				});
				
				
			}
			window.onload=load;