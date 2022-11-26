"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[911],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9513:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:3},l="CSRF Protection",s={unversionedId:"ajax/csrf",id:"ajax/csrf",title:"CSRF Protection",description:"AJAX routes within WPN can use WordPress' nonce functionality to protect a route.",source:"@site/docs/ajax/csrf.md",sourceDirName:"ajax",slug:"/ajax/csrf",permalink:"/docs/ajax/csrf",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Validation",permalink:"/docs/ajax/validation"},next:{title:"Creating Routes",permalink:"/docs/rest-api/creating-routes"}},p={},u=[{value:"Localize nonce token",id:"localize-nonce-token",level:2},{value:"Example fetch request",id:"example-fetch-request",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"csrf-protection"},"CSRF Protection"),(0,a.kt)("p",null,"AJAX routes within WPN can use WordPress' nonce functionality to protect a route. "),(0,a.kt)("p",null,"By default, AJAX callbacks will check the nonce they receive by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"wp_verify_nonce( $_REQUEST['_token'], 'theme-nonce' )"),". To disable this you\nshould register routes with ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as the third parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Route::create('get_posts', GetPostsController::class, withoutNonce: true);\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If routes are protected by nonces then ",(0,a.kt)("inlineCode",{parentName:"p"},"_token")," should be inside the request body with the response from ",(0,a.kt)("inlineCode",{parentName:"p"},"wp_create_nonce('theme-nonce')")))),(0,a.kt)("h2",{id:"localize-nonce-token"},"Localize nonce token"),(0,a.kt)("p",null,"If you are registering your JavaScript files using WPN then you can localize the token by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"localize")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"Script::load( 'js/app.js' )\n              ->localize( 'theme', [ ...Script::ajaxData() ] );       \n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ajax url")," are now available in your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," script in ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," variable."),(0,a.kt)("h2",{id:"example-fetch-request"},"Example fetch request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let formData = new FormData();\nformData.append('action', 'get_posts');\nformData.append('token', theme.token);\n\nconst response = fetch(theme.ajaxurl, {\n  method: 'POST',\n  credentials: 'same-origin',\n  body: formData\n}).catch((error) => {\n  console.log(error)\n}).then(\n  (response) => response.json()\n).then((response) => {\n  console.log(response);\n})\n")))}m.isMDXComponent=!0}}]);