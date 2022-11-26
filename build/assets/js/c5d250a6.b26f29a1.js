"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[407],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),g=o,d=f["".concat(a,".").concat(g)]||f[g]||s[g]||i;return n?r.createElement(d,p(p({ref:t},l),{},{components:n})):r.createElement(d,p({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,p[1]=u;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9923:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),p=["components"],u={sidebar_position:3},a="SVG Support",c={unversionedId:"plugins/svg-support",id:"plugins/svg-support",title:"SVG Support",description:"Introduction",source:"@site/docs/plugins/svg-support.md",sourceDirName:"plugins",slug:"/plugins/svg-support",permalink:"/docs/plugins/svg-support",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"MailHog Support",permalink:"/docs/plugins/mailhog"},next:{title:"Creating Routes",permalink:"/docs/rest-api/creating-routes"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling SVG Support",id:"enabling-svg-support",level:2}],f={toc:s};function g(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"svg-support"},"SVG Support"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The SVGSupport plugin allows SVGs to be uploaded into the WordPress media library."),(0,i.kt)("h2",{id:"enabling-svg-support"},"Enabling SVG Support"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="inc/config/app.php"',title:'"inc/config/app.php"'},"<?php\n\n//highlight-next-line\nuse WPN\\Plugins\\SVGSupport;\n\nreturn [\n    'plugins' => [\n        //highlight-next-line\n        SVGSupport::class,\n    ]\n];\n")))}g.isMDXComponent=!0}}]);