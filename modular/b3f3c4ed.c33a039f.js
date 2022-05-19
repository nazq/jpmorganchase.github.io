(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),i=(a(0),a(99)),p={id:"getting-started",title:"Getting Started With Modular",sidebar_label:"Getting Started"},o={unversionedId:"overview/getting-started",id:"overview/getting-started",isDocsHomePage:!1,title:"Getting Started With Modular",description:"Commands",source:"@site/docs/overview/getting-started.md",slug:"/overview/getting-started",permalink:"/modular/docs/overview/getting-started",version:"current",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Welcome to Modular",permalink:"/modular/docs/overview/introduction"},next:{title:"Views Explained",permalink:"/modular/docs/overview/views"}},c=[{value:"Commands",id:"commands",children:[]},{value:"Config",id:"config",children:[]}],b={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)("h4",{id:"yarn-create-modular-react-app-project-name"},Object(i.b)("inlineCode",{parentName:"h4"},"yarn create modular-react-app <project-name>")),Object(i.b)("p",null,"Bootstraps a new project, configured to use workspaces."),Object(i.b)("p",null,"This also creates a workspace named 'app' containing a fresh application written\nin ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),"."),Object(i.b)("h4",{id:"yarn-modular-add-module-name"},Object(i.b)("inlineCode",{parentName:"h4"},"yarn modular add <module-name>")),Object(i.b)("p",null,"Adds a new package by creating a new workspace under ",Object(i.b)("inlineCode",{parentName:"p"},"packages/"),". Packages can\ncurrently be one of 3 types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A standalone application. This corresponds to a single ",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app"),"\nproject in a workspace. Inside this workspace, you can import packages from\nother workspaces freely, and features like jsx and typechecking work out of\nthe box.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A View, which is a package that exports a React component by default. Views\nare primary, top-level components in ",Object(i.b)("inlineCode",{parentName:"p"},"modular"),". Read more about Views in\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview/views"}),"this explainer"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A typical javascript package. You can use this to create any other kind of\nutility, tool, or whatever your needs require you to do. As an example, you\ncould build a node.js server inside one of these."))),Object(i.b)("h4",{id:"yarn-modular-start-app-name"},Object(i.b)("inlineCode",{parentName:"h4"},"yarn modular start <app-name>")),Object(i.b)("p",null,"Runs\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev/docs/getting-started#npm-start-or-yarn-start"}),Object(i.b)("inlineCode",{parentName:"a"},"react-scripts start")),"\nagainst the selected app."),Object(i.b)("h4",{id:"yarn-modular-test"},Object(i.b)("inlineCode",{parentName:"h4"},"yarn modular test")),Object(i.b)("p",null,"Runs ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev/docs/running-tests"}),Object(i.b)("inlineCode",{parentName:"a"},"react-scripts test")),"\nagainst the entire ",Object(i.b)("inlineCode",{parentName:"p"},"modular")," project."),Object(i.b)("h4",{id:"yarn-modular-build-app-name"},Object(i.b)("inlineCode",{parentName:"h4"},"yarn modular build <app-name>")),Object(i.b)("p",null,"Runs ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev/docs/production-build"}),Object(i.b)("inlineCode",{parentName:"a"},"react-scripts build")),"\nagainst the selected app."),Object(i.b)("h2",{id:"config"},"Config"),Object(i.b)("h4",{id:"modularsetupteststs"},Object(i.b)("inlineCode",{parentName:"h4"},"modular/setupTests.ts")),Object(i.b)("p",null,"This contains the setup for tests (e.g.\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration#setupfilesafterenv-array"}),Object(i.b)("inlineCode",{parentName:"a"},"jest.config.js#setupFilesAfterEnv")),")."),Object(i.b)("p",null,"Unlike ",Object(i.b)("inlineCode",{parentName:"p"},"create-react-app")," which stores the setup for tests in an individual\napplication's\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://create-react-app.dev/docs/running-tests/#srcsetuptestsjs"}),Object(i.b)("inlineCode",{parentName:"a"},"src/setupTests.ts")),"\nwe place it at the root of the project within ",Object(i.b)("inlineCode",{parentName:"p"},"modular/setupTests.ts")," where it\napplies to the whole project."),Object(i.b)("h4",{id:"packagejsonmodular"},Object(i.b)("inlineCode",{parentName:"h4"},"package.json#modular")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"NOTE: This property is created automatically and is described here for\nreference only.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"e.g.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "modular": {\n    "type": "root"\n  }\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"package.json#modular.type")," can be ",Object(i.b)("inlineCode",{parentName:"p"},'"root"'),", ",Object(i.b)("inlineCode",{parentName:"p"},'"app"'),", ",Object(i.b)("inlineCode",{parentName:"p"},'"view"')," or\n",Object(i.b)("inlineCode",{parentName:"p"},'"package"'),"."),Object(i.b)("h5",{id:"root"},Object(i.b)("inlineCode",{parentName:"h5"},'"root"')),Object(i.b)("p",null,"This type identifies the root of the project."),Object(i.b)("h5",{id:"view"},Object(i.b)("inlineCode",{parentName:"h5"},'"view"')),Object(i.b)("p",null,"This type identifies modules that export a single React component as their\ndefault export. ",Object(i.b)("inlineCode",{parentName:"p"},"modular")," makes these modules available via a dynamically\ngenerated view map with ",Object(i.b)("inlineCode",{parentName:"p"},"modular-views.macro"),". Read more about Views in\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview/views"}),"this explainer"),"."),Object(i.b)("h5",{id:"app"},Object(i.b)("inlineCode",{parentName:"h5"},'"app"')),Object(i.b)("p",null,"This type identifies a standalone application that can be started or built."),Object(i.b)("h5",{id:"package"},Object(i.b)("inlineCode",{parentName:"h5"},'"package"')),Object(i.b)("p",null,"This type identifies a regular package (e.g. a library that can be used by other\n",Object(i.b)("inlineCode",{parentName:"p"},'"view"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'"app"')," modules). s a regular package (e.g. a library that can be\nused by other ",Object(i.b)("inlineCode",{parentName:"p"},'"view"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'"app"')," modules)."))}s.isMDXComponent=!0}}]);