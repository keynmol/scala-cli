(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{112:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var r=i.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=n,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return t?i.a.createElement(f,c(c({ref:r},p),{},{components:t})):i.a.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),i=t(7),a=(t(0),t(112)),o={title:"Working directory",sidebar_position:5},c={unversionedId:"reference/working-dir",id:"reference/working-dir",isDocsHomePage:!1,title:"Working directory",description:"- Scala CLI needs a working directory:",source:"@site/docs/reference/working-dir.md",sourceDirName:"reference",slug:"/reference/working-dir",permalink:"/docs/reference/working-dir",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/reference/working-dir.md",version:"current",sidebarPosition:5,frontMatter:{title:"Working directory",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Dependency format",permalink:"/docs/reference/dependency"},next:{title:"Picking a Scala version with Scala CLI",permalink:"/docs/cookbooks/scala-versions"}},l=[],p={toc:l};function u(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Scala CLI needs a working directory:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"to write mapped sources"),Object(a.b)("li",{parentName:"ul"},"to write class files"),Object(a.b)("li",{parentName:"ul"},"for bloop"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"default: depends on first passed element:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"directory: ",Object(a.b)("inlineCode",{parentName:"li"},"./.scala")," in it"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".scala")," / ",Object(a.b)("inlineCode",{parentName:"li"},".sc")," / ",Object(a.b)("inlineCode",{parentName:"li"},".java"),": ",Object(a.b)("inlineCode",{parentName:"li"},"./.scala")," in its directory"),Object(a.b)("li",{parentName:"ul"},"URL / pipe / proc subst: in home dir")))))}u.isMDXComponent=!0}}]);