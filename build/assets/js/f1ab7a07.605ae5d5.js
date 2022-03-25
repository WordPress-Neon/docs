"use strict";(self.webpackChunkwpn_docs=self.webpackChunkwpn_docs||[]).push([[354],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7213:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},p="Docker Support",l={unversionedId:"using-docker",id:"using-docker",title:"Docker Support",description:"Introduction",source:"@site/docs/using-docker.md",sourceDirName:".",slug:"/using-docker",permalink:"/docs/using-docker",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"SVG Support",permalink:"/docs/plugins/svg-support"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Docker Compose File",id:"docker-compose-file",level:2},{value:"URLs",id:"urls",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-support"},"Docker Support"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The WordPress Neon framework is best suited to a Docker environment."),(0,a.kt)("p",null,"If you're familiar with Docker then you can simply use this ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," template to compose a container."),(0,a.kt)("p",null,"Once you have started the container WordPress will be available at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost")," for the URLs of other services,\nsee the ",(0,a.kt)("a",{parentName:"p",href:"#urls"},"#URLs")," section"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The current setup for a Docker WordPress environment creates the WordPress core files in the root directory where the\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file is."),(0,a.kt)("p",{parentName:"div"},"When starting a project you should first create and run the Docker container and then create your theme in the ",(0,a.kt)("inlineCode",{parentName:"p"},"themes"),"\ndirectory of ",(0,a.kt)("inlineCode",{parentName:"p"},"wp-content"),"."))),(0,a.kt)("h2",{id:"docker-compose-file"},"Docker Compose File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"version: '3'\n\nservices:\n  db:\n    image: mysql:5.7\n    volumes:\n      - db_data:/var/lib/mysql\n    ports:\n      - '${FORWARD_DB_PORT:-3306}:3306'\n    restart: 'no'\n    environment:\n      MYSQL_DATABASE: wordpress\n      MYSQL_USER: wordpress\n      MYSQL_PASSWORD: pass\n      MYSQL_ROOT_PASSWORD: pass\n      MYSQL_ALLOW_EMPTY_PASSWORD: 1\n    networks:\n      - wordpress\n\n  phpmyadmin:\n    depends_on:\n      - db\n    image: phpmyadmin/phpmyadmin\n    restart: 'no'\n    ports:\n      - '8081:80'\n    environment:\n      PMA_HOST: db\n      MYSQL_ROOT_PASSWORD: pass\n      UPLOAD_LIMIT: 500M\n    networks:\n      - wordpress\n\n  mailhog:\n    image: mailhog/mailhog:latest\n    ports:\n      - '1025:1025'\n      - '8025:8025'\n    networks:\n      - wordpress\n\n  wordpress:\n    depends_on:\n      - db\n    image: wordpress:5.9-php8.1\n    ports:\n      - '80:80'\n    restart: 'no'\n    volumes:\n      - ./:/var/www/html\n      - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini\n    environment:\n      WORDPRESS_DB_HOST: db:3306\n      WORDPRESS_DB_USER: wordpress\n      WORDPRESS_DB_PASSWORD: pass\n      WORDPRESS_DEBUG: 1\n    networks:\n      - wordpress\n\nnetworks:\n  wordpress:\n\nvolumes:\n  db_data:\n")),(0,a.kt)("h2",{id:"urls"},"URLs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"URL"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"WordPress")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://localhost"},"http://localhost"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"PhpMyAdmin")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://localhost:8081"},"https://localhost:8081"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Mailhog")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://localhost:8025"},"http://localhost:8025"))))))}u.isMDXComponent=!0}}]);