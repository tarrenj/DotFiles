// common utility functions
function css(el,vals){var style=el.style;for (var i in vals){style[i]=vals[i];}}
function remove(el){el.parentNode.removeChild(el)}
function select(selector, el){if (!el) {el = document;}return el.querySelector(selector);}
function selectAll(selector, el){if (!el) {el = document;}return el.querySelectorAll(selector);}
function build(type,atts,inner){
    var e = document.createElement(type);
    for (var att in atts) 
		e.setAttribute(att, atts[att]);
	if (inner != null)
		e.innerHTML=inner;
    return e;
}
function append(el,innerHTML){
	var newcontent = document.createElement('div');
	newcontent.innerHTML =innerHTML
	el.appendChild(newcontent.firstChild);
	return el.lastChild
}
/*
function find(selector,els){
	var result=[]
	each(els,function(e){
		each(selectAll(selector,e),function(e1){
			result.push(e1)
		})
	})
	return result
}
*/
function each(arr,callback){
	if (typeof arr == 'string')
		each(selectAll(arr),callback)
	else
		for (var i=0,length=arr.length;i<length;i++){var e=arr[i];callback.call(arr,e,i)}
}

function evt(el,type,callback){
	if (typeof el == 'string'){
		each(selectAll(el),function(e){
			e.addEventListener(type,callback)
		})
	}else if (el.length != null){ // array
		each(el,function(e){evt(e,type,callback)})
	}else
		el.addEventListener(type,callback)
}

// general chrome function
function eachTab(windowId,callback){
	if (typeof windowId == 'function'){
		callback=windowId
		windowId=null
	}
	if (windowId == null){
		chrome.windows.getAll({populate:true},function(windows){
			for (var i=0;i<windows.length;i++){
				var tabs = windows[i].tabs
				for (var j=0;j<tabs.length;j++)
					callback.call(this,tabs[j])
			}
		})	
	}else{
		chrome.tabs.getAllInWindow(windowId,function(tabs){
			for (var j=0;j<tabs.length;j++)
				callback.call(this,tabs[j])		
		})
	}
}
function eachView(predicate,cmd){
	if (cmd == null){
		predicate=null
		cmd=predicate
	}
	var views = chrome.extension.getExtensionTabs();
	for (var i=0,length=views.length;i<length;i++){
		var view=views[i]
		var perform=true;
		if (predicate != null){
			var p=view.window[predicate]
			perform=typeof p == 'function' ? p.call(window) : p
		}
		if (perform)
			view.window[cmd]()
	}	
}
// preferences
(function(){
	const PREFS_CLASS='._pref_';
	const PREFS_ATT_NAME='name';
	const PREFIX='';//'$pref.';
	const SYM="_";
	var binds=[]
	function bindingHandler(evt){
		var key=evt.key
		if (key.indexOf(PREFIX) != 0)
			return;
		// verify a pref was predefined
		if (!PREFS.hasOwnProperty(key))
			return
		var prefName=key.substring(PREFIX.length)
		for (var i=0;i<binds.length;i++){
			var bind=binds[i]
			if (bind.prefName == prefName)
				if (typeof bind.binded == 'function')
					bind.binded.call(bind.context,prefName,prefs[prefName])
				else
					bind.context[bind.binded] = prefs[prefName]//not evt.newValue because defaults are null
		}	
	}
	
	var PREFS = {}
	prefs = function(name,defaultValue){
		if (defaultValue == null)
			if (name == null)
				throw "name and defaultValue must have a concrete values"
			else
				return prefs[name]
		if (typeof name != 'string')
			throw "name is not of type string"
		PREFS[name]=defaultValue
		prefs.__defineGetter__(name,function(){
			var result=localStorage[PREFIX+name]
			if (result == null){
				result = PREFS[name]
				if (typeof result == 'object')
					return JSON.parse(JSON.stringify(result)) // clone
				return result
			}
			if (result.indexOf('json://') == 0){
				result=JSON.parse(result.substring(7))
				return result
			}
			if (typeof result == 'string'){
				if (result == 'false')
					return false;
				else if (result == 'true')
					return true;
				if (typeof parseInt(result) != 'number' && result !='NaN')
					return result
				else if (parseInt(result) == result)
					return parseInt(result)
				else if (parseFloat(result) == result)
					return parseFloat(result)
			}			
			return result
		})
		prefs.__defineSetter__(name,function(val){
			var defaultValue=PREFS[name]
			var _name=PREFIX+name
			if (typeof val == 'object'){
				var _val=JSON.stringify(val)
				/*
				if (JSON.stringify(defaultValue) == _val)
					delete localStorage[_name]	
				else
				*/
					localStorage[_name]='json://'+_val
			}else if (defaultValue == val && localStorage[_name] != null) // the != null to avoid raising storage event handler
				delete localStorage[_name]
			else
				localStorage[_name]=val				
		})
	}
	prefs.reset = function(filter){
		for (var i in PREFS)
			if (typeof filter != 'function' || (typeof filter == 'function' && filter.call(null,i)))
				delete localStorage[PREFIX+i]
	}
	prefs.pack = function(filter){
		var map={}
		for (var i in PREFS)
			if (typeof filter != 'function' || (typeof filter == 'function' && filter.call(null,i)))
				map[i]=prefs[i]
		return map;
	}
	prefs.bind = function(context,prefName,binded){
		if (typeof context == 'string'){
			binded=prefName
			prefName=context
			context=window
		}else if (typeof context != 'object'){
			throw 'bad context argument of bind function'
		}
		if (typeof prefName != 'string')
			throw 'bad prefName argument of bind function'
		if (binded == null)
			binded=prefName;			
		if (typeof binded == 'string')
			context[binded]=prefs[prefName]
		else if (typeof binded != 'function')
			throw 'bad binded argument of bind function'
		binds.push({context:context,prefName:prefName,binded:binded})
	}
	
	var _prefs=window.prefs;
	function updatePref(event){
		if (_applyBtn)
			_applyBtn.disabled=false
		var target=event.target;
		var pref=target.getAttribute(PREFS_ATT_NAME).replace(SYM,'.')
		var context = _autoApply ? prefs : _tempVals
		switch (target.nodeName){
		case 'SELECT':
			context[pref]=target.value
			break;
		case 'INPUT':
			switch(target.type){
				case 'checkbox': 
					context[pref]=target.checked
					break;
				case 'radio':				
				case 'text':
					context[pref]=target.value		
			}
			break;
		
		default: 
		}
	}
	
	function updateInput(name,value){
		each(PREFS_CLASS+'['+PREFS_ATT_NAME+'="'+name.replace('.',SYM)+'"]',loadPref)
	}
	
	function loadPref(e){
		var pref=e.getAttribute(PREFS_ATT_NAME).replace(SYM,'.')
		switch(e.nodeName){
			case 'SELECT':
				e.value=_prefs[pref]
				break;
			case 'INPUT':
				switch(e.type){
					case 'text':
						e.value = _prefs[pref]
						break;
					case 'checkbox':
						e.checked = _prefs[pref] ? true : false
						break;
					case 'radio':
						e.checked = (e.value == _prefs[pref])
						break;
				}
		}	
	}

	var _tempVals={}
	var _autoApply;
	var _applyBtn;
	var _okBtn;
	prefs.bindForm = function(applyBtn,okBtn){
		_autoApply=applyBtn == null && okBtn == null;
		_applyBtn=applyBtn;
		_okBtn=okBtn
		if (applyBtn)
			applyBtn.disabled=true
		each(PREFS_CLASS,function(e){
			loadPref(e)
			var prefName = PREFIX + e.getAttribute(PREFS_ATT_NAME).replace(SYM,".")
			prefs.bind(window,prefName,updateInput)
		})
		evt('select'+PREFS_CLASS+',input'+PREFS_CLASS,'change',updatePref)	
	}
	prefs.applyForm = function(filter){
		if (_applyBtn)
			_applyBtn.disabled=true
		for (var i in _tempVals)
			if (typeof filter != 'function' || (typeof filter == 'function' && filter.call(null,i))){
				prefs[i.replace(SYM,".")]=_tempVals[i]
			}
	}
	
	window.addEventListener('storage', bindingHandler, false);
})();