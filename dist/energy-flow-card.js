import{Chart as t,LineController as e,LineElement as i,PointElement as s,LinearScale as r,CategoryScale as a,Filler as n,Tooltip as o}from"chart.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=globalThis,h=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),d=new WeakMap;let p=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(h&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=d.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(e,t))}return t}toString(){return this.cssText}};const g=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new p(i,t,c)},u=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new p("string"==typeof t?t:t+"",void 0,c))(e)})(t):t,{is:_,defineProperty:f,getOwnPropertyDescriptor:m,getOwnPropertyNames:y,getOwnPropertySymbols:b,getPrototypeOf:$}=Object,v=globalThis,w=v.trustedTypes,x=w?w.emptyScript:"",A=v.reactiveElementPolyfillSupport,E=(t,e)=>t,S={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},C=(t,e)=>!_(t,e),M={attribute:!0,type:String,converter:S,reflect:!1,useDefault:!1,hasChanged:C};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&f(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);r?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??M}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=$(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,e=[...y(t),...b(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(h)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=l.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:S).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:S;this._$Em=s;const a=r.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const a=this.constructor;if(!1===s&&(r=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??C)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==r||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[E("elementProperties")]=new Map,k[E("finalized")]=new Map,A?.({ReactiveElement:k}),(v.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T=globalThis,I=t=>t,P=T.trustedTypes,z=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,F="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+H,R=`<${O}>`,N=document,U=()=>N.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,L="[ \t\n\f\r]",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,j=/>/g,K=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,V=/"/g,Y=/^(?:script|style|textarea|title)$/i,J=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Z=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),X=new WeakMap,tt=N.createTreeWalker(N,129);function et(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(e):e}const it=(t,e)=>{const i=t.length-1,s=[];let r,a=2===e?"<svg>":3===e?"<math>":"",n=G;for(let e=0;e<i;e++){const i=t[e];let o,l,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===G?"!--"===l[1]?n=q:void 0!==l[1]?n=j:void 0!==l[2]?(Y.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=K):void 0!==l[3]&&(n=K):n===K?">"===l[0]?(n=r??G,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?K:'"'===l[3]?V:W):n===V||n===W?n=K:n===q||n===j?n=G:(n=K,r=void 0);const d=n===K&&t[e+1].startsWith("/>")?" ":"";a+=n===G?i+R:h>=0?(s.push(o),i.slice(0,h)+F+i.slice(h)+H+d):i+H+(-2===h?e:d)}return[et(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class st{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0;const n=t.length-1,o=this.parts,[l,h]=it(t,e);if(this.el=st.createElement(l,i),tt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=tt.nextNode())&&o.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(F)){const e=h[a++],i=s.getAttribute(t).split(H),n=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?lt:"?"===n[1]?ht:"@"===n[1]?ct:ot}),s.removeAttribute(t)}else t.startsWith(H)&&(o.push({type:6,index:r}),s.removeAttribute(t));if(Y.test(s.tagName)){const t=s.textContent.split(H),e=t.length-1;if(e>0){s.textContent=P?P.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),tt.nextNode(),o.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===O)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(H,t+1));)o.push({type:7,index:r}),t+=H.length-1}r++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function rt(t,e,i=t,s){if(e===Z)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const a=B(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=rt(t,r._$AS(t,e.values),r,s)),e}class at{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);tt.currentNode=s;let r=tt.nextNode(),a=0,n=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new nt(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new dt(r,this,t)),this._$AV.push(e),o=i[++n]}a!==o?.index&&(r=tt.nextNode(),a++)}return tt.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class nt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=rt(this,t,e),B(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=st.createElement(et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new at(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new st(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new nt(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=I(t).nextSibling;I(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(t,e=this,i,s){const r=this.strings;let a=!1;if(void 0===r)t=rt(this,t,e,0),a=!B(t)||t!==this._$AH&&t!==Z,a&&(this._$AH=t);else{const s=t;let n,o;for(t=r[0],n=0;n<r.length-1;n++)o=rt(this,s[i+n],e,n),o===Z&&(o=this._$AH[n]),a||=!B(o)||o!==this._$AH[n],o===Q?t=Q:t!==Q&&(t+=(o??"")+r[n+1]),this._$AH[n]=o}a&&!s&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class lt extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class ht extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class ct extends ot{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=rt(this,t,e,0)??Q)===Z)return;const i=this._$AH,s=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Q&&(i===Q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const pt=T.litHtmlPolyfillSupport;pt?.(st,nt),(T.litHtmlVersions??=[]).push("3.3.2");const gt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ut extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new nt(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}ut._$litElement$=!0,ut.finalized=!0,gt.litElementHydrateSupport?.({LitElement:ut});const _t=gt.litElementPolyfillSupport;_t?.({LitElement:ut}),(gt.litElementVersions??=[]).push("4.2.2");const ft=/^[a-z_]+\.[a-z0-9_]+$/;function mt(t,e=new Set){return"string"==typeof t?ft.test(t)&&e.add(t):Array.isArray(t)?t.forEach(t=>mt(t,e)):t&&"object"==typeof t&&Object.values(t).forEach(t=>mt(t,e)),e}const yt={id:"zeroLine",afterDraw(t){var e,i,s;if(!Boolean(null===(s=null===(i=null===(e=t.options)||void 0===e?void 0:e.plugins)||void 0===i?void 0:i.zeroLine)||void 0===s?void 0:s.enabled))return;const r=t.scales.y,a=t.chartArea;if(!r||!a)return;const n=r.getPixelForValue(0);if(!Number.isFinite(n))return;if(n<a.top||n>a.bottom)return;const o=t.ctx;o.save(),o.strokeStyle="rgba(255, 255, 255, 0.24)",o.lineWidth=1,o.beginPath(),o.moveTo(a.left,n),o.lineTo(a.right,n),o.stroke(),o.restore()}};t.register(e,i,s,r,a,n,o,yt),console.info("%c ENERGY-FLOW-CARD %c 0.2.0 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");class bt extends ut{constructor(){super(...arguments),this._graphHistory={},this._graphFetchInFlight=new Set,this._graphCacheMs=3e5,this._charts=new Map,this._chartGraphs=new Map,this._entityIds=new Set,this._solarTodayFromTotalCache={},this._solarTodayFromTotalFetchInFlight=new Set,this._solarTodayFromTotalCacheMs=3e5,this._cachedGradients=["",""],this._activeIndex=0,this._displayedGradientKey=null,this._lastValidStates=new Map,this._width=0,this._height=0}static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-energy-flow-card-editor")}static getStubConfig(){return{type:"custom:slick-energy-flow-card",title:"Energiefluss",solar_entity:"",grid_import_entity:"",grid_export_entity:"",battery_entity:"",battery_soc_entity:"",home_entity:""}}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={title:"Energiefluss",inverted_grid:!1,inverted_battery:!1,...t};if(e.inverted_grid&&"boolean"!=typeof e.inverted_grid)throw new Error("inverted_grid must be a boolean");if(e.inverted_battery&&"boolean"!=typeof e.inverted_battery)throw new Error("inverted_battery must be a boolean");this.config=e,this._entityIds=mt(this.config)}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect;this._width=t.width,this._height=t.height,this.requestUpdate()}}),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect();for(const t of this._charts.values())t.destroy();this._charts.clear(),this._chartGraphs.clear(),super.disconnectedCallback()}shouldUpdate(t){return function(t,e,i){if(1!==t.size||!t.has("hass"))return!0;const s=t.get("hass");if(!s||!e)return!0;if(s.localize!==e.localize||s.themes!==e.themes)return!0;for(const t of i)if(s.states[t]!==e.states[t])return!0;return!1}(t,this.hass,this._entityIds)}updated(){this._syncPowerCharts()}_getState(t){if(!t)return 0;const e=this._lastValidStates.get(t);if(!this.hass||!this.hass.states[t])return null!=e?e:0;const i=this.hass.states[t].state,s=parseFloat(i);return Number.isFinite(s)?(this._lastValidStates.set(t,s),s):null!=e?e:0}_formatEnergy(t){if(!Number.isFinite(t))return"--";return`${Math.abs(t)>=10?Math.round(t):Math.round(10*t)/10} kWh`}_convertEnergyToKwh(t,e){if(!Number.isFinite(t))return t;const i=String(e||"").toLowerCase();return i.includes("mwh")?1e3*t:i.includes("wh")&&!i.includes("kwh")?t/1e3:t}_getEntityEnergyInKwh(t){var e,i,s;if(!t||!(null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t]))return;const r=this.hass.states[t],a=parseFloat(String(r.state));return Number.isFinite(a)?this._convertEnergyToKwh(a,null===(s=r.attributes)||void 0===s?void 0:s.unit_of_measurement):void 0}_isSolarTodayFromTotalFresh(t){const e=this._solarTodayFromTotalCache[t];return!!e&&Date.now()-e.fetchedAt<this._solarTodayFromTotalCacheMs}async _ensureSolarTodayFromTotal(t){var e;if(!t||!this.hass||this._isSolarTodayFromTotalFresh(t)||this._solarTodayFromTotalFetchInFlight.has(t))return;this._solarTodayFromTotalFetchInFlight.add(t);const i=new Date,s=new Date(i);s.setHours(0,0,0,0);try{const r=await this.hass.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${encodeURIComponent(t)}&end_time=${i.toISOString()}`),a=(null==r?void 0:r[0])||[],n=this.hass.states[t],o=null===(e=null==n?void 0:n.attributes)||void 0===e?void 0:e.unit_of_measurement,l=a.map(t=>parseFloat(String(t.state))).filter(t=>Number.isFinite(t)).map(t=>this._convertEnergyToKwh(t,o));if(!l.length)return;let h=0,c=l[0];for(let t=1;t<l.length;t++){const e=l[t];e>=c?h+=e-c:e>=0&&(h+=e),c=e}this._solarTodayFromTotalCache[t]={value:Math.max(0,h),fetchedAt:Date.now()}}catch(e){console.error("EnergyFlow: Solar today-from-total fetch failed",t,e)}finally{this._solarTodayFromTotalFetchInFlight.delete(t),this.requestUpdate()}}_getSolarEnergySummary(t){var e,i,s,r,a;const n=this._getEntityEnergyInKwh(this.config.solar_today_energy_entity),o=this.config.solar_total_energy_entity?null===(e=this._solarTodayFromTotalCache[this.config.solar_total_energy_entity])||void 0===e?void 0:e.value:void 0;this.config.solar_total_energy_entity&&!this._isSolarTodayFromTotalFresh(this.config.solar_total_energy_entity)&&this._ensureSolarTodayFromTotal(this.config.solar_total_energy_entity);const l=null!==(i=null!=n?n:o)&&void 0!==i?i:this._getNumericAttribute(t,["today_energy","energy_today","total_energy_today","yield_today","energy_produced_today"]),h=null!==(s=this._getEntityEnergyInKwh(this.config.solar_expected_energy_entity))&&void 0!==s?s:this._getNumericAttribute(t,["forecast_today","energy_forecast_today","prognose_heute","predicted_energy_today","estimated_energy_today"]),c=null!==(r=this._getEntityEnergyInKwh(this.config.solar_remaining_energy_entity))&&void 0!==r?r:this._getNumericAttribute(t,["remaining_today","forecast_remaining","prognose_verbleibende_leistung_heute","remaining_energy_today","remaining_energy"]),d=null!=h?h:void 0!==l&&void 0!==c?l+c:void 0;if(void 0!==l||void 0!==d)return void 0!==l&&void 0!==d?`${this._formatEnergy(l)} / ${this._formatEnergy(d)}`:this._formatEnergy(null!==(a=null!=l?l:d)&&void 0!==a?a:0)}_getNumericAttribute(t,e){if(null==t?void 0:t.attributes)for(const i of e){const e=parseFloat(String(t.attributes[i]));if(Number.isFinite(e))return e}}_getGraphCacheKey(t){return`${t.entityId}${t.centered?"::centered":""}${t.invert?"::invert":""}${t.absolute?"::abs":""}${t.zeroMin?"::zmin":""}`}_isGraphFresh(t){const e=this._graphHistory[this._getGraphCacheKey(t)];return!!e&&Date.now()-e.fetchedAt<this._graphCacheMs}_downsamplePoints(t,e){if(t.length<=e)return t;const i=[],s=(t.length-1)/(e-1);for(let r=0;r<e;r++){const e=Math.round(r*s);i.push(t[e])}return i}_smoothSeries(t,e=5){if(t.length<3||e<=1)return t;const i=Math.floor(e/2);return t.map((e,s)=>{const r=Math.max(0,s-i),a=Math.min(t.length-1,s+i);let n=0,o=0;for(let e=r;e<=a;e++)n+=t[e],o+=1;return o?n/o:t[s]})}_getChartPalette(t){return t.includes("home-chart")?{line:"#63c774",fill:"rgba(99, 199, 116, 0.18)"}:t.includes("grid-import-chart")?{line:"#8e66ff",fill:"rgba(142, 102, 255, 0.18)"}:t.includes("grid-export-chart")?{line:"#5ea1ff",fill:"rgba(94, 161, 255, 0.18)"}:{line:"#f6c945",fill:"rgba(246, 201, 69, 0.20)"}}_syncPowerCharts(){const e=this.renderRoot.querySelectorAll("canvas.stat-chart-canvas[data-chart-key]"),i=new Set;e.forEach(e=>{var s;const r=e.dataset.chartKey,a=e.dataset.sourceKey,n=e.dataset.colorClass||"solar-chart",o="1"===e.dataset.centered,l="1"===e.dataset.zeroMin;if(!r||!a)return;i.add(r);const h=this._graphHistory[a];if(!(null===(s=null==h?void 0:h.points)||void 0===s?void 0:s.length))return;const c=h.points,d=c.map((t,e)=>e),p=this._getChartPalette(n),g=c.length-1,u=o&&n.includes("grid-centered-chart");let _,f;if(o){const t=Math.max(...c.map(t=>Math.abs(t)),.1);_=-t,f=t}else{const t=[...c].sort((t,e)=>t-e),e=t[Math.floor(.1*(t.length-1))],i=t[Math.floor(.9*(t.length-1))],s=Math.min(...c),r=Math.max(...c);if(_=l?0:Math.min(s,e),f=Math.max(r,i),f-_<.1){const t=(f+_)/2;_=t-.05,f=t+.05}}const m=this._charts.get(r),y=c.map(t=>t>0?t:null),b=c.map(t=>t<0?t:null);if(m&&m.canvas===e){if(this._chartGraphs.get(r)===h)return;if(this._chartGraphs.set(r,h),m.data.labels=d,u&&2===m.data.datasets.length){const t=m.data.datasets[0],e=m.data.datasets[1];t.data=y,e.data=b}else{const t=m.data.datasets[0];t.data=c,t.borderColor=p.line,t.backgroundColor=o?"rgba(0,0,0,0)":p.fill,t.tension=.58,t.cubicInterpolationMode="monotone"}return m.options.plugins.zeroLine={enabled:o},m.options.scales={x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1},min:_,max:f}},void m.update("none")}m&&m.destroy();const $=e.getContext("2d");if(!$)return;const v=new t($,{type:"line",data:{labels:d,datasets:u?[{data:y,borderColor:"#8e66ff",backgroundColor:"rgba(142, 102, 255, 0.18)",fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:0,pointHoverRadius:0,pointBackgroundColor:"#8e66ff",pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6},{data:b,borderColor:"#5ea1ff",backgroundColor:"rgba(94, 161, 255, 0.18)",fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:t=>t.dataIndex===g?1.4:0,pointHoverRadius:0,pointBackgroundColor:"#5ea1ff",pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6}]:[{data:c,borderColor:p.line,backgroundColor:o?"rgba(0,0,0,0)":p.fill,fill:!o,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:t=>t.dataIndex===g?1.4:0,pointHoverRadius:0,pointBackgroundColor:p.line,pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1},zeroLine:{enabled:o}},scales:{x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1},min:_,max:f}},elements:{line:{capBezierPoints:!0}},layout:{padding:{top:3,right:0,bottom:3,left:0}}}});this._charts.set(r,v),this._chartGraphs.set(r,h)});for(const[t,e]of this._charts.entries())i.has(t)||(e.destroy(),this._charts.delete(t),this._chartGraphs.delete(t))}async _ensureGraphHistory(t){const e=this._getGraphCacheKey(t);if(this._isGraphFresh(t)||this._graphFetchInFlight.has(e)||!this.hass)return;this._graphFetchInFlight.add(e);const i=new Date,s=new Date(i.getTime()-864e5);try{const r=await this.hass.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${encodeURIComponent(t.entityId)}&end_time=${i.toISOString()}`),a=((null==r?void 0:r[0])||[]).map(t=>parseFloat(String(t.state))).filter(t=>Number.isFinite(t)).map(e=>t.invert?-e:e).map(e=>t.absolute?Math.abs(e):e),n=Math.max(28,Math.min(64,Math.round((this._width||320)/8))),o=this._downsamplePoints(a,n),l=this._smoothSeries(o,7);this._graphHistory[e]={points:l,fetchedAt:Date.now()}}catch(e){console.error("EnergyFlow: Graph history fetch failed",t,e)}finally{this._graphFetchInFlight.delete(e),this.requestUpdate()}}_renderPowerChart(t,e="solar-chart"){if(!t)return J``;const i=this._getGraphCacheKey(t),s=this._graphHistory[i];s&&this._isGraphFresh(t)||this._ensureGraphHistory(t);if(!((null==s?void 0:s.points)||[]).length)return J``;return J`
      <div class="stat-chart ${e}">
        <canvas
          class="stat-chart-canvas"
          data-chart-key="${`${i}::${e}`}"
          data-source-key="${i}"
          data-color-class="${e}"
          data-centered="${t.centered?"1":"0"}"
          data-zero-min="${t.zeroMin?"1":"0"}"
          aria-hidden="true"
        ></canvas>
      </div>
    `}_openEntityMoreInfo(t,e){null==e||e.stopPropagation(),t&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}_handleEntityKeyDown(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._openEntityMoreInfo(e,t))}_getGridDetailEntity(t){return this.config.grid_entity?this.config.grid_entity:t>10&&this.config.grid_import_entity?this.config.grid_import_entity:t<-10&&this.config.grid_export_entity?this.config.grid_export_entity:this.config.grid_import_entity||this.config.grid_export_entity}_getBatteryDetailEntity(){return this.config.battery_entity||this.config.battery_soc_entity}_formatPower(t){const e=Math.abs(t);return e>=1e3?`${(e/1e3).toFixed(1)} kW`:`${Math.round(e)} W`}_clamp(t,e=0,i=1){return Math.min(i,Math.max(e,t))}_mixHexColors(t,e,i){const s=this._clamp(i),r=t=>{const e=t.replace("#","");return 3===e.length?e.split("").map(t=>`${t}${t}`).join(""):e},a=r(t),n=r(e),o=parseInt(a.slice(0,2),16),l=parseInt(a.slice(2,4),16),h=parseInt(a.slice(4,6),16),c=parseInt(n.slice(0,2),16),d=parseInt(n.slice(2,4),16),p=parseInt(n.slice(4,6),16);return`#${[Math.round(o+(c-o)*s),Math.round(l+(d-l)*s),Math.round(h+(p-h)*s)].map(t=>t.toString(16).padStart(2,"0")).join("")}`}_withAlpha(t,e){const i=t.replace("#",""),s=3===i.length?i.split("").map(t=>`${t}${t}`).join(""):i;return`rgba(${parseInt(s.slice(0,2),16)}, ${parseInt(s.slice(2,4),16)}, ${parseInt(s.slice(4,6),16)}, ${this._clamp(e)})`}_getLogarithmicPowerRatio(t,e=1e4,i=250){const s=Math.abs(t);if(s<=0||e<=0||i<=0)return 0;const r=Math.min(s,e),a=Math.log1p(r/i),n=Math.log1p(e/i);return n<=0?0:this._clamp(a/n)}_getSolarPowerRatio(t){return this._getLogarithmicPowerRatio(t,1e4,120)}_getNeutralEnergyColor(){return"#273844"}_buildBackgroundGradient(t,e){const i=this._getNeutralEnergyColor(),s=this._getSolarPowerRatio(t),r=this._mixHexColors(i,e,.28),a=this._mixHexColors("#314652",e,.42),n=this._mixHexColors(i,e,.62);return`${t>10?`radial-gradient(circle at 50% -8%, ${this._withAlpha("#ffffff",.26+.26*s)} 0%, ${this._withAlpha(e,.18+.2*s)} 34%, rgba(0, 0, 0, 0) 66%)`:"radial-gradient(circle at 50% -8%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 66%)"}, ${t>10?`linear-gradient(180deg, ${this._withAlpha(e,.24+.14*s)} 0%, ${this._withAlpha(e,.08)} 42%, rgba(0, 0, 0, 0) 68%)`:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 68%)"}, linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 32%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(4, 10, 14, 0.18) 100%), ${`linear-gradient(180deg, ${r} 0%, ${a} 48%, ${n} 100%)`}`}_getFlowMode(t,e,i,s){const r=Math.max(120,.06*t),a=t>e+r;if(e>t+r){return Math.max(i,0)>=Math.max(s,0)?"deficit_grid":"deficit_battery"}if(a){return Math.max(-s,0)>=Math.max(-i,0)?"surplus_battery":"surplus_grid"}return"balanced"}_getFlowModeColor(t){switch(t){case"deficit_grid":return"#8f6dff";case"deficit_battery":return"#ff9e4a";case"surplus_battery":return"#35cfc5";case"surplus_grid":return"#4f90ff";default:return"#63c774"}}_getFlowModeLabel(t){switch(t){case"deficit_grid":return"Bezug";case"deficit_battery":return"Entladung";case"surplus_battery":return"Ladung";case"surplus_grid":return"Einspeisung";default:return"Balance"}}render(){if(!this.config)return J``;const t=this.hass,e=t?this._getState(this.config.solar_entity):0;let i=0;if(this.config.grid_entity)i=t?this._getState(this.config.grid_entity):0,this.config.inverted_grid&&(i=-i);else{i=this._getState(this.config.grid_import_entity)-this._getState(this.config.grid_export_entity)}let s=this._getState(this.config.battery_entity);const r=this._getState(this.config.battery_soc_entity),a=this.config.autarky_entity?this._getState(this.config.autarky_entity):null,n=this.config.self_consumption_entity?this._getState(this.config.self_consumption_entity):null;this.config.inverted_battery&&(s=-s);let o=0;o=this.config.home_entity?this._getState(this.config.home_entity):e+i+s,o=Math.abs(o);const l=!!this.config.battery_entity&&""!==this.config.battery_entity||!!this.config.battery_soc_entity&&""!==this.config.battery_soc_entity,h=s<-10,c=s>10,d=this._getFlowMode(e,o,i,s),p=this._getFlowModeColor(d),g=e>10,u=this._buildBackgroundGradient(e,p),_=this.config.solar_entity?this.hass.states[this.config.solar_entity]:void 0,f=this._getSolarEnergySummary(_),m=this.config.solar_entity?{entityId:this.config.solar_entity}:void 0,y=this.config.grid_entity?{entityId:this.config.grid_entity,centered:!0,invert:Boolean(this.config.inverted_grid)}:void 0,b=this.config.home_entity?{entityId:this.config.home_entity,absolute:!0,zeroMin:!0}:void 0,$=this.config.solar_entity,v=this.config.home_entity,w=this._getGridDetailEntity(i),x=this._getBatteryDetailEntity(),A=p,E=A,S=`${p}:${g?"pv":"no-pv"}`;if(S!==this._displayedGradientKey){const t=(this._activeIndex+1)%2;this._cachedGradients[t]=u,this._activeIndex=t,this._displayedGradientKey=S}const C=J`<ha-icon icon="mdi:solar-power-variant"></ha-icon>`,M=J`<ha-icon icon="mdi:transmission-tower"></ha-icon>`,k=J`<ha-icon icon="mdi:home"></ha-icon>`,T=this._height>0&&(this._height<120||this._width<200),I=this._height>0&&!T&&this._height<210;let P="mdi:battery";const z=10*Math.round(r/10);P=z<=0?"mdi:battery-outline":z>=100?"mdi:battery":`mdi:battery-${z}`,h?P="mdi:battery-arrow-up":c&&(P="mdi:battery-arrow-down");const F=J`<ha-icon icon="${P}"></ha-icon>`;return J`
      <ha-card class="${T?"tiny":""} ${I?"small":""}" style="--flow-accent: ${A}; --flow-accent-soft: ${this._mixHexColors(A,"#ffffff",.28)}; box-shadow: inset 0 0 0 1px ${this._withAlpha(E,.28)};">
        <div class="bg-layer" style="background: ${this._cachedGradients[0]}; opacity: ${0===this._activeIndex?1:0}"></div>
        <div class="bg-layer" style="background: ${this._cachedGradients[1]}; opacity: ${1===this._activeIndex?1:0}"></div>
        
        <!-- Tiny Mode Battery Indicator (Top Right) -->
        ${T&&l?J`
            <div class="status-badge" style="position: absolute; top: 6px; right: 8px; z-index: 2; display: flex; align-items: center; gap: 4px;">
                <span style="color: ${r<20?"#ff3b30":"inherit"}; display: flex; width: 14px;">${F}</span>
                <span>${Math.round(r)}%</span>
            </div>
        `:""}

        <div class="content">
          ${T?"":J`
              <div class="header">
                <span class="title">${this.config.title}</span>
                <div class="badges">
                     ${null!==a?J`<span class="status-badge" title="Autarkie"><span class="badge-label">AUT</span> ${Math.round(a)}%</span>`:""}
                     ${null!==n?J`<span class="status-badge" title="Eigenverbrauch"><span class="badge-label">EIG</span> ${Math.round(n)}%</span>`:""}
                     <span class="status-badge flow-badge" style="background: ${this._withAlpha(A,.28)}; border-color: ${this._withAlpha(A,.55)}; color: white;">${this._getFlowModeLabel(d)}</span>
                     
                     <!-- Small Mode Battery Badge (Inline) -->
                     ${I&&l?J`
                        <span class="status-badge" style="display: inline-flex; align-items: center; gap: 4px; padding-left: 6px;">
                            <span style="color: ${r<20?"#ff3b30":"inherit"}; display: flex; width: 14px;">${F}</span>
                            ${Math.round(r)}%
                        </span>
                     `:""}
                </div>
              </div>
          `}

          <div class="main-stats">
            <!-- SOLAR (Left) -->
            <div class="stat-block solar ${e>10?"active":""}">
              <div class="stat-chip">
                <div class="stat-top">
                  <div
                    class="icon-circle mini solar-icon ${$?"interactive-target":""}"
                    role="${$?"button":"img"}"
                    tabindex="${$?"0":"-1"}"
                    aria-label="${$?"Solarverlauf anzeigen":"Solar"}"
                    @click=${t=>this._openEntityMoreInfo($,t)}
                    @keydown=${t=>this._handleEntityKeyDown(t,$)}
                  >${C}</div>
                  ${T?"":J`<div class="stat-label chip-label">Solar</div>`}
                </div>
                ${T||I?"":this._renderPowerChart(m,"solar-chart")}
                <div class="stat-value">${this._formatPower(e)}</div>
                ${f?J`<div class="stat-detail solar-detail">${f}</div>`:""}
              </div>
            </div>

            <!-- HOME (Center) -->
            <div class="stat-block home">
              <div class="stat-chip">
                <div class="stat-top">
                  <div
                    class="icon-circle mini home-icon ${v?"interactive-target":""}"
                    role="${v?"button":"img"}"
                    tabindex="${v?"0":"-1"}"
                    aria-label="${v?"Hausverbrauchsverlauf anzeigen":"Haus"}"
                    @click=${t=>this._openEntityMoreInfo(v,t)}
                    @keydown=${t=>this._handleEntityKeyDown(t,v)}
                  >${k}</div>
                  ${T?"":J`<div class="stat-label chip-label">Haus</div>`}
                </div>
                ${T||I?"":this._renderPowerChart(b,"home-chart")}
                <div class="stat-value big">${this._formatPower(o)}</div>
              </div>
            </div>

            <!-- GRID (Right) -->
            <div class="stat-block grid ${Math.abs(i)>10?"active":""}">
              <div class="stat-chip">
                <div class="stat-top">
                  <div
                    class="icon-circle mini grid-icon ${w?"interactive-target":""}"
                    role="${w?"button":"img"}"
                    tabindex="${w?"0":"-1"}"
                    aria-label="${w?"Netzverlauf anzeigen":"Netz"}"
                    @click=${t=>this._openEntityMoreInfo(w,t)}
                    @keydown=${t=>this._handleEntityKeyDown(t,w)}
                  >${M}</div>
                  ${T?"":J`<span class="stat-label chip-label">${i>0?"Netz (Bezug)":"Netz (Einsp.)"}</span>`}
                </div>
                ${T||I?"":this._renderPowerChart(y,"grid-centered-chart")}
                <div class="stat-value">${this._formatPower(Math.abs(i))}</div>
              </div>
            </div>
          </div>

          <!-- BATTERY (Bottom - Only Large Mode) -->
          ${!l||T||I?"":J`
            <div
                class="battery-section ${x?"interactive-target":""}"
                role="${x?"button":"group"}"
                tabindex="${x?"0":"-1"}"
                aria-label="${x?"Batterieverlauf anzeigen":"Batterie"}"
                @click=${t=>this._openEntityMoreInfo(x,t)}
                @keydown=${t=>this._handleEntityKeyDown(t,x)}
            >
                <div class="batt-info">
                   <span class="batt-icon" style="color: ${r<20?"#ff3b30":"inherit"}">${F}</span>
                   <span class="batt-pct">${Math.round(r)}%</span>
                   <span class="batt-power">${Math.abs(s)>0?this._formatPower(s):"Standby"}</span>
                   <span class="batt-state">${h?"Laden":c?"Entladen":""}</span>
                </div>
                <div class="batt-bar-bg">
                    <div class="batt-bar-fill" style="width: ${r}%; background: ${r<20?"linear-gradient(90deg, #ff453a 0%, #ff8a80 100%)":"linear-gradient(90deg, #4f95ff 0%, #8fbfff 100%)"}"></div>
                </div>
            </div>
          `}

        </div>
      </ha-card>
    `}static get styles(){return g`
      :host {
        display: block;
        height: 100%;
        isolation: isolate;
      }
      ha-card {
        height: 100%;
        border-radius: var(--ha-card-border-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        border: none;
        color: white;
        overflow: hidden;
        position: relative;
        background: #5e7682;
        container-type: size;
      }
      
      .bg-layer {
          position: absolute;
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%;
          transition: opacity 2s ease;
          z-index: 0;
      }
      
      .content {
        padding: clamp(12px, 4cqi, 20px);
        display: flex;
        flex-direction: column;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        min-height: 0;
        overflow: hidden;
      }
      
      /* Header */
      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: clamp(4px, 2cqi, 16px);
        flex: 0 0 auto;
        gap: 10px;
      }
      .title {
        font-size: clamp(0.8rem, 3.5cqi, 1.1rem);
        font-weight: 500;
        opacity: 0.95;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .badges {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 6px;
        justify-content: flex-end;
      }
      .status-badge {
        font-size: clamp(0.6rem, 2cqi, 0.8rem);
        font-weight: 500;
        text-transform: uppercase;
        padding: 4px 10px;
        background: rgba(255,255,255,0.2);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 999px;
        backdrop-filter: blur(4px);
        white-space: nowrap;
      }

      /* Main Stats Row */
      .main-stats {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: clamp(8px, 2.5cqi, 14px);
        flex-grow: 1;
        margin-bottom: clamp(4px, 2cqi, 16px);
        min-height: 0;
      }

      .stat-block {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex: 1;
        opacity: 1;
        transition: none;
        min-width: 0;
      }
      .stat-block.active, .stat-block.home {
        opacity: 1;
      }
      .stat-block.home {
        flex: 1;
      }

      .stat-chip {
        width: 100%;
        border-radius: 12px;
        padding: 8px 10px;
        background: rgba(0, 0, 0, 0.2);
        border: none;
        box-shadow: none;
        backdrop-filter: blur(4px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .stat-top {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .icon-circle {
        width: clamp(24px, 8cqi, 36px);
        height: clamp(24px, 8cqi, 36px);
        border-radius: 0;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
        box-shadow: none;
      }
      .interactive-target {
        cursor: pointer;
        transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
      }
      .interactive-target:hover {
        transform: translateY(-1px);
        filter: brightness(1.06);
      }
      .interactive-target:focus-visible {
        outline: 2px solid rgba(255,255,255,0.8);
        outline-offset: 2px;
      }
      .icon-circle svg {
        width: 20px;
        height: 20px;
      }

      .icon-circle.mini {
        width: clamp(20px, 4.5cqi, 26px);
        height: clamp(20px, 4.5cqi, 26px);
        margin-bottom: 0;
      }
      .icon-circle.mini svg {
        width: 14px;
        height: 14px;
      }
      
      .home-icon {
        width: clamp(32px, 10cqi, 48px);
        height: clamp(32px, 10cqi, 48px);
        background: transparent;
      }
      .home-icon svg { width: 28px; height: 28px; }
      .home-icon.mini {
        width: clamp(20px, 4.5cqi, 26px);
        height: clamp(20px, 4.5cqi, 26px);
      }
      .home-icon.mini svg {
        width: 14px;
        height: 14px;
      }

      .stat-value {
        font-size: clamp(0.7rem, 2.1cqi, 0.9rem);
        font-weight: 450;
        line-height: 1.1;
        text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        white-space: nowrap;
      }
      .stat-value.big {
        font-size: clamp(0.7rem, 2.1cqi, 0.9rem);
        font-weight: 450;
        margin-bottom: 0;
        letter-spacing: 0;
      }

      .stat-detail {
        font-size: clamp(0.58rem, 1.8cqi, 0.75rem);
        opacity: 0.82;
        white-space: nowrap;
        line-height: 1;
        margin-top: 2px;
      }

      .stat-chart {
        width: 100%;
        height: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .stat-chart .stat-chart-canvas {
        width: 100%;
        height: 100%;
        display: block;
      }
      
      .stat-label {
        font-size: clamp(0.56rem, 1.8cqi, 0.7rem);
        font-weight: 400;
        opacity: 0.72;
        margin-top: 4px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .chip-label {
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        font-weight: 400;
        opacity: 0.72;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Battery Section */
      .battery-section {
        background: rgba(0, 0, 0, 0.2);
        border: none;
        border-radius: 12px;
        padding: 8px 10px;
        margin-top: auto;
        flex: 0 0 auto;
        backdrop-filter: blur(4px);
      }
      .batt-info {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
        font-size: 0.9rem;
        font-weight: 400;
      }
      .batt-icon svg { width: 16px; height: 16px; opacity: 0.8; }
      .batt-power {
        margin-left: auto;
        font-weight: 300;
        opacity: 0.8;
        font-size: 0.85rem;
      }
      .batt-state {
        font-size: clamp(0.6rem, 2cqi, 0.75rem);
        opacity: 0.6;
        text-transform: uppercase;
        font-weight: 500;
      }

      .batt-bar-bg {
        width: 100%;
        height: 6px;
        background: rgba(255,255,255,0.1);
        border-radius: 3px;
        overflow: hidden;
      }
      .batt-bar-fill {
        height: 100%;
        background-color: white;
        border-radius: 3px;
        transition: width 0.5s ease;
      }

      /* Tiny Mode */
      ha-card.tiny .content {
        padding: 8px;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      
      ha-card.tiny .main-stats {
        margin: 0;
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        gap: 4px;
      }
      
      ha-card.tiny .stat-block {
          flex: 0 1 auto;
          margin: 0;
          opacity: 0.9;
          transform: none;
          display: flex;
          flex-direction: row;
          align-items: center;
      }

      ha-card.tiny .stat-chip {
        padding: 6px 8px;
        border-radius: 10px;
      }
      
      /* Specific override for Tiny Home to not be special */
      ha-card.tiny .stat-block.home {
        transform: none;
        flex: 0 1 auto;
      }

      ha-card.tiny .icon-circle {
        width: 22px; height: 22px;
        margin-bottom: 2px;
        background: transparent;
      }
      ha-card.tiny .icon-circle svg { width: 14px; height: 14px; }
      
      ha-card.tiny .stat-value {
        font-size: 0.85rem; 
        font-weight: 600;
        line-height: 1;
      }
      ha-card.tiny .stat-value.big {
        font-size: 0.9rem;
        margin: 0;
      }

      /* Small Mode */
      ha-card.small .content { 
        padding: 8px 12px; 
      }
      ha-card.small .header { margin-bottom: 4px; }
      ha-card.small .title { font-size: 0.95rem; }
      
      ha-card.small .main-stats {
        justify-content: space-between;
        align-items: stretch;
        margin-bottom: 0;
        flex-grow: 1;
        gap: 8px;
      }
      
      ha-card.small .stat-block {
         transform: none !important;
         opacity: 0.9;
         display: flex;
        flex-direction: row;
        align-items: stretch;
      }
      
      ha-card.small .stat-block.home {
         flex: 1;
         transform: none; /* Flatten hierarchy */
      }
      
      /* Equalize icons in Small Mode */
      ha-card.small .icon-circle { width: 32px; height: 32px; margin-bottom: 4px; }
      ha-card.small .home-icon { width: 32px; height: 32px; } 
      ha-card.small .icon-circle svg { width: 18px; height: 18px; }
      ha-card.small .icon-circle.mini { width: 20px; height: 20px; margin-bottom: 0; }
      ha-card.small .icon-circle.mini svg { width: 13px; height: 13px; }
      ha-card.small .home-icon.mini { width: 20px; height: 20px; }
      ha-card.small .home-icon.mini svg { width: 13px; height: 13px; }
      
      ha-card.small .stat-value { font-size: 0.9rem; }
      ha-card.small .stat-value.big { font-size: 0.9rem; margin-bottom: 0; }
      ha-card.small .stat-label { font-size: 0.75rem; margin-top: 2px; }
      ha-card.small .stat-chart { display: none; }
      ha-card.small .stat-detail { font-size: 0.65rem; }
      ha-card.small .stat-chip { border-radius: 12px; padding: 8px; }
    `}}customElements.get("slick-energy-flow-card")||customElements.define("slick-energy-flow-card",bt);class $t extends ut{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config,...t.detail.value}},bubbles:!0,composed:!0}))}render(){if(!this.hass||!this._config)return J``;return J`<ha-form .hass=${this.hass} .data=${this._config} .schema=${[{name:"title",label:"Titel",selector:{text:{}}},{name:"solar_entity",label:"Solar Leistung",selector:{entity:{domain:"sensor"}}},{name:"solar_today_energy_entity",label:"Solar Erzeugt heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"solar_total_energy_entity",label:"Solar Gesamtzähler (Opt, seit 0 Uhr berechnen)",selector:{entity:{domain:"sensor"}}},{name:"solar_expected_energy_entity",label:"Solar Erwartet heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"solar_remaining_energy_entity",label:"Solar Rest heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"grid_entity",label:"Netz Leistung",selector:{entity:{domain:"sensor"}}},{name:"battery_entity",label:"Batterie Leistung (Opt)",selector:{entity:{domain:"sensor"}}},{name:"battery_soc_entity",label:"Batterie Stand % (Opt)",selector:{entity:{domain:"sensor"}}},{name:"home_entity",label:"Haus Verbrauch (Opt)",selector:{entity:{domain:"sensor"}}},{name:"inverted_grid",label:"Invertiere Grid (+ ist Export)",selector:{boolean:{}}},{name:"inverted_battery",label:"Invertiere Batt (+ ist Laden)",selector:{boolean:{}}}]} .computeLabel=${t=>t.label} @value-changed=${this._valueChanged}></ha-form>`}}customElements.get("slick-energy-flow-card-editor")||customElements.define("slick-energy-flow-card-editor",$t),window.customCards=window.customCards||[],window.customCards.push({type:"slick-energy-flow-card",name:"Slick Energy Flow",preview:!0,description:"Modern energy flow visualization."});export{bt as EnergyFlowCard,$t as EnergyFlowCardEditor};
//# sourceMappingURL=energy-flow-card.js.map
