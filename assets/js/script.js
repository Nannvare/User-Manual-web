/*!
 * Documenter 2.0
 * http://rxa.li/documenter
 *
 * Copyright 2011, Xaver Birsak
 * http://revaxarts.com
 *
 */
( function( $ ) {
	$(document).ready(function() {
		_load_accordion();
		_load_current();
		function _load_accordion(){
			$('.accordion>a').on("click", function() {
				var $this = $(this);
				var $parent = $(this).closest('.accordion');
				$this.toggleClass("active");
				var panel = $('>ul',$parent);
				if (panel.css("display") === "block") {
					panel.css("display", "none");
				} else {
					panel.css("display", "block");
				}
			});
		}
		function _load_current(){
			$("a",'#documenter_nav').on( 'click', function(e) {
				//$accordions = $(this).parents('.accordion');
				var $parent = $(this).parents('.accordion');
				$("a",'#documenter_nav').removeClass('current');
				$(this).addClass('current');
				$('>a',$parent).addClass('current');
			});
		}
	});
} )( jQuery );