(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{204:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),l=t.n(r),o=t(207),i=t.n(o),c=t(220),m=t(206),s=t(210),u=t(189),p=t.n(u),d=t(190),h=t.n(d),g=function(e){return l.a.createElement("button",Object(n.a)({},e,{className:i()(e.contained?h.a.buttonContained:h.a.button,e.className)}),e.children)},E=t(211),v=(t(25),t(19),t(20),t(52),t(191)),y=t.n(v),b={OpenAPI:{"JavaScript Wiki":"openapi-javascript-wiki","Location Weather":"openapi-location-weather",YouTrack:"openapi-youtrack"},"JSON Schema":{"Fake API":"json-schema-example"},OData:{TripPin:"odata-trippin"},SOAP:{"Country Info":"soap-country-info"},SQLite:{Chinook:"sqlite-chinook"}},f=function(){var e=Object(r.useState)("openapi-javascript-wiki"),a=e[0],t=e[1];return l.a.createElement("div",null,l.a.createElement("div",{className:y.a.picker},"Choose Live Example: ",l.a.createElement("select",{value:a,onChange:function(e){return t(e.target.value)}},Object.keys(b).map((function(e){return l.a.createElement("optgroup",{key:e,label:e},Object.keys(b[e]).map((function(a){return l.a.createElement("option",{key:a,label:a,value:b[e][a]},a)})))})))),l.a.createElement("div",{className:y.a.container},l.a.createElement("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/"+a+"?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:a,allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})))},w=[{title:l.a.createElement(l.a.Fragment,null,"GraphQL as a Query Language"),imageUrl:"img/GraphQL_Logo.svg",description:l.a.createElement(l.a.Fragment,null,"Use GraphQL as a query language to fetch data from your data-sources directly, without the need for a running gateway server, or any other bottleneck.")},{title:l.a.createElement(l.a.Fragment,null,"Any Data Source"),imageUrl:"img/mesh-example.png",description:l.a.createElement(l.a.Fragment,null,"With GraphQL Mesh, you can use GraphQL query language to fetch from (almost) any data source, without changing the source or modify it's code.")},{title:l.a.createElement(l.a.Fragment,null,"Open Source"),imageUrl:"img/open-source.svg",description:l.a.createElement(l.a.Fragment,null,"GraphQL Mesh is free and open-source, and been built with the community. You can contribute, extend and have your custom logic easily.")}];function k(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(s.a)(a);return l.a.createElement("div",{className:i()("col col--4",p.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:p.a.featureImage,src:r,alt:t})),l.a.createElement("h3",null,t),l.a.createElement("p",null,n))}a.default=function(){return Object(m.a)(),l.a.createElement(c.a,{title:"GraphQL Mesh",description:""},l.a.createElement("header",{class:p.a.header},l.a.createElement("video",{width:"100%",height:"100%",playsInline:!0,autoPlay:!0,muted:!0,loop:!0},l.a.createElement("source",{src:"/video/medium_1200X345.webm",type:"video/webm"}),l.a.createElement("source",{src:"/video/medium_1200X345.mp4",type:"video/mp4"})),l.a.createElement("img",{class:p.a.npmBadge,alt:"npm",src:"https://img.shields.io/npm/v/@graphql-mesh/runtime?color=%231BCBE2&label=stable&style=for-the-badge"}),l.a.createElement("div",{className:p.a.buttons},l.a.createElement(g,null,l.a.createElement(E.a,{to:"#live-demo"},"Try It Out Live")),l.a.createElement(g,null,l.a.createElement(E.a,{to:"/docs/getting-started/introduction"},"View Docs")))),l.a.createElement("div",{className:p.a.liveDemo},l.a.createElement("a",{id:"live-demo"}),l.a.createElement(f,null)),l.a.createElement("main",null,w&&w.length&&l.a.createElement("section",{className:p.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},w.map((function(e,a){return l.a.createElement(k,Object(n.a)({key:a},e))})))))))}}}]);