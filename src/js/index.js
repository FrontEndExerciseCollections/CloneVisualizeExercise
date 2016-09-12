/**
 * Created by One on 9/10/16.
 */
console.log("hello, One");

$(function () {
    var $window = $(window),
        $body = $('body'),
        $warpper = $('.warp');

    skel.breakpoints({
        xlarge:	'(max-width: 1680px)',
        large:	'(max-width: 1280px)',
        medium:	'(max-width: 980px)',
        small:	'(max-width: 736px)',
        xsmall:	'(max-width: 480px)'
    });

    $body.addClass('is-loading');
    $window.on('load', function () {
        $body.removeClass('is-loading');
    });

    $window.on('load', function() {

        $('.pictures').poptrox({
            preload:                    false,          // If true, preload fullsize images in
                                                        // the background
            baseZIndex:                 1000,           // Base Z-Index
            fadeSpeed:                  300,            // Global fade speed
            overlayColor:               '#000000',      // Overlay color
            overlayOpacity:             0.6,            // Overlay opacity
            windowMargin:               50,             // Window margin size (in pixels; only comes into
                                                        // play when an image is larger than the viewport)
            windowHeightPad:            0,              // Window height pad
            selector:                   'a',            // Anchor tag selector
            caption:                    null,           // Caption settings (see docs)
            popupSpeed:                 300,            // Popup (resize) speed
            popupWidth:                 200,            // Popup width
            popupHeight:                100,            // Popup height
            popupIsFixed:               false,          // If true, popup won't resize to fit images
            useBodyOverflow:            false,           // If true, the BODY tag is set to overflow: hidden
                                                        // when the popup is visible
            usePopupEasyClose:          true,           // If true, popup can be closed by clicking on
                                                        // it anywhere
            usePopupForceClose:         false,          // If true, popup can be closed even while content
                                                        // is loading
            usePopupLoader:             true,           // If true, show the popup loader
            usePopupCloser:             true,           // If true, show the popup closer button/link
            usePopupCaption:            true,          // If true, show the popup image caption
            usePopupNav:                false,          // If true, show (and use) popup navigation
            usePopupDefaultStyling:     true,           // If true, default popup styling will be applied
                                                        // (background color, text color, etc)
            popupBackgroundColor:       '#FFFFFF',      // (Default Style) Popup background color (when
                                                        // usePopupStyling = true)
            popupTextColor:             '#000000',      // (Default Style) Popup text color (when
                                                        // usePopupStyling = true)
            popupLoaderTextSize:        '2em',          // (Default Style) Popup loader text size
            popupCloserBackgroundColor: '#fff',      // (Default Style) Popup closer background color
                                                        // (when usePopupStyling = true)
            popupCloserTextColor:       '#333',      // (Default Style) Popup closer text color (when
                                                        // usePopupStyling = true)
            popupCloserTextSize:        '20px',         // (Default Style) Popup closer text size
            popupPadding:               10,             // (Default Style) Popup padding (when
                                                        // usePopupStyling = true)
            popupCaptionHeight:         60,             // (Default Style) Popup height of caption area
            popupCaptionTextSize:       null,           // (Default Style) Popup caption text size
            popupBlankCaptionText:      '图片详情',   // Applied to images that don't have captions
                                                        // (when captions are enabled)
            popupCloserText:            '&#215;',       // Popup closer text
            popupLoaderText:            '&bull;&bull;', // Popup loader text
            popupClass:                 'poptrox-popup',// Popup class
            popupSelector:              null,           // (Advanced) Popup selector (use this if you
                                                        // want to replace the built-in popup)
            popupLoaderSelector:        '.loader',      // (Advanced) Popup Loader selector
            popupCloserSelector:        '.closer',      // (Advanced) Popup Closer selector
            popupCaptionSelector:       '.caption',     // (Advanced) Popup Caption selector
            popupNavPreviousSelector:   '.nav-previous',// (Advanced) Popup Nav Previous selector
            onPopupClose: function() { $body.removeClass('is-covered'); },
            onPopupOpen: function() { $body.addClass('is-covered'); },
        });

    });});
