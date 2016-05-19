/**
 * Created by v.ratyshniy on 06.05.2016.
 */


(function ($) {
    $(function () {
        try {
            function initialize() {
            var mapCanvas = document.getElementById("map");
                coordinates = {
                    lat: 50.452908,
                    lng: 30.524814
                };
            var mapOptions = {
                center: coordinates,
                zoom: 10,
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
            var map = new google.maps.Map(mapCanvas, mapOptions);
                var marker = new google.maps.Marker({
                    position: coordinates,
                    map: map,
                    title: 'CFC Consulting'

                });
            }

            google.maps.event.addDomListener(window, 'load', initialize);
        } catch (err) {
            console.log(err);
        }
    });
}(jQuery));