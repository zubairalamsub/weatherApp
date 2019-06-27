function getWeather(lat, lon) {
    $.ajax({
      url: "https://api.darksky.net/forecast/9c4e8944261ed3b6f5f3438431a5cfa0/" + lat + "," + lon,
      dataType: "jsonp",
      success: function(data) {
        console.log("Current temp: " + data.currently.temperature);
        var fahrenheit = data.currently.temperature.toFixed(2),
          locationName = data.timezone,
          splice = locationName.indexOf("/"),
          icon = data.currently.icon.toUpperCase()
        console.log(icon)
        console.log(splice)
        
         
        var celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2); 
        console.log(celsius);
        $("#tempC").html(celsius + "&deg;C");
        $("#locationName").html(locationName.substring(splice + 1).replace("_", " "));
        $("#tempF").html(fahrenheit + "&deg;F").hide();
 
        $("#toggle").click(function() {
          $("#tempC").toggle("slow")
          $("#tempF").toggle("slow")
        });
        var icons = new Skycons({
          "color": "white"
        });
        icons.set("icon", icon)
        icons.play();
      }
  
    
  
    });
  }
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      getWeather(lat, lon);
    });
    
  }
  else{
    console.log ("Denied access to geolocation!")
  }
 
