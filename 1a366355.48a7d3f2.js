(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(1),i=n(6),o=(n(0),n(118)),r={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},l={id:"introduction",title:"Introduction",description:"Welcome to the docs for CauldronJS. If you're already aware of what Cauldron does, then you can skip on over to the Getting Started section. If not, lets get you up to speed on why Cauldron is so cool.\r",source:"@site/docs\\introduction.md",permalink:"/docs/introduction",editUrl:"https://github.com/CauldronJS/scripts/edit/master/docusaurus/docs/introduction.md",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Design Principles",permalink:"/docs/design-principles"}},s=[],u={rightToc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Welcome to the docs for CauldronJS. If you're already aware of what Cauldron does, then you can skip on over to the Getting Started section. If not, lets get you up to speed on why Cauldron is so cool."),Object(o.b)("h1",{id:"what-is-cauldronjs"},"What is CauldronJS?"),Object(o.b)("p",null,"At the core, Cauldron is an attempt at making a NodeJS clone in the JVM. Whether it's used for an existing enterprise application or just your starting codebase, the end result is the same. Cauldron is built on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.graalvm.org/"}),"GraalVM")," made by Oracle","\xae"," to replace the JVM in certain environments where you can pick your languages but run on the popular JVM memory and threading model. By using their public JavaScript engine, we can run JS in the JVM with minimal code."),Object(o.b)("h1",{id:"what-was-it-built-for"},"What was it built for?"),Object(o.b)("p",null,"I've done many a rewrite of JavaScript engines for Java. The sole purpose has always been to allow me to write in JS for one of my favorite projects: Bukkit. Throughout all the years though, writing things in older JS just was never fun. Rhino and Nashorn never gave me the power that I wanted over my code, like constants, up to date features, and proper security. Since it was decided all JS engines would be stripped from the JVM, another option had to be explored. I wanted something that I could embed in any JAR plugin that would be allowed to run but also not restrict compatibility with other plugins. Enter GraalVM. For now, it runs fluidly on Spigot with minimal support for Sponge. Additional platforms in the future include ForgeModLoader and Bungee. In the end, Cauldron's goal is to allow plugin and mod developers to write code that can run on any platform with no version discrepencies."),Object(o.b)("h1",{id:"why-should-i-use-it"},"Why should I use it?"),Object(o.b)("p",null,"There are a few JS engines for Bukkit, the most notable being ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://scriptcraft.net/"}),"ScriptCraft"),". While it does its job well, it doesn't do everything I believe it could. It's stuck on ES5, an outdated language version. Some things it doesn't allow are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"constants"),Object(o.b)("li",{parentName:"ul"},"scoped variables"),Object(o.b)("li",{parentName:"ul"},"lambdas"),Object(o.b)("li",{parentName:"ul"},"latest ",Object(o.b)("inlineCode",{parentName:"li"},"prototype")," compliance"),Object(o.b)("li",{parentName:"ul"},"up to date security features"),Object(o.b)("li",{parentName:"ul"},"typed arrays (",Object(o.b)("inlineCode",{parentName:"li"},"Uint8Array"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Uint16Array"),", etc.)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BigInt")),Object(o.b)("li",{parentName:"ul"},"string interpolation/template strings"),Object(o.b)("li",{parentName:"ul"},"event loop and async functions"),Object(o.b)("li",{parentName:"ul"},"classes"),Object(o.b)("li",{parentName:"ul"},"static and public/private accessors"),Object(o.b)("li",{parentName:"ul"},"NodeJS compatibility")),Object(o.b)("p",null,"If you're not a dedicated JS developer, these aren't that necessary. There were ways to do it in the past, but you wouldn't be caught dead doing any of these in a production environment. ",Object(o.b)("em",{parentName:"p"},"This")," is what Cauldron was made for. It allows the developer to not have to change their mindset to reflect patterns of a time long gone."),Object(o.b)("h1",{id:"nodejs-and-cauldron"},"NodeJS and Cauldron"),Object(o.b)("p",null,"Things written in Cauldron will not run in NodeJS. It is not meant to be backwards compatible, just simply a drop-in replacement for NodeJS. While the support isn't 100%, it ",Object(o.b)("em",{parentName:"p"},"is")," actively getting there. Current support includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Buffers"),Object(o.b)("li",{parentName:"ul"},"HTML parsing"),Object(o.b)("li",{parentName:"ul"},"CommonJS modules"),Object(o.b)("li",{parentName:"ul"},"Streams"),Object(o.b)("li",{parentName:"ul"},"custom module resolvers"),Object(o.b)("li",{parentName:"ul"},"NPM/Yarn support"),Object(o.b)("li",{parentName:"ul"},"a basic implementation of ",Object(o.b)("inlineCode",{parentName:"li"},"child_processes")),Object(o.b)("li",{parentName:"ul"},"async functionality"),Object(o.b)("li",{parentName:"ul"},"filesystem and path libraries"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"EventEmitter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Semver"))),Object(o.b)("p",null,"With upcoming features like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"net")," library!"),Object(o.b)("li",{parentName:"ul"},"HTTP/S protocol and toolchain"),Object(o.b)("li",{parentName:"ul"},"worker threads"),Object(o.b)("li",{parentName:"ul"},"zlib"),Object(o.b)("li",{parentName:"ul"},"everything else built into NodeJS :)")),Object(o.b)("p",null,"During the development phase of Cauldron, the ",Object(o.b)("inlineCode",{parentName:"p"},"lib")," directory within the scripts project will be what's actively worked on for the core library. This is to prevent constant rebuilding and debugging of the JAR itself as the JS portion is much easier to test. And while not there yet, the final goal is to have the ability to take ",Object(o.b)("em",{parentName:"p"},"any")," Node package and be able to use it within CauldronJS. This means if you want a web server running side-by-side with your Cauldron-backed server to display real-time analytics and stats, it's simple and doesn't require multiple servers or web hosts. Or if you want to just make a simple command in game, that's fine too."))}c.isMDXComponent=!0}}]);