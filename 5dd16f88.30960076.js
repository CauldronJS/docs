(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(6),i=(t(0),t(120)),o={id:"configuration",title:"Configuring CauldronJS",sidebar_label:"Configuration"},l={id:"configuration",title:"Configuring CauldronJS",description:"# `package.json`\r",source:"@site/docs\\configuration.md",permalink:"/docs/configuration",editUrl:"https://github.com/CauldronJS/scripts/edit/master/docusaurus/docs/configuration.md",sidebar_label:"Configuration",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"integration",permalink:"/docs/integration"}},c=[{value:"<code>package.json</code> custom fields",id:"packagejson-custom-fields",children:[{value:"<code>argv</code>",id:"argv",children:[]},{value:"<code>pluginDependencies</code>",id:"plugindependencies",children:[]},{value:"<code>debugMessages</code>",id:"debugmessages",children:[]}]},{value:"Environment Variables",id:"environment-variables",children:[{value:"<code>CAULDRON_CWD</code>",id:"cauldron_cwd",children:[]}]}],s={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"packagejson"},Object(i.b)("inlineCode",{parentName:"h1"},"package.json")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," lives in every Node project. It's a basic file that tells the environment\nthe name, how it should run it, how to compile, and what it depends on. This is useful in\nexporting your code as a library or automating a pipeline. For Cauldron, we'll learn how it\ncan configure our environment."),Object(i.b)("p",null,"The typical structure looks something like this"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-language/json"}),'{\n  "main": "index.js",\n  "description": "My super cool library",\n  "author": "Justin Cox",\n  "url": "https://github.com/conji",\n  "scripts": {},\n  "dependencies": {}\n}\n')),Object(i.b)("p",null,"As you can tell, this file tells us a lot. We can see where it's entering at, the author, and\nlibraries it depends on. While there's default scripts that are configured in here, right now\nCauldron only uses one: ",Object(i.b)("inlineCode",{parentName:"p"},"start"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"start")," script will run on bootstrapping of the\nenvironment and will only run against the whole directory. If we modify our scripts to look\nlike"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-language/json"}),'{\n  ...\n  "scripts": {\n    "start": "echo Starting"\n  }\n}\n')),Object(i.b)("p",null,"we'll see the result after Cauldron has started the initialization. This is useful for any\nautomation of compiling without having to manually run the command after each change. An\nexample of this being useful is with the popular compiler Babel."),Object(i.b)("h2",{id:"packagejson-custom-fields"},Object(i.b)("inlineCode",{parentName:"h2"},"package.json")," custom fields"),Object(i.b)("p",null,"If you'd like to create custom attributes in a configuration file, you can fetch them with\n",Object(i.b)("inlineCode",{parentName:"p"},"process.config.variables"),". This is useful as Cauldron has limited access to the environment\ndue to Java security features."),Object(i.b)("h3",{id:"argv"},Object(i.b)("inlineCode",{parentName:"h3"},"argv")),Object(i.b)("p",null,"Not only that, it can be a drop-in replacement for arguments that you would run with the\nscript. For example,"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-language/json"}),'// package.json\n{\n  ...\n  "argv": ["hello", "world"]\n}\n')),Object(i.b)("p",null,"will fill ",Object(i.b)("inlineCode",{parentName:"p"},"process.argv")," with ",Object(i.b)("inlineCode",{parentName:"p"},"['hello', 'world']"),". Eventually there will be a way to inject\narguments directly into the VM on creation so we can bypass this, but this is our temporary\nsolution."),Object(i.b)("h3",{id:"plugindependencies"},Object(i.b)("inlineCode",{parentName:"h3"},"pluginDependencies")),Object(i.b)("p",null,"We can declare what plugins have to be loaded prior to running the entry point with the\n",Object(i.b)("inlineCode",{parentName:"p"},"pluginDependencies")," field. This matches by name and ",Object(i.b)("inlineCode",{parentName:"p"},"semver")," patterns so we can restrict what\nversions we look for."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This functionality is currently in active development.")),Object(i.b)("h3",{id:"debugmessages"},Object(i.b)("inlineCode",{parentName:"h3"},"debugMessages")),Object(i.b)("p",null,"Since Cauldron has a hard time running in the debugger, instead we have to result to allowing\nlogging functionality in production-like environments. If this field is set to true,\n",Object(i.b)("inlineCode",{parentName:"p"},"console.log")," will output to the logger."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This functionality is currently in active development.")),Object(i.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(i.b)("h3",{id:"cauldron_cwd"},Object(i.b)("inlineCode",{parentName:"h3"},"CAULDRON_CWD")),Object(i.b)("p",null,"There aren't many variables but this one is what made development loads easier. It allows you\nto define where the working directory is for Cauldron. This is useful for many reasons, but\nthe main one being the following scenario:"),Object(i.b)("p",null,"Imagine you're running 2 servers. One for Spigot and one for Sponge. As was intended, the\ncodebase is 100% sharable across both servers. Obviously there's platform specific\nfunctionality, but anything you've written would have to follow those checks. The biggest size\ncontributer to Cauldron (and NodeJS for that matter) is the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," directory. It can\nget pretty freakin' large and wasting disk space to duplicate it isn't very smart. So why not\nhave them both read from the same working directory?"),Object(i.b)("p",null,"By setting the ",Object(i.b)("inlineCode",{parentName:"p"},"CAULDRON_CWD")," variable, you can allow multiple servers to run off of the same\ncodebase. This means updates are live across all of them and no need to sync with git or\nrsync. :clapping-hands:"))}u.isMDXComponent=!0},120:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(h,l({ref:n},s,{components:t})):a.a.createElement(h,l({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);