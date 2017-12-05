var x = document.getElementById("demo");

// let latitude = "";
// let longitude = "";
// let token = "JkJPIZbtn3f9au9Wl19kuD2Z7zV7_s2fwxDX5pPVI-og8ItOVVXnXJdCKXEk_5OsWgCzgKnG6VTLSApMCoPxdkU0QlBiRmOxASmqJV8are3uqzYFCGecoyvWWOAlWnYx"

// function ajaxCall(){
//     $.ajax
//     ({
//       url: `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`,
//       method: "GET",
//       headers: { 'Access-Control-Allow-Origin': '*' },
//       crossDomain: true,
//       dataType: 'jsonp',
//       "cors": {
//         "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
//       },
//       beforeSend: function(request) {
//         request.setRequestHeader("Authorization", `Bearer ${token}`);
//       },
//      }).done((response) => {
//          console.log(response);
//      })
// }

function ajaxCall() {
    $.ajax({
        'url' : `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`,
        'dataType' : 'jsonp',
        'jsonpCallback' : 'cb',
        'async' : 'false',
        'cache': true,
        'success' : function(data, textStats, XMLHttpRequest) {
            console.log(data);
        }
    });
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    console.log(latitude);
    console.log(longitude);
}

// getLocation();




