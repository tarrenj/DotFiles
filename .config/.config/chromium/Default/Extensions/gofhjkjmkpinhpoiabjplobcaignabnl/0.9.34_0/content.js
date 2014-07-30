function css(el,vals){var style=el.style;for (var i in vals){style[i]=vals[i];}}
function evt(el,type,callback,t){el.addEventListener(type,callback,t)}
function remove(el){el.parentNode.removeChild(el)}
function create(type){return document.createElement(type)}
function each(arr,callback){for (var i=0,length=arr.length;i<length;i++){var e=arr[i];callback.call(arr,e,i)}}

function showFlash(placeHolder){
	if (placeHolder == null)
		return;
	var embed = placeHolder.$embed;		
	var display = placeHolder.$display
	embed.$hidden=false
	delete placeHolders[embed.$index]
	embed.style.setProperty('display',display,'important');
	remove(placeHolder)
}
	
function click(e){
	showFlash(e.target.parentNode)
}
var _contextmenu=null;
window.addEventListener('mousedown',function(){
	if (_contextmenu == null)
		return;
	css(_contextmenu,{display:"none"})
})
function contextmenu(eee){
	if (_contextmenu == null){
		_contextmenu=create('div')
		var menuitems=create('div')
		_contextmenu.appendChild(menuitems)
		css(_contextmenu,{
			"-webkit-box-shadow":"2px 5px 10px rgba(0,0,0,0.55)",
			position:"fixed",width:"150px",height:"75px","border":"1px solid rgba(0,0,0,0.25)","background-color":"rgb(240,240,240)"})
		document.body.appendChild(_contextmenu)
		_contextmenu.addEventListener('mousedown',function(e){
			e.stopPropagation()
		},false)
		_contextmenu.oncontextmenu=function(e){
			e.stopPropagation()
			e.preventDefault()
		}
		
		function menuitemhover(e){
			css(e.target,{border:"1px solid rgb(174,207,247)",background:"rgba(174,207,247,0.15)"})
		}
		function menuitemleave(e){
			css(e.target,{border:"1px solid rgba(0,0,0,0)",background:"rgba(174,207,247,0)"})
		}	
		function prepareMenuItem(menuitem,text,f){
			css(menuitem,{"font-size":"12px","font-family":'"Arial"',display:"block !important",border:"1px solid rgba(0,0,0,0)",margin:"3px",padding:"2px",cursor:"pointer"})
			menuitem.innerText=text
			menuitem.addEventListener('mouseover',menuitemhover)
			menuitem.addEventListener('mouseout',menuitemleave)		
			menuitem.addEventListener('mousedown',f)
			menuitems.appendChild(menuitem)
			
		}

		var allowAlways=create('div')
		var allowTemp=create('div')
		var openOptions=create('div')

		prepareMenuItem(allowTemp,"Allow flash (temporary)",function(e){
			e.stopPropagation()
			e.preventDefault()		
			css(_contextmenu,{display:"none"})
			chrome.extension.sendRequest('allowTemp')
		})
		
		prepareMenuItem(allowAlways,"Allow flash (always)",function(e){
			e.stopPropagation()
			e.preventDefault()		
			css(_contextmenu,{display:"none"})
			chrome.extension.sendRequest('allowAlways')
		})
		
		prepareMenuItem(openOptions,"Options...",function(e){
			e.stopPropagation()
			e.preventDefault()		
			css(_contextmenu,{display:"none"})
			chrome.extension.sendRequest('openOptions')
		})

	}
	css(_contextmenu,{left:eee.x+"px",top:eee.y+"px",display:"block"})
	_contextmenu.element=eee.target;
	eee.preventDefault()
}
function mouseover(e){
	var iDiv=e.target;
	var bgimg= iDiv.$silverLight ? SL_IND : FLASH_IND;
	if (showIndicator==1)
		css(iDiv,{'background-image':bgimg})		
	iDiv.style.opacity=1;
}

function mouseout(e){
	var iDiv=e.target;
	if (showIndicator==1)
		css(iDiv,{'background-image':null})	
	iDiv.style.opacity=opacity;
}


function setSize(div,embed){
	var style=getComputedStyle(embed)
	var w=style.width
	var h=style.height
	css(div,{'width':w,'height':h})
	css(div,{'top':style.top,'left':style.left,'position':style.position})
}

function handleEmbed(embed){
	if (stopTemporarily)
		return;
	if (embed.nodeName == 'EMBED'){ 
		var type = embed.type
		var src = embed.src
		if (type && type.toLowerCase() == FLASH_TYPE)
			init(embed)
		else if (src.indexOf('.swf') >= 0)
			init(embed)
		else if (blockSilverLight && type && type.toLowerCase() == SL_TYPE)
			init(embed,true)
		else{			
			//console.log('not detected')
			//console.log(embed)
		}			
	}else if (embed.nodeName == 'OBJECT'){
		var type = embed.getAttribute('type')
		var classid = embed.getAttribute('classid')
		var codebase = embed.getAttribute('codebase')
		var codetype = embed.getAttribute('codetype')
		
		if (type && type.toLowerCase().indexOf(FLASH_TYPE) >= 0)
			init(embed)
		else if (codetype && codetype.toLowerCase().indexOf(FLASH_TYPE) >= 0)
			init(embed)			
		else if (classid && classid.toLowerCase().indexOf(CLSID) >= 0)
			init(embed)
		else if (codebase && codebase.toLowerCase().indexOf(CODEBASE) >= 0)
			init(embed)
		else if (src && src.toLowerCase().indexOf(SRC) >= 0)
			init(embed)
		else if (blockSilverLight && type && type.toLowerCase().indexOf(SL_TYPE) >= 0)
			init(embed,true)			
		else{			
			//console.log('not detected')
			//console.log(embed)
		}
	}
}

function init(embed,isSilverLight){
	if (embed.$discovered){ // already handled
		setSize(placeHolders[embed.$index],embed)
		return
	}else if (embed.$hidden){ // update size
		setSize(placeHolders[embed.$index],embed)
		embed.style.setProperty('display', 'none', 'important');
		return;
	}
	embed.$discovered=true
	embed.$hidden=true
	var div=create("div")
	placeHolders.push(div)
	embed.$index=placeHolders.length-1	
	div.$embed = embed;
	var style=embed.style
	/*
	var display = style.display
	if (display == null || display == '' || display == 'none')
		display = 'inline-block'
	*/
	var display='block'
	div.$display = display
	css(div,{'visibility':embed.style.visibility,'display':display,'overflow':embed.style.overflow})
	css(div,{'cursor':'pointer','textAlign':'center'})
	setSize(div,embed)
	embed.parentElement.insertBefore(div,embed);
	var iDiv=create("div")
	iDiv.$silverLight=isSilverLight
	css(iDiv,{'-webkit-transition':'opacity 150ms ease-out'})
	if (showIndicator != 2){
		css(iDiv,{'background-position':indPosition})
		var bgimg= iDiv.$silverLight ? SL_IND : FLASH_IND;
		if (showIndicator==0)
			css(iDiv,{'background-image':bgimg})
	}
	css(iDiv,{'background-repeat':'no-repeat','align':'left','text-align':'left','opacity':opacity,'border':'1px solid '+colorOver,'width':'100%','height':'100%','background-color':colorBG});
	div.appendChild(iDiv)
	embed.style.setProperty('display', 'none', 'important');
	iDiv.onclick=click
	iDiv.oncontextmenu=contextmenu;
	//iDiv.oncontextmenu=contextmenu
	iDiv.onmouseover=mouseover
	iDiv.onmouseout=mouseout
}

function monitorEmbed(e){
	if (terminate)
		return
	var embed=e.target
	function prepare(){
		// only if data loaded
		if (!dataloaded){
			//console.log('..')
			setTimeout(prepare,200)
		}else if (disabled || excluded)
			return;
		else
			handleEmbed(embed)
	}
	// node style will be ready on next thread dispatch
	setTimeout(prepare,1)
}

function handleAllEmbeds(){
	if (terminate)
		return
	// only if data loaded
	if (!dataloaded){
		//console.log('..')
		setTimeout(handleAllEmbeds,200)
		return;
	}
	if (disabled || excluded)
		return;
	else
		each(document.querySelectorAll('embed,object'),handleEmbed)
}

function domnodeinserted(e){
	if (e.target.nodeName != 'EMBED' && e.target.nodeName != 'OBJECT')
		return;
	monitorEmbed(e)
	evt(e.target,'DOMNodeInsertedIntoDocument',monitorEmbed,false) // better to catch it last, immutable event anyway
}
	
/**/
evt(window,'DOMNodeInserted',domnodeinserted,false)
evt(window,'DOMContentLoaded',function(){
	if (document.body){ // will not run on other none document such as XML
		handleAllEmbeds()
		setTimeout(handleAllEmbeds,100)
		document.body.addEventListener('load',function(){
			handleAllEmbeds()
		},true)
	}else{
		//console.log(location)
	}
},true)

var stopTemporarily=false;
chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		try{
		if (request.type == 'stop-temporarily'){
			if (blockCSSStyle){
				remove(blockCSSStyle)
				blockCSSStyle=null
			}
			stopTemporarily=true		
		}
		else if (request.type == 'block'){
			setPrefs(request.prefs)
			stopTemporarily=false;
			disabled=false
			excluded=false
			terminated=false;
			dataloaded=true;
			each(document.querySelectorAll('embed,object'),function(embed){
				if (!embed.$hidden){
					delete embed.$discovered
					delete embed.$index
				}
			})
			if (!blockCSSStyle)
				setBlockCSSStyle()
			handleAllEmbeds()
		}else if (request.type == 'allow'){
			stopTemporarily=false;
			disabled=true
			excluded=true
			terminated=false;
			dataloaded=true;
			if (blockCSSStyle){
				remove(blockCSSStyle)
				blockCSSStyle=null
			}
			each(placeHolders,showFlash)
		}
		}catch(e){
			console.log(e)
		}finally{
			sendResponse({})
		}
	}
);
/**/
var FLASH_IND='url('+chrome.extension.getURL('icon_play.png')+')';
var SL_IND='url('+chrome.extension.getURL('icon_play_sl.png')+')';
var colorOver='rgb(0,0,0)'
var colorBG='rgba(193,217,244,0.5)'
//const COLOR_OVER='rgb(220,220,220)'
//const COLOR_BG='rgb(124,23,23)'
//const COLOR_BG='rgb(203,70,70)'
//const COLOR_OUT='rgba(220,220,220,0)'
var IND_POSITIONS=['top-left','center','top','bottom']
var FLASH_TYPE = 'application/x-shockwave-flash' // embed|object type,codetype
var SL_TYPE = 'application/x-silverlight-2'
var CLSID = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' // object
var SRC=".swf"; // embed|object
var CODEBASE='swflash.cab' // object

var placeHolders=[]
var disabled=false
var excluded=false
var opacity=null
var showIndicator=null
var blockSilverLight=false
var indPosition;
var isHTML = document.querySelector('html') != null
var dataloaded = false;
var terminate = isHTML ? false : true
var blockCSSStyle=null;
// in case that chrome fails in devlivering the data, ignore all dispatched events
setTimeout(function(){
	if (!dataloaded)
		terminate=true;
},2000)

function setPrefs(prefs){
	opacity=prefs['display.opacity']
	showIndicator=prefs['display.showInd'];	
	indPosition=IND_POSITIONS[prefs['display.indPosition']]
	blockSilverLight=prefs['general.silverLight']	
}

function setBlockCSSStyle(){
	blockCSSStyle=document.createElement('style');
	blockCSSStyle.setAttribute("type","text/css");
	//blockCSSStyle.appendChild(document.createTextNode('@import url("'+chrome.extension.getURL('flashblock.css')+'");'))
	blockCSSStyle.appendChild(document.createTextNode('embed[type*="application/x-shockwave-flash"],embed[src*=".swf"],object[type*="application/x-shockwave-flash"],object[codetype*="application/x-shockwave-flash"],object[src*=".swf"],object[codebase*="swflash.cab"],object[classid*="D27CDB6E-AE6D-11cf-96B8-444553540000"],object[classid*="d27cdb6e-ae6d-11cf-96b8-444553540000"],object[classid*="D27CDB6E-AE6D-11cf-96B8-444553540000"]{	display: none !important;}'));	
	document.querySelector('html').appendChild(blockCSSStyle)
}

if (isHTML){
	chrome.extension.sendRequest('getData',function(resp){
		try{
			excluded=resp.excluded
			var prefs=resp.prefs;
			if (!excluded){
				disabled=!prefs['general.enabled']
				if (!disabled){
					setPrefs(prefs)
					setBlockCSSStyle()
					if (blockSilverLight){
						var style=document.createElement('style');
						style.setAttribute("type","text/css");
						//style.appendChild(document.createTextNode('@import url("'+chrome.extension.getURL('slblock.css')+'");'))
						style.appendChild(document.createTextNode('embed[type*="application/x-silverlight-2"],object[type*="application/x-silverlight-2"]{display: none !important;}'))
						document.querySelector('html').appendChild(style)								
					}
				}
			}
		}catch(e){
			console.log(e)
			excluded=true;
		}
		dataloaded=true	
	})
}