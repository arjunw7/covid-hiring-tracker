!function(e){function t(t){for(var n,a,u=t[0],s=t[1],i=t[2],p=0,h=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);h.length;)h.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==c[s]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={1:0},c={1:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];a[e]?t.push(a[e]):0!==a[e]&&{2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1}[e]&&t.push(a[e]=new Promise((function(t,r){for(var n=e+".main.css",c=u.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=(l=o[s]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===n||i===c))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){var l;if((i=(l=p[s]).getAttribute("data-href"))===n||i===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],h.parentNode.removeChild(h),r(o)},h.href=c,document.getElementsByTagName("head")[0].appendChild(h)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=function(e){return u.p+""+({}[e]||e)+".bundle.js"}(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}c[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var l=i;o.push([372,0]),r()}({11:function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));var n=r(29),a=r.n(n),c=r(37),o=r.n(c),u={SET_MERCHANT_SHOPS:"Set Merchant Shops",SETUP_MERCHANT_SHOP:"Setup Merchant Shop",GET_MERCHANT_SHOP_ITEMS:"Get merchant shop items",SET_MERCHANT_SHOP_ITEMS:"Set merchant shop items",CREATE_MERCHANT_SHOP:"Create Merchant Shop",SET_MERCHANT_NAME_AND_ADDRESS:"Set merchant name and address",UPDATE_MERCHANT_SHOP:"Update Merchant Shop",UPDATE_ITEM_SELECTION:"Update Item Selection",SET_UPDATED_ITEM_SELECTION:"Set Updated Time Selection",UPDTAE_SELECTED_ITEMS:"Update Selected Items",ADD_NEW_ITEM:"Add New Item",GET_SHOP_MENU:"Get Shop Menu",SET_SHOP_MENU:"Set Shop Menu"},s=function(){function e(){a()(this,e)}return o()(e,[{key:"setMerchantShops",value:function(e){return{type:u.SET_MERCHANT_SHOPS,data:e}}},{key:"setupMerchantShop",value:function(e){return{type:u.SETUP_MERCHANT_SHOP,data:e}}},{key:"getMerchantShopItems",value:function(e){return{type:u.GET_MERCHANT_SHOP_ITEMS,data:e}}},{key:"setMerchantShopItems",value:function(e){return{type:u.SET_MERCHANT_SHOP_ITEMS,data:e}}},{key:"createMerchantShop",value:function(e){return{type:u.CREATE_MERCHANT_SHOP,data:e}}},{key:"setMerchantNameAndAddress",value:function(e){return{type:u.SET_MERCHANT_NAME_AND_ADDRESS,data:e}}},{key:"updateMerchantShop",value:function(e){return{type:u.UPDATE_MERCHANT_SHOP,data:e}}},{key:"updateItemSelection",value:function(e,t,r){return{type:u.UPDATE_ITEM_SELECTION,isAvailable:e,itemId:t,category:r}}},{key:"setUpdateItemSelection",value:function(e){return{type:u.SET_UPDATED_ITEM_SELECTION,data:e}}},{key:"updateSelectedItems",value:function(e){return{type:u.UPDTAE_SELECTED_ITEMS,history:e}}},{key:"addNewItem",value:function(e,t){return{type:u.ADD_NEW_ITEM,data:e,history:t}}},{key:"getShopMenu",value:function(e){return{type:u.GET_SHOP_MENU,shopId:e}}},{key:"setShopMenu",value:function(e){return{type:u.SET_SHOP_MENU,data:e}}}]),e}();t.a=new s},120:function(e){e.exports=JSON.parse('{"en":{"tag001":"Manage Your business.","tag002":"Build your inventory list and share with your customers.","tag003":"English","tag004":"हिन्दी","tag005":"start","tag006":"Welcome!","tag007":"Unlock discounts & stay updated about this store","tag008":"Just register your phone number to begin","tag009":"Your phone number","tag010":"Proceed","tag011":"Please enter 4-digit pin sent to your number","tag012":"Resend PIN","tag013":"Verify PIN","tag014":"Setup your dukaan","tag015":"Shop details","tag016":"Shop Name","tag017":"Enter Complete Address","tag018":"we provide delivery","tag019":"Opening Time","tag020":"Closing Time","tag021":"Shop Category","tag022":"Select","tag023":"Start","tag024":"Hello!","tag025":"My saaman","tag026":"inventory","tag027":"Update Inventory","tag028":"Send Inventory to Customers","tag029":"Success Stories","tag030":"Vegetables","tag031":"Fruits","tag032":"Foodgrains, oil & masala","tag033":"Bakery & Dairy","tag034":"Snacks & Branded Foods","tag035":"Beverages","tag036":"Done","tag037":"Trusted by 1 Lakh retailers","tag038":"Back","tag039":"log out","tag040":"My Dukaan","storyFirstName1":"Mukesh","storyLastName1":"Maheshwari","storyLocation1":"Jaipur","storyText11":"30%","storyText12":"increase","storyText13":"in my sales","storyText14":"within 1 month","storyFirstName2":"Arun","storyLastName2":"Agarwal","storyLocation2":"New Delhi","storyText21":"2 times","storyText22":"increase","storyText23":"in my order","storyText24":"delivery speed","storyFirstName3":"Sharmila","storyLastName3":"Karim","storyLocation3":"Lucknow","storyText31":"More","storyText32":"orders","storyText33":"in my locality","storyText34":"every day"},"hi":{"tag001":"अपने व्यापर का नियंत्रण करें !","tag002":"अपनी इन्वेंटरी सूचि बनाये और आर्डर लेना सुरु करें !","tag003":"English","tag004":"हिन्दी","tag005":"शुरू करें","tag006":"स्वागत है","tag007":"डिस्काउंट अनलॉक करें और स्टोर की सूचना समयसार प्राप्त करें","tag008":"बस अपना फ़ोन नंबर रजिस्टर करके शुरू करें","tag009":"आपका फ़ोन नंबर","tag010":"आगे बढ़े","tag011":"कृपया अपने नंबर पर भेजा गया 4-अंकों का पिन दर्ज करें","tag012":"पिन पुनः भेजें","tag013":"पिन जांचे","tag014":"अपनी दुकान स्थापित करें","tag015":"(दुकान का विवरण)","tag016":"दुकान का नाम","tag017":"पूरा पता दर्ज करें","tag018":"हम वितरण प्रदान करते हैं","tag019":"खुलने का समय","tag020":"बंद करने का समय","tag021":"दुकान का प्रकार","tag022":"चयन करें","tag023":"प्रारंभ करें","tag024":"नमस्ते","tag025":"मेरा सामान","tag026":"सूची","tag027":"सूची अपडेट करें","tag028":"ग्राहकों को सूची भेजें","tag029":"सफलता की कहानियां","tag030":"सब्जियां","tag031":"फल","tag032":"अनाज तेल और मसाला","tag033":"बेकरी और डेयरी","tag034":"स्नैक्स और ब्रांडेड खाद्य पदार्थ","tag035":"पेय","tag036":"समाप्त","tag037":"1 लाख दुकानदार  द्वारा भरोसा किया गया","tag038":"पीछे जाएँ","tag039":"लॉग आउट","tag040":"मेरी दुकान","storyFirstName1":"मुकेश","storyLastName1":"माहेश्वरी","storyLocation1":"जयपुर","storyText11":"30%","storyText12":"वृद्धि","storyText13":"मेरी बिक्री में","storyText14":"1 महीने के भीतर","storyFirstName2":"अरुण","storyLastName2":"अग्रवाल","storyLocation2":"नई दिल्ली","storyText21":"2 गुना","storyText22":"ऑर्डर वितरण","storyText23":"की गति","storyText24":"में वृद्धि","storyFirstName3":"शर्मिला","storyLastName3":"करीम","storyLocation3":"लखनऊ","storyText31":"मेरे","storyText32":"इलाके से","storyText33":"हर रोज","storyText34":"अधिक आदेश"}}')},146:function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));var n=r(29),a=r.n(n),c=r(37),o=r.n(c),u={SET_LANGUAGE:"Set Language"},s=function(){function e(){a()(this,e)}return o()(e,[{key:"setLanguage",value:function(e){return{type:u.SET_LANGUAGE,language:e}}}]),e}();t.a=new s},173:function(e,t,r){"use strict";var n=r(0),a=Object(n.lazy)((function(){return r.e(3).then(r.bind(null,561))})),c=Object(n.lazy)((function(){return r.e(12).then(r.bind(null,559))})),o=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,560))})),u=Object(n.lazy)((function(){return r.e(9).then(r.bind(null,562))})),s=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,565))})),i=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,566))})),p=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,563))})),l=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,567))})),h=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,568))})),d=[{path:"/",exact:!0,component:o,isPrivate:!0},{path:"/login",exact:!0,component:a,isPrivate:!1},{path:"/shopMenu/:shopId",exact:!0,component:Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,564))})),isPrivate:!1},{path:"/welcome",exact:!0,component:u,isPrivate:!1},{path:"/setupShop",exact:!0,component:s,isPrivate:!1},{path:"/setupShopTiming",exact:!0,component:i,isPrivate:!1},{path:"/mySamaan",exact:!0,component:p,isPrivate:!1},{path:"/updateNameAddress",exact:!0,component:l,isPrivate:!1},{path:"/updateShopTiming",exact:!0,component:h,isPrivate:!1},{path:"*",exact:!1,component:c,isPrivate:!1}];t.a=d},177:function(e,t,r){e.exports={loaderContainer:"_67382826"}},178:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyMy4xOTM0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjZjYmYiIHN0cm9rZS13aWR0aD0iNCI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMDs0NSIga2V5VGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMCAwLjIgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSItMC41cyI+PC9hbmltYXRlPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC4yIDAgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSItMC41cyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDIuNTczOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjc2MmFiIiBzdHJva2Utd2lkdGg9IjQiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjA7NDUiIGtleVRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAgMC4yIDAuOCAxIiBjYWxjTW9kZT0ic3BsaW5lIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjIgMCAwLjggMSIgY2FsY01vZGU9InNwbGluZSI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"},220:function(e,t,r){},32:function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));var n=r(29),a=r.n(n),c=r(37),o=r.n(c),u={GENERATE_LOGIN_OTP:"Generate Login Otp",SET_LOGIN_PHONE_NUMBER:"Set Login Phone Number",RSEND_LOGIN_OTP:"Resend Login Otp",SUBMIT_LOGIN_OTP:"Submit Login Otp",SET_USER_LOGGED_IN:"Set User Logged In",GET_USER_FROM_AUTH_TOKEN:"Get User From Auth Token",SET_LOGGED_IN_THROUGH_TOKEN:"Set Logged In Through Token",LOGOUT_USER:"logout user"},s=function(){function e(){a()(this,e)}return o()(e,[{key:"generateLoginOtp",value:function(e){return{type:u.GENERATE_LOGIN_OTP,data:e}}},{key:"setLoginPhoneNumber",value:function(e){return{type:u.SET_LOGIN_PHONE_NUMBER,data:e}}},{key:"resendLoginOtp",value:function(e){return{type:u.RSEND_LOGIN_OTP,data:e}}},{key:"submitLoginOtp",value:function(e){return{type:u.SUBMIT_LOGIN_OTP,data:e}}},{key:"setUserLoggedIn",value:function(e){var t=e.user,r=e.auth_token;return localStorage.setItem("TOKEN_KEY",r),{type:u.SET_USER_LOGGED_IN,user:t}}},{key:"getUserFromAuthToken",value:function(e){return{type:u.GET_USER_FROM_AUTH_TOKEN,data:e}}},{key:"setLoggedInThroughToken",value:function(e){return{type:u.SET_LOGGED_IN_THROUGH_TOKEN,data:e}}},{key:"logoutUser",value:function(){return localStorage.removeItem("TOKEN_KEY"),{type:u.LOGOUT_USER}}}]),e}();t.a=new s},372:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(7),o=r.n(c),u=r(57),s=r(92),i=r(53),p=r(196),l=r(175),h=r.n(l),d=r(5),f=r.n(d),m=r(9),g=r(32),b=r(11),O=r(41),S=r.n(O),v=r(29),E=r.n(v),y=r(15),T=r.n(y),_=r(38),I="https://api-user-management.localdukan.in/api",x="https://api-shop-management.localdukan.in/api",P={LOGIN_GENERATE_OTP:"".concat(I,"/otp/generate"),LOGIN_VALIDATE_OTP:"".concat(I,"/otp/validate"),LOGIN_USING_TOKEN:"".concat(I,"/auth"),GET_MERCHANT_SHOPS:"".concat(x,"/merchant/shops"),GET_MERCHANT_SHOP_ITEMS:"".concat(x,"/shops/"),CREATE_MERCHANT_SHOP:"".concat(x,"/shops"),UPDATE_MERCHANT_SHOP:"".concat(x,"/shops/"),ADD_SHOP_ITEM:"".concat(x,"/items"),GET_SHOP_MENU:"".concat(x,"/shops/")},M=new function e(){E()(this,e),T()(this,"generateOtp",function(){var e=S()(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:P.LOGIN_GENERATE_OTP,data:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T()(this,"valiadteOtp",function(){var e=S()(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:P.LOGIN_VALIDATE_OTP,data:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T()(this,"getUserFromToken",S()(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:P.LOGIN_USING_TOKEN});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))))},N=new function e(){E()(this,e),T()(this,"getMerchantShops",S()(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get({url:P.GET_MERCHANT_SHOPS});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),T()(this,"getMerchantShopItems",function(){var e=S()(f.a.mark((function e(t,r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:"".concat(P.GET_MERCHANT_SHOP_ITEMS+r,"/itemslist"),data:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),T()(this,"createMerchantShop",function(){var e=S()(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:P.CREATE_MERCHANT_SHOP,data:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T()(this,"updateMerchantShop",function(){var e=S()(f.a.mark((function e(t,r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.put({url:"".concat(P.UPDATE_MERCHANT_SHOP+r),data:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),T()(this,"addMerchantShopItems",function(){var e=S()(f.a.mark((function e(t,r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:"".concat(P.UPDATE_MERCHANT_SHOP).concat(r,"/additems"),data:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),T()(this,"removeMerchantShopItems",function(){var e=S()(f.a.mark((function e(t,r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:"".concat(P.UPDATE_MERCHANT_SHOP).concat(r,"/removeitems"),data:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),T()(this,"updateMerchantShopItems",function(){var e=S()(f.a.mark((function e(t,r){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:"".concat(P.UPDATE_MERCHANT_SHOP).concat(r,"/updateitems"),data:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),T()(this,"addNewItem",function(){var e=S()(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post({url:"".concat(P.ADD_SHOP_ITEM),data:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T()(this,"getShopMenu",function(){var e=S()(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get({url:"".concat(P.GET_SHOP_MENU).concat(t,"/menu")});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},w=r(65),j=function(e){return f.a.mark((function t(r){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(m.c)(w.a.showLoader());case 3:return t.next=5,Object(m.b)(e,r);case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(m.c)(w.a.hideLoader());case 11:return t.prev=11,t.next=14,Object(m.c)(w.a.hideLoader());case 14:return t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,7,11,15]])}))},A=f.a.mark(C),k=f.a.mark(B),R=f.a.mark(Z),H=f.a.mark(W),G=f.a.mark(z),D=f.a.mark(F),U=f.a.mark(V),L=f.a.mark(Y);function C(e){var t,r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.data,n.next=4,M.generateOtp(t);case 4:return r=n.sent,n.next=7,console.log("phoneObj-------\x3e",r);case 7:return n.next=9,Object(m.c)(g.a.setLoginPhoneNumber(r));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,console.log("Could not send otp!");case 15:case"end":return n.stop()}}),A,null,[[0,11]])}function B(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(g.b.GENERATE_LOGIN_OTP,j(C));case 2:case"end":return e.stop()}}),k)}function Z(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(g.b.RSEND_LOGIN_OTP,j(C));case 2:case"end":return e.stop()}}),R)}function W(e){var t,r,n,a,c,o;return f.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t=e.data,u.next=4,M.valiadteOtp(t);case 4:if(!(r=u.sent)){u.next=31;break}return u.next=8,Object(m.c)(g.a.setUserLoggedIn(r));case 8:return u.prev=8,u.next=11,N.getMerchantShops();case 11:return n=u.sent,u.next=14,Object(m.c)(b.a.setMerchantShops(n[0]));case 14:if(!(n.length>0)){u.next=26;break}return a=n[0]._id,u.next=18,N.getShopMenu(a);case 18:return c=u.sent,u.next=21,Object(m.c)(b.a.setShopMenu(c));case 21:return u.next=23,N.getMerchantShopItems({},a);case 23:return o=u.sent,u.next=26,Object(m.c)(b.a.setMerchantShopItems(o[0]));case 26:u.next=31;break;case 28:u.prev=28,u.t0=u.catch(8),console.log(u.t0);case 31:u.next=39;break;case 33:return u.prev=33,u.t1=u.catch(0),u.next=37,Object(m.c)(g.a.logoutUser());case 37:return u.next=39,console.log("Enter correct OTP!");case 39:case"end":return u.stop()}}),H,null,[[0,33],[8,28]])}function z(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(g.b.SUBMIT_LOGIN_OTP,j(W));case 2:case"end":return e.stop()}}),G)}function F(){var e,t,r,n,a;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,M.getUserFromToken();case 3:return e=c.sent,c.next=6,Object(m.c)(g.a.setLoggedInThroughToken(e));case 6:return c.next=8,N.getMerchantShops();case 8:return t=c.sent,c.next=11,Object(m.c)(b.a.setMerchantShops(t[0]));case 11:if(!(t.length>0)){c.next=23;break}return r=t[0]._id,c.next=15,N.getShopMenu(r);case 15:return n=c.sent,c.next=18,Object(m.c)(b.a.setShopMenu(n));case 18:return c.next=20,N.getMerchantShopItems({},r);case 20:return a=c.sent,c.next=23,Object(m.c)(b.a.setMerchantShopItems(a));case 23:c.next=31;break;case 25:return c.prev=25,c.t0=c.catch(0),c.next=29,Object(m.c)(g.a.logoutUser());case 29:return c.next=31,console.error("Error in logging-in using token!");case 31:case"end":return c.stop()}}),D,null,[[0,25]])}function V(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(g.b.GET_USER_FROM_AUTH_TOKEN,j(F));case 2:case"end":return e.stop()}}),U)}function Y(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([B(),Z(),z(),V()]);case 2:case"end":return e.stop()}}),L)}var X=f.a.mark(ie),J=f.a.mark(pe),K=f.a.mark(le),Q=f.a.mark(he),q=f.a.mark(de),$=f.a.mark(fe),ee=f.a.mark(me),te=f.a.mark(ge),re=f.a.mark(be),ne=f.a.mark(Oe),ae=f.a.mark(Se),ce=f.a.mark(ve),oe=f.a.mark(Ee),ue=f.a.mark(ye),se=f.a.mark(Te);function ie(e){var t,r,n,a,c;return f.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(m.d)();case 3:if(t=o.sent,r=null,t.ShopReducers.merchantShop){o.next=19;break}return o.next=8,N.getMerchantShops();case 8:return n=o.sent,o.next=11,Object(m.c)(b.a.setMerchantShops(n[0]));case 11:return r=n[0]._id,o.next=14,N.getMerchantShopItems(e.data,r);case 14:return a=o.sent,o.next=17,Object(m.c)(b.a.setMerchantShopItems(a));case 17:o.next=25;break;case 19:return r=t.ShopReducers.merchantShop._id,o.next=22,N.getMerchantShopItems(e.data,r);case 22:return c=o.sent,o.next=25,Object(m.c)(b.a.setMerchantShopItems(c));case 25:o.next=31;break;case 27:return o.prev=27,o.t0=o.catch(0),o.next=31,console.log("Could not get user shop items.");case 31:case"end":return o.stop()}}),X,null,[[0,27]])}function pe(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(b.b.GET_MERCHANT_SHOP_ITEMS,j(ie));case 2:case"end":return e.stop()}}),J)}function le(e){var t,r,n,a,c,o;return f.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Object(m.d)();case 2:t=u.sent,r=new Set,r=t.ShopReducers.selectedItems,n=t.ShopReducers.merchantShopItems,a=n[e.category],c=0;case 8:if(!(c<a.length)){u.next=15;break}if(a[c].itemId!==e.itemId){u.next=12;break}return a[c].available=e.isAvailable,u.abrupt("break",15);case 12:c++,u.next=8;break;case 15:return r.has(e.itemId)||r.add(e.itemId),n[e.category]=a,o={merchantShopItems:n,selectedItems:r},u.next=20,Object(m.c)(b.a.setUpdateItemSelection(o));case 20:case"end":return u.stop()}}),K)}function he(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(b.b.UPDATE_ITEM_SELECTION,le);case 2:case"end":return e.stop()}}),Q)}function de(e){var t,r,n,a,c,o;return f.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Object(m.d)();case 2:return t=u.sent,r=t.ShopReducers.merchantShopItems,n=[],Object.keys(r).forEach((function(e){for(var a=r[e],c=0;c<a.length;c++)t.ShopReducers.selectedItems.has(a[c].itemId)&&n.push({id:a[c].itemId,available:a[c].available})})),a=t.ShopReducers.merchantShop._id,u.next=9,N.updateMerchantShopItems({items:n},a);case 9:return u.next=11,N.getMerchantShopItems({},a);case 11:return c=u.sent,u.next=14,Object(m.c)(b.a.setMerchantShopItems(c));case 14:return u.next=16,N.getShopMenu(a);case 16:return o=u.sent,u.next=19,Object(m.c)(b.a.setShopMenu(o));case 19:return u.next=21,Object(m.c)(e.history.push("/"));case 21:case"end":return u.stop()}}),q)}function fe(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(b.b.UPDTAE_SELECTED_ITEMS,j(de));case 2:case"end":return e.stop()}}),$)}function me(e){var t,r,n,a;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.data,c.next=4,Object(m.d)();case 4:return r=c.sent,(n=r.UserReducers.user).phone_number=r.UserReducers.user.phoneNumber,t.owner_details=n,c.next=10,N.createMerchantShop(t);case 10:return a=c.sent,c.next=13,Object(m.c)(b.a.setMerchantNameAndAddress(a));case 13:c.next=18;break;case 15:c.prev=15,c.t0=c.catch(0),console.log(c.t0);case 18:case"end":return c.stop()}}),ee,null,[[0,15]])}function ge(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(b.b.CREATE_MERCHANT_SHOP,j(me));case 2:case"end":return e.stop()}}),te)}function be(e){var t,r,n,a;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.data,c.next=4,Object(m.d)();case 4:return r=c.sent,t.owner_details=r.UserReducers.user,t.delivery_options=r.ShopReducers.merchantShop.delivery_options,n=r.ShopReducers.merchantShop._id,c.next=10,N.updateMerchantShop(t,n);case 10:return a=c.sent,c.next=13,Object(m.c)(b.a.setMerchantNameAndAddress(a));case 13:c.next=18;break;case 15:c.prev=15,c.t0=c.catch(0),console.log(c.t0);case 18:case"end":return c.stop()}}),re,null,[[0,15]])}function Oe(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(b.b.UPDATE_MERCHANT_SHOP,j(be));case 2:case"end":return e.stop()}}),ne)}function Se(e){var t,r,n,a,c,o,u,s;return f.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(m.d)();case 3:if(t=i.sent,r=t.ShopReducers.merchantShopItems,n=t.ShopReducers.merchantShop._id,a=[],!(t.ShopReducers.selectedItems.size>0)){i.next=11;break}return Object.keys(r).forEach((function(e){for(var n=r[e],c=0;c<n.length;c++)t.ShopReducers.selectedItems.has(n[c].itemId)&&a.push({id:n[c].itemId,available:n[c].available})})),i.next=11,N.updateMerchantShopItems({items:a},n);case 11:return i.next=13,N.addNewItem(e.data);case 13:return c=i.sent,o={items:[{id:c._id,available:!0}]},i.next=17,N.updateMerchantShopItems(o,n);case 17:return i.next=19,N.getMerchantShopItems({},n);case 19:return u=i.sent,i.next=22,Object(m.c)(b.a.setMerchantShopItems(u));case 22:return i.next=24,N.getShopMenu(n);case 24:return s=i.sent,i.next=27,Object(m.c)(b.a.setShopMenu(s));case 27:i.next=32;break;case 29:i.prev=29,i.t0=i.catch(0),console.log(i.t0);case 32:case"end":return i.stop()}}),ae,null,[[0,29]])}function ve(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(b.b.ADD_NEW_ITEM,j(Se));case 2:case"end":return e.stop()}}),ce)}function Ee(e){var t;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,N.getShopMenu(e.shopId);case 3:return t=r.sent,r.next=6,Object(m.c)(b.a.setShopMenu(t));case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),oe,null,[[0,8]])}function ye(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)(b.b.GET_SHOP_MENU,j(Ee));case 2:case"end":return e.stop()}}),ue)}function Te(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([pe(),ge(),Oe(),he(),fe(),ve(),ye()]);case 2:case"end":return e.stop()}}),se)}var _e=f.a.mark(Ie);function Ie(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([Y(),Te()]);case 2:case"end":return e.stop()}}),_e)}function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){T()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{selectedItems:new Set},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.b.SET_MERCHANT_SHOPS:var r=t.data;return Pe(Pe({},e),{},{merchantShop:r});case b.b.SETUP_MERCHANT_SHOP:var n=t.data;return Pe(Pe({},e),{},{merchantShop:n});case b.b.SET_MERCHANT_SHOP_ITEMS:var a=t.data,c=new Object;if(a)for(var o=0;o<a.length;o++){var u=[];c.hasOwnProperty(a[o].category)&&(u=c[a[o].category]),u.push({itemId:a[o]._id,itemName:a[o].name,available:a[o].available}),c[a[o].category]=u}return Pe(Pe({},e),{},{merchantShopItems:c,selectedItems:new Set});case b.b.SET_UPDATED_ITEM_SELECTION:return Pe(Pe({},e),{},{merchantShopItems:t.data.merchantShopItems,selectedItems:t.data.selectedItems});case b.b.UPDTAE_SELECTED_ITEMS:case b.b.CREATE_MERCHANT_SHOP:return Pe({},e);case b.b.SET_MERCHANT_NAME_AND_ADDRESS:var s=t.data;return Pe(Pe({},e),{},{merchantShop:s});case b.b.UPDATE_MERCHANT_SHOP:return Pe({},e);case b.b.SET_SHOP_MENU:var i=t.data;return Pe(Pe({},e),{},{shopMenu:i});default:return e}};function Ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(r),!0).forEach((function(t){T()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.b.SET_LOGIN_PHONE_NUMBER:var r=t.data;return we(we({},e),{},{phoneObject:r});case g.b.SET_USER_LOGGED_IN:var n=t.user,a=!!n;return we(we({},e),{},{user:n,isAuthenticated:a});case g.b.SET_LOGGED_IN_THROUGH_TOKEN:var c=t.data,o=!!c;return we(we({},e),{},{user:c,isAuthenticated:o});case g.b.LOGOUT_USER:return we(we({},e),{},{user:void 0,isAuthenticated:!1});default:return e}};function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){T()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.b.SHOW_LOADER:var r=e.loaderCount,n=void 0===r?0:r;return ke(ke({},e),{},{loaderCount:++n});case w.b.HIDE_LOADER:var a=e.loaderCount,c=void 0===a?0:a;return ke(ke({},e),{},{loaderCount:--c});default:return e}},He=r(146);function Ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function De(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(r),!0).forEach((function(t){T()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{language:localStorage.getItem("local-dukaan-language")?localStorage.getItem("local-dukaan-language"):"en"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case He.b.SET_LANGUAGE:var r=t.language;return localStorage.setItem("local-dukaan-language",r),De(De({},e),{},{language:r});default:return De({},e)}},Le=Object(i.c)({UserReducers:je,LoaderReducers:Re,ShopReducers:Me,LanguageReducers:Ue}),Ce=function(e,t){return Le(e,t)},Be=[],Ze=Object(p.a)();Be.push(Ze),Be.push(h.a);var We=Object(i.e)(Ce,Object(i.d)(i.a.apply(void 0,Be)));Ze.run(Ie);var ze=We,Fe=r(37),Ve=r.n(Fe),Ye=r(90),Xe=r.n(Ye),Je=r(91),Ke=r.n(Je),Qe=r(68),qe=r.n(Qe),$e=r(173),et=r(25),tt=r(176),rt=r.n(tt),nt=r(105),at=r.n(nt),ct=r(45),ot=r.n(ct),ut=function(e){var t=e.component,r=e.isAuthenticated,n=at()(e,["component","isAuthenticated"]);return a.a.createElement(et.b,rt()({},n,{render:function(e){return r?a.a.createElement(t,e):a.a.createElement(et.a,{to:"/welcome"})}}))};ut.propTypes={component:ot.a.object,isAuthenticated:ot.a.bool};var st=Object(u.b)((function(e){return{isAuthenticated:e.UserReducers.isAuthenticated}}))(ut);r(219);function it(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=qe()(e);if(t){var a=qe()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Ke()(this,r)}}var pt=function(e){Xe()(r,e);var t=it(r);function r(){return E()(this,r),t.apply(this,arguments)}return Ve()(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAuthenticated,r=e.getUserFromAuthToken,n=localStorage.getItem("TOKEN_KEY");!t&&n&&r()}},{key:"render",value:function(){var e=this.props.isAuthenticated,t=!localStorage.getItem("TOKEN_KEY")||e,r=$e.a.map((function(e){var t=e.path,r=e.exact,n=e.component;return e.isPrivate?a.a.createElement(st,{key:t,path:t,exact:r,component:n}):a.a.createElement(et.b,{key:t,path:t,exact:r,component:n})}));return a.a.createElement(n.Suspense,{fallback:"Loading..."},a.a.createElement(et.d,null,t?r:null))}}]),r}(n.Component);pt.propTypes={isAuthenticated:ot.a.bool,getUserFromAuthToken:ot.a.func};var lt=Object(u.b)((function(e){return{isAuthenticated:e.UserReducers.isAuthenticated}}),(function(e){return{getUserFromAuthToken:function(){return e(g.a.getUserFromAuthToken())}}}))(pt),ht=r(177),dt=r.n(ht),ft=r(178),mt=r.n(ft);function gt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=qe()(e);if(t){var a=qe()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Ke()(this,r)}}var bt=function(e){Xe()(r,e);var t=gt(r);function r(){return E()(this,r),t.apply(this,arguments)}return Ve()(r,[{key:"render",value:function(){var e=this.props.loaderCount,t=void 0===e?0:e;return a.a.createElement(n.Fragment,null,t>0&&a.a.createElement("div",{className:dt.a.loaderContainer},a.a.createElement("img",{src:mt.a,alt:"loading icon"})))}}]),r}(n.Component),Ot=Object(u.b)((function(e){return{loaderCount:e.LoaderReducers.loaderCount}}))(bt),St=(r(220),function(){return a.a.createElement(u.a,{store:ze},a.a.createElement(s.a,null,a.a.createElement(Ot,null),a.a.createElement(lt,null)))});o.a.render(a.a.createElement(St,null),document.getElementById("root"))},38:function(e,t,r){"use strict";var n=r(86),a=r.n(n),c=r(29),o=r.n(c),u=r(37),s=r.n(u),i=r(15),p=r.n(i),l=r(120),h=(l.en,l.hi,l);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(){function e(){var t=this;o()(this,e),p()(this,"fetchHelper",(function(e){var t=e.url,r=e.method,n=e.headers,c=void 0===n?{}:n,o=e.data,u=e.file;return new Promise((function(e,n){fetch(t,{method:r,headers:f(f({},c),{},{Authorization:localStorage.getItem("TOKEN_KEY")}),body:u||o&&JSON.stringify(o)}).then((function(e){return e})).then((function(e){return[e.json(),e.status]})).then((function(t){var r=a()(t,2),n=r[0],c=r[1];if(!(c>=200&&c<=300))return[n,c];e(n)})).then((function(e){var t=a()(e,2),r=t[0],c=t[1];r.then((function(e){var t="";switch(c){case 400:t=e.message||"Bad Request";break;case 401:t=e.message||"Unauthorized Access";break;case 500:t=e.message||"Internal server error";break;default:t="Error"}throw t})).catch((function(e){return n(e)}))})).catch((function(e){n(e)}))}))})),p()(this,"get",(function(e){var r={url:e.url,method:"GET"};return t.fetchHelper(r)})),p()(this,"post",(function(e){var r={url:e.url,method:"POST",headers:{"Content-Type":"application/json"},data:e.data};return t.fetchHelper(r)})),p()(this,"filePost",(function(e){var r={url:e.url,method:"POST",headers:{},file:e.file};return t.fetchHelper(r)})),p()(this,"put",(function(e){var r={url:e.url,method:"PUT",headers:{"Content-Type":"application/json"},data:e.data};return t.fetchHelper(r)}))}return s()(e,[{key:"getLangTags",value:function(e){var t=h.en,r=h.hi,n=t;switch(e){case"en":n=t;break;case"hi":n=r;break;default:n=t}return n}}]),e}();t.a=new m},65:function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));var n=r(29),a=r.n(n),c=r(37),o=r.n(c),u={SHOW_LOADER:"..::show loader::..",HIDE_LOADER:"..::hide loader::.."},s=function(){function e(){a()(this,e)}return o()(e,[{key:"showLoader",value:function(){return{type:u.SHOW_LOADER}}},{key:"hideLoader",value:function(){return{type:u.HIDE_LOADER}}}]),e}();t.a=new s}});