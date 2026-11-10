import{Chart as t,LineController as e,LineElement as i,PointElement as n,LinearScale as s,CategoryScale as a,Filler as r,Tooltip as o}from"chart.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=globalThis,c=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),h=new WeakMap;let p=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(c&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=h.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&h.set(e,t))}return t}toString(){return this.cssText}};const u=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new p(i,t,d)},g=c?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new p("string"==typeof t?t:t+"",void 0,d))(e)})(t):t,{is:m,defineProperty:f,getOwnPropertyDescriptor:_,getOwnPropertyNames:b,getOwnPropertySymbols:v,getPrototypeOf:y}=Object,x=globalThis,w=x.trustedTypes,$=w?w.emptyScript:"",k=x.reactiveElementPolyfillSupport,S=(t,e)=>t,C={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},E=(t,e)=>!m(t,e),M={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:E};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&f(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=_(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);s?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??M}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,e=[...b(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(g(t))}else void 0!==t&&e.push(g(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(c)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=l.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:C).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:C;this._$Em=n;const a=s.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(void 0!==t){const a=this.constructor;if(!1===n&&(s=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??E)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==s||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[S("elementProperties")]=new Map,A[S("finalized")]=new Map,k?.({ReactiveElement:A}),(x.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T=globalThis,I=t=>t,z=T.trustedTypes,R=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+D,H=`<${O}>`,N=document,F=()=>N.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,q=Array.isArray,B="[ \t\n\f\r]",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,j=/>/g,U=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,K=/"/g,X=/^(?:script|style|textarea|title)$/i,Y=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Z=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Q=new WeakMap,tt=N.createTreeWalker(N,129);function et(t,e){if(!q(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(e):e}const it=(t,e)=>{const i=t.length-1,n=[];let s,a=2===e?"<svg>":3===e?"<math>":"",r=G;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===G?"!--"===l[1]?r=W:void 0!==l[1]?r=j:void 0!==l[2]?(X.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=s??G,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?U:'"'===l[3]?K:V):r===K||r===V?r=U:r===W||r===j?r=G:(r=U,s=void 0);const h=r===U&&t[e+1].startsWith("/>")?" ":"";a+=r===G?i+H:c>=0?(n.push(o),i.slice(0,c)+P+i.slice(c)+D+h):i+D+(-2===c?e:h)}return[et(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class nt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,a=0;const r=t.length-1,o=this.parts,[l,c]=it(t,e);if(this.el=nt.createElement(l,i),tt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=tt.nextNode())&&o.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(P)){const e=c[a++],i=n.getAttribute(t).split(D),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?lt:"?"===r[1]?ct:"@"===r[1]?dt:ot}),n.removeAttribute(t)}else t.startsWith(D)&&(o.push({type:6,index:s}),n.removeAttribute(t));if(X.test(n.tagName)){const t=n.textContent.split(D),e=t.length-1;if(e>0){n.textContent=z?z.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],F()),tt.nextNode(),o.push({type:2,index:++s});n.append(t[e],F())}}}else if(8===n.nodeType)if(n.data===O)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(D,t+1));)o.push({type:7,index:s}),t+=D.length-1}s++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function st(t,e,i=t,n){if(e===Z)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const a=L(e)?void 0:e._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=st(t,s._$AS(t,e.values),s,n)),e}class at{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??N).importNode(e,!0);tt.currentNode=n;let s=tt.nextNode(),a=0,r=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new rt(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new ht(s,this,t)),this._$AV.push(e),o=i[++r]}a!==o?.index&&(s=tt.nextNode(),a++)}return tt.currentNode=N,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=st(this,t,e),L(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>q(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=nt.createElement(et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new at(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new nt(t)),e}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new rt(this.O(F()),this.O(F()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=I(t).nextSibling;I(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,n){const s=this.strings;let a=!1;if(void 0===s)t=st(this,t,e,0),a=!L(t)||t!==this._$AH&&t!==Z,a&&(this._$AH=t);else{const n=t;let r,o;for(t=s[0],r=0;r<s.length-1;r++)o=st(this,n[i+r],e,r),o===Z&&(o=this._$AH[r]),a||=!L(o)||o!==this._$AH[r],o===J?t=J:t!==J&&(t+=(o??"")+s[r+1]),this._$AH[r]=o}a&&!n&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class lt extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class ct extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class dt extends ot{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=st(this,t,e,0)??J)===Z)return;const i=this._$AH,n=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==J&&(i===J||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const pt=T.litHtmlPolyfillSupport;pt?.(nt,rt),(T.litHtmlVersions??=[]).push("3.3.2");const ut=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new rt(e.insertBefore(F(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}gt._$litElement$=!0,gt.finalized=!0,ut.litElementHydrateSupport?.({LitElement:gt});const mt=ut.litElementPolyfillSupport;mt?.({LitElement:gt}),(ut.litElementVersions??=[]).push("4.2.2");console.info("%c WIND-COMPASS-CARD %c 0.2.0 ","color: white; background: #607d8b; font-weight: 700;","color: #607d8b; background: white; font-weight: 700;");class ft extends HTMLElement{constructor(){super(),this._bucketSize=5,this._bucketCount=72,this._warnMultiplier=.9,this._historyData=[],this._lastHistoryFetch=0,this._avgDeg=0,this._instDeg=0,this._currentUnit="",this._maxSpeed=30,this._currentGust=0,this._limitRaffstore=0,this._limitRollo=0,this.attachShadow({mode:"open"})}static getConfigElement(){return document.createElement("slick-wind-compass-editor")}static getStubConfig(){return{type:"custom:slick-wind-compass-card",direction_entity:"",speed_entity:"",max_speed:60}}set hass(t){this._hass=t,this._updateCard()}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={bucket_size:5,warn_multiplier:.9,max_speed:30,simple_mode:!1,...t};if(e.bucket_size&&"number"!=typeof e.bucket_size)throw new Error("bucket_size must be a number");if(e.max_speed&&"number"!=typeof e.max_speed)throw new Error("max_speed must be a number");this.config=e,this.config.simple_mode?this.classList.add("simple-mode"):this.classList.remove("simple-mode"),this._recalcBuckets()}_recalcBuckets(){let t=void 0!==this.config.bucket_size?Number(this.config.bucket_size):5;for((isNaN(t)||t<1)&&(t=5),t>90&&(t=90);360%t!=0;)t++;this._bucketSize!==t&&(this._bucketSize=t,this._bucketCount=Math.floor(360/this._bucketSize),this._historyData=new Array(this._bucketCount).fill(null).map(()=>({duration:0,totalSpeed:0})),this._lastHistoryFetch=0)}connectedCallback(){this.shadowRoot||this.attachShadow({mode:"open"}),!this.shadowRoot||this.shadowRoot.innerHTML&&""!==this.shadowRoot.innerHTML.trim()||this._render(),this.shadowRoot&&(this.content=this.shadowRoot.querySelector(".container"),this.content&&(this._resizeObserver=new ResizeObserver(()=>{this._updateDimensions(),this._updateVisuals()}),this._resizeObserver.observe(this.content)))}disconnectedCallback(){var t;null===(t=this._resizeObserver)||void 0===t||t.disconnect()}_render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n      <style>\n        :host {\n          display: block;\n          width: 100%;\n          height: 100%;\n          font-weight: 200;\n          background: var(--ha-card-background, var(--card-background-color, white));\n          border-radius: var(--ha-card-border-radius, 12px);\n          box-shadow: var(--ha-card-box-shadow, none);\n          overflow: hidden;\n          box-sizing: border-box;\n          position: relative;\n          isolation: isolate;\n        }\n        \n        ha-card {\n          display: none;\n        }\n\n        .container {\n          padding: clamp(12px, 4%, 24px);\n          display: flex;\n          flex-direction: column;\n          gap: clamp(8px, 3%, 20px);\n          height: 100%;\n          box-sizing: border-box;\n          overflow: hidden;\n        }\n\n        /* --- COMPASS AREA --- */\n        .compass-container {\n          position: relative;\n          width: 100%;\n          flex: 1 1 auto;\n          min-height: 40px;\n          background: transparent;\n          border-radius: 12px;\n          \n          /* Apple Fade-Out Effect Left/Right */\n          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);\n          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);\n          \n          touch-action: pan-y;\n          isolation: isolate; \n          z-index: 0;\n        }\n\n        .compass-tape {\n          position: absolute;\n          top: 0;\n          left: 50%; /* Zentriert */\n          height: 100%;\n          display: flex;\n          align-items: center;\n          /* Smooth Animation für das Band */\n          transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          will-change: transform;\n          z-index: 1;\n        }\n\n        /* Historien-Balken */\n        .hist-bar {\n          position: absolute;\n          bottom: 0;\n          border-radius: 4px;\n          pointer-events: none;\n          transform: none; \n          border: none;\n          box-sizing: border-box; \n          background: none; \n          transition: height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          overflow: hidden;\n          opacity: 0.9;\n        }\n\n        .hist-fill {\n          position: absolute;\n          top: 0; left: 0; right: 0; bottom: 0;\n          transition: opacity 0.3s ease, background 0.3s ease;\n        }\n\n        .compass-tick {\n          position: absolute;\n          top: 42px; /* Adjusted to sit below labels */\n          width: 1px;\n          border-radius: 0.5px;\n          background: var(--primary-text-color);\n          opacity: 0.2;\n          z-index: 2;\n        }\n\n        .compass-label {\n          position: absolute;\n          top: 12px;\n          transform: translateX(-50%);\n          color: var(--primary-text-color);\n          font-weight: 200;\n          font-size: clamp(14px, 4cqmax, 20px);\n          letter-spacing: 0.5px;\n          z-index: 3;\n          line-height: 1;\n        }\n\n        /* FLOATING MARKER (Modern Arrow) */\n        .compass-marker {\n          position: absolute;\n          left: 50%; \n          top: 0px; \n          width: 2px;\n          height: 12px;\n          background: var(--error-color, #ff3b30);\n          border-radius: 1px;\n          \n          transform: translateX(-50%); \n          z-index: 20; \n          filter: drop-shadow(0 0 4px rgba(255, 59, 48, 0.4));\n          transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          will-change: transform;\n        }\n        \n        /* Arrowhead */\n        .compass-marker::after {\n          content: \'\';\n          position: absolute;\n          bottom: -5px;\n          left: 50%;\n          transform: translateX(-50%);\n          width: 0; \n          height: 0; \n          border-left: 5px solid transparent;\n          border-right: 5px solid transparent;\n          border-top: 6px solid var(--error-color, #ff3b30);\n        }\n\n        /* CENTER DOT - Zeigt Durchschnitt (Mitte des Fensters) */\n        .compass-center-dot {\n           position: absolute;\n           left: 50%;\n           bottom: 0;\n           width: 2px; \n           height: 12px; \n           background: var(--primary-text-color);\n           border-radius: 2px;\n           transform: translateX(-50%);\n           opacity: 0.3;\n           z-index: 4;\n        }\n\n        /* --- SPEED BAR AREA --- */\n        .speed-container {\n          display: flex;\n          flex-direction: column;\n          gap: 8px;\n          flex: 0 0 auto;\n        }\n\n        .speed-bar-bg {\n          position: relative;\n          width: 100%;\n          height: 12px;\n          background: var(--secondary-background-color, rgba(0,0,0,0.05));\n          border-radius: 6px;\n          overflow: visible; \n          isolation: isolate;\n        }\n\n        .speed-bar-gust {\n          position: absolute;\n          top: 0; left: 0; bottom: 0;\n          background: var(--accent-color, var(--primary-color, #2196F3));\n          opacity: 0.2;\n          width: 0%;\n          transition: width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          z-index: 1;\n          border-radius: 6px;\n        }\n\n        .speed-bar-fill {\n          position: absolute;\n          top: 0; left: 0; bottom: 0;\n          background: var(--accent-color, var(--primary-color, #2196F3));\n          width: 0%;\n          transition: width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          box-shadow: 0 0 10px var(--accent-color, transparent); \n          z-index: 2;\n          border-radius: 6px;\n        }\n\n        .limit-marker {\n          position: absolute;\n          top: -2px; \n          bottom: -2px; \n          width: 2px;\n          background-color: var(--primary-text-color);\n          z-index: 10;\n          box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n          border-radius: 1px;\n          display: none; \n          pointer-events: none;\n          opacity: 0.8;\n        }\n\n        .speed-text {\n          display: flex;\n          justify-content: flex-end;\n          align-items: baseline;\n          gap: 4px;\n          color: var(--primary-text-color);\n          text-shadow: var(--text-shadow, none);\n        }\n\n        .speed-text .value {\n          font-size: clamp(1.8rem, 10cqmax, 4rem);\n          font-weight: 100;\n          letter-spacing: -1px;\n          line-height: 1;\n        }\n\n        .speed-text .unit {\n          font-size: clamp(0.85rem, 3cqmax, 1.25rem);\n          color: var(--secondary-text-color);\n          font-weight: 200;\n        }\n\n        .speed-text .gust-info {\n          margin-left: 8px;\n          font-size: clamp(10px, 3cqmax, 14px);\n          color: var(--secondary-text-color);\n          opacity: 0.8;\n        }\n\n        /* --- SIMPLE MODE --- */\n        :host(.simple-mode) {\n          /* Restore card background and shadow to match other cards */\n          overflow: hidden; \n        }\n\n        :host(.simple-mode) .container {\n           padding: 0;\n           padding-top: 12px;\n           height: 100%;\n           position: relative;\n        }\n\n        :host(.simple-mode) .compass-container {\n           flex: 1 1 auto;\n           min-height: 30px;\n           margin-top: 50px;\n           -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);\n           mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);\n        }\n\n        :host(.simple-mode) .compass-tick {\n           top: 42px; /* Pushed down */\n        }\n        \n        :host(.simple-mode) .compass-label {\n           top: 20px; /* Pushed down to clear marker */\n           font-size: clamp(12px, 3cqmax, 16px);\n        }\n\n        :host(.simple-mode) .compass-marker {\n           top: 0px; /* At the top edge of compass container */\n        }\n\n        :host(.simple-mode) .speed-container {\n           position: absolute;\n           top: 16px;\n           left: 16px;\n           width: auto;\n           height: auto;\n           display: block;\n           z-index: 10;\n        }\n        \n        :host(.simple-mode) .speed-bar-bg {\n           display: none;\n        }\n\n        :host(.simple-mode) .speed-text {\n           display: flex;\n           flex-direction: row;\n           align-items: baseline;\n           justify-content: flex-start;\n           color: var(--primary-text-color);\n           text-shadow: 0 1px 4px rgba(0,0,0,0.5); /* Always shadow for readability over possible map/picture */\n        }\n\n        :host(.simple-mode) .speed-text .value {\n           font-size: 2.8rem; /* Smaller than full mode */\n        }\n        \n        :host(.simple-mode) .speed-text .gust-info {\n           margin-left: 6px;\n           font-size: clamp(10px, 3cqmax, 14px);\n           opacity: 0.9;\n        }\n\n        /* ALERT MODE (Red Background) */\n        :host(.simple-mode.alert-state) {\n           background: linear-gradient(135deg, rgba(255,59,48,0.8), rgba(200,30,30,0.9)) !important;\n           border-radius: var(--ha-card-border-radius, 12px);\n           box-shadow: 0 4px 20px rgba(255, 59, 48, 0.4);\n        }\n        \n        :host(.simple-mode.alert-state) .speed-text,\n        :host(.simple-mode.alert-state) .compass-label {\n           color: white !important;\n        }\n        \n        :host(.simple-mode.alert-state) .compass-tick {\n           background: white !important;\n           opacity: 0.4;\n        }\n      </style>\n\n      <div class="container">\n        <div class="compass-container" id="container">\n          <div class="compass-center-dot"></div>\n          <div class="compass-marker" id="marker"></div>\n          <div class="compass-tape" id="tape"></div>\n        </div>\n\n        <div class="speed-container">\n          <div class="speed-bar-bg">\n            <div class="speed-bar-gust" id="gust-bar"></div>\n            <div class="speed-bar-fill" id="speed-bar"></div>\n            <div class="limit-marker" id="limit-raffstore" title="Raffstore Limit"></div>\n            <div class="limit-marker" id="limit-rollo" title="Rollo Limit"></div>\n          </div>\n          <div class="speed-text" id="speed-text">--</div>\n        </div>\n      </div>\n    ')}_updateCard(){if(!this.config)return;const t=this.config.direction_entity,e=this.config.instant_direction_entity||t,i=this.config.speed_entity,n=this.config.gust_entity,s=this.config.raffstore_limit_entity,a=this.config.rollo_limit_entity;this._maxSpeed=this.config.max_speed||30,this._warnMultiplier=void 0!==this.config.warn_multiplier?Number(this.config.warn_multiplier):.9,this._recalcBuckets();const r=this._hass,o=null==r?void 0:r.states[t],l=null==r?void 0:r.states[e],c=null==r?void 0:r.states[i],d=n&&r?r.states[n]:null;o&&!isNaN(parseFloat(o.state))&&(this._avgDeg=parseFloat(o.state)),l&&!isNaN(parseFloat(l.state))?this._instDeg=parseFloat(l.state):this._instDeg=this._avgDeg,c&&!isNaN(parseFloat(c.state))?(this._currentSpeed=parseFloat(c.state),this._currentUnit=c.attributes.unit_of_measurement||"km/h"):(this._currentSpeed=0,this._currentUnit="km/h"),d&&!isNaN(parseFloat(d.state))?this._currentGust=parseFloat(d.state):this._currentGust=0,this._limitRaffstore=0,this._limitRollo=0,r&&s&&r.states[s]&&(this._limitRaffstore=parseFloat(r.states[s].state)||0),r&&a&&r.states[a]&&(this._limitRollo=parseFloat(r.states[a].state)||0);const h=Date.now();h-this._lastHistoryFetch>3e5&&r&&(this._lastHistoryFetch=h,this._fetchHistory(t,i)),this._updateVisuals()}async _fetchHistory(t,e){if(!this._hass)return;const i=new Date,n=new Date(i.getTime()-864e5);try{const s=[t,e].join(","),a=await this._hass.callApi("GET",`history/period/${n.toISOString()}?filter_entity_id=${s}&end_time=${i.toISOString()}&minimal_response`);if(a&&2===a.length){const i=a.find(e=>e.length>0&&e[0].entity_id===t),n=a.find(t=>t.length>0&&t[0].entity_id===e);i&&n&&this._processHistoryData(i,n)}}catch(t){console.error("WindCompass: History fetch failed",t)}}_processHistoryData(t,e){const i=new Array(this._bucketCount).fill(null).map(()=>({duration:0,totalSpeed:0}));let n=0;for(let s=0;s<t.length-1;s++){const a=parseFloat(t[s].state);if(isNaN(a))continue;const r=new Date(t[s].last_changed).getTime(),o=(new Date(t[s+1].last_changed).getTime()-r)/1e3/60;for(;n<e.length-1&&new Date(e[n+1].last_changed).getTime()<=r;)n++;const l=parseFloat(e[n].state)||0,c=Math.floor(a%360/360*this._bucketCount);c>=0&&c<this._bucketCount&&(i[c].duration+=o,i[c].totalSpeed+=l*o)}this._historyData=i,this._updateDimensions(),this._updateVisuals()}_updateDimensions(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector("#container");if(!t)return;const e=t.offsetWidth;0!==e&&(this._pxPerDeg=e/360,this._buildTape())}_buildTape(){if(!this.shadowRoot||!this._pxPerDeg)return;const t=this.shadowRoot.querySelector("#tape");if(!t)return;t.innerHTML="";let e=0,i=0;this._historyData.forEach(t=>{if(t.duration>0){t.duration>e&&(e=t.duration);const n=t.totalSpeed/t.duration;n>i&&(i=n)}}),0===e&&(e=1),0===i&&(i=1);const n=[this._limitRaffstore,this._limitRollo].filter(t=>t>0),s=n.length>0?Math.min(...n):null,a=s?s*this._warnMultiplier:null,r=this._bucketSize*this._pxPerDeg,o=Math.max(1,r-2);for(let n=-180;n<=540;n+=this._bucketSize){const s=n*this._pxPerDeg,r=(n%360+360)%360,l=Math.floor(r/this._bucketSize);if(l>=0&&l<this._bucketCount){const n=this._historyData[l];if(n&&n.duration>0){const r=n.totalSpeed/n.duration,l=null!==a&&r>=a,c=l?"var(--error-color, #ff3b30)":"var(--accent-color, var(--primary-color))",d=document.createElement("div");d.className="hist-bar";const h=r/i*100;d.style.height=.6*h+"%",d.style.left=`${s+1}px`,d.style.width=`${o}px`;const p=document.createElement("div");if(p.className="hist-fill",p.style.background=c,l)p.style.opacity="1.0";else{const t=n.duration/e;p.style.opacity=(.4+.6*t).toString()}d.appendChild(p),t.appendChild(d)}}let c=!1;const d=document.createElement("div");if(d.className="compass-tick",d.style.left=`${s}px`,r%90==0){const e=document.createElement("div");e.className="compass-label";const i={0:"N",90:"O",180:"S",270:"W"};e.textContent=i[r]||"",e.style.left=`${s}px`,t.appendChild(e),c=!1}else r%45==0?(d.style.height="10px",d.style.opacity="0.4",c=!0):r%15==0&&(d.style.height="6px",d.style.opacity="0.2",c=!0);c&&t.appendChild(d)}}_interpolateColor(t,e,i){const n=t=>{const e=t.replace("#","");return parseInt(3===e.length?e.split("").map(t=>t+t).join(""):e,16)},s=n(t)>>16&255,a=n(t)>>8&255,r=255&n(t),o=n(e)>>16&255,l=n(e)>>8&255,c=255&n(e);return`rgb(${Math.round(s+(o-s)*i)}, ${Math.round(a+(l-a)*i)}, ${Math.round(r+(c-r)*i)})`}_updateVisuals(){var t,e;if(!this.shadowRoot||void 0===this._avgDeg||!this._pxPerDeg)return;if(!this.config)return;const i=this.shadowRoot.querySelector("#tape");i&&(i.style.transform=`translateX(-${this._avgDeg*this._pxPerDeg}px)`);const n=this.shadowRoot.querySelector("#marker");if(n&&void 0!==this._instDeg){const t=(this._instDeg-this._avgDeg+540)%360-180;n.style.transform=`translateX(calc(-50% + ${t*this._pxPerDeg}px))`}const s=this.shadowRoot.querySelector("#speed-bar"),a=this.shadowRoot.querySelector("#gust-bar"),r=this.shadowRoot.querySelector("#speed-text"),o=this.shadowRoot.querySelector("#limit-raffstore"),l=this.shadowRoot.querySelector("#limit-rollo");if(void 0!==this._currentSpeed){if(this.config.simple_mode){const t=[this._limitRaffstore,this._limitRollo].filter(t=>t>0),e=t.length>0?Math.min(...t):null;if(e&&this._currentSpeed>=e?this.classList.add("alert-state"):this.classList.remove("alert-state"),r){let t=`\n                <span class="value">${Math.round(this._currentSpeed||0)}</span>\n                <span class="unit">${this._currentUnit}</span>\n             `;this._currentGust>0&&(t+=`<span class="gust-info">(${Math.round(this._currentGust)})</span>`),r.innerHTML=t}}let i=this._currentSpeed/this._maxSpeed*100;i>100&&(i=100),!this.config.simple_mode&&s&&(s.style.width=`${i}%`);const n=!0===(null===(e=null===(t=this._hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode),c=i/100;let d,h;n?(d="#1c1c1e",h="#3a3a3c"):(d="#e0e0e0",h="#ffffff");const p="#37474f",u="#607d8b",g=this._interpolateColor(d,p,c),m=this._interpolateColor(h,u,c);this.style.background=`linear-gradient(180deg, ${g} 0%, ${m} 100%)`,n||c>.5?(this.style.color="white",this.style.setProperty("--primary-text-color","white"),this.style.setProperty("--secondary-text-color","rgba(255,255,255,0.7)"),this.style.setProperty("--secondary-background-color","rgba(255,255,255,0.15)"),this.style.setProperty("--ha-card-box-shadow","none"),this.style.setProperty("--text-shadow","0 1px 4px rgba(0,0,0,0.5)")):(this.style.color="#212121",this.style.setProperty("--primary-text-color","#212121"),this.style.setProperty("--secondary-text-color","#757575"),this.style.setProperty("--secondary-background-color","rgba(0,0,0,0.1)"),this.style.removeProperty("--text-shadow"));let f=this._currentGust/this._maxSpeed*100;if(f>100&&(f=100),a&&(a.style.width=`${f}%`),!this.config.simple_mode&&r){let t=`\n                <span class="value">${Math.round(this._currentSpeed||0)}</span>\n                <span class="unit">${this._currentUnit}</span>\n            `;this._currentGust>0&&(t+=`<span class="gust-info">(Max ${Math.round(this._currentGust)})</span>`),r.innerHTML=t}if(o)if(this._limitRaffstore>0){let t=this._limitRaffstore/this._maxSpeed*100;t>100&&(t=100),o.style.left=`${t}%`,o.style.display="block"}else o.style.display="none";if(l)if(this._limitRollo>0){let t=this._limitRollo/this._maxSpeed*100;t>100&&(t=100),l.style.left=`${t}%`,l.style.display="block"}else l.style.display="none"}}getCardSize(){return 3}}customElements.get("slick-wind-compass-card")||customElements.define("slick-wind-compass-card",ft);class _t extends gt{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Y``;return Y`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"direction_entity",label:"Direction Entity",selector:{entity:{domain:"sensor"}}},{name:"speed_entity",label:"Speed Entity",selector:{entity:{domain:"sensor"}}},{name:"gust_entity",label:"Gust Entity (Optional)",selector:{entity:{domain:"sensor"}}},{name:"instant_direction_entity",label:"Instant Dir (opt)",selector:{entity:{domain:"sensor"}}},{name:"max_speed",label:"Max Speed",selector:{number:{mode:"box",min:0}}},{name:"simple_mode",label:"Simple Mode",selector:{boolean:{}}},{name:"raffstore_limit_entity",label:"Raffstore Limit (opt)",selector:{entity:{domain:"sensor"}}},{name:"rollo_limit_entity",label:"Rollo Limit (opt)",selector:{entity:{domain:"sensor"}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-wind-compass-editor")||customElements.define("slick-wind-compass-editor",_t),window.customCards=window.customCards||[],window.customCards.push({type:"slick-wind-compass-card",name:"Slick Wind Compass",preview:!0,description:"Apple-style wind direction compass with speed indicator"});console.info("%c MINI-WEATHER-CARD %c 0.2.0 ","color: white; background: #2980b9; font-weight: 700;","color: #2980b9; background: white; font-weight: 700;");class bt extends gt{_getCurrentTemperatureValue(){var t,e;const i=null===(t=this.config)||void 0===t?void 0:t.entity;if(!this.hass||!i)return;const n=this.hass.states[i];let s=null===(e=null==n?void 0:n.attributes)||void 0===e?void 0:e.temperature;if(this.config.temp_sensor){const t=this.hass.states[this.config.temp_sensor];t&&(s=t.state)}return this._toOptionalNumber(s)}_getForecastBounds(t){var e,i;let n=1/0,s=-1/0;for(const a of t){const t=null!==(e=a.temperature)&&void 0!==e?e:a.temp_max,r=null!==(i=a.templow)&&void 0!==i?i:a.temp_min;void 0!==r&&r<n&&(n=r),void 0!==t&&t>s&&(s=t),void 0===r&&void 0!==t&&t<n&&(n=t)}return isFinite(n)||(n=0),isFinite(s)||(s=n+1),s===n&&(s=n+1),{min:n,max:s}}_getBarScaleStyles(t,e,i,n){const s=Math.max(n-i,.1),a=Math.min(t,e),r=Math.max(t,e),o=Math.min(Math.max((a-i)/s*100,0),100),l=Math.min(Math.max((r-i)/s*100,0),100),c=Math.min(Math.max((a- -20)/55*100,0),100),d=Math.min(Math.max((r- -20)/55*100,0),100),h=Math.max(d-c,.5);return{windowStyle:`left:${o}%;right:${100-l}%`,scaleStyle:`width:${1e4/h}%;left:-${c/h*100}%`}}_getMeasuredHeaderHeight(){return Math.min(Math.max(.11*this._cardWidth,64),88)}static get properties(){return{hass:{attribute:!1},config:{state:!0},_forecast:{state:!0},_cardWidth:{state:!0},_cardHeight:{state:!0}}}static getConfigElement(){return document.createElement("slick-minimal-weather-card-editor")}static getStubConfig(t){let e="";if(t&&t.states){const i=Object.keys(t.states).filter(t=>t.startsWith("weather."));i.length>0&&(e=i[0])}return{type:"custom:slick-minimal-weather-card",entity:e,title:"Wetter",mode:"daily"}}constructor(){super(),this._forecast=null,this._cardHeight=200,this._cardWidth=300,this._forecastRequestToken=0,this._forecast=null,this._cardHeight=200,this._cardWidth=300,this._resizeObserver=new ResizeObserver(t=>{for(const e of t)this._cardWidth=e.contentRect.width,this._cardHeight=e.contentRect.height,this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this),this.hass&&this.config&&this._updateForecast()}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect(),this._forecastInterval&&(clearInterval(this._forecastInterval),this._forecastInterval=void 0)}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={title:"Wetter",mode:"daily",temp_sensor:void 0,sun_entity:"sun.sun",...t};if(e.mode&&!["daily","hourly"].includes(e.mode))throw new Error(`Invalid mode: ${e.mode}. Expected 'daily' or 'hourly'.`);this.config=e}updated(t){super.updated(t);const e=t.has("hass")&&!t.get("hass");(t.has("config")||e)&&(this._updateForecast(),this._forecastInterval&&clearInterval(this._forecastInterval),this._forecastInterval=window.setInterval(()=>this._updateForecast(),9e5))}shouldUpdate(t){if(t.has("config")||t.has("_forecast")||t.has("_cardWidth")||t.has("_cardHeight"))return!0;if(t.has("hass")){const e=t.get("hass");if(!e||!this.hass||!this.config)return!0;const i=this.config.entity,n=this.config.temp_sensor,s=this.config.sun_entity||"sun.sun";return!!i&&e.states[i]!==this.hass.states[i]||!!n&&e.states[n]!==this.hass.states[n]||!!s&&e.states[s]!==this.hass.states[s]}return!0}_toOptionalNumber(t){if("number"==typeof t&&Number.isFinite(t))return t;if("string"==typeof t&&""!==t.trim()){const e=Number(t);if(Number.isFinite(e))return e}}_normalizeForecast(t){if(!Array.isArray(t))return[];return t.map(t=>{if(!t||"object"!=typeof t)return null;const e=t,i="string"==typeof e.datetime?e.datetime:null;if(!i)return null;const n={datetime:i,condition:"string"==typeof e.condition?e.condition:""},s=this._toOptionalNumber(e.temperature),a=this._toOptionalNumber(e.temp_max),r=this._toOptionalNumber(e.templow),o=this._toOptionalNumber(e.temp_min);return void 0!==s&&(n.temperature=s),void 0!==a&&(n.temp_max=a),void 0!==r&&(n.templow=r),void 0!==o&&(n.temp_min=o),n}).filter(t=>null!==t)}_extractForecastResponse(t,e){var i,n,s,a,r,o;if(null===(n=null===(i=null==t?void 0:t.service_response)||void 0===i?void 0:i[e])||void 0===n?void 0:n.forecast)return t.service_response[e].forecast;if(null===(s=null==t?void 0:t[e])||void 0===s?void 0:s.forecast)return t[e].forecast;if(Array.isArray(t))for(const i of t){if(null===(r=null===(a=null==i?void 0:i.service_response)||void 0===a?void 0:a[e])||void 0===r?void 0:r.forecast)return i.service_response[e].forecast;if(null===(o=null==i?void 0:i[e])||void 0===o?void 0:o.forecast)return i[e].forecast}return[]}async _updateForecast(){var t,e;if(!this.hass||!(null===(t=this.config)||void 0===t?void 0:t.entity))return void(this._forecast=[]);const i=this.config.entity,n=this.hass.states[i];if(!n)return void(this._forecast=[]);const s=this._normalizeForecast(null===(e=n.attributes)||void 0===e?void 0:e.forecast);if(s.length>0&&"daily"===this.config.mode)return void(this._forecast=s);const a=++this._forecastRequestToken;try{const t=await this.hass.callApi("POST","services/weather/get_forecasts?return_response",{entity_id:i,type:this.config.mode||"daily"});if(a!==this._forecastRequestToken)return;const e=this._normalizeForecast(this._extractForecastResponse(t,i));this._forecast=e.length>0?e:s}catch(t){console.error("MiniWeatherCard: Forecast fetch failed",t),a===this._forecastRequestToken&&(this._forecast=s)}}render(){var t,e;if(!this.config)return Y``;if(!this.hass)return Y``;const i=this.config.entity?this.hass.states[this.config.entity]:void 0,n=this._getCurrentTemperatureValue(),s=this._getMeasuredHeaderHeight(),a=2*Math.min(Math.max(.04*this._cardWidth,12),20),r=Math.max(this._cardHeight-a-s-4,0),o=this._cardHeight>140,l=this._forecast||[],c=o?Math.max(Math.floor(r/24),0):0,d=o?Math.min(l.length,c):0,h=o?l.slice(0,d):[],p="hourly"===this.config.mode;let u=Y`&nbsp;`;if(l.length>0){const i=l[0],n=null!==(t=i.temperature)&&void 0!==t?t:i.temp_max,s=null!==(e=i.templow)&&void 0!==e?e:i.temp_min,a=void 0!==n?Math.round(n):"--",r=void 0!==s?Math.round(s):"--";u=p?Y`${a}°`:"--"===r?Y`H:${a}°`:Y`H:${a}° L:${r}°`}const g=this._getCurrentGradients(),m=void 0!==n?`${Math.round(n)}°`:"--",f=this._getForecastBounds(l);return Y`
      <ha-card @click="${this._openMoreInfo}" style="cursor: pointer;">
        <div class="bg-container">
            <div class="bg-layer bright" style="background: ${g.bright};"></div>
            <div class="bg-layer dark" style="background: ${g.dark};"></div>
            
        </div>

        <div class="container content-layer">
            <div class="header">
        <div class="temp-big">${m}</div>
                <div class="header-right">
                    <ha-icon icon="${this._getIcon(i?i.state:"")}" class="main-icon"></ha-icon>
                    <div class="hl-label">${u}</div>
                </div>
            </div>

            ${o?Y`
                <div class="forecast-list">
                    ${h.map(t=>this._renderRow(t,f.min,f.max))}
                    ${0===l.length?Y`<div class="loading">Lade...</div>`:""}
                </div>
            `:Y`<div style="flex:1;"></div>`} 

        </div>
      </ha-card>
    `}_renderRow(t,e=0,i=1){var n,s;const a=new Date(t.datetime),r="hourly"===this.config.mode,o=Number.isNaN(a.getTime())?"":r?a.toLocaleTimeString(this.hass.language,{hour:"2-digit",minute:"2-digit"}):a.toLocaleDateString(this.hass.language,{weekday:"short"}),l=null!==(n=t.temperature)&&void 0!==n?n:t.temp_max,c=null!==(s=t.templow)&&void 0!==s?s:t.temp_min;if(r&&void 0!==l)return Y`<div class="row hourly"><div class="day-name">${o}</div><div class="icon-small"><ha-icon icon="${this._getIcon(t.condition)}"></ha-icon></div><div class="temp-single">${Math.round(l)}°</div></div>`;if(void 0!==c&&void 0!==l){const n=this._getBarScaleStyles(c,l,e,i);return Y`<div class="row"><div class="day-name">${o}</div><div class="icon-small"><ha-icon icon="${this._getIcon(t.condition)}"></ha-icon></div><div class="bars"><span class="val-low">${Math.round(c)}°</span><div class="bar-track"><div class="bar-fill-window" style="${n.windowStyle}"><div class="bar-fill-scale" style="${n.scaleStyle}"></div></div></div><span class="val-high">${Math.round(l)}°</span></div></div>`}return Y``}_getIcon(t){return{sunny:"mdi:weather-sunny","clear-night":"mdi:weather-night",partlycloudy:"mdi:weather-partly-cloudy",cloudy:"mdi:cloud",rainy:"mdi:weather-rainy",pouring:"mdi:weather-pouring",fog:"mdi:weather-fog",hail:"mdi:weather-hail",snowy:"mdi:weather-snowy",lightning:"mdi:weather-lightning"}[t]||"mdi:weather-cloudy"}_openMoreInfo(){this.config.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{composed:!0,detail:{entityId:this.config.entity}}))}_getCurrentGradients(){if(!this.hass||!this.config||!this.config.entity)return{bright:"linear-gradient(180deg, #2c3e50 0%, #151a1e 100%)",dark:"linear-gradient(180deg, #243342 0%, #0a0a0a 100%)"};const t=this.hass.states[this.config.entity];if(!t)return{bright:"linear-gradient(180deg, #2c3e50 0%, #151a1e 100%)",dark:"linear-gradient(180deg, #243342 0%, #0a0a0a 100%)"};const e=this.config.sun_entity||"sun.sun",i=this.hass.states[e];let n="noon";if(i&&i.attributes){n=function(t,e){return t<-18?"night":t>=-18&&t<-6?e?"early-dawn":"late-dusk":t>=-6&&t<0?e?"late-dawn":"early-dusk":t>=0&&t<15?e?"morning":"late-afternoon":t>=15&&t<35?e?"morning":"early-afternoon":"noon"}(i.attributes.elevation||0,i.attributes.rising||!1)}const s=function(t){return["rainy","pouring","lightning","snowy","hail","fog"].includes(t)}(t.state);return function(t,e){const i={"night-good":{bright:"linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",dark:"linear-gradient(180deg, #000000 0%, #0a1929 50%, #1a2f42 100%)"},"early-dawn-good":{bright:"linear-gradient(180deg, #2c3e50 0%, #3a5169 50%, #526c87 100%)",dark:"linear-gradient(180deg, #1a1f2e 0%, #2b3a4d 50%, #3d5167 100%)"},"late-dawn-good":{bright:"linear-gradient(180deg, #f3904f 0%, #f7b267 50%, #ffd89b 100%)",dark:"linear-gradient(180deg, #d76d47 0%, #e89a5f 50%, #f5c98c 100%)"},"morning-good":{bright:"linear-gradient(180deg, #56ccf2 0%, #87ceeb 50%, #a8daff 100%)",dark:"linear-gradient(180deg, #3ba5d1 0%, #6bb8e0 50%, #8dc9f2 100%)"},"noon-good":{bright:"linear-gradient(180deg, #1e88e5 0%, #42a5f5 50%, #64b5f6 100%)",dark:"linear-gradient(180deg, #1565c0 0%, #1e88e5 50%, #42a5f5 100%)"},"early-afternoon-good":{bright:"linear-gradient(180deg, #42a5f5 0%, #64b5f6 50%, #90caf9 100%)",dark:"linear-gradient(180deg, #2196f3 0%, #42a5f5 50%, #64b5f6 100%)"},"late-afternoon-good":{bright:"linear-gradient(180deg, #ff9a56 0%, #ffb07c 50%, #ffcda3 100%)",dark:"linear-gradient(180deg, #f57c42 0%, #ff9656 50%, #ffb486 100%)"},"early-dusk-good":{bright:"linear-gradient(180deg, #fa709a 0%, #fc8ba8 50%, #ffa7bd 100%)",dark:"linear-gradient(180deg, #e85285 0%, #f56a94 50%, #fc8ba8 100%)"},"late-dusk-good":{bright:"linear-gradient(180deg, #434343 0%, #5a5a5a 50%, #717171 100%)",dark:"linear-gradient(180deg, #1a1a1a 0%, #2f2f2f 50%, #454545 100%)"},"night-bad":{bright:"linear-gradient(180deg, #263238 0%, #37474f 50%, #455a64 100%)",dark:"linear-gradient(180deg, #0d1117 0%, #1a1f2e 50%, #263238 100%)"},"early-dawn-bad":{bright:"linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)",dark:"linear-gradient(180deg, #2c3e50 0%, #34495e 50%, #455a64 100%)"},"late-dawn-bad":{bright:"linear-gradient(180deg, #78909c 0%, #90a4ae 50%, #b0bec5 100%)",dark:"linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)"},"morning-bad":{bright:"linear-gradient(180deg, #607d8b 0%, #78909c 50%, #90a4ae 100%)",dark:"linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)"},"noon-bad":{bright:"linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)",dark:"linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)"},"early-afternoon-bad":{bright:"linear-gradient(180deg, #607d8b 0%, #78909c 50%, #90a4ae 100%)",dark:"linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)"},"late-afternoon-bad":{bright:"linear-gradient(180deg, #78909c 0%, #8d9da6 50%, #a3b1ba 100%)",dark:"linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)"},"early-dusk-bad":{bright:"linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)",dark:"linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)"},"late-dusk-bad":{bright:"linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)",dark:"linear-gradient(180deg, #1c2329 0%, #263238 50%, #37474f 100%)"}};return i[`${t}-${e?"bad":"good"}`]||i["noon-good"]}(n,s)}static get styles(){return u`
      :host { display: block; height: 100%; isolation: isolate; }
      ha-card {
        background: transparent; color: white;
        border-radius: var(--ha-card-border-radius, 12px);
        height: 100%; box-sizing: border-box; overflow: hidden; display: flex; flex-direction: column;
        box-shadow: var(--ha-card-box-shadow, none); position: relative;
      }
      .bg-container { position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0; overflow: hidden; border-radius: var(--ha-card-border-radius, 12px); }
      .bg-layer { position: absolute; top: 0; left: 0; right: 0; bottom: 0; transition: background 1s ease; }
      .bg-layer.bright { z-index: 1; }
      .bg-layer.dark { z-index: 2; }
      .content-layer { position: relative; z-index: 4; }
      .container { padding: clamp(12px, 4vw, 20px); height: 100%; display: flex; flex-direction: column; box-sizing: border-box; min-height: 0; overflow: hidden; }
      .header { display: flex; justify-content: space-between; align-items: flex-start; flex: 0 0 auto; margin-bottom: clamp(2px, 1vw, 6px); }
      .temp-big { font-size: clamp(2rem, 9vw, 4rem); font-weight: 100; line-height: 1; text-shadow: 0 1px 5px rgba(0,0,0,0.5); white-space: nowrap; letter-spacing: -1px; overflow: hidden; }
      .header-right { display: flex; flex-direction: column; align-items: flex-end; text-shadow: 0 1px 5px rgba(0,0,0,0.5); }
      .main-icon { --mdc-icon-size: clamp(22px, 6vw, 36px); margin-bottom: 4px; filter: drop-shadow(0 1px 5px rgba(0,0,0,0.5)); }
      .hl-label { font-size: clamp(0.75rem, 2.5vw, 1rem); font-weight: 300; opacity: 0.9; white-space: nowrap; }
      .forecast-list { display: flex; flex-direction: column; gap: 0; flex: 0 0 auto; overflow: hidden; justify-content: flex-start; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }
      .row { display: grid; grid-template-columns: minmax(30px, 50px) 30px 1fr; align-items: center; font-size: clamp(0.72rem, 2.3vw, 0.95rem); height: 24px; }
      .day-name { font-weight: 400; opacity: 0.9; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .icon-small { text-align: center; }
      .icon-small ha-icon { --mdc-icon-size: 20px; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.8)); }
      .bars { display: flex; align-items: center; gap: 8px; justify-content: flex-end; }
      .val-low { opacity: 0.6; width: 25px; text-align: right; }
      .val-high { font-weight: 500; width: 25px; text-align: right; }
      .bar-track { flex-grow: 1; height: 5px; background: rgba(255,255,255,0.15); border-radius: 3px; position: relative; min-width: 50px; max-width: 100px; overflow: hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.2); }
      .bar-fill-window { position: absolute; top: 0; bottom: 0; border-radius: 3px; overflow: hidden; transition: left 0.4s ease, right 0.4s ease; }
      .bar-fill-scale { position: absolute; top: 0; bottom: 0; background: linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #f5af19 100%); border-radius: 3px; opacity: 0.85; transition: width 0.4s ease, left 0.4s ease; }
      .hourly .temp-single { text-align: right; font-weight: 500; padding-right: 5px; }
      .loading { text-align: center; font-size: 0.8rem; opacity: 0.5; padding: 10px; }
    `}}customElements.get("slick-minimal-weather-card")||customElements.define("slick-minimal-weather-card",bt);class vt extends gt{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value,i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Y``;return Y`<ha-form .hass=${this.hass} .data=${this._config} .schema=${[{name:"entity",label:"Wetter Entität",selector:{entity:{domain:"weather"}}},{name:"title",label:"Titel",selector:{text:{}}},{name:"temp_sensor",label:"Temp. Override (Sensor)",selector:{entity:{domain:"sensor"}}},{name:"sun_entity",label:"Sonnen-Sensor",selector:{entity:{domain:"sun"}}},{name:"mode",label:"Modus",selector:{select:{options:[{value:"daily",label:"Täglich"},{value:"hourly",label:"Stündlich"}]}}}]} .computeLabel=${t=>t.label} @value-changed=${this._valueChanged}></ha-form>`}}customElements.get("slick-minimal-weather-card-editor")||customElements.define("slick-minimal-weather-card-editor",vt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-minimal-weather-card",name:"Slick Minimal Weather",preview:!0,description:"Minimalist weather card."});console.info("%c SQUIRCLE-CLOCK-CARD %c 0.2.0 ","color: white; background: #795548; font-weight: 700;","color: #795548; background: white; font-weight: 700;");const yt=[{name:"display_mode",label:"Anzeigemodus",selector:{select:{mode:"dropdown",options:[{value:"analog",label:"Analog (Klassisch)"},{value:"digital",label:"Digital (Hybrid)"}]}}},{name:"font_style",label:"Schriftart",selector:{select:{mode:"dropdown",options:[{value:"standard",label:"Standard (Apple Bold)"},{value:"thin",label:"Modern & Dünn (iOS)"},{value:"retro",label:"Retro Bahnhof (DIN-Style)"}]}}}];class xt extends HTMLElement{constructor(){super(...arguments),this._ticks=[],this._lastMin=-1,this._lastSecond=-1}static getConfigElement(){return document.createElement("slick-squircle-clock-editor")}static getStubConfig(){return{type:"custom:slick-squircle-clock-card",display_mode:"digital",font_style:"standard"}}set hass(t){this._hass=t}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={display_mode:"digital",font_style:"standard",...t};if(e.display_mode&&!["analog","digital"].includes(e.display_mode))throw new Error(`Invalid display_mode: ${e.display_mode}`);if(e.font_style&&!["standard","thin","retro"].includes(e.font_style))throw new Error(`Invalid font_style: ${e.font_style}`);this.config=e,this.shadowRoot&&(this._render(),this._drawContent())}getLayoutOptions(){return{grid_rows:2,grid_columns:2,grid_min_rows:1,grid_min_columns:1}}connectedCallback(){this.shadowRoot||this.attachShadow({mode:"open"}),this._render(),this._drawContent(),this._startClock(),this._resizeObserver=new ResizeObserver(()=>this._drawContent()),this._resizeObserver.observe(this)}disconnectedCallback(){var t;this._stopClock(),null===(t=this._resizeObserver)||void 0===t||t.disconnect()}_startClock(){this._stopClock();const t=()=>{var e,i,n;const s=new Date;let a=s,r=null===(e=this.config)||void 0===e?void 0:e.timezone;if((null===(i=this.config)||void 0===i?void 0:i.timezone_entity)&&this._hass){const t=this._hass.states[this.config.timezone_entity];t&&t.state&&(r=t.state)}if(r)try{const t=s.toLocaleString("en-US",{timeZone:r});a=new Date(t),a.setMilliseconds(s.getMilliseconds())}catch(t){a=s}"digital"===(null===(n=this.config)||void 0===n?void 0:n.display_mode)?(this._updateDigital(a),this._timeout=window.setTimeout(t,1e3-s.getMilliseconds()+10)):(this._updateAnalog(a),this._timer=requestAnimationFrame(t))};this._timer=requestAnimationFrame(t)}_stopClock(){this._timer&&cancelAnimationFrame(this._timer),this._timeout&&clearTimeout(this._timeout),this._timer=void 0,this._timeout=void 0}_getPointOnRoundedRect(t,e,i,n,s){const a=(t-90)*(Math.PI/180),r=e/2,o=i/2,l=Math.max(0,e-2*s),c=Math.max(0,i-2*s),d=Math.max(0,n-s),h=l/2,p=c/2,u=Math.abs(Math.cos(a));let g,m;h*Math.abs(Math.sin(a))<=p*u?(g=h*Math.sign(Math.cos(a)),m=h*Math.tan(a)*Math.sign(Math.cos(a))):(g=p/Math.tan(a)*Math.sign(Math.sin(a)),m=p*Math.sign(Math.sin(a)));const f=Math.max(0,h-d),_=Math.max(0,p-d);if(Math.abs(g)>f&&Math.abs(m)>_){const t=Math.abs(g)-f,e=Math.abs(m)-_,i=Math.sqrt(t*t+e*e);g=(f+t/i*d)*Math.sign(g),m=(_+e/i*d)*Math.sign(m)}return{x:r+g,y:o+m}}_getFontStyle(){var t;switch((null===(t=this.config)||void 0===t?void 0:t.font_style)||"standard"){case"thin":return'\n                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n                font-weight: 200;\n              ';case"retro":return'\n                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n                font-weight: 700;\n                letter-spacing: 0.5px;\n              ';default:return'\n                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n                font-weight: 600;\n              '}}_render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n      <style>\n        :host {\n          display: block; width: 100%; height: 100%;\n          background: var(--ha-card-background, var(--card-background-color, white));\n          border-radius: var(--ha-card-border-radius, 12px);\n          box-shadow: var(--ha-card-box-shadow, none);\n          overflow: hidden;\n          box-sizing: border-box;\n          position: relative;\n        }\n        svg { width: 100%; height: 100%; display: block; position: absolute; top: 0; left: 0; }\n        \n        /* Analog Styles */\n        text.analog-num {\n          ${this._getFontStyle()}\n          fill: var(--primary-text-color); \n          text-anchor: middle; dominant-baseline: middle;\n        }\n        #hour-hand, #minute-hand { stroke: var(--primary-text-color); stroke-width: 6; stroke-linecap: round; }\n        #second-hand { stroke: #ff9500; stroke-width: 2.5; stroke-linecap: round; }\n        #center-dot { fill: #ff9500; stroke: var(--primary-text-color); stroke-width: 1.5; }\n\n        /* Digital Styles */\n        .digital-container {\n            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);\n            text-align: center; \n            color: var(--primary-text-color); pointer-events: none;\n            ${this._getFontStyle()}\n        }\n        .time-big { font-size: 1em; line-height: 1; font-variant-numeric: tabular-nums; }\n        .date-small { \n            font-weight: 500; \n            opacity: 0.6; \n            margin-top: 4px; \n            text-transform: uppercase; \n            font-weight: ${"thin"===(null===(t=this.config)||void 0===t?void 0:t.font_style)?"400":"bold"};\n        }\n        \n        /* Aktiver Sekunden-Tick (Digital) */\n        .active-tick { \n            stroke: #ff9500 !important; \n            stroke-opacity: 1 !important; \n            stroke-width: 3px !important; \n        }\n      </style>\n      <div id="content"></div>\n    `)}_drawContent(){var t;if(!this.shadowRoot)return;const e=this.shadowRoot.getElementById("content");if(!e)return;const i=this.getBoundingClientRect(),n=i.width||300,s=i.height||300,a=Math.min(n,s),r=window.getComputedStyle(this);let o=parseFloat(r.borderTopLeftRadius);r.borderTopLeftRadius&&r.borderTopLeftRadius.includes("%")&&(o=a*parseFloat(r.borderTopLeftRadius)/100);const l=o||.22*a;"analog"===((null===(t=this.config)||void 0===t?void 0:t.display_mode)||"analog")?this._drawAnalog(e,n,s,l,a):this._drawDigital(e,n,s,l,a)}_drawAnalog(t,e,i,n,s){var a,r,o,l,c;let d="";for(let t=0;t<60;t++){const s=t%5==0,o=6*t,l=this._getPointOnRoundedRect(o,e,i,n,5),c=this._getPointOnRoundedRect(o,e,i,n,s?20:12),h=s?"var(--primary-text-color)":"var(--secondary-text-color)";let p=s?3:1.5;"retro"===(null===(a=this.config)||void 0===a?void 0:a.font_style)&&s&&(p=4.5),"retro"!==(null===(r=this.config)||void 0===r?void 0:r.font_style)||s||(p=2),d+=`<line x1="${c.x}" y1="${c.y}" x2="${l.x}" y2="${l.y}" stroke="${h}" stroke-width="${p}" stroke-linecap="round" />`}const h=this._getPointOnRoundedRect(0,e,i,n,.25*s),p=this._getPointOnRoundedRect(90,e,i,n,.25*s),u=this._getPointOnRoundedRect(180,e,i,n,.25*s),g=this._getPointOnRoundedRect(270,e,i,n,.25*s);t.innerHTML=`\n      <svg viewBox="0 0 ${e} ${i}">\n        ${d}\n        <text class="analog-num" style="font-size: ${Math.max(12,s/10)}px" x="${h.x}" y="${h.y}">12</text>\n        <text class="analog-num" style="font-size: ${Math.max(12,s/10)}px" x="${p.x}" y="${p.y}">3</text>\n        <text class="analog-num" style="font-size: ${Math.max(12,s/10)}px" x="${u.x}" y="${u.y}">6</text>\n        <text class="analog-num" style="font-size: ${Math.max(12,s/10)}px" x="${g.x}" y="${g.y}">9</text>\n        <line id="hour-hand" x1="${e/2}" y1="${i/2}" x2="${e/2}" y2="${i/2-s/4}" />\n        <line id="minute-hand" x1="${e/2}" y1="${i/2}" x2="${e/2}" y2="${i/2-s/2.8}" />\n        <line id="second-hand" x1="${e/2}" y1="${i/2+15}" x2="${e/2}" y2="${i/2-s/2.4}" />\n        <circle id="center-dot" cx="${e/2}" cy="${i/2}" r="3.5" />\n      </svg>\n    `,this.hourHand=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector("#hour-hand"),this.minuteHand=null===(l=this.shadowRoot)||void 0===l?void 0:l.querySelector("#minute-hand"),this.secondHand=null===(c=this.shadowRoot)||void 0===c?void 0:c.querySelector("#second-hand"),this._center={x:e/2,y:i/2}}_drawDigital(t,e,i,n,s){var a,r,o,l;let c="";for(let t=0;t<60;t++){const s=6*t,a=this._getPointOnRoundedRect(s,e,i,n,6),r=this._getPointOnRoundedRect(s,e,i,n,14);c+=`<line id="tick-${t}" x1="${r.x}" y1="${r.y}" x2="${a.x}" y2="${a.y}" \n                stroke="var(--secondary-text-color)" \n                stroke-opacity="0.4" \n                stroke-width="1.5" \n                stroke-linecap="round" />`}t.innerHTML=`\n      <svg viewBox="0 0 ${e} ${i}">${c}</svg>\n      <div class="digital-container">\n        <div class="time-big" id="time-display" style="font-size: ${.25*s}px">--:--</div>\n        <div class="date-small" id="date-display" style="font-size: ${.08*s}px">--</div>\n      </div>\n    `,this._timeDisplay=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector("#time-display"),this._dateDisplay=null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector("#date-display"),this._ticks=[];for(let t=0;t<60;t++)this._ticks.push((null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector(`#tick-${t}`))||null);this._lastMin=-1,this._lastSecond=-1;const d=new Date;if(null===(l=this.config)||void 0===l?void 0:l.timezone)try{const t=d.toLocaleString("en-US",{timeZone:this.config.timezone}),e=new Date(t);this._updateDigital(e,!0)}catch(t){this._updateDigital(d,!0)}else this._updateDigital(d,!0)}_updateAnalog(t){var e,i;if(!this.hourHand)return;const n=t.getSeconds()+t.getMilliseconds()/1e3,s=t.getMinutes()+n/60,a=t.getHours()%12+s/60,{x:r,y:o}=this._center||{x:0,y:0};null===(e=this.secondHand)||void 0===e||e.setAttribute("transform",`rotate(${6*n} ${r} ${o})`),null===(i=this.minuteHand)||void 0===i||i.setAttribute("transform",`rotate(${6*s} ${r} ${o})`),this.hourHand.setAttribute("transform",`rotate(${30*a} ${r} ${o})`)}_updateDigital(t,e=!1){var i,n,s;if(!this._timeDisplay)return;const a=t.getSeconds();if(e||this._lastMin!==t.getMinutes()){const e=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0");this._timeDisplay.textContent=`${e}:${n}`;const s={...{weekday:"short",day:"numeric"}};(null===(i=this.config)||void 0===i?void 0:i.timezone)&&(s.timeZone=this.config.timezone),this._dateDisplay&&(this._dateDisplay.textContent=(new Date).toLocaleDateString("de-DE",s)),this._lastMin=t.getMinutes()}(e||this._lastSecond!==a)&&(-1!==this._lastSecond&&this._ticks[this._lastSecond]&&(null===(n=this._ticks[this._lastSecond])||void 0===n||n.classList.remove("active-tick")),this._ticks[a]&&(null===(s=this._ticks[a])||void 0===s||s.classList.add("active-tick")),this._lastSecond=a)}}class wt extends gt{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e={...this._config,...t.detail.value};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}render(){return this.hass&&this._config?Y`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${yt}
        .computeLabel=${t=>t.label||t.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:Y``}}customElements.get("slick-squircle-clock-card")||customElements.define("slick-squircle-clock-card",xt),customElements.get("slick-squircle-clock-editor")||customElements.define("slick-squircle-clock-editor",wt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-squircle-clock-card",name:"Slick Squircle Clock",preview:!0,description:"A customizable clock card with analog and digital modes."});const $t=/^[a-z_]+\.[a-z0-9_]+$/;function kt(t,e=new Set){return"string"==typeof t?$t.test(t)&&e.add(t):Array.isArray(t)?t.forEach(t=>kt(t,e)):t&&"object"==typeof t&&Object.values(t).forEach(t=>kt(t,e)),e}function St(t,e,i){if(1!==t.size||!t.has("hass"))return!0;const n=t.get("hass");if(!n||!e)return!0;if(n.localize!==e.localize||n.themes!==e.themes)return!0;for(const t of i)if(n.states[t]!==e.states[t])return!0;return!1}t.register(e,i,n,s,a,r,o);console.info("%c SIMPLE-CLIMATE-CARD %c 0.2.0 ","color: white; background: #ff9800; font-weight: 700;","color: #ff9800; background: white; font-weight: 700;");const Ct=["on","true","heat","heating","active","running"],Et={id:"slickActivityBands",beforeDatasetsDraw(t){var e;const i=t.$activityBands,n=t.chartArea,s=null===(e=t.getDatasetMeta(0))||void 0===e?void 0:e.data;if(!(null==i?void 0:i.length)||!n||!s||s.length<2)return;const a=t.$activityStyle||{fill:"rgba(255, 87, 34, 0.5)",edge:"rgba(255, 255, 255, 0.55)"},r=s.length-1,o=t=>s[0].x+t/r*(s[r].x-s[0].x),l=t.ctx,c=()=>{l.moveTo(s[0].x,s[0].y);for(let t=1;t<s.length;t++){const e=s[t-1],i=s[t];void 0!==e.cp2x&&void 0!==i.cp1x?l.bezierCurveTo(e.cp2x,e.cp2y,i.cp1x,i.cp1y,i.x,i.y):l.lineTo(i.x,i.y)}};l.save();for(const t of i){const e=o(t.start),i=Math.max(o(t.end),e+1);l.save(),l.beginPath(),l.rect(e,n.top,i-e,n.bottom-n.top),l.clip(),l.beginPath(),c(),l.lineTo(s[r].x,n.bottom),l.lineTo(s[0].x,n.bottom),l.closePath(),l.fillStyle=a.fill,l.fill(),l.restore(),l.beginPath(),l.setLineDash([2,2]),l.lineWidth=1,l.strokeStyle=a.edge;for(const t of[e,i])t<=n.left+.5||t>=n.right-.5||(l.moveTo(Math.round(t)+.5,n.top),l.lineTo(Math.round(t)+.5,n.bottom));l.stroke(),l.setLineDash([])}l.restore()}};class Mt extends gt{constructor(){super(...arguments),this._graphHistory={},this._graphFetchInFlight=new Set,this._graphCacheMs=3e5,this._charts=new Map,this._chartGraphs=new Map,this._entityIds=new Set}static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-simple-climate-card-editor")}static getStubConfig(){return{type:"custom:slick-simple-climate-card",entity:"",name:"Climate"}}getCardSize(){return 2}getLayoutOptions(){return{grid_rows:2,grid_columns:2,grid_min_rows:1,grid_min_columns:1}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(this.config={name:"Climate",...t},this._entityIds=kt(this.config),this.config.name&&"string"!=typeof this.config.name)throw new Error("name must be a string");if(this.config.hot_water_entity&&"string"!=typeof this.config.hot_water_entity)throw new Error("hot_water_entity must be a string");if(this.config.hot_water_active_entity&&"string"!=typeof this.config.hot_water_active_entity)throw new Error("hot_water_active_entity must be a string");if(this.config.sensors&&"object"!=typeof this.config.sensors)throw new Error("sensors must be an object")}disconnectedCallback(){for(const t of this._charts.values())t.destroy();this._charts.clear(),this._chartGraphs.clear(),super.disconnectedCallback()}shouldUpdate(t){return St(t,this.hass,this._entityIds)}updated(){this._syncCharts()}_getChartPalette(t){return"tank-graph"===t?{line:"#9ad9ff",fill:"rgba(79, 195, 247, 0.2)"}:{line:"#ffd59a",fill:"rgba(255, 183, 77, 0.2)"}}_syncCharts(){const e=this.renderRoot.querySelectorAll("canvas.graph-canvas[data-key]"),i=new Set;e.forEach(e=>{var n;const s=e.dataset.key,a=e.dataset.colorClass||"heating-graph";if(!s)return;i.add(s);const r=this._graphHistory[s];if(!(null===(n=null==r?void 0:r.points)||void 0===n?void 0:n.length))return;const o=this._getChartPalette(a),l=r.points.map((t,e)=>e),c=r.points.length,d=this._charts.get(s);if(d&&d.canvas===e){if(this._chartGraphs.get(s)===r)return;this._chartGraphs.set(s,r),d.data.labels=l,d.$activityBands=r.bands;const t=d.data.datasets[0];return t.data=r.points,t.borderColor=o.line,t.backgroundColor=o.fill,t.tension=.58,t.cubicInterpolationMode="monotone",void d.update("none")}d&&d.destroy();const h=e.getContext("2d");if(!h)return;const p=new t(h,{type:"line",data:{labels:l,datasets:[{data:r.points,borderColor:o.line,backgroundColor:o.fill,fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.7,pointRadius:t=>t.dataIndex===c-1?1.8:0,pointHoverRadius:0,pointBackgroundColor:o.line,pointBorderColor:"rgba(0, 0, 0, 0.35)",pointBorderWidth:.6}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1}}},elements:{line:{capBezierPoints:!0}},layout:{padding:{top:2,right:0,bottom:1,left:0}}},plugins:[Et]});p.$activityBands=r.bands,p.$activityStyle="tank-graph"===a?{fill:"rgba(255, 112, 67, 0.55)",edge:"rgba(255, 204, 188, 0.75)"}:{fill:"rgba(230, 74, 25, 0.72)",edge:"rgba(255, 224, 178, 0.85)"},p.update("none"),this._charts.set(s,p),this._chartGraphs.set(s,r)});for(const[t,e]of this._charts.entries())i.has(t)||(e.destroy(),this._charts.delete(t),this._chartGraphs.delete(t))}_formatTemperature(t){const e="number"==typeof t?t:parseFloat(String(t));return Number.isFinite(e)?`${e}°`:"--"}_getClimateModeIcon(t){var e;const i=String((null==t?void 0:t.state)||(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.hvac_action)||"").toLowerCase();return"heat"===i||"heating"===i?"mdi:fire":"cool"===i||"cooling"===i?"mdi:snowflake":"heat_cool"===i||"auto"===i?"mdi:autorenew":"off"===i?"mdi:power-off":"mdi:thermostat"}_getHotWaterModeIcon(t){var e,i;const n=(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.operation_mode)||(null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.preset_mode)||(null==t?void 0:t.state)||"",s=String(n).toLowerCase();return s.includes("eco")?"mdi:leaf":s.includes("high")||s.includes("boost")||s.includes("performance")||s.includes("power")||s.includes("hoch")?"mdi:fire":"off"===s?"mdi:power-off":"mdi:water-thermometer"}_isHotWaterActive(t){var e,i,n;if(!t)return!1;if(this.config.hot_water_active_entity&&this.hass){const t=this.hass.states[this.config.hot_water_active_entity];if(t){const i=null===(e=t.state)||void 0===e?void 0:e.toLowerCase();return"on"===i||"true"===i||"heat"===i||"heating"===i||"active"===i||"running"===i}}const s=String((null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.operation_mode)||(null===(n=null==t?void 0:t.attributes)||void 0===n?void 0:n.preset_mode)||"").toLowerCase();return s.includes("high")||s.includes("boost")||s.includes("performance")||s.includes("power")||s.includes("hoch")}_getClimateActivityIndicator(t){var e;const i=String((null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.hvac_action)||(null==t?void 0:t.state)||"").toLowerCase();return"heating"===i||"heat"===i?{icon:"mdi:fire",tone:"heating"}:"cooling"===i||"cool"===i?{icon:"mdi:snowflake",tone:"cooling"}:void 0}_renderModeIcon(t,e){const i=(null==e?void 0:e.icon)||t,n=e?`bubble-icon active-mode-icon ${e.tone}`:"bubble-icon";return Y`
      <div class="target-icon-wrap">
        <ha-icon icon="${i}" class="${n}"></ha-icon>
      </div>
    `}_interpolateColor(t,e,i){const n=t=>{const e=t.replace("#","");return parseInt(e,16)},s=n(t)>>16&255,a=n(t)>>8&255,r=255&n(t),o=n(e)>>16&255,l=n(e)>>8&255,c=255&n(e);return`rgb(${Math.round(s+(o-s)*i)}, ${Math.round(a+(l-a)*i)}, ${Math.round(r+(c-r)*i)})`}_getGradient(t,e,i,n){const s=t.attributes.hvac_action||t.state,a="#607d8b",r="#455a64",o="#ff9800",l="#4caf50",c="#2196f3";if(isNaN(e))return`linear-gradient(180deg, ${a}, ${r})`;if("heating"===s){if(e<i){const t=i-e,n=t/3>=1?1:t/3;let s=0;n>.4&&(s=(n-.4)/.6);return`linear-gradient(180deg, ${this._interpolateColor(a,o,s)} 0%, ${90-70*n}%, ${this._interpolateColor(o,"#e65100",n)} 100%)`}return`linear-gradient(180deg, ${l}, 80%, ${o})`}if("cooling"===s){if(e>n){const t=e-n,i=t/3>=1?1:t/3,s=this._interpolateColor(c,"#0d47a1",i);let r=0;i>.4&&(r=(i-.4)/.6);return`linear-gradient(180deg, ${c} 0%, ${10+70*i}%, ${this._interpolateColor(a,s,r)} 100%)`}return`linear-gradient(180deg, ${c}, 20%, ${l})`}return"idle"===s?`linear-gradient(180deg, ${l} 0%, #81c784 100%)`:(t.state,`linear-gradient(180deg, ${a} 0%, ${r} 100%)`)}_getGraphCacheKey(t,e){const i=t.attributeKey?`${t.entityId}::${t.attributeKey}`:t.entityId;return e?`${i}|${e.entityId}${e.attributeKey?`::${e.attributeKey}`:""}`:i}_resolveHeatingGraphSource(t){var e;return this.config.heating_graph_entity?{entityId:this.config.heating_graph_entity}:(null===(e=this.config.sensors)||void 0===e?void 0:e.temp)?{entityId:this.config.sensors.temp}:{entityId:t,attributeKey:"current_temperature"}}_resolveHotWaterGraphSource(t){return this.config.hot_water_graph_entity?{entityId:this.config.hot_water_graph_entity}:t?{entityId:t,attributeKey:"current_temperature"}:void 0}_resolveHeatingActivitySource(t){if(!1!==this.config.show_activity_bands)return this.config.heating_active_entity?{entityId:this.config.heating_active_entity,activeValues:Ct}:{entityId:t,attributeKey:"hvac_action",activeValues:["heating"]}}_resolveHotWaterActivitySource(){if(!1!==this.config.show_activity_bands&&this.config.hot_water_active_entity)return{entityId:this.config.hot_water_active_entity,activeValues:Ct}}_isGraphFresh(t){const e=this._graphHistory[t];return!!e&&Date.now()-e.fetchedAt<this._graphCacheMs}_entryTime(t){return new Date(t.last_updated||t.last_changed).getTime()}async _ensureGraphHistory(t,e){var i,n;const s=this._getGraphCacheKey(t,e);if(this._isGraphFresh(s)||this._graphFetchInFlight.has(s))return;this._graphFetchInFlight.add(s);const a=new Date,r=new Date(a.getTime()-864e5),o=[t.entityId];e&&e.entityId!==t.entityId&&o.push(e.entityId);try{const l=await this.hass.callApi("GET",`history/period/${r.toISOString()}?filter_entity_id=${encodeURIComponent(o.join(","))}&end_time=${a.toISOString()}`),c=t=>(l||[]).find(e=>{var i;return(null===(i=null==e?void 0:e[0])||void 0===i?void 0:i.entity_id)===t})||[],d=c(t.entityId).map(e=>{var i;return{time:this._entryTime(e),value:parseFloat(String(t.attributeKey?null===(i=e.attributes)||void 0===i?void 0:i[t.attributeKey]:e.state))}}).filter(t=>Number.isFinite(t.value)&&Number.isFinite(t.time)),h=Math.max(72,Math.min(180,Math.round((this.getBoundingClientRect().width||300)/2.5))),p=this._resamplePoints(d,r.getTime(),a.getTime(),h),u=e&&p.length>1?this._computeActivityBands(c(e.entityId),e,r.getTime(),a.getTime(),p.length):[],g=(null===(n=null===(i=this.hass.states[t.entityId])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.unit_of_measurement)||"°C";this._graphHistory[s]={points:p,bands:u,unit:g,fetchedAt:Date.now()}}catch(e){console.error("SimpleClimate: Graph history fetch failed",t,e)}finally{this._graphFetchInFlight.delete(s),this.requestUpdate()}}_resamplePoints(t,e,i,n){if(!t.length)return[];const s=[],a=(i-e)/(n-1);let r=0;for(let i=0;i<n;i++){const n=e+i*a;for(;r+1<t.length&&t[r+1].time<=n;)r++;s.push(t[r].value)}return s}_computeActivityBands(t,e,i,n,s){const a=t=>(Math.min(Math.max(t,i),n)-i)/(n-i)*(s-1),r=t=>{var i;const n=e.attributeKey?null===(i=t.attributes)||void 0===i?void 0:i[e.attributeKey]:t.state;return e.activeValues.includes(String(null!=n?n:"").toLowerCase())},o=[];let l;for(const e of t){const t=this._entryTime(e);if(!Number.isFinite(t))continue;const i=r(e);i&&void 0===l?l=t:i||void 0===l||(o.push({start:a(l),end:a(t)}),l=void 0)}return void 0!==l&&o.push({start:a(l),end:a(n)}),o.filter(t=>t.end>t.start)}_renderGraphTile(t,e,i,n,s){const a=this._getGraphCacheKey(e,n),r=this._graphHistory[a];r&&this._isGraphFresh(a)||this._ensureGraphHistory(e,n);const o=(null==r?void 0:r.points)||[],l=o.length?o[o.length-1]:void 0,c=o.length?Math.min(...o):void 0,d=o.length?Math.max(...o):void 0;return Y`
      <div class="graph-tile ${i}" @click=${t=>this._openEntityMoreInfo(s||e.entityId,t)}>
        <div class="graph-head">
          <div class="graph-title">${t}</div>
          <div class="graph-value">${void 0!==l?`${l.toFixed(1)}${(null==r?void 0:r.unit)||"°C"}`:"--"}</div>
        </div>
        <div class="graph-body">
          ${o.length?Y`
                <canvas class="graph-canvas" data-key="${a}" data-color-class="${i}" aria-hidden="true"></canvas>
                <div class="graph-scale">
                  <span>${void 0!==d?`${d.toFixed(1)}${(null==r?void 0:r.unit)||"°C"}`:"--"}</span>
                  <span>${void 0!==c?`${c.toFixed(1)}${(null==r?void 0:r.unit)||"°C"}`:"--"}</span>
                </div>
              `:Y`<div class="graph-empty">No 24h data</div>`}
        </div>
      </div>
    `}render(){var t,e,i;if(!this.config)return Y``;if(!this.hass)return Y`<ha-card style="padding:16px;">Loading...</ha-card>`;const n=this.config.entity;let s=this.hass.states[n];s||(s={entity_id:n,state:"unavailable",attributes:{friendly_name:this.config.name||n}});let a=s.attributes.current_temperature;if((null===(t=this.config.sensors)||void 0===t?void 0:t.temp)&&this.hass.states[this.config.sensors.temp]){const t=this.hass.states[this.config.sensors.temp];isNaN(parseFloat(t.state))||(a=parseFloat(t.state))}let r=s.attributes.target_temp_low,o=s.attributes.target_temp_high;const l=s.attributes.temperature;void 0===r&&void 0!==l&&(r=l),void 0===o&&void 0!==l&&(o=l),void 0===r&&(r=20),void 0===o&&(o=24),(null===(e=this.config.sensors)||void 0===e?void 0:e.target_low)&&this.hass.states[this.config.sensors.target_low]&&(r=parseFloat(this.hass.states[this.config.sensors.target_low].state)),(null===(i=this.config.sensors)||void 0===i?void 0:i.target_high)&&this.hass.states[this.config.sensors.target_high]&&(o=parseFloat(this.hass.states[this.config.sensors.target_high].state));const c=this.config.hot_water_entity,d=c?this.hass.states[c]:void 0,h=Boolean(this.config.show_heating_graph),p=Boolean(this.config.show_hot_water_graph&&c),u=h?this._resolveHeatingGraphSource(n):void 0,g=p?this._resolveHotWaterGraphSource(c):void 0,m=this._getGradient(s,a,r,o),f=this.config.name||s.attributes.friendly_name||"Climate",_=s.attributes.hvac_action?this.hass.localize(`state_attributes.climate.hvac_action.${s.attributes.hvac_action}`):this.hass.localize(`component.climate.state._.${s.state}`)||s.state;let b="mdi:thermostat";const v=s.attributes.hvac_action||s.state;"heating"===v?b="mdi:fire":"cooling"===v?b="mdi:snowflake":"idle"===v?b="mdi:check-circle-outline":"off"===v&&(b="mdi:power-off");const y=[];u&&y.push(this._renderGraphTile("Inside 24h",u,"heating-graph",this._resolveHeatingActivitySource(n),n)),g&&y.push(this._renderGraphTile("Tank 24h",g,"tank-graph",this._resolveHotWaterActivitySource(),c));const x=2===y.length?"two-cols":"one-col";return Y`
      <ha-card @click="${this._openMoreInfo}">
        <div class="bg-layer" style="background: ${m};"></div>
        
        <div class="container">
          <div class="header">
           <div class="header-left">
             <div class="name">${f}</div>
             <div class="temp-big">
              ${void 0!==a?Y`${a}<span class="unit">°</span>`:"--"}
             </div>
           </div>
             <div class="header-right">
                <ha-icon icon="${b}" class="main-icon"></ha-icon>
                <div class="state-label">${_}</div>
             </div>
          </div>

          <div class="spacer"></div>

         <div class="metrics-row">
           <div class="footer-metrics">
               <div class="targets">
                 ${this._renderTargets(s,r,o)}
               </div>
               ${this._renderHotWater(d)}
             </div>
         </div>

          ${y.length?Y`
                <div class="graph-row ${x}">
                  ${y}
                </div>
              `:Y``}
        </div>
      </ha-card>
    `}_renderTargets(t,e,i){const n=t.state,s=this._getClimateModeIcon(t),a=this._getClimateActivityIndicator(t),r=[];return r.push(this._renderModeIcon(s,a)),"off"===n?(r.push(Y`<div class="divider"></div>`),r.push(Y`<div class="target-chip">OFF</div>`)):(r.push(Y`<div class="divider"></div>`),void 0!==e&&void 0!==i&&e!==i?r.push(Y`
              <div class="target-group">
                <div class="target-label">Min</div>
                <div class="target-val">${this._formatTemperature(e)}</div>
              </div>
              <div class="divider"></div>
              <div class="target-group">
                <div class="target-label">Max</div>
                <div class="target-val">${this._formatTemperature(i)}</div>
              </div>
            `):r.push(Y`
              <div class="target-group">
                <div class="target-label">Target</div>
                <div class="target-val">${this._formatTemperature(null!=e?e:i)}</div>
              </div>
            `)),Y`${r}`}_renderHotWater(t){if(!t)return Y``;const e=t.entity_id,i=t.attributes.temperature,n=t.attributes.current_temperature,s=this._getHotWaterModeIcon(t),a=this._isHotWaterActive(t)?{icon:"mdi:fire",tone:"heating"}:void 0;return Y`
        <div
          class="targets hot-water-bubble"
          @click=${t=>this._openEntityMoreInfo(e,t)}
        >
          ${this._renderModeIcon(s,a)}
          <div class="divider"></div>
          <div class="target-group">
            <div class="target-label">Set</div>
            <div class="target-val">${this._formatTemperature(i)}</div>
          </div>
          <div class="divider"></div>
          <div class="target-group">
            <div class="target-label">Temp</div>
            <div class="target-val">${this._formatTemperature(n)}</div>
          </div>
        </div>
      `}_openMoreInfo(){this._openEntityMoreInfo(this.config.entity)}_openEntityMoreInfo(t,e){if(null==e||e.stopPropagation(),t){const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}}static get styles(){return u`
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
    `}}customElements.get("slick-simple-climate-card")||customElements.define("slick-simple-climate-card",Mt);class At extends gt{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Y``;return Y`
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:"climate"}}},{name:"name",label:"Name",selector:{text:{}}},{name:"hot_water_entity",label:"Hot Water Entity",selector:{entity:{domain:"water_heater"}}},{name:"hot_water_active_entity",label:"Hot Water Active Entity",selector:{entity:{}}},{name:"show_heating_graph",label:"Show Heating 24h Graph",selector:{boolean:{}}},{name:"heating_graph_entity",label:"Heating Graph Entity (optional)",selector:{entity:{}}},{name:"show_hot_water_graph",label:"Show Hot Water 24h Graph",selector:{boolean:{}}},{name:"hot_water_graph_entity",label:"Hot Water Graph Entity (optional)",selector:{entity:{}}},{name:"show_activity_bands",label:"Shade Heating / Hot Water Periods in Graphs (default on)",selector:{boolean:{}}},{name:"heating_active_entity",label:"Heating Active Entity (optional, default: hvac_action)",selector:{entity:{}}}]}
          .computeLabel=${t=>t.label}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `}}customElements.get("slick-simple-climate-card-editor")||customElements.define("slick-simple-climate-card-editor",At),window.customCards=window.customCards||[],window.customCards.push({type:"slick-simple-climate-card",name:"Slick Simple Climate",preview:!0,description:"A clean climate card with dynamic gradients."});const Tt={id:"zeroLine",afterDraw(t){var e,i,n;if(!Boolean(null===(n=null===(i=null===(e=t.options)||void 0===e?void 0:e.plugins)||void 0===i?void 0:i.zeroLine)||void 0===n?void 0:n.enabled))return;const s=t.scales.y,a=t.chartArea;if(!s||!a)return;const r=s.getPixelForValue(0);if(!Number.isFinite(r))return;if(r<a.top||r>a.bottom)return;const o=t.ctx;o.save(),o.strokeStyle="rgba(255, 255, 255, 0.24)",o.lineWidth=1,o.beginPath(),o.moveTo(a.left,r),o.lineTo(a.right,r),o.stroke(),o.restore()}};t.register(e,i,n,s,a,r,o,Tt),console.info("%c ENERGY-FLOW-CARD %c 0.2.0 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");class It extends gt{constructor(){super(...arguments),this._graphHistory={},this._graphFetchInFlight=new Set,this._graphCacheMs=3e5,this._charts=new Map,this._chartGraphs=new Map,this._entityIds=new Set,this._solarTodayFromTotalCache={},this._solarTodayFromTotalFetchInFlight=new Set,this._solarTodayFromTotalCacheMs=3e5,this._cachedGradients=["",""],this._activeIndex=0,this._displayedGradientKey=null,this._lastValidStates=new Map,this._width=0,this._height=0}static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-energy-flow-card-editor")}static getStubConfig(){return{type:"custom:slick-energy-flow-card",title:"Energiefluss",solar_entity:"",grid_import_entity:"",grid_export_entity:"",battery_entity:"",battery_soc_entity:"",home_entity:""}}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={title:"Energiefluss",inverted_grid:!1,inverted_battery:!1,...t};if(e.inverted_grid&&"boolean"!=typeof e.inverted_grid)throw new Error("inverted_grid must be a boolean");if(e.inverted_battery&&"boolean"!=typeof e.inverted_battery)throw new Error("inverted_battery must be a boolean");this.config=e,this._entityIds=kt(this.config)}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect;this._width=t.width,this._height=t.height,this.requestUpdate()}}),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect();for(const t of this._charts.values())t.destroy();this._charts.clear(),this._chartGraphs.clear(),super.disconnectedCallback()}shouldUpdate(t){return St(t,this.hass,this._entityIds)}updated(){this._syncPowerCharts()}_getState(t){if(!t)return 0;const e=this._lastValidStates.get(t);if(!this.hass||!this.hass.states[t])return null!=e?e:0;const i=this.hass.states[t].state,n=parseFloat(i);return Number.isFinite(n)?(this._lastValidStates.set(t,n),n):null!=e?e:0}_formatEnergy(t){if(!Number.isFinite(t))return"--";return`${Math.abs(t)>=10?Math.round(t):Math.round(10*t)/10} kWh`}_convertEnergyToKwh(t,e){if(!Number.isFinite(t))return t;const i=String(e||"").toLowerCase();return i.includes("mwh")?1e3*t:i.includes("wh")&&!i.includes("kwh")?t/1e3:t}_getEntityEnergyInKwh(t){var e,i,n;if(!t||!(null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t]))return;const s=this.hass.states[t],a=parseFloat(String(s.state));return Number.isFinite(a)?this._convertEnergyToKwh(a,null===(n=s.attributes)||void 0===n?void 0:n.unit_of_measurement):void 0}_isSolarTodayFromTotalFresh(t){const e=this._solarTodayFromTotalCache[t];return!!e&&Date.now()-e.fetchedAt<this._solarTodayFromTotalCacheMs}async _ensureSolarTodayFromTotal(t){var e;if(!t||!this.hass||this._isSolarTodayFromTotalFresh(t)||this._solarTodayFromTotalFetchInFlight.has(t))return;this._solarTodayFromTotalFetchInFlight.add(t);const i=new Date,n=new Date(i);n.setHours(0,0,0,0);try{const s=await this.hass.callApi("GET",`history/period/${n.toISOString()}?filter_entity_id=${encodeURIComponent(t)}&end_time=${i.toISOString()}`),a=(null==s?void 0:s[0])||[],r=this.hass.states[t],o=null===(e=null==r?void 0:r.attributes)||void 0===e?void 0:e.unit_of_measurement,l=a.map(t=>parseFloat(String(t.state))).filter(t=>Number.isFinite(t)).map(t=>this._convertEnergyToKwh(t,o));if(!l.length)return;let c=0,d=l[0];for(let t=1;t<l.length;t++){const e=l[t];e>=d?c+=e-d:e>=0&&(c+=e),d=e}this._solarTodayFromTotalCache[t]={value:Math.max(0,c),fetchedAt:Date.now()}}catch(e){console.error("EnergyFlow: Solar today-from-total fetch failed",t,e)}finally{this._solarTodayFromTotalFetchInFlight.delete(t),this.requestUpdate()}}_getSolarEnergySummary(t){var e,i,n,s,a;const r=this._getEntityEnergyInKwh(this.config.solar_today_energy_entity),o=this.config.solar_total_energy_entity?null===(e=this._solarTodayFromTotalCache[this.config.solar_total_energy_entity])||void 0===e?void 0:e.value:void 0;this.config.solar_total_energy_entity&&!this._isSolarTodayFromTotalFresh(this.config.solar_total_energy_entity)&&this._ensureSolarTodayFromTotal(this.config.solar_total_energy_entity);const l=null!==(i=null!=r?r:o)&&void 0!==i?i:this._getNumericAttribute(t,["today_energy","energy_today","total_energy_today","yield_today","energy_produced_today"]),c=null!==(n=this._getEntityEnergyInKwh(this.config.solar_expected_energy_entity))&&void 0!==n?n:this._getNumericAttribute(t,["forecast_today","energy_forecast_today","prognose_heute","predicted_energy_today","estimated_energy_today"]),d=null!==(s=this._getEntityEnergyInKwh(this.config.solar_remaining_energy_entity))&&void 0!==s?s:this._getNumericAttribute(t,["remaining_today","forecast_remaining","prognose_verbleibende_leistung_heute","remaining_energy_today","remaining_energy"]),h=null!=c?c:void 0!==l&&void 0!==d?l+d:void 0;if(void 0!==l||void 0!==h)return void 0!==l&&void 0!==h?`${this._formatEnergy(l)} / ${this._formatEnergy(h)}`:this._formatEnergy(null!==(a=null!=l?l:h)&&void 0!==a?a:0)}_getNumericAttribute(t,e){if(null==t?void 0:t.attributes)for(const i of e){const e=parseFloat(String(t.attributes[i]));if(Number.isFinite(e))return e}}_getGraphCacheKey(t){return`${t.entityId}${t.centered?"::centered":""}${t.invert?"::invert":""}${t.absolute?"::abs":""}${t.zeroMin?"::zmin":""}`}_isGraphFresh(t){const e=this._graphHistory[this._getGraphCacheKey(t)];return!!e&&Date.now()-e.fetchedAt<this._graphCacheMs}_downsamplePoints(t,e){if(t.length<=e)return t;const i=[],n=(t.length-1)/(e-1);for(let s=0;s<e;s++){const e=Math.round(s*n);i.push(t[e])}return i}_smoothSeries(t,e=5){if(t.length<3||e<=1)return t;const i=Math.floor(e/2);return t.map((e,n)=>{const s=Math.max(0,n-i),a=Math.min(t.length-1,n+i);let r=0,o=0;for(let e=s;e<=a;e++)r+=t[e],o+=1;return o?r/o:t[n]})}_getChartPalette(t){return t.includes("home-chart")?{line:"#63c774",fill:"rgba(99, 199, 116, 0.18)"}:t.includes("grid-import-chart")?{line:"#8e66ff",fill:"rgba(142, 102, 255, 0.18)"}:t.includes("grid-export-chart")?{line:"#5ea1ff",fill:"rgba(94, 161, 255, 0.18)"}:{line:"#f6c945",fill:"rgba(246, 201, 69, 0.20)"}}_syncPowerCharts(){const e=this.renderRoot.querySelectorAll("canvas.stat-chart-canvas[data-chart-key]"),i=new Set;e.forEach(e=>{var n;const s=e.dataset.chartKey,a=e.dataset.sourceKey,r=e.dataset.colorClass||"solar-chart",o="1"===e.dataset.centered,l="1"===e.dataset.zeroMin;if(!s||!a)return;i.add(s);const c=this._graphHistory[a];if(!(null===(n=null==c?void 0:c.points)||void 0===n?void 0:n.length))return;const d=c.points,h=d.map((t,e)=>e),p=this._getChartPalette(r),u=d.length-1,g=o&&r.includes("grid-centered-chart");let m,f;if(o){const t=Math.max(...d.map(t=>Math.abs(t)),.1);m=-t,f=t}else{const t=[...d].sort((t,e)=>t-e),e=t[Math.floor(.1*(t.length-1))],i=t[Math.floor(.9*(t.length-1))],n=Math.min(...d),s=Math.max(...d);if(m=l?0:Math.min(n,e),f=Math.max(s,i),f-m<.1){const t=(f+m)/2;m=t-.05,f=t+.05}}const _=this._charts.get(s),b=d.map(t=>t>0?t:null),v=d.map(t=>t<0?t:null);if(_&&_.canvas===e){if(this._chartGraphs.get(s)===c)return;if(this._chartGraphs.set(s,c),_.data.labels=h,g&&2===_.data.datasets.length){const t=_.data.datasets[0],e=_.data.datasets[1];t.data=b,e.data=v}else{const t=_.data.datasets[0];t.data=d,t.borderColor=p.line,t.backgroundColor=o?"rgba(0,0,0,0)":p.fill,t.tension=.58,t.cubicInterpolationMode="monotone"}return _.options.plugins.zeroLine={enabled:o},_.options.scales={x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1},min:m,max:f}},void _.update("none")}_&&_.destroy();const y=e.getContext("2d");if(!y)return;const x=new t(y,{type:"line",data:{labels:h,datasets:g?[{data:b,borderColor:"#8e66ff",backgroundColor:"rgba(142, 102, 255, 0.18)",fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:0,pointHoverRadius:0,pointBackgroundColor:"#8e66ff",pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6},{data:v,borderColor:"#5ea1ff",backgroundColor:"rgba(94, 161, 255, 0.18)",fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:t=>t.dataIndex===u?1.4:0,pointHoverRadius:0,pointBackgroundColor:"#5ea1ff",pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6}]:[{data:d,borderColor:p.line,backgroundColor:o?"rgba(0,0,0,0)":p.fill,fill:!o,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:t=>t.dataIndex===u?1.4:0,pointHoverRadius:0,pointBackgroundColor:p.line,pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1},zeroLine:{enabled:o}},scales:{x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1},min:m,max:f}},elements:{line:{capBezierPoints:!0}},layout:{padding:{top:3,right:0,bottom:3,left:0}}}});this._charts.set(s,x),this._chartGraphs.set(s,c)});for(const[t,e]of this._charts.entries())i.has(t)||(e.destroy(),this._charts.delete(t),this._chartGraphs.delete(t))}async _ensureGraphHistory(t){const e=this._getGraphCacheKey(t);if(this._isGraphFresh(t)||this._graphFetchInFlight.has(e)||!this.hass)return;this._graphFetchInFlight.add(e);const i=new Date,n=new Date(i.getTime()-864e5);try{const s=await this.hass.callApi("GET",`history/period/${n.toISOString()}?filter_entity_id=${encodeURIComponent(t.entityId)}&end_time=${i.toISOString()}`),a=((null==s?void 0:s[0])||[]).map(t=>parseFloat(String(t.state))).filter(t=>Number.isFinite(t)).map(e=>t.invert?-e:e).map(e=>t.absolute?Math.abs(e):e),r=Math.max(28,Math.min(64,Math.round((this._width||320)/8))),o=this._downsamplePoints(a,r),l=this._smoothSeries(o,7);this._graphHistory[e]={points:l,fetchedAt:Date.now()}}catch(e){console.error("EnergyFlow: Graph history fetch failed",t,e)}finally{this._graphFetchInFlight.delete(e),this.requestUpdate()}}_renderPowerChart(t,e="solar-chart"){if(!t)return Y``;const i=this._getGraphCacheKey(t),n=this._graphHistory[i];n&&this._isGraphFresh(t)||this._ensureGraphHistory(t);if(!((null==n?void 0:n.points)||[]).length)return Y``;return Y`
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
    `}_openEntityMoreInfo(t,e){null==e||e.stopPropagation(),t&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}_handleEntityKeyDown(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._openEntityMoreInfo(e,t))}_getGridDetailEntity(t){return this.config.grid_entity?this.config.grid_entity:t>10&&this.config.grid_import_entity?this.config.grid_import_entity:t<-10&&this.config.grid_export_entity?this.config.grid_export_entity:this.config.grid_import_entity||this.config.grid_export_entity}_getBatteryDetailEntity(){return this.config.battery_entity||this.config.battery_soc_entity}_formatPower(t){const e=Math.abs(t);return e>=1e3?`${(e/1e3).toFixed(1)} kW`:`${Math.round(e)} W`}_clamp(t,e=0,i=1){return Math.min(i,Math.max(e,t))}_mixHexColors(t,e,i){const n=this._clamp(i),s=t=>{const e=t.replace("#","");return 3===e.length?e.split("").map(t=>`${t}${t}`).join(""):e},a=s(t),r=s(e),o=parseInt(a.slice(0,2),16),l=parseInt(a.slice(2,4),16),c=parseInt(a.slice(4,6),16),d=parseInt(r.slice(0,2),16),h=parseInt(r.slice(2,4),16),p=parseInt(r.slice(4,6),16);return`#${[Math.round(o+(d-o)*n),Math.round(l+(h-l)*n),Math.round(c+(p-c)*n)].map(t=>t.toString(16).padStart(2,"0")).join("")}`}_withAlpha(t,e){const i=t.replace("#",""),n=3===i.length?i.split("").map(t=>`${t}${t}`).join(""):i;return`rgba(${parseInt(n.slice(0,2),16)}, ${parseInt(n.slice(2,4),16)}, ${parseInt(n.slice(4,6),16)}, ${this._clamp(e)})`}_getLogarithmicPowerRatio(t,e=1e4,i=250){const n=Math.abs(t);if(n<=0||e<=0||i<=0)return 0;const s=Math.min(n,e),a=Math.log1p(s/i),r=Math.log1p(e/i);return r<=0?0:this._clamp(a/r)}_getSolarPowerRatio(t){return this._getLogarithmicPowerRatio(t,1e4,120)}_getNeutralEnergyColor(){return"#273844"}_buildBackgroundGradient(t,e){const i=this._getNeutralEnergyColor(),n=this._getSolarPowerRatio(t),s=this._mixHexColors(i,e,.28),a=this._mixHexColors("#314652",e,.42),r=this._mixHexColors(i,e,.62);return`${t>10?`radial-gradient(circle at 50% -8%, ${this._withAlpha("#ffffff",.26+.26*n)} 0%, ${this._withAlpha(e,.18+.2*n)} 34%, rgba(0, 0, 0, 0) 66%)`:"radial-gradient(circle at 50% -8%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 66%)"}, ${t>10?`linear-gradient(180deg, ${this._withAlpha(e,.24+.14*n)} 0%, ${this._withAlpha(e,.08)} 42%, rgba(0, 0, 0, 0) 68%)`:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 68%)"}, linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 32%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(4, 10, 14, 0.18) 100%), ${`linear-gradient(180deg, ${s} 0%, ${a} 48%, ${r} 100%)`}`}_getFlowMode(t,e,i,n){const s=Math.max(120,.06*t),a=t>e+s;if(e>t+s){return Math.max(i,0)>=Math.max(n,0)?"deficit_grid":"deficit_battery"}if(a){return Math.max(-n,0)>=Math.max(-i,0)?"surplus_battery":"surplus_grid"}return"balanced"}_getFlowModeColor(t){switch(t){case"deficit_grid":return"#8f6dff";case"deficit_battery":return"#ff9e4a";case"surplus_battery":return"#35cfc5";case"surplus_grid":return"#4f90ff";default:return"#63c774"}}_getFlowModeLabel(t){switch(t){case"deficit_grid":return"Bezug";case"deficit_battery":return"Entladung";case"surplus_battery":return"Ladung";case"surplus_grid":return"Einspeisung";default:return"Balance"}}render(){if(!this.config)return Y``;const t=this.hass,e=t?this._getState(this.config.solar_entity):0;let i=0;if(this.config.grid_entity)i=t?this._getState(this.config.grid_entity):0,this.config.inverted_grid&&(i=-i);else{i=this._getState(this.config.grid_import_entity)-this._getState(this.config.grid_export_entity)}let n=this._getState(this.config.battery_entity);const s=this._getState(this.config.battery_soc_entity),a=this.config.autarky_entity?this._getState(this.config.autarky_entity):null,r=this.config.self_consumption_entity?this._getState(this.config.self_consumption_entity):null;this.config.inverted_battery&&(n=-n);let o=0;o=this.config.home_entity?this._getState(this.config.home_entity):e+i+n,o=Math.abs(o);const l=!!this.config.battery_entity&&""!==this.config.battery_entity||!!this.config.battery_soc_entity&&""!==this.config.battery_soc_entity,c=n<-10,d=n>10,h=this._getFlowMode(e,o,i,n),p=this._getFlowModeColor(h),u=e>10,g=this._buildBackgroundGradient(e,p),m=this.config.solar_entity?this.hass.states[this.config.solar_entity]:void 0,f=this._getSolarEnergySummary(m),_=this.config.solar_entity?{entityId:this.config.solar_entity}:void 0,b=this.config.grid_entity?{entityId:this.config.grid_entity,centered:!0,invert:Boolean(this.config.inverted_grid)}:void 0,v=this.config.home_entity?{entityId:this.config.home_entity,absolute:!0,zeroMin:!0}:void 0,y=this.config.solar_entity,x=this.config.home_entity,w=this._getGridDetailEntity(i),$=this._getBatteryDetailEntity(),k=p,S=k,C=`${p}:${u?"pv":"no-pv"}`;if(C!==this._displayedGradientKey){const t=(this._activeIndex+1)%2;this._cachedGradients[t]=g,this._activeIndex=t,this._displayedGradientKey=C}const E=Y`<ha-icon icon="mdi:solar-power-variant"></ha-icon>`,M=Y`<ha-icon icon="mdi:transmission-tower"></ha-icon>`,A=Y`<ha-icon icon="mdi:home"></ha-icon>`,T=this._height>0&&(this._height<120||this._width<200),I=this._height>0&&!T&&this._height<210;let z="mdi:battery";const R=10*Math.round(s/10);z=R<=0?"mdi:battery-outline":R>=100?"mdi:battery":`mdi:battery-${R}`,c?z="mdi:battery-arrow-up":d&&(z="mdi:battery-arrow-down");const P=Y`<ha-icon icon="${z}"></ha-icon>`;return Y`
      <ha-card class="${T?"tiny":""} ${I?"small":""}" style="--flow-accent: ${k}; --flow-accent-soft: ${this._mixHexColors(k,"#ffffff",.28)}; box-shadow: inset 0 0 0 1px ${this._withAlpha(S,.28)};">
        <div class="bg-layer" style="background: ${this._cachedGradients[0]}; opacity: ${0===this._activeIndex?1:0}"></div>
        <div class="bg-layer" style="background: ${this._cachedGradients[1]}; opacity: ${1===this._activeIndex?1:0}"></div>
        
        <!-- Tiny Mode Battery Indicator (Top Right) -->
        ${T&&l?Y`
            <div class="status-badge" style="position: absolute; top: 6px; right: 8px; z-index: 2; display: flex; align-items: center; gap: 4px;">
                <span style="color: ${s<20?"#ff3b30":"inherit"}; display: flex; width: 14px;">${P}</span>
                <span>${Math.round(s)}%</span>
            </div>
        `:""}

        <div class="content">
          ${T?"":Y`
              <div class="header">
                <span class="title">${this.config.title}</span>
                <div class="badges">
                     ${null!==a?Y`<span class="status-badge" title="Autarkie"><span class="badge-label">AUT</span> ${Math.round(a)}%</span>`:""}
                     ${null!==r?Y`<span class="status-badge" title="Eigenverbrauch"><span class="badge-label">EIG</span> ${Math.round(r)}%</span>`:""}
                     <span class="status-badge flow-badge" style="background: ${this._withAlpha(k,.28)}; border-color: ${this._withAlpha(k,.55)}; color: white;">${this._getFlowModeLabel(h)}</span>
                     
                     <!-- Small Mode Battery Badge (Inline) -->
                     ${I&&l?Y`
                        <span class="status-badge" style="display: inline-flex; align-items: center; gap: 4px; padding-left: 6px;">
                            <span style="color: ${s<20?"#ff3b30":"inherit"}; display: flex; width: 14px;">${P}</span>
                            ${Math.round(s)}%
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
                    class="icon-circle mini solar-icon ${y?"interactive-target":""}"
                    role="${y?"button":"img"}"
                    tabindex="${y?"0":"-1"}"
                    aria-label="${y?"Solarverlauf anzeigen":"Solar"}"
                    @click=${t=>this._openEntityMoreInfo(y,t)}
                    @keydown=${t=>this._handleEntityKeyDown(t,y)}
                  >${E}</div>
                  ${T?"":Y`<div class="stat-label chip-label">Solar</div>`}
                </div>
                ${T||I?"":this._renderPowerChart(_,"solar-chart")}
                <div class="stat-value">${this._formatPower(e)}</div>
                ${f?Y`<div class="stat-detail solar-detail">${f}</div>`:""}
              </div>
            </div>

            <!-- HOME (Center) -->
            <div class="stat-block home">
              <div class="stat-chip">
                <div class="stat-top">
                  <div
                    class="icon-circle mini home-icon ${x?"interactive-target":""}"
                    role="${x?"button":"img"}"
                    tabindex="${x?"0":"-1"}"
                    aria-label="${x?"Hausverbrauchsverlauf anzeigen":"Haus"}"
                    @click=${t=>this._openEntityMoreInfo(x,t)}
                    @keydown=${t=>this._handleEntityKeyDown(t,x)}
                  >${A}</div>
                  ${T?"":Y`<div class="stat-label chip-label">Haus</div>`}
                </div>
                ${T||I?"":this._renderPowerChart(v,"home-chart")}
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
                  ${T?"":Y`<span class="stat-label chip-label">${i>0?"Netz (Bezug)":"Netz (Einsp.)"}</span>`}
                </div>
                ${T||I?"":this._renderPowerChart(b,"grid-centered-chart")}
                <div class="stat-value">${this._formatPower(Math.abs(i))}</div>
              </div>
            </div>
          </div>

          <!-- BATTERY (Bottom - Only Large Mode) -->
          ${!l||T||I?"":Y`
            <div
                class="battery-section ${$?"interactive-target":""}"
                role="${$?"button":"group"}"
                tabindex="${$?"0":"-1"}"
                aria-label="${$?"Batterieverlauf anzeigen":"Batterie"}"
                @click=${t=>this._openEntityMoreInfo($,t)}
                @keydown=${t=>this._handleEntityKeyDown(t,$)}
            >
                <div class="batt-info">
                   <span class="batt-icon" style="color: ${s<20?"#ff3b30":"inherit"}">${P}</span>
                   <span class="batt-pct">${Math.round(s)}%</span>
                   <span class="batt-power">${Math.abs(n)>0?this._formatPower(n):"Standby"}</span>
                   <span class="batt-state">${c?"Laden":d?"Entladen":""}</span>
                </div>
                <div class="batt-bar-bg">
                    <div class="batt-bar-fill" style="width: ${s}%; background: ${s<20?"linear-gradient(90deg, #ff453a 0%, #ff8a80 100%)":"linear-gradient(90deg, #4f95ff 0%, #8fbfff 100%)"}"></div>
                </div>
            </div>
          `}

        </div>
      </ha-card>
    `}static get styles(){return u`
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
    `}}customElements.get("slick-energy-flow-card")||customElements.define("slick-energy-flow-card",It);class zt extends gt{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config,...t.detail.value}},bubbles:!0,composed:!0}))}render(){if(!this.hass||!this._config)return Y``;return Y`<ha-form .hass=${this.hass} .data=${this._config} .schema=${[{name:"title",label:"Titel",selector:{text:{}}},{name:"solar_entity",label:"Solar Leistung",selector:{entity:{domain:"sensor"}}},{name:"solar_today_energy_entity",label:"Solar Erzeugt heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"solar_total_energy_entity",label:"Solar Gesamtzähler (Opt, seit 0 Uhr berechnen)",selector:{entity:{domain:"sensor"}}},{name:"solar_expected_energy_entity",label:"Solar Erwartet heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"solar_remaining_energy_entity",label:"Solar Rest heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"grid_entity",label:"Netz Leistung",selector:{entity:{domain:"sensor"}}},{name:"battery_entity",label:"Batterie Leistung (Opt)",selector:{entity:{domain:"sensor"}}},{name:"battery_soc_entity",label:"Batterie Stand % (Opt)",selector:{entity:{domain:"sensor"}}},{name:"home_entity",label:"Haus Verbrauch (Opt)",selector:{entity:{domain:"sensor"}}},{name:"inverted_grid",label:"Invertiere Grid (+ ist Export)",selector:{boolean:{}}},{name:"inverted_battery",label:"Invertiere Batt (+ ist Laden)",selector:{boolean:{}}}]} .computeLabel=${t=>t.label} @value-changed=${this._valueChanged}></ha-form>`}}customElements.get("slick-energy-flow-card-editor")||customElements.define("slick-energy-flow-card-editor",zt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-energy-flow-card",name:"Slick Energy Flow",preview:!0,description:"Modern energy flow visualization."});console.info("%c PERSON-CARD %c 0.2.0 ","color: white; background: #9c27b0; font-weight: 700;","color: #9c27b0; background: white; font-weight: 700;");class Rt extends gt{static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-person-card-editor")}static getStubConfig(t){let e=[];return t&&t.states&&(e=Object.keys(t.states).filter(t=>t.startsWith("person."))),{type:"custom:slick-person-card",people:e,layout:"wrap"}}getCardSize(){return 1}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={layout:"wrap",...t};if(!e.entity||e.people&&0!==e.people.length||(e.people=[e.entity]),e.layout&&!["wrap","horizontal"].includes(e.layout))throw new Error("layout must be wrap or horizontal");this.config=e}render(){if(!this.config)return Y``;if(!this.hass)return Y`<ha-card style="padding: 10px;">Loading persons...</ha-card>`;const t="horizontal"===this.config.layout,e=this.config.people||[],i="\n      width: 38px;\n      height: 38px;\n      border-radius: 50%;\n    ";return Y`
      <div class="person-container ${t?"horizontal":""}">
        ${e.map(t=>{const e=this.hass.states[t];if(!e)return Y`
            <div class="person-card away" style="${i}; display: flex; align-items: center; justify-content: center; background-color: #555;">
               <span style="font-size: 0.5em; text-align: center; color: white;">?</span>
            </div>
          `;const n="home"===e.state,s=e.attributes.entity_picture;return Y`
            <div class="person-card ${n?"home":"away"}" 
                 style="background-image: url('${s}'); ${i}">
            </div>
          `})}
      </div>
    `}}Rt.styles=u`
    :host {
      display: block;
      height: 100%;
    }
    .person-container {
      display: flex;
      flex-wrap: nowrap;
      gap: 8px;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      box-sizing: border-box;
      padding: 8px;
      overflow: hidden;
    }
    .person-container.horizontal {
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: 4px;
      scrollbar-width: none;
    }
    .person-container.horizontal::-webkit-scrollbar { 
      display: none;
    }
    
    .person-card {
      position: relative;
      /* width & height set by inline style */
      flex-shrink: 0;
      border-radius: var(--ha-card-border-radius, 12px);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: var(--secondary-background-color);
      overflow: hidden;
      box-shadow: var(--ha-card-box-shadow, none);
      transition: filter 0.3s ease;
    }
    .person-card.away {
      filter: grayscale(100%);
    }
    .person-card.home {
      filter: grayscale(0%);
    }
  `,customElements.get("slick-person-card")||customElements.define("slick-person-card",Rt);class Pt extends gt{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){const e={...t};!e.entity||e.people&&0!==e.people.length||(e.people=[e.entity]),this._config=e}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;this._config=e;const i=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Y``;return Y`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"people",label:"People",selector:{entity:{domain:["person","device_tracker"],multiple:!0}}},{name:"layout",label:"Layout",selector:{select:{mode:"dropdown",options:[{value:"wrap",label:"Wrap (Grid)"},{value:"horizontal",label:"Horizontal Scroll (Chips)"}]}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-person-card-editor")||customElements.define("slick-person-card-editor",Pt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-person-card",name:"Slick Person",preview:!0,description:"A round person badge/card."}),window.customBadges=window.customBadges||[],window.customBadges.push({type:"slick-person-card",name:"Slick Person Badge",description:"A round person badge.",preview:!0});console.info("%c VACUUM-CARD %c 0.2.0 ","color: white; background: #673ab7; font-weight: 700;","color: #673ab7; background: white; font-weight: 700;");class Dt extends gt{constructor(){super(...arguments),this._tempTime=null,this._touchStartState=null,this._discoveredBatteryEntity=null,this._discoveredRoomEntity=null,this._deviceAreaName=null,this._discoveryAttempted=!1,this._swipeOffset=0,this._isSwiping=!1,this._swipeStartX=0,this._isTriggered=!1,this._isCompact=!1,this._isShort=!1,this._isTiny=!1,this._inputStartY=0,this._inputTargetString=null,this._isDragging=!1}static get properties(){return{hass:{attribute:!1},config:{state:!0},_tempTime:{state:!0},_discoveredBatteryEntity:{state:!0},_discoveredRoomEntity:{state:!0},_deviceAreaName:{state:!0},_swipeOffset:{state:!0},_isCompact:{state:!0},_isShort:{state:!0},_isTiny:{state:!0},_isTriggered:{state:!0}}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect.width,i=e.contentRect.height;this._isCompact=t<300,this._isShort=i<180,this._isTiny=i<100}}),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect(),super.disconnectedCallback()}static getStubConfig(){return{type:"custom:slick-vacuum-card",entity:"vacuum.robotic_vacuum_cleaner",start_button_entity:"input_button.start_vacuum_eg",automation_entity:"automation.bodenreinigung_erdgeschoss",schedule_time_entity:"input_datetime.staubsauger_start"}}static getConfigElement(){return document.createElement("slick-vacuum-card-editor")}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("Entity is required");this.config&&this.config.entity!==t.entity&&(this._discoveredBatteryEntity=null,this._discoveredRoomEntity=null,this._deviceAreaName=null,this._discoveryAttempted=!1),this.config=t}shouldUpdate(t){return!(!this.config||!this.hass)}updated(t){var e;super.updated(t),this._discoveredBatteryEntity&&this._discoveredRoomEntity&&this._deviceAreaName||this._discoveryAttempted||!this.hass||!(null===(e=this.config)||void 0===e?void 0:e.entity)||(this._discoveryAttempted=!0,this._fetchRelatedEntities())}async _fetchRelatedEntities(){try{const t=await this.hass.callWS({type:"search/related",item_type:"entity",item_id:this.config.entity});if(!t||!t.device||0===t.device.length)return;const e=t.device[0];if(this.hass.devices&&this.hass.areas){const t=this.hass.devices[e];if(t&&t.area_id){const e=this.hass.areas[t.area_id];e&&e.name&&(this._deviceAreaName=e.name,console.debug("VacuumCard: Discovered device area",this._deviceAreaName))}}const i=await this.hass.callWS({type:"search/related",item_type:"device",item_id:e});if(!i||!i.entity)return;const n=i.entity;if(!this._discoveredBatteryEntity){const t=n.filter(t=>{const e=this.hass.states[t];return!!t.startsWith("sensor.")&&(!!e&&("battery"===e.attributes.device_class||!!t.includes("battery")))});if(t.length>0){const e=t.find(t=>"battery"===this.hass.states[t].attributes.device_class)||t[0];this._discoveredBatteryEntity=e,console.debug("VacuumCard: Discovered battery entity",e)}}if(!this._discoveredRoomEntity){const t=n.filter(t=>{const e=this.hass.states[t];if(!t.startsWith("sensor."))return!1;if(!e)return!1;const i=t.toLowerCase();return i.includes("room")||i.includes("raum")||i.includes("zone")||i.includes("aktueller_raum")});t.length>0&&(this._discoveredRoomEntity=t[0],console.debug("VacuumCard: Discovered room entity",this._discoveredRoomEntity))}}catch(t){console.warn("VacuumCard: Error discovering related entities",t)}}_getActionMode(){const t=this.hass.states[this.config.entity];return t?["cleaning","error","paused"].includes(t.state)?"return":"docked"===t.state?"start":"none":"none"}_checkAutomationButtonVisibility(){return!!this.config.automation_entity}_handleStartClean(t){t&&t.stopPropagation(),this.config.start_button_entity?this.hass.callService("input_button","press",{entity_id:this.config.start_button_entity}):this.hass.callService("vacuum","start",{entity_id:this.config.entity})}_handleReturnHome(t){t&&t.stopPropagation(),this.hass.callService("vacuum","return_to_base",{entity_id:this.config.entity})}_handleMoreInfo(t){if(t.composedPath().some(t=>t.classList&&t.classList.contains("actions")))return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleToggleAutomation(t){t&&t.stopPropagation(),this.config.automation_entity&&this.hass.callService("automation","toggle",{entity_id:this.config.automation_entity})}_getDateTimeParts(){if(!this.config.schedule_time_entity)return null;const t=this.hass.states[this.config.schedule_time_entity];if(!t)return null;let{hour:e,minute:i}=t.attributes;if(void 0===e||void 0===i){const n=t.state.split(":");if(!(n.length>=2))return null;e=parseInt(n[0]),i=parseInt(n[1])}return{hour:e,minute:i}}_onInputStart(t,e){if(0!==t.button&&1!==t.buttons)return;t.currentTarget.setPointerCapture(t.pointerId),this._isDragging=!0,this._inputStartY=t.clientY,this._inputTargetString=e;const i=this._getDateTimeParts();i&&(this._touchStartState=i,this._tempTime={...i})}_onInputMove(t){if(!(this._isDragging&&this._inputTargetString&&this._touchStartState&&this._tempTime))return;t.preventDefault();const e=t.clientY,i=this._inputStartY-e,n=Math.round(i/15);if(0!==n)if("hour"===this._inputTargetString){let t=(this._touchStartState.hour+n)%24;t<0&&(t+=24),this._tempTime={...this._tempTime,hour:t}}else{let t=(this._touchStartState.minute+n)%60;t<0&&(t+=60),this._tempTime={...this._tempTime,minute:t}}}_onInputEnd(t){if(!this._isDragging)return;this._isDragging=!1;if(t.currentTarget.releasePointerCapture(t.pointerId),!this._inputTargetString||!this._tempTime)return void this._cleanupInput();const{hour:e,minute:i}=this._tempTime,n=`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:00`;this.hass.callService("input_datetime","set_datetime",{entity_id:this.config.schedule_time_entity,time:n}),this._cleanupInput()}_cleanupInput(){this._inputTargetString=null,this._tempTime=null,this._touchStartState=null}_onSwipeStart(t){if(0!==t.button&&1!==t.buttons)return;t.currentTarget.setPointerCapture(t.pointerId),this._isSwiping=!0,this._swipeStartX=t.clientX,this._swipeOffset=0}_onSwipeMove(t){if(!this._isSwiping)return;const e=t.currentTarget,i=e.parentElement;if(!i)return;const n=t.clientX-this._swipeStartX,s=i.clientWidth-e.clientWidth-8,a=Math.max(0,Math.min(n,s));this._swipeOffset=a}_onSwipeEnd(t){if(!this._isSwiping)return;this._isSwiping=!1;const e=t.currentTarget;e.releasePointerCapture(t.pointerId);const i=e.parentElement;if(i){const t=i.clientWidth-e.clientWidth-8;if(this._swipeOffset>.9*t&&!this._isTriggered){const t=this._getActionMode();this._isTriggered=!0,"start"===t?this._handleStartClean():"return"===t&&this._handleReturnHome(),navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{this._isTriggered=!1,this._swipeOffset=0},4e3)}}this._isTriggered||(this._swipeOffset=0)}_getStatusIcon(t){switch(t){case"cleaning":default:return"mdi:robot-vacuum";case"docked":return"mdi:robot-vacuum-off";case"returning":return"mdi:home-import-outline";case"error":return"mdi:alert-circle";case"paused":return"mdi:pause-circle";case"idle":return"mdi:robot-vacuum-variant"}}_getStatusLabel(t){switch(t){case"cleaning":return"Cleaning";case"docked":return"Docked";case"returning":return"Returning";case"error":return"Error";case"paused":return"Paused";case"idle":return"Idle";default:return t}}render(){var t;if(!this.config||!this.hass)return Y``;const e=this.hass.states[this.config.entity];if(!e)return Y`<div>Vacuum not found</div>`;const i=e.state,n=e.attributes;let s=null;if(this._discoveredBatteryEntity){const t=this.hass.states[this._discoveredBatteryEntity];t&&!isNaN(parseFloat(t.state))&&(s=Math.round(parseFloat(t.state)))}if(null===s){const t=void 0!==n.battery_level?n.battery_level:n.battery;if(void 0!==t){const e=parseFloat(t);isNaN(e)||(s=Math.round(e))}}let a="mdi:battery-unknown";null!==s&&(a=s>=90?"mdi:battery":s>=70?"mdi:battery-80":s>=50?"mdi:battery-50":s>=30?"mdi:battery-40":"mdi:battery-20");const r=this._getStatusLabel(i);let o=null;if(this._discoveredRoomEntity){const t=this.hass.states[this._discoveredRoomEntity];t&&t.state&&"unknown"!==t.state&&"unavailable"!==t.state&&(o=t.state)}!o&&this._deviceAreaName&&(o=this._deviceAreaName);const l=n.friendly_name||this.config.entity,c=[n.cleaned_area?`${n.cleaned_area} m²`:null,n.cleaning_time?`${n.cleaning_time} min`:null].filter(Boolean).join(" • ");let d="--",h="--";if(this._tempTime)d=this._tempTime.hour.toString().padStart(2,"0"),h=this._tempTime.minute.toString().padStart(2,"0");else{const t=this._getDateTimeParts();t&&(d=t.hour.toString().padStart(2,"0"),h=t.minute.toString().padStart(2,"0"))}const p=this.config.automation_entity?null===(t=this.hass.states[this.config.automation_entity])||void 0===t?void 0:t.state:"off";let u="rgba(55, 71, 79, 0.25)";["cleaning","returning"].includes(i)?u="rgba(33, 150, 243, 0.25)":"error"===i&&(u="rgba(244, 67, 54, 0.25)");let g="rgba(158, 158, 158, 0.25)";null!==s&&(g=s>=80?"rgba(76, 175, 80, 0.25)":s>=40?"rgba(255, 193, 7, 0.25)":"rgba(244, 67, 54, 0.25)");const m=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||"#fff",f=this._getActionMode();return Y`
      <div class="vacuum-card-container ${this._isTiny?"tiny":this._isShort?"short":""}" 
           style="background: linear-gradient(to bottom, ${u} 0%, ${g} 100%), ${m};"
           @click=${this._handleMoreInfo}>
        <div class="header">
          <div class="icon-container state-${i}">
            <ha-icon icon="${this._getStatusIcon(i)}"></ha-icon>
          </div>
          <div class="info">
             <div class="status">${l}</div>
             ${this._isShort?Y`
                 <!-- Short Mode: Condensed Info -->
                 <div class="room" style="font-size: 0.9rem; opacity: 0.8;">
                    ${r} 
                    ${null!==s?Y` • ${s}%`:""}
                 </div>
             `:Y`
                 <div class="room">${r} ${o?Y`${o}`:""}</div>
                 <div class="battery">
                   ${null!==s?Y`<ha-icon icon="${a}"></ha-icon> ${s}%`:""} 
                   ${!o&&n.fan_speed?`• ${n.fan_speed}`:""}
                 </div>
                 ${c?Y`<div class="stats">${c}</div>`:""}
             `}
          </div>
        </div>

        <div class="actions">
          ${"none"===f||this._isTriggered?"":this._isCompact?Y`
            <div class="action-btn ${"start"===f?"start-btn":"return-btn"}" 
                 @click=${"start"===f?this._handleStartClean:this._handleReturnHome}>
                <ha-icon icon="${"start"===f?"mdi:play":"mdi:home-import-outline"}"></ha-icon>
            </div>
          `:Y`
            <div class="swipe-slider ${"return"===f?"return-mode":""}">
               <div class="slide-track" style="opacity: ${Math.max(0,1-this._swipeOffset/150)}">
                   ${"start"===f?"Slide to Start":"Slide to Return"}
               </div>
               <div class="slide-handle"
                    style="transform: translateX(${this._swipeOffset}px); opacity: ${Math.max(.1,1-this._swipeOffset/250)}"
                    @pointerdown=${this._onSwipeStart}
                    @pointermove=${this._onSwipeMove}
                    @pointerup=${this._onSwipeEnd}
                    @pointercancel=${this._onSwipeEnd}>
                  <ha-icon icon="${"mdi:arrow-right"}"></ha-icon>
               </div>
             </div>
          `}
          
          ${this._isTriggered?Y`
             <div class="swipe-slider triggered">
                 <div class="dots-loader">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                 </div>
             </div>
          `:""}

          ${this.config.schedule_time_entity&&!this._isShort?Y`
            <div class="time-picker">
              <div class="time-label">SCHEDULE</div>
              <div class="time-values">
                <div class="time-inputs">
                    <div class="time-column" 
                         @pointerdown=${t=>this._onInputStart(t,"hour")}
                         @pointermove=${t=>this._onInputMove(t)}
                         @pointerup=${t=>this._onInputEnd(t)}
                         @pointercancel=${t=>this._onInputEnd(t)}>
                      ${d}
                    </div>
                    <div class="time-sep">:</div>
                    <div class="time-column"
                         @pointerdown=${t=>this._onInputStart(t,"minute")}
                         @pointermove=${t=>this._onInputMove(t)}
                         @pointerup=${t=>this._onInputEnd(t)}
                         @pointercancel=${t=>this._onInputEnd(t)}>
                      ${h}
                    </div>
                </div>

                ${this._checkAutomationButtonVisibility()?Y`
                    <div class="sparkle-btn ${"on"===p?"active":""}" 
                         @click=${this._handleToggleAutomation}>
                       <ha-icon icon="mdi:auto-fix"></ha-icon>
                    </div>
                 `:""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}}Dt.styles=u`
    :host {
      display: block;
      height: 100%;
      /* Host acts as a container but visual styles move to inner div for gradient control */
    }

    .vacuum-card-container {
      background: var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));
      border-radius: var(--ha-card-border-radius, 12px);
      color: var(--primary-text-color);
      padding: clamp(12px, 3%, 20px);
      display: flex;
      flex-direction: column;
      gap: 8px;
      height: 100%;
      box-sizing: border-box;
      cursor: pointer;
      justify-content: space-between;
      overflow: hidden;
    }

    .vacuum-card-container.short {
        padding: 8px 12px;
        gap: 4px;
    }
    
    .vacuum-card-container.short .header {
        gap: 8px;
    }

    /* Tiny Mode (1-row) */
    .vacuum-card-container.tiny {
        flex-direction: row;
        align-items: center;
        padding: 8px 12px;
        gap: 12px;
    }

    .vacuum-card-container.tiny .header {
        gap: 12px;
        margin: 0;
        min-height: 0;
        flex: 1;
    }

    .vacuum-card-container.tiny .icon-container {
        width: 32px;
        height: 32px;
    }
    
    .vacuum-card-container.tiny .icon-container ha-icon {
        --mdc-icon-size: 18px;
    }

    .vacuum-card-container.tiny .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .vacuum-card-container.tiny .status {
        font-size: clamp(0.75rem, 2.5cqi, 0.9rem);
        line-height: 1.1;
    }
    
    .vacuum-card-container.tiny .room {
        font-size: clamp(0.6rem, 2cqi, 0.75rem);
        line-height: 1.1;
        opacity: 0.8;
    }

    .vacuum-card-container.tiny .actions {
        /* Allow expansion for slider, but minimal for button */
        flex: 1 0 auto;
        display: flex;
        justify-content: flex-end;
        margin-left: 12px;
        min-width: 0;
    }

    .vacuum-card-container.tiny .swipe-slider {
        height: 36px;
        font-size: clamp(0.7rem, 2cqi, 0.9rem);
    }

    .vacuum-card-container.tiny .action-btn {
        width: 32px; /* Small circle button */
        height: 32px;
        margin: 0;
        padding: 0;
        border-radius: 50%;
        flex: 0 0 32px; /* Rigid width */
    }

    .vacuum-card-container.short .action-btn {
        height: 32px;
        min-height: 32px;
    }

    .vacuum-card-container.short .icon-container {
        width: 36px;
        height: 36px;
    }
    
    .vacuum-card-container.short .status {
        font-size: clamp(0.8rem, 2.5cqi, 1rem);
    }
    
    .actions {
        cursor: default;
        flex-shrink: 0; /* Prevent crushing actions */
    }

    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      min-height: 0;
      flex: 1;
    }

    .icon-container {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(var(--rgb-primary-text-color), 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--paper-item-icon-color, #44739e);
    }
    
    .icon-container ha-icon {
        --mdc-icon-size: 24px;
    }
    
    .icon-container.state-cleaning {
      background: rgba(var(--rgb-primary-color), 0.2);
      color: var(--primary-color);
      animation: pulse 2s infinite;
    }

    .icon-container.state-error {
      background: rgba(var(--error-color, #db4437), 0.2);
      color: var(--error-color, #db4437);
    }

    .info {
      flex: 1;
      min-width: 0; /* Crucial for text-overflow to work in flex child */
    }

    .status {
      font-size: clamp(0.9rem, 3cqi, 1.3rem);
      font-weight: 300;
      line-height: 1.4;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis;
    }

    .room {
      font-size: clamp(0.75rem, 2.5cqi, 1rem);
      font-weight: 300;
      opacity: 0.9;
      line-height: 1.2;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis;
    }

    .battery {
      font-size: clamp(0.7rem, 2cqi, 0.9rem);
      opacity: 0.7;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .stats {
      font-size: clamp(0.7rem, 2cqi, 0.9rem);
      opacity: 0.7;
      margin-top: 4px;
    }
    
    .battery ha-icon {
        --mdc-icon-size: 16px;
    }

    .actions {
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: space-between; /* Spread them out */
    }
    
    .action-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.05);
      border-radius: 12px; /* Match others */
      padding: 0 16px;
      cursor: pointer;
      height: 50px; /* Match slider */
      transition: background 0.2s;
      margin-right: 8px;
      flex: 1;
    }

    .start-btn {
       color: var(--primary-text-color);
       background: rgba(var(--rgb-primary-text-color), 0.05); /* Glassy Grey */
       backdrop-filter: blur(5px);
       border: 1px solid rgba(255,255,255,0.1);
       box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .start-btn:active {
       background: rgba(var(--rgb-primary-text-color), 0.1);
       box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
       transform: translateY(1px);
    }
    
    .return-btn {
       color: var(--primary-text-color);
       background: rgba(var(--rgb-primary-text-color), 0.05); /* Glassy Grey */
       backdrop-filter: blur(5px);
       border: 1px solid rgba(255,255,255,0.1);
       box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .return-btn:active {
       background: rgba(var(--rgb-primary-text-color), 0.1);
       box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
       transform: translateY(1px);
    }

    .swipe-slider {
        position: relative;
        height: 50px;
        background: rgba(0,0,0,0.1); 
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.15); /* Pressed in track */
        border-radius: 12px;
        overflow: hidden;
        flex: 1; 
        display: flex;
        align-items: center;
        backdrop-filter: blur(5px);
        margin-right: 8px; /* gap with time picker */
        transition: background 0.2s;
    }
    
    .swipe-slider.triggered {
        justify-content: center;
        opacity: 0.9;
    }
    
    .swipe-slider.return-mode {
        background: rgba(0,0,0,0.15); /* Slightly darker/visible for return */
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.15);
    }
    
    /* Ensure handle override is removed or neutral so it matches default glass style */
    .swipe-slider.return-mode .slide-handle {
        /* No specific override needed if we use the same glass style */
    }

    .slide-track {
        width: 100%;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: clamp(0.7rem, 2cqi, 0.9rem);
        font-weight: 300;
        letter-spacing: 0.5px;
        pointer-events: none;
        user-select: none;
        opacity: 0.8;
        padding-left: 42px; /* Offset for handle start pos */
        transition: opacity 0.1s;
    }

    .slide-handle {
        position: absolute;
        left: 4px;
        top: 4px;
        bottom: 4px;
        width: 42px;
        
        /* Glass Style */
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-text-color); 
        cursor: grab;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        touch-action: none; 
        z-index: 2;
    }
    
    .slide-handle:active {
        cursor: grabbing;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    
    .dots-loader {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        height: 100%;
    }
    
    .dot {
        width: 8px;
        height: 8px;
        background: var(--primary-text-color);
        border-radius: 50%;
        opacity: 0;
        animation: rush-in-out 1.5s infinite ease-in-out;
    }
    
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }
    
    @keyframes rush-in-out {
        0% {
            opacity: 0;
            transform: translateX(-15px) scale(0.5);
        }
        20% {
            opacity: 1;
            transform: translateX(0) scale(1);
        }
        60% {
             opacity: 1;
             transform: translateX(5px) scale(1); /* Wait/Slow move */
        }
        100% {
            opacity: 0;
            transform: translateX(20px) scale(0.5);
        }
    }

    .time-picker {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.15);
      border-radius: 12px;
      padding: 4px 8px; 
      user-select: none;
      backdrop-filter: blur(4px);
      min-width: 90px;
      height: 50px; /* Match slider height */
      box-sizing: border-box;
      margin-left: auto;
    }

    .time-label {
        font-size: clamp(0.45rem, 1.5cqi, 0.6rem);
        text-transform: uppercase;
        opacity: 0.8;
        margin-bottom: 2px;
        letter-spacing: 0.5px;
    }

    .time-values {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px; 
    }
    
    .time-inputs {
        display: flex;
        align-items: center;
        font-size: clamp(0.85rem, 2.5cqi, 1.1rem);
        font-weight: 400;
        line-height: 1;
    }

    .time-column {
      padding: 0 1px;
      cursor: ns-resize;
      min-width: 20px;
      text-align: center;
      touch-action: none;
    }

    .time-sep {
      padding-bottom: 3px;
      opacity: 0.5;
    }
    
    .sparkle-btn {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--disabled-text-color);
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.2s;
        background: rgba(0,0,0,0.05);
    }
    
    .sparkle-btn.active {
        color: #FFD700; 
        opacity: 1;
        background: rgba(255, 215, 0, 0.15);
        box-shadow: 0 0 8px rgba(255, 215, 0, 0.3);
    }
    
    .sparkle-btn ha-icon {
        --mdc-icon-size: 16px;
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(var(--rgb-primary-color), 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(var(--rgb-primary-color), 0); }
      100% { box-shadow: 0 0 0 0 rgba(var(--rgb-primary-color), 0); }
    }
  `;class Ot extends gt{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Y``;return Y`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"entity",label:"Vacuum Entity",selector:{entity:{domain:"vacuum"}}},{name:"start_button_entity",label:"Start Button",selector:{entity:{domain:"input_button"}}},{name:"automation_entity",label:"Automation",selector:{entity:{domain:"automation"}}},{name:"schedule_time_entity",label:"Schedule Time",selector:{entity:{domain:"input_datetime"}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-vacuum-card")||customElements.define("slick-vacuum-card",Dt),customElements.get("slick-vacuum-card-editor")||customElements.define("slick-vacuum-card-editor",Ot),window.customCards=window.customCards||[],window.customCards.push({type:"slick-vacuum-card",name:"Slick Vacuum Card",preview:!0,description:"A card for controlling a vacuum robot."});console.info("%c MOWER-CARD %c 0.2.0 ","color: white; background: #673ab7; font-weight: 700;","color: #673ab7; background: white; font-weight: 700;");class Ht extends gt{constructor(){super(...arguments),this._tempTime=null,this._touchStartState=null,this._discoveredBatteryEntity=null,this._discoveredRoomEntity=null,this._deviceAreaName=null,this._discoveryAttempted=!1,this._swipeOffset=0,this._isSwiping=!1,this._swipeStartX=0,this._isTriggered=!1,this._isCompact=!1,this._isShort=!1,this._isTiny=!1,this._inputStartY=0,this._inputTargetString=null,this._isDragging=!1}static get properties(){return{hass:{attribute:!1},config:{state:!0},_tempTime:{state:!0},_discoveredBatteryEntity:{state:!0},_discoveredRoomEntity:{state:!0},_deviceAreaName:{state:!0},_swipeOffset:{state:!0},_isCompact:{state:!0},_isShort:{state:!0},_isTiny:{state:!0},_isTriggered:{state:!0}}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect.width,i=e.contentRect.height;this._isCompact=t<300,this._isShort=i<200,this._isTiny=i<100}}),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect(),super.disconnectedCallback()}static getStubConfig(){return{type:"custom:slick-mower-card",entity:"lawn_mower.smart_mower",start_button_entity:"input_button.start_mowing",automation_entity:"automation.mowing_schedule",schedule_time_entity:"input_datetime.mower_start_time"}}static getConfigElement(){return document.createElement("slick-mower-card-editor")}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("Entity is required");this.config&&this.config.entity!==t.entity&&(this._discoveredBatteryEntity=null,this._discoveredRoomEntity=null,this._deviceAreaName=null,this._discoveryAttempted=!1),this.config=t}shouldUpdate(t){return!(!this.config||!this.hass)}updated(t){var e;super.updated(t),this._discoveredBatteryEntity&&this._discoveredRoomEntity&&this._deviceAreaName||this._discoveryAttempted||!this.hass||!(null===(e=this.config)||void 0===e?void 0:e.entity)||(this._discoveryAttempted=!0,this._fetchRelatedEntities())}async _fetchRelatedEntities(){try{const t=await this.hass.callWS({type:"search/related",item_type:"entity",item_id:this.config.entity});if(!t||!t.device||0===t.device.length)return;const e=t.device[0];if(this.hass.devices&&this.hass.areas){const t=this.hass.devices[e];if(t&&t.area_id){const e=this.hass.areas[t.area_id];e&&e.name&&(this._deviceAreaName=e.name,console.debug("MowerCard: Discovered device area",this._deviceAreaName))}}const i=await this.hass.callWS({type:"search/related",item_type:"device",item_id:e});if(!i||!i.entity)return;const n=i.entity;if(!this._discoveredBatteryEntity){const t=n.filter(t=>{const e=this.hass.states[t];return!!t.startsWith("sensor.")&&(!!e&&("battery"===e.attributes.device_class||!!t.includes("battery")))});if(t.length>0){const e=t.find(t=>"battery"===this.hass.states[t].attributes.device_class)||t[0];this._discoveredBatteryEntity=e,console.debug("MowerCard: Discovered battery entity",e)}}if(!this._discoveredRoomEntity){const t=n.filter(t=>{const e=this.hass.states[t];if(!t.startsWith("sensor."))return!1;if(!e)return!1;const i=t.toLowerCase();return i.includes("zone")||i.includes("lawn")||i.includes("rasen")||i.includes("area")});t.length>0&&(this._discoveredRoomEntity=t[0],console.debug("MowerCard: Discovered zone entity",this._discoveredRoomEntity))}}catch(t){console.warn("MowerCard: Error discovering related entities",t)}}_getActionMode(){const t=this.hass.states[this.config.entity];return t?["mowing","error","paused"].includes(t.state)?"return":"docked"===t.state||"idle"===t.state?"start":"none":"none"}_checkAutomationButtonVisibility(){return!!this.config.automation_entity}_handleStartMowing(t){t&&t.stopPropagation(),this.config.start_button_entity?this.hass.callService("input_button","press",{entity_id:this.config.start_button_entity}):this.config.entity.startsWith("lawn_mower.")?this.hass.callService("lawn_mower","start_mowing",{entity_id:this.config.entity}):this.hass.callService("vacuum","start",{entity_id:this.config.entity})}_handleReturnHome(t){t&&t.stopPropagation(),this.config.entity.startsWith("lawn_mower.")?this.hass.callService("lawn_mower","dock",{entity_id:this.config.entity}):this.hass.callService("vacuum","return_to_base",{entity_id:this.config.entity})}_handleMoreInfo(t){if(t.composedPath().some(t=>t.classList&&t.classList.contains("actions")))return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleToggleAutomation(t){t&&t.stopPropagation(),this.config.automation_entity&&this.hass.callService("automation","toggle",{entity_id:this.config.automation_entity})}_getDateTimeParts(){if(!this.config.schedule_time_entity)return null;const t=this.hass.states[this.config.schedule_time_entity];if(!t)return null;let{hour:e,minute:i}=t.attributes;if(void 0===e||void 0===i){const n=t.state.split(":");if(!(n.length>=2))return null;e=parseInt(n[0]),i=parseInt(n[1])}return{hour:e,minute:i}}_onInputStart(t,e){if(0!==t.button&&1!==t.buttons)return;t.currentTarget.setPointerCapture(t.pointerId),this._isDragging=!0,this._inputStartY=t.clientY,this._inputTargetString=e;const i=this._getDateTimeParts();i&&(this._touchStartState=i,this._tempTime={...i})}_onInputMove(t){if(!(this._isDragging&&this._inputTargetString&&this._touchStartState&&this._tempTime))return;t.preventDefault();const e=t.clientY,i=this._inputStartY-e,n=Math.round(i/15);if(0!==n)if("hour"===this._inputTargetString){let t=(this._touchStartState.hour+n)%24;t<0&&(t+=24),this._tempTime={...this._tempTime,hour:t}}else{let t=(this._touchStartState.minute+n)%60;t<0&&(t+=60),this._tempTime={...this._tempTime,minute:t}}}_onInputEnd(t){if(!this._isDragging)return;this._isDragging=!1;if(t.currentTarget.releasePointerCapture(t.pointerId),!this._inputTargetString||!this._tempTime)return void this._cleanupInput();const{hour:e,minute:i}=this._tempTime,n=`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:00`;this.hass.callService("input_datetime","set_datetime",{entity_id:this.config.schedule_time_entity,time:n}),this._cleanupInput()}_cleanupInput(){this._inputTargetString=null,this._tempTime=null,this._touchStartState=null}_onSwipeStart(t){if(0!==t.button&&1!==t.buttons)return;t.currentTarget.setPointerCapture(t.pointerId),this._isSwiping=!0,this._swipeStartX=t.clientX,this._swipeOffset=0}_onSwipeMove(t){if(!this._isSwiping)return;const e=t.currentTarget,i=e.parentElement;if(!i)return;const n=t.clientX-this._swipeStartX,s=i.clientWidth-e.clientWidth-8,a=Math.max(0,Math.min(n,s));this._swipeOffset=a}_onSwipeEnd(t){if(!this._isSwiping)return;this._isSwiping=!1;const e=t.currentTarget;e.releasePointerCapture(t.pointerId);const i=e.parentElement;if(i){const t=i.clientWidth-e.clientWidth-8;if(this._swipeOffset>.9*t&&!this._isTriggered){const t=this._getActionMode();this._isTriggered=!0,"start"===t?this._handleStartMowing():"return"===t&&this._handleReturnHome(),navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{this._isTriggered=!1,this._swipeOffset=0},4e3)}}this._isTriggered||(this._swipeOffset=0)}_getStatusIcon(t){switch(t){case"mowing":default:return"mdi:robot-mower";case"docked":case"idle":return"mdi:robot-mower-outline";case"returning":return"mdi:home-import-outline";case"error":return"mdi:alert-circle";case"paused":return"mdi:pause-circle"}}_getStatusLabel(t){switch(t){case"mowing":return"Mowing";case"docked":return"Docked";case"returning":return"Returning";case"error":return"Error";case"paused":return"Paused";case"idle":return"Idle";default:return t}}render(){var t;if(!this.config||!this.hass)return Y``;const e=this.hass.states[this.config.entity];if(!e)return Y`<div>Mower not found</div>`;const i=e.state,n=e.attributes;let s=null;if(this._discoveredBatteryEntity){const t=this.hass.states[this._discoveredBatteryEntity];t&&!isNaN(parseFloat(t.state))&&(s=Math.round(parseFloat(t.state)))}if(null===s){const t=void 0!==n.battery_level?n.battery_level:n.battery;if(void 0!==t){const e=parseFloat(t);isNaN(e)||(s=Math.round(e))}}let a="mdi:battery-unknown";null!==s&&(a=s>=90?"mdi:battery":s>=70?"mdi:battery-80":s>=50?"mdi:battery-50":s>=30?"mdi:battery-40":"mdi:battery-20");const r=this._getStatusLabel(i);let o=null;if(this._discoveredRoomEntity){const t=this.hass.states[this._discoveredRoomEntity];t&&t.state&&"unknown"!==t.state&&"unavailable"!==t.state&&(o=t.state)}!o&&this._deviceAreaName&&(o=this._deviceAreaName);const l=n.friendly_name||this.config.entity,c=[n.mowed_area?`${n.mowed_area} m²`:null,n.mowing_time?`${n.mowing_time} min`:null].filter(Boolean).join(" • ");let d="--",h="--";if(this._tempTime)d=this._tempTime.hour.toString().padStart(2,"0"),h=this._tempTime.minute.toString().padStart(2,"0");else{const t=this._getDateTimeParts();t&&(d=t.hour.toString().padStart(2,"0"),h=t.minute.toString().padStart(2,"0"))}const p=this.config.automation_entity?null===(t=this.hass.states[this.config.automation_entity])||void 0===t?void 0:t.state:"off";let u="rgba(55, 71, 79, 0.25)";["mowing","returning"].includes(i)?u="rgba(76, 175, 80, 0.25)":"error"===i&&(u="rgba(244, 67, 54, 0.25)");let g="rgba(158, 158, 158, 0.25)";null!==s&&(g=s>=80?"rgba(76, 175, 80, 0.25)":s>=40?"rgba(255, 193, 7, 0.25)":"rgba(244, 67, 54, 0.25)");const m=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||"#fff",f=this._getActionMode();return Y`
      <div class="mower-card-container ${this._isTiny?"tiny":this._isShort?"short":""}" 
           style="background: linear-gradient(to bottom, ${u} 0%, ${g} 100%), ${m};"
           @click=${this._handleMoreInfo}>
        <div class="header">
          <div class="icon-container state-${i}">
            <ha-icon icon="${this._getStatusIcon(i)}"></ha-icon>
          </div>
          <div class="info">
             <div class="status">${l}</div>
             ${this._isShort?Y`
                 <!-- Short Mode: Condensed Info -->
                 <div class="room" style="font-size: 0.9rem; opacity: 0.8;">
                    ${r} 
                    ${null!==s?Y` • ${s}%`:""}
                 </div>
             `:Y`
                 <div class="room">${r} ${o?Y`${o}`:""}</div>
                 <div class="battery">
                   ${null!==s?Y`<ha-icon icon="${a}"></ha-icon> ${s}%`:""} 
                   ${!o&&n.fan_speed?`• ${n.fan_speed}`:""}
                 </div>
                 ${c?Y`<div class="stats">${c}</div>`:""}
             `}
          </div>
        </div>

        <div class="actions">
          ${"none"===f||this._isTriggered?"":this._isCompact?Y`
            <div class="action-btn ${"start"===f?"start-btn":"return-btn"}" 
                 @click=${"start"===f?this._handleStartMowing:this._handleReturnHome}>
                <ha-icon icon="${"start"===f?"mdi:play":"mdi:home-import-outline"}"></ha-icon>
            </div>
          `:Y`
            <div class="swipe-slider ${"return"===f?"return-mode":""}">
               <div class="slide-track" style="opacity: ${Math.max(0,1-this._swipeOffset/150)}">
                   ${"start"===f?"Slide to Mow":"Slide to Return"}
               </div>
               <div class="slide-handle"
                    style="transform: translateX(${this._swipeOffset}px); opacity: ${Math.max(.1,1-this._swipeOffset/250)}"
                    @pointerdown=${this._onSwipeStart}
                    @pointermove=${this._onSwipeMove}
                    @pointerup=${this._onSwipeEnd}
                    @pointercancel=${this._onSwipeEnd}>
                  <ha-icon icon="${"mdi:arrow-right"}"></ha-icon>
               </div>
             </div>
          `}
          
          ${this._isTriggered?Y`
             <div class="swipe-slider triggered">
                 <div class="dots-loader">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                 </div>
             </div>
          `:""}

          ${this.config.schedule_time_entity&&!this._isShort?Y`
            <div class="time-picker">
              <div class="time-label">SCHEDULE</div>
              <div class="time-values">
                <div class="time-inputs">
                    <div class="time-column" 
                         @pointerdown=${t=>this._onInputStart(t,"hour")}
                         @pointermove=${t=>this._onInputMove(t)}
                         @pointerup=${t=>this._onInputEnd(t)}
                         @pointercancel=${t=>this._onInputEnd(t)}>
                      ${d}
                    </div>
                    <div class="time-sep">:</div>
                    <div class="time-column"
                         @pointerdown=${t=>this._onInputStart(t,"minute")}
                         @pointermove=${t=>this._onInputMove(t)}
                         @pointerup=${t=>this._onInputEnd(t)}
                         @pointercancel=${t=>this._onInputEnd(t)}>
                      ${h}
                    </div>
                </div>

                ${this._checkAutomationButtonVisibility()?Y`
                    <div class="sparkle-btn ${"on"===p?"active":""}" 
                         @click=${this._handleToggleAutomation}>
                       <ha-icon icon="mdi:auto-fix"></ha-icon>
                    </div>
                 `:""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}}Ht.styles=u`
    :host {
      display: block;
      height: 100%;
      /* Host acts as a container but visual styles move to inner div for gradient control */
    }

    .mower-card-container {
      background: var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));
      border-radius: var(--ha-card-border-radius, 12px);
      color: var(--primary-text-color);
      padding: clamp(12px, 3%, 20px);
      display: flex;
      flex-direction: column;
      gap: 8px; /* Reduced from 16px for better default fit */
      height: 100%;
      box-sizing: border-box;
      cursor: pointer;
      justify-content: space-between;
      overflow: hidden; /* Ensure content doesn't bleed */
    }

    .mower-card-container.short {
        padding: 8px 12px;
        gap: 4px;
    }
    
    .mower-card-container.short .header {
        gap: 8px;
    }

    /* Tiny Mode (1-row) */
    .mower-card-container.tiny {
        flex-direction: row;
        align-items: center;
        padding: 8px 12px;
        gap: 12px;
    }

    .mower-card-container.tiny .header {
        gap: 12px;
        margin: 0;
        min-height: 0;
        flex: 1;
    }

    .mower-card-container.tiny .icon-container {
        width: 32px;
        height: 32px;
    }
    
    .mower-card-container.tiny .icon-container ha-icon {
        --mdc-icon-size: 18px;
    }

    .mower-card-container.tiny .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .mower-card-container.tiny .status {
        font-size: clamp(0.75rem, 2.5cqi, 0.9rem);
        line-height: 1.1;
    }

    .mower-card-container.tiny .room {
        font-size: clamp(0.6rem, 2cqi, 0.75rem);
        line-height: 1.1;
        opacity: 0.8;
    }
    
    .mower-card-container.tiny .actions {
        /* Allow expansion for slider, but minimal for button */
        flex: 1 0 auto;
        display: flex;
        justify-content: flex-end;
        margin-left: 12px;
        min-width: 0;
    }

    .mower-card-container.tiny .swipe-slider {
        height: 36px;
        font-size: clamp(0.7rem, 2cqi, 0.9rem);
    }

    .mower-card-container.tiny .action-btn {
        width: 32px; /* Small circle button */
        height: 32px;
        margin: 0;
        padding: 0;
        border-radius: 50%;
        flex: 0 0 32px; /* Rigid width */
    }

    .mower-card-container.short .action-btn {
        height: 32px;
        min-height: 32px;
    }

    .mower-card-container.short .icon-container {
        width: 36px;
        height: 36px;
    }
    
    .mower-card-container.short .status {
        font-size: clamp(0.8rem, 2.5cqi, 1rem);
    }
    
    .actions {
        cursor: default;
        flex-shrink: 0; /* Prevent crushing actions */
    }

    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      min-height: 0; /* Allow shrinking */
      flex: 1;
    }

    .icon-container {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(var(--rgb-primary-text-color), 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--paper-item-icon-color, #4CAF50); /* Green for mower default */
    }
    
    .icon-container ha-icon {
        --mdc-icon-size: 24px;
    }
    
    .icon-container.state-mowing {
      background: rgba(76, 175, 80, 0.2); /* Green */
      color: #4CAF50;
      animation: pulse 2s infinite;
    }

    .icon-container.state-error {
      background: rgba(var(--error-color, #db4437), 0.2);
      color: var(--error-color, #db4437);
    }

    .info {
      flex: 1;
      min-width: 0; 
    }

    .status {
      font-size: clamp(0.9rem, 3cqi, 1.3rem);
      font-weight: 300;
      line-height: 1.4;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis;
    }

    .room {
      font-size: clamp(0.75rem, 2.5cqi, 1rem);
      font-weight: 300;
      opacity: 0.9;
      line-height: 1.2;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis;
    }

    .battery {
      font-size: clamp(0.7rem, 2cqi, 0.9rem);
      opacity: 0.7;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .stats {
      font-size: clamp(0.7rem, 2cqi, 0.9rem);
      opacity: 0.7;
      margin-top: 4px;
    }
    
    .battery ha-icon {
        --mdc-icon-size: 16px;
    }

    .actions {
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: space-between; /* Spread them out */
    }
    
    .action-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.05);
      border-radius: 12px; /* Match others */
      padding: 0 16px;
      cursor: pointer;
      height: 50px; /* Match slider */
      transition: background 0.2s;
      margin-right: 8px;
      flex: 1;
    }

    .start-btn {
       color: var(--primary-text-color);
       background: rgba(var(--rgb-primary-text-color), 0.05); /* Glassy Grey */
       backdrop-filter: blur(5px);
       border: 1px solid rgba(255,255,255,0.1);
       box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .start-btn:active {
       background: rgba(var(--rgb-primary-text-color), 0.1);
       box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
       transform: translateY(1px);
    }
    
    .return-btn {
       color: var(--primary-text-color);
       background: rgba(var(--rgb-primary-text-color), 0.05); /* Glassy Grey */
       backdrop-filter: blur(5px);
       border: 1px solid rgba(255,255,255,0.1);
       box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .return-btn:active {
       background: rgba(var(--rgb-primary-text-color), 0.1);
       box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
       transform: translateY(1px);
    }

    .swipe-slider {
        position: relative;
        height: 50px;
        background: rgba(0,0,0,0.1); 
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.15); /* Pressed in track */
        border-radius: 12px;
        overflow: hidden;
        flex: 1; 
        display: flex;
        align-items: center;
        backdrop-filter: blur(5px);
        margin-right: 8px; /* gap with time picker */
        transition: background 0.2s;
    }
    
    .swipe-slider.triggered {
        justify-content: center;
        opacity: 0.9;
    }
    
    .swipe-slider.return-mode {
        background: rgba(0,0,0,0.15); /* Slightly darker/visible for return */
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.15);
    }
    
    /* Ensure handle override is removed or neutral so it matches default glass style */
    .swipe-slider.return-mode .slide-handle {
        /* No specific override needed if we use the same glass style */
    }

    .slide-track {
        width: 100%;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: clamp(0.7rem, 2cqi, 0.9rem);
        font-weight: 300;
        letter-spacing: 0.5px;
        pointer-events: none;
        user-select: none;
        opacity: 0.8;
        padding-left: 42px; /* Offset for handle start pos */
        transition: opacity 0.1s;
    }

    .slide-handle {
        position: absolute;
        left: 4px;
        top: 4px;
        bottom: 4px;
        width: 42px;
        
        /* Glass Style */
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-text-color); 
        cursor: grab;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        touch-action: none; 
        z-index: 2;
    }
    
    .slide-handle:active {
        cursor: grabbing;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    
    .dots-loader {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        height: 100%;
    }
    
    .dot {
        width: 8px;
        height: 8px;
        background: var(--primary-text-color);
        border-radius: 50%;
        opacity: 0;
        animation: rush-in-out 1.5s infinite ease-in-out;
    }
    
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }
    
    @keyframes rush-in-out {
        0% {
            opacity: 0;
            transform: translateX(-15px) scale(0.5);
        }
        20% {
            opacity: 1;
            transform: translateX(0) scale(1);
        }
        60% {
             opacity: 1;
             transform: translateX(5px) scale(1); /* Wait/Slow move */
        }
        100% {
            opacity: 0;
            transform: translateX(20px) scale(0.5);
        }
    }

    .time-picker {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(var(--rgb-primary-text-color), 0.15);
      border-radius: 12px;
      padding: 4px 8px; 
      user-select: none;
      backdrop-filter: blur(4px);
      min-width: 90px;
      height: 50px; /* Match slider height */
      box-sizing: border-box;
      margin-left: auto;
    }

    .time-label {
        font-size: clamp(0.45rem, 1.5cqi, 0.6rem);
        text-transform: uppercase;
        opacity: 0.8;
        margin-bottom: 2px;
        letter-spacing: 0.5px;
    }

    .time-values {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px; 
    }
    
    .time-inputs {
        display: flex;
        align-items: center;
        font-size: clamp(0.85rem, 2.5cqi, 1.1rem);
        font-weight: 400;
        line-height: 1;
    }

    .time-column {
      padding: 0 1px;
      cursor: ns-resize;
      min-width: 20px;
      text-align: center;
      touch-action: none;
    }

    .time-sep {
      padding-bottom: 3px;
      opacity: 0.5;
    }
    
    .sparkle-btn {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--disabled-text-color);
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.2s;
        background: rgba(0,0,0,0.05);
    }
    
    .sparkle-btn.active {
        color: #FFD700; 
        opacity: 1;
        background: rgba(255, 215, 0, 0.15);
        box-shadow: 0 0 8px rgba(255, 215, 0, 0.3);
    }
    
    .sparkle-btn ha-icon {
        --mdc-icon-size: 16px;
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); } 
      70% { box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
      100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
    }
  `;class Nt extends gt{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Y``;return Y`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"entity",label:"Mower Entity",selector:{entity:{domain:["lawn_mower","vacuum"]}}},{name:"start_button_entity",label:"Start Button",selector:{entity:{domain:"input_button"}}},{name:"automation_entity",label:"Automation",selector:{entity:{domain:"automation"}}},{name:"schedule_time_entity",label:"Schedule Time",selector:{entity:{domain:"input_datetime"}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-mower-card")||customElements.define("slick-mower-card",Ht),customElements.get("slick-mower-card-editor")||customElements.define("slick-mower-card-editor",Nt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-mower-card",name:"Slick Mower Card",preview:!0,description:"A card for controlling a lawn mower."});console.info("%c NOTIFICATION-BADGE-CARD %c 0.2.0 ","color: white; background: #e91e63; font-weight: 700;","color: #e91e63; background: white; font-weight: 700;");class Ft extends gt{static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-notification-badge-card-editor")}static getStubConfig(){return{type:"custom:slick-notification-badge-card",calendars:[],entities:[]}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config=t}_getDaysUntil(t){const e=new Date,i=new Date(t),n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),s=new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()-n.getTime();return Math.ceil(s/864e5)}_handleEntityTap(t,e){e?this.dispatchEvent(new CustomEvent("hass-action",{detail:{config:{entity:t,tap_action:e},action:"tap"},bubbles:!0,composed:!0})):this.hass.callService("homeassistant","turn_off",{entity_id:t})}_handleCalendarTap(t){const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){if(!this.config||!this.hass)return Y``;const t=[],e=[];this.config.calendars&&this.config.calendars.forEach(e=>{var i;const n=this.hass.states[e.entity];if(!n)return;const s=n.attributes.start_time;if(!s)return;const a=this._getDaysUntil(s),r=null!==(i=e.days)&&void 0!==i?i:7;if(a>=0&&a<=r){const i=(n.attributes.message||"").toLowerCase();let s=e.color||"var(--primary-color)";if(e.rules)for(const t of e.rules)if(i.includes(t.pattern.toLowerCase())){s=t.color;break}t.push({type:"calendar",entity:e.entity,icon:e.icon||"mdi:calendar",label:0===a?"":a.toString(),color:s,active:!0,title:n.attributes.message,entityPicture:null})}}),this.config.entities&&this.config.entities.forEach(t=>{var i;const n=this.hass.states[t.entity];if(!n)return;const s=(null!==(i=t.active_states)&&void 0!==i?i:["on","active","home"]).includes(n.state);if(s||t.always_show){const i=s&&!1!==t.show_picture&&!!n.attributes.entity_picture;e.push({type:s?"entity":"entity inactive",entity:t.entity,tapAction:t.tap_action,icon:t.icon||n.attributes.icon||"mdi:alert-circle",label:"",color:s?t.color||"#ff9800":t.inactive_color||"rgba(128, 128, 128, 0.45)",active:s,title:n.attributes.friendly_name,entityPicture:i?n.attributes.entity_picture:null})}});const i=[...e,...t];return 0===i.length?Y``:Y`
      <div class="badge-container">
        ${i.map(t=>Y`
            <div class="badge ${t.type}" 
                 style="background: ${t.color}; border-color: ${t.color}"
                 title="${t.title} (${t.entity})"
                 @click=${()=>"calendar"===t.type?this._handleCalendarTap(t.entity):this._handleEntityTap(t.entity,t.tapAction)}>
               
               ${t.entityPicture?Y`
                   <div class="badge-icon-img" style="background-image: url('${t.entityPicture}')"></div>
               `:Y`
                   <ha-icon icon="${t.icon}" style="color: white; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));"></ha-icon>
               `}

               ${t.label?Y`<div class="badge-label">${t.label}</div>`:""}
            </div>
        `)}
      </div>
    `}}Ft.styles=u`
    :host {
      display: block;
      height: 100%;
    }
    
    .badge-container {
        display: flex;
        flex-wrap: nowrap;
        gap: 8px;
        align-items: center;
        justify-content: flex-end;
        padding: 8px;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }
    
    .badge {
        position: relative;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        transition: transform 0.2s, opacity 0.2s;
        border: 1px solid transparent;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        flex: 0 0 auto;
    }
    
    /* Make entities feel more solid/pronounced */
    .badge.entity {
        z-index: 2;
        box-shadow: 0 2px 4px rgba(0,0,0,0.15);
    }
    
    .badge.inactive {
        box-shadow: none;
    }

    /* Make calendars slightly translucent */
    .badge.calendar {
       opacity: 0.85; 
    }
    
    .badge:active {
        transform: scale(0.95);
    }
    
    .badge:hover {
        filter: brightness(1.1);
    }
    
    .badge-icon-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
    }
    
    .badge-label {
        position: absolute;
        top: 2px;
        right: 2px;
        background: white;
        color: #333;
        font-size: 0.7rem;
        font-weight: 700;
        min-width: 16px;
        height: 16px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.3);
        z-index: 5;
    }
    
    ha-icon {
        --mdc-icon-size: 24px;
    }
  `;class Lt extends gt{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Y``;return Y`
      <div style="padding: 16px;">
        <p><strong>Note:</strong> This card is best configured via YAML for multiple lists.</p>
        <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${[{name:"calendars",label:"Calendars",selector:{object:{schema:[{name:"entity",label:"Entity",selector:{entity:{domain:"calendar"}}},{name:"icon",label:"Icon",selector:{icon:{}}},{name:"days",label:"Days Lookahead",selector:{number:{min:1,max:365}}}]}}},{name:"entities",label:"Entities",selector:{object:{schema:[{name:"entity",label:"Entity",selector:{entity:{}}},{name:"icon",label:"Icon Override",selector:{icon:{}}},{name:"color",label:"Color (Active)",selector:{text:{}}}]}}}]}
            .computeLabel=${t=>t.label}
            @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `}}customElements.get("slick-notification-badge-card")||customElements.define("slick-notification-badge-card",Ft),customElements.get("slick-notification-badge-card-editor")||customElements.define("slick-notification-badge-card-editor",Lt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-notification-badge-card",name:"Slick Notification Badge",preview:!0,description:"Displays badges for calendar events and active entities."}),window.customBadges=window.customBadges||[],window.customBadges.push({type:"slick-notification-badge-card",name:"Slick Notification Badge",preview:!0,description:"Displays badges for calendar events and active entities."});class qt extends gt{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return Y``;return Y`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"entity",label:"Light Entity",selector:{entity:{domain:"light"}}},{name:"name",label:"Name (Optional)",selector:{text:{}}},{name:"covers",label:"Covers",selector:{entity:{domain:"cover",multiple:!0}}},{name:"layout",label:"Layout Mode",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (Responsive)"},{value:"compact",label:"Compact"},{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-light-control-card-editor")||customElements.define("slick-light-control-card-editor",qt);console.info("%c SLICK-LIGHT-CONTROL-CARD %c 0.2.0 ","color: white; background: #FFC107; font-weight: 700;","color: #FFC107; background: white; font-weight: 700;");class Bt extends gt{constructor(){super(...arguments),this._computed={mode:"vertical",showCovers:!1,visibleCovers:0,supports2D:!1},this._interacting=!1,this._resizeObserver=null,this._cursorPos={x:0,y:0},this._activeSlider=null,this._pointerStartX=0,this._pointerStartY=0,this._longPressTimer=null,this._clickTimer=null,this._pendingPointerId=null,this._handleTouchMove=t=>{(this._interacting||this._activeSlider)&&t.cancelable&&t.preventDefault()},this._lastClick=0}static get properties(){return{hass:{attribute:!1},config:{state:!0},_interacting:{state:!0},_cursorPos:{state:!0},_computed:{state:!0}}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const{width:t,height:i}=e.contentRect;this._updateLayout(t,i)}}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}firstUpdated(t){var e;super.firstUpdated(t);const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");i&&i.addEventListener("touchmove",this._handleTouchMove,{passive:!1})}_updateLayout(t,e){var i,n;const s=Bt.SIZES,a=((null===(i=this.config)||void 0===i?void 0:i.covers)||[]).length;if((null===(n=this.config)||void 0===n?void 0:n.layout)&&"auto"!==this.config.layout){const t={compact:"compact",small:"vertical",medium:"horizontal",large:"vertical"}[this.config.layout]||"vertical";return void(this._computed={mode:t,showCovers:"compact"!==t&&a>0,visibleCovers:"compact"===t?0:a,supports2D:"compact"!==t})}const r=t-2*s.PAD_H,o=e-2*s.PAD_V,l=s.ICON;if(o<l)return void(this._computed={mode:"compact",showCovers:!1,visibleCovers:0,supports2D:!1});const c=o-l-s.CONTENT_GAP-s.COVER_SECTION_PAD,d=c>=s.COVER_ROW_H?Math.floor((c+s.COVER_GAP)/(s.COVER_ROW_H+s.COVER_GAP)):0,h=r-s.COVER_ICON_W,p=r-(s.ICON+s.HEADER_GAP+s.HEADER_MIN_W)-12-s.COVER_ICON_W,u=o,g=p>=s.SLIDER_MIN_W&&u>=s.COVER_ROW_H?Math.floor((u+s.COVER_GAP)/(s.COVER_ROW_H+s.COVER_GAP)):0;if(0===a)return void(this._computed={mode:"vertical",showCovers:!1,visibleCovers:0,supports2D:o>=l+40});const m=Math.min(a,d),f=Math.min(a,g);if(0===m&&0===f)return void(this._computed={mode:"vertical",showCovers:!1,visibleCovers:0,supports2D:o>=l+40});let _,b;m>=f&&h>=s.SLIDER_MIN_W?(_="vertical",b=m):f>m||p>h?(_="horizontal",b=f):(_="vertical",b=m),this._computed={mode:_,showCovers:b>0,visibleCovers:b,supports2D:"vertical"!==_||o>=l+40}}static getConfigElement(){return document.createElement("slick-light-control-card-editor")}static getStubConfig(){return{type:"custom:slick-light-control-card",entity:"light.example_light",name:"Living Room",covers:[]}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity (light)");this.config=t}shouldUpdate(t){if(t.has("config"))return!0;const e=t.get("hass");if(!e)return!0;if(e.states[this.config.entity]!==this.hass.states[this.config.entity])return!0;if(this.config.covers)for(const t of this.config.covers)if(e.states[t]!==this.hass.states[t])return!0;return!1}_toggleLight(t){t&&t.stopPropagation(),this.hass.callService("light","toggle",{entity_id:this.config.entity})}_handlePointerDown(t){var e,i,n;const s=t.composedPath();for(const t of s)if((null===(e=t.classList)||void 0===e?void 0:e.contains("control-btn"))||(null===(i=t.classList)||void 0===i?void 0:i.contains("icon-container"))||(null===(n=t.classList)||void 0===n?void 0:n.contains("slider-control")))return;const a=Date.now();if(a-this._lastClick<300&&(this._clickTimer&&(clearTimeout(this._clickTimer),this._clickTimer=null),"compact"===this._computed.mode&&this.config.covers&&this.config.covers.length>0))return this._openMoreInfo(this.config.covers[0]),this._longPressTimer&&clearTimeout(this._longPressTimer),void(this._pendingPointerId=null);this._lastClick=a,this._pointerStartX=t.clientX,this._pointerStartY=t.clientY,this._pendingPointerId=t.pointerId,this._longPressTimer=window.setTimeout(()=>{this._startInteraction()},500)}_openMoreInfo(t){const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_startInteraction(){var t;if(this._longPressTimer=null,!this._computed.supports2D)return this._openMoreInfo(this.config.entity),void(this._pendingPointerId=null);const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");if(e){const t=e.getBoundingClientRect();this._cursorPos={x:this._pointerStartX-t.left,y:this._pointerStartY-t.top}}if(this._interacting=!0,navigator.vibrate&&navigator.vibrate(50),e&&null!==this._pendingPointerId)try{e.setPointerCapture(this._pendingPointerId)}catch(t){}}_handlePointerUp(t){var e;if(this._activeSlider){const{entityId:e,type:i,currentVal:n}=this._activeSlider;this._activeSlider=null;const s=t.target;if(s&&s.releasePointerCapture)try{s.releasePointerCapture(t.pointerId)}catch(t){}return"position"===i?this.hass.callService("cover","set_cover_position",{entity_id:e,position:n}):this.hass.callService("cover","set_cover_tilt_position",{entity_id:e,tilt_position:n}),void this.requestUpdate()}if(this._longPressTimer)return clearTimeout(this._longPressTimer),this._longPressTimer=null,"pointerup"===t.type&&(this._clickTimer&&clearTimeout(this._clickTimer),this._clickTimer=window.setTimeout(()=>{this._toggleLight(),this._clickTimer=null},250)),void(this._pendingPointerId=null);if(!this._interacting)return;this._interacting=!1,this._pendingPointerId=null;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");if(i){if(i.releasePointerCapture)try{i.releasePointerCapture(t.pointerId)}catch(t){}"pointerup"===t.type&&this._applyLightState(t,i)}}_handlePointerMove(t){var e;if(this._activeSlider)return void this._handleSliderMove(t);if(this._longPressTimer){return void(Math.sqrt(Math.pow(t.clientX-this._pointerStartX,2)+Math.pow(t.clientY-this._pointerStartY,2))>5&&(clearTimeout(this._longPressTimer),this._longPressTimer=null,this._pendingPointerId=null))}if(!this._interacting)return;t.preventDefault(),t.stopPropagation();const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");if(i){const e=i.getBoundingClientRect();this._cursorPos={x:t.clientX-e.left,y:t.clientY-e.top}}}_handleSliderDown(t,e,i,n){t.stopPropagation();const s=t.currentTarget;this._activeSlider={entityId:e,type:i,startX:t.clientX,startVal:n,currentVal:n},s.setPointerCapture(t.pointerId)}_handleSliderMove(t){if(!this._activeSlider)return;const e=t.target.closest(".slider-control");e&&this._processSliderMove(t,e)}_processSliderMove(t,e){const i=e.getBoundingClientRect(),{startX:n,startVal:s}=this._activeSlider,a=(t.clientX-n)/i.width*100;let r=Math.max(0,Math.min(100,Math.round(s+a)));r<5&&(r=0),r>95&&(r=100),this._activeSlider.currentVal=r,this.requestUpdate()}_applyLightState(t,e){const i=e.getBoundingClientRect(),n=Math.max(0,Math.min(1,(t.clientX-i.left)/i.width)),s=Math.max(0,Math.min(1,(t.clientY-i.top)/i.height)),a=this.hass.states[this.config.entity];if(!a)return;let r=Math.round(100*(1-s));r>90&&(r=100),r<15&&(r=0);const o=a.attributes.min_mireds||153,l=a.attributes.max_mireds||500,c=Math.round(o+n*(l-o));if(0===r)return void this.hass.callService("light","turn_off",{entity_id:this.config.entity});const d={entity_id:this.config.entity,brightness_pct:r};a.attributes.min_mireds&&(d.color_temp=c),this.hass.callService("light","turn_on",d)}render(){const t=this.hass.states[this.config.entity];if(!t)return Y`<ha-card class="not-found">Entity not found: ${this.config.entity}</ha-card>`;const e="on"===t.state,i=t.attributes.brightness?Math.round(t.attributes.brightness/255*100):0,n=t.attributes.min_mireds||153,s=t.attributes.max_mireds||500,a=t.attributes.color_temp||Math.round((n+s)/2),r=this.config.covers||[];let o="background: linear-gradient(135deg, #2c3e50 0%, #000000 100%);";if(this._interacting)o="background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), linear-gradient(to right, rgb(166, 209, 255) 0%, rgb(255, 160, 0) 100%);";else if(e){const e=(a-n)/(s-n);if(t.attributes.rgb_color){const[e,i,n]=t.attributes.rgb_color;o=`background: linear-gradient(135deg, rgba(${e},${i},${n},0.8) 0%, rgba(${e},${i},${n},0.4) 100%);`}else{const t=200+55*e,i=220-20*e,n=255-105*e;o=`background: linear-gradient(135deg, rgb(${t},${i},${n}) 0%, rgb(${Math.round(.6*t)},${Math.round(.6*i)},${Math.round(.6*n)}) 100%);`}}const{mode:l,showCovers:c,visibleCovers:d}=this._computed;return Y`
      <ha-card 
        class="mode-${l}"
        style="${o}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @pointermove=${this._handlePointerMove}
      >
        <div class="layout mode-${l}">
            <div class="content" style="opacity: ${this._interacting?"0":"1"}; transition: opacity 0.15s">
                <!-- HEADER (always visible) -->
                <div class="header">
                    <div class="icon-container" @click=${this._toggleLight}>
                        <ha-icon icon="${t.attributes.icon||(e?"mdi:lightbulb-on":"mdi:lightbulb")}"></ha-icon>
                    </div>
                    <div class="info">
                        <span class="name">${this.config.name||t.attributes.friendly_name}</span>
                        <span class="state">${e?`${i}%`:"Off"}</span>
                    </div>
                </div>

                <!-- COVERS (shown only if computed layout says they fit) -->
                ${c?Y`
                    <div class="covers-section" @pointerdown=${t=>t.stopPropagation()}>
                        ${r.slice(0,d).map(t=>this._renderCover(t))}
                    </div>
                `:""}
            </div>
        </div>

        <!-- 2D INTERACTION CURSOR -->
        <div class="cursor" 
             style="
                opacity: ${this._interacting?"1":"0"};
                transform: translate(${this._cursorPos.x-20}px, ${this._cursorPos.y-20}px);
             "
        ></div>
      </ha-card>
    `}_renderCover(t){const e=this.hass.states[t];if(!e)return Y``;const i=!(128&~e.attributes.supported_features);let n="number"==typeof e.attributes.current_position?e.attributes.current_position:0,s="number"==typeof e.attributes.current_tilt_position?e.attributes.current_tilt_position:0;this._activeSlider&&this._activeSlider.entityId===t&&("position"===this._activeSlider.type?n=this._activeSlider.currentVal:"tilt"===this._activeSlider.type&&(s=this._activeSlider.currentVal));return Y`
        <div class="cover-row" @contextmenu=${e=>{this._computed.supports2D||(e.preventDefault(),this._openMoreInfo(t))}}>
            <div class="cover-info">
                <ha-icon icon="${e.attributes.icon||"mdi:window-shutter"}"></ha-icon>
            </div>
            <div class="cover-sliders">
                <!-- Position Slider -->
                <div class="slider-control" 
                     @pointerdown=${e=>this._handleSliderDown(e,t,"position",n)}
                >
                     <div class="slider-fill" style="width: calc((100% - 50px) * ${n/100} + 46px)"></div>
                     <div class="slider-handle" style="left: calc((100% - 42px - 8px) * ${n/100} + 4px)"></div>
                     <div class="slider-label">${n}%</div>
                </div>

                <!-- Tilt Slider -->
                ${i?Y`
                <div class="slider-control" 
                     @pointerdown=${e=>this._handleSliderDown(e,t,"tilt",s)}
                >
                     <div class="slider-fill" style="width: calc((100% - 50px) * ${s/100} + 46px)"></div>
                     <div class="slider-handle" style="left: calc((100% - 42px - 8px) * ${s/100} + 4px)"></div>
                     <div class="slider-label">Tilt: ${s}%</div>
                </div>
                `:""}
            </div>
        </div>
      `}static get styles(){return u`
      /* ═══════════════════════════════════════════
         BASE
         ═══════════════════════════════════════════ */
      :host {
        display: block;
        height: 100%;
      }

      ha-card {
        color: white;
        overflow: hidden;
        transition: background 0.1s linear;
        border: none;
        user-select: none;
        position: relative;
        cursor: grab;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 100%;
      }
      ha-card:active { cursor: grabbing; }
      ha-card.mode-compact { cursor: pointer; }

      /* ═══════════════════════════════════════════
         LAYOUT CONTAINER
         Two modes: vertical (column) or horizontal (row)
         ═══════════════════════════════════════════ */
      .layout {
        padding: 12px; /* SIZES.PAD_V / SIZES.PAD_H */
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      }
      .layout.mode-horizontal {
        flex-direction: row;
        align-items: stretch;
        gap: 12px;
      }

      /* ═══════════════════════════════════════════
         CONTENT WRAPPER
         ═══════════════════════════════════════════ */
      .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 8px; /* SIZES.CONTENT_GAP */
        pointer-events: none;
        flex: 1;
        min-height: 0;
        text-shadow: 0 1px 3px rgba(0,0,0,0.6);
      }

      /* ── Vertical: header at bottom when no covers (HA tile style) ── */
      .mode-vertical .content {
        justify-content: flex-end;
      }
      /* ── Vertical: header top + covers bottom when covers present ── */
      .mode-vertical .content:has(.covers-section) {
        justify-content: space-between;
      }

      /* ── Compact (1-row): vertically center, keep left-aligned ── */
      .mode-compact .content {
        justify-content: center;
      }

      /* ── Horizontal: side-by-side ── */
      .mode-horizontal .content {
        flex-direction: row;
        gap: 12px;
        justify-content: flex-start;
        align-items: stretch;
      }

      .content > * {
        pointer-events: auto;
      }

      /* ═══════════════════════════════════════════
         HEADER
         ═══════════════════════════════════════════ */
      .header {
        display: flex;
        align-items: center;
        gap: 12px; /* SIZES.HEADER_GAP */
        flex: 0 0 auto;
        text-shadow: 0 1px 3px rgba(0,0,0,0.6);
      }
      .mode-horizontal .header {
        align-self: center; /* Vertically center in horizontal mode */
        min-width: 120px; /* SIZES.HEADER_MIN_W */
        width: auto;
      }

      .icon-container {
        flex: 0 0 40px; /* SIZES.ICON — never shrink, never grow */
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s;
      }
      .icon-container:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0; /* Allow text truncation */
      }
      .name {
        font-weight: 400;
        font-size: clamp(0.85rem, 3cqi, 1.1rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .state {
        opacity: 0.8;
        font-size: clamp(0.7rem, 2.5cqi, 0.9rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* ═══════════════════════════════════════════
         COVERS SECTION
         ═══════════════════════════════════════════ */
      .covers-section {
        display: flex;
        flex-direction: column;
        gap: 8px; /* SIZES.COVER_GAP */
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 12px; /* SIZES.COVER_SECTION_PAD / 2 each side */
        margin: 0 -10px -5px; /* Bleed to edges */
      }

      /* Horizontal mode: covers float on the right side */
      .mode-horizontal .covers-section {
        border-top: none;
        margin: 0;
        background: none;
        backdrop-filter: none;
        padding: 0;
        flex: 1;
        align-self: flex-end; /* Pin to bottom */
        justify-content: flex-end;
      }

      .cover-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cover-info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        flex: 0 0 32px;
      }
      .cover-sliders {
        flex: 1;
        display: flex;
        flex-direction: row;
        gap: 8px;
        min-width: 0;
      }

      /* ═══════════════════════════════════════════
         SLIDERS
         ═══════════════════════════════════════════ */
      .slider-control {
        position: relative;
        height: 42px; /* SIZES.COVER_ROW_H */
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        touch-action: none;
        flex: 1;
        display: flex;
        align-items: center;
        overflow: hidden;
        min-width: 80px;
      }
      .slider-control:active {
        cursor: grabbing;
      }
      .slider-fill {
        position: absolute;
        top: 0; left: 0; bottom: 0;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.25) calc(100% - 34px),
          rgba(255, 255, 255, 0) 100%
        );
        border-radius: 12px 0 0 12px;
        pointer-events: none;
      }
      .slider-handle {
        position: absolute;
        top: 4px;
        bottom: 4px;
        width: 34px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        pointer-events: none;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .slider-label {
        position: absolute;
        left: 0; right: 0;
        text-align: center;
        font-size: clamp(0.6rem, 2cqi, 0.75rem);
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        pointer-events: none;
        z-index: 3;
        text-shadow: 0 1px 2px black;
        white-space: nowrap;
        overflow: hidden;
      }

      /* ═══════════════════════════════════════════
         2D CURSOR
         ═══════════════════════════════════════════ */
      .cursor {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.8);
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        pointer-events: none;
        transition: opacity 0.2s;
        will-change: transform;
        z-index: 10;
      }
    `}}Bt.SIZES={ICON:40,HEADER_GAP:12,HEADER_MIN_W:120,COVER_ROW_H:42,COVER_ICON_W:40,COVER_GAP:8,COVER_SECTION_PAD:24,CONTENT_GAP:8,PAD_H:12,PAD_V:12,SLIDER_MIN_W:100},customElements.get("slick-light-control-card")||customElements.define("slick-light-control-card",Bt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-light-control-card",name:"Slick Light Control",description:"A card to control lights (brightness, color temp) and associated covers.",preview:!0}),console.info("%c Lovelace Slick Screen Cards %c 0.2.0 ","color: white; background: #607d8b; font-weight: 700;","color: #607d8b; background: white; font-weight: 700;");
//# sourceMappingURL=slick-screen-cards.js.map
