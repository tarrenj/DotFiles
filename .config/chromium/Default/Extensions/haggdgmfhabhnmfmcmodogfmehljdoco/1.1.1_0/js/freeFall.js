$(function() {
"use strict";

var notificationsEnabled = false;
chrome.extension.sendMessage({method: "getLocalStorage", key: "notifications"}, function(response) { 
	if ( response.data == "true" ) {
		notificationsEnabled = true;
	} 
});

var timeout = 3000;
chrome.extension.sendMessage({method: "getLocalStorage", key: "timeout"}, function(response) { 
	timeout = response.data;
});

var url = window.location.href;

/*
 * Check breadcrums to ensure we are looking at a free fall auction
 */
var freeFall = false;
$("div.cb_breadcrumbs>a").each(function(){
	if($(this).text() === "Free Fall"){
		freeFall = true;
		return false;
	} 
});

if ( freeFall ) {
	var auctionTitle = $("span.lot_title_line_one").text();
	var priceSpan$ = $("span.lot_freefall_price :first-child");
	var currentPrice = priceSpan$.text();
	
	/*
	* Check to see if the current text is a number or if the auction is "Resetting"
	*/
	var lowestPrice = isNaN(currentPrice.substring(1)) ? null : parseFloat(currentPrice.substring(1)).toFixed(2);
	
	var freefallDiv$ = $("div.lot_freefall");
	
	var lowestPrice$ = $("<p>").addClass("lot_freefall_price_title").text("Lowest Price:");
	
	var lowestPriceValue$ = $("p.lot_freefall_price", freefallDiv$).clone();
	
	if ( lowestPrice ) {		
		lowestPriceValue$.text("$" + lowestPrice);
	} else {
		lowestPriceValue$.text("");
	}
	
	var lowPriceContainerDiv$ = $("<div>").append(lowestPrice$).append(lowestPriceValue$);
	
    freefallDiv$.prepend(lowPriceContainerDiv$);

	var newLowPriceSeen = false;
	
	priceSpan$.contentChange(function(){
		if (notificationsEnabled && $(this).text().indexOf("Resetting") != -1 && newLowPriceSeen) {
			newLowPriceSeen = false;
			chrome.extension.sendMessage({method: "Send Notification", title:auctionTitle, price:lowestPrice, timeout:timeout, url: url}, function(response) {});
		}
	
		var newPrice = parseFloat($(this).text().substring(1)).toFixed(2);
		if ( !lowestPrice || (!isNaN(newPrice) && parseFloat(newPrice) < parseFloat(lowestPrice)) ) {
			lowestPrice = newPrice;
			lowestPriceValue$.text("$" + lowestPrice);
			newLowPriceSeen = true;
		}
	});
	
}

});