"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[67],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},p="Creating Routes",l={unversionedId:"rest-api/creating-routes",id:"rest-api/creating-routes",title:"Creating Routes",description:"Introduction",source:"@site/docs/rest-api/creating-routes.md",sourceDirName:"rest-api",slug:"/rest-api/creating-routes",permalink:"/docs/rest-api/creating-routes",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"CSRF Protection",permalink:"/docs/ajax/csrf"},next:{title:"Middleware",permalink:"/docs/rest-api/middleware"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Adding a route",id:"adding-a-route",level:2},{value:"Registering the route",id:"registering-the-route",level:3},{value:"Callback",id:"callback",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-routes"},"Creating Routes"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The REST API support within WordPress Neon provides a more MVC friendly implementation of WordPress REST API."),(0,a.kt)("h2",{id:"adding-a-route"},"Adding a route"),(0,a.kt)("p",null,"With the route method of the RestApi class we can provide five parameters for each route."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Route Name"),(0,a.kt)("li",{parentName:"ul"},"Method"),(0,a.kt)("li",{parentName:"ul"},"Callback for response"),(0,a.kt)("li",{parentName:"ul"},"Parameter validation"),(0,a.kt)("li",{parentName:"ul"},"Middleware")),(0,a.kt)("h3",{id:"registering-the-route"},"Registering the route"),(0,a.kt)("p",null,"You can either register your routes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppServiceProvider")," class or use ",(0,a.kt)("inlineCode",{parentName:"p"},"require_once . '/routes.php'")," to organise them\ninto a routes file."),(0,a.kt)("p",null,"Below we are registering our route which will allow us to use ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost/wp-json/theme/v1/posts")," and receive a response\nfrom the APIResponse class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="routes.php"',title:'"routes.php"'},"<?php\n\nuse WPN\\Support\\Api\\RestApi;\nuse App\\Http\\Controllers\\APIResponse;\n\nRestApi::route( 'posts', 'GET', APIResponse::class, [\n    'id' => [\n        'required' => true,\n        'callback' => function ( $value ) {\n            return is_numeric($value);\n        }\n    ]\n] );\n")),(0,a.kt)("h3",{id:"callback"},"Callback"),(0,a.kt)("p",null,"Here is the example callback class that receives the WP_REST_Request object and returns the WP_Post object in a WP_REST_Response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="APIResponse.php"',title:'"APIResponse.php"'},"<?php\nnamespace App\\Http\\Controllers;\n\nuse WP_REST_Response;\nuse WP_REST_Request;\nuse WPN\\Support\\Api\\RestResponse;\n\nclass APIResponse implements RestResponse {\n    public function __invoke( WP_REST_Request $request ): WP_REST_Response {\n        $post = get_post( $request->get_param( 'id' ) );\n\n        return new WP_REST_Response( [ 'post' => $post ] );\n    }\n}\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more information on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/classes/wp_rest_request/"},"WP_REST_Request")," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/classes/wp_rest_response/"},"WP_REST_Response")," visit WordPress' documentation."))))}m.isMDXComponent=!0}}]);