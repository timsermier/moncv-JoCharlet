
$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({offset: -50, speed: 350}); // correction par rapport au décalage de la nav barre fixe + acceleration de la vitesse de smoothScroll 


	$('.progress-bar').each( function (){	// Pour chaque <div class=".progress-bar">
	var val= $(this).attr('aria-valuenow'); // on récupère la valeure
	var color = $(this).css('background-color'); // on récupère la couleur
	var newDomElem = $('<canvas ></canvas>'); //création du nouvel élément DOM
	$(this).parent().replaceWith(newDomElem); // on remplace le parent .progress-bar (.progress) par nos nouveaux canvas
	
	var data = {
		labels: [
			val + '% maitrisé', // génération du label avec la valeur
		],
		datasets: [
			{
				data: [val, 100-val], // Valeure utilisée sur 100, le 100% - la valeure utilisée pour faire la zone blanche
				backgroundColor: [
					color, 		// background color de la partie affichée du doughnut
					'#FFFFFF'  	// background color de la partie trensparante du doughnut (même couleur que le fond de la page pour simuler une trensparance)
				],
				borderColor: [
					color, 		// border color de la partie affichée du doughnut
					'#FFFFFF' 	// border color de la partie trensparante du doughnut (même couleur que le fond de la page pour simuler une trensparance)
				],
				hoverBackgroundColor: [
					color, 		//hover background color de la partie affichée du doughnut (même couleur que backgroundColor pour ne pas faire "d'animation hover" )
					'#FFFFFF'	//hover background color de la partie trensparante du doughnut (même couleur que le fond de la page pour simuler une trensparance et même couleur que backgroundColor pour ne pas faire "d'animation hover")
				],
				hoverBorderColor: [
					color, 		//hover background color de la partie affichée du doughnut (même couleur que backgroundColor pour ne pas faire "d'animation hover" )
					'#FFFFFF'	//hover background color de la partie trensparante du doughnut (même couleur que le fond de la page pour simuler une trensparance et même couleur que backgroundColor pour ne pas faire "d'animation hover")
				]
			}]
	};
	
		var myDoughnutChart = new Chart(newDomElem, {
			type: 'doughnut',
			data: data,
			options: {
					tooltips:{enabled:false} // désactivation du tooltips pour éviter de remarquer la zone trensparante 
					}
		});
	
	});

});

