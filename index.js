function init() {
  console.log("loaded")
  const myDiv = document.querySelector("#map")
  
const myLatLng = {lat: 55.9468841, lng: -3.2013412999999673}

const location = {center: myLatLng,
    zoom: 18
}

const map = new google.maps.Map(myDiv, location)

 const contentString = '<div id="content">'+ '<p>Come here to play with code!</p>'
+
            '</div>';

        const infowindow = new google.maps.InfoWindow({
          content: contentString
        });

const marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'This is where we learned JavaScript!'
        });

		marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

}

