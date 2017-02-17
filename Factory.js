/**************************************

 TITLE: Factory.js
 CREATE DATE: 2/08/17
 PURPOSE: Processes OG API
 Original File
***************************************/
var my_time;

function pageScroll() {
		var objTable = document.getElementById("SortingTable");
		var objDiv = document.getElementById("SortingList");
			objDiv.scrollTop = objDiv.scrollTop + 1;
			if (objDiv.scrollTop == (objDiv.scrollHeight - 325)) {
			objDiv.scrollTop = 0;

		}

		 my_time = setTimeout('pageScroll()', 25);
	};

$(document).ready(function () {

	var pulledData;
	var norCount = $('#NorCount');
	var gosCount = $('#GosCount');
	var dotCount = $('#DotCount');
	var tmf1Count = $('#Tmf1Count');
	var tmf2Count = $('#Tmf2Count');
	var thgCount = $('#ThgCount');
	var rilCount = $('#RilCount');
	var sepCount = $('#SepCount');
	var schCount = $('#SchCount');
	var SortingList = $('#SortingTable');

	var apiKey = ""
	var urlAlert = "https://api.opsgenie.com/v1/json/alert?apiKey=";
	var urlAlertCount = "https://api.opsgenie.com/v1/json/alert/count?apiKey=";
	var openAlerts = "&status=open&limit=20"

	function rollingList(){
		$.get(urlAlert + apiKey + openAlerts, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempArray = [];
			var tempString = "";
				for(i = 0; i < pulledData.alerts.length; i++){
					tempArray.push(pulledData.alerts[i].message);
					console.log(tempArray[i]);
					tempString+='<tr><td>'+tempArray[i]+'</td><td>';
					};
					document.getElementById('SortingTable').innerHTML+= tempString;
				});
					$("#SortingList").mouseover(function() {
					clearTimeout(my_time);
				}).mouseout(function() {
					pageScroll();
				});

	};

	function TpH(){
		var timeHourAgo = 1000*60*60;
		var timeToCheck = (Date.now() - timeHourAgo) * 1000000;
		var urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=NOR";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("NorTag").style.color = "YELLOW";				document.getElementById("NorCount").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("NorTag").style.color = "RED";				document.getElementById("NorCount").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("NorTag").style.color = "PURPLE";				document.getElementById("NorCount").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			norCount.append(tempString);
		});


		urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=GOS";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("GosTag").style.color = "YELLOW";				document.getElementById("GosCount").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("GosTag").style.color = "RED";				document.getElementById("GosCount").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("GosTag").style.color = "PURPLE";				document.getElementById("GosCount").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			gosCount.append(tempString);
		});

		urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=DOT";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("DotTag").style.color = "YELLOW";				document.getElementById("DotCount").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("DotTag").style.color = "RED";				document.getElementById("DotCount").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("DotTag").style.color = "PURPLE";				document.getElementById("DotCount").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			dotCount.append(tempString);
		});

		urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=TMF1";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("Tmf1Tag").style.color = "YELLOW";				document.getElementById("Tmf1Count").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("Tmf1Tag").style.color = "RED";				document.getElementById("Tmf1Count").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("Tmf1Tag").style.color = "PURPLE";				document.getElementById("Tmf1Count").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			tmf1Count.append(tempString);
		});

		urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=TMF2";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("Tmf2Tag").style.color = "YELLOW";				document.getElementById("Tmf2Count").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("Tmf2Tag").style.color = "RED";				document.getElementById("Tmf2Count").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("Tmf2Tag").style.color = "PURPLE";				document.getElementById("Tmf2Count").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			tmf2Count.append(tempString);
		});

		urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=THG";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("ThgTag").style.color = "YELLOW";				document.getElementById("ThgCount").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("ThgTag").style.color = "RED";				document.getElementById("ThgCount").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("ThgTag").style.color = "PURPLE";				document.getElementById("ThgCount").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			thgCount.append(tempString);
		});

		urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=RIL";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("RilTag").style.color = "YELLOW";				document.getElementById("RilCount").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("RilTag").style.color = "RED";				document.getElementById("RilCount").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("RilTag").style.color = "PURPLE";				document.getElementById("RilCount").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			rilCount.append(tempString);
		});

		urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=SEP";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("SepTag").style.color = "YELLOW";				document.getElementById("SepCount").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("SepTag").style.color = "RED";				document.getElementById("SepCount").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("SepTag").style.color = "PURPLE";				document.getElementById("SepCount").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			sepCount.append(tempString);
		});

		urlString = urlAlertCount + apiKey + "&createdAfter=" + timeToCheck + "&tags=SCH";

		$.get(urlString, function(data,status){
			pulledData = JSON.parse(JSON.stringify(data));
			var tempString = "";
			if(pulledData.count >= 1){
				document.getElementById("SchTag").style.color = "YELLOW";				document.getElementById("SchCount").style.color = "YELLOW";
			}
			if(pulledData.count >= 5){
				document.getElementById("SchTag").style.color = "RED";				document.getElementById("SchCount").style.color = "RED";
			}
			if(pulledData.count >= 10){
				document.getElementById("SchTag").style.color = "PURPLE";				document.getElementById("SchCount").style.color = "PURPLE";
			}

			tempString += pulledData.count;
			schCount.append(tempString);
		});

	}


	function countDetector(){
		window.onload = function () {
			var chart = new CanvasJS.Chart("CountDetector",
			{
				backgroundColor: null,
				title:{
					text: "Count Detector (not functional)",
					fontColor: "white"
				},
				legend:{
					fontSize: 10,
					fontColor: "white"
				},
				data: [
				{
					type: "pie",
					showInLegend: true,
					toolTipContent: "{y} - #percent %",
					yValueFormatString: "#0.#,,. Million",
					legendText: "Test",
					dataPoints: [
						{ y: 4181563},
						{ y: 2175498},
						{ y: 3125844},
						{ y: 1176121},
						{ y: 1727161},
						{ y: 5000000},
						{ y: 1717786}
					]
				}
				]
			});
			chart.render();
		}
	}

	pageScroll();
	TpH();
	countDetector();
	rollingList();
});
