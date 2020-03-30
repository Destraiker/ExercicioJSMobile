
window.onload = function () {
  const URL_TO_FETCH = 'https://ipinfo.io?token=e6e4c3d0ad7a66'; fetch(URL_TO_FETCH, {
    method: 'get' // opcional
  })
    .then(function (response) {
      response.text()
        .then(function (result) {
          console.log(result);
          var objectResult = JSON.parse(result);
          document.getElementById('ip').innerHTML = "IP: "+objectResult.ip;
        })
    })
    .catch(function (err) { console.error(err); });
};