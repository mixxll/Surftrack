      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
<<<<<<< HEAD
var lastLat = 0;
var lastLng = 0;
let getXMLFile = function (path, callback){
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type","text/xml");
    request.onreadystatechange = function(){
        if (request.readyState === 4 && request.status === 200){
            callback(request.responseXML);
        }
    };
    request.send();
};

getXMLFile("https://api.thingspeak.com/channels/789627/feeds.xml", function(xml){
    var channel = Array.from(xml.getElementsByTagName("feeds"));
    var feed = Array.from(xml.getElementsByTagName("feed"));
    var arrayX = Array.from(xml.getElementsByTagName("field1"));
    var arrayY = Array.from(xml.getElementsByTagName("field2"));
    var arrayZ = Array.from(xml.getElementsByTagName("field3"));
    var arrayLat = Array.from(xml.getElementsByTagName("field4"));
    var arrayLng = Array.from(xml.getElementsByTagName("field5"));
    var arrayTimeStamp = Array.from(xml.getElementsByTagName("created-at"));

    var lastLat = arrayLat[arrayLat.length - 1].innerHTML;
    lastLat = lastLat;
    console.log(lastLat/100);

    var lastLng = arrayLng[arrayLng.length - 1].innerHTML;
    lastLng = lastLng;
    console.log(lastLng/100);
  })

=======
      document.getElementById("geolocation").onclick = function() {
location.href = "geolocation.html";
      };
>>>>>>> 4688ae9a660dca32a307e5b4952f4ebea738ea4a

      var map, infoWindow;
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -41.2952, lng: 174.7755},
          zoom: 14,

      styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
        });
        
        var image = 'image/user.png';
        var Marker = new google.maps.Marker({
          position: {lat: lastLat, lng: lastLng},
          map: map,
          icon: image
        });

        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            //infoWindow.setPosition(pos);
            //infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);

        var image = 'image/user.png';
        var Marker = new google.maps.Marker({
          position: {lat: position.coords.latitude, lng: position.coords.longitude},
          map: map,
          icon: image
        });
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }