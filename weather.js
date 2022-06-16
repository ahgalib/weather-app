let weather =  {
    "apiKey":"85f3854dd593ecb1c478c5432c75ddde",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey).then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data){
        const{name} = data;
        const{description,icon} = data.weather[0];
        const{temp,humidity} = data.main;
        const{speed} = data.wind;

        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".temp").innerText = temp + " ℃"
         document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.querySelector(".description").innerText = description
        document.querySelector(".humidity").innerText = " Humidity : "+ humidity + " %"
        document.querySelector(".wind").innerText = "wind speed  : "+speed + " km"
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },

    search: function(){
        this.fetchWeather(document.querySelector(".searchBar").value)
    }
}

document.querySelector(".searchBtn").addEventListener("click",()=>{
    weather.search();
})