(this["webpackJsonpevent-from-demo"]=this["webpackJsonpevent-from-demo"]||[]).push([[0],{23:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(12),c=o.n(r),s=o(13),i=o(17);const a=Object(i.a)({theme:{colors:{pageBackground:"rgb(240,240,240)",backgroundContrast:"rgb(216,216,216)",highContrast:"rgb(0,0,0)",lowContrast:"rgb(128,128,128)",red:"hsl(0,100%,50%)",orange:"hsl(30,100%,50%)",yellow:"hsl(51,100%,40%)",green:"hsl(120,100%,30%)",blueGreen:"hsl(180,100%,35%)",blue:"hsl(240,100%,50%)",purple:"hsl(270,100%,60%)"}}}),{styled:l,theme:d,global:h}=a,p=d({colors:{pageBackground:"rgb(32,32,32)",backgroundContrast:"rgb(64,64,64)",highContrast:"rgb(192,192,192)",lowContrast:"rgb(136,136,136)",red:"hsl(0,100%,50%)",orange:"hsl(30,90%,50%)",yellow:"hsl(60,88%,50%)",green:"hsl(120,85%,42%)",blueGreen:"hsl(180,100%,50%)",blue:"hsl(210,100%,60%)",purple:"hsl(270,85%,60%)"}}),u=h({"button, input":{all:"unset"},"body, div, span, a, p, h1, h2, h3, code, button, form, input":{margin:0,border:0,padding:0,boxSizing:"inherit",font:"inherit",fontWeight:"inherit",textDecoration:"inherit",textAlign:"inherit",color:"inherit",background:"transparent"},html:{height:"100%"},body:{height:"100%",color:"$highContrast",fontFamily:"system-ui, Helvetica Neue, sans-serif",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontSize:"16px",boxSizing:"border-box",textSizeAdjust:"none"},code:{fontFamily:"monospace"},"#root":{minHeight:"100%",backgroundColor:"$pageBackground"}});var b=o(3),g=o(11),j=o(8),x=o(10),v=o(1);const m=l((({onClick:e,className:t,children:o})=>Object(v.jsx)(b.a,{as:"button",className:t,onClick:e,children:o})),{color:"$highContrast",WebkitTapHighlightColor:"transparent","&.hover, &.active":{color:"$green"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),O=l((({checked:e,onCheckedChange:t,className:o,disabled:n})=>Object(v.jsx)(g.b,{as:b.a,checked:e,onCheckedChange:t,className:o,disabled:n,children:Object(v.jsx)(g.a,{as:x.a})})),{appearance:"none",backgroundColor:"transparent",boxShadow:"inset 0 0 0 1px $colors$highContrast",width:"15px",height:"15px",borderRadius:"2px",display:"inline-flex",alignItems:"center",justifyContent:"center","&.focusFromKey":{outline:"none",boxShadow:"inset 0 0 0 1px $colors$green, 0 0 0 1px $colors$green"},"&.keyActive":{color:"$green"}}),C=l((e=>Object(v.jsx)(b.a,{...e,as:j.a})),{cursor:"pointer",WebkitTapHighlightColor:"transparent","&.hover>button:not(.disabled), &.active>button:not(.disabled)":{boxShadow:"inset 0 0 0 1px $colors$green, 0 0 0 1px $colors$green"},"&.active>button:not(.disabled)":{color:"$green"},"&.disabled":{opacity:.5,cursor:"unset"},"&>input":{display:"none"}}),k=l((e=>Object(v.jsx)(b.a,{...e,as:"a",target:"_blank",rel:"noopener noreferrer"})),{color:"$highContrast",borderBottom:"1px dotted $colors$green",textDecoration:"none",WebkitTapHighlightColor:"transparent","&.hover, &.active":{borderBottomStyle:"solid"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"},variants:{type:{lowContrast:{color:"$lowContrast",fontSize:"14px","&.hover, &.active":{color:"$highContrast"}}}}}),f=l((({onClick:e,className:t})=>Object(v.jsx)(m,{className:t,onClick:e,children:Object(v.jsx)(x.b,{width:"30",height:"30"})})),{width:"30px",height:"30px"});var y=o(4);const w=[{propName:"onClick",category:"click"},{propName:"onDoubleClick",category:"click"},{propName:"onPointerEnter",category:"pointer"},{propName:"onPointerLeave",category:"pointer"},{propName:"onPointerOver",category:"pointer"},{propName:"onPointerOut",category:"pointer"},{propName:"onPointerDown",category:"pointer"},{propName:"onPointerUp",category:"pointer"},{propName:"onPointerMove",category:"pointer"},{propName:"onGotPointerCapture",category:"pointer"},{propName:"onLostPointerCapture",category:"pointer"},{propName:"onPointerCancel",category:"pointer"},{propName:"onMouseEnter",category:"mouse"},{propName:"onMouseLeave",category:"mouse"},{propName:"onMouseOver",category:"mouse"},{propName:"onMouseOut",category:"mouse"},{propName:"onMouseDown",category:"mouse"},{propName:"onMouseUp",category:"mouse"},{propName:"onMouseMove",category:"mouse"},{propName:"onTouchStart",category:"touch"},{propName:"onTouchMove",category:"touch"},{propName:"onTouchEnd",category:"touch"},{propName:"onTouchCancel",category:"touch"},{propName:"onKeyDown",category:"key"},{propName:"onKeyUp",category:"key"},{propName:"onFocus",category:"focus"},{propName:"onBlur",category:"focus"},{propName:"onDragStart",category:"drag"},{propName:"onDrag",category:"drag"},{propName:"onDragEnd",category:"drag"},{propName:"onSelect",category:"select"},{propName:"onContextMenu",category:"contextMenu"}],$=({eventLog:e,nowTime:t,eventType:o})=>{for(let n=e.length-1;n>=0;n--){if(o&&o!==e[n].type)continue;const r=e[n].lastEventTime||e[n].time;if(void 0!==r)return t-r}},S=()=>{const{setMoveListeners:e,preventDefaultOnAll:t,contextMenuPreventDefault:o,consoleLogEvents:r}=Object(n.useContext)(ie),[c,s]=Object(n.useState)([]);return{eventLog:c,eventListeners:Object(n.useMemo)((()=>w.reduce(((n,c)=>(!e&&/move/.test(c.propName.toLowerCase())||(n[c.propName]=e=>{const n=Object(y.a)(e),i=Date.now();(t||o&&"contextmenu"===e.type)&&e.preventDefault(),r&&console.log(e,"eventFrom: ".concat(n)),s((t=>{const o=[...t],r=(({eventLog:e,type:t,eventFrom:o,nowTime:n,recentTimeCutoff:r})=>{for(let c=e.length-1;c>=Math.max(e.length-2,0);c--){const s=e[c],i=s.lastEventTime||s.time;if(s.type===t&&s.eventFrom===o&&i&&n-i<=r)return c}})({eventLog:o,type:e.type,eventFrom:n,nowTime:i,recentTimeCutoff:1e3});if(["click","mousemove","pointermove","touchmove","keydown","keyup","drag","scroll","wheel"].includes(e.type)&&void 0!==r){const t=o[r],s=t.count?t.count+1:2;o[r]={category:c.category,type:e.type,eventFrom:n,time:t.time,lastEventTime:i,timeSincePreviousEvent:t.timeSincePreviousEvent,timeSincePreviousPointerdown:t.timeSincePreviousPointerdown,xCoordinate:Math.round(e.clientX),yCoordinate:Math.round(e.clientY),target:e.target,count:s}}else o.push({category:c.category,type:e.type,eventFrom:n,time:i,timeSincePreviousEvent:$({eventLog:o,nowTime:i}),timeSincePreviousPointerdown:$({eventLog:o,eventType:"pointerdown",nowTime:i}),xCoordinate:Math.round(e.clientX),yCoordinate:Math.round(e.clientY),target:e.target});return o}))}),n)),{})),[e,t,o,r])}},T=l("div",{height:"300px",padding:"0 5px",border:"1px solid $colors$highContrast",overflow:"scroll"}),N=l("code",{display:"block",variants:{spaceAbove:{true:{marginTop:"20px"}}}}),E=l("span",{variants:{type:{click:{color:"$blue"},pointer:{color:"$green"},mouse:{color:"$purple"},touch:{color:"$orange"},key:{color:"$yellow"},focus:{color:"$blueGreen"},cancel:{color:"$red"},lowContrast:{color:"$lowContrast"}}}}),F=(e,t)=>{if("pointercancel"===t||"touchcancel"===t)return"cancel";switch(e){case"click":case"pointer":case"mouse":case"touch":case"key":case"focus":return e;default:return}},P=({eventLog:e,height:t})=>{const{showTimeSincePreviousEvent:o,showTimeSincePreviousPointerdown:r,showEventCoordinates:c,showPointerEvents:s,showMouseEvents:i,showTouchEvents:a}=Object(n.useContext)(ie),l=Object(n.useRef)(null);Object(n.useEffect)((()=>{l&&l.current&&(l.current.scrollTop=l.current.scrollHeight)}));const d=[];return s||d.push("pointer"),i||d.push("mouse"),a||d.push("touch"),Object(v.jsx)(T,{ref:l,css:{height:t},children:e.map((({category:e,type:t,count:n,eventFrom:s,time:i,timeSincePreviousEvent:a,timeSincePreviousPointerdown:l,xCoordinate:h,yCoordinate:p},u)=>d.includes(e)?null:Object(v.jsxs)(N,{spaceAbove:void 0!==a&&a>1e3,children:[Object(v.jsx)(E,{type:"lowContrast",children:u})," ",Object(v.jsxs)(E,{type:F(e,t),children:[t,n?" (".concat(n,")"):""]})," ","eventFrom ",Object(v.jsx)(E,{type:s,children:s}),o&&void 0!==a&&Object(v.jsxs)("span",{children:[", ",a,"ms"]}),r&&void 0!==l&&Object(v.jsxs)("span",{children:[", ",l,"ms_pointerdown"]}),c&&Object(v.jsxs)("span",{children:[", x:",h,", y:",p]})]},"".concat(u).concat(t).concat(n))))})},A=l("div",{paddingBottom:"20px",margin:"20px 0",borderBottom:"1px dotted $colors$lowContrast"}),L={display:"block",width:"100%",height:"70px",margin:"10px 0",fontSize:"24px",textAlign:"center",color:"$highContrast",border:"1px solid $colors$highContrast"},M=l((e=>Object(v.jsx)(b.a,{...e,as:"button"})),{...L,"&.hover, &.active":{color:"$green",borderColor:"$green"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),D=l("button",{...L,"&:hover, &:active":{color:"$green",borderColor:"$green"},"&:focus":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),H=l("div",{margin:"10px 0"}),W={fontSize:"24px"},B=l((e=>Object(v.jsx)(b.a,{...e,as:"a"})),{...W,"&.hover, &.active":{color:"$green",borderColor:"$green"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),z=l("a",{...W,"&:hover, &:active":{color:"$green",borderColor:"$green"},"&:focus":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),R=(l("div",{margin:"10px 0",height:"100px",padding:"0 5px",border:"1px solid $colors$highContrast",overflow:"scroll"}),l("div",{pointerEvents:"none"}),l("h3",{fontSize:"14px",margin:"12px 0 2px",color:"$lowContrast"})),I={width:"100%",fontSize:"24px",border:"1px solid $colors$highContrast",padding:"2px 4px"},U=l((e=>Object(v.jsx)(b.a,{...e,as:"input",type:"text"})),{...I,"&.hover, &.active":{color:"$green",borderColor:"$green"},"&.focus":{outline:"2px solid $colors$green",outlineOffset:"-1px"}}),K=l("input",{...I,"&:hover, &:active":{color:"$green",borderColor:"$green"},"&:focus":{outline:"2px solid $colors$green",outlineOffset:"-1px"}}),G={display:"block",width:"100%",height:"44px",margin:"10px 0",fontSize:"24px",textAlign:"center",color:"$highContrast",border:"1px solid $colors$highContrast"},X=l((e=>Object(v.jsx)(b.a,{...e,as:"input",type:"submit"})),{...G,"&.hover, &.active":{color:"$green",borderColor:"$green"},"&.focusFromKey":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),Y=l("input",{...G,"&:hover, &:active":{color:"$green",borderColor:"$green"},"&:focus":{outline:"2px solid $colors$green",outlineOffset:"2px"}}),J=()=>{const{useReactInteractive:e,riUseExtendedTouchActive:t,touchActionNone:o,webkitTapHighlightColorTransparent:r,webkitTouchCalloutNone:c}=Object(n.useContext)(ie),{eventLog:s,eventListeners:i}=S();return Object(v.jsxs)(A,{id:"button-demo",children:[e?Object(v.jsx)(M,{...i,useExtendedTouchActive:t,css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0},children:"Test Button"}):Object(v.jsx)(D,{...i,css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0,WebkitTouchCallout:c?"none":void 0},children:"Test Button"}),Object(v.jsx)(P,{eventLog:s})]})},_=()=>{const{useReactInteractive:e,riUseExtendedTouchActive:t,touchActionNone:o,webkitTapHighlightColorTransparent:r,webkitTouchCalloutNone:c,draggableFalse:s}=Object(n.useContext)(ie),{eventLog:i,eventListeners:a}=S();return Object(v.jsxs)(A,{id:"link-demo",children:[Object(v.jsx)(H,{children:e?Object(v.jsx)(B,{...a,href:"#link-demo",useExtendedTouchActive:t,css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0},children:'Test link with href="#link-demo"'}):Object(v.jsx)(z,{...a,href:"#link-demo",draggable:!s&&void 0,css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0,WebkitTouchCallout:c?"none":void 0},children:'Test link with href="#link-demo"'})}),Object(v.jsx)(P,{eventLog:i})]})},q=()=>{const{useReactInteractive:e,riUseExtendedTouchActive:t,touchActionNone:o,webkitTapHighlightColorTransparent:r,webkitTouchCalloutNone:c}=Object(n.useContext)(ie),s=S(),i=S();return Object(v.jsxs)(A,{id:"form-demo",children:[Object(v.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[e?Object(v.jsx)(U,{...s.eventListeners,useExtendedTouchActive:t,placeholder:"Form demo",css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0}}):Object(v.jsx)(K,{...s.eventListeners,type:"text",placeholder:"Form demo",css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0,WebkitTouchCallout:c?"none":void 0}}),e?Object(v.jsx)(X,{...i.eventListeners,useExtendedTouchActive:t,value:"Submit",css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0}}):Object(v.jsx)(Y,{...i.eventListeners,type:"submit",value:"Submit",css:{touchAction:o?"none":void 0,WebkitTapHighlightColor:r?"transparent":void 0,WebkitTouchCallout:c?"none":void 0}})]}),Object(v.jsx)(R,{children:"Text input event log"}),Object(v.jsx)(P,{eventLog:s.eventLog,height:"150px"}),Object(v.jsx)(R,{children:"Submit input event log"}),Object(v.jsx)(P,{eventLog:i.eventLog,height:"150px"})]})},Q=l("div",{maxWidth:"700px",padding:"14px 15px 25px",margin:"0 auto"}),V=l("h1",{fontSize:"26px",display:"flex",justifyContent:"space-between",marginBottom:"2px"}),Z=l("p",{padding:"10px 0",borderBottom:"1px dotted $colors$lowContrast"}),ee=l("div",{borderBottom:"1px dotted $colors$lowContrast","& code":{backgroundColor:"$backgroundContrast",padding:"0 5px",borderRadius:"5px"}}),te=l(m,{display:"block",margin:"10px 0",fontSize:"20px"}),oe=l("div",{paddingBottom:"6px"}),ne=l("div",{margin:"14px 0 6px",fontWeight:"600"}),re=l("div",{margin:"8px 0"}),ce=l(O,{verticalAlign:"top",marginTop:"2px",marginRight:"4px"}),se=({label:e,checked:t,disabled:o,setChecked:r})=>{const[c,s]=Object(n.useState)(!1);return Object(v.jsx)(re,{children:Object(v.jsxs)(C,{disabled:o,children:[Object(v.jsx)(ce,{disabled:o||c,checked:t,onCheckedChange:e=>r(e.target.checked)}),"function"===typeof e?e({setDisableCheckbox:s}):e]})})},ie=Object(n.createContext)({useReactInteractive:!1,setMoveListeners:!1,preventDefaultOnAll:!1,touchActionNone:!1,webkitTapHighlightColorTransparent:!1,riUseExtendedTouchActive:!1,userSelectNone:!1,webkitTouchCalloutNone:!1,contextMenuPreventDefault:!1,draggableFalse:!1,showTimeSincePreviousEvent:!1,showEventCoordinates:!1,showPointerEvents:!1,showMouseEvents:!1,showTouchEvents:!1,showTimeSincePreviousPointerdown:!1,consoleLogEvents:!1}),ae=()=>{u();const e=Object(s.a)(void 0,{classNameDark:p}),[t,o]=Object(n.useState)(!1),[r,c]=Object(n.useState)(!0),[i,a]=Object(n.useState)(!0),[l,d]=Object(n.useState)(!1),[h,b]=Object(n.useState)(!1),[g,j]=Object(n.useState)(!0),[x,m]=Object(n.useState)(!1),[O,C]=Object(n.useState)(!1),[y,w]=Object(n.useState)(!1),[$,S]=Object(n.useState)(!1),[T,N]=Object(n.useState)(!1);r&&(O&&C(!1),y&&w(!1),$&&S(!1),T&&N(!1));const[E,F]=Object(n.useState)(!1),[P,A]=Object(n.useState)(!1),[L,M]=Object(n.useState)(!1),[D,H]=Object(n.useState)(!0),[W,B]=Object(n.useState)(!0),[z,R]=Object(n.useState)(!0),[I,U]=Object(n.useState)(!1),K=Object(n.useMemo)((()=>({useReactInteractive:r,setMoveListeners:i,preventDefaultOnAll:l,touchActionNone:h,webkitTapHighlightColorTransparent:g,riUseExtendedTouchActive:x,userSelectNone:O,webkitTouchCalloutNone:$,contextMenuPreventDefault:y,draggableFalse:T,showTimeSincePreviousEvent:E,showEventCoordinates:L,showPointerEvents:D,showMouseEvents:W,showTouchEvents:z,showTimeSincePreviousPointerdown:P,consoleLogEvents:I})),[r,i,l,h,g,x,O,$,y,T,E,L,D,W,z,P,I]);return Object(n.useEffect)((()=>{document.body.style.userSelect=O?"none":"",document.body.style.webkitUserSelect=O?"none":""}),[O]),Object(v.jsxs)(Q,{children:[Object(v.jsxs)(V,{children:[Object(v.jsx)("span",{children:"Event From Demo"}),Object(v.jsx)(f,{onClick:e.toggle})]}),Object(v.jsx)(k,{type:"lowContrast",href:"https://github.com/rafgraph/event-from",children:"https://github.com/rafgraph/event-from"}),Object(v.jsxs)(Z,{children:["Some buttons, links, etc with event listeners and logs to demonstrate"," ",Object(v.jsx)("code",{children:"eventFrom"}),"."]}),Object(v.jsxs)(ee,{children:[Object(v.jsxs)(te,{onClick:()=>o(!t),children:["Demo options - ","".concat(t?"hide":"show")]}),t&&Object(v.jsxs)(oe,{children:[Object(v.jsx)(se,{label:({setDisableCheckbox:e})=>Object(v.jsxs)(v.Fragment,{children:["Use"," ",Object(v.jsx)(k,{href:"https://github.com/rafgraph/react-interactive",onStateChange:({state:t,prevState:o})=>{t.hover||t.active?e(!0):"touchActive"===o.active?window.setTimeout((()=>e(!1)),500):e(!1)},children:"React Interactive"})," ","for interactive elements in demo (button, link, input, etc)"]}),checked:r,setChecked:c}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:["Set ",Object(v.jsx)("code",{children:"move"})," event listeners in demo"]}),checked:i,setChecked:a}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:["Call ",Object(v.jsx)("code",{children:"preventDefault()"})," on all events in demo"]}),checked:l,setChecked:d}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("code",{children:"touch-action: none"}),", set on the element, prevents the browser from using the touch interaction, e.g. scrolling when touch starts on the button, and also prevents"," ",Object(v.jsx)("code",{children:"pointercancel"})," event during a touch interaction."]}),checked:h,setChecked:b}),Object(v.jsx)(se,{label:Object(v.jsx)("code",{children:"-webkit-tap-highlight-color: transparent"}),checked:g,setChecked:j}),Object(v.jsx)(ne,{children:"Options to enable long press on touch devices:"}),Object(v.jsx)(se,{disabled:!r,label:Object(v.jsxs)(v.Fragment,{children:["React Interactive's ",Object(v.jsx)("code",{children:"useExtendedTouchActive"}),", note that when using React Interactive the below options are disabled because they are implemented by React Interactive when ",Object(v.jsx)("code",{children:"useExtendedTouchActive"})," is true."]}),checked:x,setChecked:m}),Object(v.jsx)(se,{disabled:r,label:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("code",{children:"user-select: none"}),", set on the"," ",Object(v.jsx)("code",{children:"<body>"}),", iOS on long press attempts to select nearby text even if the target element has set"," ",Object(v.jsx)("code",{children:"user-select: none"}),", so need to set it on the body and not the element."]}),checked:O,setChecked:C}),Object(v.jsx)(se,{disabled:r,label:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("code",{children:"contextmenu"})," event ",Object(v.jsx)("code",{children:"preventDefault()"}),", to prevent the context menu from appearing on long press of links."]}),checked:y,setChecked:w}),Object(v.jsx)(se,{disabled:r,label:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("code",{children:"-webkit-touch-callout: none"}),', to prevent the iOS "context menu" from appearing on long press of links because iOS doesn\'t support ',Object(v.jsx)("code",{children:"conextmenu"})," events."]}),checked:$,setChecked:S}),Object(v.jsx)(se,{disabled:r,label:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("code",{children:'draggable="false"'}),", to prevent from dragging links on long press on iPadOS."]}),checked:T,setChecked:N}),Object(v.jsx)(ne,{children:"Event log options:"}),Object(v.jsx)(se,{label:"Show time (ms) since previous event",checked:E,setChecked:F}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:["Show time (ms) since previous ",Object(v.jsx)("code",{children:"pointerdown"})," event"]}),checked:P,setChecked:A}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:["Show event coordinates: ",Object(v.jsx)("code",{children:"clientX"}),","," ",Object(v.jsx)("code",{children:"clientY"})]}),checked:L,setChecked:M}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:["Show ",Object(v.jsx)("code",{children:"pointer"})," events"]}),checked:D,setChecked:H}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:["Show ",Object(v.jsx)("code",{children:"mouse"})," events"]}),checked:W,setChecked:B}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:["Show ",Object(v.jsx)("code",{children:"touch"})," events"]}),checked:z,setChecked:R}),Object(v.jsx)(se,{label:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("code",{children:"console.log"})," all events"]}),checked:I,setChecked:U})]})]}),Object(v.jsxs)(ie.Provider,{value:K,children:[Object(v.jsx)(J,{}),Object(v.jsx)(_,{}),Object(v.jsx)(q,{})]})]})};c.a.render(Object(v.jsx)(n.StrictMode,{children:Object(v.jsx)(ae,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.34330dff.chunk.js.map