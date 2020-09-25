// Initialize and add the map
function initMap() {
  // The location of Örebro Universitet
  var oru = { lat: 59.253969, lng: 15.247674 };
  // The map, centered at Örebro Universitet. Zoom adjusted.
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: oru,
  });
  // The marker, positioned at Örebro Universitet
  var marker = new google.maps.Marker({ position: oru, map: map });
}
