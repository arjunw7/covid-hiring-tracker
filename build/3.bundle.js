(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{527:function(e,t,n){e.exports={pageWrapper:"e020d5f2",pageBg:"f574c6b4",pinkBg:"de5357a4",qrScanPageWrapper:"_09032fe5",headerClearence:"_59d913aa"}},528:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),u=n(529),i=n.n(u);function c(){return r.a.createElement("div",{className:i.a.Bar})}},529:function(e,t,n){e.exports={Bar:"_3fcf53ae"}},530:function(e,t,n){e.exports={whiteTitle:"aa135a21",whiteLabel:"d8765122",whiteLabelMedium:"_878432a7",displayPhone:"_63d49425",otpInputsWrapper:"e518fba4",smallWhiteText:"_50a5e09b"}},540:function(e,t,n){e.exports={tilesWrapper:"_41531dee"}},541:function(e,t,n){e.exports={inputWrapper:"_1c8a08f5"}},563:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(26),i=n.n(u),c=n(34),o=n.n(c),l=n(122),s=n.n(l),p=n(69),f=n.n(p),h=n(70),m=n.n(h),g=n(56),d=n.n(g),b=n(12),v=n.n(b),N=n(51),y=n(35),E=n.n(y),O=n(153),k=n(528),C=n(540),L=n.n(C);function R(e){var t=e.children;return r.a.createElement("div",{className:L.a.tilesWrapper},t)}var x=n(32),V=n(21),T=n(150),P=n(530),M=n.n(P);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var w=function(e){f()(n,e);var t=S(n);function n(e){var a;return i()(this,n),a=t.call(this,e),v()(s()(a),"handleInput",(function(e){var t=e.target.value.replace(/[^0-9]/,"");"fourthNum"!==e.target.name&&1===t.length&&e.target.nextSibling.focus(),a.setState(v()({},e.target.name,t));var n=a.state,r=n.firstNum,u=n.secondNum,i=n.thirdNum,c=a.props.getOtpVal;"fourthNum"===e.target.name&&c(r+u+i+e.target.value)})),a.state={firstNum:"",secondNum:"",thirdNum:"",fourthNum:""},a}return o()(n,[{key:"render",value:function(){var e=this.state,t=e.firstNum,n=e.secondNum,a=e.thirdNum,u=e.fourthNum;return r.a.createElement("div",{className:M.a.otpInputsWrapper},r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"firstNum",maxLength:"1",value:t,pattern:"\\d*",inputMode:"numeric"}),r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"secondNum",maxLength:"1",value:n,pattern:"\\d*",inputMode:"numeric"}),r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"thirdNum",maxLength:"1",value:a,pattern:"\\d*",inputMode:"numeric"}),r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"fourthNum",maxLength:"1",value:u,pattern:"\\d*",inputMode:"numeric"}))}}]),n}(a.Component);w.propTypes={getOtpVal:E.a.func};var _=w,I=n(36);function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var A=function(e){f()(n,e);var t=W(n);function n(e){var a;return i()(this,n),a=t.call(this,e),v()(s()(a),"setOtpValue",(function(e){a.setState({otpValue:e})})),v()(s()(a),"handleVerifyPin",(function(){var e=a.props,t=e.phoneNumber,n=e.submitLoginOtp,r=a.state.otpValue,u={phone_number:t,otp:r};4===r.length&&n(u)})),v()(s()(a),"handleResendPin",(function(){var e=a.props;(0,e.resendLoginOtp)({phone_number:e.phoneNumber})})),a.state={otpValue:""},a}return o()(n,[{key:"render",value:function(){var e=this.props,t=e.backClick,n=e.phoneNumber;console.log(this.props.language);var u=I.a.getLangTags(this.props.language),i=u.tag008,c=u.tag011,o=u.tag012,l=u.tag013,s=u.tag038;return r.a.createElement(a.Fragment,null,r.a.createElement("p",{className:M.a.whiteLabelMedium},i),r.a.createElement("div",{className:M.a.displayPhone},r.a.createElement("p",null,n)),r.a.createElement("p",{className:M.a.whiteLabelMedium},c),r.a.createElement(_,{getOtpVal:this.setOtpValue}),r.a.createElement("p",{className:M.a.smallWhiteText},r.a.createElement("span",{onClick:t},"<< ".concat(s," ")),"|",r.a.createElement("span",{onClick:this.handleResendPin}," ".concat(o," >>"))),r.a.createElement(T.a,{label:l,onClick:this.handleVerifyPin}))}}]),n}(a.Component);A.propTypes={phoneNumber:E.a.oneOfType([E.a.number,E.a.string]),submitLoginOtp:E.a.func,backClick:E.a.func,language:E.a.string};var D=Object(N.b)(null,(function(e){return{submitLoginOtp:function(t){return e(x.a.submitLoginOtp(t))},resendLoginOtp:function(t){return e(x.a.resendLoginOtp(t))}}}))(A),F=n(541),j=n.n(F);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var U=function(e){f()(n,e);var t=B(n);function n(e){var a;i()(this,n),a=t.call(this,e),v()(s()(a),"handleChange",(function(e){var t=a.props.onChange,n=e.target.value.replace(/^[^6-9]*[^0-9]*/g,""),r=!1;10===n.length&&(r=!0),n.length>10||(a.setState({mobileNumber:n,isNumberValid:r}),t(n,r))}));var r=e.value;return a.state={isNumberValid:!1,mobileNumber:r||""},a}return o()(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.placeholder,u=this.state,i=u.mobileNumber,c=(u.isNumberValid,t&&r.a.createElement("label",{className:j.a.inputLabel},t));return r.a.createElement(a.Fragment,null,c,r.a.createElement("div",{className:j.a.inputWrapper},r.a.createElement("input",{type:"text",placeholder:n,value:i,onChange:this.handleChange})))}}]),n}(a.Component);function J(e){var t=e.phoneNumber,n=e.onChange,u=e.handleProceed,i=e.language,c=I.a.getLangTags(i),o=c.tag006,l=(c.tag007,c.tag008),s=c.tag009,p=c.tag010;return r.a.createElement(a.Fragment,null,r.a.createElement("h3",{className:M.a.whiteTitle},o),r.a.createElement("p",{className:M.a.whiteLabelMedium},l),r.a.createElement(U,{placeholder:s,onChange:n,value:t}),r.a.createElement(T.a,{label:p,onClick:u}))}J.propTypes={phoneNumber:E.a.oneOfType([E.a.number,E.a.string]),onChange:E.a.func,handleProceed:E.a.func,language:E.a.string};var K=J;function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var Y=function(e){f()(n,e);var t=q(n);function n(e){var a;return i()(this,n),a=t.call(this,e),v()(s()(a),"handleMobileInput",(function(e,t){a.setState({phoneNumber:e,isMobileNumberValid:t})})),v()(s()(a),"handleProceed",(function(){var e=a.state,t=e.isMobileNumberValid,n=e.phoneNumber,r=a.props.generateLoginOtp;t?a.setState({isVerifyOtpEnabled:!0}):a.setState({isVerifyOtpEnabled:!1}),t&&r({phone_number:n})})),v()(s()(a),"backClick",(function(){a.setState({isVerifyOtpEnabled:!1})})),a.state={phoneNumber:"",isMobileNumberValid:!1,isVerifyOtpEnabled:!1},a}return o()(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAuthenticated,n=e.getUserFromAuthToken,a=localStorage.getItem("TOKEN_KEY");!t&&a&&n()}},{key:"render",value:function(){var e=this.state,t=e.phoneNumber,n=e.isVerifyOtpEnabled,u=this.props,i=u.phoneObject,c=void 0===i?{}:i,o=u.isAuthenticated,l=u.language,s=c.phoneNumber,p=r.a.createElement(V.a,{to:"/"});return o?p:r.a.createElement(a.Fragment,null,r.a.createElement(k.a,null),r.a.createElement(O.a,null),r.a.createElement(R,null,n?r.a.createElement(D,{backClick:this.backClick,phoneNumber:s,language:l}):r.a.createElement(K,{onChange:this.handleMobileInput,handleProceed:this.handleProceed,phoneNumber:t,language:l})))}}]),n}(a.Component);Y.propTypes={phoneObject:E.a.object,isAuthenticated:E.a.bool,generateLoginOtp:E.a.func,getUserFromAuthToken:E.a.func,language:E.a.string};var z=Object(N.b)((function(e){var t=e.UserReducers,n=e.LanguageReducers;return{phoneObject:t.phoneObject,isAuthenticated:t.isAuthenticated,language:n.language}}),(function(e){return{generateLoginOtp:function(t){return e(x.a.generateLoginOtp(t))},getUserFromAuthToken:function(){return e(x.a.getUserFromAuthToken())}}}))(Y),G=n(527),H=n.n(G);t.default=function(){return r.a.createElement("div",{className:H.a.pageBg},r.a.createElement(z,null))}}}]);