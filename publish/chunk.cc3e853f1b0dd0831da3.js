(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{279:function(t,e,r){"use strict";var n=r(35),o=r(16),i=r(45),a=r(125),s=r(280),c=r(281);n({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=a.f(e),n=r.resolve,u=r.reject,l=s((function(){var r=i(e.resolve),a=[],s=0,u=1;c(t,(function(t){var i=s++,c=!1;u++,o(r,e,t).then((function(t){c||(c=!0,a[i]={status:"fulfilled",value:t},--u||n(a))}),(function(t){c||(c=!0,a[i]={status:"rejected",reason:t},--u||n(a))}))})),--u||n(a)}));return l.error&&u(l.value),r.promise}})},280:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},281:function(t,e,r){var n=r(0),o=r(126),i=r(16),a=r(13),s=r(64),c=r(282),u=r(82),l=r(62),f=r(127),d=r(83),p=r(283),h=n.TypeError,w=function(t,e){this.stopped=t,this.result=e},m=w.prototype;t.exports=function(t,e,r){var n,g,v,y,_,E,S,R=r&&r.that,I=!(!r||!r.AS_ENTRIES),b=!(!r||!r.IS_ITERATOR),j=!(!r||!r.INTERRUPTED),A=o(e,R),D=function(t){return n&&p(n,"normal",t),new w(!0,t)},T=function(t){return I?(a(t),j?A(t[0],t[1],D):A(t[0],t[1])):j?A(t,D):A(t)};if(b)n=t;else{if(!(g=d(t)))throw h(s(t)+" is not iterable");if(c(g)){for(v=0,y=u(t);y>v;v++)if((_=T(t[v]))&&l(m,_))return _;return new w(!1)}n=f(t,g)}for(E=n.next;!(S=i(E,n)).done;){try{_=T(S.value)}catch(t){p(n,"throw",t)}if("object"==typeof _&&_&&l(m,_))return _}return new w(!1)}},282:function(t,e,r){var n=r(9),o=r(46),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},283:function(t,e,r){var n=r(16),o=r(13),i=r(63);t.exports=function(t,e,r){var a,s;o(t);try{if(!(a=i(t,"return"))){if("throw"===e)throw r;return r}a=n(a,t)}catch(t){s=!0,a=t}if("throw"===e)throw r;if(s)throw a;return o(a),r}},401:function(t,e,r){"use strict";r.r(e);r(279),r(6),r(34);var n=r(36),o=r(2),i=r(40);e.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{gmcMerchantId:e,dialogPosition:r}=t;if(e){const t=window.storefrontApp&&window.storefrontApp.router;if(t){const a=t=>{let{name:a,params:s}=t;if("confirmation"===a&&s.json){const t=t=>{const e=new Date(Date.now());return e.setDate(e.getDate()+t),e};let a,c,u,l;const f=decodeURIComponent(s.json);if(f)try{a=JSON.parse(f)}catch(t){}if(a){const{buyers:e}=a;e&&e[0]&&(c=e[0].main_email);const r=a.shipping_lines&&a.shipping_lines[0];if(r&&r.delivery_time){let e=r.delivery_time.days;r.posting_deadline&&(e+=r.delivery_time.days),r.delivery_time.working_days&&(e*=1.25),l=t(e+3)}}c||(c=i.a.getCustomer().main_email),u||(u=n.$ecomConfig.get("country_code")),l||(l=t(14));const d=[],p=[],h={merchant_id:e,order_id:s.number||s.id,email:c,delivery_country:u,estimated_delivery_date:l.getFullYear()+"-".concat((l.getMonth()+1).toString().padStart(2,"0"),"-")+l.getDate().toString().padStart(2,"0"),opt_in_style:r||"CENTER_DIALOG"};if(a&&a.items)for(let t=0;t<a.items.length&&t<=4;t++)d.push(Object(o.g)({url:"/products/".concat(a.items[t].product_id,".json")}).then((t=>{let{data:e}=t;e.gtin&&e.gtin.forEach((t=>{p.includes(t)||p.push(t)}))})).catch(console.error));Promise.allSettled(d).then((()=>{p.length&&(h.products=p.map((t=>({gtin:t})))),window.gapi.load("surveyoptin",(function(){window.gapi.surveyoptin.render(h)}))}))}};t.currentRoute&&a(t.currentRoute),t.afterEach(a)}}else console.error(new Error("Can't show opt-in dialog without `gmcMerchantId` option"))}}}]);