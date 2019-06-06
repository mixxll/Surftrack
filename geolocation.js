// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var mapZoom = 12;
      var map;
var passLat = 0;
var passLng = 0;
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
    passLat = lastLat;
    console.log(passLat);
    var lastLng = arrayLng[arrayLng.length - 1].innerHTML;
    passLng = lastLng;
    console.log(passLng);
  })
      //document.getElementById("geolocation").onclick = function() {
      //location.href = "geolocation.html";
     // };

      var map, infoWindow;
      function initMap() {
        var myLatLng = {lat: passLat, lng: passLng};

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: mapZoom,
          center: myLatLng,
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
        

        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        // if (navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //     var pos = {
        //       lat: position.coords.latitude,
        //       lng: position.coords.longitude
        //     };

        //     //infoWindow.setPosition(pos);
        //     //infoWindow.setContent('Location found.');
        //     infoWindow.open(map);
        //     map.setCenter(pos);

        // // var image = 'image/user.png';
        // // var Marker = new google.maps.Marker({
        // //   position: {lat: position.coords.latitude, lng: position.coords.longitude},
        // //   map: map,
        // //   icon: image
        // // });
        //   }, function() {
        //     handleLocationError(true, infoWindow, map.getCenter());
        //   });
        // } else {
        //   // Browser doesn't support Geolocation
        //   handleLocationError(false, infoWindow, map.getCenter());
        // }

        var delayInMilliseconds = 500; //1 second
        setTimeout(function() {

      
          var splitLong = passLng.toString().split('.');

          Longitude_degrees = parseInt(splitLong[0]);
          Longitude_minutes = parseInt(splitLong[1]) / 10000;
          passLng = Longitude_degrees + Longitude_minutes / 60 
          console.log(Longitude_degrees);
          console.log(Longitude_minutes);

          var splitLat = passLat.toString().split('.');

          Latitude_degrees = parseInt(splitLat[0]) * -1;
          Latitude_minutes = parseInt(splitLat[1]) / 10000;
          passLat = Latitude_degrees + Latitude_minutes / 60 
          passLat = passLat * -1;
          //console.log(Longitude1);
          console.log(passLat * -1);

          myLatlng = new google.maps.LatLng(passLat, passLng);
          map.setCenter(myLatlng);
          map.setZoom(mapZoom);

          // var image = 'image/user.png';
          // var marker = new google.maps.Marker({
          // position: {lat: passLat, lng: passLng},
          // map: map,
          // icon: image
        
          // });
        }
, delayInMilliseconds);
       // map = new google.maps.Map(document.getElementById("map"),map);


        ///////////////////////
        //-41.177399
        //174.465260
   
      }setTimeout(function() { putMarker(); }, 700);
function putMarker(){
          var image = 'image/user.png';
        var Marker = new google.maps.Marker({
          position: {lat: passLat, lng: passLng},
          map: map,
          icon: image
        });
}
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }