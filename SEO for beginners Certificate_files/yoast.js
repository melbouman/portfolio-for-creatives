(function (factory) {
	typeof define === 'function' && define.amd ? define('courseNavigation', factory) :
	factory();
})((function () { 'use strict';

	jQuery( document ).ready( function() {
		var topicPage = document.querySelector( ".single-sfwd-topic" );
		var lessonPage = document.querySelector( ".single-sfwd-lessons" );

		/**
		 * Simulates the click of the expand-button to expand the lesson you're currently in.
		 *
		 * @param {object} parent The DOM element that contains the button to expand the navigation.
		 *
		 * @returns {void}
		 */
		function expandNavigation( parent ) {
			var button = parent.querySelector( ".ld-expand-button" );

			if ( ! button ) {
				return;
			}

			// Using click because simply adding the `expanded` class is not enough.
			button.click();
		}

		/**
		 * Gets the expand button for the current topic and corresponding lesson.
		 *
		 * @returns {void}
		 */
		function onTopicPage() {
			var currentItem = document.querySelector( ".ld-is-current-item" );
			var parent = currentItem.closest( ".ld-item-list-item" );

			expandNavigation( parent );
		}

		/**
		 * Gets the expand button for the current lesson, based on the ID set by Learndash in the ldVars object.
		 *
		 * @returns {void}
		 */
		function onLessonPage() {
			var parent;

			if ( ! window.ldVars || ! window.ldVars.postID ) {
				return;
			}

			parent = document.querySelector( "#ld-expand-" + window.ldVars.postID );

			expandNavigation( parent );
		}

		// Only execute this on topics.
		if ( topicPage ) {
			onTopicPage();
		}

		// Only execute this on lessons.
		if ( lessonPage ) {
			onLessonPage();
		}
	} );

}));

(function (factory) {
	typeof define === 'function' && define.amd ? define('learndash', factory) :
	factory();
})((function () { 'use strict';

	jQuery( document ).ready( function() {
		( function( $ ) {
			$( ".wpProQuiz_loadQuiz" ).show();

			$( "[id^=wpProQuiz_]" ).on( "learndash-quiz-init", function() {
				if ( !$.fn.lightbox ) {
					return;
				}

				var haveConf = ( typeof JQLBSettings === "object" );
				var marginSize = 250;
				if ( $( window ).width() <= 1024 || $( window ).height() <= 500 ) {
					marginSize = 20;
				}

				if ( haveConf && JQLBSettings.resizeSpeed ) {
					JQLBSettings.resizeSpeed = parseInt( JQLBSettings.resizeSpeed );
				}

				var default_strings = {
					help: " Browse images with your keyboard: Arrows or P(revious)/N(ext) and X/C/ESC for close.",
					prevLinkTitle: "previous image",
					nextLinkTitle: "next image",
					prevLinkText: "&laquo; Previous",
					nextLinkText: "Next &raquo;",
					closeTitle: "close image gallery",
					image: "Image ",
					of: " of ",
					download: "Download",
				};

				$( this ).find( 'a[rel^="lightbox"]' ).lightbox( {
					adminBarHeight: $( "#wpadminbar" ).height() || 0,
					linkTarget: ( haveConf && JQLBSettings.linkTarget.length ) ? JQLBSettings.linkTarget : "_self",
					displayHelp: !!( ( haveConf && JQLBSettings.help.length ) ),
					marginSize: marginSize,
					fitToScreen: !!( ( haveConf && JQLBSettings.fitToScreen == "1" ) ),
					resizeSpeed: ( haveConf && JQLBSettings.resizeSpeed >= 0 ) ? JQLBSettings.resizeSpeed : 400,
					displayDownloadLink: !( ( haveConf && JQLBSettings.displayDownloadLink == "0" ) ),
					navbarOnTop: !( ( haveConf && JQLBSettings.navbarOnTop == "0" ) ),
					// FollowScroll: (haveConf && JQLBSettings.followScroll == '0') ? false : true,
					strings: ( haveConf && typeof JQLBSettings.help === "string" ) ? JQLBSettings : default_strings,
				} );
			} );
		}( jQuery ) );
	} );

}));

(function (factory) {
    typeof define === 'function' && define.amd ? define('navMenu', factory) :
    factory();
})((function () { 'use strict';

    /**
     * File navigation.js.
     *
     * Handles toggling the navigation menu for small screens and enables TAB key
     * navigation support for dropdown menus.
     */
    jQuery(document).ready(function($) {

        (function () {
            var container, button, menu;

            container = document.getElementById('site-navigation');
            if (!container) {
                return;
            }

            button = container.getElementsByTagName('button')[0];
            if ('undefined' === typeof button) {
                return;
            }

            menu = container.getElementsByTagName('ul')[0];

            // Hide menu toggle button if menu is empty and return early.
            if ('undefined' === typeof menu) {
                button.style.display = 'none';
                return;
            }

            menu.setAttribute('aria-expanded', 'false');
            if (-1 === menu.className.indexOf('nav-menu')) {
                menu.className += ' nav-menu';
            }

            button.onclick = function () {
                if (-1 !== container.className.indexOf('toggled')) {
                    container.className = container.className.replace(' toggled', '');
                    button.setAttribute('aria-expanded', 'false');
                    menu.setAttribute('aria-expanded', 'false');
                } else {
                    container.className += ' toggled';
                    button.setAttribute('aria-expanded', 'true');
                    menu.setAttribute('aria-expanded', 'true');
                }
            };

        })();
    });

}));

//# sourceMappingURL=yoast.js.map
