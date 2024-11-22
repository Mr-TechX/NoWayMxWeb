
$(document).ready(function() {   
  (function($) {   
      $.fn.parallax = function(options) {   
          var windowHeight = $(window).height();
          var settings = $.extend({
              speed        : 0.15
          }, options);
          return this.each( function() {
            var $this = $(this);
            $(document).scroll(function(){
                  var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();
        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
          return;
        }
        var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
            $this.css('background-position', 'center ' + yBgPosition + 'px');      
            });
          });
      }
  }(jQuery));
$(window).load(function() {
	$(".loader-overlay").fadeOut("slow");
})
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
$('a[data-rel^=lightcase]').lightcase();
  $('.portfolio-items').mixItUp({
       animation: {
          duration: 300
      }
  });
  $('.cl-client-carousel').owlCarousel({
      pagination:true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true,
  }); 
  
  $('.cl-logo-carousel').owlCarousel({
	  items : 6,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,3],
      stopOnHover:true,
      autoPlay:3000,
  });

    $(".header-carousel").owlCarousel({
        pagination:true,
        navigation : true,
        slideSpeed : 500,
        paginationSpeed : 500,
        singleItem:true,
        autoPlay:true,
    });

$('.parallax-section').parallax({
          speed : .100
        });

$(function() {
    var header = $(".header-home");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            header.removeClass('header-home').addClass("header-default");
        } else {
            header.removeClass("header-default").addClass('header-home');
        }
    });
});

$('.nav-container').onePageNav({
  scrollSpeed: 600,
  currentClass: 'current',
  changeHash: true,
  filter: ':not(.external)'
});

  var $window = $(window);
      function checkWidth() {
      if ($window.width() < 767) {
          $('#top-header').removeClass('header-home').addClass('header-default');
          };
      if ($window.width() >= 767) {
          $('#top-header').removeClass('header-default').addClass('header-home');
      }
  }
  checkWidth();
      $(window).resize(checkWidth);
  // Mapa de google
	var $latitude = 45.537383,
		$longitude = -73.597623,
		$map_zoom = 14;
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var $marker_url = ( is_internetExplorer11 ) ? '../i.imgur.com/TYdWTLk.png' : '../i.imgur.com/TYdWTLk.png';
	var	$main_color = '#1abc9c',
		$saturation= -20,
		$brightness= 5;
	var style= [ 
		{
			elementType: "labels",
			stylers: [
				{saturation: $saturation}
			]
		},  
	    { 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{ 	
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		}
	];

	var map_options = {
      	center: new google.maps.LatLng($latitude, $longitude),
      	zoom: $map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
    }
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);			
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng($latitude, $longitude),
	    map: map,
	    visible: true,
	 	icon: $marker_url,
	});

	function CustomZoomControl(controlDiv, map) { 
	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

});