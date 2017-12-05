var cors_anywhere_url = 'https://cors-anywhere.herokuapp.com/';	
var yelp_search_url = cors_anywhere_url + "https://api.yelp.com/v3/businesses/search?location=CITY&term=TERM";
var btn = document.getElementById('find');
let latitude = "";
let longitude = "";

btn.disabled = true;

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
    btn.disabled = false;
}


function prepQuery(terms) {
    // var inputs = "JSON.parse(terms);" // salted bearer token here in inputs
    var city = 'boston';  // get this from user input
    var term = 'burger';  // get this from user input
    var search_url = yelp_search_url.replace("CITY",city);
    search_url = search_url.replace("TERM",term);  
    search_url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`      
    seek(search_url,mycallbackfunc);
}

btn.addEventListener("click",function(){
    prepQuery();
});

function mycallbackfunc(info){
    console.log(info);// do whatever you want with your info in the browser here
    info = JSON.parse(info);
    console.log(info);
    info = info.businesses;
    info.forEach(element => {
        $("#results").append(`<p>${element.name}</p>`)
        
    });
}


function seek(search_url,mycallbackfunc) {
    var xhr = new XMLHttpRequest();	
    console.log(search_url);	
    xhr.open('GET', search_url, true);
    // bearer token is evaluated and sent off immediately in our query request to Fusion
    xhr.setRequestHeader("Authorization", "Bearer JkJPIZbtn3f9au9Wl19kuD2Z7zV7_s2fwxDX5pPVI-og8ItOVVXnXJdCKXEk_5OsWgCzgKnG6VTLSApMCoPxdkU0QlBiRmOxASmqJV8are3uqzYFCGecoyvWWOAlWnYx");
      xhr.onreadystatechange = function() {
       if (xhr.readyState == 4 && xhr.status == 200) {          	          	             
             mycallbackfunc(xhr.responseText);
           }
      };		
    xhr.send();
}
getLocation();