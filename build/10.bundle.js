(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{518:function(e,a,t){e.exports={pageWrapper:"e020d5f2",pageBg:"f574c6b4",pinkBg:"de5357a4",qrScanPageWrapper:"_09032fe5",headerClearence:"_59d913aa"}},519:function(e,a,t){"use strict";a.a=t.p+"bdbb8952fc7647ecb7de73462c773e58.png"},539:function(e,a,t){e.exports={welcomeWrapper:"ce8bc414",langSelectionSection:"c014f581",bannerWrapper:"_3cf51675",bannerLogo:"f99a52b2",bannerText:"_2264ab5f",bannerText1:"c5989b9c",bannerText2:"e5581911",trustedByText:"_72a98dda",leftButton:"_2b904838",rightButton:"fa7a8a58",footerBottom:"f6d01273"}},564:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return I}));var n=t(0),r=t.n(n),c=t(29),l=t.n(c),o=t(37),u=t.n(o),i=t(198),s=t.n(i),g=t(91),f=t.n(g),d=t(92),p=t.n(d),m=t(68),b=t.n(m),h=t(15),v=t.n(h),E=t(45),y=t.n(E),B=t(38),k=t(25),C=t(57),L=t(146),N=t(539),x=t.n(N),S=t.p+"dbc51fa129c6b8cb4b2228b49301d686.jpg",T=t(519),w=function(e){var a=B.a.getLangTags(e.language),t=a.tag001,n=a.tag0011,c=a.tag002;a.tag037;return r.a.createElement("div",{className:x.a.bannerWrapper,style:{backgroundImage:"url(".concat(S,")")}},r.a.createElement("div",{className:x.a.bannerLogo},r.a.createElement("img",{src:T.a,alt:"logo"})),r.a.createElement("div",{className:x.a.bannerText},r.a.createElement("div",{className:x.a.bannerText1},t,r.a.createElement("br",null),n),r.a.createElement("div",{className:x.a.bannerText2},c)))},F=t(514);function R(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=b()(e);if(a){var r=b()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return p()(this,t)}}var W=function(e){f()(t,e);var a=R(t);function t(e){var n;return l()(this,t),n=a.call(this,e),v()(s()(n),"onSubmitHandler",(function(){var e=n.props,a=e.isAuthenticated,t=e.history;a?t.push("/"):t.push("/login")})),v()(s()(n),"handleLangChange",(function(e){n.setState({lang:e}),n.props.setLanguage(e)})),n.state={lang:localStorage.getItem("local-dukaan-language")?localStorage.getItem("local-dukaan-language"):"en"},n}return u()(t,[{key:"render",value:function(){var e=this,a=this.props.language,t=B.a.getLangTags(a),n=t.tag003,c=t.tag004,l=t.tag023,o=t.tag037,u=t.tag0371;return r.a.createElement("div",{className:x.a.welcomeWrapper},r.a.createElement(w,{language:a}),r.a.createElement("div",{className:x.a.trustedByText},o,r.a.createElement("br",null),u),r.a.createElement("div",{className:x.a.langSelectionSection},r.a.createElement("div",{onClick:function(){return e.handleLangChange("en")},className:x.a.leftButton,style:{backgroundColor:"en"===this.state.lang?"#FF6CBF":"#e9e9e9",color:"en"===this.state.lang?"white":"#A19FB0"}},n),r.a.createElement("div",{onClick:function(){return e.handleLangChange("hi")},className:x.a.rightButton,style:{backgroundColor:"hi"===this.state.lang?"#FF6CBF":"#e9e9e9",color:"hi"===this.state.lang?"white":"#A19FB0"}},c)),r.a.createElement("div",{className:x.a.footerBottom},r.a.createElement("div",{onClick:function(){return e.onSubmitHandler()}},l,r.a.createElement(F.a,{style:{position:"absolute",right:"1rem",top:"1.2rem"}}))))}}]),t}(n.Component);W.propTypes={language:y.a.string,setLanguage:y.a.func,isAuthenticated:y.a.any,history:y.a.any};var A=Object(C.b)((function(e){var a=e.UserReducers,t=e.LanguageReducers;return{isAuthenticated:a.isAuthenticated,language:t.language}}),(function(e){return{setLanguage:function(a){return e(L.a.setLanguage(a))}}}))(Object(k.g)(W)),_=t(518),j=t.n(_);function I(){return r.a.createElement("div",{className:j.a.pageWrapper},r.a.createElement(A,null))}}}]);