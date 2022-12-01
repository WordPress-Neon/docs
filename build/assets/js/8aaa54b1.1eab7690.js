"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,description:"Helper functions provided by WPN.",pagination_label:"Helper Functions"},i="Helpers",p={unversionedId:"helpers",id:"helpers",title:"Helpers",description:"Helper functions provided by WPN.",source:"@site/docs/helpers.md",sourceDirName:".",slug:"/helpers",permalink:"/docs/helpers",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Helper functions provided by WPN.",pagination_label:"Helper Functions"},sidebar:"sidebar",previous:{title:"Service Providers",permalink:"/docs/getting-started/providers"},next:{title:"Post Types",permalink:"/docs/post-types"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Templates",id:"templates",level:2},{value:"render_component",id:"render_component",level:3},{value:"get_component",id:"get_component",level:3},{value:"Assets",id:"assets",level:2},{value:"asset_path",id:"asset_path",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"helpers"},"Helpers"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'WPN includes a variety of global "helper" PHP functions. Many of these functions are used by the\nframework itself; however, you are free to use them in your own applications if you find them convenient.'),(0,o.kt)("h2",{id:"templates"},"Templates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#render_component"},"render_component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get_component"},"get_component"))),(0,o.kt)("h3",{id:"render_component"},"render_component"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Echo")," the output from a component file. Path of file is prefix by ",(0,o.kt)("inlineCode",{parentName:"p"},"template_path")," in the config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"render_component('mobile-navigation');\n")),(0,o.kt)("p",null,"An array of variables to pass to the component can be provided as the second parameter. Passed variables are available\nin the component file as their key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="footer.php"',title:'"footer.php"'},"render_component('social-media-links',[\n        'facebook' => 'https://facebook.com/...'\n]);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="social-media-links.php"',title:'"social-media-links.php"'},'<a href="<?= $facebook; ?>">Facebook</a>\n')),(0,o.kt)("h3",{id:"get_component"},"get_component"),(0,o.kt)("p",null,"Get the output from the component as a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". Path of file is prefix by ",(0,o.kt)("inlineCode",{parentName:"p"},"template_path")," in the config file."),(0,o.kt)("p",null,"An array of variables to pass to the component can be provided as the second parameter. Passed variables are available\nin the component file as their key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="footer.php"',title:'"footer.php"'},"$facebook_link = get_component('social-media-links',[\n        'facebook' => 'https://facebook.com/...'\n]);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="social-media-links.php"',title:'"social-media-links.php"'},'<a href="<?= $facebook; ?>">Facebook</a>\n')),(0,o.kt)("h2",{id:"assets"},"Assets"),(0,o.kt)("h3",{id:"asset_path"},"asset_path"),(0,o.kt)("p",null,"The asset path returns the fully qualified URL of a file from the asset folder defined in your config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$img_url = asset_path('img/logo.svg');\n// http://localhost/wp-content/themes/wpn-theme/assets/img/log.svg;\n")))}m.isMDXComponent=!0}}]);