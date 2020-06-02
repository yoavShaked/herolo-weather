(this["webpackJsonpherolo-weather"]=this["webpackJsonpherolo-weather"]||[]).push([[0],{100:function(e,t,n){e.exports=n(117)},116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),o=n(19),l=n(38),u=n(2),s=function(e){return{START:"".concat(e,"_START"),RESOLVED:"".concat(e,"_RESOLVED"),ERROR:"".concat(e,"_ERROR")}},d=s("GET_DAILY_FORCAST"),m=(s("GET_CURRENT_WEATHER"),s("GET_LOCATION_AUTOCOMPLETE")),p=s("SET_INITIAL_FORCAST"),f=s("ADD_TO_FAVORITES"),h="YFxhPdzDyzUxsJ2CzWAM83fAMVcGeQj5",g="http://dataservice.accuweather.com",b=function(e,t){return function(){var n="".concat(g,"/forecasts/v1/daily/5day/").concat(e,"?apikey=").concat(h,"&details=true&metric=").concat(t);return fetch(n).then((function(e){return e.json()}))}},w=function(e){return function(){var t="".concat(g,"/locations/v1/cities/autocomplete?apikey=").concat(h,"&q=").concat(e);return fetch(t).then((function(e){return e.json()}))}},O=function(e){return function(){var t="".concat(g,"/currentconditions/v1/").concat(e,"?apikey=").concat(h,"&details=true");return fetch(t).then((function(e){return e.json()}))}},x={isLoading:!1,suggestedLocations:[],errorMessage:""},v="Home",j="Favorites",y="Day",E="Night",T="Fahrenheit",S="Celsius",N=function(e){return 1.8*e+32},k=function(e){return 5*(e-32)/9},M=function(e){return Math.round(10*e)/10},F=function(e,t){switch(e){case T:return Object(u.flow)([N,M])(t);case S:return Object(u.flow)([k,M])(t);default:return t}},R={isLoading:!1,weatherForcast:[],cityName:"",description:"",errorMessage:"",fetchForcast:!1},I=function(e,t){return Object(u.flow)([Object(u.set)("isLoading",!1),Object(u.set)("fetchForcast",!1),Object(u.set)("errorMessage",""),Object(u.set)("weatherForcast",Object(u.map)((function(e){var t=e.Date,n=e.Day,a=e.Night,r=e.Temperature;return{date:t,Day:n,Night:a,temperature:{unit:"C"===Object(u.get)(["Maximum","Unit"],r)?S:T,max:Object(u.get)(["Maximum","Value"],r),min:Object(u.get)(["Minimum","Value"],r)}}}),Object(u.get)("DailyForecasts",e))),Object(u.set)("cityName",Object(u.get)("cityName",t)),Object(u.set)("cityId",Object(u.get)("cityId",t)),Object(u.set)("description",Object(u.get)(["Headline","Text"],e))])},L={unitType:S},D=n(65),C={favorites:null},A=function(e){return{iconId:Object(u.get)("WeatherIcon",e),currentTemperature:Object(u.get)("ApparentTemperature",e),windSpeed:"".concat(Object(u.get)(["Wind","Speed","Metric","Value"],e)," ").concat(Object(u.get)(["Wind","Speed","Metric","Unit"],e)),windDirction:Object(u.get)(["Wind","Direction","Localized"],e),weatherTitle:Object(u.get)("WeatherText",e),tempratureSummary:{min:Object(u.get)(["TemperatureSummary","Past24HourRange","Minimum"],e),max:Object(u.get)(["TemperatureSummary","Past24HourRange","Maximum"],e)},visibilty:"".concat(Object(u.get)(["Visibility","Metric","Value"],e)," ").concat(Object(u.get)(["Visibility","Metric","Unit"],e))}},_=Object(l.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.START:var n=Object(u.flow)([Object(u.set)("isLoading",!0),Object(u.set)("errorMessage","")])(e);return n;case m.RESOLVED:var a=Object(u.flow)([Object(u.set)("isLoading",!1),Object(u.set)("errorMessage",""),Object(u.set)("suggestedLocations",t.payload)])(e);return a;case m.ERROR:return Object(u.flow)([Object(u.set)("isLoading",!1),Object(u.set)("errorMessage",Object(u.get)("errorMessage",t))])(e);default:return e}},forcast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.START:var n=Object(u.flow)([Object(u.set)("isLoading",!0),Object(u.set)("fetchForcast",!0),Object(u.set)("errorMessage","")])(e);return n;case d.RESOLVED:var a=t.meta,r=t.payload,i=I(r,a)(e);return i;case d.ERROR:case p.ERROR:return Object(u.flow)([Object(u.set)("errorMessage",t.errorMessage),Object(u.set)("isLoading",!1),Object(u.set)("fetchForcast",!1)])(e);case"SET_DEGREE_UNIT_TYPE":var c=Object(u.get)("unitType",t.payload),o=function(e){return Object(u.set)("temperature",{unit:c,max:F(c,Object(u.get)(["temperature","max"],e)),min:F(c,Object(u.get)(["temperature","min"],e))},e)},l=Object(u.map)(o,e.weatherForcast);return console.log(l),Object(u.set)("weatherForcast",l,e);default:return e}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DEGREE_UNIT_TYPE":return Object(u.set)("unitType",Object(u.get)("unitType",t.payload),e);default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.RESOLVED:var n=t.payload,a=t.meta,r=Object(u.get)("cityName",a);return r&&"string"===typeof r?Object(u.set)(["favorites",r],Object(D.a)({cityId:Object(u.get)("cityId",a),cityName:r},A(Object(u.isArray)(n)?n[0]:n)),e):e;case f.ERROR:return e;case"REMOVE_FROM_FAVORITES":var i=t.payload.cityName,c=e.favorites;i&&"string"===typeof i&&delete c[i];var o=Object(u.set)("favorites",Object(D.a)({},c),e);return o;default:return e}}}),V=function(e){return function(t){return function(n){var a=Object(u.get)("HTTP_ACTION",n);if(!a)return t(n);var r=a.endpoint,i=a.meta;t({type:a.type.START}),r().then((function(t){e.dispatch({type:a.type.RESOLVED,payload:t,meta:i})})).catch((function(t){e.dispatch({type:a.type.ERROR,errorMessage:a.errorMessage})}))}}},P=function(e){return function(t){return function(n){return console.log("dispatching",n),console.log("prev state",e.getState()),t(n)}}},W=function(e){return{HTTP_ACTION:Object.assign({endpoint:null,payload:null,type:""},e)}},z=function(e){var t=e.cityId,n=e.metric,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W({type:d,endpoint:b(t,n),meta:Object(u.set)("cityId",t,a),errorMessage:"Something went wrong... Faild to fetch daily forcast."})},U=function(e){return function(t){return function(n){if(Object(u.get)("type",n)!==p.RESOLVED)return t(n);var a=Object(u.get)(["payload","0","Key"],n),r=n.meta;e.dispatch(z({cityId:a,metric:Object(u.get)("metric",r)},Object(u.get)("meta",n)))}}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.d)(_,e,Object(l.a)(P,V,U))},Y=n(13),G=n(31),J=n(14),K=n(20),q=n(60),B=n.n(q),Q=n(118),Z=n(161),$=n(156),X=n(80),ee=n.n(X);function te(){var e=Object(Y.a)(["\n  display: flex;\n  flex-direction: ",";\n  width: ",";\n  height: ",";\n"]);return te=function(){return e},e}var ne=J.a.div(te(),(function(e){return e.flexDirection||"row"}),(function(e){return e.width||"auto"}),(function(e){return e.height||"auto"})),ae=n(152),re=n(164);function ie(e){var t=e.checkedLabel,n=e.uncheckedLabel,i=e.afterChange,c=Object(a.useState)({checked:!0,label:t}),o=Object(K.a)(c,2),l=o[0],s=o[1];return r.a.createElement(ae.a,{control:r.a.createElement(re.a,{checked:l.checked,onChange:function(e){var a=e.target.checked,r=a?t:n;Object(u.isFunction)(i)&&i(r),s({checked:a,label:r})},name:"checked",color:"primary"}),label:l.label})}var ce=Object(o.b)(null,{setUnitType:function(e){return{type:"SET_DEGREE_UNIT_TYPE",payload:{unitType:e}}}})((function(e){var t=e.setUnitType;return r.a.createElement(ie,{afterChange:t,checkedLabel:S,uncheckedLabel:T})}));function oe(){var e=Object(Y.a)(["\n  justify-content: space-between;\n  height: 80px;\n  background: linear-gradient(\n    90deg,\n    rgba(84, 84, 171, 1) 0%,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(7, 7, 11, 1) 100%,\n    rgba(11, 219, 244, 1) 100%\n  );\n\n  .MuiTabs-root {\n    height: 80px;\n  }\n  .MuiTabs-flexContainer {\n    height: 100%;\n    a {\n      color: #fff;\n      text-decoration: none;\n      text-transform: capitalize;\n    }\n  }\n  .title {\n    width: fit-content;\n    height: fit-content;\n    color: #fff;\n    margin: auto 0 auto 30px;\n  }\n  .MuiTypography-body1 {\n    color: #fff;\n  }\n  .Config {\n    margin: auto 0 auto 10px;\n  }\n  .MuiFormControlLabel-root {\n    margin-left: 50px;\n  }\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n    right: 0px;\n    top: 80px;\n    .MuiTypography-body1 {\n      color: black;\n    }\n  }\n\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  .dropdown-content a:hover {\n    background-color: #ddd;\n  }\n\n  .dropdown:hover .dropdown-content {\n    display: block;\n  }\n\n  .with-dropdown {\n    justify-content: space-between;\n  }\n  .MuiSvgIcon-root {\n    color: white;\n    width: 68px;\n    height: 34px;\n    margin-top: 24px;\n  }\n  .left-container-collapse {\n    .MuiFormControlLabel-root {\n      margin-left: 0;\n    }\n  }\n"]);return oe=function(){return e},e}var le=Object(J.a)(ne)(oe()),ue={"":0,favorites:1};function se(){var e=function(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(a.useState)(t),r=Object(K.a)(n,2),i=r[0],c=r[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){c(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),i}().width,t=B.a.trim(window.location.pathname,"/"),n=B.a.get(ue,t)||0,i=Object(a.useState)(n),c=Object(K.a)(i,2),o=c[0],l=c[1],u=r.a.createElement("div",{className:"dropdown"},r.a.createElement(ee.a,null),r.a.createElement("div",{class:"dropdown-content"},r.a.createElement(G.b,{to:"/"},r.a.createElement(Q.a,null,v)),r.a.createElement(G.b,{to:"/favorites"},r.a.createElement(Q.a,null,j))));return e>=487?r.a.createElement(le,null,r.a.createElement(ne,null,r.a.createElement(Q.a,{className:"title"},"Herolo Weather"),r.a.createElement(ce,{className:"Config"})),r.a.createElement(Z.a,{value:o,onChange:function(e,t){return l(t)}},r.a.createElement($.a,{label:r.a.createElement(G.b,{to:"/"},v)}),r.a.createElement($.a,{label:r.a.createElement(G.b,{to:"/favorites"},j)}))):r.a.createElement(le,null,r.a.createElement(ne,{className:"left-container-collapse"},r.a.createElement(Q.a,{className:"title"},"Herolo Weather"),r.a.createElement(ce,null)),u)}var de=n(16),me=n(81),pe=n(82),fe=n(88),he=n(87),ge=n(163),be=function(e){var t=e.severity,n=e.context;return r.a.createElement(ge.a,{severity:t},r.a.createElement(Q.a,null,n))};be.defaultProps={severity:"error"};var we=be;function Oe(){var e=Object(Y.a)(["\n  .MuiAlert-standardError {\n    color: #f45047;\n    background-color: #f3bfe1;\n    margin: auto;\n    width: 752px;\n    margin-top: 147px;\n  }\n"]);return Oe=function(){return e},e}var xe=function(e){Object(fe.a)(n,e);var t=Object(he.a)(n);function n(e){var a;return Object(me.a)(this,n),(a=t.call(this,e)).state={error:null,errorInfo:null},a}return Object(pe.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){if(this.state.errorInfo){var e=this.state.error&&this.state.error.toString()||"Something went wrong...";return r.a.createElement(ve,null,r.a.createElement(we,{context:e}))}return this.props.children}}]),n}(r.a.Component),ve=J.a.div(Oe()),je=xe,ye=n(160),Ee=n(162);function Te(){var e=Object(Y.a)(["\n  .MuiAlert-standardError {\n    width: 306px;\n    margin-left: 277px;\n  }\n"]);return Te=function(){return e},e}function Se(){var e=Object(Y.a)(["\n         width: fit-content;\n         margin: 0 auto;\n         .MuiFormControl-fullWidth {\n           width: 800px;\n           @media screen and (max-width: 1024px) {\n             width: 800px;\n           }\n           @media screen and (max-width: 900px) {\n             width: 600px;\n           }\n\n           @media screen and (max-width: 646px) {\n             width: 500px;\n           }\n           @media screen and (max-width: 560px) {\n             width: 363px;\n             margin: 0 auto;\n             margin-top: 20px;\n           }\n           @media screen and (max-width: 430px) {\n             width: 300px;\n             margin: 0 auto;\n             margin-top: 20px;\n           }\n           @media screen and (max-width: 375px) {\n             width: 236px;\n             margin: 0 auto;\n             margin-top: 20px;\n           }\n           @media screen and (max-width: 260px) {\n             width: 215px;\n    \n           }\n         }\n       "]);return Se=function(){return e},e}var Ne=Object(J.a)(Ee.a)(Se()),ke=J.a.div(Te()),Me=function(e){return Object(u.get)("cityName",e)},Fe=function(e){var t=e.options,n=e.placeholder,i=e.getLocationAutocomplete,c=e.getDailyForcast,o=e.unitType,l=Object(a.useState)(!1),s=Object(K.a)(l,2),d=s[0],m=s[1],p=Object(u.debounce)(2e3,(function(e,n){if(function(e){return/^[a-zA-Z\s]+$/.test(e)}(n)){if(m(!1),n){var a=Object(u.find)((function(e){return n===Object(u.get)("cityName",e)}),t);a?c({cityId:Object(u.get)("cityId",a),metric:o===S},{cityName:Object(u.get)("cityName",a)}):i(n)}}else m(!0)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{freeSolo:!0,options:Object(u.map)(Me,t),onInputChange:p,renderInput:function(e){return r.a.createElement(ye.a,Object.assign({placeholder:n},e,{margin:"normal",variant:"outlined"}))}}),d&&r.a.createElement(ke,null,r.a.createElement(we,{context:"Please search in english letters only."})))};Fe.defaultProps={options:[],placeholder:"Search City"};var Re=Object(o.b)((function(e){return{options:(Object(u.get)(["weather","suggestedLocations"],e)||[]).map((function(e){return{cityName:Object(u.get)(["AdministrativeArea","LocalizedName"],e),cityId:Object(u.get)("Key",e)}})),unitType:Object(u.get)(["config","unitType"],e)}}),{getLocationAutocomplete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W({type:m,endpoint:w(e),meta:t,errorMessage:"Something went wrong... Faild to fetch location options."})},getDailyForcast:z})(Fe),Ie=n(63),Le=n.n(Ie),De=n(159),Ce=n(158);function Ae(){var e=Object(Y.a)(["\n  margin-top: 40px;\n"]);return Ae=function(){return e},e}function _e(){var e=Object(Y.a)(["\n  width: 800px;\n  margin: 40px auto auto auto;\n  .MuiSkeleton-pulse {\n    border-radius: 5px;\n  }\n  .Skeleton-weather {\n    margin: 0px 27px;\n  }\n  .Skeleton-text {\n    margin: 0 auto;\n  }\n"]);return _e=function(){return e},e}var Ve=Object(J.a)(ne)(_e()),Pe=Object(J.a)(ne)(Ae()),We=function(){return r.a.createElement(Ve,{flexDirection:"column"},r.a.createElement(Ce.a,{className:"Skeleton-text",variant:"text",width:127,height:24}),r.a.createElement(Ce.a,{className:"Skeleton-text",variant:"text",width:264,height:24}),r.a.createElement(Ce.a,{className:"Skeleton-text",variant:"text",width:450,height:24}),r.a.createElement(Pe,null,r.a.createElement(Ce.a,{className:"Skeleton-weather",variant:"rect",width:100,height:170}),r.a.createElement(Ce.a,{className:"Skeleton-weather",variant:"rect",width:100,height:170}),r.a.createElement(Ce.a,{className:"Skeleton-weather",variant:"rect",width:100,height:170}),r.a.createElement(Ce.a,{className:"Skeleton-weather",variant:"rect",width:100,height:170}),r.a.createElement(Ce.a,{className:"Skeleton-weather",variant:"rect",width:100,height:170})))};function ze(){var e=Object(Y.a)(["\n  background-image: url(",");\n  width: ",";\n  height: ",";\n"]);return ze=function(){return e},e}var Ue=J.a.div(ze(),(function(e){return"src/icons/".concat(e.img,".png")}),(function(e){return e.width||"75px"}),(function(e){return e.height||"45px"}));function He(){var e=Object(Y.a)(["\n  height: 209px;\n  justify-content: center;\n  @media screen and (max-width: 890px) {\n    flex-wrap: wrap;\n  }\n  @media screen and (max-width: 375px) {\n    flex-wrap: wrap;\n  }\n"]);return He=function(){return e},e}function Ye(){var e=Object(Y.a)(["\n  flex-wrap: wrap;\n  margin: 15px 30px 20px;\n  border-radius: 5px;\n  box-shadow: -3px 6px 41px 8px rgba(192, 206, 206, 0.49);\n  width: 120px;\n  height: 150px;\n  align-items: center;\n  padding-top: 20px;\n  .description {\n    white-space: nowrap;\n    width: 50px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 55px;\n  }\n"]);return Ye=function(){return e},e}var Ge=Object(J.a)(ne)(Ye()),Je=Object(J.a)(ne)(He()),Ke=Object(o.b)((function(e){return{weatherForcast:Object(u.get)(["forcast","weatherForcast"],e)}}))((function(e){var t=e.weatherForcast,n=e.dayTime;return r.a.createElement(Je,null,t.map((function(e,t){var a=Object(u.get)(["temperature","min"],e),i=Object(u.get)(["temperature","max"],e),c=Object(u.get)([n,"IconPhrase"],e),o=Object(u.get)([n,"Icon"],e);return r.a.createElement(Ge,{flexDirection:"column",key:"".concat(t,"-").concat(a,"-").concat(i)},r.a.createElement(Ue,{img:o}),r.a.createElement(De.a,{title:c},r.a.createElement(Q.a,{className:"description"},c)),r.a.createElement(Q.a,null,"".concat(a," / ").concat(i)))})))})),qe=n(85),Be=n.n(qe),Qe=n(86),Ze=n.n(Qe),$e=function(e){var t=e.initialValue,n=e.OnComponent,i=e.OffComponent,c=e.onClick,o=Object(a.useState)(t),l=Object(K.a)(o,2),s=l[0],d=l[1],m=s?n:i;return r.a.createElement(m,{onClick:function(){d(!s),Object(u.isFunction)(c)&&c(!s)}})},Xe=Object(o.b)((function(e){var t=Object(u.get)(["forcast","cityName"],e),n=!!Object(u.get)(["favorites","favorites",t],e);return{cityId:Object(u.get)(["forcast","cityId"],e),cityName:t,isFavorite:n}}),{addToFavorites:function(e){var t=e.cityId,n=e.cityName;return W({type:f,endpoint:O(t),meta:{cityId:t,cityName:n}})},removeFromFavorites:function(e){return{type:"REMOVE_FROM_FAVORITES",payload:{cityName:e}}}})((function(e){var t=e.cityId,n=e.cityName,a=e.addToFavorites,i=e.removeFromFavorites,c=e.isFavorite;return r.a.createElement($e,{initialValue:c,onClick:function(e){e?a({cityName:n,cityId:t}):i(n)},OnComponent:Be.a,OffComponent:Ze.a})}));function et(){var e=Object(Y.a)(["\n  justify-content: space-around;\n  align-items: center;\n  margin: 30px 0;\n"]);return et=function(){return e},e}function tt(){var e=Object(Y.a)(["\n         width: 800px;\n         margin: 40px auto auto auto;\n\n         border-radius: 10px;\n\n         box-shadow: -3px 6px 41px 8px rgba(28, 30, 30, 0.49);\n         background-color: white;\n         .MuiTypography-body1 {\n           margin: 0 auto;\n           color: #0c0505;\n         }\n         .title {\n           font-size: larger;\n           font-weight: 600;\n           height: 28px;\n           margin-top: 24px;\n         }\n         .description,\n         .time,\n         .title {\n           white-space: nowrap;\n           width: 500px;\n           overflow: hidden;\n           text-overflow: ellipsis;\n         }\n         @media screen and (max-width: 1024px) {\n           width: 800px;\n           margin: 0 auto;\n         }\n         @media screen and (max-width: 900px) {\n           width: 600px;\n           margin: 0 auto;\n           overflow-y: auto;\n           &::-webkit-scrollbar {\n             width: 15px;\n             border-radius: 5px;\n           }\n\n           &::-webkit-scrollbar-track {\n             box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n           }\n\n           &::-webkit-scrollbar-thumb {\n             background-color: darkgrey;\n             outline: 1px solid slategrey;\n           }\n         }\n         @media screen and (max-width: 646px) {\n           width: 500px;\n           .description,\n           .time,\n           .title {\n             white-space: nowrap;\n             width: 400px;\n             overflow: hidden;\n             text-overflow: ellipsis;\n           }\n         }\n         @media screen and (max-width: 560px) {\n           width: 360px;\n           margin-top: 22px;\n           .description,\n           .time,\n           .title {\n             white-space: nowrap;\n             width: 242px;\n             overflow: hidden;\n             text-overflow: ellipsis;\n           }\n         }\n         @media screen and (max-width: 430px) {\n           width: 300px;\n           .description,\n           .time,\n           .title {\n             white-space: nowrap;\n             width: 200px;\n             overflow: hidden;\n             text-overflow: ellipsis;\n           }\n         }\n         @media screen and (max-width: 375px) {\n           width: 236px;\n           .description,\n           .time,\n           .title {\n             white-space: nowrap;\n             width: 170px;\n             overflow: hidden;\n             text-overflow: ellipsis;\n           }\n         }\n         @media screen and (max-width: 260px) {\n           width: 215px;\n           .description,\n           .time,\n           .title {\n             white-space: nowrap;\n             width: 120px;\n             overflow: hidden;\n             text-overflow: ellipsis;\n           }\n         }\n       "]);return tt=function(){return e},e}var nt=Object(J.a)(ne)(tt()),at=Object(J.a)(ne)(et()),rt=Object(o.b)((function(e){return{cityName:Object(u.get)(["forcast","cityName"],e),isLoading:Object(u.get)(["forcast","isLoading"],e),description:Object(u.get)(["forcast","description"],e),fetchForcast:Object(u.get)(["forcast","fetchForcast"],e),unitType:Object(u.get)(["config","unitType"],e),errorMessage:Object(u.get)(["forcast","errorMessage"],e)}}),{setInitialForcast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return W({type:p,endpoint:w("Tel Aviv"),meta:e,errorMessage:"Something went wrong... Faild to load forcast."})}})((function(e){var t=e.setInitialForcast,n=e.cityName,i=e.description,c=e.isLoading,o=e.unitType,l=e.fetchForcast,u=e.errorMessage,s=Object(a.useState)(y),d=Object(K.a)(s,2),m=d[0],p=d[1];if(Object(a.useEffect)((function(){l||t({cityName:"Tel Aviv",metric:o===S})}),[]),c)return r.a.createElement(We,null);var f="".concat(Le()().format("dddd")," ").concat(Le()().format("MMMM Do YYYY, h:mm:ss a"));return r.a.createElement(nt,{flexDirection:"column"},r.a.createElement(De.a,{title:n},r.a.createElement(Q.a,{className:"title"},n)),r.a.createElement(De.a,{title:f},r.a.createElement(Q.a,{className:"time"},f)),r.a.createElement(De.a,{title:i},r.a.createElement(Q.a,{className:"description"},i)),r.a.createElement(at,null,r.a.createElement(ie,{checkedLabel:y,uncheckedLabel:E,afterChange:p}),r.a.createElement(Xe,null)),u?r.a.createElement(we,{context:u}):r.a.createElement(Ke,{dayTime:m}))})),it=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,null),r.a.createElement(je,null,r.a.createElement(rt,null)))};function ct(){var e=Object(Y.a)(["\n  display: grid;\n  grid-template-columns: 33.33% 33.33% 33.33%;\n  margin-bottom: 30px;\n  @media screen and (max-width: 1240px) {\n    grid-template-columns: 50% 50%;\n  }\n  @media screen and (max-width: 400px) {\n    grid-template-columns: 100%;\n  }\n"]);return ct=function(){return e},e}function ot(){var e=Object(Y.a)(["\n  justify-content: space-evenly;\n  align-items: center;\n"]);return ot=function(){return e},e}function lt(){var e=Object(Y.a)(["\n  width: 389px;\n  min-height: 300px;\n  justify-content: space-around;\n  margin-left: 20px;\n  margin-top: 20px;\n  border-radius: 5px;\n  box-shadow: -3px 6px 41px 8px rgba(192, 206, 206, 0.49);\n  .title {\n    font-weight: 600;\n    margin: 10px auto 0 auto;\n    white-space: nowrap;\n    width: 100px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .wind-icon {\n    margin: 10px auto 0 auto;\n  }\n  .wind-row {\n    margin: 0 auto;\n    width: 100%;\n  }\n  @media screen and (max-width: 800px) {\n    width: 250px;\n  }\n"]);return lt=function(){return e},e}var ut=Object(J.a)(ne)(lt()),st=Object(J.a)(ne)(ot()),dt=J.a.div(ct()),mt=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,n=t===S?"Metric":"Imperial",a=t===S?"C":"F",r=Object(u.get)(["tempratureSummary","min",n,"Value"],e),i=Object(u.get)(["tempratureSummary","max",n,"Value"],e),c=Object(u.get)(["currentTemperature",n,"Value"],e);return{cityName:Object(u.get)("cityName",e),iconId:Object(u.get)("iconId",e),title:Object(u.get)("weatherTitle",e),windSpeed:Object(u.get)("windSpeed",e),windDircection:Object(u.get)("windDirction",e),visibilty:Object(u.get)("visibilty",e),currentTemperature:"".concat(c," ").concat(a),temperatureSummary:"".concat(r," / ").concat(i)}}(e.weather,e.unitType),n=t.cityName,a=t.visibilty,i=t.iconId,c=t.title,o=t.windDircection,l=t.windSpeed,s=t.currentTemperature,d=t.temperatureSummary;return r.a.createElement(ut,{flexDirection:"column"},r.a.createElement(Q.a,{className:"title"},n),r.a.createElement(st,null,r.a.createElement(De.a,{title:c},r.a.createElement(Q.a,null,c)),r.a.createElement(Ue,{img:i})),r.a.createElement(st,null,r.a.createElement(De.a,{title:"Feels like ".concat(s)},r.a.createElement(Q.a,null,"Feels like"),r.a.createElement(Q.a,null,s))),r.a.createElement(st,null,r.a.createElement(De.a,{title:"Temperatures temperatureSummary"},r.a.createElement(Q.a,null,"Temperatures"),r.a.createElement(Q.a,null,d))),r.a.createElement(st,{className:"wind-row"},r.a.createElement(Ue,{width:"57px",height:"58px",img:"wind"}),r.a.createElement(De.a,{title:"Wind Speed ".concat(l)},r.a.createElement(Q.a,null,l)),r.a.createElement(De.a,{title:"Direction ".concat(o)},r.a.createElement(Q.a,null,o))),r.a.createElement(st,null,r.a.createElement(De.a,{title:"Visibily ".concat(a)},r.a.createElement(Q.a,null,"Visibily"),r.a.createElement(Q.a,null,a))))},pt=Object(o.b)((function(e){return{favorites:Object(u.get)(["favorites","favorites"],e),unitType:Object(u.get)(["config","unitType"],e)}}),{getDailyForcast:z})((function(e){var t=e.favorites,n=e.unitType,i=e.getDailyForcast,c=Object(a.useState)(!1),o=Object(K.a)(c,2),l=o[0],s=o[1],d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(){i({cityId:e,metric:t},n),s(!0)}};return l?r.a.createElement(de.a,{to:"/"}):r.a.createElement(dt,null,Object(u.map)((function(e){var t=Object(u.get)("cityName",e),a=Object(u.get)("cityId",e),i=n===S;return r.a.createElement("div",{onClick:d(a,i,{cityName:t}),key:t},r.a.createElement(mt,{weather:e,unitType:n}))}),t))})),ft=function(){return r.a.createElement(de.d,null,r.a.createElement(de.b,{exact:!0,path:"/",component:it}),r.a.createElement(de.b,{path:"/favorites",component:pt}))};function ht(){var e=Object(Y.a)(["\n  height: 100vh;\n"]);return ht=function(){return e},e}var gt=J.a.div(ht()),bt=function(){return r.a.createElement(G.a,null,r.a.createElement(gt,null,r.a.createElement(se,null),r.a.createElement(ft,null)))},wt=function(){return r.a.createElement(o.a,{store:H()},r.a.createElement(bt,null))};n(116);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(wt,null)),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.c9ea48c7.chunk.js.map