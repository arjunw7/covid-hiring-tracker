(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{515:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(516),l=t.n(r);a.a=function(e){var a=e.label,t=e.onClick,n=(e.icon,e.iconSrc),r=e.iconDesc,o=void 0===r?"":r,i=e.color,u=e.disabled,s=n&&c.a.createElement("img",{src:n,alt:o,width:"32px",height:"32px"});return c.a.createElement("div",{className:"".concat(l.a.buttonWrapper," ").concat(u?l.a.btnDisabled:"")},c.a.createElement("div",{className:"".concat(l.a.button," ").concat(i?l.a[i]:""),onClick:u?null:t},s,c.a.createElement("span",null,a)))}},516:function(e,a,t){e.exports={buttonWrapper:"d85eff02",btnDisabled:"_0015e39b",button:"_3ff8e929","btn-green":"_4e327e69","btn-pink":"_2936207f"}},517:function(e,a,t){e.exports={pageWrapper:"e020d5f2",pageBg:"f574c6b4",pinkBg:"de5357a4",qrScanPageWrapper:"_09032fe5",headerClearence:"_59d913aa"}},518:function(e,a,t){"use strict";a.a=t.p+"bdbb8952fc7647ecb7de73462c773e58.png"},535:function(e,a,t){e.exports={welcomeWrapper:"ce8bc414",langSelectionSection:"c014f581",bannerWrapper:"_3cf51675",bannerTop:"_38306aaf",bannerBottom:"b76ce87e",bannerLt:"_5761bbfb",bannerRt:"_44e7bb22",footerBottom:"f6d01273"}},547:function(e,a,t){e.exports={RadioButton:"_780a5ae2",RadioButtonChecked:"_27896a86",radioCheck:"_40edf990",radioChecked:"f666042b",radioNotChecked:"_3fa0a7e1"}},563:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t(0),c=t.n(n),r=t(29),l=t.n(r),o=t(37),i=t.n(o),u=t(198),s=t.n(u),d=t(90),g=t.n(d),p=t(91),f=t.n(p),m=t(68),b=t.n(m),h=t(15),v=t.n(h),E=t(45),k=t.n(E),C=t(38),N=t(25),S=t(57),_=t(146),R=t(515),L=t(535),y=t.n(L),B=t.p+"5e7459a99d4a4c30c6d404fba9b07919.jpg",w=t(518),W=function(e){var a=C.a.getLangTags(e.language),t=a.tag001,n=a.tag002,r=a.tag037;return c.a.createElement("div",{className:y.a.bannerWrapper},c.a.createElement("div",{className:y.a.bannerTop},c.a.createElement("img",{src:B,alt:"banner"}),c.a.createElement("span",null,r)),c.a.createElement("div",{className:y.a.bannerBottom},c.a.createElement("div",{className:y.a.bannerLt},c.a.createElement("h3",null,t),c.a.createElement("p",null,n)),c.a.createElement("div",{className:y.a.bannerRt},c.a.createElement("img",{src:w.a,alt:"logo"}))))},x=t(547),D=t.n(x),T=function(e){var a=e.isSelected?c.a.createElement("div",{className:D.a.radioCheck},c.a.createElement("div",{className:D.a.radioChecked})):c.a.createElement("div",{className:D.a.radioNotChecked});return c.a.createElement("div",{className:e.isSelected?D.a.RadioButtonChecked:D.a.RadioButton},a,c.a.createElement("label",null,c.a.createElement("input",{id:e.id,onChange:e.changed,value:e.value,type:"radio",checked:e.isSelected}),e.label))};function j(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=b()(e);if(a){var c=b()(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return f()(this,t)}}var A=function(e){g()(t,e);var a=j(t);function t(e){var n;return l()(this,t),n=a.call(this,e),v()(s()(n),"onSubmitHandler",(function(e){var a=n.props,t=a.isAuthenticated,c=a.history;t?c.push("/"):c.push("/login")})),v()(s()(n),"handleLangChange",(function(e){var a=e.target.value;n.setState({lang:a}),n.props.setLanguage(a)})),n.state={lang:localStorage.getItem("local-dukaan-language")?localStorage.getItem("local-dukaan-language"):"en"},n}return i()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.language,a=C.a.getLangTags(e),t=this.state.lang,n=a.tag003,r=a.tag004,l=a.tag023;return c.a.createElement("div",{className:y.a.welcomeWrapper},c.a.createElement(W,{language:this.props.language}),c.a.createElement("div",{className:y.a.langSelectionSection},c.a.createElement(T,{id:"English",value:"en",label:n,changed:this.handleLangChange,isSelected:"en"===t}),c.a.createElement(T,{id:"Hindi",value:"hi",label:r,changed:this.handleLangChange,isSelected:"hi"===t})),c.a.createElement("div",{className:y.a.footerBottom},c.a.createElement(R.a,{label:l,onClick:this.onSubmitHandler})))}}]),t}(n.Component);A.propTypes={language:k.a.string,setLanguage:k.a.func};var H=Object(S.b)((function(e){var a=e.UserReducers,t=e.LanguageReducers;return{isAuthenticated:a.isAuthenticated,language:t.language}}),(function(e){return{setLanguage:function(a){return e(_.a.setLanguage(a))}}}))(Object(N.g)(A)),I=t(517),J=t.n(I);function O(){return c.a.createElement("div",{className:J.a.pageWrapper},c.a.createElement(H,null))}}}]);