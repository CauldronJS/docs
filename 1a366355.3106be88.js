(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(m,l({ref:t},u,{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(120)),o={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},l={id:"introduction",title:"Introduction",description:"Welcome to the docs for CauldronJS. If you're already aware of what Cauldron does, then you\r",source:"@site/docs\\introduction.md",permalink:"/docs/introduction",editUrl:"https://github.com/CauldronJS/scripts/edit/master/docusaurus/docs/introduction.md",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Design Principles",permalink:"/docs/design-principles"}},c=[{value:"What is CauldronJS?",id:"what-is-cauldronjs",children:[]},{value:"What was it built for?",id:"what-was-it-built-for",children:[]},{value:"Why should I use it?",id:"why-should-i-use-it",children:[]},{value:"NodeJS and Cauldron",id:"nodejs-and-cauldron",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Welcome to the docs for CauldronJS. If you're already aware of what Cauldron does, then you\ncan skip on over to the Getting Started section. If not, lets get you up to speed on why\nCauldron is so cool."),Object(i.b)("h2",{id:"what-is-cauldronjs"},"What is CauldronJS?"),Object(i.b)("p",null,"At the core, Cauldron is an attempt at making a NodeJS clone in the JVM. Whether it's used for\nan existing enterprise application or just your starting codebase, the end result is the same.\nCauldron is built on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graalvm.org/"}),"GraalVM")," made by Oracle","\xae"," to replace\nthe JVM in certain environments where you can pick your languages but run on the popular JVM\nmemory and threading model. By using their public JavaScript engine, we can run JS in the JVM\nwith minimal code."),Object(i.b)("h2",{id:"what-was-it-built-for"},"What was it built for?"),Object(i.b)("p",null,"I've done many a rewrite of JavaScript engines for Java. The sole purpose has always been to\nallow me to write in JS for one of my favorite projects: Bukkit. Throughout all the years\nthough, writing things in older JS just was never fun. Rhino and Nashorn never gave me the\npower that I wanted over my code, like constants, up to date features, and proper security.\nSince it was decided all JS engines would be stripped from the JVM, another option had to be\nexplored. I wanted something that I could embed in any JAR plugin that would be allowed to run\nbut also not restrict compatibility with other plugins. Enter GraalVM. For now, it runs\nfluidly on Spigot with minimal support for Sponge. Additional platforms in the future include\nForgeModLoader and Bungee. In the end, Cauldron's goal is to allow plugin and mod developers\nto write code that can run on any platform with no version discrepencies."),Object(i.b)("h2",{id:"why-should-i-use-it"},"Why should I use it?"),Object(i.b)("p",null,"There are a few JS engines for Bukkit, the most notable being\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://scriptcraft.net/"}),"ScriptCraft"),". While it does its job well, it doesn't do everything I\nbelieve it could. It's stuck on ES5, an outdated language version. Some things it doesn't\nallow are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"constants"),Object(i.b)("li",{parentName:"ul"},"scoped variables"),Object(i.b)("li",{parentName:"ul"},"lambdas"),Object(i.b)("li",{parentName:"ul"},"latest ",Object(i.b)("inlineCode",{parentName:"li"},"prototype")," compliance"),Object(i.b)("li",{parentName:"ul"},"up to date security features"),Object(i.b)("li",{parentName:"ul"},"typed arrays (",Object(i.b)("inlineCode",{parentName:"li"},"Uint8Array"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Uint16Array"),", etc.)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BigInt")),Object(i.b)("li",{parentName:"ul"},"string interpolation/template strings"),Object(i.b)("li",{parentName:"ul"},"event loop and async functions"),Object(i.b)("li",{parentName:"ul"},"classes"),Object(i.b)("li",{parentName:"ul"},"static and public/private accessors"),Object(i.b)("li",{parentName:"ul"},"NodeJS compatibility")),Object(i.b)("p",null,"If you're not a dedicated JS developer, these aren't that necessary. There were ways to do it\nin the past, but you wouldn't be caught dead doing any of these in a production environment.\n",Object(i.b)("em",{parentName:"p"},"This")," is what Cauldron was made for. It allows the developer to not have to change their\nmindset to reflect patterns of a time long gone."),Object(i.b)("h2",{id:"nodejs-and-cauldron"},"NodeJS and Cauldron"),Object(i.b)("p",null,"Things written in Cauldron will not run in NodeJS. It is not meant to be backwards compatible, just simply a drop-in replacement for NodeJS. While the support isn't 100%, it ",Object(i.b)("em",{parentName:"p"},"is")," actively getting there. Current support includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Buffers"),Object(i.b)("li",{parentName:"ul"},"HTML parsing"),Object(i.b)("li",{parentName:"ul"},"CommonJS modules"),Object(i.b)("li",{parentName:"ul"},"Streams"),Object(i.b)("li",{parentName:"ul"},"custom module resolvers"),Object(i.b)("li",{parentName:"ul"},"NPM/Yarn support"),Object(i.b)("li",{parentName:"ul"},"a basic implementation of ",Object(i.b)("inlineCode",{parentName:"li"},"child_processes")),Object(i.b)("li",{parentName:"ul"},"async functionality"),Object(i.b)("li",{parentName:"ul"},"filesystem and path libraries"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EventEmitter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Semver"))),Object(i.b)("p",null,"With upcoming features like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net")," library!"),Object(i.b)("li",{parentName:"ul"},"HTTP/S protocol and toolchain"),Object(i.b)("li",{parentName:"ul"},"worker threads"),Object(i.b)("li",{parentName:"ul"},"zlib"),Object(i.b)("li",{parentName:"ul"},"everything else built into NodeJS :)")),Object(i.b)("p",null,"During the development phase of Cauldron, the ",Object(i.b)("inlineCode",{parentName:"p"},"lib")," directory within the scripts project will be what's actively worked on for the core library. This is to prevent constant rebuilding and debugging of the JAR itself as the JS portion is much easier to test. And while not there yet, the final goal is to have the ability to take ",Object(i.b)("em",{parentName:"p"},"any")," Node package and be able to use it within CauldronJS. This means if you want a web server running side-by-side with your Cauldron-backed server to display real-time analytics and stats, it's simple and doesn't require multiple servers or web hosts. Or if you want to just make a simple command in game, that's fine too."))}s.isMDXComponent=!0}}]);