import{M as g,w as M}from"../chunks/chunk-WVZLHOFL.js";import"../chunks/chunk-A5YKHYT6.js";import"../chunks/chunk-D3PBAGDZ.js";import"../chunks/chunk-3XIOB4EC.js";import"../chunks/chunk-D2E2HG2W.js";import"../chunks/chunk-A36NQ4WF.js";import"../chunks/chunk-TSZP6UXS.js";import"../chunks/chunk-VZ75JTZE.js";import{a as P}from"../chunks/chunk-IOEYPKEV.js";import"../chunks/chunk-NYGFFQMG.js";import"../chunks/chunk-3MQH4JJT.js";import{a as O}from"../chunks/chunk-NZY4JV6E.js";import{c as L}from"../chunks/chunk-4GT6T77M.js";import"../chunks/chunk-N3RCD34N.js";import"../chunks/chunk-4GJAJKDK.js";import"../chunks/chunk-3R2PURR4.js";import"../chunks/chunk-JDV5FZKX.js";import"../chunks/chunk-BCG2KUGW.js";import"../chunks/chunk-E4QNY2PC.js";import"../chunks/chunk-ZIQ6U6YW.js";import{a as C}from"../chunks/chunk-B7GBMFFD.js";import{a as h}from"../chunks/chunk-AKTW5CPL.js";import{a as D}from"../chunks/chunk-LLA7RVSB.js";import{a as v}from"../chunks/chunk-Z6PVZUDE.js";import"../chunks/chunk-FEK2HJKI.js";import{a as B}from"../chunks/chunk-NJ63VSGO.js";import"../chunks/chunk-OTRTIFBS.js";import{a as S}from"../chunks/chunk-MFYKHTND.js";import{J as q,a as _,b as N,c as m}from"../chunks/chunk-3I3QPOUL.js";import{a as H}from"../chunks/chunk-O4TFJKJQ.js";import{c as x,h as p,q as l,u as f}from"../chunks/chunk-4SRFE46V.js";import"../chunks/chunk-IJQWISPG.js";import"../chunks/chunk-HY2GWXPO.js";import"../chunks/chunk-LC5XJ32R.js";import"../chunks/chunk-6LTHT6DZ.js";import"../chunks/chunk-XSKOAVIS.js";import{q as k}from"../chunks/chunk-52XVUBCW.js";import"../chunks/chunk-42JNP4CL.js";import"../chunks/chunk-SOWOQI5E.js";import"../chunks/chunk-YCRAP75I.js";import"../chunks/chunk-JAUVA5AU.js";import{e as a}from"../chunks/chunk-3GYLW4KZ.js";var Ct=a(_()),E=a(H()),c=a(k());var R=()=>l("getCustomNotification");var at=a(_()),T=a(_()),u=a(B()),r=a(k());var U=i=>l("engageCustomNotification",i);function d(){U()}var e=a(m()),w=class extends T.Component{constructor(...o){super(...o);let t,n=r.default.get(r.default.find(this.props.customNotificationData,"displaySequence"),"displaySequence",[]);n.length?t=n[0]:t=this.props.customNotificationData[0].display,this.state={rightOffset:p("coup_shift_left")?310:0,notification:0,hideNotification:!0,dismiss:!1,progress:!1,displaySequence:n,...t}}componentDidMount(){f("page","customNotification",{view:"customNotification",type:"notification",offerSignUp:r.default.get(this.props.view,"offerSignUp"),qualified:r.default.get(this.props.view,"qualified",!1),balance:r.default.get(this.props.view,"balance",0)}),setTimeout(()=>{document.querySelector("#honeyContainer")&&this.setState({compNotifLoaded:!0,rightOffset:"300px"}),(document.querySelector(".ebates-notification")||document.querySelector(".ebates-hover.ebates-hover-top"))&&this.setState({compNotifLoaded:!0,rightOffset:"410px"}),this.setState({hideNotification:!1})},500)}render(){let{hideNotification:o,rightOffset:t}=this.state,n=!0,s=!0,F=p("n_or_1")&&this.state.compNotifLoaded||p("coup_shift_left"),y;return this.state.cta&&(y=(0,e.jsx)("div",{className:"button-wrapper",children:(0,e.jsx)("button",{className:"primary-btn-large",onClick:this.onClick.bind(this),children:this.state.cta})})),(0,e.jsx)(C,{className:o?"disabled follow-page":"follow-page",style:{top:n?"0":"auto",bottom:n?"auto":"0",left:s?"auto":"0",right:F?t:s?"0":"auto"},dragSelector:"header",isDraggable:p("ext_notif_drag"),onDragEnd:this.trackFirstDragEnd,children:(0,e.jsx)(u.Motion,{style:{opacity:(0,u.spring)(o?0:1,{stiffness:180,damping:20}),y:(0,u.spring)(o?n?-100:100:0,{stiffness:180,damping:20})},children:({opacity:W,y:$})=>(0,e.jsxs)("div",{className:"custom-notification",style:{transform:`translate3d(0,${$}%,0)`,opacity:`${W}`},children:[(0,e.jsxs)("header",{children:[(0,e.jsx)(S,{width:120}),(0,e.jsx)(L,{}),(0,e.jsx)(v,{onClick:this.onClosePopup.bind(this,"x")})]}),(0,e.jsxs)("section",{children:[(0,e.jsx)("h2",{children:this.state.title}),this.state.progress?(0,e.jsx)(g,{estimatedDuration:5e3}):null,this.state.subtitle?(0,e.jsx)("h4",{className:"bold",children:this.state.subtitle}):null,y]})]})})})}trackFirstDragEnd=r.default.once((o,t)=>{P("customNotification",o,t)});onClick(){let{clickId:o}=h();if(this.state.dropCookie&&M(o),this.state.sendMetric&&f("track","noCouponsNotify",{clickId:o,currentLocation:r.default.pick(window.location,["hash","host","hostname","href","origin","pathname","port","search"])}),this.state.notification<this.state.displaySequence.length-1){let t=this.state.notification+1,n=this.state.displaySequence[t],s=()=>{this.setState({notification:t,...n}),this.state.timeout&&n.timeout===void 0&&this.setState({timeout:void 0}),t===this.state.displaySequence.length-1&&n.timeout&&setTimeout(()=>{this.onClosePopup()},this.state.timeout)};this.setState({progress:!!this.state.timeout}),setTimeout(()=>{s(),this.setState({progress:!1})},this.state.timeout*2||0)}else if(this.props.customNotificationData.url){d();let{clickId:t}=h(),n={destUrl:this.props.customNotificationData.url,redirectId:t},s=D({params:n});window.open(s,"_blank"),f("trackClick","customNotificationClick","",{view:"customNotification",pageLocation:"notification",clickId:t})}else setTimeout(()=>{this.onClosePopup()},this.state.timeout||0)}onClosePopup(o){d(),this.setState({hideNotification:!0}),f("trackClick","dismissCustomNotification",o)}},b=N({view:["customView"],customNotificationData:["customNotificationData"],events:["events"],session:["session"]},w);var I=a(m());function z(i){if(i.type==="url")return!!document.URL.match(i.value);if(i.type==="title")return document.title.match(i.value);if(i.type==="selector")return!!(0,E.default)(i.value).length}function V(i){if(i.and)return(0,c.default)(i.and).map(t=>z(t)).filter().value().length===i.and.length;if(i.or)return!!(0,c.default)(i.or).map(t=>z(t)).filter().value().length}function j(i){return c.default.find(i,o=>V(o.identifiers))}function X(i,o){if(c.default.has(o,"runWithCoupons")){let t=!c.default.get(i,"coupons.ignoreSite");return!!(t&&o.runWithCoupons!==!1||!t)}return!0}async function A(){try{let i=await R();if(i&&i.engaged)return!1;let{siteData:o}=await O(),t=c.default.filter(o.notifications,s=>s.enabled!==!1&&X(o,s));j(t)&&t.length&&(x.set("customNotificationData",t),q({appName:"customNotification",cssUrl:"customNotification.css",app:(0,I.jsx)(b,{})}))}catch{}}document.readyState!=="loading"?A():document.addEventListener("DOMContentLoaded",A);