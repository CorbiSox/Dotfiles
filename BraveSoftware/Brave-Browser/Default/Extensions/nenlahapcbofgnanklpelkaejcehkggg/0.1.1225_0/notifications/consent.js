import{a as f}from"../chunks/chunk-MFYKHTND.js";import{J as _,a,b as u,c as o}from"../chunks/chunk-3I3QPOUL.js";import"../chunks/chunk-O4TFJKJQ.js";import{q as p,u as d}from"../chunks/chunk-4SRFE46V.js";import"../chunks/chunk-XSKOAVIS.js";import"../chunks/chunk-52XVUBCW.js";import"../chunks/chunk-42JNP4CL.js";import"../chunks/chunk-SOWOQI5E.js";import"../chunks/chunk-YCRAP75I.js";import"../chunks/chunk-JAUVA5AU.js";import{e as n}from"../chunks/chunk-3GYLW4KZ.js";var T=n(a());var v=n(a()),w=n(a());var e=l=>p("consentMessenger",l);var i=n(o()),c=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})}),s=class extends w.Component{constructor(...t){super(...t),this.state={personalRadio:"No",anonymousRadio:"Yes",show:"ConsentForm"}}onClickPersonalRadio(t){this.setState({personalRadio:t.target.value})}onClickAnonymousRadio(t){this.setState({anonymousRadio:t.target.value})}async onClickClose(){if(this.state.personalRadio==="Yes"&&this.state.anonymousRadio==="Yes"){await e({message:"enableTracking"}),d("trackClick","consentCtaClick","Close"),window.close();return}if(this.state.personalRadio==="No"&&this.state.anonymousRadio==="Yes"){e({message:"disableTracking"}),window.close();return}}onClickUninstall(){e({message:"disableTracking"}),browser.management.uninstallSelf()}render(){return(0,i.jsx)("div",{className:"consent-notification-wrapper full",children:(0,i.jsx)("div",{className:"consent-notification center-middle",style:{top:"0",bottom:"auto",left:"auto",right:"0"},children:(0,i.jsxs)("div",{className:"consent-notification-content",children:[(0,i.jsx)("header",{children:(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)(f,{width:"210",height:"42"})})}),this.state.show==="ConsentForm"?(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{className:"midnight",children:"Get the most out of Capital One Shopping!"}),(0,i.jsxs)("div",{className:"personal",children:[(0,i.jsx)("h3",{children:"To start saving, please answer the below question"}),(0,i.jsx)("div",{className:"question",children:"Can we collect the following data that personally identifies you?"}),(0,i.jsxs)("div",{className:"bullet-list",children:[(0,i.jsx)("div",{className:"li-text",children:'Data relating to your online shopping activity. We may automatically collect certain information from your device by using various types of technology, including "clear GIFs" and "web beacons." This automatically-collected information may include your IP address or other device address or ID, web browser and/or device type, web pages or sites that you visit, order information, the content you view or interact with, and the dates and times that you use the extension.'}),(0,i.jsx)("div",{className:"li-text",children:"Personal information on sites we've determined to be shopping sites. Namely, we may collect the full URL of the pages you are visiting on these sites."}),(0,i.jsx)("div",{className:"li-text",children:"We may use this data to improve, personalize, and optimize your website browsing, or to improve or develop new products and services, by, for instance, noting which parts of our website you visit and which aspects you find most useful. This includes when you log in and out of Capital One Shopping, when you view specific products on a merchant site, add items to your cart, complete purchases, or otherwise engage with the extension."})]}),(0,i.jsx)("div",{className:"summary",children:"This data enables us to provide you with more offers and savings for the stores and products you shop for."}),(0,i.jsxs)("div",{className:"warning",children:[(0,i.jsx)("div",{className:"icon",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"text",children:"If you choose to not allow Capital One Shopping to collect personal data, you will miss out on exclusive offers, product specific price drop notifications, and other personalized savings features that are not possible for us to offer without this information."})]}),(0,i.jsxs)("div",{className:"options-wrapper",children:[(0,i.jsxs)("label",{className:"radio-label",children:[(0,i.jsx)("input",{type:"radio",name:"personal-radio",value:"No",onClick:this.onClickPersonalRadio.bind(this),checked:this.state.personalRadio==="No"}),"No"]}),(0,i.jsxs)("label",{className:"radio-label",children:[(0,i.jsx)("input",{type:"radio",name:"personal-radio",value:"Yes",onClick:this.onClickPersonalRadio.bind(this),checked:this.state.personalRadio==="Yes"}),"Yes"]})]})]}),(0,i.jsxs)("div",{className:"anonymous",children:[(0,i.jsx)("h3",{children:"To determine whether we can offer you any service, please answer the below question:"}),(0,i.jsx)("div",{className:"question",children:"Can we collect the following technical data from you?"}),(0,i.jsxs)("div",{className:"bullet-list",children:[(0,i.jsx)("div",{className:"li-text",children:"We will track technical data such as error logging to monitor the health of the service"}),(0,i.jsx)("div",{className:"li-text",children:"We will track technical data on API calls and service uptime"})]}),(0,i.jsx)("div",{className:"summary",children:"Allowing us to collect technical data is necessary for us to provide a limited, baseline shopping service to you."}),(0,i.jsxs)("div",{className:"warning",children:[(0,i.jsx)("div",{className:"icon",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"text",children:"If you choose to not allow Capital One Shopping to collect technical data, we cannot provide a service for you to find savings."})]}),(0,i.jsxs)("div",{className:"options-wrapper",children:[(0,i.jsxs)("label",{className:"radio-label",children:[(0,i.jsx)("input",{type:"radio",name:"anonymous-radio",value:"No",onClick:this.onClickAnonymousRadio.bind(this),checked:this.state.anonymousRadio==="No"}),"No"]}),(0,i.jsxs)("label",{className:"radio-label",children:[(0,i.jsx)("input",{type:"radio",name:"anonymous-radio",value:"Yes",onClick:this.onClickAnonymousRadio.bind(this),checked:this.state.anonymousRadio==="Yes"}),"Yes"]})]})]}),(0,i.jsx)("div",{className:"explanation",children:(0,i.jsxs)("div",{children:["Additional details about the data we collect and what we do with it are provided in our"," ",(0,i.jsx)("a",{href:"https://capitaloneshopping.com/our-terms/privacy-policy",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]})}),this.state.anonymousRadio==="Yes"?(0,i.jsx)("div",{className:"close-button-wrapper",children:(0,i.jsx)("button",{className:"primary-btn-large",onClick:this.onClickClose.bind(this),children:"Close"})}):null,this.state.anonymousRadio==="No"?(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"warning",children:[(0,i.jsx)("div",{className:"icon",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"text",children:"Without access to your technical data, we cannot provide you a service via the extension."})]}),(0,i.jsx)("div",{className:"uninstall-button-wrapper",children:(0,i.jsx)("button",{className:"primary-btn-large",onClick:this.onClickUninstall.bind(this),children:"Uninstall Extension"})})]}):null]}):null]})})})}},r=u({},s);var m=n(o());async function b(){window.wbConsentNotificationLoaded||(window.wbConsentNotificationLoaded=!0,_({appName:"consent",cssUrl:"consent.css",app:(0,m.jsx)(r,{}),disableDelay:!0}))}document.readyState!=="loading"?b():document.addEventListener("DOMContentLoaded",b);