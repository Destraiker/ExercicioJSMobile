window.onload = function () {
    var target = document.getElementById('Map');
    var watchId;
  
    if ('geolocation' in navigator) {
      document.getElementById('verificarLocalizacao').addEventListener('click', function () {
        navigator.geolocation.getCurrentPosition(function (location) {
          console.log(location.coords.latitude);
          console.log(location.coords.longitude)
          target.innerHTML = "Latitude: "+location.coords.latitude+" Longitude: " +location.coords.longitude;
        });    
      });
    } else {
      target.innerText = 'API de Geolocalização não suportada';
    }
  };