(this["webpackJsonpevent-from-demo"]=this["webpackJsonpevent-from-demo"]||[]).push([[0],{18:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(6),c=o.n(r),s=o(7),i=o(11);const a=Object(i.a)({theme:{colors:{pageBackground:"rgb(240,240,240)",backgroundContrast:"rgb(216,216,216)",highContrast:"rgb(0,0,0)",lowContrast:"rgb(128,128,128)",red:"hsl(0,100%,50%)",orange:"hsl(30,100%,50%)",yellow:"hsl(51,100%,40%)",green:"hsl(120,100%,30%)",blueGreen:"hsl(180,100%,35%)",blue:"hsl(240,100%,50%)",purple:"hsl(270,100%,60%)"}}}),{styled:l,theme:d,global:h}=a,p=d({colors:{pageBackground:"rgb(32,32,32)",backgroundContrast:"rgb(64,64,64)",highContrast:"rgb(192,192,192)",lowContrast:"rgb(136,136,136)",red:"hsl(0,100%,50%)",orange:"hsl(30,90%,50%)",yellow:"hsl(60,88%,50%)",green:"hsl(120,85%,42%)",blueGreen:"hsl(180,100%,50%)",blue:"hsl(210,100%,60%)",purple:"hsl(270,85%,60%)"}}),u=h({"button, input":{all:"unset"},"body, div, span, a, p, h1, h2, h3, code, button, form, input":{margin:0,border:0,padding:0,boxSizing:"inherit",font:"inherit",fontWeight:"inherit",textDecoration:"inherit",textAlign:"inherit",color:"inherit",background:"transparent"},html:{height:"100%"},body:{height:"100%",color:"$highContrast",fontFamily:"system-ui, Helvetica Neue, sans-serif",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontSize:"16px",boxSizing:"border-box",textSizeAdjust:"none"},code:{fontFamily:"monospace"},"#root":{minHeight:"100%",backgroundColor:"$pageBackground"}});var b=o(3),g=o(12),j=o(1);const x=l((({onClick:e,className:t,children:o})=>Object(j.jsx)(b.a,{as:"button",className:t,onClick:e,children:o})),{color:"$highContrast",WebkitTapHighlightColor:"transparent","&.hover, &.active":{color:"$green"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),v=l((({checked:e,onChange:t,disabled:o,className:n})=>Object(j.jsx)(b.a,{as:"input",type:"checkbox",checked:e,onChange:t,disabled:o,className:n})),{WebkitTapHighlightColor:"transparent",appearance:"checkbox","&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"1px"}}),m=l((({href:e,className:t,children:o})=>Object(j.jsx)(b.a,{as:"a",href:e,className:t,target:"_blank",rel:"noopener noreferrer",children:o})),{color:"$highContrast",borderBottom:"1px dotted $colors$green",textDecoration:"none",WebkitTapHighlightColor:"transparent","&.hover, &.active":{borderBottomStyle:"solid"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"},variants:{type:{lowContrast:{color:"$lowContrast",fontSize:"14px","&.hover, &.active":{color:"$highContrast"}}}}}),O=l((({onClick:e,className:t})=>Object(j.jsx)(x,{className:t,onClick:e,children:Object(j.jsx)(g.a,{width:"30",height:"30"})})),{width:"30px",height:"30px"});var f=o(2);const y=[{propName:"onClick",category:"click"},{propName:"onDoubleClick",category:"click"},{propName:"onPointerEnter",category:"pointer"},{propName:"onPointerLeave",category:"pointer"},{propName:"onPointerOver",category:"pointer"},{propName:"onPointerOut",category:"pointer"},{propName:"onPointerDown",category:"pointer"},{propName:"onPointerUp",category:"pointer"},{propName:"onPointerMove",category:"pointer"},{propName:"onGotPointerCapture",category:"pointer"},{propName:"onLostPointerCapture",category:"pointer"},{propName:"onPointerCancel",category:"pointer"},{propName:"onMouseEnter",category:"mouse"},{propName:"onMouseLeave",category:"mouse"},{propName:"onMouseOver",category:"mouse"},{propName:"onMouseOut",category:"mouse"},{propName:"onMouseDown",category:"mouse"},{propName:"onMouseUp",category:"mouse"},{propName:"onMouseMove",category:"mouse"},{propName:"onTouchStart",category:"touch"},{propName:"onTouchMove",category:"touch"},{propName:"onTouchEnd",category:"touch"},{propName:"onTouchCancel",category:"touch"},{propName:"onKeyDown",category:"key"},{propName:"onKeyUp",category:"key"},{propName:"onFocus",category:"focus"},{propName:"onBlur",category:"focus"},{propName:"onDragStart",category:"drag"},{propName:"onDrag",category:"drag"},{propName:"onDragEnd",category:"drag"},{propName:"onSelect",category:"select"},{propName:"onContextMenu",category:"contextMenu"}],k=({eventLog:e,nowTime:t,eventType:o})=>{for(let n=e.length-1;n>=0;n--){if(o&&o!==e[n].type)continue;const r=e[n].lastEventTime||e[n].time;if(void 0!==r)return t-r}},C=()=>{const{setMoveListeners:e,preventDefaultOnAll:t,contextMenuPreventDefault:o,consoleLogEvents:r}=Object(n.useContext)(ce),[c,s]=Object(n.useState)([]);return{eventLog:c,eventListeners:Object(n.useMemo)((()=>y.reduce(((n,c)=>(!e&&/move/.test(c.propName.toLowerCase())||(n[c.propName]=e=>{const n=Object(f.a)(e),i=Date.now();(t||o&&"contextmenu"===e.type)&&e.preventDefault(),r&&console.log(e,"eventFrom: ".concat(n)),s((t=>{const o=[...t],r=(({eventLog:e,type:t,eventFrom:o,nowTime:n,recentTimeCutoff:r})=>{for(let c=e.length-1;c>=Math.max(e.length-2,0);c--){const s=e[c],i=s.lastEventTime||s.time;if(s.type===t&&s.eventFrom===o&&i&&n-i<=r)return c}})({eventLog:o,type:e.type,eventFrom:n,nowTime:i,recentTimeCutoff:1e3});if(["click","mousemove","pointermove","touchmove","keydown","keyup","drag","scroll","wheel"].includes(e.type)&&void 0!==r){const t=o[r],s=t.count?t.count+1:2;o[r]={category:c.category,type:e.type,eventFrom:n,time:t.time,lastEventTime:i,timeSincePreviousEvent:t.timeSincePreviousEvent,timeSincePreviousPointerdown:t.timeSincePreviousPointerdown,xCoordinate:Math.round(e.clientX),yCoordinate:Math.round(e.clientY),target:e.target,count:s}}else o.push({category:c.category,type:e.type,eventFrom:n,time:i,timeSincePreviousEvent:k({eventLog:o,nowTime:i}),timeSincePreviousPointerdown:k({eventLog:o,eventType:"pointerdown",nowTime:i}),xCoordinate:Math.round(e.clientX),yCoordinate:Math.round(e.clientY),target:e.target});return o}))}),n)),{})),[e,t,o,r])}},w=l("div",{height:"300px",padding:"0 5px",border:"1px solid $colors$highContrast",overflow:"scroll"}),$=l("code",{display:"block",variants:{spaceAbove:{true:{marginTop:"20px"}}}}),T=l("span",{variants:{type:{click:{color:"$blue"},pointer:{color:"$green"},mouse:{color:"$purple"},touch:{color:"$orange"},key:{color:"$yellow"},focus:{color:"$blueGreen"},cancel:{color:"$red"},lowContrast:{color:"$lowContrast"}}}}),S=(e,t)=>{if("pointercancel"===t||"touchcancel"===t)return"cancel";switch(e){case"click":case"pointer":case"mouse":case"touch":case"key":case"focus":return e;default:return}},N=({eventLog:e,height:t})=>{const{showTimeSincePreviousEvent:o,showTimeSincePreviousPointerdown:r,showEventCoordinates:c,showPointerEvents:s,showMouseEvents:i,showTouchEvents:a}=Object(n.useContext)(ce),l=Object(n.useRef)(null);Object(n.useEffect)((()=>{l&&l.current&&(l.current.scrollTop=l.current.scrollHeight)}));const d=[];return s||d.push("pointer"),i||d.push("mouse"),a||d.push("touch"),Object(j.jsx)(w,{ref:l,css:{height:t},children:e.map((({category:e,type:t,count:n,eventFrom:s,time:i,timeSincePreviousEvent:a,timeSincePreviousPointerdown:l,xCoordinate:h,yCoordinate:p},u)=>d.includes(e)?null:Object(j.jsxs)($,{spaceAbove:void 0!==a&&a>1e3,children:[Object(j.jsx)(T,{type:"lowContrast",children:u})," ",Object(j.jsxs)(T,{type:S(e,t),children:[t,n?" (".concat(n,")"):""]})," ","eventFrom ",Object(j.jsx)(T,{type:s,children:s}),o&&void 0!==a&&Object(j.jsxs)("span",{children:[", ",a,"ms"]}),r&&void 0!==l&&Object(j.jsxs)("span",{children:[", ",l,"ms_pointerdown"]}),c&&Object(j.jsxs)("span",{children:[", x:",h,", y:",p]})]},"".concat(u).concat(t).concat(n))))})},E=l("div",{paddingBottom:"20px",margin:"20px 0",borderBottom:"1px dotted $colors$lowContrast"}),F={display:"block",width:"100%",height:"70px",margin:"10px 0",fontSize:"24px",textAlign:"center",color:"$highContrast",border:"1px solid $colors$highContrast"},P=l((e=>Object(j.jsx)(b.a,{...e,as:"button"})),{...F,"&.hover, &.active":{color:"$green",borderColor:"$green"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),L=l("button",{...F,"&:hover, &:active":{color:"$green",borderColor:"$green"},"&:focus":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),A=l("div",{margin:"10px 0"}),M={fontSize:"24px"},D=l((e=>Object(j.jsx)(b.a,{...e,as:"a"})),{...M,"&.hover, &.active":{color:"$green",borderColor:"$green"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),H=l("a",{...M,"&:hover, &:active":{color:"$green",borderColor:"$green"},"&:focus":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),W=(l("div",{margin:"10px 0",height:"100px",padding:"0 5px",border:"1px solid $colors$highContrast",overflow:"scroll"}),l("div",{pointerEvents:"none"}),l("h3",{fontSize:"14px",margin:"12px 0 2px",color:"$lowContrast"})),B={width:"100%",fontSize:"24px",border:"1px solid $colors$highContrast",padding:"2px 4px"},z=l((e=>Object(j.jsx)(b.a,{...e,as:"input",type:"text"})),{...B,"&.hover, &.active":{color:"$green",borderColor:"$green"},"&.focus":{outline:"2px solid $colors$green",outlineOffset:"-1px"}}),R=l("input",{...B,"&:hover, &:active":{color:"$green",borderColor:"$green"},"&:focus":{outline:"2px solid $colors$green",outlineOffset:"-1px"}}),I={display:"block",width:"100%",height:"44px",margin:"10px 0",fontSize:"24px",textAlign:"center",color:"$highContrast",border:"1px solid $colors$highContrast"},U=l((e=>Object(j.jsx)(b.a,{...e,as:"input",type:"submit"})),{...I,"&.hover, &.active":{color:"$green",borderColor:"$green"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),K=l("input",{...I,"&:hover, &:active":{color:"$green",borderColor:"$green"},"&:focus":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),G=()=>{const{useReactInteractive:e,riUseExtendedTouchActive:t,touchActionNone:o,webkitTapHighlightColorTransparent:r,webkitTouchCalloutNone:c}=Object(n.useContext)(ce),{eventLog:s,eventListeners:i}=C();return Object(j.jsxs)(E,{id:"button-demo",children:[e?Object(j.jsx)(P,{...i,useExtendedTouchActive:t,css:{WebkitTapHighlightColor:r?"transparent":void 0},children:"Test Button"}):Object(j.jsx)(L,{...i,css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0,WebkitTouchCallout:c?"none":void 0},children:"Test Button"}),Object(j.jsx)(N,{eventLog:s})]})},X=()=>{const{useReactInteractive:e,riUseExtendedTouchActive:t,touchActionNone:o,webkitTapHighlightColorTransparent:r,webkitTouchCalloutNone:c,draggableFalse:s}=Object(n.useContext)(ce),{eventLog:i,eventListeners:a}=C();return Object(j.jsxs)(E,{id:"link-demo",children:[Object(j.jsx)(A,{children:e?Object(j.jsx)(D,{...a,href:"#link-demo",useExtendedTouchActive:t,css:{WebkitTapHighlightColor:r?"transparent":void 0},children:'Test link with href="#link-demo"'}):Object(j.jsx)(H,{...a,href:"#link-demo",draggable:!s&&void 0,css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0,WebkitTouchCallout:c?"none":void 0},children:'Test link with href="#link-demo"'})}),Object(j.jsx)(N,{eventLog:i})]})},Y=()=>{const{useReactInteractive:e,riUseExtendedTouchActive:t,touchActionNone:o,webkitTapHighlightColorTransparent:r,webkitTouchCalloutNone:c}=Object(n.useContext)(ce),s=C(),i=C();return Object(j.jsxs)(E,{id:"form-demo",children:[Object(j.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[e?Object(j.jsx)(z,{...s.eventListeners,useExtendedTouchActive:t,placeholder:"Form demo",css:{WebkitTapHighlightColor:r?"transparent":void 0}}):Object(j.jsx)(R,{...s.eventListeners,type:"text",placeholder:"Form demo",css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0,WebkitTouchCallout:c?"none":void 0}}),e?Object(j.jsx)(U,{...i.eventListeners,useExtendedTouchActive:t,value:"Submit",css:{WebkitTapHighlightColor:r?"transparent":void 0}}):Object(j.jsx)(K,{...i.eventListeners,type:"submit",value:"Submit",css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0,WebkitTouchCallout:c?"none":void 0}})]}),Object(j.jsx)(W,{children:"Text input event log"}),Object(j.jsx)(N,{eventLog:s.eventLog,height:"150px"}),Object(j.jsx)(W,{children:"Submit input event log"}),Object(j.jsx)(N,{eventLog:i.eventLog,height:"150px"})]})},J=l("div",{maxWidth:"700px",padding:"14px 15px 25px",margin:"0 auto"}),_=l("h1",{fontSize:"26px",display:"flex",justifyContent:"space-between",marginBottom:"2px"}),q=l("p",{padding:"10px 0",borderBottom:"1px dotted $colors$lowContrast"}),Q=l("div",{borderBottom:"1px dotted $colors$lowContrast","& code":{backgroundColor:"$backgroundContrast",padding:"0 5px",borderRadius:"5px"}}),V=l(x,{display:"block",margin:"10px 0",fontSize:"20px"}),Z=l("div",{paddingBottom:"6px"}),ee=l("div",{margin:"14px 0 6px",fontWeight:"600"}),te=l("div",{margin:"4px 0"}),oe=l("label",{cursor:"pointer",WebkitTapHighlightColor:"transparent",variants:{disabled:{true:{opacity:.5,cursor:"unset"}}}}),ne=l(v,{verticalAlign:"middle",marginRight:"4px"}),re=({label:e,checked:t,disabled:o,update:n})=>Object(j.jsx)(te,{children:Object(j.jsxs)(oe,{disabled:o,children:[Object(j.jsx)(ne,{disabled:o,checked:t,onChange:()=>n((e=>!e))}),e]})}),ce=Object(n.createContext)({useReactInteractive:!1,setMoveListeners:!1,preventDefaultOnAll:!1,touchActionNone:!1,webkitTapHighlightColorTransparent:!1,riUseExtendedTouchActive:!1,userSelectNone:!1,webkitTouchCalloutNone:!1,contextMenuPreventDefault:!1,draggableFalse:!1,showTimeSincePreviousEvent:!1,showEventCoordinates:!1,showPointerEvents:!1,showMouseEvents:!1,showTouchEvents:!1,showTimeSincePreviousPointerdown:!1,consoleLogEvents:!1}),se=()=>{u();const e=Object(s.a)(void 0,{classNameDark:p}),[t,o]=Object(n.useState)(!1),[r,c]=Object(n.useState)(!0),[i,a]=Object(n.useState)(!0),[l,d]=Object(n.useState)(!1),[h,b]=Object(n.useState)(!1),[g,x]=Object(n.useState)(!0),[v,f]=Object(n.useState)(!1),[y,k]=Object(n.useState)(!1),[C,w]=Object(n.useState)(!1),[$,T]=Object(n.useState)(!1),[S,N]=Object(n.useState)(!1);r&&(y&&k(!1),C&&w(!1),$&&T(!1),S&&N(!1));const[E,F]=Object(n.useState)(!1),[P,L]=Object(n.useState)(!1),[A,M]=Object(n.useState)(!1),[D,H]=Object(n.useState)(!0),[W,B]=Object(n.useState)(!0),[z,R]=Object(n.useState)(!0),[I,U]=Object(n.useState)(!1),K=Object(n.useMemo)((()=>({useReactInteractive:r,setMoveListeners:i,preventDefaultOnAll:l,touchActionNone:h,webkitTapHighlightColorTransparent:g,riUseExtendedTouchActive:v,userSelectNone:y,webkitTouchCalloutNone:$,contextMenuPreventDefault:C,draggableFalse:S,showTimeSincePreviousEvent:E,showEventCoordinates:A,showPointerEvents:D,showMouseEvents:W,showTouchEvents:z,showTimeSincePreviousPointerdown:P,consoleLogEvents:I})),[r,i,l,h,g,v,y,$,C,S,E,A,D,W,z,P,I]);return Object(n.useEffect)((()=>{document.body.style.userSelect=y?"none":"",document.body.style.webkitUserSelect=y?"none":""}),[y]),Object(j.jsxs)(J,{children:[Object(j.jsxs)(_,{className:void 0,children:[Object(j.jsx)("span",{children:"Event From Demo"}),Object(j.jsx)(O,{onClick:e.toggle})]}),Object(j.jsx)(m,{type:"lowContrast",href:"https://github.com/rafgraph/event-from",children:"https://github.com/rafgraph/event-from"}),Object(j.jsxs)(q,{children:["Some buttons, links, etc with event listeners and logs to demonstrate"," ",Object(j.jsx)("code",{children:"eventFrom"}),"."]}),Object(j.jsxs)(Q,{children:[Object(j.jsxs)(V,{onClick:()=>o(!t),children:["Demo options - ","".concat(t?"hide":"show")]}),t&&Object(j.jsxs)(Z,{children:[Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:["Use"," ",Object(j.jsx)(m,{href:"https://github.com/rafgraph/react-interactive",children:"React Interactive"})," ","for interactive elements in demo (button, link, input, etc)"]}),checked:r,update:c}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:["Set ",Object(j.jsx)("code",{children:"move"})," event listeners in demo"]}),checked:i,update:a}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:["Call ",Object(j.jsx)("code",{children:"preventDefault()"})," on all events in demo"]}),checked:l,update:d}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("code",{children:"touch-action: none"}),", set on the element, prevents the browser from using the touch interaction, e.g. scrolling when touch starts on the button, and also prevents"," ",Object(j.jsx)("code",{children:"pointercancel"})," event during a touch interaction."]}),checked:h,update:b}),Object(j.jsx)(re,{label:Object(j.jsx)("code",{children:"-webkit-tap-highlight-color: transparent"}),checked:g,update:x}),Object(j.jsx)(ee,{children:"Options to enable long press on touch devices:"}),Object(j.jsx)(re,{disabled:!r,label:Object(j.jsxs)(j.Fragment,{children:["React Interactive's ",Object(j.jsx)("code",{children:"useExtendedTouchActive"}),", note that when using React Interactive the below options are disabled because they are implemented by React Interactive when ",Object(j.jsx)("code",{children:"useExtendedTouchActive"})," is true."]}),checked:v,update:f}),Object(j.jsx)(re,{disabled:r,label:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("code",{children:"user-select: none"}),", set on the"," ",Object(j.jsx)("code",{children:"<body>"}),", iOS on long press attempts to select nearby text even if the target element has set"," ",Object(j.jsx)("code",{children:"user-select: none"}),", so need to set it on the body and not the element."]}),checked:y,update:k}),Object(j.jsx)(re,{disabled:r,label:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("code",{children:"contextmenu"})," event ",Object(j.jsx)("code",{children:"preventDefault()"}),", to prevent the context menu from appearing on long press of links."]}),checked:C,update:w}),Object(j.jsx)(re,{disabled:r,label:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("code",{children:"-webkit-touch-callout: none"}),', to prevent the iOS "context menu" from appearing on long press of links because iOS doesn\'t support ',Object(j.jsx)("code",{children:"conextmenu"})," events."]}),checked:$,update:T}),Object(j.jsx)(re,{disabled:r,label:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("code",{children:'draggable="false"'}),", to prevent from dragging links on long press on iPadOS."]}),checked:S,update:N}),Object(j.jsx)(ee,{children:"Event log options:"}),Object(j.jsx)(re,{label:"show time (ms) since previous event",checked:E,update:F}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:["show time (ms) since previous ",Object(j.jsx)("code",{children:"pointerdown"})," event"]}),checked:P,update:L}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:["show event coordinates: ",Object(j.jsx)("code",{children:"clientX"}),","," ",Object(j.jsx)("code",{children:"clientY"})]}),checked:A,update:M}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:["show ",Object(j.jsx)("code",{children:"pointer"})," events"]}),checked:D,update:H}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:["show ",Object(j.jsx)("code",{children:"mouse"})," events"]}),checked:W,update:B}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:["show ",Object(j.jsx)("code",{children:"touch"})," events"]}),checked:z,update:R}),Object(j.jsx)(re,{label:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("code",{children:"console.log"})," all events"]}),checked:I,update:U})]})]}),Object(j.jsxs)(ce.Provider,{value:K,children:[Object(j.jsx)(G,{}),Object(j.jsx)(X,{}),Object(j.jsx)(Y,{})]})]})};c.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(se,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.657b035d.chunk.js.map