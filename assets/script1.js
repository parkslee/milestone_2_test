
/*var map, service;


function initMap() {

  map = new google.maps.Map(
    document.getElementById('map'), {
      center: {
        lat: 51.509865,
        lng: -0.118092
      },
      zoom: 9
      
    }
    
  );
  
//---------------------------------------------------------------- kmllayer---- kmltest format wanted
  var studioLayer = new google.maps.KmlLayer({
    url: 'https://raw.githubusercontent.com/parkslee/kml/master/ukdataset10.kml',
    map: map,
    preserveViewport: true
    });

//--------------------------------------------------------------info window not working
    studioLayer.addListener('click', function(event) {
      var content = event.featureData.infoWindowHtml;
    });
  
    
  service = new google.maps.places.PlacesService(map);
}


var defer

document.getElementById('search').addEventListener('change', function (event) {
  console.log('changed', event.target.value)
  clearTimeout(defer)
  defer = setTimeout(function () {
    var request = {
      query: event.target.value,
      fields: ['name', 'geometry'],
      //restrict map search to uk only
      
      
    };
    service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {


          console.log(results[i])
          
        }
        map.setCenter(results[0].geometry.location);
        
      }
    });
  }, 500)
})*/


function initMap() {
  var centerCoordinates = new google.maps.LatLng(51.509865, -0.118092);
  var map = new google.maps.Map(document.getElementById('map'), {
    center : centerCoordinates,
    zoom : 7
  });

  //restricts search to GB only
  var option = {
   // types: ['(regions)'],
		componentRestrictions : {country : "GB"
			}
		};
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');
  var infowindowContent = document.getElementById('infowindow-content');

  

  var autocomplete = new google.maps.places.Autocomplete(input, option);
  var infowindow = new google.maps.InfoWindow();
  infowindow.setContent(infowindowContent);
  //kml layer
  var studioLayer = new google.maps.KmlLayer({
    url: 'https://raw.githubusercontent.com/parkslee/kml/master/ukdataset18.kml',
    map: map,
    preserveViewport: true
    });
  var marker = new google.maps.Marker({
    map : map
    
  });

  autocomplete.addListener('place_changed',function() {
    document.getElementById("location-error").style.display = 'none';
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      document.getElementById("location-error").style.display = 'inline-block';
      document.getElementById("location-error").innerHTML = "Cannot Locate '" + input.value + "' on map";
      return;
    }

    

    map.fitBounds(place.geometry.viewport);
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    
    
   
  });

}

//url parameter



