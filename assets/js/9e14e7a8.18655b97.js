"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[539],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(t),f=i,b=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(b,c(c({ref:n},l),{},{components:t})):r.createElement(b,c({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3177:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),c={title:"Running benchmarks",sidebar_position:1},a=void 0,u={unversionedId:"misc/benchmarking",id:"misc/benchmarking",isDocsHomePage:!1,title:"Running benchmarks",description:"Write and run JMH benchmarks with scala run --jmh",source:"@site/docs/misc/benchmarking.md",sourceDirName:"misc",slug:"/misc/benchmarking",permalink:"/docs/misc/benchmarking",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/misc/benchmarking.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Running benchmarks",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scala Native",permalink:"/docs/scala-native"},next:{title:"Navigate dependencies",permalink:"/docs/misc/browse"}},s=[],l={toc:s};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Write and run JMH benchmarks with ",(0,o.kt)("inlineCode",{parentName:"p"},"scala run --jmh")))}p.isMDXComponent=!0}}]);