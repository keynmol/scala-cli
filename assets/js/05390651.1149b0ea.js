"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[232],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return d}});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=l.createContext({}),o=function(e){var a=l.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=o(e.components);return l.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(t),d=n,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return t?l.createElement(b,c(c({ref:a},u),{},{components:t})):l.createElement(b,c({ref:a},u))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<r;o++)c[o]=t[o];return l.createElement.apply(null,c)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,a,t){var l=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return o}});var l=t(7294),n=t(9443);var r=function(){var e=(0,l.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var o=function(e){var a,t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,m=e.groupId,p=e.className,d=l.Children.toArray(e.children),b=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=o?o:null==(a=d.find((function(e){return e.props.default})))?void 0:a.props.value,g=r(),f=g.tabGroupChoices,v=g.setTabGroupChoices,k=(0,l.useState)(h),w=k[0],y=k[1],N=[];if(null!=m){var x=f[m];null!=x&&x!==w&&b.some((function(e){return e.value===x}))&&y(x)}var E=function(e){var a=e.currentTarget,t=N.indexOf(a),l=b[t].value;y(l),null!=m&&(v(m,l),setTimeout((function(){var e,t,l,n,r,c,i,o;(e=a.getBoundingClientRect(),t=e.top,l=e.left,n=e.bottom,r=e.right,c=window,i=c.innerHeight,o=c.innerWidth,t>=0&&r<=o&&n<=i&&l>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},T=function(e){var a,t=null;switch(e.key){case"ArrowRight":var l=N.indexOf(e.target)+1;t=N[l]||N[0];break;case"ArrowLeft":var n=N.indexOf(e.target)-1;t=N[n]||N[N.length-1]}null==(a=t)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},p)},b.map((function(e){var a=e.value,t=e.label;return l.createElement("li",{role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":w===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:E,onClick:E},null!=t?t:a)}))),t?(0,l.cloneElement)(d.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},d.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}},1657:function(e,a,t){t.d(a,{Z:function(){return s}});var l=t(7294),n=t(5064),r=t(8215),c=t(2389);var i=function(e){var a=e.children,t=e.fallback;return(0,c.Z)()&&null!=a?l.createElement(l.Fragment,null,a()):t||null};function s(e){return l.createElement(i,null,(function(){return l.createElement("div",null,l.createElement(n.Z,{groupId:"operating-systems",defaultValue:window&&-1!=window.navigator.userAgent.indexOf("Win")?"win":"mac/linux",values:[{label:"Windows",value:"win"},{label:"macOS/Linux",value:"mac/linux"}]},l.createElement(r.Z,{value:"win"},l.createElement("a",{className:"no_monospace",href:"https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-win32.msi"},"Download Scala CLI for Windows")),l.createElement(r.Z,{value:"mac/linux"},l.createElement("p",null,"Run the following one-line command in your terminal"),l.createElement("code",null," bash curl -sSLf https://virtuslab.github.io/scala-cli-packages/scala-setup.sh | sh"))))}))}},1434:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("div",{className:"col col--"+e.colsize},l.createElement("h1",{className:"section-title"+(e.promptsign?" with-before":"")},e.title))}},2051:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("div",{className:"section-features__item col col--4"},l.createElement("div",{className:"section-features__item-wrapper"},l.createElement("div",{className:"icon"},e.icon?l.createElement("img",{src:e.icon,alt:e.title}):""),l.createElement("div",{className:"title"},e.title),l.createElement("div",{className:"desc"},e.children)))}},1260:function(e,a,t){t.d(a,{Z:function(){return r}});var l=t(7294),n=t(8465);function r(e){return l.createElement("div",{className:"section-image-box__row row "},l.createElement("div",{className:"section-image-box__row-text col col--1 left-margin-stub"}),l.createElement("div",{className:"section-image-box__row-text col col--5 "},l.createElement("div",{className:"section-image-box__row-text-wrapper"},l.createElement("h3",null,e.title),l.createElement("div",{className:"content"},e.children))),l.createElement("div",{className:"section-image-box__row-image col col--6 "},l.createElement("div",{className:"section-image-box__row-image-wrapper"},e.image?l.createElement("div",{className:"green_border"},l.createElement(n.Z,{alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})):"")),l.createElement("div",{className:"section-image-box__row-text col col--1 right-margin-stub"}))}},9882:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("section",{className:"section "+e.className},e.children)}},115:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("div",{className:"section-about__wrapper row"},l.createElement("div",{className:"col col--1 big-title pre-title"},">_"),l.createElement("div",{className:"col col--3 big-title"},l.createElement("span",{className:"pre-title-mobile"},">_")," ",e.title),l.createElement("div",{className:"col col--8 description"},e.children))}},2740:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return l.createElement("div",{className:"section__header"},l.createElement("h2",null,e.title),l.createElement("div",{className:"section__header-description"},e.children))}},2994:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294);function n(e){return!!e.slug?l.createElement("a",{href:"/"+e.slug,className:"col col--4 use-box-wrapper"},l.createElement("div",{className:"use-box"},l.createElement("div",{className:"icon-wrapper"},l.createElement("img",{src:"img/ico-"+e.slug+".png",alt:e.slug+" icon"})),l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("div",{className:"read-more-wrap"},l.createElement("div",{className:"read-more with-before"},"Read more")))):l.createElement("div",{className:"col col--4 use-box-wrapper"},l.createElement("div",{className:"use-box your-case"},l.createElement("div",{className:"icon-wrapper"},l.createElement("img",{className:"light-theme",src:"img/ico-yours.png",alt:"your use case icon"}),l.createElement("img",{className:"dark-theme",src:"img/ico-yours-dark.png",alt:"your use case icon"})),l.createElement("h3",null,e.title),l.createElement("p",null,e.description)))}},7792:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var l=t(7294),n=t(2263),r=t(308),c=t(9882),i=(t(1260),t(2740),t(2051),t(115)),s=(t(2994),t(1434)),o=t(1657),u=t(5064),m=t(7462),p=t(3366),d=t(3905),b=t(8215);var h=t(1721),g=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,h.Z)(a,e);var t=a.prototype;return t.handleClick=function(e){window.location.href=this.props.href},t.render=function(){return l.createElement("button",{style:{height:"55px",width:"190px",fontSize:15,borderRadius:"3px",color:"#fff",background:"#DC332D",borderColor:"#DC332D",fontWeight:500},onClick:this.handleClick},this.props.desc)},a}(l.Component),f={toc:[]};function v(e){var a=e.components,t=(0,p.Z)(e,["components"]);return(0,d.kt)("wrapper",(0,m.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,d.kt)(i.Z,{title:"Advanced Installation",mdxType:"SectionAbout"},(0,d.kt)("div",{class:"margin--lg"}),(0,d.kt)(u.Z,{groupId:"operating-systems-specific",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"MacOs",value:"macOs"},{label:"Linux",value:"linux"}],mdxType:"Tabs"})),(0,d.kt)("div",{className:"row"},(0,d.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,d.kt)("p",null,"Pick the installation method:"),(0,d.kt)(u.Z,{groupId:"operating-systems-specific",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"MacOs",value:"macOs"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,d.kt)(b.Z,{value:"linux",mdxType:"TabItem"},(0,d.kt)(u.Z,{groupId:"linux",defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Snap",value:"snap"},{label:"Apt",value:"apt"},{label:"Deb",value:"deb"},{label:"Yum",value:"yum"},{label:"Rpm",value:"rpm"},{label:"Alpine",value:"alpine"}],mdxType:"Tabs"},(0,d.kt)(b.Z,{value:"manual",mdxType:"TabItem"},(0,d.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-linux.gz | gzip -d > scala-cli\nchmod +x scala-cli\nsudo mv scala-cli /usr/local/bin/scala-cli\n")),(0,d.kt)("p",null,"Check that it runs fine by running its ",(0,d.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,d.kt)(b.Z,{value:"apt",mdxType:"TabItem"},(0,d.kt)("p",null,"Scala CLI can be installed via ",(0,d.kt)("a",{parentName:"p",href:"https://wiki.debian.org/Apt"},"apt")," packager tool."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s --compressed "https://virtuslab.github.io/scala-cli-packages/KEY.gpg" | sudo apt-key add -\nsudo curl -s --compressed -o /etc/apt/sources.list.d/scala_cli_packages.list "https://virtuslab.github.io/scala-cli-packages/debian/scala_cli_packages.list"\nsudo apt update\nsudo apt install scala-cli\n'))),(0,d.kt)(b.Z,{value:"snap",mdxType:"TabItem"},(0,d.kt)("p",null,"Scala CLI can be installed via ",(0,d.kt)("a",{parentName:"p",href:"https://snapcraft.io/#"},"snap")," with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"snap install scala-cli\n"))),(0,d.kt)(b.Z,{value:"deb",mdxType:"TabItem"},(0,d.kt)("p",null,"The Debian package can be downloaded at ",(0,d.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-linux.deb"},"this address"),"."),(0,d.kt)("p",null,"Alternatively, you can download it and install it manually with:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.deb https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-linux.deb\nsudo dpkg -i scala-cli.deb\n"))),(0,d.kt)(b.Z,{value:"yum",mdxType:"TabItem"},(0,d.kt)("p",null,"Scala CLI can be installed via ",(0,d.kt)("a",{parentName:"p",href:"http://yum.baseurl.org"},"yum")," packager tool."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cat > /etc/yum.repos.d/virtuslab.repo << EOF\n[virtuslab-repo]\nname=VirtusLab Repo\nbaseurl=https://virtuslab.github.io/scala-cli-packages/CentOS/Packages\nenabled=1\ngpgcheck=1\ngpgkey=https://virtuslab.github.io/scala-cli-packages/KEY.gpg\nEOF\nsudo yum repo-pkgs virtuslab-repo list\nsudo yum install scala-cli    \n"))),(0,d.kt)(b.Z,{value:"rpm",mdxType:"TabItem"},(0,d.kt)("p",null,"The RPM package can be downloaded at ",(0,d.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-linux.rpm"},"this address"),"."),(0,d.kt)("p",null,"Alternatively, you can download it and install it manually with:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.rpm https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-linux.rpm\nsudo rpm -i scala-cli.rpm\n"))),(0,d.kt)(b.Z,{value:"alpine",mdxType:"TabItem"},(0,d.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q -O scala-cli.gz  https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-linux-static.gz && gunzip scala-cli.gz\nchmod +x scala-cli\nmv scala-cli /usr/bin/\n")),(0,d.kt)("p",null,"Check that it runs fine by running its ",(0,d.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))))),(0,d.kt)(b.Z,{value:"windows",mdxType:"TabItem"},(0,d.kt)(u.Z,{groupId:"windows",defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Installer",value:"installer"}],mdxType:"Tabs"},(0,d.kt)(b.Z,{value:"manual",mdxType:"TabItem"},(0,d.kt)("p",null,"Note that the Windows manual installation requires ",(0,d.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"},"Visual C++ redistributable"),"\nto be installed. See below for how to install it."),(0,d.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fLo scala-cli.zip https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-win32.zip\ntar -xf scala-cli.zip\n")),(0,d.kt)("p",null,"Check that it runs fine by running its ",(0,d.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n")),(0,d.kt)("p",null,"If you get an error about ",(0,d.kt)("inlineCode",{parentName:"p"},"MSVCR100.dll")," being missing, you have to install\n",(0,d.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"},"Visual C++ redistributable"),". A valid version is distributed with the Scala CLI launchers.\nYou can download it ",(0,d.kt)("a",{parentName:"p",href:"https://github.com/Virtuslab/scala-cli/releases/download/nightly/vc_redist.x64.exe"},"here"),",\nand install it by double-clicking on it. Once the Visual C++ redistributable runtime is installed,\ncheck that the Scala CLI runs fine by running its ",(0,d.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n")),(0,d.kt)("p",null,"Note that the commands above don't put the ",(0,d.kt)("inlineCode",{parentName:"p"},"scala-cli")," command in the ",(0,d.kt)("inlineCode",{parentName:"p"},"PATH"),". For that, you can create a directory, move the\nlauncher there, and add the directory to the ",(0,d.kt)("inlineCode",{parentName:"p"},"PATH")," with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'md "%USERPROFILE%/scala-cli"\nscala-cli add-path "%USERPROFILE%/scala-cli"\nmove scala-cli.exe "%USERPROFILE%/scala-cli"\n'))),(0,d.kt)(b.Z,{value:"installer",mdxType:"TabItem"},(0,d.kt)("p",null,"Download MSI installer with Scala CLI for Windows"),(0,d.kt)(g,{desc:"Scala CLI for Windows",href:"https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-pc-win32.msi",mdxType:"DownloadButton"})))),(0,d.kt)(b.Z,{value:"macOs",mdxType:"TabItem"},(0,d.kt)(u.Z,{groupId:"macOs",defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Installer",value:"installer"},{label:"Brew",value:"brew"}],mdxType:"Tabs"},(0,d.kt)(b.Z,{value:"manual",mdxType:"TabItem"},(0,d.kt)("p",null,"Download the launcher from GitHub release assets with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-apple-darwin.gz | gzip -d > scala-cli\nchmod +x scala-cli\nmv scala-cli /usr/local/bin/scala-cli\n")),(0,d.kt)("p",null,"Check that it runs fine by running its ",(0,d.kt)("inlineCode",{parentName:"p"},"about")," command:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli about\n"))),(0,d.kt)(b.Z,{value:"installer",mdxType:"TabItem"},(0,d.kt)("p",null,"Download PKG installer with Scala CLI for MacOS"),(0,d.kt)(g,{desc:"Scala CLI for MacOS",href:"https://github.com/Virtuslab/scala-cli/releases/download/nightly/scala-cli-x86_64-apple-darwin.pkg",mdxType:"DownloadButton"}),(0,d.kt)("br",null),(0,d.kt)("br",null),(0,d.kt)("p",null,"Once downloaded, right-click on ",(0,d.kt)("inlineCode",{parentName:"p"},"scala-cli-x86_64-apple-darwin.pkg"),' from Finder, and choose "Open".')),(0,d.kt)(b.Z,{value:"brew",mdxType:"TabItem"},(0,d.kt)("p",null,"Scala CLI can be installed via ",(0,d.kt)("a",{parentName:"p",href:"https://brew.sh"},"homebrew")," with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"brew install Virtuslab/scala-cli/scala-cli \n")))))))),(0,d.kt)(i.Z,{title:"Shell completions",mdxType:"SectionAbout"},(0,d.kt)("div",{class:"margin--lg"}),(0,d.kt)(u.Z,{defaultValue:"bash",groupId:"shell-specific",values:[{label:"Bash",value:"bash"},{label:"zsh",value:"zsh"}],mdxType:"Tabs"})),(0,d.kt)("div",{className:"row"},(0,d.kt)("div",{className:"col col--9 col--offset-1 padding--lg advanced_install_methods"},(0,d.kt)("p",null,"Try the completions with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'eval "$(scala-cli install completions --env)"\nscala-cli --<TAB>\n')),(0,d.kt)("p",null,"Install them on your system with"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions\n")),(0,d.kt)("p",null,"If any of the ",(0,d.kt)("inlineCode",{parentName:"p"},"scala-cli install completions")," command complained that your shell cannot be determined, specify it\nwith ",(0,d.kt)("inlineCode",{parentName:"p"},"--shell")),(0,d.kt)(u.Z,{groupId:"shell-specific",defaultValue:"bash",mdxType:"Tabs"},(0,d.kt)(b.Z,{value:"bash",mdxType:"TabItem"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions --shell bash\n"))),(0,d.kt)(b.Z,{value:"zsh",mdxType:"TabItem"},(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli install completions --shell zsh\n")))))))}v.isMDXComponent=!0;var k=function(e){(0,n.Z)().siteConfig;return l.createElement(r.Z,{title:"Install Scala CLI",description:"How to install Scala CLI"},l.createElement("div",{className:"container content"},l.createElement(c.Z,{className:"section-install-cli"},l.createElement("div",{className:"row"},l.createElement(s.Z,{title:"Quick start",colsize:"4",promptsign:!0}),l.createElement("div",{className:"col col--8"},l.createElement(o.Z,null)))),l.createElement(c.Z,{className:"section-about advanced-install"},l.createElement(v,null))))}}}]);