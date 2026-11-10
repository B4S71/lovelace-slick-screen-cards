import{Chart as t,LineController as e,LineElement as i,PointElement as s,LinearScale as r,CategoryScale as n,Filler as o,Tooltip as a}from"chart.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=globalThis,h=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),d=new WeakMap;let p=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(h&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=d.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(e,t))}return t}toString(){return this.cssText}};const g=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new p(i,t,c)},u=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new p("string"==typeof t?t:t+"",void 0,c))(e)})(t):t,{is:f,defineProperty:m,getOwnPropertyDescriptor:_,getOwnPropertyNames:v,getOwnPropertySymbols:y,getPrototypeOf:$}=Object,b=globalThis,w=b.trustedTypes,x=w?w.emptyScript:"",A=b.reactiveElementPolyfillSupport,E=(t,e)=>t,S={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},C=(t,e)=>!f(t,e),k={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:C};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;let M=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&m(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=_(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=$(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,e=[...v(t),...y(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(h)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=l.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:S).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:S;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??C)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[E("elementProperties")]=new Map,M[E("finalized")]=new Map,A?.({ReactiveElement:M}),(b.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H=globalThis,I=t=>t,T=H.trustedTypes,P=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+N,z=`<${O}>`,R=document,q=()=>R.createComment(""),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,L="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,W=/>/g,B=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,V=/"/g,J=/^(?:script|style|textarea|title)$/i,Z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Q=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Y=new WeakMap,tt=R.createTreeWalker(R,129);function et(t,e){if(!j(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}const it=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=D;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===D?"!--"===l[1]?o=F:void 0!==l[1]?o=W:void 0!==l[2]?(J.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=B):void 0!==l[3]&&(o=B):o===B?">"===l[0]?(o=r??D,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?B:'"'===l[3]?V:K):o===V||o===K?o=B:o===F||o===W?o=D:(o=B,r=void 0);const d=o===B&&t[e+1].startsWith("/>")?" ":"";n+=o===D?i+z:h>=0?(s.push(a),i.slice(0,h)+U+i.slice(h)+N+d):i+N+(-2===h?e:d)}return[et(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class st{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=it(t,e);if(this.el=st.createElement(l,i),tt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=tt.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(U)){const e=h[n++],i=s.getAttribute(t).split(N),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?lt:"?"===o[1]?ht:"@"===o[1]?ct:at}),s.removeAttribute(t)}else t.startsWith(N)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(J.test(s.tagName)){const t=s.textContent.split(N),e=t.length-1;if(e>0){s.textContent=T?T.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],q()),tt.nextNode(),a.push({type:2,index:++r});s.append(t[e],q())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(N,t+1));)a.push({type:7,index:r}),t+=N.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function rt(t,e,i=t,s){if(e===Q)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=G(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=rt(t,r._$AS(t,e.values),r,s)),e}class nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);tt.currentNode=s;let r=tt.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new ot(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new dt(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=tt.nextNode(),n++)}return tt.currentNode=R,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=rt(this,t,e),G(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=st.createElement(et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new nt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new st(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new ot(this.O(q()),this.O(q()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=I(t).nextSibling;I(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=rt(this,t,e,0),n=!G(t)||t!==this._$AH&&t!==Q,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=rt(this,s[i+o],e,o),a===Q&&(a=this._$AH[o]),n||=!G(a)||a!==this._$AH[o],a===X?t=X:t!==X&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class lt extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class ht extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class ct extends at{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=rt(this,t,e,0)??X)===Q)return;const i=this._$AH,s=t===X&&i!==X||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==X&&(i===X||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const pt=H.litHtmlPolyfillSupport;pt?.(st,ot),(H.litHtmlVersions??=[]).push("3.3.2");const gt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ut extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new ot(e.insertBefore(q(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}ut._$litElement$=!0,ut.finalized=!0,gt.litElementHydrateSupport?.({LitElement:ut});const ft=gt.litElementPolyfillSupport;ft?.({LitElement:ut}),(gt.litElementVersions??=[]).push("4.2.2");const mt=/^[a-z_]+\.[a-z0-9_]+$/;function _t(t,e=new Set){return"string"==typeof t?mt.test(t)&&e.add(t):Array.isArray(t)?t.forEach(t=>_t(t,e)):t&&"object"==typeof t&&Object.values(t).forEach(t=>_t(t,e)),e}t.register(e,i,s,r,n,o,a);console.info("%c SIMPLE-CLIMATE-CARD %c 0.2.0 ","color: white; background: #ff9800; font-weight: 700;","color: #ff9800; background: white; font-weight: 700;");const vt=["on","true","heat","heating","active","running"],yt={id:"slickActivityBands",beforeDatasetsDraw(t){var e;const i=t.$activityBands,s=t.chartArea,r=null===(e=t.getDatasetMeta(0))||void 0===e?void 0:e.data;if(!(null==i?void 0:i.length)||!s||!r||r.length<2)return;const n=t.$activityStyle||{fill:"rgba(255, 87, 34, 0.5)",edge:"rgba(255, 255, 255, 0.55)"},o=r.length-1,a=t=>r[0].x+t/o*(r[o].x-r[0].x),l=t.ctx,h=()=>{l.moveTo(r[0].x,r[0].y);for(let t=1;t<r.length;t++){const e=r[t-1],i=r[t];void 0!==e.cp2x&&void 0!==i.cp1x?l.bezierCurveTo(e.cp2x,e.cp2y,i.cp1x,i.cp1y,i.x,i.y):l.lineTo(i.x,i.y)}};l.save();for(const t of i){const e=a(t.start),i=Math.max(a(t.end),e+1);l.save(),l.beginPath(),l.rect(e,s.top,i-e,s.bottom-s.top),l.clip(),l.beginPath(),h(),l.lineTo(r[o].x,s.bottom),l.lineTo(r[0].x,s.bottom),l.closePath(),l.fillStyle=n.fill,l.fill(),l.restore(),l.beginPath(),l.setLineDash([2,2]),l.lineWidth=1,l.strokeStyle=n.edge;for(const t of[e,i])t<=s.left+.5||t>=s.right-.5||(l.moveTo(Math.round(t)+.5,s.top),l.lineTo(Math.round(t)+.5,s.bottom));l.stroke(),l.setLineDash([])}l.restore()}};class $t extends ut{constructor(){super(...arguments),this._graphHistory={},this._graphFetchInFlight=new Set,this._graphCacheMs=3e5,this._charts=new Map,this._chartGraphs=new Map,this._entityIds=new Set}static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-simple-climate-card-editor")}static getStubConfig(){return{type:"custom:slick-simple-climate-card",entity:"",name:"Climate"}}getCardSize(){return 2}getLayoutOptions(){return{grid_rows:2,grid_columns:2,grid_min_rows:1,grid_min_columns:1}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(this.config={name:"Climate",...t},this._entityIds=_t(this.config),this.config.name&&"string"!=typeof this.config.name)throw new Error("name must be a string");if(this.config.hot_water_entity&&"string"!=typeof this.config.hot_water_entity)throw new Error("hot_water_entity must be a string");if(this.config.hot_water_active_entity&&"string"!=typeof this.config.hot_water_active_entity)throw new Error("hot_water_active_entity must be a string");if(this.config.sensors&&"object"!=typeof this.config.sensors)throw new Error("sensors must be an object")}disconnectedCallback(){for(const t of this._charts.values())t.destroy();this._charts.clear(),this._chartGraphs.clear(),super.disconnectedCallback()}shouldUpdate(t){return function(t,e,i){if(1!==t.size||!t.has("hass"))return!0;const s=t.get("hass");if(!s||!e)return!0;if(s.localize!==e.localize||s.themes!==e.themes)return!0;for(const t of i)if(s.states[t]!==e.states[t])return!0;return!1}(t,this.hass,this._entityIds)}updated(){this._syncCharts()}_getChartPalette(t){return"tank-graph"===t?{line:"#9ad9ff",fill:"rgba(79, 195, 247, 0.2)"}:{line:"#ffd59a",fill:"rgba(255, 183, 77, 0.2)"}}_syncCharts(){const e=this.renderRoot.querySelectorAll("canvas.graph-canvas[data-key]"),i=new Set;e.forEach(e=>{var s;const r=e.dataset.key,n=e.dataset.colorClass||"heating-graph";if(!r)return;i.add(r);const o=this._graphHistory[r];if(!(null===(s=null==o?void 0:o.points)||void 0===s?void 0:s.length))return;const a=this._getChartPalette(n),l=o.points.map((t,e)=>e),h=o.points.length,c=this._charts.get(r);if(c&&c.canvas===e){if(this._chartGraphs.get(r)===o)return;this._chartGraphs.set(r,o),c.data.labels=l,c.$activityBands=o.bands;const t=c.data.datasets[0];return t.data=o.points,t.borderColor=a.line,t.backgroundColor=a.fill,t.tension=.58,t.cubicInterpolationMode="monotone",void c.update("none")}c&&c.destroy();const d=e.getContext("2d");if(!d)return;const p=new t(d,{type:"line",data:{labels:l,datasets:[{data:o.points,borderColor:a.line,backgroundColor:a.fill,fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.7,pointRadius:t=>t.dataIndex===h-1?1.8:0,pointHoverRadius:0,pointBackgroundColor:a.line,pointBorderColor:"rgba(0, 0, 0, 0.35)",pointBorderWidth:.6}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1}}},elements:{line:{capBezierPoints:!0}},layout:{padding:{top:2,right:0,bottom:1,left:0}}},plugins:[yt]});p.$activityBands=o.bands,p.$activityStyle="tank-graph"===n?{fill:"rgba(255, 112, 67, 0.55)",edge:"rgba(255, 204, 188, 0.75)"}:{fill:"rgba(230, 74, 25, 0.72)",edge:"rgba(255, 224, 178, 0.85)"},p.update("none"),this._charts.set(r,p),this._chartGraphs.set(r,o)});for(const[t,e]of this._charts.entries())i.has(t)||(e.destroy(),this._charts.delete(t),this._chartGraphs.delete(t))}_formatTemperature(t){const e="number"==typeof t?t:parseFloat(String(t));return Number.isFinite(e)?`${e}°`:"--"}_getClimateModeIcon(t){var e;const i=String((null==t?void 0:t.state)||(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.hvac_action)||"").toLowerCase();return"heat"===i||"heating"===i?"mdi:fire":"cool"===i||"cooling"===i?"mdi:snowflake":"heat_cool"===i||"auto"===i?"mdi:autorenew":"off"===i?"mdi:power-off":"mdi:thermostat"}_getHotWaterModeIcon(t){var e,i;const s=(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.operation_mode)||(null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.preset_mode)||(null==t?void 0:t.state)||"",r=String(s).toLowerCase();return r.includes("eco")?"mdi:leaf":r.includes("high")||r.includes("boost")||r.includes("performance")||r.includes("power")||r.includes("hoch")?"mdi:fire":"off"===r?"mdi:power-off":"mdi:water-thermometer"}_isHotWaterActive(t){var e,i,s;if(!t)return!1;if(this.config.hot_water_active_entity&&this.hass){const t=this.hass.states[this.config.hot_water_active_entity];if(t){const i=null===(e=t.state)||void 0===e?void 0:e.toLowerCase();return"on"===i||"true"===i||"heat"===i||"heating"===i||"active"===i||"running"===i}}const r=String((null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.operation_mode)||(null===(s=null==t?void 0:t.attributes)||void 0===s?void 0:s.preset_mode)||"").toLowerCase();return r.includes("high")||r.includes("boost")||r.includes("performance")||r.includes("power")||r.includes("hoch")}_getClimateActivityIndicator(t){var e;const i=String((null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.hvac_action)||(null==t?void 0:t.state)||"").toLowerCase();return"heating"===i||"heat"===i?{icon:"mdi:fire",tone:"heating"}:"cooling"===i||"cool"===i?{icon:"mdi:snowflake",tone:"cooling"}:void 0}_renderModeIcon(t,e){const i=(null==e?void 0:e.icon)||t,s=e?`bubble-icon active-mode-icon ${e.tone}`:"bubble-icon";return Z`
      <div class="target-icon-wrap">
        <ha-icon icon="${i}" class="${s}"></ha-icon>
      </div>
    `}_interpolateColor(t,e,i){const s=t=>{const e=t.replace("#","");return parseInt(e,16)},r=s(t)>>16&255,n=s(t)>>8&255,o=255&s(t),a=s(e)>>16&255,l=s(e)>>8&255,h=255&s(e);return`rgb(${Math.round(r+(a-r)*i)}, ${Math.round(n+(l-n)*i)}, ${Math.round(o+(h-o)*i)})`}_getGradient(t,e,i,s){const r=t.attributes.hvac_action||t.state,n="#607d8b",o="#455a64",a="#ff9800",l="#4caf50",h="#2196f3";if(isNaN(e))return`linear-gradient(180deg, ${n}, ${o})`;if("heating"===r){if(e<i){const t=i-e,s=t/3>=1?1:t/3;let r=0;s>.4&&(r=(s-.4)/.6);return`linear-gradient(180deg, ${this._interpolateColor(n,a,r)} 0%, ${90-70*s}%, ${this._interpolateColor(a,"#e65100",s)} 100%)`}return`linear-gradient(180deg, ${l}, 80%, ${a})`}if("cooling"===r){if(e>s){const t=e-s,i=t/3>=1?1:t/3,r=this._interpolateColor(h,"#0d47a1",i);let o=0;i>.4&&(o=(i-.4)/.6);return`linear-gradient(180deg, ${h} 0%, ${10+70*i}%, ${this._interpolateColor(n,r,o)} 100%)`}return`linear-gradient(180deg, ${h}, 20%, ${l})`}return"idle"===r?`linear-gradient(180deg, ${l} 0%, #81c784 100%)`:(t.state,`linear-gradient(180deg, ${n} 0%, ${o} 100%)`)}_getGraphCacheKey(t,e){const i=t.attributeKey?`${t.entityId}::${t.attributeKey}`:t.entityId;return e?`${i}|${e.entityId}${e.attributeKey?`::${e.attributeKey}`:""}`:i}_resolveHeatingGraphSource(t){var e;return this.config.heating_graph_entity?{entityId:this.config.heating_graph_entity}:(null===(e=this.config.sensors)||void 0===e?void 0:e.temp)?{entityId:this.config.sensors.temp}:{entityId:t,attributeKey:"current_temperature"}}_resolveHotWaterGraphSource(t){return this.config.hot_water_graph_entity?{entityId:this.config.hot_water_graph_entity}:t?{entityId:t,attributeKey:"current_temperature"}:void 0}_resolveHeatingActivitySource(t){if(!1!==this.config.show_activity_bands)return this.config.heating_active_entity?{entityId:this.config.heating_active_entity,activeValues:vt}:{entityId:t,attributeKey:"hvac_action",activeValues:["heating"]}}_resolveHotWaterActivitySource(){if(!1!==this.config.show_activity_bands&&this.config.hot_water_active_entity)return{entityId:this.config.hot_water_active_entity,activeValues:vt}}_isGraphFresh(t){const e=this._graphHistory[t];return!!e&&Date.now()-e.fetchedAt<this._graphCacheMs}_entryTime(t){return new Date(t.last_updated||t.last_changed).getTime()}async _ensureGraphHistory(t,e){var i,s;const r=this._getGraphCacheKey(t,e);if(this._isGraphFresh(r)||this._graphFetchInFlight.has(r))return;this._graphFetchInFlight.add(r);const n=new Date,o=new Date(n.getTime()-864e5),a=[t.entityId];e&&e.entityId!==t.entityId&&a.push(e.entityId);try{const l=await this.hass.callApi("GET",`history/period/${o.toISOString()}?filter_entity_id=${encodeURIComponent(a.join(","))}&end_time=${n.toISOString()}`),h=t=>(l||[]).find(e=>{var i;return(null===(i=null==e?void 0:e[0])||void 0===i?void 0:i.entity_id)===t})||[],c=h(t.entityId).map(e=>{var i;return{time:this._entryTime(e),value:parseFloat(String(t.attributeKey?null===(i=e.attributes)||void 0===i?void 0:i[t.attributeKey]:e.state))}}).filter(t=>Number.isFinite(t.value)&&Number.isFinite(t.time)),d=Math.max(72,Math.min(180,Math.round((this.getBoundingClientRect().width||300)/2.5))),p=this._resamplePoints(c,o.getTime(),n.getTime(),d),g=e&&p.length>1?this._computeActivityBands(h(e.entityId),e,o.getTime(),n.getTime(),p.length):[],u=(null===(s=null===(i=this.hass.states[t.entityId])||void 0===i?void 0:i.attributes)||void 0===s?void 0:s.unit_of_measurement)||"°C";this._graphHistory[r]={points:p,bands:g,unit:u,fetchedAt:Date.now()}}catch(e){console.error("SimpleClimate: Graph history fetch failed",t,e)}finally{this._graphFetchInFlight.delete(r),this.requestUpdate()}}_resamplePoints(t,e,i,s){if(!t.length)return[];const r=[],n=(i-e)/(s-1);let o=0;for(let i=0;i<s;i++){const s=e+i*n;for(;o+1<t.length&&t[o+1].time<=s;)o++;r.push(t[o].value)}return r}_computeActivityBands(t,e,i,s,r){const n=t=>(Math.min(Math.max(t,i),s)-i)/(s-i)*(r-1),o=t=>{var i;const s=e.attributeKey?null===(i=t.attributes)||void 0===i?void 0:i[e.attributeKey]:t.state;return e.activeValues.includes(String(null!=s?s:"").toLowerCase())},a=[];let l;for(const e of t){const t=this._entryTime(e);if(!Number.isFinite(t))continue;const i=o(e);i&&void 0===l?l=t:i||void 0===l||(a.push({start:n(l),end:n(t)}),l=void 0)}return void 0!==l&&a.push({start:n(l),end:n(s)}),a.filter(t=>t.end>t.start)}_renderGraphTile(t,e,i,s,r){const n=this._getGraphCacheKey(e,s),o=this._graphHistory[n];o&&this._isGraphFresh(n)||this._ensureGraphHistory(e,s);const a=(null==o?void 0:o.points)||[],l=a.length?a[a.length-1]:void 0,h=a.length?Math.min(...a):void 0,c=a.length?Math.max(...a):void 0;return Z`
      <div class="graph-tile ${i}" @click=${t=>this._openEntityMoreInfo(r||e.entityId,t)}>
        <div class="graph-head">
          <div class="graph-title">${t}</div>
          <div class="graph-value">${void 0!==l?`${l.toFixed(1)}${(null==o?void 0:o.unit)||"°C"}`:"--"}</div>
        </div>
        <div class="graph-body">
          ${a.length?Z`
                <canvas class="graph-canvas" data-key="${n}" data-color-class="${i}" aria-hidden="true"></canvas>
                <div class="graph-scale">
                  <span>${void 0!==c?`${c.toFixed(1)}${(null==o?void 0:o.unit)||"°C"}`:"--"}</span>
                  <span>${void 0!==h?`${h.toFixed(1)}${(null==o?void 0:o.unit)||"°C"}`:"--"}</span>
                </div>
              `:Z`<div class="graph-empty">No 24h data</div>`}
        </div>
      </div>
    `}render(){var t,e,i;if(!this.config)return Z``;if(!this.hass)return Z`<ha-card style="padding:16px;">Loading...</ha-card>`;const s=this.config.entity;let r=this.hass.states[s];r||(r={entity_id:s,state:"unavailable",attributes:{friendly_name:this.config.name||s}});let n=r.attributes.current_temperature;if((null===(t=this.config.sensors)||void 0===t?void 0:t.temp)&&this.hass.states[this.config.sensors.temp]){const t=this.hass.states[this.config.sensors.temp];isNaN(parseFloat(t.state))||(n=parseFloat(t.state))}let o=r.attributes.target_temp_low,a=r.attributes.target_temp_high;const l=r.attributes.temperature;void 0===o&&void 0!==l&&(o=l),void 0===a&&void 0!==l&&(a=l),void 0===o&&(o=20),void 0===a&&(a=24),(null===(e=this.config.sensors)||void 0===e?void 0:e.target_low)&&this.hass.states[this.config.sensors.target_low]&&(o=parseFloat(this.hass.states[this.config.sensors.target_low].state)),(null===(i=this.config.sensors)||void 0===i?void 0:i.target_high)&&this.hass.states[this.config.sensors.target_high]&&(a=parseFloat(this.hass.states[this.config.sensors.target_high].state));const h=this.config.hot_water_entity,c=h?this.hass.states[h]:void 0,d=Boolean(this.config.show_heating_graph),p=Boolean(this.config.show_hot_water_graph&&h),g=d?this._resolveHeatingGraphSource(s):void 0,u=p?this._resolveHotWaterGraphSource(h):void 0,f=this._getGradient(r,n,o,a),m=this.config.name||r.attributes.friendly_name||"Climate",_=r.attributes.hvac_action?this.hass.localize(`state_attributes.climate.hvac_action.${r.attributes.hvac_action}`):this.hass.localize(`component.climate.state._.${r.state}`)||r.state;let v="mdi:thermostat";const y=r.attributes.hvac_action||r.state;"heating"===y?v="mdi:fire":"cooling"===y?v="mdi:snowflake":"idle"===y?v="mdi:check-circle-outline":"off"===y&&(v="mdi:power-off");const $=[];g&&$.push(this._renderGraphTile("Inside 24h",g,"heating-graph",this._resolveHeatingActivitySource(s),s)),u&&$.push(this._renderGraphTile("Tank 24h",u,"tank-graph",this._resolveHotWaterActivitySource(),h));const b=2===$.length?"two-cols":"one-col";return Z`
      <ha-card @click="${this._openMoreInfo}">
        <div class="bg-layer" style="background: ${f};"></div>
        
        <div class="container">
          <div class="header">
           <div class="header-left">
             <div class="name">${m}</div>
             <div class="temp-big">
              ${void 0!==n?Z`${n}<span class="unit">°</span>`:"--"}
             </div>
           </div>
             <div class="header-right">
                <ha-icon icon="${v}" class="main-icon"></ha-icon>
                <div class="state-label">${_}</div>
             </div>
          </div>

          <div class="spacer"></div>

         <div class="metrics-row">
           <div class="footer-metrics">
               <div class="targets">
                 ${this._renderTargets(r,o,a)}
               </div>
               ${this._renderHotWater(c)}
             </div>
         </div>

          ${$.length?Z`
                <div class="graph-row ${b}">
                  ${$}
                </div>
              `:Z``}
        </div>
      </ha-card>
    `}_renderTargets(t,e,i){const s=t.state,r=this._getClimateModeIcon(t),n=this._getClimateActivityIndicator(t),o=[];return o.push(this._renderModeIcon(r,n)),"off"===s?(o.push(Z`<div class="divider"></div>`),o.push(Z`<div class="target-chip">OFF</div>`)):(o.push(Z`<div class="divider"></div>`),void 0!==e&&void 0!==i&&e!==i?o.push(Z`
              <div class="target-group">
                <div class="target-label">Min</div>
                <div class="target-val">${this._formatTemperature(e)}</div>
              </div>
              <div class="divider"></div>
              <div class="target-group">
                <div class="target-label">Max</div>
                <div class="target-val">${this._formatTemperature(i)}</div>
              </div>
            `):o.push(Z`
              <div class="target-group">
                <div class="target-label">Target</div>
                <div class="target-val">${this._formatTemperature(null!=e?e:i)}</div>
              </div>
            `)),Z`${o}`}_renderHotWater(t){if(!t)return Z``;const e=t.entity_id,i=t.attributes.temperature,s=t.attributes.current_temperature,r=this._getHotWaterModeIcon(t),n=this._isHotWaterActive(t)?{icon:"mdi:fire",tone:"heating"}:void 0;return Z`
        <div
          class="targets hot-water-bubble"
          @click=${t=>this._openEntityMoreInfo(e,t)}
        >
          ${this._renderModeIcon(r,n)}
          <div class="divider"></div>
          <div class="target-group">
            <div class="target-label">Set</div>
            <div class="target-val">${this._formatTemperature(i)}</div>
          </div>
          <div class="divider"></div>
          <div class="target-group">
            <div class="target-label">Temp</div>
            <div class="target-val">${this._formatTemperature(s)}</div>
          </div>
        </div>
      `}_openMoreInfo(){this._openEntityMoreInfo(this.config.entity)}_openEntityMoreInfo(t,e){if(null==e||e.stopPropagation(),t){const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}}static get styles(){return g`
      :host {
        display: block;
        height: 100%;
      }
      ha-card {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: var(--ha-card-border-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        cursor: pointer;
        color: white;
        container-type: inline-size; /* Enable container query units (cqi) */
      }
      .bg-layer {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: 0;
        transition: background 0.5s ease;
      }
      .container {
        position: relative;
        z-index: 1;
        padding: clamp(12px, 4%, 20px);
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 0;
        overflow: hidden;
      }
      
      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex: 0 0 auto;
        min-height: 0;
      }

      .header-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 0;
      }
      
      .temp-big {
        font-size: clamp(2rem, 10cqi, 4rem);
        font-weight: 100;
        line-height: 1;
        text-shadow: 0 1px 4px rgba(0,0,0,0.3);
        white-space: nowrap;
        letter-spacing: -1px;
        margin-top: 2px;
      }
      .temp-big .unit {
        font-size: clamp(1rem, 4cqi, 2.2rem);
        vertical-align: top;
        opacity: 0.8;
        font-weight: 200;
      }
      
      .header-right {
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex: 0 0 auto;
      }
      .main-icon {
        --mdc-icon-size: clamp(22px, 7cqi, 36px);
        width: clamp(22px, 7cqi, 36px);
        height: clamp(22px, 7cqi, 36px);
        filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
        margin-bottom: 4px;
      }
      .state-label {
        font-size: clamp(0.7rem, 3cqi, 1rem);
        font-weight: 300;
        opacity: 0.9;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .spacer {
        flex: 1;
        min-height: 0;
      }

      .metrics-row {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 0 0 auto;
        min-height: 0;
        margin-bottom: 6px;
      }
      .footer-metrics {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        flex-wrap: wrap;
      }
      
      .name {
        font-size: clamp(0.8rem, 3.5cqi, 1.1rem);
        font-weight: 500;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        opacity: 0.9;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }

      .targets {
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.2);
        border-radius: 20px;
        padding: 8px clamp(10px, 3%, 14px);
        backdrop-filter: blur(4px);
        flex: 0 0 auto;
        max-width: 100%;
        overflow: hidden;
      }
      .target-group {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        min-width: 0;
      }
      .target-icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: clamp(18px, 3.4cqi, 28px);
        height: clamp(18px, 3.4cqi, 28px);
        min-width: clamp(14px, 2.5cqi, 18px);
        flex: 0 0 auto;
        align-self: center;
      }
      .target-label {
        font-size: clamp(0.55rem, 2cqi, 0.7rem);
        text-transform: uppercase;
        opacity: 0.7;
      }
      .target-val {
        font-size: clamp(0.75rem, 2.4cqi, 0.95rem);
        font-weight: 400;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .divider {
        width: 1px;
        height: 28px;
        background: rgba(255,255,255,0.3);
        margin: 0 12px;
      }
      .bubble-icon {
        --mdc-icon-size: clamp(14px, 2.6cqi, 18px);
        width: clamp(14px, 2.6cqi, 18px);
        height: clamp(14px, 2.6cqi, 18px);
        display: block;
        line-height: 1;
        opacity: 0.95;
      }
      .bubble-icon.active-mode-icon {
        animation: pulse-glow 1.5s ease-in-out infinite;
      }
      .bubble-icon.active-mode-icon.heating {
        color: #ff9800;
        filter: drop-shadow(0 0 3px rgba(255, 152, 0, 0.6));
      }
      .bubble-icon.active-mode-icon.cooling {
        color: #81d4fa;
        filter: drop-shadow(0 0 3px rgba(33, 150, 243, 0.6));
        animation-name: pulse-glow-cool;
      }
      .hot-water-bubble {
        flex-shrink: 0;
        cursor: pointer;
      }
      @keyframes pulse-glow {
        0%, 100% {
          opacity: 1;
          filter: drop-shadow(0 0 3px rgba(255, 152, 0, 0.6));
        }
        50% {
          opacity: 0.7;
          filter: drop-shadow(0 0 6px rgba(255, 152, 0, 0.8));
        }
      }
      @keyframes pulse-glow-cool {
        0%, 100% {
          opacity: 1;
          filter: drop-shadow(0 0 3px rgba(33, 150, 243, 0.6));
        }
        50% {
          opacity: 0.7;
          filter: drop-shadow(0 0 6px rgba(129, 212, 250, 0.85));
        }
      }
      .target-chip {
        font-weight: 400;
        font-size: clamp(0.75rem, 2.4cqi, 0.95rem);
      }

      .graph-row {
        display: grid;
        gap: 8px;
        margin-top: 0;
      }
      .graph-row.one-col {
        grid-template-columns: 1fr;
      }
      .graph-row.two-cols {
        grid-template-columns: 1fr 1fr;
      }
      .graph-tile {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        padding: 9px 11px;
        backdrop-filter: blur(4px);
        min-width: 0;
      }
      .graph-head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }
      .graph-title {
        font-size: clamp(0.56rem, 1.8cqi, 0.7rem);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        opacity: 0.72;
      }
      .graph-value {
        font-size: clamp(0.7rem, 2.1cqi, 0.9rem);
        font-weight: 450;
        white-space: nowrap;
      }
      .graph-body {
        margin-top: 5px;
        height: 60px;
        position: relative;
        display: grid;
        grid-template-rows: minmax(0, 1fr) auto;
        row-gap: 4px;
        min-height: 0;
      }
      .graph-body .graph-canvas {
        width: 100%;
        height: 100%;
        min-height: 28px;
        display: block;
      }
      .graph-grid {
        stroke: rgba(255, 255, 255, 0.14);
        stroke-width: 0.6;
        shape-rendering: crispEdges;
      }
      .sparkline {
        fill: none;
        stroke-width: 1.7;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }
      .sparkline-fill {
        stroke: none;
      }
      .sparkline-dot {
        stroke: rgba(0, 0, 0, 0.35);
        stroke-width: 0.6;
      }
      .heating-graph .sparkline {
        stroke: #ffd59a;
      }
      .heating-graph .sparkline-fill {
        fill: rgba(255, 183, 77, 0.2);
      }
      .heating-graph .sparkline-dot {
        fill: #ffd59a;
      }
      .tank-graph .sparkline {
        stroke: #9ad9ff;
      }
      .tank-graph .sparkline-fill {
        fill: rgba(79, 195, 247, 0.2);
      }
      .tank-graph .sparkline-dot {
        fill: #9ad9ff;
      }
      .graph-scale {
        margin-top: 2px;
        display: flex;
        justify-content: space-between;
        font-size: clamp(0.64rem, 1.92cqi, 0.78rem);
        font-weight: 520;
        opacity: 0.76;
        line-height: 1.1;
      }
      .graph-scale span {
        white-space: nowrap;
      }
      .graph-empty {
        font-size: clamp(0.6rem, 1.8cqi, 0.72rem);
        opacity: 0.75;
        line-height: 50px;
        text-align: center;
      }

      @container (max-width: 280px) {
        .graph-row.two-cols {
          grid-template-columns: 1fr;
        }
      }
    `}}customElements.get("slick-simple-climate-card")||customElements.define("slick-simple-climate-card",$t);class bt extends ut{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Z``;return Z`
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:"climate"}}},{name:"name",label:"Name",selector:{text:{}}},{name:"hot_water_entity",label:"Hot Water Entity",selector:{entity:{domain:"water_heater"}}},{name:"hot_water_active_entity",label:"Hot Water Active Entity",selector:{entity:{}}},{name:"show_heating_graph",label:"Show Heating 24h Graph",selector:{boolean:{}}},{name:"heating_graph_entity",label:"Heating Graph Entity (optional)",selector:{entity:{}}},{name:"show_hot_water_graph",label:"Show Hot Water 24h Graph",selector:{boolean:{}}},{name:"hot_water_graph_entity",label:"Hot Water Graph Entity (optional)",selector:{entity:{}}},{name:"show_activity_bands",label:"Shade Heating / Hot Water Periods in Graphs (default on)",selector:{boolean:{}}},{name:"heating_active_entity",label:"Heating Active Entity (optional, default: hvac_action)",selector:{entity:{}}}]}
          .computeLabel=${t=>t.label}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `}}customElements.get("slick-simple-climate-card-editor")||customElements.define("slick-simple-climate-card-editor",bt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-simple-climate-card",name:"Slick Simple Climate",preview:!0,description:"A clean climate card with dynamic gradients."});export{$t as SimpleClimateCard};
//# sourceMappingURL=simple-climate-card.js.map
