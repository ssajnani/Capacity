webpackJsonp([0],[,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(a(2),"http://localhost:3000/");e.default={user:{authenticated:!1,username:null},signup:function(t,e,a,n){var i={username:e.username,password:e.password};t.$http.post(s+"auth/signup",i).then(function(t){"success"!=t.body.state?n(t):a(t)},n)},login:function(t,e,a,n){var i=this,o={username:e.username,password:e.password};t.$http.post(s+"auth/login",o).then(function(t){"success"!=t.body.state?n(t):(localStorage.setItem("id_token",t.body.user._id),localStorage.setItem("username",t.body.user.username),i.user.authenticated=!0,i.user.username=t.body.user.username,a(t))},n)},logout:function(){localStorage.removeItem("id_token"),this.user.authenticated=!1,localStorage.removeItem("username"),this.user.username=null},checkAuth:function(){console.log("hey!");var t=localStorage.getItem("id_token");this.user.authenticated=!!t;var e=localStorage.getItem("username");e&&(console.log(e),this.user.username=e,this.user.authenticated=!0)},getAuthHeader:function(){return{Authorization:"Bearer "+localStorage.getItem("id_token")}}}},function(t,e,a){"use strict";var s=a(5),n=a(52),i=a(37),o=a.n(i),l=a(38),c=a.n(l);s.a.use(n.a);var r=[{path:"/",name:"home",component:o.a},{path:"/place/:id",name:"place",component:c.a},{path:"*",redirect:"/"}];e.a=new n.a({mode:"history",routes:r,linkActiveClass:"is-active"})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(a(1),"http://localhost:3000/"),n={place_url:s+"places/create",msg_get_url:s+"messages/messages",msg_post_url:s+"messages/createMessage",msg_like_url:s+"messages/id",msg_check_url:s+"places/id"};e.default={checked_in_place:null,getPlace:function(t,e,a){var s={googleID:e};t.$http.post(n.place_url,s).then(a)},getMessages:function(t,e,a){t.$http.get(n.msg_get_url,{params:{googleID:e}}).then(a)},likeMessage:function(t,e,a){var s={id:e,voteType:"upvote"};t.$http.put(n.msg_like_url,s).then(a)},postMessage:function(t,e,a,s){var i={googleID:a,text:e.text,user:e.user.username};t.$http.post(n.msg_post_url,i).then(function(t){console.log(t),s(t)})},checkIn:function(t,e,a){var s=this,i={googleID:e,increment:"Y"};t.$http.post(n.msg_check_url,i).then(function(t){s.checked_in_place=e,a(t)})},checkOut:function(t,e,a){var s=this,i={googleID:e,increment:"N"};t.$http.post(n.msg_check_url,i).then(function(t){s.checked_in_place=null,a(t)})}}},function(t,e,a){a(20),a(21);var s=a(0)(a(7),a(40),null,null);t.exports=s.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(5),n=a(2),i=a(1),o=a(51),l=a.n(o);s.a.use(l.a),new s.a({el:"#app",template:'\n  <transition name="fade">\n\t  <router-view></router-view>\n  </transition>\n  ',router:n.a,mounted:function(){i.default.checkAuth()}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(28),i=a.n(n),o=a(29),l=a.n(o),c=a(31),r=a.n(c),u=a(30),d=a.n(u);e.default={name:"navbar",components:{nav_about:i.a,nav_account:l.a,nav_signup:r.a,nav_login:d.a},data:function(){return{user:s.default.user,menu_open:!1,modals:{about:!1,account:!1,signup:!1,login:!1}}},methods:{toggleMenu:function(){this.menu_open=!this.menu_open},openModal:function(t){this.modals[t]=!0},closeModal:function(t){this.modals[t]=!1}},created:function(){}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nav_about",props:["visible"],data:function(){return{}},created:function(){},methods:{closeModal:function(){this.$emit("closeModal")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nav_account",props:["visible"],data:function(){return{}},created:function(){},methods:{closeModal:function(){this.$emit("closeModal")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1);e.default={name:"nav_login",props:["visible"],data:function(){return{username:"",password:"",is_submitting:!1}},computed:{invalidFields:function(){return!(this.username&&this.password)}},methods:{closeModal:function(){this.username="",this.password="",this.is_submitting=!1,this.$emit("closeModal")},logIn:function(){var t=this;this.is_submitting=!0,s.default.login(this,{username:this.username,password:this.password},function(e){console.log(e),alert("You're logged in!"),t.closeModal()},function(e){alert(e.body.message),t.closeModal()})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1);e.default={name:"nav_signup",props:["visible"],data:function(){return{username:"",password:"",is_submitting:!1}},computed:{invalidFields:function(){return!(this.username&&this.password)}},methods:{closeModal:function(){this.username="",this.password="",this.is_submitting=!1,this.$emit("closeModal")},signUp:function(){var t=this;this.is_submitting=!0,s.default.signup(this,{username:this.username,password:this.password},function(e){console.log(e),t.closeModal(),alert("You've successfully signed up! Please login.")},function(e){console.log(e),t.closeModal(),alert(e.body.message)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"place_graph",props:["graph_data"],data:function(){return{ctx:null,timeChart:null,loc_data:null}},methods:{initChart:function(){}},mounted:function(){Chart.defaults.global.defaultFontSize=10,this.ctx=document.getElementById("timeChart")},watch:{graph_data:function(t){if(null!=t){for(var e=new Date,a=e.getDay(),s=e.getHours(),n=[],i=5;i>=0;i--)n.push(parseInt(t[a][s-i]));for(var o=[],l=5;l>=0;l--)o.push(String(function(t){var e=t<12?"am":"pm";return t=t>12?t-12:t,(t=0==t?12:t)+" "+e}(s-l)));!function(){console.log("--- Chart Data ---");for(var t=0;t<n.length;t++)console.log("# people: "+n[t]+" --- Time: "+o[t])}(),this.timeChart=new Chart(this.ctx,{type:"line",data:{labels:o,datasets:[{data:n,backgroundColor:["rgba(0, 196, 167, 0.2)","rgba(0, 196, 167, 0.2)","rgba(0, 196, 167, 0.2)","rgba(0, 196, 167, 0.2)","rgba(0, 196, 167, 0.2)","rgba(0, 196, 167, 0.2)"],borderColor:["rgba(0, 196, 167, 1)","rgba(0, 196, 167, 1)","rgba(0, 196, 167, 1)","rgba(0, 196, 167, 1)","rgba(0, 196, 167, 1)","rgba(0, 196, 167, 1)","rgba(0, 196, 167, 1)"],borderWidth:1}]},options:{responsive:!0,title:{display:!0,text:"Number of People"},legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a(1);e.default={name:"place_info",props:["name","address","rating"],data:function(){return{ratingValue:this.rating}},watch:{rating:function(t,e){this.ratingValue=t;var a=0,s=Math.floor(this.ratingValue);a=this.ratingValue-s>0?1:0;for(var n=5-s-a,i=document.getElementById("starRatingContainer"),o="",l=0;l<s;l++)o+='<i class="fa fa-star" aria-hidden="true"></i>';for(var l=0;l<a;l++)o+='<i class="fa fa-star-half-o" aria-hidden="true"></i>';for(var l=0;l<n;l++)o+='<i class="fa fa-star-o" aria-hidden="true"></i>';console.log("Rating: "+this.ratingValue),i.innerHTML=o}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"place_map",props:["coords","heatPlaces","recommended"],data:function(){return{map:null,heatmap:null,trafficLayer:null,transitLayer:null,bikeLayer:null}},methods:{toggleHeatmap:function(){this.heatmap.setMap(this.heatmap.getMap()?null:this.map)},toggleFilters:function(){for(var t=document.getElementsByClassName("filter"),e=0;e<t.length;e++)t[e].classList.toggle("no-display")},toggleLayerClear:function(){this.trafficLayer.setMap(null),this.transitLayer.setMap(null),this.bikeLayer.setMap(null);for(var t=document.getElementsByClassName("filter"),e=0;e<t.length;e++)t[e].classList.remove("is-active")},toggleTraffic:function(){this.toggleLayerClear(),this.trafficLayer.setMap(this.trafficLayer.getMap()?null:this.map),document.getElementById("trafficIcon").classList.add("is-active")},toggleTransit:function(){this.toggleLayerClear(),this.transitLayer.setMap(this.transitLayer.getMap()?null:this.map),document.getElementById("transitIcon").classList.add("is-active")},toggleBicycle:function(){this.toggleLayerClear(),this.bikeLayer.setMap(this.bikeLayer.getMap()?null:this.map),document.getElementById("bicycleIcon").classList.add("is-active")},initMap:function(){this.location=this.coords,this.map=new google.maps.Map(document.getElementById("map"),{center:this.location,mapTypeControl:!1,maxZoom:16,zoom:14,minZoom:12,styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{visibility:"simplified"},{hue:"#0066ff"},{saturation:74},{lightness:100}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"off"},{weight:.6},{saturation:-85},{lightness:61}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"simplified"},{color:"#5f94ff"},{lightness:26},{gamma:5.86}]}]});new google.maps.Marker({position:this.location,map:this.map,animation:google.maps.Animation.DROP});this.trafficLayer=new google.maps.TrafficLayer,this.transitLayer=new google.maps.TransitLayer,this.bikeLayer=new google.maps.BicyclingLayer}},watch:{coords:function(t){null!=t.lat&&null!=t.lng&&this.initMap()},heatPlaces:function(t){console.log("NEW PLACES"),console.log(t);for(var e=[],a=0;a<t.length;a++)e.push({location:new google.maps.LatLng(this.recommended[a].geometry.location.lat(),this.recommended[a].geometry.location.lng()),weight:t[a].body.current});console.log(e),this.heatmap=new google.maps.visualization.HeatmapLayer({data:e}),this.heatmap.setMap(this.map),this.heatmap.set("radius",40),this.heatmap.set("dissipating",!0);var s=["rgba(0, 255, 255, 0)","rgba(0, 255, 255, 1)","rgba(0, 191, 255, 1)","rgba(0, 127, 255, 1)","rgba(0, 63, 255, 1)","rgba(0, 0, 255, 1)","rgba(0, 0, 223, 1)","rgba(0, 0, 191, 1)","rgba(0, 0, 159, 1)","rgba(0, 0, 127, 1)","rgba(63, 0, 91, 1)","rgba(127, 0, 63, 1)","rgba(191, 0, 31, 1)","rgba(255, 0, 0, 1)"];this.heatmap.set("gradient",s)}},created:function(){var t=this.map.getStreetView(),e=document.getElementById("filters-panel");google.maps.event.addListener(t,"visible_changed",function(){t.getVisible()?e.classList.add("no-display"):e.classList.remove("no-display")})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1);e.default={name:"place_messages",props:["messages","checked_in"],data:function(){return{user:s.default.user,comment:"",checked_into:!1}},methods:{likeMessage:function(t){this.$emit("likeMessage",t)},submitMessage:function(t){var e=this.comment;this.comment="",this.$emit("postMessage",{text:e,user:s.default.user})},checkInOut:function(){this.checked_into?this.$emit("checkOut"):this.$emit("checkIn")}},watch:{messages:function(t){this.msgs=t},checked_in:function(t){this.checked_into=t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"place_recommend",props:["recommendations"],data:function(){return{filtered_recommendations:[]}},methods:{goTo:function(t){console.log(t),this.$emit("goToPlace",t)}},watch:{recommendations:function(t){this.filtered_recommendations=null==t?[]:t.slice(0,5)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=a(4),i=a.n(n);e.default={name:"home",components:{navbar:i.a},data:function(){return{default_location:{lat:42.9849,lng:81.2453},location:{lat:null,lng:null},stock_images:["https://images8.alphacoders.com/501/thumb-1920-501447.jpg","https://images8.alphacoders.com/710/thumb-1920-710914.jpg","https://images5.alphacoders.com/595/thumb-1920-595628.jpg","https://images2.alphacoders.com/441/thumb-1920-441238.jpg","https://images8.alphacoders.com/463/thumb-1920-463250.jpg","https://images8.alphacoders.com/684/thumb-1920-684186.jpg","https://images4.alphacoders.com/714/thumb-1920-714270.jpeg","https://images4.alphacoders.com/289/thumb-1920-289526.jpg","https://images.alphacoders.com/701/thumb-1920-701597.jpg","https://images.alphacoders.com/658/thumb-1920-658784.jpg","https://iceland.nordicvisitor.com/images/1/sweden/stockholm-sweden-winter.jpg","https://images.alphacoders.com/706/thumb-1920-706505.jpg","http://wallpaper.pickywallpapers.com/1920x1080/great-city-landscape.jpg","https://images2.alphacoders.com/459/thumb-1920-459147.jpg","https://images3.alphacoders.com/740/thumb-1920-740158.png","https://images2.alphacoders.com/257/thumb-1920-257010.jpg","https://images4.alphacoders.com/689/thumb-1920-689197.jpg","https://images6.alphacoders.com/540/thumb-1920-540020.jpg","https://images5.alphacoders.com/352/thumb-1920-352111.jpg","https://images2.alphacoders.com/278/thumb-1920-278552.jpg","https://images.alphacoders.com/526/thumb-1920-526090.jpg","https://images8.alphacoders.com/427/thumb-1920-427490.jpg","https://wallpprs.media/1920x1080/dublin_wallpprs.com_.jpg","https://images7.alphacoders.com/360/thumb-1920-360408.jpg","https://images4.alphacoders.com/234/thumb-1920-234136.jpg","https://images8.alphacoders.com/430/thumb-1920-430779.jpg"],search_text:"",search_rad:1e4,autocomplete:null,suggestions:[],placeholder_nouns:["Theatres","Bars","Clubs","Beaches","Parks","Zoos","Offices","Banks","Stores","Malls","Plazas","Restuarants","Coffee shops","Fast food","Airports","Subway stations","Hospitals","Gyms","Condos","Apartments","Libraries","Schools","Grocery shops"],placeholder_text:""}},methods:{selectPlace:function(t){console.log("Redirecting to: "+t),s.a.push({name:"place",params:{id:t.place_id}})},submit_text:function(){0!==this.suggestions.length&&this.selectPlace(this.suggestions[0])}},created:function(){function t(t){return Math.floor(Math.random()*t)}var e=this;this.location.lat=this.default_location.lat,this.location.lng=this.default_location.lng,navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){e.location.lat=t.coords.latitude,e.location.lng=t.coords.longitude},function(t){console.log("error")}),this.autocomplete=new google.maps.places.AutocompleteService;var a=this.placeholder_nouns.length;console.log("List length: "+a);var s,n,i;s=t(a);do{n=t(a)}while(n===s);do{i=t(a)}while(i===s||i===n);console.log("First: "+s),console.log("Second: "+n),console.log("Third: "+i);var o=[];o.push(this.placeholder_nouns[s]),o.push(this.placeholder_nouns[n]),o.push(this.placeholder_nouns[i]),this.placeholder_text+=o[0];for(var l=1;l<3;l++)this.placeholder_text+=", "+o[l].toLowerCase();this.placeholder_text+="..."},mounted:function(){var t=this.stock_images.length,e=this.stock_images[Math.floor(Math.random()*t+0)];document.createElement("img").src=e,document.getElementById("hero-body-id").style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('"+e+"')"},watch:{search_text:function(t){var e=this,a=new google.maps.LatLng(this.location.lat,this.location.lng);""!=t?this.autocomplete.getPlacePredictions({location:a,radius:this.search_rad,types:["establishment"],input:t},function(t,a){a!=google.maps.places.PlacesServiceStatus.OK?console.warn(a):e.suggestions=t}):this.suggestions=[]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=a(3),i=a(4),o=a.n(i),l=a(34),c=a.n(l),r=a(36),u=a.n(r),d=a(35),p=a.n(d),m=a(32),h=a.n(m),g=a(33),f=a.n(g);e.default={name:"place",components:{navbar:o.a,place_map:c.a,place_recommend:u.a,place_messages:p.a,place_graph:h.a,place_info:f.a},data:function(){return{messages:null,recommended:null,nearby:null,name:"",coords:{lat:null,lng:null},address:"",type:null,rating:null,place_id:null,graph_data:null,capacities:null,gmaps:null,checked_in:null,heatPlaces:null}},created:function(){this.gmaps=new google.maps.places.PlacesService(document.createElement("div")),this.updatePlace()},methods:{updatePlace:function(){var t=this;this.place_id=this.$route.params.id,this.checked_in=this.place_id==n.default.checked_in_place,console.log("place id: "+this.place_id),this.gmaps.getDetails({placeId:this.place_id},function(e,a){if(console.log(a),a==google.maps.places.PlacesServiceStatus.OK){console.log(e),t.name=e.name,t.address=e.formatted_address,t.type=e.types[0],t.rating=e.rating;var s=e.geometry.location.lat(),i=e.geometry.location.lng();t.coords={lat:s,lng:i},t.gmaps.nearbySearch({location:t.coords,type:t.type,radius:5e3,openNow:!0,rankBy:google.maps.places.RankBy.PROMINENCE},function(e,a){console.log("NOTICE"),console.log(e),t.nearby=e;var s=[];a==google.maps.places.PlacesServiceStatus.OK?(s=e.filter(function(e){return t.place_id!=e.place_id}),t.recommended=s,console.log(s)):(s=[],t.recommended=s);var i=[],o=t;console.log("NOTICE"),console.log(e),function t(e){if(console.log(e.length),e.length<=0)return o.heatPlaces=i,void console.log(o.heatPlaces);n.default.getPlace(o,e[0].place_id,function(a){i.push(a),t(e.slice(1))})}(e)})}else alert("error fetching place info")}),n.default.getPlace(this,this.place_id,function(e){console.log(e),t.graph_data=e.body.heatMap}),n.default.getMessages(this,this.place_id,function(e){t.messages=e.body,console.log("MSGS"),console.log(t.messages)})},goToPlace:function(t){console.log(t),s.a.push({name:"place",params:{id:t}})},postMessage:function(t){var e=this;console.log(t),n.default.postMessage(this,t,this.place_id,function(t){n.default.getMessages(e,e.place_id,function(t){e.messages=t.body})})},likeMessage:function(t){var e=this;n.default.likeMessage(this,t,function(t){n.default.getMessages(e,e.place_id,function(t){e.messages=t.body})})},checkIn:function(){var t=this;n.default.checkIn(this,this.place_id,function(e){t.checked_in=t.place_id==n.default.checked_in_place})},checkOut:function(){var t=this;n.default.checkOut(this,this.place_id,function(e){t.checked_in=t.place_id==n.default.checked_in_place})}},watch:{$route:function(t,e){console.log("asdf"),this.updatePlace()}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){var s=a(0)(a(8),a(47),null,null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(9),a(41),null,null);t.exports=s.exports},function(t,e,a){a(27);var s=a(0)(a(10),a(50),"data-v-a7c54fd0",null);t.exports=s.exports},function(t,e,a){a(19);var s=a(0)(a(11),a(39),"data-v-23e797f9",null);t.exports=s.exports},function(t,e,a){a(23);var s=a(0)(a(12),a(43),null,null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(13),a(48),null,null);t.exports=s.exports},function(t,e,a){a(25);var s=a(0)(a(14),a(45),null,null);t.exports=s.exports},function(t,e,a){a(22);var s=a(0)(a(15),a(42),"data-v-459fa74b",null);t.exports=s.exports},function(t,e,a){a(24);var s=a(0)(a(16),a(44),"data-v-543fb8cd",null);t.exports=s.exports},function(t,e,a){a(26);var s=a(0)(a(17),a(46),"data-v-611f57a2",null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(18),a(49),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",{staticClass:"modal is-active"},[a("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"box"},[a("div",{staticClass:"content has-text-left"},[a("h1",{staticClass:"has-text-centered"},[t._v("Sign Up for Capacity")]),t._v(" "),a("p",{staticClass:"control has-icon has-icon-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("p",{staticClass:"control has-icon has-icon-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"control is-grouped"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.is_submitting,"is-disabled":t.invalidFields},on:{click:t.signUp}},[t._v("Sign Up")])]),t._v(" "),a("p",{staticClass:"control"},[a("button",{staticClass:"button is-link",on:{click:t.closeModal}},[t._v("Cancel")])])])])])]),t._v(" "),a("button",{staticClass:"modal-close",on:{click:t.closeModal}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav has-shadow"},[a("div",{staticClass:"container"},[a("div",{staticClass:"nav-left"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[a("h1",{staticClass:"title has-text-centered is-large"},[t._v("Capacity")])])],1),t._v(" "),a("span",{staticClass:"nav-toggle",on:{click:t.toggleMenu}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")]),t._v(" "),a("div",{staticClass:"nav-right nav-menu",class:{"is-active":t.menu_open}},[a("a",{staticClass:"nav-item",on:{click:function(e){t.openModal("about")}}},[t._v("\r\n        About\r\n      ")]),t._v(" "),t.user.authenticated?a("a",{staticClass:"nav-item",on:{click:function(e){t.openModal("account")}}},[t._v("\r\n        Account\r\n      ")]):t._e(),t._v(" "),a("span",{staticClass:"nav-item"},[t.user.authenticated?t._e():a("a",{staticClass:"button",on:{click:function(e){t.openModal("signup")}}},[t._m(0),t._v(" "),a("span",[t._v("Sign Up")])]),t._v(" "),t.user.authenticated?t._e():a("a",{staticClass:"button is-primary",on:{click:function(e){t.openModal("login")}}},[t._m(1),t._v(" "),a("span",[t._v("Log In")])])])]),t._v(" "),a("nav_about",{attrs:{visible:t.modals.about},on:{closeModal:function(e){t.closeModal("about")}}}),t._v(" "),a("nav_account",{attrs:{visible:t.modals.account},on:{closeModal:function(e){t.closeModal("account")}}}),t._v(" "),a("nav_login",{attrs:{visible:t.modals.login},on:{closeModal:function(e){t.closeModal("login")}}}),t._v(" "),a("nav_signup",{attrs:{visible:t.modals.signup},on:{closeModal:function(e){t.closeModal("signup")}}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-user-plus"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-user"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",{staticClass:"modal is-active"},[a("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"box"},[a("div",{staticClass:"content"},[a("h1",[t._v("Account Info")]),t._v(" "),a("p",[t._v("The user will be able to view and manage their account and settings here.")])])])]),t._v(" "),a("button",{staticClass:"modal-close",on:{click:t.closeModal}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{attrs:{id:"checkIn"}},[a("a",{staticClass:"button is-large has-text-centered",class:{"is-primary":!t.checked_into,"is-warning":t.checked_into},on:{click:t.checkInOut}},[t._v(t._s(t.checked_into?"Check out":"Check In"))])])]),t._v(" "),a("br"),t._v(" "),a("h1",{staticClass:"title"},[t._v("Comments")]),t._v(" "),t._l(t.msgs,function(e){return a("article",{staticClass:"media"},[t._m(0,!0),t._v(" "),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(e.user))]),t._v(" "),a("br"),t._v("\r\n          "+t._s(e.text)+"\r\n        "),a("br"),t._v(" "),t.user.authenticated?a("small",[a("a",{on:{click:function(a){t.likeMessage(e.id)}}},[t._v("Like")]),t._v(" · ")]):t._e(),t._v(" "),a("small",[t._v(t._s(e.voteCount)+" like(s) · ")]),t._v(" "),a("small",[t._v(t._s(e.createdAt))])])])])])}),t._v(" "),t.messages&&t.messages.length?t._e():a("p",[t._v("(No comments...)")]),t._v(" "),t.user.authenticated?a("article",{staticClass:"media"},[t._m(1),t._v(" "),a("div",{staticClass:"media-content"},[a("p",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"textarea",attrs:{placeholder:"Add a comment...",maxlength:"300"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"button",class:{"is-disabled":""==t.comment},on:{click:t.submitMessage}},[t._v("Post comment")])])]):t._e()],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"media-left"},[a("p",{staticClass:"image is-64x64"},[a("img",{attrs:{src:"http://blog.sumall.com/wp-content/uploads/2015/05/default-profile-01.png"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"media-left"},[a("p",{staticClass:"image is-64x64"},[a("img",{attrs:{src:"http://blog.sumall.com/wp-content/uploads/2015/05/default-profile-01.png"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title"},[t._v("Location Activity")]),t._v(" "),a("canvas",{attrs:{id:"timeChart"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title"},[t._v("Suggested Places")]),t._v(" "),t._l(t.filtered_recommendations,function(e){return a("a",{staticClass:"media",on:{click:function(a){t.goTo(e.place_id)}}},[a("figure",{staticClass:"media-left"},[a("p",{staticClass:"image is-64x64"},[a("img",{attrs:{src:e.photos[0].getUrl({maxWidth:128,maxHeight:128})}})])]),t._v(" "),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(" "+t._s(e.name))]),t._v("\r\n          "+t._s(e.location)),a("br"),t._v(" "),a("em",[t._v("Rating: "+t._s(e.rating))])])])])])}),t._v(" "),t.filtered_recommendations&&t.filtered_recommendations.length?t._e():a("p",[t._v("\r\n  (No suggestions available...)\r\n")])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-image"},[a("div",{attrs:{id:"filters-panel"}},[a("div",{staticClass:"field"},[a("a",{staticClass:"button",on:{click:function(e){t.toggleHeatmap()}}},[t._v("Toggle Heatmap")])]),t._v(" "),a("div",{staticClass:"field"},[a("a",{staticClass:"button",on:{click:function(e){t.toggleFilters()}}},[t._v("Toggle Filters")]),t._v(" "),a("a",{staticClass:"button filter no-display",attrs:{id:"trafficIcon"},on:{click:function(e){t.toggleTraffic()}}},[t._m(0)]),t._v(" "),a("a",{staticClass:"button filter no-display",attrs:{id:"transitIcon"},on:{click:function(e){t.toggleTransit()}}},[t._m(1)]),t._v(" "),a("a",{staticClass:"button filter no-display",attrs:{id:"bicycleIcon"},on:{click:function(e){t.toggleBicycle()}}},[t._m(2)]),t._v(" "),a("a",{staticClass:"button filter no-display",attrs:{id:"clearIcon"},on:{click:function(e){t.toggleLayerClear()}}},[t._m(3)])])]),t._v(" "),a("div",{attrs:{id:"map"}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-car"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-bus"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-bicycle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fa fa-ban"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-fullheight"},[a("div",{staticClass:"hero-head"},[a("navbar")],1),t._v(" "),a("div",{staticClass:"hero-body",attrs:{id:"hero-body-id"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half is-offset-one-quarter"},[a("img",{attrs:{src:"https://files.slack.com/files-pri/T3R2NUV7E-F4PN7L80P/finallogo.png"}}),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"control has-icon has-icon-right",attrs:{id:"search-bar"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_text,expression:"search_text"}],staticClass:"input is-large",attrs:{type:"text",placeholder:t.placeholder_text},domProps:{value:t.search_text},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.submit_text(e)},input:function(e){e.target.composing||(t.search_text=e.target.value)}}}),t._v(" "),a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fa fa-search",attrs:{id:"search-icon"},on:{click:t.submit_text}})])]),t._v(" "),a("table",{staticClass:"table is-bordered autocomplete"},[a("tbody",t._l(t.suggestions,function(e){return a("tr",{on:{click:function(a){t.selectPlace(e)}}},[a("td",[t._v(t._s(e.description))])])}))])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",{staticClass:"modal is-active"},[a("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"box"},[a("div",{staticClass:"content"},[a("h1",[t._v("About Capacity")]),t._v(" "),a("p",{staticClass:"has-text-left"},[t._v("\r\n          Our web-based application, currently named Capacity, is a tool that will help you save time by giving you the information you wish you had before getting to your destination. Capacity will report information on wait times, crowd sizes, seat availability, and more. \r\n          "),a("br"),a("br"),t._v("\r\n          This information is recorded interactively, by allowing users to self-report data with incentives from the destinations they are visiting. The self-reported data can be self-moderated, by allowing other users to comment and vote on the reliability of the information. Furthermore, crowd sizes can also be determined with data collected from location services as permitted by the user.\r\n        ")]),t._v(" "),a("a",{attrs:{href:"https://ssajnani.github.io/Capacity/homepage"}},[t._v("\r\n          Visit our project website!\r\n        ")])])])]),t._v(" "),a("button",{staticClass:"modal-close",on:{click:t.closeModal}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"title is-3"},[t._v(t._s(t.name))]),t._v(" "),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.address))]),t._v(" "),a("p",{staticClass:"subtitle has-text-centered"},[t._v("Rating")]),t._v(" "),a("div",{staticClass:"has-text-centered",attrs:{id:"starRatingContainer"}}),t._v(" "),a("br")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),t._v(" "),a("div",{staticClass:"section container",attrs:{id:"placepage"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("place_info",{attrs:{name:t.name,address:t.address,rating:t.rating}}),t._v(" "),a("place_graph",{attrs:{graph_data:t.graph_data}})],1),t._v(" "),a("div",{staticClass:"column is-half"},[a("div",{staticClass:"card"},[a("place_map",{attrs:{coords:t.coords,recommended:t.nearby,heatPlaces:t.heatPlaces}})],1),t._v(" "),a("div",{staticClass:"section content"},[a("place_messages",{attrs:{messages:t.messages,checked_in:t.checked_in},on:{postMessage:t.postMessage,likeMessage:t.likeMessage,checkOut:t.checkOut,checkIn:t.checkIn}})],1)]),t._v(" "),a("div",{staticClass:"column"},[a("place_recommend",{attrs:{recommendations:t.recommended},on:{goToPlace:t.goToPlace}})],1)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",{staticClass:"modal is-active"},[a("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"box"},[a("div",{staticClass:"content has-text-left"},[a("h1",{staticClass:"has-text-centered"},[t._v("Login In to Capacity")]),t._v(" "),a("p",{staticClass:"control has-icon has-icon-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("p",{staticClass:"control has-icon has-icon-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"control is-grouped"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.is_submitting,"is-disabled":t.invalidFields},on:{click:t.logIn}},[t._v("Log In")])]),t._v(" "),a("p",{staticClass:"control"},[a("button",{staticClass:"button is-link",on:{click:t.closeModal}},[t._v("Cancel")])])])])])]),t._v(" "),a("button",{staticClass:"modal-close",on:{click:t.closeModal}})]):t._e()])},staticRenderFns:[]}},,,,,function(t,e){},function(t,e,a){a(6),a(1),t.exports=a(3)}],[56]);
//# sourceMappingURL=app.5e76d568b0d081e2ebca.js.map