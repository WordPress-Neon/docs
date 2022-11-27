"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:2,description:"It is most common to use the validate method available on all incoming HTTP requests. However, we will discuss other approaches to validation as well"},o="Validation",r={unversionedId:"ajax/validation",id:"ajax/validation",title:"Validation",description:"It is most common to use the validate method available on all incoming HTTP requests. However, we will discuss other approaches to validation as well",source:"@site/docs/ajax/validation.md",sourceDirName:"ajax",slug:"/ajax/validation",permalink:"/docs/ajax/validation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"It is most common to use the validate method available on all incoming HTTP requests. However, we will discuss other approaches to validation as well"},sidebar:"sidebar",previous:{title:"AJAX",permalink:"/docs/ajax/routes"},next:{title:"CSRF Protection",permalink:"/docs/ajax/csrf"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Defining the route",id:"defining-the-route",level:3},{value:"Define the route callback",id:"define-the-route-callback",level:3},{value:"Writing the validation logic",id:"writing-the-validation-logic",level:3},{value:"Responses",id:"responses",level:3},{value:"Validation failure response",id:"validation-failure-response",level:4},{value:"Modify validation failure messages",id:"modify-validation-failure-messages",level:3},{value:"Available Validation Methods",id:"available-validation-methods",level:2},{value:"Required",id:"required",level:3},{value:"String",id:"string",level:3},{value:"Email",id:"email",level:3},{value:"Phone",id:"phone",level:3},{value:"Bool",id:"bool",level:3},{value:"Date",id:"date",level:3},{value:"Numeric",id:"numeric",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validation"},"Validation"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"WPN provides several different approaches to validate your application's incoming data. It is most common to use the\nvalidate method available on all incoming HTTP requests. However, we will discuss other approaches to validation as well."),(0,i.kt)("p",null,"WPN includes a wide variety of convenient validation rules that you may apply to data,\neven providing the ability to validate if values are unique in a given database table.\nWe'll cover each of these validation rules in detail so that you are familiar with all of WPN's validation features."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"To learn about WPN's powerful validation features, let's look at a complete example of validating a form\nand displaying the error messages back to the user. By reading this high-level overview,\nyou'll be able to gain a good general understanding of how to validate incoming request data using WPN:"),(0,i.kt)("h3",{id:"defining-the-route"},"Defining the route"),(0,i.kt)("p",null,"First we are assuming that you have created the following route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"Route::create('get_posts', GetPostsController::class);\n")),(0,i.kt)("h3",{id:"define-the-route-callback"},"Define the route callback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Http\\Controllers;\n\nuse WPN\\Http\\Callback;\nuse WPN\\Http\\Response;\n\nclass GetPostsController implements Callback\n{\n    public function __invoke(): Response\n    {\n       //\n    }\n}\n")),(0,i.kt)("h3",{id:"writing-the-validation-logic"},"Writing the validation logic"),(0,i.kt)("p",null,"Now we are ready to fill in our store method with the logic to validate the new blog post.\nTo do this, we will use the validate method provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"WPN\\Support\\Request")," object.\nIf the validation rules pass, your code will keep executing normally; however,\nif validation fails, an ",(0,i.kt)("inlineCode",{parentName:"p"},"WPN\\Validation\\ValidatorException")," exception will be thrown\nand the proper error response will automatically be sent back to the user."),(0,i.kt)("p",null,"To get a better understanding of the validate method, let's jump back into the request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="GetPostsRequest.php"',title:'"GetPostsRequest.php"'},"<?php\n\nnamespace App\\Http\\Requests;\n\nuse WPN\\Support\\Request;\n\nclass GetPostsRequest extends Request\n{\n    protected function rules(): array\n    {\n        return [\n            'post_id' => ['required', 'int'],\n        ];\n    }\n}\n")),(0,i.kt)("p",null,"As you can see, the validation rules are passed into the rules array, using the field name as the key.\nDon't worry - all available validation rules are ",(0,i.kt)("a",{parentName:"p",href:"/docs/ajax/validation#available-validation-methods"},"documented"),". Again, if the validation fails, the proper response will\nautomatically be generated. If the validation passes, our controller will continue executing normally."),(0,i.kt)("h3",{id:"responses"},"Responses"),(0,i.kt)("p",null,"Validation failures will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"400")," status response along with the fields that failed validation."),(0,i.kt)("h4",{id:"validation-failure-response"},"Validation failure response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "status":400,\n   "failures":{\n      "id":[\n         "id is a required field"\n      ]\n   }\n}\n')),(0,i.kt)("h3",{id:"modify-validation-failure-messages"},"Modify validation failure messages"),(0,i.kt)("p",null,"Each rule has its own validation failure message, and you may also set a failure message for a field failing a specific\nvalidation rule"),(0,i.kt)("p",null,"In your request you may overwrite the ",(0,i.kt)("inlineCode",{parentName:"p"},"messages")," function of the ",(0,i.kt)("inlineCode",{parentName:"p"},"WPN\\Http\\Request")," class. In this example we are overriding\nthe message for the ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," rule on ",(0,i.kt)("strong",{parentName:"p"},"all")," fields. We are also overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," rule validation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"author"),"\nfield."),(0,i.kt)("admonition",{title:"Get field name in validation message",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"%s")," in validation rule messages will be converted to the fields name.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="GetPostsRequest.php"',title:'"GetPostsRequest.php"'},"<?php\n\nnamespace App\\Http\\Requests;\n\nuse WPN\\Http\\Request;\n\nclass GetPostsRequest extends Request {\n    public function rules(): array {\n        return [\n            'id'     => [ 'required' ],\n            'author' => [ 'required', 'string' ]\n        ];\n    }\n\n    protected function messages(): array {\n        return [\n            ...parent::messages(),\n            'required'      => '%s has not been filled in!',\n            'author.string' => 'The authors name must be a string'\n        ];\n    }\n}\n")),(0,i.kt)("h2",{id:"available-validation-methods"},"Available Validation Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ajax/validation#required"},"required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ajax/validation#string"},"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ajax/validation#email"},"email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ajax/validation#phone"},"phone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ajax/validation#bool"},"bool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ajax/validation#date"},"date")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ajax/validation#number"},"numeric"))),(0,i.kt)("h3",{id:"required"},"Required"),(0,i.kt)("p",null,'The field under validation must be present in the input data and not empty. A field is considered "empty" if one of the following conditions are true:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The value is ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},"The value is an empty string.")),(0,i.kt)("h3",{id:"string"},"String"),(0,i.kt)("p",null,"The field under validation must be a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". If you would like to allow the field to also be null, you should assign the ",(0,i.kt)("inlineCode",{parentName:"p"},"nullable")," rule to the field."),(0,i.kt)("h3",{id:"email"},"Email"),(0,i.kt)("p",null,"The field under validation must be formatted as an email address."),(0,i.kt)("h3",{id:"phone"},"Phone"),(0,i.kt)("p",null,"The field under validation must be formatted as a phone number."),(0,i.kt)("h3",{id:"bool"},"Bool"),(0,i.kt)("p",null,"The field under validation must be able to be cast as a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),". Accepted input are ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"1"'),", and ",(0,i.kt)("inlineCode",{parentName:"p"},'"0"'),"."),(0,i.kt)("h3",{id:"date"},"Date"),(0,i.kt)("p",null,"The field under validation must be a valid, non-relative date according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"strtotime")," PHP function."),(0,i.kt)("h3",{id:"numeric"},"Numeric"),(0,i.kt)("p",null,"The field under validation must be ",(0,i.kt)("inlineCode",{parentName:"p"},"numeric"),"."))}p.isMDXComponent=!0}}]);