"use strict";$(document).ready(function(){$("a").smoothScroll({offset:-50,speed:350}),$(".progress-bar").each(function(){var o=$(this).attr("aria-valuenow"),a=$(this).css("background-color"),r=$("<canvas ></canvas>");$(this).parent().replaceWith(r);var t={labels:[o+"% maitrisé"],datasets:[{data:[o,100-o],backgroundColor:[a,"#FFFFFF"],borderColor:[a,"#FFFFFF"],hoverBackgroundColor:[a,"#FFFFFF"],hoverBorderColor:[a,"#FFFFFF"]}]};new Chart(r,{type:"doughnut",data:t,options:{tooltips:{enabled:!1}}})})});