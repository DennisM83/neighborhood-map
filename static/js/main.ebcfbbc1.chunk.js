(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){e.exports=n(351)},149:function(e,t,n){},349:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(60),o=n.n(i),c=(n(149),n(13)),s=n(14),l=n(20),u=n(19),p=n(21),m=(n(39),n(34)),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hasAnError:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){alert("Oops! looks like something went wrong loading the map!"+e)}},{key:"render",value:function(){return this.setState.hasAnError?r.a.createElement("h2",null,"Oops!"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasAnError:!0}}}]),t}(a.Component),f=Object(m.withScriptjs)(Object(m.withGoogleMap)(function(e){return r.a.createElement(m.GoogleMap,{defaultZoom:10,defaultCenter:{lat:28.688239,lng:-81.399993},defaultAnimation:2},e.markers&&e.markers.filter(function(e){return e.isVisible}).map(function(t,n){var a=e.venues.find(function(e){return e.id===t.id});return r.a.createElement(m.Marker,{key:n,position:{lat:t.lat,lng:t.lng},animation:!0===t.isOpen?1:2,onClick:function(){return e.markerClick(t)}},t.isOpen&&r.a.createElement(m.InfoWindow,null,r.a.createElement("div",null,r.a.createElement("p",null,a.name),r.a.createElement("p",null,a.location.address),r.a.createElement("p",{id:"fourInfo"},"info provided by ",r.a.createElement("span",{id:"fourTitle"},"Foursquare")))))}))})),h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){window.gm_authFailure=function(){alert("Oops! looks like something went wrong loading the map")}}},{key:"render",value:function(){return r.a.createElement(d,this.props,r.a.createElement(f,Object.assign({},this.props,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAbs0suPVRKY8V7nXTVVjoWeVZYJjxqQNU",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100vh"}}),role:"application"})))}}]),t}(a.Component),v=(n(349),function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,null,[{key:"baseURL",value:function(){return"https://api.foursquare.com/v2"}},{key:"auth",value:function(){var e={client_id:"DE1DKNEUOSEUI2FOQT2MFCSGQYSWR2VCCK5BXXLBIWVRYAFR",client_secret:"ON5Y30V0RI0PCHPYOZJAFGY4YVP4SVYRKGDYIOY20PX1AOTD",v:"20181017"};return Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&")}},{key:"urlBuilder",value:function(e){return e?Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&"):""}},{key:"headers",value:function(){return{Accept:"application/json"}}},{key:"simpleFetch",value:function(t,n,a){var r={method:n,headers:e.headers()};return fetch("".concat(e.baseURL()).concat(t,"?").concat(e.auth(),"&").concat(e.urlBuilder(a)),r).then(function(e){return e.json()}).catch(function(){return alert("Oops! looks like something went wrong finding locations")})}}]),e}()),g=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,null,[{key:"search",value:function(e){return v.simpleFetch("/venues/search","GET",e)}},{key:"getVenueDetails",value:function(e){return v.simpleFetch("/venues/".concat(e),"GET")}}]),e}(),k=function(e){return r.a.createElement("button",{type:"button",className:"btn btn-secondary col-xs-2",onClick:e.toggle,"aria-pressed":"false"},r.a.createElement("span",null,"X"))},b=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expanded-lg navbar-dark bg-dark",id:"topbar"},r.a.createElement("div",{className:"text-center container-fluid"},"Neighborhood Map",r.a.createElement("div",{className:"col-xs-2",tabIndex:"0"},r.a.createElement(k,{toggle:e.toggle})))))},O=function(e){return r.a.createElement("li",{tabIndex:"1",onClick:function(){return e.sideBarClick(e)}},e.name)},y=function(e){return r.a.createElement("ul",{className:"list-unstyled"},e.venues&&e.venues.map(function(t,n){return r.a.createElement(O,Object.assign({key:n},t,{sideBarClick:e.sideBarClick}))}))},E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",restaurants:[]},n.filterTheVenues=function(){return""!==n.state.query.trim()?n.props.venues.filter(function(e){return e.name.toLowerCase().includes(n.state.query.toLowerCase())}):n.props.venues},n.reviseQuery=function(e){n.setState({query:e.target.value});var t=n.props.venues.map(function(t){var a=t.name.toLowerCase().includes(e.target.value.toLowerCase()),r=n.props.markers.find(function(e){return e.id===t.id});return r.isVisible=!!a,r});n.props.updateToTheState({markers:t})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sideMenu",role:"listitem",tabIndex:"1"},this.props.openMenu&&r.a.createElement("nav",{className:"navbar navbar-dark bg-dark",id:"navMenu"},r.a.createElement("span",{className:"navbar-span",id:"navbar-span"},"Local Eats",r.a.createElement("form",{className:"form-inline align-items-center col-auto"},r.a.createElement("input",{className:"form-control mr-sm-1",type:"search",placeholder:"Filter Restaurants",value:this.state.query,onChange:this.reviseQuery,"aria-label":"filter"}),r.a.createElement(y,Object.assign({},this.props,{venues:this.filterTheVenues(),sideBarClick:this.props.sideBarClick}))))))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={venues:[],markers:[],openMenu:!0,updateToTheState:function(e){n.setState(e)}},n.toggle=function(){n.setState(function(e){return{openMenu:!e.openMenu}})},n.markerClose=function(){var e=n.state.markers.map(function(e){return e.isOpen=!1,e});n.setState({markers:Object.assign(n.state.markers,e)})},n.markerClick=function(e){n.markerClose(),e.isOpen=!0,n.setState({markers:Object.assign(n.state.markers,e)});var t=n.state.venues.find(function(t){return t.id===e.id});g.getVenueDetails(e.id).then(function(e){var a=Object.assign(t,e.response.venue);n.setState({venues:Object.assign(n.state.venues,a)})})},n.sideBarClick=function(e){var t=n.state.markers.find(function(t){return t.id===e.id});n.markerClick(t)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.search({ll:"28.688239,-81.399993",query:"restaurant",limit:10}).then(function(t){var n=t.response.venues,a=n.map(function(e){return{lat:e.location.lat,lng:e.location.lng,isOpen:!1,isVisible:!0,id:e.id}});e.setState({venues:n,markers:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{toggle:this.toggle}),r.a.createElement(E,Object.assign({openMenu:this.state.openMenu},this.state,{sideBarClick:this.sideBarClick})),r.a.createElement(h,Object.assign({},this.state,{markerClick:this.markerClick})))}}]),t}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/neighborhood-map",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/neighborhood-map","/service-worker.js");w?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):C(t,e)})}}()},39:function(e,t,n){}},[[144,2,1]]]);
//# sourceMappingURL=main.ebcfbbc1.chunk.js.map