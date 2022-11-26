"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s="Docker Support",i={unversionedId:"using-docker",id:"using-docker",title:"Docker Support",description:"Introduction",source:"@site/docs/using-docker.md",sourceDirName:".",slug:"/using-docker",permalink:"/docs/using-docker",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Middleware",permalink:"/docs/rest-api/middleware"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Docker Compose File",id:"docker-compose-file",level:2},{value:"URLs",id:"urls",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-support"},"Docker Support"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The WordPress Neon framework is best suited to a Docker environment."),(0,o.kt)("p",null,"If you're familiar with Docker then you can simply use this ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," template to compose a container."),(0,o.kt)("p",null,"Once you have started the container WordPress will be available at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost")," for the URLs of other services,\nsee the ",(0,o.kt)("a",{parentName:"p",href:"#urls"},"#URLs")," section"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The current setup for a Docker WordPress environment creates the WordPress core files in the root directory where the\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file is."),(0,o.kt)("p",{parentName:"admonition"},"When starting a project you should first create and run the Docker container and then create your theme in the ",(0,o.kt)("inlineCode",{parentName:"p"},"themes"),"\ndirectory of ",(0,o.kt)("inlineCode",{parentName:"p"},"wp-content"),".")),(0,o.kt)("h2",{id:"docker-compose-file"},"Docker Compose File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"version: '3'\n\nservices:\n  db:\n    image: mysql:5.7\n    volumes:\n      - db_data:/var/lib/mysql\n    ports:\n      - '${FORWARD_DB_PORT:-3306}:3306'\n    restart: 'no'\n    environment:\n      MYSQL_DATABASE: wordpress\n      MYSQL_USER: wordpress\n      MYSQL_PASSWORD: pass\n      MYSQL_ROOT_PASSWORD: pass\n      MYSQL_ALLOW_EMPTY_PASSWORD: 1\n    networks:\n      - wordpress\n\n  phpmyadmin:\n    depends_on:\n      - db\n    image: phpmyadmin/phpmyadmin\n    restart: 'no'\n    ports:\n      - '8081:80'\n    environment:\n      PMA_HOST: db\n      MYSQL_ROOT_PASSWORD: pass\n      UPLOAD_LIMIT: 500M\n    networks:\n      - wordpress\n\n  mailhog:\n    image: mailhog/mailhog:latest\n    ports:\n      - '1025:1025'\n      - '8025:8025'\n    networks:\n      - wordpress\n\n  wordpress:\n    depends_on:\n      - db\n    image: wordpress:5.9-php8.1\n    ports:\n      - '80:80'\n    restart: 'no'\n    volumes:\n      - ./:/var/www/html\n      - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini\n    environment:\n      WORDPRESS_DB_HOST: db:3306\n      WORDPRESS_DB_USER: wordpress\n      WORDPRESS_DB_PASSWORD: pass\n      WORDPRESS_DEBUG: 1\n    networks:\n      - wordpress\n\nnetworks:\n  wordpress:\n\nvolumes:\n  db_data:\n")),(0,o.kt)("h2",{id:"urls"},"URLs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Service"),(0,o.kt)("th",{parentName:"tr",align:null},"URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"WordPress")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://localhost"},"http://localhost"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PhpMyAdmin")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://localhost:8081"},"https://localhost:8081"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Mailhog")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://localhost:8025"},"http://localhost:8025"))))))}d.isMDXComponent=!0}}]);