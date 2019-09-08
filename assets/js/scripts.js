/*
============================================
; Title:  scripts.js
; Author: April Auger
; Date:   7 September 2019
; Description: Script file used for header effects.
;===========================================
*/

$(document).ready(function () {
	'use strict';

	// Menu background on scroll
	$(document).scroll(function () {
		var $nav = $(".navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	// Hide jumbotron content
	$('.signature').css('opacity', 0);
	$('.jumbotron-sub-title').css('opacity', 0);
	$('.jumbotron-btn').css('opacity', 0);

	// Fade in jumbotron content
	$('.signature').animate({'opacity':'1'}, 1000);
	$('.jumbotron-sub-title').animate({'opacity':'1'}, 2000);
	$('.jumbotron-btn').animate({'opacity':'1'}, 3000);
});
