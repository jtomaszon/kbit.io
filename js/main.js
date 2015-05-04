// Begin tooltip for socials init */

function tooltipInit() {
    jQuery("[data-toggle='tooltip']").tooltip();
};


jQuery(document).ready(function () {
    tooltipInit();
});

//Begin Sticky Nav
$(window).load(function () {
    $("#navigation").sticky({ topSpacing: 0 });
});
//End Sticky Nav


// Change navigation still on scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($("nav").hasClass("navbar-has-transition")) {
        //>=, not <=
        if (scroll >= 100) {
            $("nav").removeClass("navbar-transparent");
            $("nav").addClass("navbar-inverse");
        }
        if (scroll < 100) {
            $("nav").addClass("navbar-transparent");
            $("nav").removeClass("navbar-inverse");
        }
    }
    if ($("nav").hasClass("navbar-middle")) {
        //>=, not <=
        if (scroll >= 100) {
            $("nav").addClass("small");
        }
        if (scroll < 100) {
            $("nav").removeClass("small");
        }
    }
    if ($("nav").hasClass("navbar-info-top")) {
        //>=, not <=
        if (scroll >= 100) {
            $("nav").addClass("navbar-info-top-hidden");
            $("nav .top-info").addClass("top-info-hidden");
        }
        if (scroll < 100) {
            $("nav").removeClass("navbar-info-top-hidden");
            $("nav .top-info").removeClass("top-info-hidden");
        }
    }
}); //missing );

//Page Scroller


$(document).ready(function () {
    $('.btn-scroll[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash, $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    /* ======================================= */
    /* === CLICKABLE MAIN PARENT ITEM MENU === */
    jQuery(".navbar li.dropdown > .dropdown-toggle").removeAttr("data-toggle data-target");


    if(jQuery().pageScroller){
        //if(jQuery('body').hasClass('onepage')){
            jQuery('body').pageScroller({
                navigation: '.onepage',
                sectionClass: 'chapter',
                animationType: 'easeOutExpo',
                animationSpeed: 750,
                keyboardControl: true,
                scrollOffset: '-80'
            });
        //}
    }




	if (jQuery('#faq1').length > 0) {
		jQuery('#faq1').affix({
			offset: { top: jQuery('#faq1').offset().top - 115 }
		});
	}


	jQuery('#faq1 a').bind('click', function (e) {
		e.preventDefault();

		jQuery('html, body').animate({
			scrollTop: jQuery(this.hash).offset().top }, 300);
	});




});

function scrollToTop(i) {
    if (i == 'show') {
        if (jQuery(this).scrollTop() != 0) {
            jQuery('#toTop').fadeIn();
        } else {
            jQuery('#toTop').fadeOut();
        }
    }
}

jQuery(window).scroll(function () {
    scrollToTop('show');
});

//Begin Parallax

jQuery(window).load(function () {
    "use strict";

    /* parallax effect */
    if (!device.mobile()) {
        jQuery("#MainHeader").parallax("50%", 0.2);
        jQuery("#Parallax1").parallax("50%", 0.2);
        jQuery("#Parallax2").parallax("50%", 0.2);
        jQuery("#Parallax3").parallax("50%", 0.2);
        jQuery("#Parallax4").parallax("50%", 0.2);
    }
});

jQuery(window).resize(function () {
    if (!device.mobile()) {
        setTimeout(function () {
            jQuery("#MainHeader").parallax("20%", 0.4, true);
        }, 500);

        setTimeout(function () {
            jQuery("#Parallax1").parallax("60%", 0.4, true);
        }, 500);

        setTimeout(function () {
            jQuery("#Parallax2").parallax("20%", 0.4, true);
        }, 500);

        setTimeout(function () {
            jQuery("#Parallax3").parallax("60%", 0.4, true);
        }, 500);

        setTimeout(function () {
            jQuery("#Parallax4").parallax("60%", 0.4, true);
        }, 500);
    }

}); //End Parallax

//Begin PieChart
jQuery('.pie-chart').each(function () {
    var $t = jQuery(this);

    var scaleColor = $t.attr('data-scalecolor');
    var trackColor = "transparent";

    $t.easyPieChart({
        animate: $t.attr('data-animate'),
        barColor: $t.attr('data-barcolor'),
        trackColor: trackColor,
        scaleColor: scaleColor == 'false' ? false : scaleColor,
        lineCap: $t.attr('data-linecap'),
        lineWidth: $t.attr('data-linewidth'),
        size: $t.attr('data-size')
    });
});

//End PieChart


//Begin Progress Bar


//End Progress Bar
//Begin Gallery
$(window).load(function () {

    /*function myfunc() {
     jQuery("#MainHeader").parallax("50%", 0.2);
     jQuery("#Parallax1").parallax("50%", 0.2);
     jQuery("#Parallax2").parallax("50%", 0.2);
     jQuery("#Parallax3").parallax("50%", 0.2);
     jQuery("#Parallax4").parallax("50%", 0.2);
     }*/

    var $container = $('.projects')
    // initialize Isotope
    $container.isotope({
        // options...
        resizable: false, // disable normal resizing
        // set columnWidth to a percentage of container width
        masonry: { }
    });

    // update columnWidth on window resize
    $(window).smartresize(function () {
        $container.isotope({
            // update columnWidth to a percentage of container width
            masonry: { }
        });
    });
    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    //myfunc();
});

//End Gallery

// Begin Gmap3 Maps
// helper - validate data attr
function validateDataAttr($attr) {
    "use strict";
    return $attr !== undefined;

};

// init gmap - Asynchronous Loading
function initmap() {
    "use strict";
    jQuery(".googleMap").each(function () {
        var atcenter = "";
        var $this = jQuery(this);
        var location = $this.data("location");
        var text = $this.data("text");

        var offset = 0;

        if (validateDataAttr($this.data("offset"))) {
            offset = $this.data("offset");
        }

        if (validateDataAttr(location)) {

            $this.gmap3({
                marker: {
                    //latLng: [40.616439, -74.035540],
                    address: location,
                    options: {
                        visible: false
                    },
                    callback: function (marker) {
                        atcenter = marker.getPosition();
                    }
                },
                map: {
                    options: {
                        //maxZoom:11,
                        zoom: 17,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        // ('ROADMAP', 'SATELLITE', 'HYBRID','TERRAIN');
                        scrollwheel: false,
                        draggable: false,
                        disableDoubleClickZoom: false,
                        mapTypeControlOptions: {
                            //mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                            //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            //position: google.maps.ControlPosition.RIGHT_CENTER
                            mapTypeIds: []
                        }
                    }
                    /*events: {
                     idle: function () {
                     if (!$this.data('idle')) {
                     $this.gmap3('get').panBy(0, offset);
                     $this.data('idle', true);
                     }
                     }
                     }*/
                },
                overlay: {
                    //latLng: [40.616439, -74.035540],
                    address: location,
                    options: {
                        content: '<div class="googleMap-description"><div class="googleMap-triangle"><div class="googleMap-triangle-inside"></div></div>' + text + '</div>',
                        offset: {
                            y: -60,
                            x: 20
                        }
                    }
                }
                //},"autofit"
            });

            // center on resize
            google.maps.event.addDomListener(window, "resize", function () {
                //var userLocation = new google.maps.LatLng(53.8018,-1.553);
                $this.gmap3('get').setCenter(atcenter);
                $this.gmap3('get').panBy(0, 0);
            });

            // set height
            $this.css("min-height", $this.data("height") + "px");
        }

    });
};

function loadScript() {
    "use strict";
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initmap';
    document.body.appendChild(script);
};

window.onload = loadScript;

// End Gmap3 Maps

/* Begin Animations */

jQuery(document).ready(function () {
    if (jQuery().appear) {
        if (device.mobile()) {
            // disable animation on mobile
            jQuery("body").removeClass("initAnimate");
        } else {
            jQuery('.initAnimate .animated').appear(function () {
                jQuery(this).each(function () {
                    jQuery(this).addClass('activate');
                    jQuery(this).addClass($(this).data('fx'));
                });
            }, {accY: -150});
        }
    }
});

/* End Animation */

// Count To

jQuery(document).ready(function () {
    $('.counter').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
        }
    }).appear(function () {
        $(this).each(function (options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        });
    });
});


/* show search form */
jQuery(document).ready(function () {

    jQuery('#searchIcon1').click(function () {

        if((jQuery('div.searchForm').hasClass('search-open'))){
            jQuery('div.searchForm').removeClass('search-open');
        } else{
            jQuery('div.searchForm').addClass('search-open');
        }
    });
});
