(this.webpackJsonpweatheappreactjs=this.webpackJsonpweatheappreactjs||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/Logo.dc520f38.png"},function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),i=(a(10),a(4)),l=a.n(i);function m(){return c.a.createElement("nav",{className:"transparent z-depth-0"},c.a.createElement("div",{className:"nav-wrapper container"},c.a.createElement("a",{href:"#",className:"brand-logo"},c.a.createElement("img",{className:"logo",src:l.a,alt:"logo",height:"100px",width:"250px"}))))}var s=a(1),u=Object(n.createContext)(),p=function(e){var t=Object(n.useState)({weather:"",temp:"",minTemp:"",maxTemp:"",wind:"",windDeg:"",country:"",name:"",clouds:""}),a=Object(s.a)(t,2),r=a[0],o=a[1];return c.a.createElement(u.Provider,{value:[r,o]},e.children)};function d(){var e="744b3384c5a94cad26fb50f00221e13c",t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),m=l[0],p=l[1],d=Object(n.useContext)(u),h=Object(s.a)(d,2),f=(h[0],h[1]);Object(n.useEffect)((function(){g()}),[r]);var w=function(e){e.preventDefault(),o(m),p("")};window.addEventListener("load",(function(){var t,a;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){t=n.coords.longitude,a=n.coords.latitude,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(t,"&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){return f({weather:e.weather[0].description,temp:"Temperature: ".concat(Math.floor(e.main.temp-273.15)," \xb0C"),minTemp:"Min(".concat(Math.floor(e.main.temp_min-273.15)," \xb0C)"),maxTemp:"Max(".concat(Math.floor(e.main.temp_max-273.15)," \xb0C)"),wind:"Wind Speed m/s is "+e.wind.speed,windDeg:"Coming from "+e.wind.deg+" Degrees",country:"Country Code: "+e.sys.country,name:e.name,clouds:"Clouds count: ".concat(e.clouds.all)})}))})):alert("Please enter a city")}));var g=function(t){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat([r],"&appid=").concat(e)).then((function(e){if(!e.ok)throw alert("Please enter an existing City name");return e})).then((function(e){return e.json()})).then((function(e){f({weather:e.weather[0].description,temp:"Temperature: ".concat(Math.floor(e.main.temp-273.15)," \xb0C"),minTemp:"Min(".concat(Math.floor(e.main.temp_min-273.15)," \xb0C)"),maxTemp:"Max(".concat(Math.floor(e.main.temp_max-273.15)," \xb0C)"),wind:"Wind Speed: m/s is "+e.wind.speed,windDeg:"Coming from "+e.wind.deg+" Degrees",country:"Country Code: "+e.sys.country,name:e.name,clouds:"Clouds count: ".concat(e.clouds.all)})}))};return c.a.createElement("div",{className:"row container form center-align"},c.a.createElement("form",{onSubmit:w,width:"500px"},c.a.createElement("input",{id:"icon_prefix",type:"text",name:"search-city",value:m,className:" search-input",onChange:function(e){p(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("a",{className:"waves-effect waves-light btn-small grey darken-4 z-depth-3",onClick:w},c.a.createElement("i",{className:"material-icons right"},"cloud"),"search")))}function h(){var e=Object(n.useContext)(u),t=Object(s.a)(e,1)[0];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"home"}," ",c.a.createElement("h2",{className:"city-name"},t.name),c.a.createElement("p",null," ",t.country," "),c.a.createElement("p",{className:"weather-description teal-text accent-2"}," ",t.weather.toUpperCase()," ",c.a.createElement("br",null),c.a.createElement("span",{className:"clouds-count"},t.clouds)),c.a.createElement("p",{className:"temperature cyan-text accent-2"},"".concat(t.temp," ").concat(t.minTemp," ").concat(t.maxTemp)),c.a.createElement("p",{className:"wind light-blue-text accent-2"}," ",t.wind," ",t.windDeg)))}var f=function(){return c.a.createElement(p,null,c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(d,null),c.a.createElement(h,null)))};o.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.cea051b8.chunk.js.map