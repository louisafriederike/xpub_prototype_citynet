window.onload = function() {
    var startPos;
    var startPosLat;
    var startPosLong;
    var distance;
  
    if (navigator.geolocation) {

      startPosLat = 51.91575615609297;
      startPosLong = 4.476337286922251;

      $("#startLat").text(startPosLat);
      $("#startLon").text(startPosLong);
  
      navigator.geolocation.watchPosition(function(position) {
        $("#currentLat").text(position.coords.latitude);
        $("#currentLon").text(position.coords.longitude);

        distance = calculateDistance(startPosLat, startPosLong,position.coords.latitude, position.coords.longitude)
        $("#distance").text(distance);

        if(distance < .01){
          $("#message").text("You are within reach of Gateway 1.")
        }else if(distance > .01){
          $("#message").text("You are outside reach of Gateway 1.")
        }
      });
    }
  };
  
  // Reused code - copyright Moveable Type Scripts - retrieved May 4, 2010.
  // http://www.movable-type.co.uk/scripts/latlong.html
  // Under Creative Commons License http://creativecommons.org/licenses/by/3.0/
  function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
  }
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
