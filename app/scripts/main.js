
$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({offset: -50, speed: 350}); // correction par rapport au décalage de la nav barre fixe + acceleration de la vitesse du smoothScroll 
});

var easter_egg = new Konami(function() { alert('Konami code!')});


//1 récupérer les infos nécessaires
//2 remplacer un element du dom par un autre
//3 creer un chart à la main
// Mix du tout :)


$('.progress-bar').each( function (){
var val= $(this).attr('aria-valuenow'); // on récupère la veleure
var color = $(this).css('background-color'); // on récupère la couleur
var newDomElem = $('<canvas ></canvas>'); //création du nouvel élément DOM
$(this).parent().replaceWith(newDomElem); // on remplace le parent .progress-bar (.progress) par nos nouveaux canvas

var data = {
    labels: [
        val + '% maitrisé',
    ],
    datasets: [
        {
            data: [val, 100-val],
            backgroundColor: [
                color,
                '#FFFFFF'
            ],
			borderColor: [
                color,
                '#FFFFFF'
            ],
            hoverBackgroundColor: [
                color,
                '#FFFFFF'
            ],
			hoverBorderColor: [
                color,
                '#FFFFFF'
            ]
        }]
};

var myDoughnutChart = new Chart(newDomElem, {
    type: 'doughnut',
    data: data,
	options: {
			tooltips:{enabled:false}
			}
});


});

