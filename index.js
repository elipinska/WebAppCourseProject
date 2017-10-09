function init() {
  console.log("loaded")
  const myDiv = document.querySelector("#map")

const location = {center: {
    lat: 55.9468841,
    lng: -3.2013412999999673
    },
    zoom: 18
}
new google.maps.Map(myDiv, location)
}

