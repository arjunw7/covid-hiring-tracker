(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{515:function(e,t,n){e.exports={pageWrapper:"e020d5f2",pageBg:"f574c6b4",pinkBg:"de5357a4",qrScanPageWrapper:"_09032fe5",headerClearence:"_59d913aa"}},516:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(518),c=n.n(u),i=n(513);t.a=function(e){var t=e.label,n=e.onClick,a=(e.icon,e.iconSrc),u=e.iconDesc,o=void 0===u?"":u,l=e.color,s=e.disabled,p=a&&r.a.createElement("img",{src:a,alt:o,width:"32px",height:"32px"});return r.a.createElement("div",{className:"".concat(c.a.buttonWrapper," ").concat(s?c.a.btnDisabled:"")},r.a.createElement("div",{className:"".concat(c.a.button," ").concat(l?c.a[l]:""),onClick:s?null:n},p,r.a.createElement("span",null,t)),r.a.createElement(i.a,{style:{order:"2",color:"white",marginRight:"1rem",marginTop:"20px"}}))}},517:function(e,t,n){"use strict";t.a=n.p+"bdbb8952fc7647ecb7de73462c773e58.png"},518:function(e,t,n){e.exports={buttonWrapper:"d85eff02",btnDisabled:"_0015e39b",button:"_3ff8e929","btn-green":"_4e327e69","btn-pink":"_2936207f"}},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),u=n(517),c=n(521),i=n.n(c);function o(e){var t=e.size,n="logo".concat(t);return r.a.createElement("div",{className:"".concat(i.a.logoWrapper," ").concat(i.a[n])},r.a.createElement("img",{src:u.a,alt:""}))}},521:function(e,t,n){e.exports={logoWrapper:"_629360bb",logosmall:"d830e8e3",logoextraSmall:"_5e698ab0"}},531:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),u=n(532),c=n.n(u);function i(){return r.a.createElement("div",{className:c.a.Bar})}},532:function(e,t,n){e.exports={Bar:"_3fcf53ae"}},533:function(e,t,n){e.exports={whiteTitle:"aa135a21",whiteLabel:"d8765122",whiteLabelMedium:"_878432a7",displayPhone:"_63d49425",otpInputsWrapper:"e518fba4",smallWhiteText:"_50a5e09b"}},542:function(e,t,n){e.exports={tilesWrapper:"_41531dee"}},543:function(e,t,n){e.exports={inputWrapper:"_1c8a08f5"}},565:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(29),c=n.n(u),i=n(39),o=n.n(i),l=n(198),s=n.n(l),p=n(90),f=n.n(p),m=n(91),h=n.n(m),g=n(68),d=n.n(g),b=n(13),v=n.n(b),N=n(57),y=n(45),E=n.n(y),O=n(520),k=n(531),x=n(542),C=n.n(x);function R(e){var t=e.children;return r.a.createElement("div",{className:C.a.tilesWrapper},t)}var L=n(37),V=n(25),T=n(516),_=n(533),P=n.n(_);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}var w=function(e){f()(n,e);var t=S(n);function n(e){var a;return c()(this,n),a=t.call(this,e),v()(s()(a),"handleInput",(function(e){var t=e.target.value.replace(/[^0-9]/,"");"fourthNum"!==e.target.name&&1===t.length&&e.target.nextSibling.focus(),a.setState(v()({},e.target.name,t));var n=a.state,r=n.firstNum,u=n.secondNum,c=n.thirdNum,i=a.props.getOtpVal;"fourthNum"===e.target.name&&i(r+u+c+e.target.value)})),a.state={firstNum:"",secondNum:"",thirdNum:"",fourthNum:""},a}return o()(n,[{key:"render",value:function(){var e=this.state,t=e.firstNum,n=e.secondNum,a=e.thirdNum,u=e.fourthNum;return r.a.createElement("div",{className:P.a.otpInputsWrapper},r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"firstNum",maxLength:"1",value:t,pattern:"\\d*",inputMode:"numeric"}),r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"secondNum",maxLength:"1",value:n,pattern:"\\d*",inputMode:"numeric"}),r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"thirdNum",maxLength:"1",value:a,pattern:"\\d*",inputMode:"numeric"}),r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"fourthNum",maxLength:"1",value:u,pattern:"\\d*",inputMode:"numeric"}))}}]),n}(a.Component);w.propTypes={getOtpVal:E.a.func};var M=w,W=n(33);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}var I=function(e){f()(n,e);var t=D(n);function n(e){var a;return c()(this,n),a=t.call(this,e),v()(s()(a),"setOtpValue",(function(e){a.setState({otpValue:e})})),v()(s()(a),"handleVerifyPin",(function(){var e=a.props,t=e.phoneNumber,n=e.submitLoginOtp,r=a.state.otpValue,u={phone_number:t,otp:r};4===r.length&&n(u)})),v()(s()(a),"handleResendPin",(function(){var e=a.props;(0,e.resendLoginOtp)({phone_number:e.phoneNumber})})),a.state={otpValue:""},a}return o()(n,[{key:"render",value:function(){var e=this.props,t=(e.backClick,e.phoneNumber);console.log(this.props.language);var n=W.a.getLangTags(this.props.language),u=n.tag008,c=n.tag011,i=n.tag012,o=n.tag013;n.tag038;return r.a.createElement(a.Fragment,null,r.a.createElement("p",{className:P.a.whiteLabelMedium},u),r.a.createElement("div",{className:P.a.displayPhone},r.a.createElement("p",null,t)),r.a.createElement("p",{className:P.a.whiteLabelMedium},c),r.a.createElement(M,{getOtpVal:this.setOtpValue}),r.a.createElement("p",{className:P.a.smallWhiteText},r.a.createElement("span",{onClick:this.handleResendPin}," ".concat(i))),r.a.createElement(T.a,{label:o,onClick:this.handleVerifyPin}))}}]),n}(a.Component);I.propTypes={phoneNumber:E.a.oneOfType([E.a.number,E.a.string]),submitLoginOtp:E.a.func,backClick:E.a.func,language:E.a.string};var A=Object(N.b)(null,(function(e){return{submitLoginOtp:function(t){return e(L.a.submitLoginOtp(t))},resendLoginOtp:function(t){return e(L.a.resendLoginOtp(t))}}}))(I),F=n(543),j=n.n(F);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}var U=function(e){f()(n,e);var t=B(n);function n(e){var a;c()(this,n),a=t.call(this,e),v()(s()(a),"handleChange",(function(e){var t=a.props.onChange,n=e.target.value.replace(/^[^6-9]*[^0-9]*/g,""),r=!1;10===n.length&&(r=!0),n.length>10||(a.setState({mobileNumber:n,isNumberValid:r}),t(n,r))}));var r=e.value;return a.state={isNumberValid:!1,mobileNumber:r||""},a}return o()(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.placeholder,u=this.state,c=u.mobileNumber,i=(u.isNumberValid,t&&r.a.createElement("label",{className:j.a.inputLabel},t));return r.a.createElement(a.Fragment,null,i,r.a.createElement("div",{className:j.a.inputWrapper},r.a.createElement("input",{type:"text",placeholder:n,value:c,onChange:this.handleChange})))}}]),n}(a.Component);function J(e){var t=e.phoneNumber,n=e.onChange,u=e.handleProceed,c=e.language,i=W.a.getLangTags(c),o=i.tag006,l=(i.tag007,i.tag008),s=i.tag009,p=i.tag010;return r.a.createElement(a.Fragment,null,r.a.createElement("h3",{className:P.a.whiteTitle},o),r.a.createElement("p",{className:P.a.whiteLabelMedium},l),r.a.createElement(U,{placeholder:s,onChange:n,value:t}),r.a.createElement(T.a,{label:p,onClick:u}))}J.propTypes={phoneNumber:E.a.oneOfType([E.a.number,E.a.string]),onChange:E.a.func,handleProceed:E.a.func,language:E.a.string};var K=J;function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}var z=function(e){f()(n,e);var t=q(n);function n(e){var a;return c()(this,n),a=t.call(this,e),v()(s()(a),"handleMobileInput",(function(e,t){a.setState({phoneNumber:e,isMobileNumberValid:t})})),v()(s()(a),"handleProceed",(function(){var e=a.state,t=e.isMobileNumberValid,n=e.phoneNumber,r=a.props.generateLoginOtp;t?a.setState({isVerifyOtpEnabled:!0}):a.setState({isVerifyOtpEnabled:!1}),t&&r({phone_number:n})})),v()(s()(a),"backClick",(function(){a.setState({isVerifyOtpEnabled:!1})})),a.state={phoneNumber:"",isMobileNumberValid:!1,isVerifyOtpEnabled:!1},a}return o()(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAuthenticated,n=e.getUserFromAuthToken,a=localStorage.getItem("TOKEN_KEY");!t&&a&&n()}},{key:"render",value:function(){var e=this.state,t=e.phoneNumber,n=e.isVerifyOtpEnabled,u=this.props,c=u.phoneObject,i=void 0===c?{}:c,o=u.isAuthenticated,l=u.language,s=i.phoneNumber,p=r.a.createElement(V.a,{to:"/"});return o?p:r.a.createElement(a.Fragment,null,r.a.createElement(k.a,null),r.a.createElement(O.a,null),r.a.createElement(R,null,n?r.a.createElement(A,{backClick:this.backClick,phoneNumber:s,language:l}):r.a.createElement(K,{onChange:this.handleMobileInput,handleProceed:this.handleProceed,phoneNumber:t,language:l})))}}]),n}(a.Component);z.propTypes={phoneObject:E.a.object,isAuthenticated:E.a.bool,generateLoginOtp:E.a.func,getUserFromAuthToken:E.a.func,language:E.a.string};var Y=Object(N.b)((function(e){var t=e.UserReducers,n=e.LanguageReducers;return{phoneObject:t.phoneObject,isAuthenticated:t.isAuthenticated,language:n.language}}),(function(e){return{generateLoginOtp:function(t){return e(L.a.generateLoginOtp(t))},getUserFromAuthToken:function(){return e(L.a.getUserFromAuthToken())}}}))(z),G=n(515),H=n.n(G);t.default=function(){return r.a.createElement("div",{className:H.a.pageBg},r.a.createElement(Y,null))}}}]);