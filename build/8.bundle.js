(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{527:function(e,a,n){e.exports={pageWrapper:"e020d5f2",pageBg:"f574c6b4",pinkBg:"de5357a4",qrScanPageWrapper:"_09032fe5",headerClearence:"_59d913aa"}},537:function(e,a,n){e.exports={welcomeWrapper:"ce8bc414",langRadio:"_1ebe6d6e",langSelectionSection:"c014f581",bannerWrapper:"_3cf51675",bannerTop:"_38306aaf",bannerBottom:"b76ce87e",bannerLt:"_5761bbfb",bannerRt:"_44e7bb22",footerBottom:"f6d01273"}},562:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return H}));var t=n(0),r=n.n(t),c=n(26),l=n.n(c),o=n(34),i=n.n(o),u=n(122),g=n.n(u),s=n(69),p=n.n(s),m=n(70),d=n.n(m),f=n(56),h=n.n(f),b=n(13),v=n.n(b),E=n(35),y=n.n(E),L=n(38),R=n(21),N=n(51),S=n(155),k=n(150),w=n(537),C=n.n(w),W=n.p+"5e7459a99d4a4c30c6d404fba9b07919.jpg",_=n(157),B=function(e){var a=L.a.getLangTags(e.language),n=a.tag001,t=a.tag002,c=a.tag037;return r.a.createElement("div",{className:C.a.bannerWrapper},r.a.createElement("div",{className:C.a.bannerTop},r.a.createElement("img",{src:W,alt:"banner"}),r.a.createElement("span",null,c)),r.a.createElement("div",{className:C.a.bannerBottom},r.a.createElement("div",{className:C.a.bannerLt},r.a.createElement("h3",null,n),r.a.createElement("p",null,t)),r.a.createElement("div",{className:C.a.bannerRt},r.a.createElement("img",{src:_.a,alt:"logo"}))))};function T(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=h()(e);if(a){var r=h()(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return d()(this,n)}}var j=function(e){p()(n,e);var a=T(n);function n(e){var t;return l()(this,n),t=a.call(this,e),v()(g()(t),"onSubmitHandler",(function(e){var a=t.props,n=a.isAuthenticated,r=a.history;n?r.push("/"):r.push("/login")})),v()(g()(t),"handleLangChange",(function(e){var a=e.target.value;t.setState({lang:a}),t.props.setLanguage(a)})),t.state={lang:localStorage.getItem("local-dukaan-language")?localStorage.getItem("local-dukaan-language"):"en"},t}return i()(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.language,a=L.a.getLangTags(e),n=this.state.lang,t=a.tag003,c=a.tag004,l=a.tag023;return r.a.createElement("div",{className:C.a.welcomeWrapper},r.a.createElement(B,{language:this.props.language}),r.a.createElement("div",{className:C.a.langSelectionSection},r.a.createElement("div",{className:C.a.langRadio},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"English",name:"lang",value:"en",onChange:this.handleLangChange,checked:"en"===n}),"  ",t)),r.a.createElement("div",{className:C.a.langRadio},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"Hindi",name:"lang",value:"hi",onChange:this.handleLangChange,checked:"hi"===n}),"  ",c))),r.a.createElement("div",{className:C.a.footerBottom},r.a.createElement(k.a,{label:l,onClick:this.onSubmitHandler})))}}]),n}(t.Component);j.propTypes={language:y.a.string,setLanguage:y.a.func};var x=Object(N.b)((function(e){var a=e.UserReducers,n=e.LanguageReducers;return{isAuthenticated:a.isAuthenticated,language:n.language}}),(function(e){return{setLanguage:function(a){return e(S.a.setLanguage(a))}}}))(Object(R.g)(j)),A=n(527),D=n.n(A);function H(){return r.a.createElement("div",{className:D.a.pageWrapper},r.a.createElement(x,null))}}}]);