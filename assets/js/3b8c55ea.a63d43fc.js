(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),l=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),b=function(e){var a=l.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=b(e.components);return l.a.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},d=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(t),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return t?l.a.createElement(m,r(r({ref:a},o),{},{components:t})):l.a.createElement(m,r({ref:a},o))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=d;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var o=2;o<c;o++)i[o]=t[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return r})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return b}));var n=t(3),l=t(7),c=(t(0),t(101)),i={title:"Installation",sidebar_position:2},r={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"scala-cli can be installed either manually, or using OS-specific packages.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/scala-cli/docs/installation",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/installation.md",version:"current",sidebarPosition:2,frontMatter:{title:"Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/scala-cli/docs/overview"},next:{title:"Input format",permalink:"/scala-cli/docs/input"}},s=[{value:"Manual installation",id:"manual-installation",children:[{value:"Linux",id:"linux",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Windows",id:"windows",children:[]}]},{value:"OS-specific packages",id:"os-specific-packages",children:[{value:"Debian (x86-64)",id:"debian-x86-64",children:[]},{value:"RPM (x86-64)",id:"rpm-x86-64",children:[]},{value:"Windows (x86-64)",id:"windows-x86-64",children:[]},{value:"macOS (pkg)",id:"macos-pkg",children:[]},{value:"macOS (brew)",id:"macos-brew",children:[]}]},{value:"Shell completions",id:"shell-completions",children:[{value:"bash",id:"bash",children:[]},{value:"zsh",id:"zsh",children:[]}]}],o={toc:s};function b(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"scala-cli")," can be installed either manually, or using OS-specific packages.\nOS-specific packages are experimental and in-progress.\nManual installation is recommended for now."),Object(c.b)("h2",{id:"manual-installation"},"Manual installation"),Object(c.b)("h3",{id:"linux"},"Linux"),Object(c.b)("p",null,"Download the launcher from GitHub release assets with"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"$ curl -fL https://github.com/VirtuslabRnD/scala-cli/releases/download/latest/scala-x86_64-pc-linux.gz | gzip -d > scala\n$ chmod +x scala\n$ sudo mv scala /usr/local/bin/scala\n")),Object(c.b)("p",null,"Check that it runs fine by running its ",Object(c.b)("inlineCode",{parentName:"p"},"about")," command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"$ scala-cli about\n")),Object(c.b)("h3",{id:"macos"},"macOS"),Object(c.b)("p",null,"Download the launcher from GitHub release assets with"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"$ curl -fL https://github.com/VirtuslabRnD/scala-cli/releases/download/latest/scala-x86_64-apple-darwin.gz | gzip -d > scala\n$ chmod +x scala\n$ sudo mv scala /usr/local/bin/scala\n")),Object(c.b)("p",null,"Check that it runs fine by running its ",Object(c.b)("inlineCode",{parentName:"p"},"about")," command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"$ scala-cli about\n")),Object(c.b)("h3",{id:"windows"},"Windows"),Object(c.b)("p",null,"Download the launcher from GitHub release assets with"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"> curl -fLo scala.zip https://github.com/VirtuslabRnD/scala-cli/releases/download/latest/scala-x86_64-pc-win32.zip\n> tar -xf scala.zip\n")),Object(c.b)("p",null,"Check that it runs fine by running its ",Object(c.b)("inlineCode",{parentName:"p"},"about")," command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"> scala about\n")),Object(c.b)("p",null,"Note that this doesn't put the ",Object(c.b)("inlineCode",{parentName:"p"},"scala-cli")," command in the ",Object(c.b)("inlineCode",{parentName:"p"},"PATH"),". For that, you can create a directory, move the\nlauncher there, and add the directory to the ",Object(c.b)("inlineCode",{parentName:"p"},"PATH")," with"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},'> md "%USERPROFILE%/scala-cli"\n> scala add-path "%USERPROFILE%/scala-cli"\n> move scala.exe "%USERPROFILE%/scala-cli"\n')),Object(c.b)("h2",{id:"os-specific-packages"},"OS-specific packages"),Object(c.b)("h3",{id:"debian-x86-64"},"Debian (x86-64)"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/VirtuslabRnD/scala-cli/releases/download/latest/scala-cli.deb"},"Download Debian package")),Object(c.b)("p",null,"Alternatively, get and install the Debian package with"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-text"},"$ curl -fLo scala-cli.deb https://github.com/VirtuslabRnD/scala-cli/releases/download/latest/scala-cli.deb\n$ dpkg -i scala-cli.deb\n")),Object(c.b)("h3",{id:"rpm-x86-64"},"RPM (x86-64)"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/VirtuslabRnD/scala-cli/releases/download/latest/scala-cli.rpm"},"Download RPM package")),Object(c.b)("h3",{id:"windows-x86-64"},"Windows (x86-64)"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/VirtuslabRnD/scala-cli/releases/download/latest/scala-cli.msi"},"Download installer")),Object(c.b)("h3",{id:"macos-pkg"},"macOS (pkg)"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/VirtuslabRnD/scala-cli/releases/download/latest/scala-cli.pkg"},"Download package")),Object(c.b)("p",null,'Once downloaded, right-click on scala-cli.pkg from Finder, and choose "Open".'),Object(c.b)("h3",{id:"macos-brew"},"macOS (brew)"),Object(c.b)("p",null,"\u2026"),Object(c.b)("h2",{id:"shell-completions"},"Shell completions"),Object(c.b)("h3",{id:"bash"},"bash"),Object(c.b)("h3",{id:"zsh"},"zsh"))}b.isMDXComponent=!0}}]);