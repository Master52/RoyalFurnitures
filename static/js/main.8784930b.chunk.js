(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),l=c.n(s),n=c(4),a=c.n(n),i=(c(9),c(10),c(2)),r=c.p+"static/media/logo.0eb79510.png",j=c(0);function x(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"flex md:mt-5 justify-center items-center",children:[Object(j.jsx)("div",{className:"w-24 md:w-1/6",children:Object(j.jsx)("img",{src:r})}),Object(j.jsx)("div",{className:"ml-2 pl-2 font-medium font-serif text-3xl  md:text-6xl ",children:"Royal Furnitures"})]})})}function d(){return Object(j.jsxs)("div",{className:"flex flex-col justify-center items-center ",children:[Object(j.jsx)("div",{className:"w-20 md:w-1/4 md:mt-0 mt-5",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"animate-spin  text-yellow-700",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",clipRule:"evenodd"})})}),Object(j.jsx)("div",{className:"mt-5 md:pt-2 text-yellow-500 text-xl md:text-3xl",children:"Please Wait ..."})]})}function o(){return Object(j.jsx)("div",{className:"bg-red-300 text-xl ",children:"Something went wrong try again later.."})}function b(e){for(var t=e.items,c=0,s=0,l=0;l<t.length;++l)c+=Number(t[l]["Cash In"]),s+=Number(t[l]["Cash Out"]);return Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"flex flex-col h-screen",children:Object(j.jsx)("div",{class:"flex-grow overflow-auto",children:Object(j.jsxs)("table",{class:"min-w-max w-full table-auto",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"bg-gray-200 text-black-900 uppercase text-xl leading-normal",children:[Object(j.jsx)("th",{class:"sticky top-0 px-6 py-3 ",children:"Credit"}),Object(j.jsx)("th",{class:"sticky top-0 px-6 py-3 ",children:"Debit"}),Object(j.jsx)("th",{class:"sticky top-0 px-6 py-3 ",children:"Category"}),Object(j.jsx)("th",{class:"sticky top-0 px-6 py-3 ",children:"Description"}),Object(j.jsx)("th",{class:"sticky top-0 px-6 py-3 ",children:"Bill No"})]})}),Object(j.jsxs)("tbody",{class:"divide-y",children:[t.map((function(e,t){return Object(j.jsxs)("tr",{className:""==e["Bill No."]?"bg-red-100":"bg-green-100 text-lg",children:[Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:e["Cash In"]}),Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:e["Cash Out"]}),Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:e.Category}),Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:e.Description}),Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:e.Pending}),Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:new Date(e.Date).getDate()}),Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:e["Bill No."]})]})})),Object(j.jsxs)("tr",{className:"bg-blue-400 text-lg m-5]",children:[Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:c}),Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:s}),Object(j.jsx)("td",{className:"px-6 py-4 text-center",children:"Total "})]})]})]})})})})}var h="/today",m=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],l=t[1],n=Object(s.useState)(!0),a=Object(i.a)(n,2),r=a[0],m=a[1],p=Object(s.useState)(null),u=Object(i.a)(p,2),O=u[0],f=u[1],y="https://royalfurniture.herokuapp.com"+h;return Object(s.useEffect)((function(){fetch(y).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){l(JSON.parse(e.todayhisab))})).catch((function(e){console.error("Error Fetching data: ",e),f(e)})).finally((function(){m(!1)}))}),[]),console.table(c),Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{}),1==r?Object(j.jsx)(d,{}):Object(j.jsx)("div",{className:"mt-5 pt-5",children:O?Object(j.jsx)(o,{}):Object(j.jsx)(b,{items:c})})]})};var p=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(m,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,s=t.getFID,l=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),l(e),n(e),a(e)}))};a.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.8784930b.chunk.js.map