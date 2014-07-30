// upgrade 2009 Dec 10 v0.9.10
try{
	var oldprefs = JSON.parse(localStorage.prefs)
	if (oldprefs.optShowInd != null)
		prefs['display.showInd']=oldprefs.optShowInd;
	if (oldprefs.optIndPosition != null)
		prefs['display.indPosition']=oldprefs.optIndPosition;
	if (oldprefs.optOpacity != null){
		var opacity;
		switch (oldprefs.optOpacity){
			case "0":opacity=0;break;
			case "1":opacity=0.25;break;
			case "2":opacity=0.5;break;
			case "3":opacity=0.75;break;
			case "4":opacity=1;break;
			default:opacity=0.25;
		}
		prefs['display.opacity']=opacity
	}
	delete localStorage.prefs
}catch(e){
}
// upgrade 2009 Dec 13 v0.9.15
try{
	function u(pref){
		var value = localStorage["$pref."+pref]
		if (value != null)
			prefs[pref]=value
		delete localStorage["$pref."+pref]		
	}
	u("display.opacity")
	u("display.showInd")
	u("display.indPosition")
	u("enabled")
	u("pageAction.enabled")
	u("pageAction.askBeforeHide")
}catch(e){
}

try{
	var oldWhitelist = JSON.parse(localStorage.whiteList)
	prefs['data.whiteList']=oldWhitelist
	delete localStorage.whiteList;
}catch(e){
}

try{
	delete localStorage.deployed;
	delete localStorage.version
}catch(e){
}