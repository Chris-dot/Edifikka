function init() {
    var mapOptions = {
        "center": {
            "lat": -34.14354308297214,
            "lng": -71.40795509552592
        },
        "clickableIcons": true,
        "disableDoubleClickZoom": false,
        "draggable": true,
        "fullscreenControl": true,
        "keyboardShortcuts": true,
        "mapTypeControl": true,
        "mapTypeControlOptions": {
            "text": "Default (depends on viewport size etc.)",
            "style": 0
        },
        "mapTypeId": "roadmap",
        "rotateControl": true,
        "scaleControl": true,
        "scrollwheel": true,
        "streetViewControl": true,
        "styles": false,
        "zoom": 11,
        "zoomControl": true
    };
    var mapElement = document.getElementById('ez-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker0 = new google.maps.Marker({
        title: "Edifikka",
        icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png",
        position: new google.maps.LatLng(-34.14979405475366, -71.38275305962199),
        map: map
    });
    var infowindow0 = new google.maps.InfoWindow({
        content: "<h3 class=\"infoTitle\">Edifikka</h3><p><span class=\"infoTelephone\">+569 4026 9387</span></p>",
        map: map
    });
    marker0.addListener('click', function () {
        infowindow0.open(map, marker0);
    });
    infowindow0.close();
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}
google.maps.event.addDomListener(window, 'load', init);