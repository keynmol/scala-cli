"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[769],{1434:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("div",{className:"col col--"+e.colsize},n.createElement("h1",{className:"section-title"+(e.promptsign?" with-before":"")},e.title))}},1260:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(8465);function i(e){return n.createElement("div",{className:"section-image-box__row row "},n.createElement("div",{className:"section-image-box__row-text col col--1 left-margin-stub"}),n.createElement("div",{className:"section-image-box__row-text col col--5 "},n.createElement("div",{className:"section-image-box__row-text-wrapper"},n.createElement("h3",null,e.title),n.createElement("div",{className:"content"},e.children))),n.createElement("div",{className:"section-image-box__row-image col col--6 "},n.createElement("div",{className:"section-image-box__row-image-wrapper"},e.image?n.createElement("div",{className:"green_border"},n.createElement(l.Z,{alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})):"")),n.createElement("div",{className:"section-image-box__row-text col col--1 right-margin-stub"}))}},9882:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("section",{className:"section "+e.className},e.children)}},2758:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(9882),i=a(3352),r=a(604),s=a(308),o=a(1434);function c(e){return n.createElement(s.Z,{title:e.title,description:e.description,key:e.title},n.createElement("div",{className:"container content"},n.createElement(i.Z,{image:e.image,title:e.headline},e.children),n.createElement(o.Z,{title:e.title,colsize:"12",promptsign:!0}),n.createElement(l.Z,{className:"section-image-box"},(0,r.Z)().filter((function(t){return t.props[e.id]})))))}},3352:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9882),i=a(8465);function r(e){return n.createElement(l.Z,{className:"section-yellow-banner"},n.createElement("div",{className:"row row--align-center"},n.createElement("div",{className:"col col--6"},n.createElement("h1",null,e.title),n.createElement("div",{className:"description"},e.children)),n.createElement("div",{className:"col col--6"},n.createElement("div",{className:"image-wrapper"},n.createElement(i.Z,{className:"image",alt:e.image,sources:{light:"img/"+e.image,dark:"img/dark/"+e.image}})))))}},604:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(1260),i=[n.createElement(l.Z,{image:"versions.svg",title:"Scala versions, dependencies and JVMs",key:"versions",projects:"true"},n.createElement("p",null,"Scala CLI is built on top of coursier",n.createElement("br",null),"This allow us to manage Scala versions, dependencies and JVMs so you can test your code in different environments by changing single option."),n.createElement("p",null,"Scala CLI ships with all its dependencies",n.createElement("br",null),"No need to fluff with installing JVM or setting up PATH.")),n.createElement(l.Z,{image:"universal_tool.svg",title:"Universal tool",key:"universal",projects:"true"},n.createElement("p",null,"If you want to use older ",n.createElement("b",null,"version of Scala")," or run your code in ",n.createElement("b",null,"JS")," or ",n.createElement("b",null,"Native")," environments we've got you covered.",n.createElement("br",null),n.createElement("i",null,"some additional ",n.createElement("a",{href:"TODO?"},"setup")," may be required for JS and Native")),n.createElement("p",null,"Switching between platforms or Scala versions is as easy as changing a parameter.")),n.createElement(l.Z,{image:"buildtools.png",title:"We do not call Scala CLI a build tool",key:"buildtool",projects:"true"},n.createElement("p",null,"Scala CLI shares some similarities with build tools, but doesn't aim at supporting multi-module projects, nor to be extended via a task system known from sbt, mill or bazel."),",",n.createElement("p",null,"Scala ecosystem has multiple amazing build tools, there is no need to create another one.")),n.createElement(l.Z,{image:"complete-install.svg",title:"Complete installation",key:"complete-install",education:"true"},n.createElement("p",null,"Scala CLI comes with batteries included. No additional installation is required, no more fluffing with setting up the correct Java version or ",n.createElement("code",null,"PATH")),n.createElement("p",null,"Scala CLI manages JVMs, Scala and other used tools under the hood.")),n.createElement(l.Z,{image:"defaults.svg",title:"Solid defaults",key:"defaults",education:"true"},n.createElement("p",null,"No additional configuration is needed to most Scala CLI commands."),n.createElement("p",null,"Scala CLI is configured out of the box to use the latest stable versions and other commands such as formatter or compiler contain reasonable defaults.")),n.createElement(l.Z,{image:"learning_curve.svg",title:"No learning curve",key:"curve",education:"true"},n.createElement("p",null,"Scala CLI does not use complex configuration language, its options are simple and self-explanatory"),n.createElement("p",null,"There are no big differences in running repl or .scala files so expanding the results of repl session into a small project does not require learning new concepts from Scala CLI perspective")),n.createElement(l.Z,{image:"powerful_scripts.svg",title:"Scripts are as powerful as other programs",key:"scripts-as-apps",scripting:"true"},n.createElement("p",null,"Scripts in Scala CLI can use dependencies and other features as standard Scala programs. Scala CLI is command-line first giving access to all its features without need for any configuration file or specific project structure.")),n.createElement(l.Z,{image:"embbedable_scripts.svg",title:"Embbedale Scripts",key:"embed-scripts",scripting:"true"},n.createElement("p",null,"Scala CLI can be included in shebangs making your .scala or .sc files runnable"),n.createElement("p",null,"Scala CLI support piping inputs in and is designed to be embeddable in other scripts turning Scala into proper scripting language")),n.createElement(l.Z,{image:"fast-scripts.svg",title:"Fast Scripts",key:"fast-scripts",scripting:"true"},n.createElement("p",null,"Scala CLI provides multiple ways to reduce the biggest problem of JVM-based scripting solutions: slow start time. Scala CLI aggressively caches inputs removing need for recompilations."),n.createElement("p",null,"Scripts can be packaged into the native applications (using e.g. Scala Native) for even faster cold startups.")),n.createElement(l.Z,{image:"sc-files-support.svg",title:"Support for .sc files",key:"sc-files-support",scripting:"true"},n.createElement("p",null,"Scala CLI is backwards compatible with ammonite scripts."),n.createElement("p",null,"No need to migrate your existing scripts to use all the powers of Scala CLI.")),n.createElement(l.Z,{image:"self-contained-examples.svg",title:"Self-contained examples",key:"self-contained-examples",prototyping:"true"},n.createElement("p",null,"With Scala CLI, configuration can be included in source code so complex examples can be self-contained and shipped as e.g. gist. Moreover, Scala CLI can compile, run and test gists without any manual work!"),n.createElement("p",null,"Scala CLI is a perfect tool to submit and reproduce bugs"))];function r(){return i}},8895:function(e,t,a){a.r(t);var n=a(7294),l=a(2758);t.default=function(e){return n.createElement(l.Z,{title:"Single-module projects with Scala CLI",description:"Page describing why Scala CLI is good for maintainig a single-module projects.",headline:"Fight with your bugs not with with you buildtool",image:"projects.svg",id:"projects"},n.createElement("p",null,"Scala CLI provides all tools to maintain with easy single module projects like cli apps or single microservice."))}}}]);