"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[827],{3905:function(e,a,n){n.d(a,{Zo:function(){return s},kt:function(){return u}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=t.createContext({}),p=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=p(e.components);return t.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=l,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?t.createElement(k,o(o({ref:a},s),{},{components:n})):t.createElement(k,o({ref:a},s))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var c in a)hasOwnProperty.call(a,c)&&(r[c]=a[c]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5e3:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=n(7462),l=n(3366),i=(n(7294),n(3905)),o={title:"Compile",sidebar_position:5},r=void 0,c={unversionedId:"guides/compile",id:"guides/compile",isDocsHomePage:!1,title:"Compile",description:"Scala CLI can compile your code with its compile command:",source:"@site/docs/guides/compile.md",sourceDirName:"guides",slug:"/guides/compile",permalink:"/docs/guides/compile",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/guides/compile.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Compile",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/guides/configuration"},next:{title:"Run",permalink:"/docs/guides/run"}},p=[{value:"Watch mode",id:"watch-mode",children:[]},{value:"Scala compiler options",id:"scala-compiler-options",children:[]},{value:"Scala compiler plugins",id:"scala-compiler-plugins",children:[]},{value:"Scala version",id:"scala-version",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Printing a class path",id:"printing-a-class-path",children:[]}],s={toc:p};function m(e){var a=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scala CLI can compile your code with its ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat Hello.scala\n# object Hello {\n#   def main(args: Array[String]): Unit =\n#     println("Hello")\n# }\nscala-cli compile Hello.scala\n')),(0,i.kt)("p",null,"Note that most commands of the Scala CLI will automatically compile your code if necessary.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," command is useful if you'd like to simply check that your code compiles,\nor know of compilation warnings, without running it or packaging it for example."),(0,i.kt)("p",null,"We list below some options the ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," command accepts. For a full list of options,\nrun ",(0,i.kt)("inlineCode",{parentName:"p"},"scala compile --help"),", or check the options linked in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/commands#compile"},"reference documentation"),"."),(0,i.kt)("h2",{id:"watch-mode"},"Watch mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," watch your code for changes, and re-compiles it upon change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --watch Hello.scala\n# Compiling project-cef76d561e (1 Scala source)\n# Compiled 'project-cef76d561e'\n# Watching sources, press Ctrl+C to exit.\n# Compiling project-cef76d561e (1 Scala source)\n# Compiled 'project-cef76d561e'\n# Watching sources, press Ctrl+C to exit.\n")),(0,i.kt)("h2",{id:"scala-compiler-options"},"Scala compiler options"),(0,i.kt)("p",null,"Most ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/overviews/compiler-options"},"Scala compiler options")," can be passed as\nis to ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala -Xlint:infer-any\n# Compiling project_b729aa2200-cef76d561e (1 Scala source)\n# [warn] ./Hello.scala:2:11: a type was inferred to be `Any`; this may indicate a programming error.\n# [warn]   val l = List(\"a\", true, 2, new Object)\n# [warn]           ^\n# Compiled 'project_b729aa2200-cef76d561e'\n")),(0,i.kt)("p",null,"In more detail, all options starting with"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-g")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-opt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-P")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-target")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-V")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-W")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-X")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Y"))),(0,i.kt)("p",null,"are assumed to be Scala compiler options."),(0,i.kt)("p",null,"Compiler options can also be passed with ",(0,i.kt)("inlineCode",{parentName:"p"},"-O"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala -O -deprecation -O -Xlint:infer-any\n# [warn] ./Hello.scala:3:7: method x in class Some is deprecated (since 2.12.0): Use .value instead.\n# [warn]   opt.x\n# [warn]       ^\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-O")," accepts both options with the prefixes above and those without such a prefix."),(0,i.kt)("h2",{id:"scala-compiler-plugins"},"Scala compiler plugins"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--compiler-plugin")," to add compiler plugin dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Main.scala --compiler-plugin org.typelevel:::kind-projector:0.13.2 --scala 2.12.14\n")),(0,i.kt)("h2",{id:"scala-version"},"Scala version"),(0,i.kt)("p",null,"Specify the Scala version you'd like to use with ",(0,i.kt)("inlineCode",{parentName:"p"},"--scala"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --scala 2.13.6 Hello.scala\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," should work with all major ",(0,i.kt)("inlineCode",{parentName:"p"},"2.12.x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2.13.x"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"3.x")," Scala versions."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--scala"),' also accepts "short" Scala versions, such as ',(0,i.kt)("inlineCode",{parentName:"p"},"2.12"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),". In that\ncase, it picks the highest corresponding stable Scala version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --scala 2.12 Hello.scala\nscala-cli compile --scala 2 Hello.scala\nscala-cli compile --scala 3 Hello.scala\n")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"You can add dependencies on the command-line, via ",(0,i.kt)("inlineCode",{parentName:"p"},"--dependency"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala --dependency dev.zio::zio:1.0.9\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"--dependency")," is only meant as a convenience. You should favour\nadding dependencies in the sources themselves (via ",(0,i.kt)("inlineCode",{parentName:"p"},"import $dep"),")\nor in a configuration file."),(0,i.kt)("p",null,"You can also add repositories on the command-line, via ",(0,i.kt)("inlineCode",{parentName:"p"},"--repository"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala --dependency com.pany::util:33.1.0 --repo https://artifacts.pany.com/maven\n")),(0,i.kt)("p",null,"Lastly, you can also add simple JAR files as dependencies, with ",(0,i.kt)("inlineCode",{parentName:"p"},"--jar"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala --jar /path/to/library.jar\n")),(0,i.kt)("h2",{id:"printing-a-class-path"},"Printing a class path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--class-path")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"scala compile")," print a class path that can be passed to other tools:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --class-path Hello.scala\n# /work/.scala/project-cef76d561e/classes:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.12.14/scala-library-2.12.14.jar:~/Library/Caches/ScalaCli/local-repo/0.1.0/org.virtuslab.scala-cli/runner_2.12/0.0.1-SNAPSHOT/jars/runner_2.12.jar:~/Library/Caches/ScalaCli/local-repo/0.1.0/org.virtuslab.scala-cli/stubs/0.0.1-SNAPSHOT/jars/stubs.jar\n")),(0,i.kt)("p",null,"You can pass this class path to ",(0,i.kt)("inlineCode",{parentName:"p"},"java -cp")," for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'java -cp "$(scala compile --class-path Hello.scala)" Hello\n# Hello\n')),(0,i.kt)("p",null,"Note that you should favour the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/run"},(0,i.kt)("inlineCode",{parentName:"a"},"run"))," command to run your code, rather than running ",(0,i.kt)("inlineCode",{parentName:"p"},"java -cp"),".\nThe class path obtained this way is meant for scenarios where ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," doesn't offer a more\nconvenient option."))}m.isMDXComponent=!0}}]);