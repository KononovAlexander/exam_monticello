$(document).ready(function(){
    // news__slider
	$('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
		prevArrow: '<li class="box__arrow box__arrow--right "></li>',
        nextArrow:'<li class="box__arrow box__arrow--left "></li>' ,
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }]
     	});

    // head__slider

  $('.upslider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    arrows: false,
       
        dots: true,
    
  });


    // landing__scroll
$('.scroll a[href^="#"]').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
    }
    return false;
});
});
   // map
function initMap() {
    var image = '../img/dot.svg';
	    var coordinates = {lat: 40.680536, lng: -73.846477},

	      map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
             zoom:13,
            disableDefaultUI:true,
            styles:[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color": "#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers": [{"color": "#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color": "#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers": [{"color": "#616161"}]},{"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},{"featureType": "transit.line","elementType": "geometry","stylers": [{"color": "#e5e5e5"}]},{"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#eeeeee"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#c9c9c9"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]}]
        }),
	          marker = new google.maps.Marker({
            position:  {lat: 40.695008, lng: -73.898052},
            map: map,
            animation: google.maps.Animation.DROP,
            icon:image
            
        });

    }

