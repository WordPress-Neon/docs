"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[72],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,description:"Working with the WPN Caching interface",pagination_prev:"post-types",pagination_label:"Caching"},o="Caching",s={unversionedId:"caching",id:"caching",title:"Caching",description:"Working with the WPN Caching interface",source:"@site/docs/caching.md",sourceDirName:".",slug:"/caching",permalink:"/docs/caching",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Working with the WPN Caching interface",pagination_prev:"post-types",pagination_label:"Caching"},sidebar:"sidebar",previous:{title:"Post Types",permalink:"/docs/post-types"},next:{title:"Sidebars",permalink:"/docs/sidebars"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Storing items in the cache",id:"storing-items-in-the-cache",level:2},{value:"Storing values from closures",id:"storing-values-from-closures",level:3},{value:"Retrieve an item from the cache",id:"retrieve-an-item-from-the-cache",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"caching"},"Caching"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Some data retrieval or processing tasks performed by your application could be CPU intensive or take several\nseconds to complete. When this is the case, it is common to cache the retrieved data for a time so it can be retrieved\nquickly on subsequent requests for the same data."),(0,a.kt)("p",null,"Thankfully, WPN provides an expressive, unified API for WordPress transient feature, allowing you to take advantage\nof their blazing fast data retrieval and speed up your web application."),(0,a.kt)("h2",{id:"storing-items-in-the-cache"},"Storing items in the cache"),(0,a.kt)("p",null,"You may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"\\WPN\\Cache")," class to store items in the cache:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use WPN\\Cache;\n\nCache::set('key', 'value', $seconds = 10);\n")),(0,a.kt)("p",null,"If the storage time is not passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," method, the item will be stored indefinitely:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use WPN\\Cache;\n\nCache::set('key', 'value');\n")),(0,a.kt)("p",null,"Instead of passing the number of seconds as an integer, you may also use the WPN defined constants:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use WPN\\Cache;\n\nCache::set('key', 'value', 2 * SECONDS_IN_AN_HOUR);\n")),(0,a.kt)("h3",{id:"storing-values-from-closures"},"Storing values from closures"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rememberForver")," method may be used to store the resulting value from a Closure in the cache permanently.\nSince these items will not expire, they must be manually removed from the cache using the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use WPN\\Cache;\n\nCache::rememberForever( 'key', function (): string {\n    return 'Hello' . 'World';\n} );\n")),(0,a.kt)("p",null,"If you want the resulting value to expire, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"remember")," method and an integer for the number of seconds as\nthe second parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use WPN\\Cache;\n\n$value = Cache::remember( 'key', 2 * SECONDS_IN_AN_HOUR, function (): string {\n    return 'Foo' . 'Bar';\n} );\n")),(0,a.kt)("admonition",{title:"Transient Storage",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Under the hood, WordPress stores transients in the options table, prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"_transient"),", resulting in a key like\n",(0,a.kt)("inlineCode",{parentName:"p"},"_transient_key"),". This means a database query is still required to get the value from the cache and caching is best used\nwhen multiple database queries are required. For example, an ACF repeater field.")),(0,a.kt)("h2",{id:"retrieve-an-item-from-the-cache"},"Retrieve an item from the cache"),(0,a.kt)("p",null,"The Cache's ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," method is used to retrieve items from the cache. If the item does not exist in the cache or\nhas expired, ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," will be returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use WPN\\Cache;\n\nCache::get('key');\n")),(0,a.kt)("p",null,"You may also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"remember")," function to retrieve the value from either the cache or the Closure provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use WPN\\Cache;\n\n$value = Cache::remember( 'key', 2 * SECONDS_IN_AN_HOUR, function (): string {\n    return 'Foo' . 'Bar';\n} );\n")))}u.isMDXComponent=!0}}]);