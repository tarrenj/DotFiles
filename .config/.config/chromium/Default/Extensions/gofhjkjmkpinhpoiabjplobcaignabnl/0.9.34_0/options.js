(function(){
	
			const OPTIONS_PAGE=true
			var whiteList=prefs['data.whiteList']
			prefs.bind('data.whiteList',refreshWhiteList)
			
			function refreshWhiteList(){
				whiteList=prefs['data.whiteList']
				refreshTable()
			}
			
			function refreshTable(){
				function enableHostAtIndex(e){
					e.stopPropagation()
					var index=this.parentNode.parentNode.getAttribute('index');
					var enabled=this.checked
					whiteList[index].enabled=enabled
					select('#applyBtn').disabled=false
				}
				function d(e){
					$(this).toggleClass('selected')
					if ($('.selected').size() > 0)
						$('#remove').get(0).disabled=false
					else
						$('#remove').get(0).disabled=true				
				}
				var table = $('#whiteList')
				$('tbody',table).html('')
				if (whiteList.length > 0)
					$('#clear').get(0).disabled=false
				else
					$('#clear').get(0).disabled=true
				$('#remove').get(0).disabled=true
				for (var i=0,length=whiteList.length;i<length;i++){
					var checked=whiteList[i].enabled ? 'checked':''
					$('<tr index="'+i+'"><td class="tt"><input type="checkbox" '+checked+'/></td><td class="host">'+whiteList[i].host+'</td></tr>').appendTo(table)
				}
				$('table.whitelist tbody > tr').click(d).find('input').click(enableHostAtIndex)
			}
			
			function remove(){
				var indexes=[]
				$('.selected').each(function(i){
					indexes.push(this.getAttribute('index'))
				})
				for (var i=0,length=indexes.length;i<length;i++)
					delete whiteList[indexes[i]]
				var newWhiteList=[]
				for (var i=0,length=whiteList.length;i<length;i++){
					var wl=whiteList[i]
					if (wl != null)
						newWhiteList.push(wl)
				}
				whiteList=newWhiteList;
				select('#applyBtn').disabled=false
				refreshTable()
			}
			
			function _clear(){
				whiteList=[]
				select('#applyBtn').disabled=false
				refreshTable()
			}
			
			function apply(){
				prefs.applyForm()
				prefs['data.whiteList']=null; // workaround the problem of unchanged whitelist on this form while on other form the user already changed the list
				prefs['data.whiteList']=whiteList
				tempMap={}
			}
			
			function esc(e){
				if (e.keyCode == 27)
					cancelAddEdit()
			}
			
			function enter(e){
				if (e.keyCode == 13)
					okAddEdit()
			}			
			
			function add(){
				window.addEventListener('keyup',esc)
				select("#editBox").style.display="block"
				select("#addEditOkbtn").disabled=true
				select("#hostBox").focus()
			}
			
			function editBoxKey(){
				select('#labelHostExists').style.display='none'
				if (select("#hostBox").value.length == 0){
					select('#addEditOkbtn').disabled=true
					window.removeEventListener('keyup',enter)
				}else{
					select('#addEditOkbtn').disabled=false
					window.addEventListener('keyup',enter)
				}
			}
			
			function cancelAddEdit(){
				select("#hostBox").value=""
				select("#editBox").style.display="none"
				select('#labelHostExists').style.display='none'
				select("#add").focus()
			}
			
			var tempMap={}
			function okAddEdit(){
				var bg=chrome.extension.getBackgroundPage()
				try{
					var host=bg.getHost(select("#hostBox").value)
				}catch(e){
					var host=select("#hostBox").value
				}
				var whiteMap=bg.whiteMap
				if(whiteMap[host] != null || tempMap[host] != null){
					select('#labelHostExists').style.display="inline"
					return
				}
				tempMap[host]={}
				whiteList.push({host:host,enabled:true})		
				select('#labelHostExists').style.display='none'
				select("#hostBox").value=""
				select("#editBox").style.display="none"
				select("#add").focus()
				refreshTable()
				select('#applyBtn').disabled=false;
			}		
			$(function(){
				$('#editBox').click(cancelAddEdit);
				$('#editBox-2').click(function(){
					return false;
				});
				$('#hostBox').keyup(editBoxKey);
				$('#add').click(add);
				$('#remove').click(remove);
				$('#clear').click(_clear);
				$('#okBtn').click(function(){
					apply();window.close();
				});
				$('#cancel').click(function(){
					window.close()
				});
				$('#applyBtn').click(function(){
					apply()
				});
				$('#addEditOkbtn').click(okAddEdit);
				$('#cancelAddEdit').click(cancelAddEdit);			
				prefs.bindForm(select('#applyBtn'),select('#okBtn'))
				refreshTable()	
				$("#tabs").tabs().bind('tabsselect',function(event,ui){
					prefs['options.selectedTab']=ui.index
				});//.tabs('select',prefs['options.selectedTab'])
				
			});	
}());