/**
 * Created by v.ratyshniy on 06.05.2016.
 */

(function ($) {
    $(function () {
        try {
            map = null;
            function initialize() {


                function calculateAndDisplayRoute(directionsService, directionsDisplay) {
                    directionsService.route({
                        origin: {
                            lat: 50.449686,
                            lng: 30.523748
                        },  // Subway
                        destination: {
                            lat: 50.452606,
                            lng: 30.524959
                        },  // Office.
                        // Note that Javascript allows us to access the constant
                        // using square brackets and a string value as its
                        // "property."
                        travelMode: google.maps.TravelMode.DRIVING
                    }, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);

                        } else {
                            alert('Directions request failed due to ' + status);
                        }
                    });
                }


                var mapId = document.getElementById("map");

                var directionsDisplay = new google.maps.DirectionsRenderer({
                    preserveViewport: true
                });
                var directionsService = new google.maps.DirectionsService;

                var mapOptions = {
                    center: new google.maps.LatLng(50.452606, 30.524959),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false,
                    zoom: 15,
                    styles: [
                        {
                            "featureType": "landscape",
                            "stylers": [
                                {"color": "#dbdfe6"}
                            ]
                        }, {
                            "featureType": "poi",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {"color": "#bec6d2"}
                            ]
                        }, {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {"hue": "#003bff"},
                                {"color": "#bcc4d1"}
                            ]
                        }, {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {"color": "#ffffff"}
                            ]
                        }, {
                            "featureType": "transit.station.rail",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {"color": "#304669"}
                            ]
                        }, {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {"color": "#304669"}
                            ]
                        }, {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {"color": "#304669"}
                            ]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {"color": "#304669"}
                            ]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {"color": "#b3bcca"}
                            ]
                        }, {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                                {"hue": "#2b3f5e"}
                            ]
                        }, {
                            "featureType": "transit",
                            "elementType": "labels.icon",
                            "stylers": [
                                {"hue": "#2b3f5e"}
                            ]
                        }, {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {"color": "#24344e"}
                            ]
                        }
                    ]
                };
                map = new google.maps.Map(mapId, mapOptions);
                map.setZoom(15);
                google.maps.event.trigger(map, "resize");
                directionsDisplay.setMap(map);
                calculateAndDisplayRoute(directionsService, directionsDisplay);

                google.maps.event.addDomListener(window, "resize", function () {

                    var center = map.getCenter();
                    google.maps.event.trigger(map, "resize");
                    map.setCenter(center);

                });

            }

            google.maps.event.addDomListener(window, "load", function () {
                initialize();
            });
            setTimeout(function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            }, 10000);

        } catch (err) {
            console.log(err);
        }
    });
}(jQuery));