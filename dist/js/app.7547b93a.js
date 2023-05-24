(function(){"use strict";var e={54:function(e,t,n){var s=n(525),a=n(396),i=n(139),l=n(870),r=n(242);const o=(0,l.qj)({error:"",loading:"",setLoading(e){this.loading=e},setError(e){this.error=e},clearLoading(){this.loading=""},clearError(){this.error=""}}),c=(0,l.qj)({list:{},changed:{},removed:[],winners:[],loaded:!1,setParticipants(e){this.list=e},deleteParticipants(e=!0){if(e){const e=confirm("Are you sure you want to delete all loaded participants?");if(!e)return}this.list={},this.loaded=!1,this.removed=[],this.changed={},this.winners=[]},remove(e){this.removed.push({username:e,details:this.list[e]}),delete this.list[e]},increment(e){let t=this.list[e];t.ticket_count+=1},decrement(e){let t=this.list[e];0!=t.ticket_count&&(t.ticket_count-=1)},winnersArray(e){const t=[];for(let i in this.list){let e=this.list[i].ticket_count;for(e;e>0;e--){let e={};e[i]=this.list[i],t.push(e)}}const n=[],s=[],a=[];console.log(`Winner count is ${e}`);while(e>0){if(a.length===Object.keys(this.list).length)break;let i=this.getRandomIndex(t.length),l=t[i],r=n.filter((e=>{let t=Object.keys(e)[0],n=Object.keys(l)[0];return t===n})).length>0;r||s.includes(i)||(n.push(l),s.push(i),a.push(l),e--)}this.winners=a},getRandomIndex(e){return Math.floor(Math.random()*e)},rerollWinner(e){const t=this.winners.findIndex((t=>Object.keys(t)[0]===e)),n={...this.list};console.log(n),this.winners.forEach((e=>delete n[Object.keys(e)[0]]));const s=Object.keys(n)[Math.floor(Math.random()*Object.keys(n).length)],a=n[s],i={};i[s]=a,console.log(i,t),this.winners[t]=i}}),u=e=>((0,a.dD)("data-v-95a66562"),e=e(),(0,a.Cn)(),e),d={class:"form-wrapper"},p={class:"title"},h={key:0},m=u((()=>(0,a._)("hr",null,null,-1))),v=["onSubmit"],f=["disabled"],b=["disabled"],_={key:1,class:"winners-input"},g=u((()=>(0,a._)("h3",null,"How many winners should be picked?",-1))),k={key:4,class:"options-wrapper"},w={class:"shouldComment"},y=u((()=>(0,a._)("label",{for:"shouldComment"},"Comments give extra tickets?",-1))),S={class:"shouldCommentInput"},U=u((()=>(0,a._)("label",{for:"commentCount"},[(0,a._)("abbr",{title:"Amount of tickets users can earn by commenting on the raffle character."},"Comment ticket count")],-1))),j=u((()=>(0,a._)("br",null,null,-1))),O=["disabled"],C={class:"shouldSub"},D=u((()=>(0,a._)("label",{for:"shouldSubscribe"},"Subscriptions give extra tickets?",-1))),x={class:"shouldSubInput"},H=u((()=>(0,a._)("label",{for:"subCount"},[(0,a._)("abbr",{title:"Amount of tickets users can earn by subscribing to raffle host. (Requires host's subscribers to be public)"},"Subscription ticket count")],-1))),P=u((()=>(0,a._)("br",null,null,-1))),T=["disabled"],M={class:"winners"},I=["src","onDblclick"],z={class:"messages"},E={class:"errorMsg"},q={class:"loadingMsg"},Y=u((()=>(0,a._)("div",{class:"text"},[(0,a._)("h1",null,"Hi there!"),(0,a._)("hr"),(0,a._)("h3",{class:"text-sm"},[(0,a.Uk)(" This is a free tool for Toyhou.se that let's you pick raffle winners efficiently! "),(0,a._)("br"),(0,a.Uk)(" To use the app, simply enter the raffle characters link, select any optional rules you want, and load the participants! "),(0,a._)("br"),(0,a.Uk)(" Afterwards, you can pick any number of winners you want with just the click of a button! :) You may also increase or decrease ticket counts, and delete users from the participants list! ")])],-1)));var A={__name:"CharacterForm",setup(e){const t=(0,l.iH)(""),n=(0,l.iH)(!1),s=(0,l.iH)(!1),u=(0,l.iH)(1),A=(0,l.iH)(1),L=(0,l.iH)(1),R=(0,l.iH)(0),W=(0,a.Fl)((()=>c.loaded?"Ready":"Load"));(0,a.YP)(t,(()=>{o.clearError()}));const F=async()=>{o.clearError();const e=t.value;if(!e||!e.startsWith("https://toyhou.se"))return void o.setError("Please enter a valid Toyhou.se link!");const n=V(e),s=await $(n);s&&(c.setParticipants(s),t.value="")},V=e=>{const t=e.split("/")[3];return t},$=async e=>{let t;o.loading="Fetching participant data...",s.value&&(o.loading+=" (this might take a while...)");try{t=await fetch(N(e))}catch(n){console.log(n),o.setError("Invalid character link or subscribers hidden!")}return o.loading="",t.ok?(c.loaded=!0,await t.json()):(c.deleteParticipants(!1),o.setError("Invalid character link or subscribers hidden!"),void console.log(o.error))},N=e=>{let t=`https://toyhouse-api.onrender.com/raffle/${e}?`;return n.value&&(t+="must_comment=true&",t+=`comment_ticket_count=${A.value}&`),s.value&&(t+="must_subscribe=true&",t+=`subscribe_ticket_count=${u.value}&`),t},Z=()=>{0!==L.value&&(R.value+=1,c.winnersArray(L.value))},K=()=>{R.value=0,L.value=1,c.deleteParticipants()},B=e=>{console.log(e),c.rerollWinner(e)};return(e,V)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",d,[(0,a._)("div",p,[(0,a._)("h3",null,(0,i.zw)((0,l.SU)(c).winners.length>0?`Winners #${R.value} | ${(new Date).toLocaleDateString()}`:"Raffle"),1),(0,l.SU)(c).winners.length>0?((0,a.wg)(),(0,a.iD)("small",h,[(0,a._)("em",null,(0,i.zw)(Date.now()),1)])):(0,a.kq)("",!0),m]),(0,l.SU)(c).winners.length?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("div",M,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(c).winners,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"winner"},[(0,a._)("img",{class:"winner-img",src:e[Object.keys(e)[0]].image,onDblclick:t=>B(Object.keys(e)[0])},null,40,I),(0,a.Uk)(" "+(0,i.zw)(Object.keys(e)[0])+" "+(0,i.zw)(e.ticket_count),1)])))),128))]),(0,a._)("button",{onClick:K,class:"delete-participants"},"Restart"),(0,a._)("button",{onClick:Z,class:"reroll-participants"}," Reroll all ")],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,l.SU)(c).loaded?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("form",{key:0,id:"load-user-form",onSubmit:(0,r.withModifiers)(F,["prevent"])},[(0,a.wy)((0,a._)("input",{class:"load-user-input",disabled:(0,l.SU)(c).loaded,placeholder:"Enter raffle character URL...","onUpdate:modelValue":V[0]||(V[0]=e=>t.value=e)},null,8,f),[[r.vModelText,t.value]]),(0,a._)("button",{class:"load-user-button",type:"submit",disabled:(0,l.SU)(c).loaded},(0,i.zw)((0,l.SU)(W)),9,b)],40,v)),(0,l.SU)(c).loaded?((0,a.wg)(),(0,a.iD)("div",_,[g,(0,a.wy)((0,a._)("input",{type:"number",min:"0",placeholder:"Number of winners","onUpdate:modelValue":V[1]||(V[1]=e=>L.value=e)},null,512),[[r.vModelText,L.value]])])):(0,a.kq)("",!0),(0,l.SU)(c).loaded?((0,a.wg)(),(0,a.iD)("button",{key:2,class:"pick-winners",onClick:Z}," Pick winners! ")):(0,a.kq)("",!0),(0,l.SU)(c).loaded?((0,a.wg)(),(0,a.iD)("button",{key:3,class:"delete-participants delete-full",onClick:V[2]||(V[2]=(...e)=>(0,l.SU)(c).deleteParticipants&&(0,l.SU)(c).deleteParticipants(...e))}," Delete current participants list? ")):(0,a.kq)("",!0),(0,l.SU)(c).loaded?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",w,[(0,a._)("div",null,[y,(0,a.wy)((0,a._)("input",{type:"checkbox",id:"shouldComment","onUpdate:modelValue":V[3]||(V[3]=e=>n.value=e)},null,512),[[r.vModelCheckbox,n.value]])]),(0,a._)("div",S,[U,j,(0,a.wy)((0,a._)("input",{disabled:!n.value,type:"number",min:"0","onUpdate:modelValue":V[4]||(V[4]=e=>A.value=e)},null,8,O),[[r.vModelText,A.value]])])]),(0,a._)("div",C,[(0,a._)("div",null,[D,(0,a.wy)((0,a._)("input",{type:"checkbox",id:"shouldSubscribe","onUpdate:modelValue":V[5]||(V[5]=e=>s.value=e)},null,512),[[r.vModelCheckbox,s.value]])]),(0,a._)("div",x,[H,P,(0,a.wy)((0,a._)("input",{disabled:!s.value,type:"number",min:"0","onUpdate:modelValue":V[6]||(V[6]=e=>u.value=e)},null,8,T),[[r.vModelText,u.value]])])])]))],64)),(0,a._)("div",z,[(0,a._)("h3",E,(0,i.zw)((0,l.SU)(o).error),1),(0,a._)("h3",q,(0,i.zw)((0,l.SU)(o).loading),1)])]),Y],64))}},L=n(89);const R=(0,L.Z)(A,[["__scopeId","data-v-95a66562"]]);var W=R;const F={class:"participant"},V=["src"],$={class:"participant-tickets"},N={class:"participant-ticket-count"},Z={class:"ticket-buttons"};var K={__name:"ParticipantCard",props:["username","details"],setup(e){const t=e,n=e=>{console.log(!(t.username in c.changed)),t.username in c.changed||(c.changed[t.username]={...t.details}),c.increment(e)},s=e=>{t.username in c.changed||(c.changed[t.username]={...t.details}),c.decrement(e)};return(t,r)=>((0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("img",{class:"participant-image",src:e.details.image,onDblclick:r[0]||(r[0]=t=>(0,l.SU)(c).remove(e.username))},null,40,V),(0,a._)("p",null,"Name: "+(0,i.zw)(e.username),1),(0,a._)("div",$,[(0,a._)("p",N,"Tickets: "+(0,i.zw)(e.details.ticket_count),1),(0,a._)("div",Z,[(0,a._)("button",{class:"ticket-button increment",onClick:r[1]||(r[1]=t=>n(e.username))},"+"),(0,a._)("button",{class:"ticket-button decrement",onClick:r[2]||(r[2]=t=>s(e.username))},"-")])])]))}};const B=(0,L.Z)(K,[["__scopeId","data-v-e2206146"]]);var G=B;const J=e=>((0,a.dD)("data-v-fe28351a"),e=e(),(0,a.Cn)(),e),Q={key:0,class:"participants-wrapper"},X=J((()=>(0,a._)("h1",null,"No participants loaded!",-1))),ee=[X],te={class:"participants-wrapper"},ne={class:"participants-list"};var se={__name:"ParticipantsList",setup(e){const t=(0,l.iH)("");let n;const s=(0,a.Fl)((()=>{if(0==t.value.length)return Object.entries(c.list);let e=Object.entries(c.list).filter((([e])=>e.toLowerCase().includes(t.value.toLowerCase())));return console.log(e),e}));function i(e){n&&(n=clearTimeout(n)),n=setTimeout((function(){t.value=e.target.value}),500)}return(e,t)=>(0,l.SU)(c).loaded?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("input",{class:"participants-input",type:"text",placeholder:"Search user by name...",onInput:i},null,32),(0,a._)("div",te,[(0,a._)("div",ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(s),(e=>((0,a.wg)(),(0,a.j4)(G,{key:e[0],details:e[1],username:e[0]},null,8,["details","username"])))),128))])])],64)):((0,a.wg)(),(0,a.iD)("div",Q,ee))}};const ae=(0,L.Z)(se,[["__scopeId","data-v-fe28351a"]]);var ie=ae,le=n(678),re=n.p+"img/home-svgrepo-com.49b8178c.svg",oe=n.p+"img/people-svgrepo-com.15ca7a88.svg";const ce={class:"navbar"},ue={class:"nav-links"},de=["src"],pe=(0,a.Uk)(" Home "),he=["src"],me=(0,a.Uk)(" Participants "),ve={class:"app-status"},fe=(0,a._)("footer",null,[(0,a._)("small",null,[(0,a._)("em",null,[(0,a.Uk)(" This app is not associated with or a part of Toyhou.se. It's only a fan project. Check the repository out "),(0,a._)("a",{class:"footer-link",href:"https://github.com/erayalkis/toyhouse_raffle_App",target:"#"},"here")])])],-1);var be={__name:"App",setup(e){const t=(0,l.iH)(!1),n=(0,l.iH)(!0);return(0,a.bv)((async()=>{console.log("hi"),fetch("https://toyhouse-api.onrender.com/app_status").then((async e=>{console.log(await e.json()),e.ok&&(t.value=!0),n.value=!1}))})),(e,s)=>{const r=(0,a.up)("router-link"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",ce,[(0,a._)("div",ue,[(0,a.Wm)(r,{class:"router-link",to:"/"},{default:(0,a.w5)((()=>[(0,a._)("img",{class:"homeIcon",src:(0,l.SU)(re)},null,8,de),pe])),_:1}),(0,a.Wm)(r,{class:"router-link",to:"/participants"},{default:(0,a.w5)((()=>[(0,a._)("img",{class:"peopleIcon",src:(0,l.SU)(oe)},null,8,he),me])),_:1})]),(0,a._)("div",ve,[(0,a._)("h3",{class:(0,i.C_)({online:t.value,offline:!n.value&&!t.value})},(0,i.zw)(n.value?"Fetching...":t.value?"Online":"Offline"),3)])]),(0,a.Wm)(o),fe],64)}}};const _e=be;var ge=_e;const ke=[{path:"/",component:W},{path:"/participants",component:ie}],we=(0,le.p7)({history:(0,le.r5)(),routes:ke}),ye=(0,s.ri)(ge);ye.use(we),ye.mount("#app")}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,a,i){if(!s){var l=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],i=e[u][2];for(var r=!0,o=0;o<s.length;o++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[o])}))?s.splice(o--,1):(r=!1,i<l&&(l=i));if(r){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,a,i]}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/toyhouse_raffle_app/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,i,l=s[0],r=s[1],o=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(o)var u=o(n)}for(t&&t(s);c<l.length;c++)i=l[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},s=self["webpackChunktoyhouse_raffle_app"]=self["webpackChunktoyhouse_raffle_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(54)}));s=n.O(s)})();
//# sourceMappingURL=app.7547b93a.js.map