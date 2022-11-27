"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[19],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),v=o,g=u["".concat(p,".").concat(v)]||u[v]||d[v]||i;return t?n.createElement(g,a(a({ref:r},l),{},{components:t})):n.createElement(g,a({ref:r},l))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8391:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2,description:"Service providers provide a way to execute code on application (WordPress) boot"},a="Service Providers",s={unversionedId:"getting-started/providers",id:"getting-started/providers",title:"Service Providers",description:"Service providers provide a way to execute code on application (WordPress) boot",source:"@site/docs/getting-started/providers.md",sourceDirName:"getting-started",slug:"/getting-started/providers",permalink:"/docs/getting-started/providers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Service providers provide a way to execute code on application (WordPress) boot"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/getting-started/intro"},next:{title:"Post Types",permalink:"/docs/post-types"}},p={},c=[{value:"Registering Providers",id:"registering-providers",level:2},{value:"Example Provider",id:"example-provider",level:3}],l={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"service-providers"},"Service Providers"),(0,o.kt)("p",null,"Service providers provide a way to execute code on application (WordPress) boot. Within WPN they are used for code that\nwould normally be dumped into the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions.php")," file."),(0,o.kt)("p",null,"By default, WPN is set up with an ",(0,o.kt)("inlineCode",{parentName:"p"},"ApplicationServiceProvider")," in which WPN is configured."),(0,o.kt)("h2",{id:"registering-providers"},"Registering Providers"),(0,o.kt)("p",null,"Provider registration is done by adding them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.php")," file. Highlighted below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config.php"',title:'"config.php"'},"<?php\n\nuse WPN\\Plugins\\Mailhog;\nuse WPN\\Plugins\\Theme\\FooterMenu;\nuse WPN\\Plugins\\Theme\\HeaderMenu;\n\nreturn [\n    'plugins'       => [\n        Mailhog::class,\n    ],\n    'features'      => [\n        FooterMenu::class,\n        HeaderMenu::class\n    ],\n    //highlight-start\n    'providers'     => [\n        App\\Providers\\FontServiceProvider::class\n    ],\n    //highlight-end\n    'template_path' => 'views',\n    'asset_path'    => 'assets'\n];\n")),(0,o.kt)("h3",{id:"example-provider"},"Example Provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Providers;\n\nuse WPN\\App;\nuse WPN\\Assets\\GoogleFont;\nuse WPN\\Providers\\ServiceProvider;\n\nclass FontServiceProvider extends ServiceProvider {\n    protected function boot( App $app ) {\n        GoogleFont::load(\n            'SourceSansPro',\n            'https://fonts.googleapis.com/css?family=Source Sans Pro',\n            admin: true \n        );\n    }\n}\n")))}d.isMDXComponent=!0}}]);