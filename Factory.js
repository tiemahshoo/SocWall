/**************************************
 TITLE: Factory.js
 CREATE DATE: 2/08/17
 PURPOSE: Processes OG API
 Original File
***************************************/

$(document).ready(function () {
	
	var pulledData;
	var showData = $('#SortingList');
	var apikey = 1;
	//GET JSON DATA
	$.get("https://api.opsgenie.com/v1/json/alert?apiKey=+"apikey"+&tinyId=3870", function(data, status){
		pulledData = JSON.parse(JSON.stringify(data));
		var tempString = 'Pulled content for an event below';
		tempString += '<li>Message: ' + pulledData.message + '</li>';
		tempString += '<li>Count: ' + pulledData.count + '</li>';
		tempString += '<li>Source: ' + pulledData.source + '</li>';
		tempString += '<li>Description: ' + pulledData.description + '</li>';
		tempString += '<li>Status: ' + pulledData.status + '</li>';
		showData.append(tempString);
	});
	
});
