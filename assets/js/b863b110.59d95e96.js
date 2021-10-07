"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[119],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),p={title:"Directives",sidebar_position:2},l=void 0,o={unversionedId:"reference/directives",id:"reference/directives",isDocsHomePage:!1,title:"Directives",description:"using directives",source:"@site/docs/reference/directives.md",sourceDirName:"reference",slug:"/reference/directives",permalink:"/docs/reference/directives",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/reference/directives.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Directives",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Command-line options",permalink:"/docs/reference/cli-options"},next:{title:"Directives",permalink:"/docs/reference/using-directives"}},s=[{value:"using directives",id:"using-directives",children:[{value:"Compiler options",id:"compiler-options",children:[]},{value:"Custom JAR",id:"custom-jar",children:[]},{value:"Dependency",id:"dependency",children:[]},{value:"Java home",id:"java-home",children:[]},{value:"Java options",id:"java-options",children:[]},{value:"Platform",id:"platform",children:[]},{value:"Repository",id:"repository",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Scala version",id:"scala-version",children:[]},{value:"Test framework",id:"test-framework",children:[]}]},{value:"require directives",id:"require-directives",children:[{value:"Platform",id:"platform-1",children:[]},{value:"Scala version",id:"scala-version-1",children:[]},{value:"Scope",id:"scope",children:[]}]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"using-directives"},"using directives"),(0,i.kt)("h3",{id:"compiler-options"},"Compiler options"),(0,i.kt)("p",null,"Add Scala compiler options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using option "),(0,i.kt)("em",{parentName:"p"},"option")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using options "),(0,i.kt)("em",{parentName:"p"},"option1")," ",(0,i.kt)("em",{parentName:"p"},"option2")," \u2026"),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using option -Xasync")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using options -Xasync -Xfatal-warnings")),(0,i.kt)("h3",{id:"custom-jar"},"Custom JAR"),(0,i.kt)("p",null,"Manually adds JAR to the class path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using jar "),(0,i.kt)("em",{parentName:"p"},"path")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"using jars "),(0,i.kt)("em",{parentName:"p"},"path1")," ",(0,i.kt)("em",{parentName:"p"},"path2")," \u2026"),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'using jar "/Users/alexandre/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/com/chuusai/shapeless_2.13/2.3.7/shapeless_2.13-2.3.7.jar"')),(0,i.kt)("h3",{id:"dependency"},"Dependency"),(0,i.kt)("p",null,"Adds dependencies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using "),(0,i.kt)("em",{parentName:"p"},"org"),(0,i.kt)("inlineCode",{parentName:"p"},":"),"name",(0,i.kt)("inlineCode",{parentName:"p"},":"),"ver"),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using org.typelevel::cats-effect:3.2.9")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using dev.zio::zio:1.0.12")),(0,i.kt)("h3",{id:"java-home"},"Java home"),(0,i.kt)("p",null,"Sets Java home used to run your application or tests"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using java-home "),(0,i.kt)("em",{parentName:"p"},"path")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"using javaHome "),(0,i.kt)("em",{parentName:"p"},"path")),(0,i.kt)("h4",{id:"examples-3"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'using java-home "/Users/Me/jdks/11"')),(0,i.kt)("h3",{id:"java-options"},"Java options"),(0,i.kt)("p",null,"Adds Java options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using java-opt "),(0,i.kt)("em",{parentName:"p"},"options")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"using javaOpt "),(0,i.kt)("em",{parentName:"p"},"options")),(0,i.kt)("h4",{id:"examples-4"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using javaOpt -Xmx2g -Dsomething=a")),(0,i.kt)("h3",{id:"platform"},"Platform"),(0,i.kt)("p",null,"Set the default platform to Scala.JS or Scala Native"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using "),"(",(0,i.kt)("inlineCode",{parentName:"p"},"jvm"),"|",(0,i.kt)("inlineCode",{parentName:"p"},"scala-js"),"|",(0,i.kt)("inlineCode",{parentName:"p"},"scala-native"),")+"),(0,i.kt)("h4",{id:"examples-5"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using scala-js")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using jvm scala-native")),(0,i.kt)("h3",{id:"repository"},"Repository"),(0,i.kt)("p",null,"Adds a repository for dependency resolution"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using repository "),(0,i.kt)("em",{parentName:"p"},"repository")),(0,i.kt)("h4",{id:"examples-6"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using repository jitpack")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using repository sonatype:snapshots")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using repository https://maven-central.storage-download.googleapis.com/maven2")),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Manually adds a resource directory to the class path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using resource "),(0,i.kt)("em",{parentName:"p"},"path")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"using resources "),(0,i.kt)("em",{parentName:"p"},"path1")," ",(0,i.kt)("em",{parentName:"p"},"path2")," \u2026"),(0,i.kt)("h4",{id:"examples-7"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'using resource "./resources"')),(0,i.kt)("h3",{id:"scala-version"},"Scala version"),(0,i.kt)("p",null,"Sets the default Scala version"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using scala "),(0,i.kt)("em",{parentName:"p"},"version"),"+"),(0,i.kt)("h4",{id:"examples-8"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using scala 3.0.2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using scala 2.13")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using scala 2")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using scala 2.13.6 2.12.15")),(0,i.kt)("h3",{id:"test-framework"},"Test framework"),(0,i.kt)("p",null,"Sets test framework"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using test-framework "),(0,i.kt)("em",{parentName:"p"},"class_name")),(0,i.kt)("h4",{id:"examples-9"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"using test-framework utest.runner.Framework")),(0,i.kt)("h2",{id:"require-directives"},"require directives"),(0,i.kt)("h3",{id:"platform-1"},"Platform"),(0,i.kt)("p",null,"Require a Scala platform for the current file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require "),(0,i.kt)("em",{parentName:"p"},"platform")),(0,i.kt)("h4",{id:"examples-10"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require scala-js")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require scala-js scala-native")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require jvm")),(0,i.kt)("h3",{id:"scala-version-1"},"Scala version"),(0,i.kt)("p",null,"Require a Scala version for the current file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require scala "),(0,i.kt)("em",{parentName:"p"},"version")),(0,i.kt)("h4",{id:"examples-11"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require scala 3")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require scala 2.13")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require scala 3.0.2")),(0,i.kt)("h3",{id:"scope"},"Scope"),(0,i.kt)("p",null,"Require a scope for the current file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require "),(0,i.kt)("em",{parentName:"p"},"scope")),(0,i.kt)("h4",{id:"examples-12"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"require test")))}c.isMDXComponent=!0}}]);