

$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({offset: -50}); // correction par rapport au décalage de la nav barre fixe
});



/*
	$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			var dist =$(page).offset().top - 40; // correction perso pour éviter un décalage
			$('html, body').animate( { scrollTop:dist}, speed ); // Go
			return false;
		});
	});

    */
