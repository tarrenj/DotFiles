$(function() {
	
	var save_options = function() {
		
		var notificationValue = $("#notificationCheckbox").is(':checked');
		var timeoutValue = $("#timeout").val();
		
		localStorage["notifications"] = notificationValue;
		localStorage["timeout"] = timeoutValue;
		
		$("#messages").show();
		$("#messages").fadeOut(3000);
	};
	
	var load_options = function() {
		var notifications = localStorage["notifications"];
		var timeout = localStorage["timeout"];
		
		if (notifications == "true") {
			$("#notificationCheckbox").prop("checked", true);
			$("#timeout").prop('disabled', false);
		} else {
			$("#notificationCheckbox").prop("checked", false);
			$("#timeout").prop('disabled', true);
		}
		$("#timeout").val(timeout);
	}
	
	var restore_defaults = function()
	{
		localStorage["notifications"] = false;
		localStorage["timeout"] = 3000;
		
		$("#notificationCheckbox").prop("checked", false);
		$("#timeout").val(localStorage["timeout"]);
		$("#timeout").prop('disabled', true);
	}
	
	$("#saveOptions").click(save_options);
	$("#restoreDefaults").click(restore_defaults);
	
	$("#notificationCheckbox").click(function(){
		if($(this).is(":checked") === true) {
			$("#timeout").prop('disabled', false);
		} else {
			$("#timeout").prop('disabled', true);
		}
	});
	
	load_options();
});