$(document).ready(setup);

function setup(){
	
	// QUALITY
	if(localStorage.ytQuality){
		$("#QualitySelect").val(localStorage.ytQuality);
	}
	$("#QualitySelect").change(function(){
		localStorage.ytQuality = $("#QualitySelect").val();
		chrome.tabs.reload();
	})
	
	// SIZE FUNCTIONS
	if(localStorage.ytSize){
		$("#SizeSelect").val(localStorage.ytSize);
	}
	$("#SizeSelect").change(function(){
		localStorage.ytSize = $("#SizeSelect").val();
		chrome.tabs.executeScript(null,{code:"document.cookie = 'wide = " + localStorage.ytSize + "';"});
		chrome.tabs.reload();
	})
	
	chrome.runtime.sendMessage({method:"track",name:"Settings",value:""});

}