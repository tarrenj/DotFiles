function onYouTubePlayerReady(player) {
	try{
		extPlayer = player;
		if(typeof extPlayer == "string"){
			extPlayer = document.getElementById(extPlayer);
		}
		if(typeof movie_player != 'undefined'){
			extPlayer = movie_player;
		}
		extPlayer.addEventListener("onStateChange", function(newState){
		      if(newState == 1) updateQuality();
		});
		updateQuality();
		setTimeout(updateQuality,3000);
	}
	catch(e){}
};

function updateQuality(){
	var aq = extPlayer.getAvailableQualityLevels();
	if(aq.indexOf(quality) == -1){
		extPlayer.setPlaybackQuality(aq[0]);
	}
	else{
		extPlayer.setPlaybackQuality(quality);
	}
};

function setup(){
	chrome.runtime.sendMessage({method:"getSettings"}, function(settings) {
		var quality = settings.ytQuality ? settings.ytQuality : "hd720";
		var size = settings.ytSize ? settings.ytSize : "1";
		var scriptText = "var quality = '" + quality + "'; " + onYouTubePlayerReady.toString() + "; " + updateQuality.toString();
		if(size == "1"){
			scriptText += "document.cookie = 'wide = 1';"
		}
		if(settings.enabled == 1){
			injectScript(scriptText);
		}
	});
}

function injectScript(scriptText){
	var script = document.createElement("script");
	script.textContent =  scriptText;
	document.head.appendChild(script);
}

$(document).ready(setup);

function updateQualityPlease(){
	injectScript("setTimeout(updateQuality,3000)");
}