(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{524:function(e,n,a){e.exports={pageWrapper:"e020d5f2",pageBg:"f574c6b4",pinkBg:"de5357a4",qrScanPageWrapper:"_09032fe5",headerClearence:"_59d913aa"}},530:function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var t=a(13),r=a.n(t),c=a(0),l=a.n(c),o=a(531),i=a.n(o);function s(e){var n,a=e.label,t=e.placeholder,c=e.value,o=e.maxlength,s=e.type,u=e.name,p=e.onChange,m=a&&l.a.createElement("label",{className:i.a.inputLabel},a);return l.a.createElement("div",{className:i.a.inputWrapper},m,l.a.createElement("input",(n={type:"text",placeholder:t,value:c,maxLength:o,onChange:p},r()(n,"type",s),r()(n,"name",u),n)))}},531:function(e,n,a){e.exports={inputWrapper:"_0be442a8"}},545:function(e,n,a){var t=a(149),r=a(546);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};t(r,c);e.exports=r.locals||{}},546:function(e,n,a){(e.exports=a(150)(!1)).push([e.i,".formInline {\n  margin: 1rem 3rem;\n}\n\n.formInline hr {\n  width: 100%;\n  text-align: center;\n}\n\n.parentDot{\n  text-align: center;\n}\n\n.parentDot span{\n  color: rgba(168, 168, 168, 0.829);\n  font-size: large;\n}\n\n.dot1 {\n  height: 18px;\n  width: 18px;\n  background-color:#423f65;\n  border-radius: 50%;\n  margin: .5rem;\n  display: inline-block;\n}\n\n.dot2 {\n  height: 18px;\n  width: 18px;\n  background-color: rgb(196, 194, 194);\n  border-radius: 50%;\n  display: inline-block;\n  margin: .5rem;\n}\n\n.checkbox {\n  margin: 1.5rem 1rem 1.5rem 0rem;\n}\n\n.checkbox input {\n  transform: scale(2);\n  margin: 1rem;\n}\n\n.logotext {\n  text-align: center;\n  font-size: xx-large;\n  font-weight: bold;\n  margin: 1rem 1rem .5rem 1rem;\n}\n.backButton{\n  padding:1rem 0rem 0rem 1rem;\n}\n",""])},561:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(524),l=a.n(c),o=a(26),i=a.n(o),s=a(34),u=a.n(s),p=a(120),m=a.n(p),d=a(68),h=a.n(d),g=a(69),f=a.n(g),v=a(56),b=a.n(v),y=a(13),x=a.n(y),E=a(21),k=a(51),S=a(35),N=a.n(S),C=a(15),_=a(517),w=a(148),H=a(530),M=a(151),R=a(152),B=(a(545),a(38));function D(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,t=b()(e);if(n){var r=b()(this).constructor;a=Reflect.construct(t,arguments,r)}else a=t.apply(this,arguments);return f()(this,a)}}var I=function(e){h()(a,e);var n=D(a);function a(e){var t;return i()(this,a),t=n.call(this,e),x()(m()(t),"onSubmitHandler",(function(e){e.preventDefault();var n=t.state,a=n.shopName,r=n.address,c=n.delivery;if(a&&r){var l=["pickup"];!0===c&&l.push("delivery");var o={name:a,buisness:"groceries",address:{address_line_1:r,address_line_2:"Banglore",pincode:"560100",landmark:"Near GST Office"},delivery_options:l};t.props.createMerchantShop(o)}else _.a.info("Please enter shop name and address.")})),x()(m()(t),"onChangeHandler",(function(e){t.setState(x()({},e.target.name,e.target.value))})),x()(m()(t),"checkButtonHadler",(function(e){var n=t.state.delivery;t.setState({delivery:!n})})),t.state={shopName:"",address:"",delivery:!1},t}return u()(a,[{key:"checkShopInfo",value:function(e){return!!e&&!e.opening_time}},{key:"render",value:function(){var e=this.props,n=e.merchantShop,a=e.language,t=B.a.getLangTags(a),c=t.tag014,l=t.tag015,o=t.tag016,i=t.tag017,s=t.tag018,u=t.tag010;return r.a.createElement("div",null,n&&r.a.createElement(E.a,{to:"/"}),n&&this.checkShopInfo(n)&&r.a.createElement(E.a,{to:"/setupShopTiming"}),r.a.createElement(M.a,{size:"small"}),r.a.createElement(R.a,null),r.a.createElement("div",{className:"logotext"},c),r.a.createElement("div",{className:"parentDot"},r.a.createElement("span",null,"".concat(l)),r.a.createElement("br",null),r.a.createElement("div",{className:"dot1"}),r.a.createElement("div",{className:"dot2"})),r.a.createElement("form",{className:"formInline"},r.a.createElement(H.a,{type:"text",placeholder:o,name:"shopName",value:this.state.shopName,onChange:this.onChangeHandler}),r.a.createElement(H.a,{type:"text",placeholder:i,name:"address",value:this.state.address,onChange:this.onChangeHandler}),r.a.createElement("div",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",name:"delivery",id:"delivery",onChange:this.checkButtonHadler}),r.a.createElement("label",null,s),r.a.createElement("br",null),r.a.createElement("hr",null)),r.a.createElement(w.a,{label:u,onClick:this.onSubmitHandler})))}}]),a}(t.Component);I.propTypes={createMerchantShop:N.a.func,merchantShop:N.a.object,language:N.a.string};var W=Object(k.b)((function(e){var n=e.ShopReducers,a=e.LanguageReducers;return{merchantShop:n.merchantShop,language:a.language}}),(function(e){return{setupMerchantShop:function(n){return e(C.a.setupMerchantShop(n))},createMerchantShop:function(n){return e(C.a.createMerchantShop(n))}}}))(I);n.default=function(){return r.a.createElement("div",{className:l.a.pageWrapper},r.a.createElement(W,null))}}}]);