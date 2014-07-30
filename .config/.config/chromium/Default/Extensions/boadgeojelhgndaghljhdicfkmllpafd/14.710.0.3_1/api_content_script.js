var b=function(){this.g=!1;this.b=window.location.origin},
e=function(){};
b.prototype.a=function(a){this.g&&console.info("[ContentMessenger] "+a)};
b.prototype.init=function(){this.a("Initializing CV ContentMessenger");chrome.extension.onMessage.addListener(this.f.bind(this));window.addEventListener("message",this.e.bind(this),!1)};
b.prototype.e=function(a){a.source==window&&a.data&&"CastApi"==a.data.target&&(this.a("Getting message from app: "+JSON.stringify(a.data)),this.c("v1_app_request",a.data,this.d.bind(this)))};
b.prototype.d=function(a){this.a("Extension response: "+JSON.stringify(a));window.postMessage(a,this.b)};
b.prototype.f=function(a,c,d){if("string"!=typeof a)throw"Expecting string from extension. But get: "+JSON.stringify(a);a=JSON.parse(a);"background"==a.source&&"content"==a.target&&(this.a("Getting message from extension: "+JSON.stringify(a)),window.postMessage(a.content,this.b),d&&d({}))};
b.prototype.c=function(a,c,d){var f={source:"content",target:"background",type:a,content:c,windowUrl:window.location.href};this.a("Sending message to extension: "+JSON.stringify(f));try{chrome.extension.sendMessage(JSON.stringify(f),d||e)}catch(m){this.a("Failed to send message to extension: "+m.message),"v1_app_request"==a&&window.postMessage({source:c.target,target:c.source,seq:c.h,type:"ReloadRequest"},this.b)}};var g=g||!1;if(!g&&"true"==document.documentElement.getAttribute("data-cast-api-enabled")){var g=!0,h=new b;h.init();var k=document.createElement("script");k.src=chrome.extension.getURL("api_script.js");(document.head||document.documentElement).appendChild(k);var l=function(){window.removeEventListener("unload",l,!1);h.c("page_unload",{})};
window.addEventListener("unload",l,!1)};
