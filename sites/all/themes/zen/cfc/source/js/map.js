/**
 * Created by v.ratyshniy on 06.05.2016.
 */


(function ($) {
    $(function () {
        try {
            var mapCanvas = document.getElementById("map");
            var mapOptions = {
                center: new google.maps.LatLng(50.452908, 30.524814), zoom: 12,
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
        } catch (err) {
            console.log(err);
        }
    });
}(jQuery));