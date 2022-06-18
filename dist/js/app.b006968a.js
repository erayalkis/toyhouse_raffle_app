(function(){"use strict";var e={4658:function(e,t,n){var i=n(525),a=n(3396),s=n(7139),r=n(4870),l=n(9242);const o=(0,r.qj)({error:"",loading:"",setLoading(e){this.loading=e},setError(e){this.error=e},clearLoading(){this.loading=""},clearError(){this.error=""}});n(6699);const c=(0,r.qj)({list:{},changed:{},removed:[],winners:[],loaded:!1,setParticipants(e){this.list=e},deleteParticipants(e=!0){if(e){const e=confirm("Are you sure you want to delete all loaded participants?");if(!e)return}this.list={},this.loaded=!1,this.removed=[],this.changed={},this.winners=[]},remove(e){this.removed.push({username:e,details:this.list[e]}),delete this.list[e]},increment(e){let t=this.list[e];t.ticket_count+=1},decrement(e){let t=this.list[e];0!=t.ticket_count&&(t.ticket_count-=1)},winnersArray(e){const t=[];for(let s in this.list){let e=this.list[s].ticket_count;for(e;e>0;e--){let e={};e[s]=this.list[s],t.push(e)}}const n=[],i=[],a=[];console.log(`Winner count is ${e}`);while(e>0){if(a.length===Object.keys(this.list).length)break;let s=this.getRandomIndex(t.length),r=t[s],l=n.filter((e=>{let t=Object.keys(e)[0],n=Object.keys(r)[0];return t===n})).length>0;l||i.includes(s)||(n.push(r),i.push(s),a.push(r),e--)}this.winners=a},getRandomIndex(e){return Math.floor(Math.random()*e)}}),u=e=>((0,a.dD)("data-v-49061050"),e=e(),(0,a.Cn)(),e),d={class:"form-wrapper"},p={class:"title"},h={key:0},m=u((()=>(0,a._)("hr",null,null,-1))),v=["onSubmit"],f=["disabled"],b=["disabled"],_={key:1,class:"winners-input"},g=u((()=>(0,a._)("h3",null,"How many winners should be picked?",-1))),k={key:4,class:"options-wrapper"},w={class:"shouldComment"},y=u((()=>(0,a._)("label",{for:"shouldComment"},"Comments give extra tickets?",-1))),S={class:"shouldCommentInput"},U=u((()=>(0,a._)("label",{for:"commentCount"},[(0,a._)("abbr",{title:"Amount of tickets users can earn by commenting on the raffle character."},"Comment ticket count")],-1))),C=u((()=>(0,a._)("br",null,null,-1))),D=["disabled"],j={class:"shouldSub"},O=u((()=>(0,a._)("label",{for:"shouldSubscribe"},"Subscriptions give extra tickets?",-1))),x={class:"shouldSubInput"},H=u((()=>(0,a._)("label",{for:"subCount"},[(0,a._)("abbr",{title:"Amount of tickets users can earn by subscribing to raffle host. (Requires host's subscribers to be public)"},"Subscription ticket count")],-1))),P=u((()=>(0,a._)("br",null,null,-1))),T=["disabled"],M={class:"winners"},I=["src"],z={class:"messages"},q={class:"errorMsg"},E={class:"loadingMsg"},Y=u((()=>(0,a._)("div",{class:"text"},[(0,a._)("h1",null,"Hi there!"),(0,a._)("hr"),(0,a._)("h3",{class:"text-sm"},[(0,a.Uk)(" This is a free tool for Toyhou.se that let's you pick raffle winners efficiently! "),(0,a._)("br"),(0,a.Uk)(" To use the app, simply enter the raffle characters link, select any optional rules you want, and load the participants! "),(0,a._)("br"),(0,a.Uk)(" Afterwards, you can pick any number of winners you want with just the click of a button! :) You may also increase or decrease ticket counts, and delete users from the participants list! ")])],-1)));var A={__name:"CharacterForm",setup(e){const t=(0,r.iH)(""),n=(0,r.iH)(!1),i=(0,r.iH)(!1),u=(0,r.iH)(1),A=(0,r.iH)(1),L=(0,r.iH)(1),R=(0,a.Fl)((()=>c.loaded?"Ready":"Load"));(0,a.YP)(t,(()=>{o.clearError()}));const F=async()=>{o.clearError();const e=t.value;if(!e||!e.startsWith("https://toyhou.se"))return void o.setError("Please enter a valid Toyhou.se link!");const n=V(e),i=await W(n);i&&(c.setParticipants(i),t.value="")},V=e=>{const t=e.split("/")[3];return t},W=async e=>{let t;o.loading="Fetching participant data...",i.value&&(o.loading+=" (this might take a while...)");try{t=await fetch($(e))}catch(n){console.log(n),o.setError("Invalid character link or subscribers hidden!")}return o.loading="",t.ok?(c.loaded=!0,await t.json()):(c.deleteParticipants(!1),o.setError("Invalid character link or subscribers hidden!"),void console.log(o.error))},$=e=>{let t=`https://toyhouse-rails-api.herokuapp.com/raffle/${e}?`;return n.value&&(t+="must_comment=true&",t+=`comment_ticket_count=${A.value}&`),i.value&&(t+="must_subscribe=true&",t+=`subscribe_ticket_count=${u.value}&`),t},N=()=>{c.winnersArray(L.value)};return(e,V)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",d,[(0,a._)("div",p,[(0,a._)("h3",null,(0,s.zw)((0,r.SU)(c).winners.length>0?`Winners | ${(new Date).toLocaleDateString()}`:"Raffle"),1),(0,r.SU)(c).winners.length>0?((0,a.wg)(),(0,a.iD)("small",h,[(0,a._)("em",null,(0,s.zw)(Date.now()),1)])):(0,a.kq)("",!0),m]),(0,r.SU)(c).winners.length?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("div",M,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(c).winners,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"winner"},[(0,a._)("img",{class:"winner-img",src:e[Object.keys(e)[0]].image},null,8,I),(0,a.Uk)(" "+(0,s.zw)(Object.keys(e)[0])+" "+(0,s.zw)(e.ticket_count),1)])))),128))]),(0,a._)("button",{onClick:V[7]||(V[7]=(...e)=>(0,r.SU)(c).deleteParticipants&&(0,r.SU)(c).deleteParticipants(...e)),class:"delete-participants"},"Restart")],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,r.SU)(c).loaded?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("form",{key:0,id:"load-user-form",onSubmit:(0,l.withModifiers)(F,["prevent"])},[(0,a.wy)((0,a._)("input",{class:"load-user-input",disabled:(0,r.SU)(c).loaded,placeholder:"Enter raffle character URL...","onUpdate:modelValue":V[0]||(V[0]=e=>t.value=e)},null,8,f),[[l.vModelText,t.value]]),(0,a._)("button",{class:"load-user-button",type:"submit",disabled:(0,r.SU)(c).loaded},(0,s.zw)((0,r.SU)(R)),9,b)],40,v)),(0,r.SU)(c).loaded?((0,a.wg)(),(0,a.iD)("div",_,[g,(0,a.wy)((0,a._)("input",{type:"number",min:"0",placeholder:"Number of winners","onUpdate:modelValue":V[1]||(V[1]=e=>L.value=e)},null,512),[[l.vModelText,L.value]])])):(0,a.kq)("",!0),(0,r.SU)(c).loaded?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"pick-winners",onClick:N}," Pick winners! ")):(0,a.kq)("",!0),(0,r.SU)(c).loaded?((0,a.wg)(),(0,a.iD)("button",{key:3,class:"delete-participants",onClick:V[2]||(V[2]=(...e)=>(0,r.SU)(c).deleteParticipants&&(0,r.SU)(c).deleteParticipants(...e))}," Delete current participants list? ")):(0,a.kq)("",!0),(0,r.SU)(c).loaded?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",w,[(0,a._)("div",null,[y,(0,a.wy)((0,a._)("input",{type:"checkbox",id:"shouldComment","onUpdate:modelValue":V[3]||(V[3]=e=>n.value=e)},null,512),[[l.vModelCheckbox,n.value]])]),(0,a._)("div",S,[U,C,(0,a.wy)((0,a._)("input",{disabled:!n.value,type:"number",min:"0","onUpdate:modelValue":V[4]||(V[4]=e=>A.value=e)},null,8,D),[[l.vModelText,A.value]])])]),(0,a._)("div",j,[(0,a._)("div",null,[O,(0,a.wy)((0,a._)("input",{type:"checkbox",id:"shouldSubscribe","onUpdate:modelValue":V[5]||(V[5]=e=>i.value=e)},null,512),[[l.vModelCheckbox,i.value]])]),(0,a._)("div",x,[H,P,(0,a.wy)((0,a._)("input",{disabled:!i.value,type:"number",min:"0","onUpdate:modelValue":V[6]||(V[6]=e=>u.value=e)},null,8,T),[[l.vModelText,u.value]])])])]))],64)),(0,a._)("div",z,[(0,a._)("h3",q,(0,s.zw)((0,r.SU)(o).error),1),(0,a._)("h3",E,(0,s.zw)((0,r.SU)(o).loading),1)])]),Y],64))}},L=n(89);const R=(0,L.Z)(A,[["__scopeId","data-v-49061050"]]);var F=R;const V={class:"participant"},W=["src"],$={class:"participant-tickets"},N={class:"participant-ticket-count"},Z={class:"ticket-buttons"};var K={__name:"ParticipantCard",props:["username","details"],setup(e){const t=e,n=e=>{console.log(!(t.username in c.changed)),t.username in c.changed||(c.changed[t.username]={...t.details}),c.increment(e)},i=e=>{t.username in c.changed||(c.changed[t.username]={...t.details}),c.decrement(e)};return(t,l)=>((0,a.wg)(),(0,a.iD)("div",V,[(0,a._)("img",{class:"participant-image",src:e.details.image,onDblclick:l[0]||(l[0]=t=>(0,r.SU)(c).remove(e.username))},null,40,W),(0,a._)("p",null,"Name: "+(0,s.zw)(e.username),1),(0,a._)("div",$,[(0,a._)("p",N,"Tickets: "+(0,s.zw)(e.details.ticket_count),1),(0,a._)("div",Z,[(0,a._)("button",{class:"ticket-button increment",onClick:l[1]||(l[1]=t=>n(e.username))},"+"),(0,a._)("button",{class:"ticket-button decrement",onClick:l[2]||(l[2]=t=>i(e.username))},"-")])])]))}};const B=(0,L.Z)(K,[["__scopeId","data-v-4182fc29"]]);var G=B;const J=e=>((0,a.dD)("data-v-725402c9"),e=e(),(0,a.Cn)(),e),Q={key:0,class:"participants-wrapper"},X=J((()=>(0,a._)("h1",null,"No participants loaded!",-1))),ee=[X],te={class:"participants-wrapper"},ne={class:"participants-list"};var ie={__name:"ParticipantsList",setup(e){const t=(0,r.iH)("");let n;const i=(0,a.Fl)((()=>{if(0==t.value.length)return Object.entries(c.list);let e=Object.entries(c.list).filter((([e])=>e.toLowerCase().includes(t.value.toLowerCase())));return console.log(e),e}));function s(e){n&&(n=clearTimeout(n)),n=setTimeout((function(){t.value=e.target.value}),500)}return(e,t)=>(0,r.SU)(c).loaded?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("input",{class:"participants-input",type:"text",placeholder:"Search user by name...",onInput:s},null,32),(0,a._)("div",te,[(0,a._)("div",ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(i),(e=>((0,a.wg)(),(0,a.j4)(G,{key:e[0],details:e[1],username:e[0]},null,8,["details","username"])))),128))])])],64)):((0,a.wg)(),(0,a.iD)("div",Q,ee))}};const ae=(0,L.Z)(ie,[["__scopeId","data-v-725402c9"]]);var se=ae,re=n(678),le=n.p+"img/home-svgrepo-com.49b8178c.svg",oe=n.p+"img/people-svgrepo-com.15ca7a88.svg";const ce={class:"navbar"},ue={class:"nav-links"},de=["src"],pe=(0,a.Uk)(" Home "),he=["src"],me=(0,a.Uk)(" Participants "),ve={class:"app-status"},fe=(0,a._)("footer",null,[(0,a._)("small",null,[(0,a._)("em",null,[(0,a.Uk)(" This app is not associated with or a part of Toyhou.se. It's only a fan project. Check the repository out "),(0,a._)("a",{class:"footer-link",href:"https:/github.com/erayalkis/toyhouse_raffle_App",target:"#"},"here")])])],-1);var be={__name:"App",setup(e){const t=(0,r.iH)(!1),n=(0,r.iH)(!0);return(0,a.bv)((async()=>{console.log("hi"),fetch("https://toyhouse-rails-api.herokuapp.com/app_status").then((async e=>{console.log(await e.json()),e.ok&&(t.value=!0),n.value=!1}))})),(e,i)=>{const l=(0,a.up)("router-link"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",ce,[(0,a._)("div",ue,[(0,a.Wm)(l,{class:"router-link",to:"/"},{default:(0,a.w5)((()=>[(0,a._)("img",{class:"homeIcon",src:(0,r.SU)(le)},null,8,de),pe])),_:1}),(0,a.Wm)(l,{class:"router-link",to:"/participants"},{default:(0,a.w5)((()=>[(0,a._)("img",{class:"peopleIcon",src:(0,r.SU)(oe)},null,8,he),me])),_:1})]),(0,a._)("div",ve,[(0,a._)("h3",{class:(0,s.C_)({online:t.value,offline:!n.value&&!t.value})},(0,s.zw)(n.value?"Fetching...":t.value?"Online":"Offline"),3)])]),(0,a.Wm)(o),fe],64)}}};const _e=be;var ge=_e;const ke=[{path:"/",component:F},{path:"/participants",component:se}],we=(0,re.p7)({history:(0,re.r5)(),routes:ke}),ye=(0,i.ri)(ge);ye.use(we),ye.mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,s){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],s=e[u][2];for(var l=!0,o=0;o<i.length;o++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[o])}))?i.splice(o--,1):(l=!1,s<r&&(r=s));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,a,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,s,r=i[0],l=i[1],o=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(o)var u=o(n)}for(t&&t(i);c<r.length;c++)s=r[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},i=self["webpackChunktoyhouse_raffle_app"]=self["webpackChunktoyhouse_raffle_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4658)}));i=n.O(i)})();
//# sourceMappingURL=app.b006968a.js.map