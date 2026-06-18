/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(s,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:r,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,g=p.trustedTypes,f=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,b=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!r(t,e),v={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??y)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,m?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,k=t=>t,S=w.trustedTypes,$=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,A=`<${E}>`,T=document,P=()=>T.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,O="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,L=/>/g,F=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,N=/"/g,B=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,U=T.createTreeWalker(T,129);function G(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",a=R;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===R?"!--"===l[1]?a=z:void 0!==l[1]?a=L:void 0!==l[2]?(B.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=F):void 0!==l[3]&&(a=F):a===F?">"===l[0]?(a=n??R,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?F:'"'===l[3]?N:H):a===N||a===H?a=F:a===z||a===L?a=R:(a=F,n=void 0);const d=a===F&&t[e+1].startsWith("/>")?" ":"";o+=a===R?i+A:c>=0?(s.push(r),i.slice(0,c)+M+i.slice(c)+C+d):i+C+(-2===c?e:d)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const a=t.length-1,r=this.parts,[l,c]=Y(t,e);if(this.el=X.createElement(l,i),U.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=U.nextNode())&&r.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(M)){const e=c[o++],i=s.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:J}),s.removeAttribute(t)}else t.startsWith(C)&&(r.push({type:6,index:n}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),U.nextNode(),r.push({type:2,index:++n});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===E)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)r.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===W)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=I(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);U.currentNode=s;let n=U.nextNode(),o=0,a=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new Q(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new st(n,this,t)),this._$AV.push(e),r=i[++a]}o!==r?.index&&(n=U.nextNode(),o++)}return U.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),I(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=K(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let a,r;for(t=n[0],a=0;a<n.length-1;a++)r=K(this,s[i+a],e,a),r===W&&(r=this._$AH[a]),o||=!I(r)||r!==this._$AH[a],r===V?t=V:t!==V&&(t+=(r??"")+n[a+1]),this._$AH[a]=r}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends J{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??V)===W)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const rt=ot.litElementPolyfillSupport;rt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");console.info("%c WIND-COMPASS-CARD %c 0.2.0 ","color: white; background: #607d8b; font-weight: 700;","color: #607d8b; background: white; font-weight: 700;");class lt extends HTMLElement{constructor(){super(),this._bucketSize=5,this._bucketCount=72,this._warnMultiplier=.9,this._historyData=[],this._lastHistoryFetch=0,this._avgDeg=0,this._instDeg=0,this._currentUnit="",this._maxSpeed=30,this._currentGust=0,this._limitRaffstore=0,this._limitRollo=0,this.attachShadow({mode:"open"})}static getConfigElement(){return document.createElement("slick-wind-compass-editor")}static getStubConfig(){return{type:"custom:slick-wind-compass-card",direction_entity:"",speed_entity:"",max_speed:60}}set hass(t){this._hass=t,this._updateCard()}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={bucket_size:5,warn_multiplier:.9,max_speed:30,simple_mode:!1,...t};if(e.bucket_size&&"number"!=typeof e.bucket_size)throw new Error("bucket_size must be a number");if(e.max_speed&&"number"!=typeof e.max_speed)throw new Error("max_speed must be a number");this.config=e,this.config.simple_mode?this.classList.add("simple-mode"):this.classList.remove("simple-mode"),this._recalcBuckets()}_recalcBuckets(){let t=void 0!==this.config.bucket_size?Number(this.config.bucket_size):5;for((isNaN(t)||t<1)&&(t=5),t>90&&(t=90);360%t!=0;)t++;this._bucketSize!==t&&(this._bucketSize=t,this._bucketCount=Math.floor(360/this._bucketSize),this._historyData=new Array(this._bucketCount).fill(null).map(()=>({duration:0,totalSpeed:0})),this._lastHistoryFetch=0)}connectedCallback(){this.shadowRoot||this.attachShadow({mode:"open"}),!this.shadowRoot||this.shadowRoot.innerHTML&&""!==this.shadowRoot.innerHTML.trim()||this._render(),this.shadowRoot&&(this.content=this.shadowRoot.querySelector(".container"),this.content&&(this._resizeObserver=new ResizeObserver(()=>{this._updateDimensions(),this._updateVisuals()}),this._resizeObserver.observe(this.content)))}disconnectedCallback(){var t;null===(t=this._resizeObserver)||void 0===t||t.disconnect()}_render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n      <style>\n        :host {\n          display: block;\n          width: 100%;\n          height: 100%;\n          font-weight: 200;\n          background: var(--ha-card-background, var(--card-background-color, white));\n          border-radius: var(--ha-card-border-radius, 12px);\n          box-shadow: var(--ha-card-box-shadow, none);\n          overflow: hidden;\n          box-sizing: border-box;\n          position: relative;\n          isolation: isolate;\n        }\n        \n        ha-card {\n          display: none;\n        }\n\n        .container {\n          padding: clamp(12px, 4%, 24px);\n          display: flex;\n          flex-direction: column;\n          gap: clamp(8px, 3%, 20px);\n          height: 100%;\n          box-sizing: border-box;\n          overflow: hidden;\n        }\n\n        /* --- COMPASS AREA --- */\n        .compass-container {\n          position: relative;\n          width: 100%;\n          flex: 1 1 auto;\n          min-height: 40px;\n          background: transparent;\n          border-radius: 12px;\n          \n          /* Apple Fade-Out Effect Left/Right */\n          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);\n          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);\n          \n          touch-action: pan-y;\n          isolation: isolate; \n          z-index: 0;\n        }\n\n        .compass-tape {\n          position: absolute;\n          top: 0;\n          left: 50%; /* Zentriert */\n          height: 100%;\n          display: flex;\n          align-items: center;\n          /* Smooth Animation für das Band */\n          transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          will-change: transform;\n          z-index: 1;\n        }\n\n        /* Historien-Balken */\n        .hist-bar {\n          position: absolute;\n          bottom: 0;\n          border-radius: 4px;\n          pointer-events: none;\n          transform: none; \n          border: none;\n          box-sizing: border-box; \n          background: none; \n          transition: height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          overflow: hidden;\n          opacity: 0.9;\n        }\n\n        .hist-fill {\n          position: absolute;\n          top: 0; left: 0; right: 0; bottom: 0;\n          transition: opacity 0.3s ease, background 0.3s ease;\n        }\n\n        .compass-tick {\n          position: absolute;\n          top: 42px; /* Adjusted to sit below labels */\n          width: 1px;\n          border-radius: 0.5px;\n          background: var(--primary-text-color);\n          opacity: 0.2;\n          z-index: 2;\n        }\n\n        .compass-label {\n          position: absolute;\n          top: 12px;\n          transform: translateX(-50%);\n          color: var(--primary-text-color);\n          font-weight: 200;\n          font-size: clamp(14px, 4cqmax, 20px);\n          letter-spacing: 0.5px;\n          z-index: 3;\n          line-height: 1;\n        }\n\n        /* FLOATING MARKER (Modern Arrow) */\n        .compass-marker {\n          position: absolute;\n          left: 50%; \n          top: 0px; \n          width: 2px;\n          height: 12px;\n          background: var(--error-color, #ff3b30);\n          border-radius: 1px;\n          \n          transform: translateX(-50%); \n          z-index: 20; \n          filter: drop-shadow(0 0 4px rgba(255, 59, 48, 0.4));\n          transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          will-change: transform;\n        }\n        \n        /* Arrowhead */\n        .compass-marker::after {\n          content: \'\';\n          position: absolute;\n          bottom: -5px;\n          left: 50%;\n          transform: translateX(-50%);\n          width: 0; \n          height: 0; \n          border-left: 5px solid transparent;\n          border-right: 5px solid transparent;\n          border-top: 6px solid var(--error-color, #ff3b30);\n        }\n\n        /* CENTER DOT - Zeigt Durchschnitt (Mitte des Fensters) */\n        .compass-center-dot {\n           position: absolute;\n           left: 50%;\n           bottom: 0;\n           width: 2px; \n           height: 12px; \n           background: var(--primary-text-color);\n           border-radius: 2px;\n           transform: translateX(-50%);\n           opacity: 0.3;\n           z-index: 4;\n        }\n\n        /* --- SPEED BAR AREA --- */\n        .speed-container {\n          display: flex;\n          flex-direction: column;\n          gap: 8px;\n          flex: 0 0 auto;\n        }\n\n        .speed-bar-bg {\n          position: relative;\n          width: 100%;\n          height: 12px;\n          background: var(--secondary-background-color, rgba(0,0,0,0.05));\n          border-radius: 6px;\n          overflow: visible; \n          isolation: isolate;\n        }\n\n        .speed-bar-gust {\n          position: absolute;\n          top: 0; left: 0; bottom: 0;\n          background: var(--accent-color, var(--primary-color, #2196F3));\n          opacity: 0.2;\n          width: 0%;\n          transition: width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          z-index: 1;\n          border-radius: 6px;\n        }\n\n        .speed-bar-fill {\n          position: absolute;\n          top: 0; left: 0; bottom: 0;\n          background: var(--accent-color, var(--primary-color, #2196F3));\n          width: 0%;\n          transition: width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);\n          box-shadow: 0 0 10px var(--accent-color, transparent); \n          z-index: 2;\n          border-radius: 6px;\n        }\n\n        .limit-marker {\n          position: absolute;\n          top: -2px; \n          bottom: -2px; \n          width: 2px;\n          background-color: var(--primary-text-color);\n          z-index: 10;\n          box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n          border-radius: 1px;\n          display: none; \n          pointer-events: none;\n          opacity: 0.8;\n        }\n\n        .speed-text {\n          display: flex;\n          justify-content: flex-end;\n          align-items: baseline;\n          gap: 4px;\n          color: var(--primary-text-color);\n          text-shadow: var(--text-shadow, none);\n        }\n\n        .speed-text .value {\n          font-size: clamp(1.8rem, 10cqmax, 4rem);\n          font-weight: 100;\n          letter-spacing: -1px;\n          line-height: 1;\n        }\n\n        .speed-text .unit {\n          font-size: clamp(0.85rem, 3cqmax, 1.25rem);\n          color: var(--secondary-text-color);\n          font-weight: 200;\n        }\n\n        .speed-text .gust-info {\n          margin-left: 8px;\n          font-size: clamp(10px, 3cqmax, 14px);\n          color: var(--secondary-text-color);\n          opacity: 0.8;\n        }\n\n        /* --- SIMPLE MODE --- */\n        :host(.simple-mode) {\n          /* Restore card background and shadow to match other cards */\n          overflow: hidden; \n        }\n\n        :host(.simple-mode) .container {\n           padding: 0;\n           padding-top: 12px;\n           height: 100%;\n           position: relative;\n        }\n\n        :host(.simple-mode) .compass-container {\n           flex: 1 1 auto;\n           min-height: 30px;\n           margin-top: 50px;\n           -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);\n           mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);\n        }\n\n        :host(.simple-mode) .compass-tick {\n           top: 42px; /* Pushed down */\n        }\n        \n        :host(.simple-mode) .compass-label {\n           top: 20px; /* Pushed down to clear marker */\n           font-size: clamp(12px, 3cqmax, 16px);\n        }\n\n        :host(.simple-mode) .compass-marker {\n           top: 0px; /* At the top edge of compass container */\n        }\n\n        :host(.simple-mode) .speed-container {\n           position: absolute;\n           top: 16px;\n           left: 16px;\n           width: auto;\n           height: auto;\n           display: block;\n           z-index: 10;\n        }\n        \n        :host(.simple-mode) .speed-bar-bg {\n           display: none;\n        }\n\n        :host(.simple-mode) .speed-text {\n           display: flex;\n           flex-direction: row;\n           align-items: baseline;\n           justify-content: flex-start;\n           color: var(--primary-text-color);\n           text-shadow: 0 1px 4px rgba(0,0,0,0.5); /* Always shadow for readability over possible map/picture */\n        }\n\n        :host(.simple-mode) .speed-text .value {\n           font-size: 2.8rem; /* Smaller than full mode */\n        }\n        \n        :host(.simple-mode) .speed-text .gust-info {\n           margin-left: 6px;\n           font-size: clamp(10px, 3cqmax, 14px);\n           opacity: 0.9;\n        }\n\n        /* ALERT MODE (Red Background) */\n        :host(.simple-mode.alert-state) {\n           background: linear-gradient(135deg, rgba(255,59,48,0.8), rgba(200,30,30,0.9)) !important;\n           border-radius: var(--ha-card-border-radius, 12px);\n           box-shadow: 0 4px 20px rgba(255, 59, 48, 0.4);\n        }\n        \n        :host(.simple-mode.alert-state) .speed-text,\n        :host(.simple-mode.alert-state) .compass-label {\n           color: white !important;\n        }\n        \n        :host(.simple-mode.alert-state) .compass-tick {\n           background: white !important;\n           opacity: 0.4;\n        }\n      </style>\n\n      <div class="container">\n        <div class="compass-container" id="container">\n          <div class="compass-center-dot"></div>\n          <div class="compass-marker" id="marker"></div>\n          <div class="compass-tape" id="tape"></div>\n        </div>\n\n        <div class="speed-container">\n          <div class="speed-bar-bg">\n            <div class="speed-bar-gust" id="gust-bar"></div>\n            <div class="speed-bar-fill" id="speed-bar"></div>\n            <div class="limit-marker" id="limit-raffstore" title="Raffstore Limit"></div>\n            <div class="limit-marker" id="limit-rollo" title="Rollo Limit"></div>\n          </div>\n          <div class="speed-text" id="speed-text">--</div>\n        </div>\n      </div>\n    ')}_updateCard(){if(!this.config)return;const t=this.config.direction_entity,e=this.config.instant_direction_entity||t,i=this.config.speed_entity,s=this.config.gust_entity,n=this.config.raffstore_limit_entity,o=this.config.rollo_limit_entity;this._maxSpeed=this.config.max_speed||30,this._warnMultiplier=void 0!==this.config.warn_multiplier?Number(this.config.warn_multiplier):.9,this._recalcBuckets();const a=this._hass,r=null==a?void 0:a.states[t],l=null==a?void 0:a.states[e],c=null==a?void 0:a.states[i],h=s&&a?a.states[s]:null;r&&!isNaN(parseFloat(r.state))&&(this._avgDeg=parseFloat(r.state)),l&&!isNaN(parseFloat(l.state))?this._instDeg=parseFloat(l.state):this._instDeg=this._avgDeg,c&&!isNaN(parseFloat(c.state))?(this._currentSpeed=parseFloat(c.state),this._currentUnit=c.attributes.unit_of_measurement||"km/h"):(this._currentSpeed=0,this._currentUnit="km/h"),h&&!isNaN(parseFloat(h.state))?this._currentGust=parseFloat(h.state):this._currentGust=0,this._limitRaffstore=0,this._limitRollo=0,a&&n&&a.states[n]&&(this._limitRaffstore=parseFloat(a.states[n].state)||0),a&&o&&a.states[o]&&(this._limitRollo=parseFloat(a.states[o].state)||0);const d=Date.now();d-this._lastHistoryFetch>3e5&&a&&(this._lastHistoryFetch=d,this._fetchHistory(t,i)),this._updateVisuals()}async _fetchHistory(t,e){if(!this._hass)return;const i=new Date,s=new Date(i.getTime()-864e5);try{const n=[t,e].join(","),o=await this._hass.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${n}&end_time=${i.toISOString()}&minimal_response`);if(o&&2===o.length){const i=o.find(e=>e.length>0&&e[0].entity_id===t),s=o.find(t=>t.length>0&&t[0].entity_id===e);i&&s&&this._processHistoryData(i,s)}}catch(t){console.error("WindCompass: History fetch failed",t)}}_processHistoryData(t,e){const i=new Array(this._bucketCount).fill(null).map(()=>({duration:0,totalSpeed:0}));let s=0;for(let n=0;n<t.length-1;n++){const o=parseFloat(t[n].state);if(isNaN(o))continue;const a=new Date(t[n].last_changed).getTime(),r=(new Date(t[n+1].last_changed).getTime()-a)/1e3/60;for(;s<e.length-1&&new Date(e[s+1].last_changed).getTime()<=a;)s++;const l=parseFloat(e[s].state)||0,c=Math.floor(o%360/360*this._bucketCount);c>=0&&c<this._bucketCount&&(i[c].duration+=r,i[c].totalSpeed+=l*r)}this._historyData=i,this._updateDimensions(),this._updateVisuals()}_updateDimensions(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector("#container");if(!t)return;const e=t.offsetWidth;0!==e&&(this._pxPerDeg=e/360,this._buildTape())}_buildTape(){if(!this.shadowRoot||!this._pxPerDeg)return;const t=this.shadowRoot.querySelector("#tape");if(!t)return;t.innerHTML="";let e=0,i=0;this._historyData.forEach(t=>{if(t.duration>0){t.duration>e&&(e=t.duration);const s=t.totalSpeed/t.duration;s>i&&(i=s)}}),0===e&&(e=1),0===i&&(i=1);const s=[this._limitRaffstore,this._limitRollo].filter(t=>t>0),n=s.length>0?Math.min(...s):null,o=n?n*this._warnMultiplier:null,a=this._bucketSize*this._pxPerDeg,r=Math.max(1,a-2);for(let s=-180;s<=540;s+=this._bucketSize){const n=s*this._pxPerDeg,a=(s%360+360)%360,l=Math.floor(a/this._bucketSize);if(l>=0&&l<this._bucketCount){const s=this._historyData[l];if(s&&s.duration>0){const a=s.totalSpeed/s.duration,l=null!==o&&a>=o,c=l?"var(--error-color, #ff3b30)":"var(--accent-color, var(--primary-color))",h=document.createElement("div");h.className="hist-bar";const d=a/i*100;h.style.height=.6*d+"%",h.style.left=`${n+1}px`,h.style.width=`${r}px`;const u=document.createElement("div");if(u.className="hist-fill",u.style.background=c,l)u.style.opacity="1.0";else{const t=s.duration/e;u.style.opacity=(.4+.6*t).toString()}h.appendChild(u),t.appendChild(h)}}let c=!1;const h=document.createElement("div");if(h.className="compass-tick",h.style.left=`${n}px`,a%90==0){const e=document.createElement("div");e.className="compass-label";const i={0:"N",90:"O",180:"S",270:"W"};e.textContent=i[a]||"",e.style.left=`${n}px`,t.appendChild(e),c=!1}else a%45==0?(h.style.height="10px",h.style.opacity="0.4",c=!0):a%15==0&&(h.style.height="6px",h.style.opacity="0.2",c=!0);c&&t.appendChild(h)}}_interpolateColor(t,e,i){const s=t=>{const e=t.replace("#","");return parseInt(3===e.length?e.split("").map(t=>t+t).join(""):e,16)},n=s(t)>>16&255,o=s(t)>>8&255,a=255&s(t),r=s(e)>>16&255,l=s(e)>>8&255,c=255&s(e);return`rgb(${Math.round(n+(r-n)*i)}, ${Math.round(o+(l-o)*i)}, ${Math.round(a+(c-a)*i)})`}_updateVisuals(){var t,e;if(!this.shadowRoot||void 0===this._avgDeg||!this._pxPerDeg)return;if(!this.config)return;const i=this.shadowRoot.querySelector("#tape");i&&(i.style.transform=`translateX(-${this._avgDeg*this._pxPerDeg}px)`);const s=this.shadowRoot.querySelector("#marker");if(s&&void 0!==this._instDeg){const t=(this._instDeg-this._avgDeg+540)%360-180;s.style.transform=`translateX(calc(-50% + ${t*this._pxPerDeg}px))`}const n=this.shadowRoot.querySelector("#speed-bar"),o=this.shadowRoot.querySelector("#gust-bar"),a=this.shadowRoot.querySelector("#speed-text"),r=this.shadowRoot.querySelector("#limit-raffstore"),l=this.shadowRoot.querySelector("#limit-rollo");if(void 0!==this._currentSpeed){if(this.config.simple_mode){const t=[this._limitRaffstore,this._limitRollo].filter(t=>t>0),e=t.length>0?Math.min(...t):null;if(e&&this._currentSpeed>=e?this.classList.add("alert-state"):this.classList.remove("alert-state"),a){let t=`\n                <span class="value">${Math.round(this._currentSpeed||0)}</span>\n                <span class="unit">${this._currentUnit}</span>\n             `;this._currentGust>0&&(t+=`<span class="gust-info">(${Math.round(this._currentGust)})</span>`),a.innerHTML=t}}let i=this._currentSpeed/this._maxSpeed*100;i>100&&(i=100),!this.config.simple_mode&&n&&(n.style.width=`${i}%`);const s=!0===(null===(e=null===(t=this._hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode),c=i/100;let h,d;s?(h="#1c1c1e",d="#3a3a3c"):(h="#e0e0e0",d="#ffffff");const u="#37474f",p="#607d8b",g=this._interpolateColor(h,u,c),f=this._interpolateColor(d,p,c);this.style.background=`linear-gradient(180deg, ${g} 0%, ${f} 100%)`,s||c>.5?(this.style.color="white",this.style.setProperty("--primary-text-color","white"),this.style.setProperty("--secondary-text-color","rgba(255,255,255,0.7)"),this.style.setProperty("--secondary-background-color","rgba(255,255,255,0.15)"),this.style.setProperty("--ha-card-box-shadow","none"),this.style.setProperty("--text-shadow","0 1px 4px rgba(0,0,0,0.5)")):(this.style.color="#212121",this.style.setProperty("--primary-text-color","#212121"),this.style.setProperty("--secondary-text-color","#757575"),this.style.setProperty("--secondary-background-color","rgba(0,0,0,0.1)"),this.style.removeProperty("--text-shadow"));let m=this._currentGust/this._maxSpeed*100;if(m>100&&(m=100),o&&(o.style.width=`${m}%`),!this.config.simple_mode&&a){let t=`\n                <span class="value">${Math.round(this._currentSpeed||0)}</span>\n                <span class="unit">${this._currentUnit}</span>\n            `;this._currentGust>0&&(t+=`<span class="gust-info">(Max ${Math.round(this._currentGust)})</span>`),a.innerHTML=t}if(r)if(this._limitRaffstore>0){let t=this._limitRaffstore/this._maxSpeed*100;t>100&&(t=100),r.style.left=`${t}%`,r.style.display="block"}else r.style.display="none";if(l)if(this._limitRollo>0){let t=this._limitRollo/this._maxSpeed*100;t>100&&(t=100),l.style.left=`${t}%`,l.style.display="block"}else l.style.display="none"}}getCardSize(){return 3}}customElements.get("slick-wind-compass-card")||customElements.define("slick-wind-compass-card",lt);class ct extends at{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return j``;return j`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"direction_entity",label:"Direction Entity",selector:{entity:{domain:"sensor"}}},{name:"speed_entity",label:"Speed Entity",selector:{entity:{domain:"sensor"}}},{name:"gust_entity",label:"Gust Entity (Optional)",selector:{entity:{domain:"sensor"}}},{name:"instant_direction_entity",label:"Instant Dir (opt)",selector:{entity:{domain:"sensor"}}},{name:"max_speed",label:"Max Speed",selector:{number:{mode:"box",min:0}}},{name:"simple_mode",label:"Simple Mode",selector:{boolean:{}}},{name:"raffstore_limit_entity",label:"Raffstore Limit (opt)",selector:{entity:{domain:"sensor"}}},{name:"rollo_limit_entity",label:"Rollo Limit (opt)",selector:{entity:{domain:"sensor"}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-wind-compass-editor")||customElements.define("slick-wind-compass-editor",ct),window.customCards=window.customCards||[],window.customCards.push({type:"slick-wind-compass-card",name:"Slick Wind Compass",preview:!0,description:"Apple-style wind direction compass with speed indicator"});console.info("%c MINI-WEATHER-CARD %c 0.2.0 ","color: white; background: #2980b9; font-weight: 700;","color: #2980b9; background: white; font-weight: 700;");class ht extends at{_getCurrentTemperatureValue(){var t,e;const i=null===(t=this.config)||void 0===t?void 0:t.entity;if(!this.hass||!i)return;const s=this.hass.states[i];let n=null===(e=null==s?void 0:s.attributes)||void 0===e?void 0:e.temperature;if(this.config.temp_sensor){const t=this.hass.states[this.config.temp_sensor];t&&(n=t.state)}return this._toOptionalNumber(n)}_getForecastBounds(t){var e,i;let s=1/0,n=-1/0;for(const o of t){const t=null!==(e=o.temperature)&&void 0!==e?e:o.temp_max,a=null!==(i=o.templow)&&void 0!==i?i:o.temp_min;void 0!==a&&a<s&&(s=a),void 0!==t&&t>n&&(n=t),void 0===a&&void 0!==t&&t<s&&(s=t)}return isFinite(s)||(s=0),isFinite(n)||(n=s+1),n===s&&(n=s+1),{min:s,max:n}}_getBarScaleStyles(t,e,i,s){const n=Math.max(s-i,.1),o=Math.min(t,e),a=Math.max(t,e),r=Math.min(Math.max((o-i)/n*100,0),100),l=Math.min(Math.max((a-i)/n*100,0),100),c=Math.min(Math.max((o- -20)/55*100,0),100),h=Math.min(Math.max((a- -20)/55*100,0),100),d=Math.max(h-c,.5);return{windowStyle:`left:${r}%;right:${100-l}%`,scaleStyle:`width:${1e4/d}%;left:-${c/d*100}%`}}_getMeasuredHeaderHeight(){return Math.min(Math.max(.11*this._cardWidth,64),88)}static get properties(){return{hass:{attribute:!1},config:{state:!0},_forecast:{state:!0},_cardWidth:{state:!0},_cardHeight:{state:!0}}}static getConfigElement(){return document.createElement("slick-minimal-weather-card-editor")}static getStubConfig(t){let e="";if(t&&t.states){const i=Object.keys(t.states).filter(t=>t.startsWith("weather."));i.length>0&&(e=i[0])}return{type:"custom:slick-minimal-weather-card",entity:e,title:"Wetter",mode:"daily"}}constructor(){super(),this._forecast=null,this._cardHeight=200,this._cardWidth=300,this._forecastRequestToken=0,this._forecast=null,this._cardHeight=200,this._cardWidth=300,this._resizeObserver=new ResizeObserver(t=>{for(const e of t)this._cardWidth=e.contentRect.width,this._cardHeight=e.contentRect.height,this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this),this.hass&&this.config&&this._updateForecast()}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect(),this._forecastInterval&&(clearInterval(this._forecastInterval),this._forecastInterval=void 0)}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={title:"Wetter",mode:"daily",temp_sensor:void 0,sun_entity:"sun.sun",...t};if(e.mode&&!["daily","hourly"].includes(e.mode))throw new Error(`Invalid mode: ${e.mode}. Expected 'daily' or 'hourly'.`);this.config=e}updated(t){super.updated(t);const e=t.has("hass")&&!t.get("hass");(t.has("config")||e)&&(this._updateForecast(),this._forecastInterval&&clearInterval(this._forecastInterval),this._forecastInterval=window.setInterval(()=>this._updateForecast(),9e5))}shouldUpdate(t){if(t.has("config")||t.has("_forecast")||t.has("_cardWidth")||t.has("_cardHeight"))return!0;if(t.has("hass")){const e=t.get("hass");if(!e||!this.hass||!this.config)return!0;const i=this.config.entity,s=this.config.temp_sensor,n=this.config.sun_entity||"sun.sun";return!!i&&e.states[i]!==this.hass.states[i]||!!s&&e.states[s]!==this.hass.states[s]||!!n&&e.states[n]!==this.hass.states[n]}return!0}_toOptionalNumber(t){if("number"==typeof t&&Number.isFinite(t))return t;if("string"==typeof t&&""!==t.trim()){const e=Number(t);if(Number.isFinite(e))return e}}_normalizeForecast(t){if(!Array.isArray(t))return[];return t.map(t=>{if(!t||"object"!=typeof t)return null;const e=t,i="string"==typeof e.datetime?e.datetime:null;if(!i)return null;const s={datetime:i,condition:"string"==typeof e.condition?e.condition:""},n=this._toOptionalNumber(e.temperature),o=this._toOptionalNumber(e.temp_max),a=this._toOptionalNumber(e.templow),r=this._toOptionalNumber(e.temp_min);return void 0!==n&&(s.temperature=n),void 0!==o&&(s.temp_max=o),void 0!==a&&(s.templow=a),void 0!==r&&(s.temp_min=r),s}).filter(t=>null!==t)}_extractForecastResponse(t,e){var i,s,n,o,a,r;if(null===(s=null===(i=null==t?void 0:t.service_response)||void 0===i?void 0:i[e])||void 0===s?void 0:s.forecast)return t.service_response[e].forecast;if(null===(n=null==t?void 0:t[e])||void 0===n?void 0:n.forecast)return t[e].forecast;if(Array.isArray(t))for(const i of t){if(null===(a=null===(o=null==i?void 0:i.service_response)||void 0===o?void 0:o[e])||void 0===a?void 0:a.forecast)return i.service_response[e].forecast;if(null===(r=null==i?void 0:i[e])||void 0===r?void 0:r.forecast)return i[e].forecast}return[]}async _updateForecast(){var t,e;if(!this.hass||!(null===(t=this.config)||void 0===t?void 0:t.entity))return void(this._forecast=[]);const i=this.config.entity,s=this.hass.states[i];if(!s)return void(this._forecast=[]);const n=this._normalizeForecast(null===(e=s.attributes)||void 0===e?void 0:e.forecast);if(n.length>0&&"daily"===this.config.mode)return void(this._forecast=n);const o=++this._forecastRequestToken;try{const t=await this.hass.callApi("POST","services/weather/get_forecasts?return_response",{entity_id:i,type:this.config.mode||"daily"});if(o!==this._forecastRequestToken)return;const e=this._normalizeForecast(this._extractForecastResponse(t,i));this._forecast=e.length>0?e:n}catch(t){console.error("MiniWeatherCard: Forecast fetch failed",t),o===this._forecastRequestToken&&(this._forecast=n)}}render(){var t,e;if(!this.config)return j``;if(!this.hass)return j``;const i=this.config.entity?this.hass.states[this.config.entity]:void 0,s=this._getCurrentTemperatureValue(),n=this._getMeasuredHeaderHeight(),o=2*Math.min(Math.max(.04*this._cardWidth,12),20),a=Math.max(this._cardHeight-o-n-4,0),r=this._cardHeight>140,l=this._forecast||[],c=r?Math.max(Math.floor(a/24),0):0,h=r?Math.min(l.length,c):0,d=r?l.slice(0,h):[],u="hourly"===this.config.mode;let p=j`&nbsp;`;if(l.length>0){const i=l[0],s=null!==(t=i.temperature)&&void 0!==t?t:i.temp_max,n=null!==(e=i.templow)&&void 0!==e?e:i.temp_min,o=void 0!==s?Math.round(s):"--",a=void 0!==n?Math.round(n):"--";p=u?j`${o}°`:"--"===a?j`H:${o}°`:j`H:${o}° L:${a}°`}const g=this._getCurrentGradients(),f=void 0!==s?`${Math.round(s)}°`:"--",m=this._getForecastBounds(l);return j`
      <ha-card @click="${this._openMoreInfo}" style="cursor: pointer;">
        <div class="bg-container">
            <div class="bg-layer bright" style="background: ${g.bright};"></div>
            <div class="bg-layer dark" style="background: ${g.dark};"></div>
            
        </div>

        <div class="container content-layer">
            <div class="header">
        <div class="temp-big">${f}</div>
                <div class="header-right">
                    <ha-icon icon="${this._getIcon(i?i.state:"")}" class="main-icon"></ha-icon>
                    <div class="hl-label">${p}</div>
                </div>
            </div>

            ${r?j`
                <div class="forecast-list">
                    ${d.map(t=>this._renderRow(t,m.min,m.max))}
                    ${0===l.length?j`<div class="loading">Lade...</div>`:""}
                </div>
            `:j`<div style="flex:1;"></div>`} 

        </div>
      </ha-card>
    `}_renderRow(t,e=0,i=1){var s,n;const o=new Date(t.datetime),a="hourly"===this.config.mode,r=Number.isNaN(o.getTime())?"":a?o.toLocaleTimeString(this.hass.language,{hour:"2-digit",minute:"2-digit"}):o.toLocaleDateString(this.hass.language,{weekday:"short"}),l=null!==(s=t.temperature)&&void 0!==s?s:t.temp_max,c=null!==(n=t.templow)&&void 0!==n?n:t.temp_min;if(a&&void 0!==l)return j`<div class="row hourly"><div class="day-name">${r}</div><div class="icon-small"><ha-icon icon="${this._getIcon(t.condition)}"></ha-icon></div><div class="temp-single">${Math.round(l)}°</div></div>`;if(void 0!==c&&void 0!==l){const s=this._getBarScaleStyles(c,l,e,i);return j`<div class="row"><div class="day-name">${r}</div><div class="icon-small"><ha-icon icon="${this._getIcon(t.condition)}"></ha-icon></div><div class="bars"><span class="val-low">${Math.round(c)}°</span><div class="bar-track"><div class="bar-fill-window" style="${s.windowStyle}"><div class="bar-fill-scale" style="${s.scaleStyle}"></div></div></div><span class="val-high">${Math.round(l)}°</span></div></div>`}return j``}_getIcon(t){return{sunny:"mdi:weather-sunny","clear-night":"mdi:weather-night",partlycloudy:"mdi:weather-partly-cloudy",cloudy:"mdi:cloud",rainy:"mdi:weather-rainy",pouring:"mdi:weather-pouring",fog:"mdi:weather-fog",hail:"mdi:weather-hail",snowy:"mdi:weather-snowy",lightning:"mdi:weather-lightning"}[t]||"mdi:weather-cloudy"}_openMoreInfo(){this.config.entity&&this.dispatchEvent(new CustomEvent("hass-more-info",{composed:!0,detail:{entityId:this.config.entity}}))}_getCurrentGradients(){if(!this.hass||!this.config||!this.config.entity)return{bright:"linear-gradient(180deg, #2c3e50 0%, #151a1e 100%)",dark:"linear-gradient(180deg, #243342 0%, #0a0a0a 100%)"};const t=this.hass.states[this.config.entity];if(!t)return{bright:"linear-gradient(180deg, #2c3e50 0%, #151a1e 100%)",dark:"linear-gradient(180deg, #243342 0%, #0a0a0a 100%)"};const e=this.config.sun_entity||"sun.sun",i=this.hass.states[e];let s="noon";if(i&&i.attributes){s=function(t,e){return t<-18?"night":t>=-18&&t<-6?e?"early-dawn":"late-dusk":t>=-6&&t<0?e?"late-dawn":"early-dusk":t>=0&&t<15?e?"morning":"late-afternoon":t>=15&&t<35?e?"morning":"early-afternoon":"noon"}(i.attributes.elevation||0,i.attributes.rising||!1)}const n=function(t){return["rainy","pouring","lightning","snowy","hail","fog"].includes(t)}(t.state);return function(t,e){const i={"night-good":{bright:"linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",dark:"linear-gradient(180deg, #000000 0%, #0a1929 50%, #1a2f42 100%)"},"early-dawn-good":{bright:"linear-gradient(180deg, #2c3e50 0%, #3a5169 50%, #526c87 100%)",dark:"linear-gradient(180deg, #1a1f2e 0%, #2b3a4d 50%, #3d5167 100%)"},"late-dawn-good":{bright:"linear-gradient(180deg, #f3904f 0%, #f7b267 50%, #ffd89b 100%)",dark:"linear-gradient(180deg, #d76d47 0%, #e89a5f 50%, #f5c98c 100%)"},"morning-good":{bright:"linear-gradient(180deg, #56ccf2 0%, #87ceeb 50%, #a8daff 100%)",dark:"linear-gradient(180deg, #3ba5d1 0%, #6bb8e0 50%, #8dc9f2 100%)"},"noon-good":{bright:"linear-gradient(180deg, #1e88e5 0%, #42a5f5 50%, #64b5f6 100%)",dark:"linear-gradient(180deg, #1565c0 0%, #1e88e5 50%, #42a5f5 100%)"},"early-afternoon-good":{bright:"linear-gradient(180deg, #42a5f5 0%, #64b5f6 50%, #90caf9 100%)",dark:"linear-gradient(180deg, #2196f3 0%, #42a5f5 50%, #64b5f6 100%)"},"late-afternoon-good":{bright:"linear-gradient(180deg, #ff9a56 0%, #ffb07c 50%, #ffcda3 100%)",dark:"linear-gradient(180deg, #f57c42 0%, #ff9656 50%, #ffb486 100%)"},"early-dusk-good":{bright:"linear-gradient(180deg, #fa709a 0%, #fc8ba8 50%, #ffa7bd 100%)",dark:"linear-gradient(180deg, #e85285 0%, #f56a94 50%, #fc8ba8 100%)"},"late-dusk-good":{bright:"linear-gradient(180deg, #434343 0%, #5a5a5a 50%, #717171 100%)",dark:"linear-gradient(180deg, #1a1a1a 0%, #2f2f2f 50%, #454545 100%)"},"night-bad":{bright:"linear-gradient(180deg, #263238 0%, #37474f 50%, #455a64 100%)",dark:"linear-gradient(180deg, #0d1117 0%, #1a1f2e 50%, #263238 100%)"},"early-dawn-bad":{bright:"linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)",dark:"linear-gradient(180deg, #2c3e50 0%, #34495e 50%, #455a64 100%)"},"late-dawn-bad":{bright:"linear-gradient(180deg, #78909c 0%, #90a4ae 50%, #b0bec5 100%)",dark:"linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)"},"morning-bad":{bright:"linear-gradient(180deg, #607d8b 0%, #78909c 50%, #90a4ae 100%)",dark:"linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)"},"noon-bad":{bright:"linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)",dark:"linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)"},"early-afternoon-bad":{bright:"linear-gradient(180deg, #607d8b 0%, #78909c 50%, #90a4ae 100%)",dark:"linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)"},"late-afternoon-bad":{bright:"linear-gradient(180deg, #78909c 0%, #8d9da6 50%, #a3b1ba 100%)",dark:"linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)"},"early-dusk-bad":{bright:"linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)",dark:"linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)"},"late-dusk-bad":{bright:"linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)",dark:"linear-gradient(180deg, #1c2329 0%, #263238 50%, #37474f 100%)"}};return i[`${t}-${e?"bad":"good"}`]||i["noon-good"]}(s,n)}static get styles(){return o`
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
    `}}customElements.get("slick-minimal-weather-card")||customElements.define("slick-minimal-weather-card",ht);class dt extends at{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value,i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return j``;return j`<ha-form .hass=${this.hass} .data=${this._config} .schema=${[{name:"entity",label:"Wetter Entität",selector:{entity:{domain:"weather"}}},{name:"title",label:"Titel",selector:{text:{}}},{name:"temp_sensor",label:"Temp. Override (Sensor)",selector:{entity:{domain:"sensor"}}},{name:"sun_entity",label:"Sonnen-Sensor",selector:{entity:{domain:"sun"}}},{name:"mode",label:"Modus",selector:{select:{options:[{value:"daily",label:"Täglich"},{value:"hourly",label:"Stündlich"}]}}}]} .computeLabel=${t=>t.label} @value-changed=${this._valueChanged}></ha-form>`}}customElements.get("slick-minimal-weather-card-editor")||customElements.define("slick-minimal-weather-card-editor",dt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-minimal-weather-card",name:"Slick Minimal Weather",preview:!0,description:"Minimalist weather card."});console.info("%c SQUIRCLE-CLOCK-CARD %c 0.2.0 ","color: white; background: #795548; font-weight: 700;","color: #795548; background: white; font-weight: 700;");const ut=[{name:"display_mode",label:"Anzeigemodus",selector:{select:{mode:"dropdown",options:[{value:"analog",label:"Analog (Klassisch)"},{value:"digital",label:"Digital (Hybrid)"}]}}},{name:"font_style",label:"Schriftart",selector:{select:{mode:"dropdown",options:[{value:"standard",label:"Standard (Apple Bold)"},{value:"thin",label:"Modern & Dünn (iOS)"},{value:"retro",label:"Retro Bahnhof (DIN-Style)"}]}}}];class pt extends HTMLElement{constructor(){super(...arguments),this._ticks=[],this._lastMin=-1,this._lastSecond=-1}static getConfigElement(){return document.createElement("slick-squircle-clock-editor")}static getStubConfig(){return{type:"custom:slick-squircle-clock-card",display_mode:"digital",font_style:"standard"}}set hass(t){this._hass=t}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={display_mode:"digital",font_style:"standard",...t};if(e.display_mode&&!["analog","digital"].includes(e.display_mode))throw new Error(`Invalid display_mode: ${e.display_mode}`);if(e.font_style&&!["standard","thin","retro"].includes(e.font_style))throw new Error(`Invalid font_style: ${e.font_style}`);this.config=e,this.shadowRoot&&(this._render(),this._drawContent())}getLayoutOptions(){return{grid_rows:2,grid_columns:2,grid_min_rows:1,grid_min_columns:1}}connectedCallback(){this.shadowRoot||this.attachShadow({mode:"open"}),this._render(),this._drawContent(),this._startClock(),this._resizeObserver=new ResizeObserver(()=>this._drawContent()),this._resizeObserver.observe(this)}disconnectedCallback(){var t;this._stopClock(),null===(t=this._resizeObserver)||void 0===t||t.disconnect()}_startClock(){this._timer&&cancelAnimationFrame(this._timer);const t=()=>{var e,i,s;const n=new Date;let o=n,a=null===(e=this.config)||void 0===e?void 0:e.timezone;if((null===(i=this.config)||void 0===i?void 0:i.timezone_entity)&&this._hass){const t=this._hass.states[this.config.timezone_entity];t&&t.state&&(a=t.state)}if(a)try{const t=n.toLocaleString("en-US",{timeZone:a});o=new Date(t),o.setMilliseconds(n.getMilliseconds())}catch(t){o=n}"digital"===(null===(s=this.config)||void 0===s?void 0:s.display_mode)?this._updateDigital(o):this._updateAnalog(o),this._timer=requestAnimationFrame(t)};this._timer=requestAnimationFrame(t)}_stopClock(){this._timer&&cancelAnimationFrame(this._timer)}_getPointOnRoundedRect(t,e,i,s,n){const o=(t-90)*(Math.PI/180),a=e/2,r=i/2,l=Math.max(0,e-2*n),c=Math.max(0,i-2*n),h=Math.max(0,s-n),d=l/2,u=c/2,p=Math.abs(Math.cos(o));let g,f;d*Math.abs(Math.sin(o))<=u*p?(g=d*Math.sign(Math.cos(o)),f=d*Math.tan(o)*Math.sign(Math.cos(o))):(g=u/Math.tan(o)*Math.sign(Math.sin(o)),f=u*Math.sign(Math.sin(o)));const m=Math.max(0,d-h),b=Math.max(0,u-h);if(Math.abs(g)>m&&Math.abs(f)>b){const t=Math.abs(g)-m,e=Math.abs(f)-b,i=Math.sqrt(t*t+e*e);g=(m+t/i*h)*Math.sign(g),f=(b+e/i*h)*Math.sign(f)}return{x:a+g,y:r+f}}_getFontStyle(){var t;switch((null===(t=this.config)||void 0===t?void 0:t.font_style)||"standard"){case"thin":return'\n                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n                font-weight: 200;\n              ';case"retro":return'\n                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n                font-weight: 700;\n                letter-spacing: 0.5px;\n              ';default:return'\n                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n                font-weight: 600;\n              '}}_render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n      <style>\n        :host {\n          display: block; width: 100%; height: 100%;\n          background: var(--ha-card-background, var(--card-background-color, white));\n          border-radius: var(--ha-card-border-radius, 12px);\n          box-shadow: var(--ha-card-box-shadow, none);\n          overflow: hidden;\n          box-sizing: border-box;\n          position: relative;\n        }\n        svg { width: 100%; height: 100%; display: block; position: absolute; top: 0; left: 0; }\n        \n        /* Analog Styles */\n        text.analog-num {\n          ${this._getFontStyle()}\n          fill: var(--primary-text-color); \n          text-anchor: middle; dominant-baseline: middle;\n        }\n        #hour-hand, #minute-hand { stroke: var(--primary-text-color); stroke-width: 6; stroke-linecap: round; }\n        #second-hand { stroke: #ff9500; stroke-width: 2.5; stroke-linecap: round; }\n        #center-dot { fill: #ff9500; stroke: var(--primary-text-color); stroke-width: 1.5; }\n\n        /* Digital Styles */\n        .digital-container {\n            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);\n            text-align: center; \n            color: var(--primary-text-color); pointer-events: none;\n            ${this._getFontStyle()}\n        }\n        .time-big { font-size: 1em; line-height: 1; font-variant-numeric: tabular-nums; }\n        .date-small { \n            font-weight: 500; \n            opacity: 0.6; \n            margin-top: 4px; \n            text-transform: uppercase; \n            font-weight: ${"thin"===(null===(t=this.config)||void 0===t?void 0:t.font_style)?"400":"bold"};\n        }\n        \n        /* Aktiver Sekunden-Tick (Digital) */\n        .active-tick { \n            stroke: #ff9500 !important; \n            stroke-opacity: 1 !important; \n            stroke-width: 3px !important; \n        }\n      </style>\n      <div id="content"></div>\n    `)}_drawContent(){var t;if(!this.shadowRoot)return;const e=this.shadowRoot.getElementById("content");if(!e)return;const i=this.getBoundingClientRect(),s=i.width||300,n=i.height||300,o=Math.min(s,n),a=window.getComputedStyle(this);let r=parseFloat(a.borderTopLeftRadius);a.borderTopLeftRadius&&a.borderTopLeftRadius.includes("%")&&(r=o*parseFloat(a.borderTopLeftRadius)/100);const l=r||.22*o;"analog"===((null===(t=this.config)||void 0===t?void 0:t.display_mode)||"analog")?this._drawAnalog(e,s,n,l,o):this._drawDigital(e,s,n,l,o)}_drawAnalog(t,e,i,s,n){var o,a,r,l,c;let h="";for(let t=0;t<60;t++){const n=t%5==0,r=6*t,l=this._getPointOnRoundedRect(r,e,i,s,5),c=this._getPointOnRoundedRect(r,e,i,s,n?20:12),d=n?"var(--primary-text-color)":"var(--secondary-text-color)";let u=n?3:1.5;"retro"===(null===(o=this.config)||void 0===o?void 0:o.font_style)&&n&&(u=4.5),"retro"!==(null===(a=this.config)||void 0===a?void 0:a.font_style)||n||(u=2),h+=`<line x1="${c.x}" y1="${c.y}" x2="${l.x}" y2="${l.y}" stroke="${d}" stroke-width="${u}" stroke-linecap="round" />`}const d=this._getPointOnRoundedRect(0,e,i,s,.25*n),u=this._getPointOnRoundedRect(90,e,i,s,.25*n),p=this._getPointOnRoundedRect(180,e,i,s,.25*n),g=this._getPointOnRoundedRect(270,e,i,s,.25*n);t.innerHTML=`\n      <svg viewBox="0 0 ${e} ${i}">\n        ${h}\n        <text class="analog-num" style="font-size: ${Math.max(12,n/10)}px" x="${d.x}" y="${d.y}">12</text>\n        <text class="analog-num" style="font-size: ${Math.max(12,n/10)}px" x="${u.x}" y="${u.y}">3</text>\n        <text class="analog-num" style="font-size: ${Math.max(12,n/10)}px" x="${p.x}" y="${p.y}">6</text>\n        <text class="analog-num" style="font-size: ${Math.max(12,n/10)}px" x="${g.x}" y="${g.y}">9</text>\n        <line id="hour-hand" x1="${e/2}" y1="${i/2}" x2="${e/2}" y2="${i/2-n/4}" />\n        <line id="minute-hand" x1="${e/2}" y1="${i/2}" x2="${e/2}" y2="${i/2-n/2.8}" />\n        <line id="second-hand" x1="${e/2}" y1="${i/2+15}" x2="${e/2}" y2="${i/2-n/2.4}" />\n        <circle id="center-dot" cx="${e/2}" cy="${i/2}" r="3.5" />\n      </svg>\n    `,this.hourHand=null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector("#hour-hand"),this.minuteHand=null===(l=this.shadowRoot)||void 0===l?void 0:l.querySelector("#minute-hand"),this.secondHand=null===(c=this.shadowRoot)||void 0===c?void 0:c.querySelector("#second-hand"),this._center={x:e/2,y:i/2}}_drawDigital(t,e,i,s,n){var o,a,r,l;let c="";for(let t=0;t<60;t++){const n=6*t,o=this._getPointOnRoundedRect(n,e,i,s,6),a=this._getPointOnRoundedRect(n,e,i,s,14);c+=`<line id="tick-${t}" x1="${a.x}" y1="${a.y}" x2="${o.x}" y2="${o.y}" \n                stroke="var(--secondary-text-color)" \n                stroke-opacity="0.4" \n                stroke-width="1.5" \n                stroke-linecap="round" />`}t.innerHTML=`\n      <svg viewBox="0 0 ${e} ${i}">${c}</svg>\n      <div class="digital-container">\n        <div class="time-big" id="time-display" style="font-size: ${.25*n}px">--:--</div>\n        <div class="date-small" id="date-display" style="font-size: ${.08*n}px">--</div>\n      </div>\n    `,this._timeDisplay=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector("#time-display"),this._dateDisplay=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector("#date-display"),this._ticks=[];for(let t=0;t<60;t++)this._ticks.push((null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector(`#tick-${t}`))||null);this._lastMin=-1,this._lastSecond=-1;const h=new Date;if(null===(l=this.config)||void 0===l?void 0:l.timezone)try{const t=h.toLocaleString("en-US",{timeZone:this.config.timezone}),e=new Date(t);this._updateDigital(e,!0)}catch(t){this._updateDigital(h,!0)}else this._updateDigital(h,!0)}_updateAnalog(t){var e,i;if(!this.hourHand)return;const s=t.getSeconds()+t.getMilliseconds()/1e3,n=t.getMinutes()+s/60,o=t.getHours()%12+n/60,{x:a,y:r}=this._center||{x:0,y:0};null===(e=this.secondHand)||void 0===e||e.setAttribute("transform",`rotate(${6*s} ${a} ${r})`),null===(i=this.minuteHand)||void 0===i||i.setAttribute("transform",`rotate(${6*n} ${a} ${r})`),this.hourHand.setAttribute("transform",`rotate(${30*o} ${a} ${r})`)}_updateDigital(t,e=!1){var i,s,n;if(!this._timeDisplay)return;const o=t.getSeconds();if(e||this._lastMin!==t.getMinutes()){const e=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");this._timeDisplay.textContent=`${e}:${s}`;const n={...{weekday:"short",day:"numeric"}};(null===(i=this.config)||void 0===i?void 0:i.timezone)&&(n.timeZone=this.config.timezone),this._dateDisplay&&(this._dateDisplay.textContent=(new Date).toLocaleDateString("de-DE",n)),this._lastMin=t.getMinutes()}(e||this._lastSecond!==o)&&(-1!==this._lastSecond&&this._ticks[this._lastSecond]&&(null===(s=this._ticks[this._lastSecond])||void 0===s||s.classList.remove("active-tick")),this._ticks[o]&&(null===(n=this._ticks[o])||void 0===n||n.classList.add("active-tick")),this._lastSecond=o)}}class gt extends at{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){if(!this._config||!this.hass)return;const e={...this._config,...t.detail.value};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}render(){return this.hass&&this._config?j`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${ut}
        .computeLabel=${t=>t.label||t.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:j``}}
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function ft(t){return t+.5|0}customElements.get("slick-squircle-clock-card")||customElements.define("slick-squircle-clock-card",pt),customElements.get("slick-squircle-clock-editor")||customElements.define("slick-squircle-clock-editor",gt),window.customCards=window.customCards||[],window.customCards.push({type:"slick-squircle-clock-card",name:"Slick Squircle Clock",preview:!0,description:"A customizable clock card with analog and digital modes."});const mt=(t,e,i)=>Math.max(Math.min(t,i),e);function bt(t){return mt(ft(2.55*t),0,255)}function _t(t){return mt(ft(255*t),0,255)}function yt(t){return mt(ft(t/2.55)/100,0,1)}function vt(t){return mt(ft(100*t),0,100)}const xt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},wt=[..."0123456789ABCDEF"],kt=t=>wt[15&t],St=t=>wt[(240&t)>>4]+wt[15&t],$t=t=>(240&t)>>4==(15&t);function Mt(t){var e=(t=>$t(t.r)&&$t(t.g)&&$t(t.b)&&$t(t.a))(t)?kt:St;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const Ct=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Et(t,e,i){const s=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-s*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function At(t,e,i){const s=(s,n=(s+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[s(5),s(3),s(1)]}function Tt(t,e,i){const s=Et(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)s[n]*=1-e-i,s[n]+=e;return s}function Pt(t){const e=t.r/255,i=t.g/255,s=t.b/255,n=Math.max(e,i,s),o=Math.min(e,i,s),a=(n+o)/2;let r,l,c;return n!==o&&(c=n-o,l=a>.5?c/(2-n-o):c/(n+o),r=function(t,e,i,s,n){return t===n?(e-i)/s+(e<i?6:0):e===n?(i-t)/s+2:(t-e)/s+4}(e,i,s,c,n),r=60*r+.5),[0|r,l||0,a]}function It(t,e,i,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,s)).map(_t)}function Dt(t,e,i){return It(Et,t,e,i)}function Ot(t){return(t%360+360)%360}function Rt(t){const e=Ct.exec(t);let i,s=255;if(!e)return;e[5]!==i&&(s=e[6]?bt(+e[5]):_t(+e[5]));const n=Ot(+e[2]),o=+e[3]/100,a=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return It(Tt,t,e,i)}(n,o,a):"hsv"===e[1]?function(t,e,i){return It(At,t,e,i)}(n,o,a):Dt(n,o,a),{r:i[0],g:i[1],b:i[2],a:s}}const zt={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Lt={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Ft;function Ht(t){Ft||(Ft=function(){const t={},e=Object.keys(Lt),i=Object.keys(zt);let s,n,o,a,r;for(s=0;s<e.length;s++){for(a=r=e[s],n=0;n<i.length;n++)o=i[n],r=r.replace(o,zt[o]);o=parseInt(Lt[a],16),t[r]=[o>>16&255,o>>8&255,255&o]}return t}(),Ft.transparent=[0,0,0,0]);const e=Ft[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const Nt=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const Bt=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,jt=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Wt(t,e,i){if(t){let s=Pt(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*i,0===e?360:1)),s=Dt(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function Vt(t,e){return t?Object.assign(e||{},t):t}function qt(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=_t(t[3]))):(e=Vt(t,{r:0,g:0,b:0,a:1})).a=_t(e.a),e}function Ut(t){return"r"===t.charAt(0)?function(t){const e=Nt.exec(t);let i,s,n,o=255;if(e){if(e[7]!==i){const t=+e[7];o=e[8]?bt(t):mt(255*t,0,255)}return i=+e[1],s=+e[3],n=+e[5],i=255&(e[2]?bt(i):mt(i,0,255)),s=255&(e[4]?bt(s):mt(s,0,255)),n=255&(e[6]?bt(n):mt(n,0,255)),{r:i,g:s,b:n,a:o}}}(t):Rt(t)}class Gt{constructor(t){if(t instanceof Gt)return t;const e=typeof t;let i;var s,n,o;"object"===e?i=qt(t):"string"===e&&(o=(s=t).length,"#"===s[0]&&(4===o||5===o?n={r:255&17*xt[s[1]],g:255&17*xt[s[2]],b:255&17*xt[s[3]],a:5===o?17*xt[s[4]]:255}:7!==o&&9!==o||(n={r:xt[s[1]]<<4|xt[s[2]],g:xt[s[3]]<<4|xt[s[4]],b:xt[s[5]]<<4|xt[s[6]],a:9===o?xt[s[7]]<<4|xt[s[8]]:255})),i=n||Ht(t)||Ut(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Vt(this._rgb);return t&&(t.a=yt(t.a)),t}set rgb(t){this._rgb=qt(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${yt(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):void 0}hexString(){return this._valid?Mt(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=Pt(t),i=e[0],s=vt(e[1]),n=vt(e[2]);return t.a<255?`hsla(${i}, ${s}%, ${n}%, ${yt(t.a)})`:`hsl(${i}, ${s}%, ${n}%)`}(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let n;const o=e===n?.5:e,a=2*o-1,r=i.a-s.a,l=((a*r===-1?a:(a+r)/(1+a*r))+1)/2;n=1-l,i.r=255&l*i.r+n*s.r+.5,i.g=255&l*i.g+n*s.g+.5,i.b=255&l*i.b+n*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){const s=jt(yt(t.r)),n=jt(yt(t.g)),o=jt(yt(t.b));return{r:_t(Bt(s+i*(jt(yt(e.r))-s))),g:_t(Bt(n+i*(jt(yt(e.g))-n))),b:_t(Bt(o+i*(jt(yt(e.b))-o))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new Gt(this.rgb)}alpha(t){return this._rgb.a=_t(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=ft(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Wt(this._rgb,2,t),this}darken(t){return Wt(this._rgb,2,-t),this}saturate(t){return Wt(this._rgb,1,t),this}desaturate(t){return Wt(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=Pt(t);i[0]=Ot(i[0]+e),i=Dt(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Yt(){}const Xt=(()=>{let t=0;return()=>t++})();function Kt(t){return null==t}function Zt(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function Qt(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}function Jt(t){return("number"==typeof t||t instanceof Number)&&isFinite(+t)}function te(t,e){return Jt(t)?t:e}function ee(t,e){return void 0===t?e:t}function ie(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function se(t,e,i,s){let n,o,a;if(Zt(t))for(o=t.length,n=0;n<o;n++)e.call(i,t[n],n);else if(Qt(t))for(a=Object.keys(t),o=a.length,n=0;n<o;n++)e.call(i,t[a[n]],a[n])}function ne(t,e){let i,s,n,o;if(!t||!e||t.length!==e.length)return!1;for(i=0,s=t.length;i<s;++i)if(n=t[i],o=e[i],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function oe(t){if(Zt(t))return t.map(oe);if(Qt(t)){const e=Object.create(null),i=Object.keys(t),s=i.length;let n=0;for(;n<s;++n)e[i[n]]=oe(t[i[n]]);return e}return t}function ae(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function re(t,e,i,s){if(!ae(t))return;const n=e[t],o=i[t];Qt(n)&&Qt(o)?le(n,o,s):e[t]=oe(o)}function le(t,e,i){const s=Zt(e)?e:[e],n=s.length;if(!Qt(t))return t;const o=(i=i||{}).merger||re;let a;for(let e=0;e<n;++e){if(a=s[e],!Qt(a))continue;const n=Object.keys(a);for(let e=0,s=n.length;e<s;++e)o(n[e],t,a,i)}return t}function ce(t,e){return le(t,e,{merger:he})}function he(t,e,i){if(!ae(t))return;const s=e[t],n=i[t];Qt(s)&&Qt(n)?ce(s,n):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=oe(n))}const de={"":t=>t,x:t=>t.x,y:t=>t.y};function ue(t,e){const i=de[e]||(de[e]=function(t){const e=function(t){const e=t.split("."),i=[];let s="";for(const t of e)s+=t,s.endsWith("\\")?s=s.slice(0,-1)+".":(i.push(s),s="");return i}(t);return t=>{for(const i of e){if(""===i)break;t=t&&t[i]}return t}}(e));return i(t)}function pe(t){return t.charAt(0).toUpperCase()+t.slice(1)}const ge=t=>void 0!==t,fe=t=>"function"==typeof t,me=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0};const be=Math.PI,_e=2*be,ye=_e+be,ve=Number.POSITIVE_INFINITY,xe=be/180,we=be/2,ke=be/4,Se=2*be/3,$e=Math.log10,Me=Math.sign;function Ce(t,e,i){return Math.abs(t-e)<i}function Ee(t){const e=Math.round(t);t=Ce(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor($e(t))),s=t/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function Ae(t){return!function(t){return"symbol"==typeof t||"object"==typeof t&&null!==t&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function Te(t){return t*(be/180)}function Pe(t){if(!Jt(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Ie(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function De(t,e){return(t-e+ye)%_e-be}function Oe(t){return(t%_e+_e)%_e}function Re(t,e,i,s){const n=Oe(t),o=Oe(e),a=Oe(i),r=Oe(o-n),l=Oe(a-n),c=Oe(n-o),h=Oe(n-a);return n===o||n===a||s&&o===a||r>l&&c<h}function ze(t,e,i){return Math.max(e,Math.min(i,t))}function Le(t,e,i,s=1e-6){return t>=Math.min(e,i)-s&&t<=Math.max(e,i)+s}function Fe(t,e,i){i=i||(i=>t[i]<e);let s,n=t.length-1,o=0;for(;n-o>1;)s=o+n>>1,i(s)?o=s:n=s;return{lo:o,hi:n}}const He=(t,e,i,s)=>Fe(t,i,s?s=>{const n=t[s][e];return n<i||n===i&&t[s+1][e]===i}:s=>t[s][e]<i),Ne=(t,e,i)=>Fe(t,i,s=>t[s][e]>=i);const Be=["push","pop","shift","splice","unshift"];function je(t,e){const i=t._chartjs;if(!i)return;const s=i.listeners,n=s.indexOf(e);-1!==n&&s.splice(n,1),s.length>0||(Be.forEach(e=>{delete t[e]}),delete t._chartjs)}const We="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function Ve(t,e){let i=[],s=!1;return function(...n){i=n,s||(s=!0,We.call(window,()=>{s=!1,t.apply(e,i)}))}}const qe=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2;const Ue=t=>0===t||1===t,Ge=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*_e/i),Ye=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*_e/i)+1,Xe={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*we),easeOutSine:t=>Math.sin(t*we),easeInOutSine:t=>-.5*(Math.cos(be*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>Ue(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Ue(t)?t:Ge(t,.075,.3),easeOutElastic:t=>Ue(t)?t:Ye(t,.075,.3),easeInOutElastic(t){const e=.1125;return Ue(t)?t:t<.5?.5*Ge(2*t,e,.45):.5+.5*Ye(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-Xe.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*Xe.easeInBounce(2*t):.5*Xe.easeOutBounce(2*t-1)+.5};function Ke(t){if(t&&"object"==typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function Ze(t){return Ke(t)?t:new Gt(t)}function Qe(t){return Ke(t)?t:new Gt(t).saturate(.5).darken(.1).hexString()}const Je=["x","y","borderWidth","radius","tension"],ti=["color","borderColor","backgroundColor"];const ei=new Map;function ii(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let s=ei.get(i);return s||(s=new Intl.NumberFormat(t,e),ei.set(i,s)),s}(e,i).format(t)}var si={formatters:{values:t=>Zt(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const s=this.chart.options.locale;let n,o=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(n="scientific"),o=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t));return i}(t,i)}const a=$e(Math.abs(o)),r=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),ii(t,s,l)}}};const ni=Object.create(null),oi=Object.create(null);function ai(t,e){if(!e)return t;const i=e.split(".");for(let e=0,s=i.length;e<s;++e){const s=i[e];t=t[s]||(t[s]=Object.create(null))}return t}function ri(t,e,i){return"string"==typeof e?le(ai(t,e),i):le(ai(t,""),e)}class li{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Qe(e.backgroundColor),this.hoverBorderColor=(t,e)=>Qe(e.borderColor),this.hoverColor=(t,e)=>Qe(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return ri(this,t,e)}get(t){return ai(this,t)}describe(t,e){return ri(oi,t,e)}override(t,e){return ri(ni,t,e)}route(t,e,i,s){const n=ai(this,t),o=ai(this,i),a="_"+e;Object.defineProperties(n,{[a]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[a],e=o[s];return Qt(t)?Object.assign({},e,t):ee(t,e)},set(t){this[a]=t}}})}apply(t){t.forEach(t=>t(this))}}var ci=new li({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[function(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:ti},numbers:{type:"number",properties:Je}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}})},function(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})},function(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:si.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t})}]);function hi(t,e,i,s,n){let o=e[n];return o||(o=e[n]=t.measureText(n).width,i.push(n)),o>s&&(s=o),s}function di(t,e,i){const s=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*s)/s+n}function ui(t,e){(e||t)&&((e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function pi(t,e,i,s){!function(t,e,i,s){let n,o,a,r,l,c,h,d;const u=e.pointStyle,p=e.rotation,g=e.radius;let f=(p||0)*xe;if(u&&"object"==typeof u&&(n=u.toString(),"[object HTMLImageElement]"===n||"[object HTMLCanvasElement]"===n))return t.save(),t.translate(i,s),t.rotate(f),t.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),void t.restore();if(isNaN(g)||g<=0)return;switch(t.beginPath(),u){default:t.arc(i,s,g,0,_e),t.closePath();break;case"triangle":c=g,t.moveTo(i+Math.sin(f)*c,s-Math.cos(f)*g),f+=Se,t.lineTo(i+Math.sin(f)*c,s-Math.cos(f)*g),f+=Se,t.lineTo(i+Math.sin(f)*c,s-Math.cos(f)*g),t.closePath();break;case"rectRounded":l=.516*g,r=g-l,o=Math.cos(f+ke)*r,h=Math.cos(f+ke)*r,a=Math.sin(f+ke)*r,d=Math.sin(f+ke)*r,t.arc(i-h,s-a,l,f-be,f-we),t.arc(i+d,s-o,l,f-we,f),t.arc(i+h,s+a,l,f,f+we),t.arc(i-d,s+o,l,f+we,f+be),t.closePath();break;case"rect":if(!p){r=Math.SQRT1_2*g,c=r,t.rect(i-c,s-r,2*c,2*r);break}f+=ke;case"rectRot":h=Math.cos(f)*g,o=Math.cos(f)*g,a=Math.sin(f)*g,d=Math.sin(f)*g,t.moveTo(i-h,s-a),t.lineTo(i+d,s-o),t.lineTo(i+h,s+a),t.lineTo(i-d,s+o),t.closePath();break;case"crossRot":f+=ke;case"cross":h=Math.cos(f)*g,o=Math.cos(f)*g,a=Math.sin(f)*g,d=Math.sin(f)*g,t.moveTo(i-h,s-a),t.lineTo(i+h,s+a),t.moveTo(i+d,s-o),t.lineTo(i-d,s+o);break;case"star":h=Math.cos(f)*g,o=Math.cos(f)*g,a=Math.sin(f)*g,d=Math.sin(f)*g,t.moveTo(i-h,s-a),t.lineTo(i+h,s+a),t.moveTo(i+d,s-o),t.lineTo(i-d,s+o),f+=ke,h=Math.cos(f)*g,o=Math.cos(f)*g,a=Math.sin(f)*g,d=Math.sin(f)*g,t.moveTo(i-h,s-a),t.lineTo(i+h,s+a),t.moveTo(i+d,s-o),t.lineTo(i-d,s+o);break;case"line":o=Math.cos(f)*g,a=Math.sin(f)*g,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a);break;case"dash":t.moveTo(i,s),t.lineTo(i+Math.cos(f)*g,s+Math.sin(f)*g);break;case!1:t.closePath()}t.fill(),e.borderWidth>0&&t.stroke()}(t,e,i,s)}function gi(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function fi(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function mi(t){t.restore()}function bi(t,e,i,s,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){const s=(e.x+i.x)/2;t.lineTo(s,e.y),t.lineTo(s,i.y)}else"after"===n!=!!s?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function _i(t,e,i,s){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(s?e.cp1x:e.cp2x,s?e.cp1y:e.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function yi(t,e,i,s,n){if(n.strikethrough||n.underline){const o=t.measureText(s),a=e-o.actualBoundingBoxLeft,r=e+o.actualBoundingBoxRight,l=i-o.actualBoundingBoxAscent,c=i+o.actualBoundingBoxDescent,h=n.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(a,h),t.lineTo(r,h),t.stroke()}}function vi(t,e){const i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i}function xi(t,e,i,s,n,o={}){const a=Zt(e)?e:[e],r=o.strokeWidth>0&&""!==o.strokeColor;let l,c;for(t.save(),t.font=n.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Kt(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,o),l=0;l<a.length;++l)c=a[l],o.backdrop&&vi(t,o.backdrop),r&&(o.strokeColor&&(t.strokeStyle=o.strokeColor),Kt(o.strokeWidth)||(t.lineWidth=o.strokeWidth),t.strokeText(c,i,s,o.maxWidth)),t.fillText(c,i,s,o.maxWidth),yi(t,i,s,c,o),s+=Number(n.lineHeight);t.restore()}function wi(t,e){const{x:i,y:s,w:n,h:o,radius:a}=e;t.arc(i+a.topLeft,s+a.topLeft,a.topLeft,1.5*be,be,!0),t.lineTo(i,s+o-a.bottomLeft),t.arc(i+a.bottomLeft,s+o-a.bottomLeft,a.bottomLeft,be,we,!0),t.lineTo(i+n-a.bottomRight,s+o),t.arc(i+n-a.bottomRight,s+o-a.bottomRight,a.bottomRight,we,0,!0),t.lineTo(i+n,s+a.topRight),t.arc(i+n-a.topRight,s+a.topRight,a.topRight,0,-we,!0),t.lineTo(i+a.topLeft,s)}const ki=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Si=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function $i(t,e){const i=(""+t).match(ki);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}const Mi=t=>+t||0;function Ci(t,e){const i={},s=Qt(e),n=s?Object.keys(e):e,o=Qt(t)?s?i=>ee(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of n)i[t]=Mi(o(t));return i}function Ei(t){return Ci(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ai(t){const e=function(t){return Ci(t,{top:"y",right:"x",bottom:"y",left:"x"})}(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Ti(t,e){t=t||{},e=e||ci.font;let i=ee(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let s=ee(t.style,e.style);s&&!(""+s).match(Si)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:ee(t.family,e.family),lineHeight:$i(ee(t.lineHeight,e.lineHeight),i),size:i,style:s,weight:ee(t.weight,e.weight),string:""};return n.string=function(t){return!t||Kt(t.size)||Kt(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(n),n}function Pi(t,e,i,s){let n,o,a;for(n=0,o=t.length;n<o;++n)if(a=t[n],void 0!==a&&void 0!==a)return a}function Ii(t,e,i){const{min:s,max:n}=t,o=(r=(n-s)/2,"string"==typeof(a=e)&&a.endsWith("%")?parseFloat(a)/100*r:+a);var a,r;const l=(t,e)=>i&&0===t?0:t+e;return{min:l(s,-Math.abs(o)),max:l(n,o)}}function Di(t,e){return Object.assign(Object.create(t),e)}function Oi(t,e=[""],i,s,n=()=>t[0]){const o=i||t;void 0===s&&(s=qi("_fallback",t));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:o,_fallback:s,_getTarget:n,override:i=>Oi([i,...t],e,o,s)};return new Proxy(a,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,s)=>Hi(i,s,()=>function(t,e,i,s){let n;for(const o of e)if(n=qi(Li(o,t),i),void 0!==n)return Fi(t,n)?Wi(i,s,t,n):n}(s,e,t,i)),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Ui(t).includes(e),ownKeys:t=>Ui(t),set(t,e,i){const s=t._storage||(t._storage=n());return t[e]=s[e]=i,delete t._keys,!0}})}function Ri(t,e,i,s){const n={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:zi(t,s),setContext:e=>Ri(t,e,i,s),override:n=>Ri(t.override(n),e,i,s)};return new Proxy(n,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>Hi(t,e,()=>function(t,e,i){const{_proxy:s,_context:n,_subProxy:o,_descriptors:a}=t;let r=s[e];fe(r)&&a.isScriptable(e)&&(r=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_stack:r}=i;if(r.has(t))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+t);r.add(t);let l=e(o,a||s);r.delete(t),Fi(t,l)&&(l=Wi(n._scopes,n,t,l));return l}(e,r,t,i));Zt(r)&&r.length&&(r=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_descriptors:r}=i;if(void 0!==o.index&&s(t))return e[o.index%e.length];if(Qt(e[0])){const i=e,s=n._scopes.filter(t=>t!==i);e=[];for(const l of i){const i=Wi(s,n,t,l);e.push(Ri(i,o,a&&a[t],r))}}return e}(e,r,t,a.isIndexable));Fi(e,r)&&(r=Ri(r,n,o&&o[e],a));return r}(t,e,i)),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,s)=>(t[i]=s,delete e[i],!0)})}function zi(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:s=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:s,isScriptable:fe(i)?i:()=>i,isIndexable:fe(s)?s:()=>s}}const Li=(t,e)=>t?t+pe(e):e,Fi=(t,e)=>Qt(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Hi(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e)||"constructor"===e)return t[e];const s=i();return t[e]=s,s}function Ni(t,e,i){return fe(t)?t(e,i):t}const Bi=(t,e)=>!0===t?e:"string"==typeof t?ue(e,t):void 0;function ji(t,e,i,s,n){for(const o of e){const e=Bi(i,o);if(e){t.add(e);const o=Ni(e._fallback,i,n);if(void 0!==o&&o!==i&&o!==s)return o}else if(!1===e&&void 0!==s&&i!==s)return null}return!1}function Wi(t,e,i,s){const n=e._rootScopes,o=Ni(e._fallback,i,s),a=[...t,...n],r=new Set;r.add(s);let l=Vi(r,a,i,o||i,s);return null!==l&&((void 0===o||o===i||(l=Vi(r,a,o,l,s),null!==l))&&Oi(Array.from(r),[""],n,o,()=>function(t,e,i){const s=t._getTarget();e in s||(s[e]={});const n=s[e];if(Zt(n)&&Qt(i))return i;return n||{}}(e,i,s)))}function Vi(t,e,i,s,n){for(;i;)i=ji(t,e,i,s,n);return i}function qi(t,e){for(const i of e){if(!i)continue;const e=i[t];if(void 0!==e)return e}}function Ui(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter(t=>!t.startsWith("_")))e.add(t);return Array.from(e)}(t._scopes)),e}const Gi=Number.EPSILON||1e-14,Yi=(t,e)=>e<t.length&&!t[e].skip&&t[e],Xi=t=>"x"===t?"y":"x";function Ki(t,e,i,s){const n=t.skip?e:t,o=e,a=i.skip?e:i,r=Ie(o,n),l=Ie(a,o);let c=r/(r+l),h=l/(r+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const d=s*c,u=s*h;return{previous:{x:o.x-d*(a.x-n.x),y:o.y-d*(a.y-n.y)},next:{x:o.x+u*(a.x-n.x),y:o.y+u*(a.y-n.y)}}}function Zi(t,e="x"){const i=Xi(e),s=t.length,n=Array(s).fill(0),o=Array(s);let a,r,l,c=Yi(t,0);for(a=0;a<s;++a)if(r=l,l=c,c=Yi(t,a+1),l){if(c){const t=c[e]-l[e];n[a]=0!==t?(c[i]-l[i])/t:0}o[a]=r?c?Me(n[a-1])!==Me(n[a])?0:(n[a-1]+n[a])/2:n[a-1]:n[a]}!function(t,e,i){const s=t.length;let n,o,a,r,l,c=Yi(t,0);for(let h=0;h<s-1;++h)l=c,c=Yi(t,h+1),l&&c&&(Ce(e[h],0,Gi)?i[h]=i[h+1]=0:(n=i[h]/e[h],o=i[h+1]/e[h],r=Math.pow(n,2)+Math.pow(o,2),r<=9||(a=3/Math.sqrt(r),i[h]=n*a*e[h],i[h+1]=o*a*e[h])))}(t,n,o),function(t,e,i="x"){const s=Xi(i),n=t.length;let o,a,r,l=Yi(t,0);for(let c=0;c<n;++c){if(a=r,r=l,l=Yi(t,c+1),!r)continue;const n=r[i],h=r[s];a&&(o=(n-a[i])/3,r[`cp1${i}`]=n-o,r[`cp1${s}`]=h-o*e[c]),l&&(o=(l[i]-n)/3,r[`cp2${i}`]=n+o,r[`cp2${s}`]=h+o*e[c])}}(t,o,e)}function Qi(t,e,i){return Math.max(Math.min(t,i),e)}function Ji(t,e,i,s,n){let o,a,r,l;if(e.spanGaps&&(t=t.filter(t=>!t.skip)),"monotone"===e.cubicInterpolationMode)Zi(t,n);else{let i=s?t[t.length-1]:t[0];for(o=0,a=t.length;o<a;++o)r=t[o],l=Ki(i,r,t[Math.min(o+1,a-(s?0:1))%a],e.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,i=r}e.capBezierPoints&&function(t,e){let i,s,n,o,a,r=gi(t[0],e);for(i=0,s=t.length;i<s;++i)a=o,o=r,r=i<s-1&&gi(t[i+1],e),o&&(n=t[i],a&&(n.cp1x=Qi(n.cp1x,e.left,e.right),n.cp1y=Qi(n.cp1y,e.top,e.bottom)),r&&(n.cp2x=Qi(n.cp2x,e.left,e.right),n.cp2y=Qi(n.cp2y,e.top,e.bottom)))}(t,i)}function ts(){return"undefined"!=typeof window&&"undefined"!=typeof document}function es(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function is(t,e,i){let s;return"string"==typeof t?(s=parseInt(t,10),-1!==t.indexOf("%")&&(s=s/100*e.parentNode[i])):s=t,s}const ss=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);const ns=["top","right","bottom","left"];function os(t,e,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const o=ns[n];s[o]=parseFloat(t[e+"-"+o+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}function as(t,e){if("native"in t)return t;const{canvas:i,currentDevicePixelRatio:s}=e,n=ss(i),o="border-box"===n.boxSizing,a=os(n,"padding"),r=os(n,"border","width"),{x:l,y:c,box:h}=function(t,e){const i=t.touches,s=i&&i.length?i[0]:t,{offsetX:n,offsetY:o}=s;let a,r,l=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(n,o,t.target))a=n,r=o;else{const t=e.getBoundingClientRect();a=s.clientX-t.left,r=s.clientY-t.top,l=!0}return{x:a,y:r,box:l}}(t,i),d=a.left+(h&&r.left),u=a.top+(h&&r.top);let{width:p,height:g}=e;return o&&(p-=a.width+r.width,g-=a.height+r.height),{x:Math.round((l-d)/p*i.width/s),y:Math.round((c-u)/g*i.height/s)}}const rs=t=>Math.round(10*t)/10;function ls(t,e,i,s){const n=ss(t),o=os(n,"margin"),a=is(n.maxWidth,t,"clientWidth")||ve,r=is(n.maxHeight,t,"clientHeight")||ve,l=function(t,e,i){let s,n;if(void 0===e||void 0===i){const o=t&&es(t);if(o){const t=o.getBoundingClientRect(),a=ss(o),r=os(a,"border","width"),l=os(a,"padding");e=t.width-l.width-r.width,i=t.height-l.height-r.height,s=is(a.maxWidth,o,"clientWidth"),n=is(a.maxHeight,o,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:s||ve,maxHeight:n||ve}}(t,e,i);let{width:c,height:h}=l;if("content-box"===n.boxSizing){const t=os(n,"border","width"),e=os(n,"padding");c-=e.width+t.width,h-=e.height+t.height}c=Math.max(0,c-o.width),h=Math.max(0,s?c/s:h-o.height),c=rs(Math.min(c,a,l.maxWidth)),h=rs(Math.min(h,r,l.maxHeight)),c&&!h&&(h=rs(c/2));return(void 0!==e||void 0!==i)&&s&&l.height&&h>l.height&&(h=l.height,c=rs(Math.floor(h*s))),{width:c,height:h}}function cs(t,e,i){const s=e||1,n=rs(t.height*s),o=rs(t.width*s);t.height=rs(t.height),t.width=rs(t.width);const a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==s||a.height!==n||a.width!==o)&&(t.currentDevicePixelRatio=s,a.height=n,a.width=o,t.ctx.setTransform(s,0,0,s,0,0),!0)}const hs=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};ts()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch(t){}return t}();function ds(t,e){const i=function(t,e){return ss(t).getPropertyValue(e)}(t,e),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function us(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function ps(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:"middle"===s?i<.5?t.y:e.y:"after"===s?i<1?t.y:e.y:i>0?e.y:t.y}}function gs(t,e,i,s){const n={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},a=us(t,n,i),r=us(n,o,i),l=us(o,e,i),c=us(a,r,i),h=us(r,l,i);return us(c,h,i)}function fs(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function ms(t){return"angle"===t?{between:Re,compare:De,normalize:Oe}:{between:Le,compare:(t,e)=>t-e,normalize:t=>t}}function bs({start:t,end:e,count:i,loop:s,style:n}){return{start:t%i,end:e%i,loop:s&&(e-t+1)%i==0,style:n}}function _s(t,e,i){if(!i)return[t];const{property:s,start:n,end:o}=i,a=e.length,{compare:r,between:l,normalize:c}=ms(s),{start:h,end:d,loop:u,style:p}=function(t,e,i){const{property:s,start:n,end:o}=i,{between:a,normalize:r}=ms(s),l=e.length;let c,h,{start:d,end:u,loop:p}=t;if(p){for(d+=l,u+=l,c=0,h=l;c<h&&a(r(e[d%l][s]),n,o);++c)d--,u--;d%=l,u%=l}return u<d&&(u+=l),{start:d,end:u,loop:p,style:t.style}}(t,e,i),g=[];let f,m,b,_=!1,y=null;const v=()=>_||l(n,b,f)&&0!==r(n,b),x=()=>!_||0===r(o,f)||l(o,b,f);for(let t=h,i=h;t<=d;++t)m=e[t%a],m.skip||(f=c(m[s]),f!==b&&(_=l(f,n,o),null===y&&v()&&(y=0===r(f,n)?t:i),null!==y&&x()&&(g.push(bs({start:y,end:t,loop:u,count:a,style:p})),y=null),i=t,b=f));return null!==y&&g.push(bs({start:y,end:d,loop:u,count:a,style:p})),g}function ys(t,e){const i=[],s=t.segments;for(let n=0;n<s.length;n++){const o=_s(s[n],t.points,e);o.length&&i.push(...o)}return i}function vs(t,e,i,s){return s&&s.setContext&&i?function(t,e,i,s){const n=t._chart.getContext(),o=xs(t.options),{_datasetIndex:a,options:{spanGaps:r}}=t,l=i.length,c=[];let h=o,d=e[0].start,u=d;function p(t,e,s,n){const o=r?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=o;for(;i[e%l].skip;)e+=o;t%l!==e%l&&(c.push({start:t%l,end:e%l,loop:s,style:n}),h=n,d=e%l)}}for(const t of e){d=r?d:t.start;let e,o=i[d%l];for(u=d+1;u<=t.end;u++){const r=i[u%l];e=xs(s.setContext(Di(n,{type:"segment",p0:o,p1:r,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:a}))),ws(e,h)&&p(d,u-1,t.loop,h),o=r,h=e}d<u-1&&p(d,u-1,t.loop,h)}return c}(t,e,i,s):e}function xs(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function ws(t,e){if(!e)return!1;const i=[],s=function(t,e){return Ke(e)?(i.includes(e)||i.push(e),i.indexOf(e)):e};return JSON.stringify(t,s)!==JSON.stringify(e,s)}function ks(t,e,i){return t.options.clip?t[i]:e[i]}function Ss(t,e){const i=e._clip;if(i.disabled)return!1;const s=function(t,e){const{xScale:i,yScale:s}=t;return i&&s?{left:ks(i,e,"left"),right:ks(i,e,"right"),top:ks(s,e,"top"),bottom:ks(s,e,"bottom")}:e}(e,t.chartArea);return{left:!1===i.left?0:s.left-(!0===i.left?0:i.left),right:!1===i.right?t.width:s.right+(!0===i.right?0:i.right),top:!1===i.top?0:s.top-(!0===i.top?0:i.top),bottom:!1===i.bottom?t.height:s.bottom+(!0===i.bottom?0:i.bottom)}}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class $s{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const n=e.listeners[s],o=e.duration;n.forEach(s=>s({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=We.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const n=i.items;let o,a=n.length-1,r=!1;for(;a>=0;--a)o=n[a],o._active?(o._total>i.duration&&(i.duration=o._total),o.tick(t),r=!0):(n[a]=n[n.length-1],n.pop());r&&(s.draw(),this._notify(s,i,t,"progress")),n.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=n.length}),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((t,e)=>Math.max(t,e._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ms=new $s;const Cs="transparent",Es={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const s=Ze(t||Cs),n=s.valid&&Ze(e||Cs);return n&&n.valid?n.mix(s,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class As{constructor(t,e,i,s){const n=e[i];s=Pi([t.to,s,n,t.from]);const o=Pi([t.from,n,s]);this._active=!0,this._fn=t.fn||Es[t.type||typeof o],this._easing=Xe[t.easing]||Xe.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],n=i-this._start,o=this._duration-n;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=Pi([t.to,e,s,t.from]),this._from=Pi([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,n=this._from,o=this._loop,a=this._to;let r;if(this._active=n!==a&&(o||e<i),!this._active)return this._target[s]=a,void this._notify(!0);e<0?this._target[s]=n:(r=e/i%2,r=o&&r>1?2-r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[s]=this._fn(n,a,r))}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}class Ts{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Qt(t))return;const e=Object.keys(ci.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const n=t[s];if(!Qt(n))return;const o={};for(const t of e)o[t]=n[t];(Zt(n.properties)&&n.properties||[s]).forEach(t=>{t!==s&&i.has(t)||i.set(t,o)})})}_animateOptions(t,e){const i=e.options,s=function(t,e){if(!e)return;let i=t.options;if(!i)return void(t.options=e);i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}}));return i}(t,i);if(!s)return[];const n=this._createAnimations(s,i);return i.$shared&&function(t,e){const i=[],s=Object.keys(e);for(let e=0;e<s.length;e++){const n=t[s[e]];n&&n.active()&&i.push(n.wait())}return Promise.all(i)}(t.options.$animations,i).then(()=>{t.options=i},()=>{}),n}_createAnimations(t,e){const i=this._properties,s=[],n=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let r;for(r=o.length-1;r>=0;--r){const l=o[r];if("$"===l.charAt(0))continue;if("options"===l){s.push(...this._animateOptions(t,e));continue}const c=e[l];let h=n[l];const d=i.get(l);if(h){if(d&&h.active()){h.update(d,c,a);continue}h.cancel()}d&&d.duration?(n[l]=h=new As(d,t,l,c),s.push(h)):t[l]=c}return s}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(Ms.add(this._chart,i),!0):void 0}}function Ps(t,e){const i=t&&t.options||{},s=i.reverse,n=void 0===i.min?e:0,o=void 0===i.max?e:0;return{start:s?o:n,end:s?n:o}}function Is(t,e){const i=[],s=t._getSortedDatasetMetas(e);let n,o;for(n=0,o=s.length;n<o;++n)i.push(s[n].index);return i}function Ds(t,e,i,s={}){const n=t.keys,o="single"===s.mode;let a,r,l,c;if(null===e)return;let h=!1;for(a=0,r=n.length;a<r;++a){if(l=+n[a],l===i){if(h=!0,s.all)continue;break}c=t.values[l],Jt(c)&&(o||0===e||Me(e)===Me(c))&&(e+=c)}return h||s.all?e:0}function Os(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function Rs(t,e,i){const s=t[e]||(t[e]={});return s[i]||(s[i]={})}function zs(t,e,i,s){for(const n of e.getMatchingVisibleMetas(s).reverse()){const e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function Ls(t,e){const{chart:i,_cachedMeta:s}=t,n=i._stacks||(i._stacks={}),{iScale:o,vScale:a,index:r}=s,l=o.axis,c=a.axis,h=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(o,a,s),d=e.length;let u;for(let t=0;t<d;++t){const i=e[t],{[l]:o,[c]:d}=i;u=(i._stacks||(i._stacks={}))[c]=Rs(n,h,o),u[r]=d,u._top=zs(u,a,!0,s.type),u._bottom=zs(u,a,!1,s.type);(u._visualValues||(u._visualValues={}))[r]=d}}function Fs(t,e){const i=t.scales;return Object.keys(i).filter(t=>i[t].axis===e).shift()}function Hs(t,e){const i=t.controller.index,s=t.vScale&&t.vScale.axis;if(s){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[s]||void 0===e[s][i])return;delete e[s][i],void 0!==e[s]._visualValues&&void 0!==e[s]._visualValues[i]&&delete e[s]._visualValues[i]}}}const Ns=t=>"reset"===t||"none"===t,Bs=(t,e)=>e?t:Object.assign({},t);class js{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Os(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Hs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(t,e,i,s)=>"x"===t?e:"r"===t?s:i,n=e.xAxisID=ee(i.xAxisID,Fs(t,"x")),o=e.yAxisID=ee(i.yAxisID,Fs(t,"y")),a=e.rAxisID=ee(i.rAxisID,Fs(t,"r")),r=e.indexAxis,l=e.iAxisID=s(r,n,o,a),c=e.vAxisID=s(r,o,n,a);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&je(this._data,this),t._stacked&&Hs(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(Qt(e)){const t=this._cachedMeta;this._data=function(t,e){const{iScale:i,vScale:s}=e,n="x"===i.axis?"x":"y",o="x"===s.axis?"x":"y",a=Object.keys(t),r=new Array(a.length);let l,c,h;for(l=0,c=a.length;l<c;++l)h=a[l],r[l]={[n]:h,[o]:t[h]};return r}(e,t)}else if(i!==e){if(i){je(i,this);const t=this._cachedMeta;Hs(t),t._parsed=[]}e&&Object.isExtensible(e)&&(n=this,(s=e)._chartjs?s._chartjs.listeners.push(n):(Object.defineProperty(s,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[n]}}),Be.forEach(t=>{const e="_onData"+pe(t),i=s[t];Object.defineProperty(s,t,{configurable:!0,enumerable:!1,value(...t){const n=i.apply(this,t);return s._chartjs.listeners.forEach(i=>{"function"==typeof i[e]&&i[e](...t)}),n}})}))),this._syncList=[],this._data=e}var s,n}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const n=e._stacked;e._stacked=Os(e.vScale,e),e.stack!==i.stack&&(s=!0,Hs(e),e.stack=i.stack),this._resyncElements(t),(s||n!==e._stacked)&&(Ls(this,e._parsed),e._stacked=Os(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:n,_stacked:o}=i,a=n.axis;let r,l,c,h=0===t&&e===s.length||i._sorted,d=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=s,i._sorted=!0,c=s;else{c=Zt(s[t])?this.parseArrayData(i,s,t,e):Qt(s[t])?this.parseObjectData(i,s,t,e):this.parsePrimitiveData(i,s,t,e);const n=()=>null===l[a]||d&&l[a]<d[a];for(r=0;r<e;++r)i._parsed[r+t]=l=c[r],h&&(n()&&(h=!1),d=l);i._sorted=h}o&&Ls(this,c)}parsePrimitiveData(t,e,i,s){const{iScale:n,vScale:o}=t,a=n.axis,r=o.axis,l=n.getLabels(),c=n===o,h=new Array(s);let d,u,p;for(d=0,u=s;d<u;++d)p=d+i,h[d]={[a]:c||n.parse(l[p],p),[r]:o.parse(e[p],p)};return h}parseArrayData(t,e,i,s){const{xScale:n,yScale:o}=t,a=new Array(s);let r,l,c,h;for(r=0,l=s;r<l;++r)c=r+i,h=e[c],a[r]={x:n.parse(h[0],c),y:o.parse(h[1],c)};return a}parseObjectData(t,e,i,s){const{xScale:n,yScale:o}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l=new Array(s);let c,h,d,u;for(c=0,h=s;c<h;++c)d=c+i,u=e[d],l[c]={x:n.parse(ue(u,a),d),y:o.parse(ue(u,r),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,n=this._cachedMeta,o=e[t.axis];return Ds({keys:Is(s,!0),values:e._stacks[t.axis]._visualValues},o,n.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const n=i[e.axis];let o=null===n?NaN:n;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Ds(s,n,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,n=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),r=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:Is(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:h}=function(t){const{min:e,max:i,minDefined:s,maxDefined:n}=t.getUserBounds();return{min:s?e:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}(a);let d,u;function p(){u=s[d];const e=u[a.axis];return!Jt(u[t.axis])||c>e||h<e}for(d=0;d<o&&(p()||(this.updateRangeFromParsed(l,t,u,r),!n));++d);if(n)for(d=o-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(l,t,u,r);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,n,o;for(s=0,n=e.length;s<n;++s)o=e[s][t.axis],Jt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,n=this.getParsed(t);return{label:i?""+i.getLabelForValue(n[i.axis]):"",value:s?""+s.getLabelForValue(n[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,s,n;return Qt(t)?(e=t.top,i=t.right,s=t.bottom,n=t.left):e=i=s=n=t,{top:e,right:i,bottom:s,left:n,disabled:!1===t}}(ee(this.options.clip,function(t,e,i){if(!1===i)return!1;const s=Ps(t,i),n=Ps(e,i);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],n=e.chartArea,o=[],a=this._drawStart||0,r=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let c;for(i.dataset&&i.dataset.draw(t,n,a,r),c=a;c<a+r;++c){const e=s[c];e.hidden||(e.active&&l?o.push(e):e.draw(t,n))}for(c=0;c<o.length;++c)o[c].draw(t,n)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let n;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];n=e.$context||(e.$context=function(t,e,i){return Di(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),n.parsed=this.getParsed(t),n.raw=s.data[t],n.index=n.dataIndex=t}else n=this.$context||(this.$context=function(t,e){return Di(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),n.dataset=s,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=i,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s="active"===e,n=this._cachedDataOpts,o=t+"-"+e,a=n[o],r=this.enableOptionSharing&&ge(i);if(a)return Bs(a,r);const l=this.chart.config,c=l.datasetElementScopeKeys(this._type,t),h=s?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),c),u=Object.keys(ci.elements[t]),p=l.resolveNamedOptions(d,u,()=>this.getContext(i,s,e),h);return p.$shared&&(p.$shared=r,n[o]=Object.freeze(Bs(p,r))),p}_resolveAnimations(t,e,i){const s=this.chart,n=this._cachedDataOpts,o=`animation-${e}`,a=n[o];if(a)return a;let r;if(!1!==s.options.animation){const s=this.chart.config,n=s.datasetAnimationScopeKeys(this._type,e),o=s.getOptionScopes(this.getDataset(),n);r=s.createResolver(o,this.getContext(t,i,e))}const l=new Ts(s,r&&r.animations);return r&&r._cacheable&&(n[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ns(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,n=this.getSharedOptions(i),o=this.includeOptions(e,n)||n!==s;return this.updateSharedOptions(n,e,i),{sharedOptions:n,includeOptions:o}}updateElement(t,e,i,s){Ns(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!Ns(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const n=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const s=i.length,n=e.length,o=Math.min(n,s);o&&this.parse(0,o),n>s?this._insertElements(s,n-s,t):n<s&&this._removeElements(n,s-n)}_insertElements(t,e,i=!0){const s=this._cachedMeta,n=s.data,o=t+e;let a;const r=t=>{for(t.length+=e,a=t.length-1;a>=o;a--)t[a]=t[a-e]};for(r(n),a=t;a<o;++a)n[a]=new this.dataElementType;this._parsing&&r(s._parsed),this.parse(t,e),i&&this.updateElements(n,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Hs(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}class Ws extends js{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:n}=e,o=this.chart._animationsDisabled;let{start:a,count:r}=function(t,e,i){const s=e.length;let n=0,o=s;if(t._sorted){const{iScale:a,vScale:r,_parsed:l}=t,c=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,h=a.axis,{min:d,max:u,minDefined:p,maxDefined:g}=a.getUserBounds();if(p){if(n=Math.min(He(l,h,d).lo,i?s:He(e,h,a.getPixelForValue(d)).lo),c){const t=l.slice(0,n+1).reverse().findIndex(t=>!Kt(t[r.axis]));n-=Math.max(0,t)}n=ze(n,0,s-1)}if(g){let t=Math.max(He(l,a.axis,u,!0).hi+1,i?0:He(e,h,a.getPixelForValue(u),!0).hi+1);if(c){const e=l.slice(t-1).findIndex(t=>!Kt(t[r.axis]));t+=Math.max(0,e)}o=ze(t,n,s)-n}else o=s-n}return{start:n,count:o}}(e,s,o);this._drawStart=a,this._drawCount=r,function(t){const{xScale:e,yScale:i,_scaleRanges:s}=t,n={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!s)return t._scaleRanges=n,!0;const o=s.xmin!==e.min||s.xmax!==e.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,n),o}(e)&&(a=0,r=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,r,t)}updateElements(t,e,i,s){const n="reset"===s,{iScale:o,vScale:a,_stacked:r,_dataset:l}=this._cachedMeta,{sharedOptions:c,includeOptions:h}=this._getSharedOptions(e,s),d=o.axis,u=a.axis,{spanGaps:p,segment:g}=this.options,f=Ae(p)?p:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||n||"none"===s,b=e+i,_=t.length;let y=e>0&&this.getParsed(e-1);for(let i=0;i<_;++i){const p=t[i],_=m?p:{};if(i<e||i>=b){_.skip=!0;continue}const v=this.getParsed(i),x=Kt(v[u]),w=_[d]=o.getPixelForValue(v[d],i),k=_[u]=n||x?a.getBasePixel():a.getPixelForValue(r?this.applyStack(a,v,r):v[u],i);_.skip=isNaN(w)||isNaN(k)||x,_.stop=i>0&&Math.abs(v[d]-y[d])>f,g&&(_.parsed=v,_.raw=l.data[i]),h&&(_.options=c||this.resolveDataElementOptions(i,p.active?"active":s)),m||this.updateElement(p,i,_,s),y=v}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const n=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,n,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}function Vs(t,e,i,s){const{controller:n,data:o,_sorted:a}=t,r=n._cachedMeta.iScale,l=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(r&&e===r.axis&&"r"!==e&&a&&o.length){const a=r._reversePixels?Ne:He;if(!s){const s=a(o,e,i);if(l){const{vScale:e}=n._cachedMeta,{_parsed:i}=t,o=i.slice(0,s.lo+1).reverse().findIndex(t=>!Kt(t[e.axis]));s.lo-=Math.max(0,o);const a=i.slice(s.hi).findIndex(t=>!Kt(t[e.axis]));s.hi+=Math.max(0,a)}return s}if(n._sharedOptions){const t=o[0],s="function"==typeof t.getRange&&t.getRange(e);if(s){const t=a(o,e,i-s),n=a(o,e,i+s);return{lo:t.lo,hi:n.hi}}}}return{lo:0,hi:o.length-1}}function qs(t,e,i,s,n){const o=t.getSortedVisibleDatasetMetas(),a=i[e];for(let t=0,i=o.length;t<i;++t){const{index:i,data:r}=o[t],{lo:l,hi:c}=Vs(o[t],e,a,n);for(let t=l;t<=c;++t){const e=r[t];e.skip||s(e,i,t)}}}function Us(t,e,i,s,n){const o=[];if(!n&&!t.isPointInArea(e))return o;return qs(t,i,e,function(i,a,r){(n||gi(i,t.chartArea,0))&&i.inRange(e.x,e.y,s)&&o.push({element:i,datasetIndex:a,index:r})},!0),o}function Gs(t,e,i,s){let n=[];return qs(t,i,e,function(t,i,o){const{startAngle:a,endAngle:r}=t.getProps(["startAngle","endAngle"],s),{angle:l}=function(t,e){const i=e.x-t.x,s=e.y-t.y,n=Math.sqrt(i*i+s*s);let o=Math.atan2(s,i);return o<-.5*be&&(o+=_e),{angle:o,distance:n}}(t,{x:e.x,y:e.y});Re(l,a,r)&&n.push({element:t,datasetIndex:i,index:o})}),n}function Ys(t,e,i,s,n,o){let a=[];const r=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,s){const n=e?Math.abs(t.x-s.x):0,o=i?Math.abs(t.y-s.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}}(i);let l=Number.POSITIVE_INFINITY;return qs(t,i,e,function(i,c,h){const d=i.inRange(e.x,e.y,n);if(s&&!d)return;const u=i.getCenterPoint(n);if(!(!!o||t.isPointInArea(u))&&!d)return;const p=r(e,u);p<l?(a=[{element:i,datasetIndex:c,index:h}],l=p):p===l&&a.push({element:i,datasetIndex:c,index:h})}),a}function Xs(t,e,i,s,n,o){return o||t.isPointInArea(e)?"r"!==i||s?Ys(t,e,i,s,n,o):Gs(t,e,i,n):[]}function Ks(t,e,i,s,n){const o=[],a="x"===i?"inXRange":"inYRange";let r=!1;return qs(t,i,e,(t,s,l)=>{t[a]&&t[a](e[i],n)&&(o.push({element:t,datasetIndex:s,index:l}),r=r||t.inRange(e.x,e.y,n))}),s&&!r?[]:o}var Zs={modes:{index(t,e,i,s){const n=as(e,t),o=i.axis||"x",a=i.includeInvisible||!1,r=i.intersect?Us(t,n,o,s,a):Xs(t,n,o,!1,s,a),l=[];return r.length?(t.getSortedVisibleDatasetMetas().forEach(t=>{const e=r[0].index,i=t.data[e];i&&!i.skip&&l.push({element:i,datasetIndex:t.index,index:e})}),l):[]},dataset(t,e,i,s){const n=as(e,t),o=i.axis||"xy",a=i.includeInvisible||!1;let r=i.intersect?Us(t,n,o,s,a):Xs(t,n,o,!1,s,a);if(r.length>0){const e=r[0].datasetIndex,i=t.getDatasetMeta(e).data;r=[];for(let t=0;t<i.length;++t)r.push({element:i[t],datasetIndex:e,index:t})}return r},point:(t,e,i,s)=>Us(t,as(e,t),i.axis||"xy",s,i.includeInvisible||!1),nearest(t,e,i,s){const n=as(e,t),o=i.axis||"xy",a=i.includeInvisible||!1;return Xs(t,n,o,i.intersect,s,a)},x:(t,e,i,s)=>Ks(t,as(e,t),"x",i.intersect,s),y:(t,e,i,s)=>Ks(t,as(e,t),"y",i.intersect,s)}};const Qs=["left","top","right","bottom"];function Js(t,e){return t.filter(t=>t.pos===e)}function tn(t,e){return t.filter(t=>-1===Qs.indexOf(t.pos)&&t.box.axis===e)}function en(t,e){return t.sort((t,i)=>{const s=e?i:t,n=e?t:i;return s.weight===n.weight?s.index-n.index:s.weight-n.weight})}function sn(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:s,stackWeight:n}=i;if(!t||!Qs.includes(s))continue;const o=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=n}return e}(t),{vBoxMaxWidth:s,hBoxMaxHeight:n}=e;let o,a,r;for(o=0,a=t.length;o<a;++o){r=t[o];const{fullSize:a}=r.box,l=i[r.stack],c=l&&r.stackWeight/l.weight;r.horizontal?(r.width=c?c*s:a&&e.availableWidth,r.height=n):(r.width=s,r.height=c?c*n:a&&e.availableHeight)}return i}function nn(t,e,i,s){return Math.max(t[i],e[i])+Math.max(t[s],e[s])}function on(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function an(t,e,i,s){const{pos:n,box:o}=i,a=t.maxPadding;if(!Qt(n)){i.size&&(t[n]-=i.size);const e=s[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?o.height:o.width),i.size=e.size/e.count,t[n]+=i.size}o.getPadding&&on(a,o.getPadding());const r=Math.max(0,e.outerWidth-nn(a,t,"left","right")),l=Math.max(0,e.outerHeight-nn(a,t,"top","bottom")),c=r!==t.w,h=l!==t.h;return t.w=r,t.h=l,i.horizontal?{same:c,other:h}:{same:h,other:c}}function rn(t,e){const i=e.maxPadding;function s(t){const s={left:0,top:0,right:0,bottom:0};return t.forEach(t=>{s[t]=Math.max(e[t],i[t])}),s}return s(t?["left","right"]:["top","bottom"])}function ln(t,e,i,s){const n=[];let o,a,r,l,c,h;for(o=0,a=t.length,c=0;o<a;++o){r=t[o],l=r.box,l.update(r.width||e.w,r.height||e.h,rn(r.horizontal,e));const{same:a,other:d}=an(e,i,r,s);c|=a&&n.length,h=h||d,l.fullSize||n.push(r)}return c&&ln(n,e,i,s)||h}function cn(t,e,i,s,n){t.top=i,t.left=e,t.right=e+s,t.bottom=i+n,t.width=s,t.height=n}function hn(t,e,i,s){const n=i.padding;let{x:o,y:a}=e;for(const r of t){const t=r.box,l=s[r.stack]||{placed:0,weight:1},c=r.stackWeight/l.weight||1;if(r.horizontal){const s=e.w*c,o=l.size||t.height;ge(l.start)&&(a=l.start),t.fullSize?cn(t,n.left,a,i.outerWidth-n.right-n.left,o):cn(t,e.left+l.placed,a,s,o),l.start=a,l.placed+=s,a=t.bottom}else{const s=e.h*c,a=l.size||t.width;ge(l.start)&&(o=l.start),t.fullSize?cn(t,o,n.top,a,i.outerHeight-n.bottom-n.top):cn(t,o,e.top+l.placed,a,s),l.start=o,l.placed+=s,o=t.right}}e.x=o,e.y=a}var dn={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,s){if(!t)return;const n=Ai(t.options.layout.padding),o=Math.max(e-n.width,0),a=Math.max(i-n.height,0),r=function(t){const e=function(t){const e=[];let i,s,n,o,a,r;for(i=0,s=(t||[]).length;i<s;++i)n=t[i],({position:o,options:{stack:a,stackWeight:r=1}}=n),e.push({index:i,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:a&&o+a,stackWeight:r});return e}(t),i=en(e.filter(t=>t.box.fullSize),!0),s=en(Js(e,"left"),!0),n=en(Js(e,"right")),o=en(Js(e,"top"),!0),a=en(Js(e,"bottom")),r=tn(e,"x"),l=tn(e,"y");return{fullSize:i,leftAndTop:s.concat(o),rightAndBottom:n.concat(l).concat(a).concat(r),chartArea:Js(e,"chartArea"),vertical:s.concat(n).concat(l),horizontal:o.concat(a).concat(r)}}(t.boxes),l=r.vertical,c=r.horizontal;se(t.boxes,t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()});const h=l.reduce((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/h,hBoxMaxHeight:a/2}),u=Object.assign({},n);on(u,Ai(s));const p=Object.assign({maxPadding:u,w:o,h:a,x:n.left,y:n.top},n),g=sn(l.concat(c),d);ln(r.fullSize,p,d,g),ln(l,p,d,g),ln(c,p,d,g)&&ln(l,p,d,g),function(t){const e=t.maxPadding;function i(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(p),hn(r.leftAndTop,p,d,g),p.x+=p.w,p.y+=p.h,hn(r.rightAndBottom,p,d,g),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},se(r.chartArea,e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class un{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class pn extends un{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const gn="$chartjs",fn={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},mn=t=>null===t||""===t;const bn=!!hs&&{passive:!0};function _n(t,e,i){t&&t.canvas&&t.canvas.removeEventListener(e,i,bn)}function yn(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function vn(t,e,i){const s=t.canvas,n=new MutationObserver(t=>{let e=!1;for(const i of t)e=e||yn(i.addedNodes,s),e=e&&!yn(i.removedNodes,s);e&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}function xn(t,e,i){const s=t.canvas,n=new MutationObserver(t=>{let e=!1;for(const i of t)e=e||yn(i.removedNodes,s),e=e&&!yn(i.addedNodes,s);e&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}const wn=new Map;let kn=0;function Sn(){const t=window.devicePixelRatio;t!==kn&&(kn=t,wn.forEach((e,i)=>{i.currentDevicePixelRatio!==t&&e()}))}function $n(t,e,i){const s=t.canvas,n=s&&es(s);if(!n)return;const o=Ve((t,e)=>{const s=n.clientWidth;i(t,e),s<n.clientWidth&&i()},window),a=new ResizeObserver(t=>{const e=t[0],i=e.contentRect.width,s=e.contentRect.height;0===i&&0===s||o(i,s)});return a.observe(n),function(t,e){wn.size||window.addEventListener("resize",Sn),wn.set(t,e)}(t,o),a}function Mn(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){wn.delete(t),wn.size||window.removeEventListener("resize",Sn)}(t)}function Cn(t,e,i){const s=t.canvas,n=Ve(e=>{null!==t.ctx&&i(function(t,e){const i=fn[t.type]||t.type,{x:s,y:n}=as(t,e);return{type:i,chart:e,native:t,x:void 0!==s?s:null,y:void 0!==n?n:null}}(e,t))},t);return function(t,e,i){t&&t.addEventListener(e,i,bn)}(s,e,n),n}class En extends un{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,s=t.getAttribute("height"),n=t.getAttribute("width");if(t[gn]={initial:{height:s,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",mn(n)){const e=ds(t,"width");void 0!==e&&(t.width=e)}if(mn(s))if(""===t.style.height)t.height=t.width/(e||2);else{const e=ds(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[gn])return!1;const i=e[gn].initial;["height","width"].forEach(t=>{const s=i[t];Kt(s)?e.removeAttribute(t):e.setAttribute(t,s)});const s=i.style||{};return Object.keys(s).forEach(t=>{e.style[t]=s[t]}),e.width=e.width,delete e[gn],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),n={attach:vn,detach:xn,resize:$n}[e]||Cn;s[e]=n(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:Mn,detach:Mn,resize:Mn}[e]||_n)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return ls(t,e,i,s)}isAttached(t){const e=t&&es(t);return!(!e||!e.isConnected)}}class An{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Ae(this.x)&&Ae(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(t=>{s[t]=i[t]&&i[t].active()?i[t]._to:this[t]}),s}}function Tn(t,e){const i=t.options.ticks,s=function(t){const e=t.options.offset,i=t._tickSize(),s=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(s,n))}(t),n=Math.min(i.maxTicksLimit||s,s),o=i.major.enabled?function(t){const e=[];let i,s;for(i=0,s=t.length;i<s;i++)t[i].major&&e.push(i);return e}(e):[],a=o.length,r=o[0],l=o[a-1],c=[];if(a>n)return function(t,e,i,s){let n,o=0,a=i[0];for(s=Math.ceil(s),n=0;n<t.length;n++)n===a&&(e.push(t[n]),o++,a=i[o*s])}(e,c,o,a/n),c;const h=function(t,e,i){const s=function(t){const e=t.length;let i,s;if(e<2)return!1;for(s=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==s)return!1;return s}(t),n=e.length/i;if(!s)return Math.max(n,1);const o=function(t){const e=[],i=Math.sqrt(t);let s;for(s=1;s<i;s++)t%s===0&&(e.push(s),e.push(t/s));return i===(0|i)&&e.push(i),e.sort((t,e)=>t-e).pop(),e}(s);for(let t=0,e=o.length-1;t<e;t++){const e=o[t];if(e>n)return e}return Math.max(n,1)}(o,e,n);if(a>0){let t,i;const s=a>1?Math.round((l-r)/(a-1)):null;for(Pn(e,c,h,Kt(s)?0:r-s,r),t=0,i=a-1;t<i;t++)Pn(e,c,h,o[t],o[t+1]);return Pn(e,c,h,l,Kt(s)?e.length:l+s),c}return Pn(e,c,h),c}function Pn(t,e,i,s,n){const o=ee(s,0),a=Math.min(ee(n,t.length),t.length);let r,l,c,h=0;for(i=Math.ceil(i),n&&(r=n-s,i=r/Math.floor(r/i)),c=o;c<0;)h++,c=Math.round(o+h*i);for(l=Math.max(o,0);l<a;l++)l===c&&(e.push(t[l]),h++,c=Math.round(o+h*i))}const In=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i,Dn=(t,e)=>Math.min(e||t,t);function On(t,e){const i=[],s=t.length/e,n=t.length;let o=0;for(;o<n;o+=s)i.push(t[Math.floor(o)]);return i}function Rn(t,e,i){const s=t.ticks.length,n=Math.min(e,s-1),o=t._startPixel,a=t._endPixel,r=1e-6;let l,c=t.getPixelForTick(n);if(!(i&&(l=1===s?Math.max(c-o,a-c):0===e?(t.getPixelForTick(1)-c)/2:(c-t.getPixelForTick(n-1))/2,c+=n<e?l:-l,c<o-r||c>a+r)))return c}function zn(t){return t.drawTicks?t.tickLength:0}function Ln(t,e){if(!t.display)return 0;const i=Ti(t.font,e),s=Ai(t.padding);return(Zt(t.text)?t.text.length:1)*i.lineHeight+s.height}function Fn(t,e,i){let s=(t=>"start"===t?"left":"end"===t?"right":"center")(t);return(i&&"right"!==e||!i&&"right"===e)&&(s=(t=>"left"===t?"right":"right"===t?"left":t)(s)),s}class Hn extends An{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=te(t,Number.POSITIVE_INFINITY),e=te(e,Number.NEGATIVE_INFINITY),i=te(i,Number.POSITIVE_INFINITY),s=te(s,Number.NEGATIVE_INFINITY),{min:te(t,i),max:te(e,s),minDefined:Jt(t),maxDefined:Jt(e)}}getMinMax(t){let e,{min:i,max:s,minDefined:n,maxDefined:o}=this.getUserBounds();if(n&&o)return{min:i,max:s};const a=this.getMatchingVisibleMetas();for(let r=0,l=a.length;r<l;++r)e=a[r].controller.getMinMax(this,t),n||(i=Math.min(i,e.min)),o||(s=Math.max(s,e.max));return i=o&&i>s?s:i,s=n&&i>s?i:s,{min:te(i,te(s,i)),max:te(s,te(i,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ie(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:n,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Ii(this,n,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const r=a<this.ticks.length;this._convertTicksToLabels(r?On(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||"auto"===o.source)&&(this.ticks=Tn(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ie(this.options.afterUpdate,[this])}beforeSetDimensions(){ie(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ie(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ie(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ie(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,n;for(i=0,s=t.length;i<s;i++)n=t[i],n.label=ie(e.callback,[n.value,i,t],this)}afterTickToLabelConversion(){ie(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ie(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=Dn(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,n=e.maxRotation;let o,a,r,l=s;if(!this._isVisible()||!e.display||s>=n||i<=1||!this.isHorizontal())return void(this.labelRotation=s);const c=this._getLabelSizes(),h=c.widest.width,d=c.highest.height,u=ze(this.chart.width-h,0,this.maxWidth);o=t.offset?this.maxWidth/i:u/(i-1),h+6>o&&(o=u/(i-(t.offset?.5:1)),a=this.maxHeight-zn(t.grid)-e.padding-Ln(t.title,this.chart.options.font),r=Math.sqrt(h*h+d*d),l=Math.min(Math.asin(ze((c.highest.height+6)/o,-1,1)),Math.asin(ze(a/r,-1,1))-Math.asin(ze(d/r,-1,1)))*(180/be),l=Math.max(s,Math.min(n,l))),this.labelRotation=l}afterCalculateLabelRotation(){ie(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ie(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:n}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const o=Ln(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=zn(n)+o):(t.height=this.maxHeight,t.width=zn(n)+o),i.display&&this.ticks.length){const{first:e,last:s,widest:n,highest:o}=this._getLabelSizes(),r=2*i.padding,l=Te(this.labelRotation),c=Math.cos(l),h=Math.sin(l);if(a){const e=i.mirror?0:h*n.width+c*o.height;t.height=Math.min(this.maxHeight,t.height+e+r)}else{const e=i.mirror?0:c*n.width+h*o.height;t.width=Math.min(this.maxWidth,t.width+e+r)}this._calculatePadding(e,s,h,c)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:n,padding:o},position:a}=this.options,r=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){const a=this.getPixelForTick(0)-this.left,c=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,d=0;r?l?(h=s*t.width,d=i*e.height):(h=i*t.height,d=s*e.width):"start"===n?d=e.width:"end"===n?h=t.width:"inner"!==n&&(h=t.width/2,d=e.width/2),this.paddingLeft=Math.max((h-a+o)*this.width/(this.width-a),0),this.paddingRight=Math.max((d-c+o)*this.width/(this.width-c),0)}else{let i=e.height/2,s=t.height/2;"start"===n?(i=0,s=t.height):"end"===n&&(i=e.height,s=0),this.paddingTop=i+o,this.paddingBottom=s+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ie(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)Kt(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=On(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:n}=this,o=[],a=[],r=Math.floor(e/Dn(e,i));let l,c,h,d,u,p,g,f,m,b,_,y=0,v=0;for(l=0;l<e;l+=r){if(d=t[l].label,u=this._resolveTickFontOptions(l),s.font=p=u.string,g=n[p]=n[p]||{data:{},gc:[]},f=u.lineHeight,m=b=0,Kt(d)||Zt(d)){if(Zt(d))for(c=0,h=d.length;c<h;++c)_=d[c],Kt(_)||Zt(_)||(m=hi(s,g.data,g.gc,m,_),b+=f)}else m=hi(s,g.data,g.gc,m,d),b=f;o.push(m),a.push(b),y=Math.max(m,y),v=Math.max(b,v)}!function(t,e){se(t,t=>{const i=t.gc,s=i.length/2;let n;if(s>e){for(n=0;n<s;++n)delete t.data[i[n]];i.splice(0,s)}})}(n,e);const x=o.indexOf(y),w=a.indexOf(v),k=t=>({width:o[t]||0,height:a[t]||0});return{first:k(0),last:k(e-1),widest:k(x),highest:k(w),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return ze(this._alignToPixels?di(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return Di(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=Di(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=Te(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),n=this._getLabelSizes(),o=t.autoSkipPadding||0,a=n?n.widest.width+o:0,r=n?n.highest.height+o:0;return this.isHorizontal()?r*i>a*s?a/i:r/s:r*s<a*i?r/i:a/s}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:n,position:o,border:a}=s,r=n.offset,l=this.isHorizontal(),c=this.ticks.length+(r?1:0),h=zn(n),d=[],u=a.setContext(this.getContext()),p=u.display?u.width:0,g=p/2,f=function(t){return di(i,t,p)};let m,b,_,y,v,x,w,k,S,$,M,C;if("top"===o)m=f(this.bottom),x=this.bottom-h,k=m-g,$=f(t.top)+g,C=t.bottom;else if("bottom"===o)m=f(this.top),$=t.top,C=f(t.bottom)-g,x=m+g,k=this.top+h;else if("left"===o)m=f(this.right),v=this.right-h,w=m-g,S=f(t.left)+g,M=t.right;else if("right"===o)m=f(this.left),S=t.left,M=f(t.right)-g,v=m+g,w=this.left+h;else if("x"===e){if("center"===o)m=f((t.top+t.bottom)/2+.5);else if(Qt(o)){const t=Object.keys(o)[0],e=o[t];m=f(this.chart.scales[t].getPixelForValue(e))}$=t.top,C=t.bottom,x=m+g,k=x+h}else if("y"===e){if("center"===o)m=f((t.left+t.right)/2);else if(Qt(o)){const t=Object.keys(o)[0],e=o[t];m=f(this.chart.scales[t].getPixelForValue(e))}v=m-g,w=v-h,S=t.left,M=t.right}const E=ee(s.ticks.maxTicksLimit,c),A=Math.max(1,Math.ceil(c/E));for(b=0;b<c;b+=A){const t=this.getContext(b),e=n.setContext(t),s=a.setContext(t),o=e.lineWidth,c=e.color,h=s.dash||[],u=s.dashOffset,p=e.tickWidth,g=e.tickColor,f=e.tickBorderDash||[],m=e.tickBorderDashOffset;_=Rn(this,b,r),void 0!==_&&(y=di(i,_,o),l?v=w=S=M=y:x=k=$=C=y,d.push({tx1:v,ty1:x,tx2:w,ty2:k,x1:S,y1:$,x2:M,y2:C,width:o,color:c,borderDash:h,borderDashOffset:u,tickWidth:p,tickColor:g,tickBorderDash:f,tickBorderDashOffset:m}))}return this._ticksLength=c,this._borderValue=m,d}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:n}=i,o=this.isHorizontal(),a=this.ticks,{align:r,crossAlign:l,padding:c,mirror:h}=n,d=zn(i.grid),u=d+c,p=h?-c:u,g=-Te(this.labelRotation),f=[];let m,b,_,y,v,x,w,k,S,$,M,C,E="middle";if("top"===s)x=this.bottom-p,w=this._getXAxisLabelAlignment();else if("bottom"===s)x=this.top+p,w=this._getXAxisLabelAlignment();else if("left"===s){const t=this._getYAxisLabelAlignment(d);w=t.textAlign,v=t.x}else if("right"===s){const t=this._getYAxisLabelAlignment(d);w=t.textAlign,v=t.x}else if("x"===e){if("center"===s)x=(t.top+t.bottom)/2+u;else if(Qt(s)){const t=Object.keys(s)[0],e=s[t];x=this.chart.scales[t].getPixelForValue(e)+u}w=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===s)v=(t.left+t.right)/2-u;else if(Qt(s)){const t=Object.keys(s)[0],e=s[t];v=this.chart.scales[t].getPixelForValue(e)}w=this._getYAxisLabelAlignment(d).textAlign}"y"===e&&("start"===r?E="top":"end"===r&&(E="bottom"));const A=this._getLabelSizes();for(m=0,b=a.length;m<b;++m){_=a[m],y=_.label;const t=n.setContext(this.getContext(m));k=this.getPixelForTick(m)+n.labelOffset,S=this._resolveTickFontOptions(m),$=S.lineHeight,M=Zt(y)?y.length:1;const e=M/2,i=t.color,r=t.textStrokeColor,c=t.textStrokeWidth;let d,u=w;if(o?(v=k,"inner"===w&&(u=m===b-1?this.options.reverse?"left":"right":0===m?this.options.reverse?"right":"left":"center"),C="top"===s?"near"===l||0!==g?-M*$+$/2:"center"===l?-A.highest.height/2-e*$+$:-A.highest.height+$/2:"near"===l||0!==g?$/2:"center"===l?A.highest.height/2-e*$:A.highest.height-M*$,h&&(C*=-1),0===g||t.showLabelBackdrop||(v+=$/2*Math.sin(g))):(x=k,C=(1-M)*$/2),t.showLabelBackdrop){const e=Ai(t.backdropPadding),i=A.heights[m],s=A.widths[m];let n=C-e.top,o=0-e.left;switch(E){case"middle":n-=i/2;break;case"bottom":n-=i}switch(w){case"center":o-=s/2;break;case"right":o-=s;break;case"inner":m===b-1?o-=s:m>0&&(o-=s/2)}d={left:o,top:n,width:s+e.width,height:i+e.height,color:t.backdropColor}}f.push({label:y,font:S,textOffset:C,options:{rotation:g,color:i,strokeColor:r,strokeWidth:c,textAlign:u,textBaseline:E,translation:[v,x],backdrop:d}})}return f}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Te(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align?i="right":"inner"===e.align&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:n}}=this.options,o=t+n,a=this._getLabelSizes().widest.width;let r,l;return"left"===e?s?(l=this.right+n,"near"===i?r="left":"center"===i?(r="center",l+=a/2):(r="right",l+=a)):(l=this.right-o,"near"===i?r="right":"center"===i?(r="center",l-=a/2):(r="left",l=this.left)):"right"===e?s?(l=this.left+n,"near"===i?r="right":"center"===i?(r="center",l-=a/2):(r="left",l-=a)):(l=this.left+o,"near"===i?r="left":"center"===i?(r="center",l+=a/2):(r="right",l=this.right)):r="right",{textAlign:r,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:n,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,n,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(e=>e.value===t);if(i>=0){return e.setContext(this.getContext(i)).lineWidth}return 0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let n,o;const a=(t,e,s)=>{s.width&&s.color&&(i.save(),i.lineWidth=s.width,i.strokeStyle=s.color,i.setLineDash(s.borderDash||[]),i.lineDashOffset=s.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(n=0,o=s.length;n<o;++n){const t=s[n];e.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,n=i.setContext(this.getContext()),o=i.display?n.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,r=this._borderValue;let l,c,h,d;this.isHorizontal()?(l=di(t,this.left,o)-o/2,c=di(t,this.right,a)+a/2,h=d=r):(h=di(t,this.top,o)-o/2,d=di(t,this.bottom,a)+a/2,l=c=r),e.save(),e.lineWidth=n.width,e.strokeStyle=n.color,e.beginPath(),e.moveTo(l,h),e.lineTo(c,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&fi(e,i);const s=this.getLabelItems(t);for(const t of s){const i=t.options,s=t.font;xi(e,t.label,0,t.textOffset,s,i)}i&&mi(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const n=Ti(i.font),o=Ai(i.padding),a=i.align;let r=n.lineHeight/2;"bottom"===e||"center"===e||Qt(e)?(r+=o.bottom,Zt(i.text)&&(r+=n.lineHeight*(i.text.length-1))):r+=o.top;const{titleX:l,titleY:c,maxWidth:h,rotation:d}=function(t,e,i,s){const{top:n,left:o,bottom:a,right:r,chart:l}=t,{chartArea:c,scales:h}=l;let d,u,p,g=0;const f=a-n,m=r-o;if(t.isHorizontal()){if(u=qe(s,o,r),Qt(i)){const t=Object.keys(i)[0],s=i[t];p=h[t].getPixelForValue(s)+f-e}else p="center"===i?(c.bottom+c.top)/2+f-e:In(t,i,e);d=r-o}else{if(Qt(i)){const t=Object.keys(i)[0],s=i[t];u=h[t].getPixelForValue(s)-m+e}else u="center"===i?(c.left+c.right)/2-m+e:In(t,i,e);p=qe(s,a,n),g="left"===i?-we:we}return{titleX:u,titleY:p,maxWidth:d,rotation:g}}(this,r,e,a);xi(t,i.text,0,0,n,{color:i.color,maxWidth:h,rotation:d,textAlign:Fn(a,e,s),textBaseline:"middle",translation:[l,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=ee(t.grid&&t.grid.z,-1),s=ee(t.border&&t.border.z,0);return this._isVisible()&&this.draw===Hn.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let n,o;for(n=0,o=e.length;n<o;++n){const o=e[n];o[i]!==this.id||t&&o.type!==t||s.push(o)}return s}_resolveTickFontOptions(t){return Ti(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Nn{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const s=this.items,n=t.id,o=this.scope+"."+n;if(!n)throw new Error("class does not have id: "+t);return n in s||(s[n]=t,function(t,e,i){const s=le(Object.create(null),[i?ci.get(i):{},ci.get(e),t.defaults]);ci.set(e,s),t.defaultRoutes&&function(t,e){Object.keys(e).forEach(i=>{const s=i.split("."),n=s.pop(),o=[t].concat(s).join("."),a=e[i].split("."),r=a.pop(),l=a.join(".");ci.route(o,n,l,r)})}(e,t.defaultRoutes);t.descriptors&&ci.describe(e,t.descriptors)}(t,o,i),this.override&&ci.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in ci[s]&&(delete ci[s][i],this.override&&delete ni[i])}}class Bn{constructor(){this.controllers=new Nn(js,"datasets",!0),this.elements=new Nn(An,"elements"),this.plugins=new Nn(Object,"plugins"),this.scales=new Nn(Hn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(e=>{const s=i||this._getRegistryForType(e);i||s.isForType(e)||s===this.plugins&&e.id?this._exec(t,s,e):se(e,e=>{const s=i||this._getRegistryForType(e);this._exec(t,s,e)})})}_exec(t,e,i){const s=pe(t);ie(i["before"+s],[],i),e[t](i),ie(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(void 0===s)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var jn=new Bn;class Wn{constructor(){this._init=void 0}notify(t,e,i,s){if("beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),void 0===this._init)return;const n=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(n,t,e,i);return"afterDestroy"===e&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const n of t){const t=n.plugin;if(!1===ie(t[i],[e,s,n.options],t)&&s.cancelable)return!1}return!0}invalidate(){Kt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=ee(i.options&&i.options.plugins,{}),n=function(t){const e={},i=[],s=Object.keys(jn.plugins.items);for(let t=0;t<s.length;t++)i.push(jn.getPlugin(s[t]));const n=t.plugins||[];for(let t=0;t<n.length;t++){const s=n[t];-1===i.indexOf(s)&&(i.push(s),e[s.id]=!0)}return{plugins:i,localIds:e}}(i);return!1!==s||e?function(t,{plugins:e,localIds:i},s,n){const o=[],a=t.getContext();for(const r of e){const e=r.id,l=Vn(s[e],n);null!==l&&o.push({plugin:r,options:qn(t.config,{plugin:r,local:i[e]},l,a)})}return o}(t,n,s,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(t,e)=>t.filter(t=>!e.some(e=>t.plugin.id===e.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function Vn(t,e){return e||!1!==t?!0===t?{}:t:null}function qn(t,{plugin:e,local:i},s,n){const o=t.pluginScopeKeys(e),a=t.getOptionScopes(s,o);return i&&e.defaults&&a.push(e.defaults),t.createResolver(a,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Un(t,e){const i=ci.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Gn(t){if("x"===t||"y"===t||"r"===t)return t}function Yn(t){return"top"===t||"bottom"===t?"x":"left"===t||"right"===t?"y":void 0}function Xn(t,...e){if(Gn(t))return t;for(const i of e){const e=i.axis||Yn(i.position)||t.length>1&&Gn(t[0].toLowerCase());if(e)return e}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function Kn(t,e,i){if(i[e+"AxisID"]===t)return{axis:e}}function Zn(t,e){const i=ni[t.type]||{scales:{}},s=e.scales||{},n=Un(t.type,e),o=Object.create(null);return Object.keys(s).forEach(e=>{const a=s[e];if(!Qt(a))return console.error(`Invalid scale configuration for scale: ${e}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${e}`);const r=Xn(e,a,function(t,e){if(e.data&&e.data.datasets){const i=e.data.datasets.filter(e=>e.xAxisID===t||e.yAxisID===t);if(i.length)return Kn(t,"x",i[0])||Kn(t,"y",i[0])}return{}}(e,t),ci.scales[a.type]),l=function(t,e){return t===e?"_index_":"_value_"}(r,n),c=i.scales||{};o[e]=ce(Object.create(null),[{axis:r},a,c[r],c[l]])}),t.data.datasets.forEach(i=>{const n=i.type||t.type,a=i.indexAxis||Un(n,e),r=(ni[n]||{}).scales||{};Object.keys(r).forEach(t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,a),n=i[e+"AxisID"]||e;o[n]=o[n]||Object.create(null),ce(o[n],[{axis:e},s[n],r[t]])})}),Object.keys(o).forEach(t=>{const e=o[t];ce(e,[ci.scales[e.type],ci.scale])}),o}function Qn(t){const e=t.options||(t.options={});e.plugins=ee(e.plugins,{}),e.scales=Zn(t,e)}function Jn(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const to=new Map,eo=new Set;function io(t,e){let i=to.get(t);return i||(i=e(),to.set(t,i),eo.add(i)),i}const so=(t,e,i)=>{const s=ue(e,i);void 0!==s&&t.add(s)};class no{constructor(t){this._config=function(t){return(t=t||{}).data=Jn(t.data),Qn(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Jn(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Qn(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return io(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return io(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return io(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id;return io(`${this.type}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return s&&!e||(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:n}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const r=new Set;e.forEach(e=>{t&&(r.add(t),e.forEach(e=>so(r,t,e))),e.forEach(t=>so(r,s,t)),e.forEach(t=>so(r,ni[n]||{},t)),e.forEach(t=>so(r,ci,t)),e.forEach(t=>so(r,oi,t))});const l=Array.from(r);return 0===l.length&&l.push(Object.create(null)),eo.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,ni[e]||{},ci.datasets[e]||{},{type:e},ci,oi]}resolveNamedOptions(t,e,i,s=[""]){const n={$shared:!0},{resolver:o,subPrefixes:a}=oo(this._resolverCache,t,s);let r=o;if(function(t,e){const{isScriptable:i,isIndexable:s}=zi(t);for(const n of e){const e=i(n),o=s(n),a=(o||e)&&t[n];if(e&&(fe(a)||ao(a))||o&&Zt(a))return!0}return!1}(o,e)){n.$shared=!1;r=Ri(o,i=fe(i)?i():i,this.createResolver(t,i,a))}for(const t of e)n[t]=r[t];return n}createResolver(t,e,i=[""],s){const{resolver:n}=oo(this._resolverCache,t,i);return Qt(e)?Ri(n,e,void 0,s):n}}function oo(t,e,i){let s=t.get(e);s||(s=new Map,t.set(e,s));const n=i.join();let o=s.get(n);if(!o){o={resolver:Oi(e,i),subPrefixes:i.filter(t=>!t.toLowerCase().includes("hover"))},s.set(n,o)}return o}const ao=t=>Qt(t)&&Object.getOwnPropertyNames(t).some(e=>fe(t[e]));const ro=["top","bottom","left","right","chartArea"];function lo(t,e){return"top"===t||"bottom"===t||-1===ro.indexOf(t)&&"x"===e}function co(t,e){return function(i,s){return i[t]===s[t]?i[e]-s[e]:i[t]-s[t]}}function ho(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),ie(i&&i.onComplete,[t],e)}function uo(t){const e=t.chart,i=e.options.animation;ie(i&&i.onProgress,[t],e)}function po(t){return ts()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const go={},fo=t=>{const e=po(t);return Object.values(go).filter(t=>t.canvas===e).pop()};function mo(t,e,i){const s=Object.keys(t);for(const n of s){const s=+n;if(s>=e){const o=t[n];delete t[n],(i>0||s>e)&&(t[s+i]=o)}}}class bo{static defaults=ci;static instances=go;static overrides=ni;static registry=jn;static version="4.5.1";static getChart=fo;static register(...t){jn.add(...t),_o()}static unregister(...t){jn.remove(...t),_o()}constructor(t,e){const i=this.config=new no(e),s=po(t),n=fo(s);if(n)throw new Error("Canvas is already in use. Chart with ID '"+n.id+"' must be destroyed before the canvas with ID '"+n.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||function(t){return!ts()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?pn:En}(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),r=a&&a.canvas,l=r&&r.height,c=r&&r.width;this.id=Xt(),this.ctx=a,this.canvas=r,this.width=c,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Wn,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let i;return function(...s){return e?(clearTimeout(i),i=setTimeout(t,e,s)):t.apply(this,s),e}}(t=>this.update(t),o.resizeDelay||0),this._dataChanges=[],go[this.id]=this,a&&r?(Ms.listen(this,"complete",ho),Ms.listen(this,"progress",uo),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:n}=this;return Kt(t)?e&&n?n:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return jn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():cs(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return ui(this.canvas,this.ctx),this}stop(){return Ms.stop(this),this}resize(t,e){Ms.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,n),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,cs(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ie(i.onResize,[this,o],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs(){se(this.options.scales||{},(t,e)=>{t.id=e})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((t,e)=>(t[e]=!1,t),{});let n=[];e&&(n=n.concat(Object.keys(e).map(t=>{const i=e[t],s=Xn(t,i),n="r"===s,o="x"===s;return{options:i,dposition:n?"chartArea":o?"bottom":"left",dtype:n?"radialLinear":o?"category":"linear"}}))),se(n,e=>{const n=e.options,o=n.id,a=Xn(o,n),r=ee(n.type,e.dtype);void 0!==n.position&&lo(n.position,a)===lo(e.dposition)||(n.position=e.dposition),s[o]=!0;let l=null;if(o in i&&i[o].type===r)l=i[o];else{l=new(jn.getScale(r))({id:o,type:r,ctx:this.ctx,chart:this}),i[l.id]=l}l.init(n,t)}),se(s,(t,e)=>{t||delete i[e]}),se(i,t=>{dn.configure(this,t,t.options),dn.addBox(this,t)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((t,e)=>t.index-e.index),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(co("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((t,i)=>{0===e.filter(e=>e===t._dataset).length&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const s=e[i];let n=this.getDatasetMeta(i);const o=s.type||this.config.type;if(n.type&&n.type!==o&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=o,n.indexAxis=s.indexAxis||Un(o,this.options),n.order=s.order||0,n.index=i,n.label=""+s.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{const e=jn.getController(o),{datasetElementType:s,dataElementType:a}=ci.datasets[o];Object.assign(e,{dataElementType:jn.getElement(a),datasetElementType:s&&jn.getElement(s)}),n.controller=new e(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){se(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!s&&-1===n.indexOf(e);e.buildOrUpdateElements(i),o=Math.max(+e.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||se(n,t=>{t.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(co("z","_idx"));const{_active:a,_lastEvent:r}=this;r?this._eventHandler(r,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){se(this.scales,t=>{dn.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);me(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:n}of e){mo(t,s,"_removeElements"===i?-n:n)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter(t=>t[0]===e).map((t,e)=>e+","+t.splice(1).join(","))),s=i(0);for(let t=1;t<e;t++)if(!me(s,i(t)))return;return Array.from(s).map(t=>t.split(",")).map(t=>({method:t[1],start:+t[2],count:+t[3]}))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;dn.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],se(this.boxes,t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))},this),this._layers.forEach((t,e)=>{t._idx=e}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,fe(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",s)&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(Ms.has(this)?this.attached&&!Ms.running(this)&&Ms.start(this):(this.draw(),ho({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(t,e)}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,n;for(s=0,n=e.length;s<n;++s){const n=e[s];t&&!n.visible||i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=Ss(this,t);!1!==this.notifyPlugins("beforeDatasetDraw",i)&&(s&&fi(e,s),t.controller.draw(),s&&mi(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return gi(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const n=Zs.modes[e];return"function"==typeof n?n(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(t=>t&&t._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Di(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",n=this.getDatasetMeta(t),o=n.controller._resolveAnimations(void 0,s);ge(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(n,{visible:i}),this.update(e=>e.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Ms.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),ui(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete go[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};se(this.options.events,t=>i(t,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(i,s)=>{t[i]&&(e.removeEventListener(this,i,s),delete t[i])},n=(t,e)=>{this.canvas&&this.resize(t,e)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",n),i("detach",o)};o=()=>{this.attached=!1,s("resize",n),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){se(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},se(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let n,o,a,r;for("dataset"===e&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+s+"DatasetHoverStyle"]()),a=0,r=t.length;a<r;++a){o=t[a];const e=o&&this.getDatasetMeta(o.datasetIndex).controller;e&&e[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}});!ne(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return 1===this._plugins._cache.filter(e=>e.plugin.id===t).length}_updateHoverStyles(t,e,i){const s=this.options.hover,n=(t,e)=>t.filter(t=>!e.some(e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)),o=n(e,t),a=i?t:n(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,s))return;const n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(n||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:n}=this,o=e,a=this._getActiveElements(t,s,i,o),r=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,i,s){return i&&"mouseout"!==t.type?s?e:t:null}(t,this._lastEvent,i,r);i&&(this._lastEvent=null,ie(n.onHover,[t,a,this],this),r&&ie(n.onClick,[t,a,this],this));const c=!ne(a,s);return(c||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,c}_getActiveElements(t,e,i,s){if("mouseout"===t.type)return[];if(!i)return e;const n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,s)}}function _o(){return se(bo.instances,t=>t._plugins.invalidate())}function yo(t,e,i=e){t.lineCap=ee(i.borderCapStyle,e.borderCapStyle),t.setLineDash(ee(i.borderDash,e.borderDash)),t.lineDashOffset=ee(i.borderDashOffset,e.borderDashOffset),t.lineJoin=ee(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=ee(i.borderWidth,e.borderWidth),t.strokeStyle=ee(i.borderColor,e.borderColor)}function vo(t,e,i){t.lineTo(i.x,i.y)}function xo(t,e,i={}){const s=t.length,{start:n=0,end:o=s-1}=i,{start:a,end:r}=e,l=Math.max(n,a),c=Math.min(o,r),h=n<a&&o<a||n>r&&o>r;return{count:s,start:l,loop:e.loop,ilen:c<l&&!h?s+c-l:c-l}}function wo(t,e,i,s){const{points:n,options:o}=e,{count:a,start:r,loop:l,ilen:c}=xo(n,i,s),h=function(t){return t.stepped?bi:t.tension||"monotone"===t.cubicInterpolationMode?_i:vo}(o);let d,u,p,{move:g=!0,reverse:f}=s||{};for(d=0;d<=c;++d)u=n[(r+(f?c-d:d))%a],u.skip||(g?(t.moveTo(u.x,u.y),g=!1):h(t,p,u,f,o.stepped),p=u);return l&&(u=n[(r+(f?c:0))%a],h(t,p,u,f,o.stepped)),!!l}function ko(t,e,i,s){const n=e.points,{count:o,start:a,ilen:r}=xo(n,i,s),{move:l=!0,reverse:c}=s||{};let h,d,u,p,g,f,m=0,b=0;const _=t=>(a+(c?r-t:t))%o,y=()=>{p!==g&&(t.lineTo(m,g),t.lineTo(m,p),t.lineTo(m,f))};for(l&&(d=n[_(0)],t.moveTo(d.x,d.y)),h=0;h<=r;++h){if(d=n[_(h)],d.skip)continue;const e=d.x,i=d.y,s=0|e;s===u?(i<p?p=i:i>g&&(g=i),m=(b*m+e)/++b):(y(),t.lineTo(e,i),u=s,b=0,p=g=i),f=i}y()}function So(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return!(t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i)?ko:wo}const $o="function"==typeof Path2D;function Mo(t,e,i,s){$o&&!e.options.segment?function(t,e,i,s){let n=e._path;n||(n=e._path=new Path2D,e.path(n,i,s)&&n.closePath()),yo(t,e.options),t.stroke(n)}(t,e,i,s):function(t,e,i,s){const{segments:n,options:o}=e,a=So(e);for(const r of n)yo(t,o,r.style),t.beginPath(),a(t,e,r,{start:i,end:i+s-1})&&t.closePath(),t.stroke()}(t,e,i,s)}class Co extends An{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;Ji(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const i=t.points,s=t.options.spanGaps,n=i.length;if(!n)return[];const o=!!t._loop,{start:a,end:r}=function(t,e,i,s){let n=0,o=e-1;if(i&&!s)for(;n<e&&!t[n].skip;)n++;for(;n<e&&t[n].skip;)n++;for(n%=e,i&&(o+=n);o>n&&t[o%e].skip;)o--;return o%=e,{start:n,end:o}}(i,n,o,s);return vs(t,!0===s?[{start:a,end:r,loop:o}]:function(t,e,i,s){const n=t.length,o=[];let a,r=e,l=t[e];for(a=e+1;a<=i;++a){const i=t[a%n];i.skip||i.stop?l.skip||(s=!1,o.push({start:e%n,end:(a-1)%n,loop:s}),e=r=i.stop?a:null):(r=a,l.skip&&(e=a)),l=i}return null!==r&&o.push({start:e%n,end:r%n,loop:s}),o}(i,a,r<a?r+n:r,!!t._fullLoop&&0===a&&r===n-1),i,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],n=this.points,o=ys(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],r=function(t){return t.stepped?ps:t.tension||"monotone"===t.cubicInterpolationMode?gs:us}(i);let l,c;for(l=0,c=o.length;l<c;++l){const{start:c,end:h}=o[l],d=n[c],u=n[h];if(d===u){a.push(d);continue}const p=r(d,u,Math.abs((s-d[e])/(u[e]-d[e])),i.stepped);p[e]=t[e],a.push(p)}return 1===a.length?a[0]:a}pathSegment(t,e,i){return So(this)(t,this,e,i)}path(t,e,i){const s=this.segments,n=So(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=n(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const n=this.options||{};(this.points||[]).length&&n.borderWidth&&(t.save(),Mo(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Eo(t,e,i,s){const n=t.options,{[i]:o}=t.getProps([i],s);return Math.abs(e-o)<n.radius+n.hitRadius}class Ao extends An{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.options,{x:n,y:o}=this.getProps(["x","y"],i);return Math.pow(t-n,2)+Math.pow(e-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,e){return Eo(this,t,"x",e)}inYRange(t,e){return Eo(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);return 2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!gi(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,pi(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function To(t,e,i,s){if(s)return;let n=e[t],o=i[t];return"angle"===t&&(n=Oe(n),o=Oe(o)),{property:t,start:n,end:o}}function Po(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function Io(t,e,i,s){return t&&e?s(t[i],e[i]):t?t[i]:e?e[i]:0}function Do(t,e){let i=[],s=!1;return Zt(t)?(s=!0,i=t):i=function(t,e){const{x:i=null,y:s=null}=t||{},n=e.points,o=[];return e.segments.forEach(({start:t,end:e})=>{e=Po(t,e,n);const a=n[t],r=n[e];null!==s?(o.push({x:a.x,y:s}),o.push({x:r.x,y:s})):null!==i&&(o.push({x:i,y:a.y}),o.push({x:i,y:r.y}))}),o}(t,e),i.length?new Co({points:i,options:{tension:0},_loop:s,_fullLoop:s}):null}function Oo(t){return t&&!1!==t.fill}function Ro(t,e,i){let s=t[e].fill;const n=[e];let o;if(!i)return s;for(;!1!==s&&-1===n.indexOf(s);){if(!Jt(s))return s;if(o=t[s],!o)return!1;if(o.visible)return s;n.push(s),s=o.fill}return!1}function zo(t,e,i){const s=function(t){const e=t.options,i=e.fill;let s=ee(i&&i.target,i);void 0===s&&(s=!!e.backgroundColor);if(!1===s||null===s)return!1;if(!0===s)return"origin";return s}(t);if(Qt(s))return!isNaN(s.value)&&s;let n=parseFloat(s);return Jt(n)&&Math.floor(n)===n?function(t,e,i,s){"-"!==t&&"+"!==t||(i=e+i);if(i===e||i<0||i>=s)return!1;return i}(s[0],e,n,i):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function Lo(t,e,i){const s=[];for(let n=0;n<i.length;n++){const o=i[n],{first:a,last:r,point:l}=Fo(o,e,"x");if(!(!l||a&&r))if(a)s.unshift(l);else if(t.push(l),!r)break}t.push(...s)}function Fo(t,e,i){const s=t.interpolate(e,i);if(!s)return{};const n=s[i],o=t.segments,a=t.points;let r=!1,l=!1;for(let t=0;t<o.length;t++){const e=o[t],s=a[e.start][i],c=a[e.end][i];if(Le(n,s,c)){r=n===s,l=n===c;break}}return{first:r,last:l,point:s}}class Ho{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:n,radius:o}=this;return e=e||{start:0,end:_e},t.arc(s,n,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,n=t.angle;return{x:e+Math.cos(n)*s,y:i+Math.sin(n)*s,angle:n}}}function No(t){const{chart:e,fill:i,line:s}=t;if(Jt(i))return function(t,e){const i=t.getDatasetMeta(e),s=i&&t.isDatasetVisible(e);return s?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:s}=t,n=[],o=s.segments,a=s.points,r=function(t,e){const i=[],s=t.getMatchingVisibleMetas("line");for(let t=0;t<s.length;t++){const n=s[t];if(n.index===e)break;n.hidden||i.unshift(n.dataset)}return i}(e,i);r.push(Do({x:null,y:e.bottom},s));for(let t=0;t<o.length;t++){const e=o[t];for(let t=e.start;t<=e.end;t++)Lo(n,a[t],r)}return new Co({points:n,options:{}})}(t);if("shape"===i)return!0;const n=function(t){const e=t.scale||{};if(e.getPointPositionForValue)return function(t){const{scale:e,fill:i}=t,s=e.options,n=e.getLabels().length,o=s.reverse?e.max:e.min,a=function(t,e,i){let s;return s="start"===t?i:"end"===t?e.options.reverse?e.min:e.max:Qt(t)?t.value:e.getBaseValue(),s}(i,e,o),r=[];if(s.grid.circular){const t=e.getPointPositionForValue(0,o);return new Ho({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(a)})}for(let t=0;t<n;++t)r.push(e.getPointPositionForValue(t,a));return r}(t);return function(t){const{scale:e={},fill:i}=t,s=function(t,e){let i=null;return"start"===t?i=e.bottom:"end"===t?i=e.top:Qt(t)?i=e.getPixelForValue(t.value):e.getBasePixel&&(i=e.getBasePixel()),i}(i,e);if(Jt(s)){const t=e.isHorizontal();return{x:t?s:null,y:t?null:s}}return null}(t)}(t);return n instanceof Ho?n:Do(n,s)}function Bo(t,e,i){const s=No(e),{chart:n,index:o,line:a,scale:r,axis:l}=e,c=a.options,h=c.fill,d=c.backgroundColor,{above:u=d,below:p=d}=h||{},g=n.getDatasetMeta(o),f=Ss(n,g);s&&a.points.length&&(fi(t,i),function(t,e){const{line:i,target:s,above:n,below:o,area:a,scale:r,clip:l}=e,c=i._loop?"angle":e.axis;t.save();let h=o;o!==n&&("x"===c?(jo(t,s,a.top),Vo(t,{line:i,target:s,color:n,scale:r,property:c,clip:l}),t.restore(),t.save(),jo(t,s,a.bottom)):"y"===c&&(Wo(t,s,a.left),Vo(t,{line:i,target:s,color:o,scale:r,property:c,clip:l}),t.restore(),t.save(),Wo(t,s,a.right),h=n));Vo(t,{line:i,target:s,color:h,scale:r,property:c,clip:l}),t.restore()}(t,{line:a,target:s,above:u,below:p,area:i,scale:r,axis:l,clip:f}),mi(t))}function jo(t,e,i){const{segments:s,points:n}=e;let o=!0,a=!1;t.beginPath();for(const r of s){const{start:s,end:l}=r,c=n[s],h=n[Po(s,l,n)];o?(t.moveTo(c.x,c.y),o=!1):(t.lineTo(c.x,i),t.lineTo(c.x,c.y)),a=!!e.pathSegment(t,r,{move:a}),a?t.closePath():t.lineTo(h.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function Wo(t,e,i){const{segments:s,points:n}=e;let o=!0,a=!1;t.beginPath();for(const r of s){const{start:s,end:l}=r,c=n[s],h=n[Po(s,l,n)];o?(t.moveTo(c.x,c.y),o=!1):(t.lineTo(i,c.y),t.lineTo(c.x,c.y)),a=!!e.pathSegment(t,r,{move:a}),a?t.closePath():t.lineTo(i,h.y)}t.lineTo(i,e.first().y),t.closePath(),t.clip()}function Vo(t,e){const{line:i,target:s,property:n,color:o,scale:a,clip:r}=e,l=function(t,e,i){const s=t.segments,n=t.points,o=e.points,a=[];for(const t of s){let{start:s,end:r}=t;r=Po(s,r,n);const l=To(i,n[s],n[r],t.loop);if(!e.segments){a.push({source:t,target:l,start:n[s],end:n[r]});continue}const c=ys(e,l);for(const e of c){const s=To(i,o[e.start],o[e.end],e.loop),r=_s(t,n,s);for(const t of r)a.push({source:t,target:e,start:{[i]:Io(l,s,"start",Math.max)},end:{[i]:Io(l,s,"end",Math.min)}})}}return a}(i,s,n);for(const{source:e,target:c,start:h,end:d}of l){const{style:{backgroundColor:l=o}={}}=e,u=!0!==s;t.save(),t.fillStyle=l,qo(t,a,r,u&&To(n,h,d)),t.beginPath();const p=!!i.pathSegment(t,e);let g;if(u){p?t.closePath():Uo(t,s,d,n);const e=!!s.pathSegment(t,c,{move:p,reverse:!0});g=p&&e,g||Uo(t,s,h,n)}t.closePath(),t.fill(g?"evenodd":"nonzero"),t.restore()}}function qo(t,e,i,s){const n=e.chart.chartArea,{property:o,start:a,end:r}=s||{};if("x"===o||"y"===o){let e,s,l,c;"x"===o?(e=a,s=n.top,l=r,c=n.bottom):(e=n.left,s=a,l=n.right,c=r),t.beginPath(),i&&(e=Math.max(e,i.left),l=Math.min(l,i.right),s=Math.max(s,i.top),c=Math.min(c,i.bottom)),t.rect(e,s,l-e,c-s),t.clip()}}function Uo(t,e,i,s){const n=e.interpolate(i,s);n&&t.lineTo(n.x,n.y)}var Go={id:"filler",afterDatasetsUpdate(t,e,i){const s=(t.data.datasets||[]).length,n=[];let o,a,r,l;for(a=0;a<s;++a)o=t.getDatasetMeta(a),r=o.dataset,l=null,r&&r.options&&r instanceof Co&&(l={visible:t.isDatasetVisible(a),index:a,fill:zo(r,a,s),chart:t,axis:o.controller.options.indexAxis,scale:o.vScale,line:r}),o.$filler=l,n.push(l);for(a=0;a<s;++a)l=n[a],l&&!1!==l.fill&&(l.fill=Ro(n,a,i.propagate))},beforeDraw(t,e,i){const s="beforeDraw"===i.drawTime,n=t.getSortedVisibleDatasetMetas(),o=t.chartArea;for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&(i.line.updateControlPoints(o,i.axis),s&&i.fill&&Bo(t.ctx,i,o))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const s=t.getSortedVisibleDatasetMetas();for(let e=s.length-1;e>=0;--e){const i=s[e].$filler;Oo(i)&&Bo(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const s=e.meta.$filler;Oo(s)&&"beforeDatasetDraw"===i.drawTime&&Bo(t.ctx,s,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Yo={average(t){if(!t.length)return!1;let e,i,s=new Set,n=0,o=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();s.add(t.x),n+=t.y,++o}}if(0===o||0===s.size)return!1;const a=[...s].reduce((t,e)=>t+e)/s.size;return{x:a,y:n/o}},nearest(t,e){if(!t.length)return!1;let i,s,n,o=e.x,a=e.y,r=Number.POSITIVE_INFINITY;for(i=0,s=t.length;i<s;++i){const s=t[i].element;if(s&&s.hasValue()){const t=Ie(e,s.getCenterPoint());t<r&&(r=t,n=s)}}if(n){const t=n.tooltipPosition();o=t.x,a=t.y}return{x:o,y:a}}};function Xo(t,e){return e&&(Zt(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ko(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Zo(t,e){const{element:i,datasetIndex:s,index:n}=e,o=t.getDatasetMeta(s).controller,{label:a,value:r}=o.getLabelAndValue(n);return{chart:t,label:a,parsed:o.getParsed(n),raw:t.data.datasets[s].data[n],formattedValue:r,dataset:o.getDataset(),dataIndex:n,datasetIndex:s,element:i}}function Qo(t,e){const i=t.chart.ctx,{body:s,footer:n,title:o}=t,{boxWidth:a,boxHeight:r}=e,l=Ti(e.bodyFont),c=Ti(e.titleFont),h=Ti(e.footerFont),d=o.length,u=n.length,p=s.length,g=Ai(e.padding);let f=g.height,m=0,b=s.reduce((t,e)=>t+e.before.length+e.lines.length+e.after.length,0);if(b+=t.beforeBody.length+t.afterBody.length,d&&(f+=d*c.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),b){f+=p*(e.displayColors?Math.max(r,l.lineHeight):l.lineHeight)+(b-p)*l.lineHeight+(b-1)*e.bodySpacing}u&&(f+=e.footerMarginTop+u*h.lineHeight+(u-1)*e.footerSpacing);let _=0;const y=function(t){m=Math.max(m,i.measureText(t).width+_)};return i.save(),i.font=c.string,se(t.title,y),i.font=l.string,se(t.beforeBody.concat(t.afterBody),y),_=e.displayColors?a+2+e.boxPadding:0,se(s,t=>{se(t.before,y),se(t.lines,y),se(t.after,y)}),_=0,i.font=h.string,se(t.footer,y),i.restore(),m+=g.width,{width:m,height:f}}function Jo(t,e,i,s){const{x:n,width:o}=i,{width:a,chartArea:{left:r,right:l}}=t;let c="center";return"center"===s?c=n<=(r+l)/2?"left":"right":n<=o/2?c="left":n>=a-o/2&&(c="right"),function(t,e,i,s){const{x:n,width:o}=s,a=i.caretSize+i.caretPadding;return"left"===t&&n+o+a>e.width||"right"===t&&n-o-a<0||void 0}(c,t,e,i)&&(c="center"),c}function ta(t,e,i){const s=i.yAlign||e.yAlign||function(t,e){const{y:i,height:s}=e;return i<s/2?"top":i>t.height-s/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||Jo(t,e,i,s),yAlign:s}}function ea(t,e,i,s){const{caretSize:n,caretPadding:o,cornerRadius:a}=t,{xAlign:r,yAlign:l}=i,c=n+o,{topLeft:h,topRight:d,bottomLeft:u,bottomRight:p}=Ei(a);let g=function(t,e){let{x:i,width:s}=t;return"right"===e?i-=s:"center"===e&&(i-=s/2),i}(e,r);const f=function(t,e,i){let{y:s,height:n}=t;return"top"===e?s+=i:s-="bottom"===e?n+i:n/2,s}(e,l,c);return"center"===l?"left"===r?g+=c:"right"===r&&(g-=c):"left"===r?g-=Math.max(h,u)+n:"right"===r&&(g+=Math.max(d,p)+n),{x:ze(g,0,s.width-e.width),y:ze(f,0,s.height-e.height)}}function ia(t,e,i){const s=Ai(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-s.right:t.x+s.left}function sa(t){return Xo([],Ko(t))}function na(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const oa={beforeTitle:Yt,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,s=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(s>0&&e.dataIndex<s)return i[e.dataIndex]}return""},afterTitle:Yt,beforeBody:Yt,beforeLabel:Yt,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return Kt(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Yt,afterBody:Yt,beforeFooter:Yt,footer:Yt,afterFooter:Yt};function aa(t,e,i,s){const n=t[e].call(i,s);return void 0===n?oa[e].call(i,s):n}class ra extends An{static positioners=Yo;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,n=new Ts(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=(t=this.chart.getContext(),e=this,i=this._tooltipItems,Di(t,{tooltip:e,tooltipItems:i,type:"tooltip"})));var t,e,i}getTitle(t,e){const{callbacks:i}=e,s=aa(i,"beforeTitle",this,t),n=aa(i,"title",this,t),o=aa(i,"afterTitle",this,t);let a=[];return a=Xo(a,Ko(s)),a=Xo(a,Ko(n)),a=Xo(a,Ko(o)),a}getBeforeBody(t,e){return sa(aa(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return se(t,t=>{const e={before:[],lines:[],after:[]},n=na(i,t);Xo(e.before,Ko(aa(n,"beforeLabel",this,t))),Xo(e.lines,aa(n,"label",this,t)),Xo(e.after,Ko(aa(n,"afterLabel",this,t))),s.push(e)}),s}getAfterBody(t,e){return sa(aa(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=aa(i,"beforeFooter",this,t),n=aa(i,"footer",this,t),o=aa(i,"afterFooter",this,t);let a=[];return a=Xo(a,Ko(s)),a=Xo(a,Ko(n)),a=Xo(a,Ko(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],n=[],o=[];let a,r,l=[];for(a=0,r=e.length;a<r;++a)l.push(Zo(this.chart,e[a]));return t.filter&&(l=l.filter((e,s,n)=>t.filter(e,s,n,i))),t.itemSort&&(l=l.sort((e,s)=>t.itemSort(e,s,i))),se(l,e=>{const i=na(t.callbacks,e);s.push(aa(i,"labelColor",this,e)),n.push(aa(i,"labelPointStyle",this,e)),o.push(aa(i,"labelTextColor",this,e))}),this.labelColors=s,this.labelPointStyles=n,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let n,o=[];if(s.length){const t=Yo[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const e=this._size=Qo(this,i),a=Object.assign({},t,e),r=ta(this.chart,i,a),l=ea(i,a,r,this.chart);this.xAlign=r.xAlign,this.yAlign=r.yAlign,n={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(n={opacity:0});this._tooltipItems=o,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const n=this.getCaretPosition(t,i,s);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:n}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:r,topRight:l,bottomLeft:c,bottomRight:h}=Ei(a),{x:d,y:u}=t,{width:p,height:g}=e;let f,m,b,_,y,v;return"center"===n?(y=u+g/2,"left"===s?(f=d,m=f-o,_=y+o,v=y-o):(f=d+p,m=f+o,_=y-o,v=y+o),b=f):(m="left"===s?d+Math.max(r,c)+o:"right"===s?d+p-Math.max(l,h)-o:this.caretX,"top"===n?(_=u,y=_-o,f=m-o,b=m+o):(_=u+g,y=_+o,f=m+o,b=m-o),v=_),{x1:f,x2:m,x3:b,y1:_,y2:y,y3:v}}drawTitle(t,e,i){const s=this.title,n=s.length;let o,a,r;if(n){const l=fs(i.rtl,this.x,this.width);for(t.x=ia(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=Ti(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,r=0;r<n;++r)e.fillText(s[r],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,r+1===n&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,n){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:r,boxWidth:l}=n,c=Ti(n.bodyFont),h=ia(this,"left",n),d=s.x(h),u=r<c.lineHeight?(c.lineHeight-r)/2:0,p=e.y+u;if(n.usePointStyle){const e={radius:Math.min(l,r)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},i=s.leftForLtr(d,l)+l/2,c=p+r/2;t.strokeStyle=n.multiKeyBackground,t.fillStyle=n.multiKeyBackground,pi(t,e,i,c),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,pi(t,e,i,c)}else{t.lineWidth=Qt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const e=s.leftForLtr(d,l),i=s.leftForLtr(s.xPlus(d,1),l-2),a=Ei(o.borderRadius);Object.values(a).some(t=>0!==t)?(t.beginPath(),t.fillStyle=n.multiKeyBackground,wi(t,{x:e,y:p,w:l,h:r,radius:a}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),wi(t,{x:i,y:p+1,w:l-2,h:r-2,radius:a}),t.fill()):(t.fillStyle=n.multiKeyBackground,t.fillRect(e,p,l,r),t.strokeRect(e,p,l,r),t.fillStyle=o.backgroundColor,t.fillRect(i,p+1,l-2,r-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:n,bodyAlign:o,displayColors:a,boxHeight:r,boxWidth:l,boxPadding:c}=i,h=Ti(i.bodyFont);let d=h.lineHeight,u=0;const p=fs(i.rtl,this.x,this.width),g=function(i){e.fillText(i,p.x(t.x+u),t.y+d/2),t.y+=d+n},f=p.textAlign(o);let m,b,_,y,v,x,w;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=ia(this,f,i),e.fillStyle=i.bodyColor,se(this.beforeBody,g),u=a&&"right"!==f?"center"===o?l/2+c:l+2+c:0,y=0,x=s.length;y<x;++y){for(m=s[y],b=this.labelTextColors[y],e.fillStyle=b,se(m.before,g),_=m.lines,a&&_.length&&(this._drawColorBox(e,t,y,p,i),d=Math.max(h.lineHeight,r)),v=0,w=_.length;v<w;++v)g(_[v]),d=h.lineHeight;se(m.after,g)}u=0,d=h.lineHeight,se(this.afterBody,g),t.y-=n}drawFooter(t,e,i){const s=this.footer,n=s.length;let o,a;if(n){const r=fs(i.rtl,this.x,this.width);for(t.x=ia(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=r.textAlign(i.footerAlign),e.textBaseline="middle",o=Ti(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<n;++a)e.fillText(s[a],r.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:n,yAlign:o}=this,{x:a,y:r}=t,{width:l,height:c}=i,{topLeft:h,topRight:d,bottomLeft:u,bottomRight:p}=Ei(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+h,r),"top"===o&&this.drawCaret(t,e,i,s),e.lineTo(a+l-d,r),e.quadraticCurveTo(a+l,r,a+l,r+d),"center"===o&&"right"===n&&this.drawCaret(t,e,i,s),e.lineTo(a+l,r+c-p),e.quadraticCurveTo(a+l,r+c,a+l-p,r+c),"bottom"===o&&this.drawCaret(t,e,i,s),e.lineTo(a+u,r+c),e.quadraticCurveTo(a,r+c,a,r+c-u),"center"===o&&"left"===n&&this.drawCaret(t,e,i,s),e.lineTo(a,r+h),e.quadraticCurveTo(a,r,a+h,r),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,n=i&&i.y;if(s||n){const i=Yo[t.position].call(this,this._active,this._eventPosition);if(!i)return;const o=this._size=Qo(this,t),a=Object.assign({},i,this._size),r=ta(e,t,a),l=ea(t,a,r,e);s._to===l.x&&n._to===l.y||(this.xAlign=r.xAlign,this.yAlign=r.yAlign,this.width=o.width,this.height=o.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=Ai(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(n,t,s,e),function(t,e){let i,s;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=s)}(t,e.textDirection),n.y+=o.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),function(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),n=!ne(i,s),o=this._positionChanged(s,e);(n||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,n=this._active||[],o=this._getActiveElements(t,n,e,i),a=this._positionChanged(o,t),r=e||!ne(o,n)||a;return r&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),r}_getActiveElements(t,e,i,s){const n=this.options;if("mouseout"===t.type)return[];if(!s)return e.filter(t=>this.chart.data.datasets[t.datasetIndex]&&void 0!==this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index));const o=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:n}=this,o=Yo[n.position].call(this,t,e);return!1!==o&&(i!==o.x||s!==o.y)}}var la={id:"tooltip",_element:ra,positioners:Yo,afterInit(t,e,i){i&&(t.tooltip=new ra({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const i={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:oa},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};function ca(t,e,i,s){const n=t.indexOf(e);if(-1===n)return((t,e,i,s)=>("string"==typeof e?(i=t.push(e)-1,s.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,s);return n!==t.lastIndexOf(e)?i:n}function ha(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class da extends Hn{static id="category";static defaults={ticks:{callback:ha}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:s}of e)t[i]===s&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Kt(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:ze(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:ca(i,t,ee(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)s.push({value:i});return s}getLabelForValue(t){return ha.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function ua(t,e){const i=[],{bounds:s,step:n,min:o,max:a,precision:r,count:l,maxTicks:c,maxDigits:h,includeBounds:d}=t,u=n||1,p=c-1,{min:g,max:f}=e,m=!Kt(o),b=!Kt(a),_=!Kt(l),y=(f-g)/(h+1);let v,x,w,k,S=Ee((f-g)/p/u)*u;if(S<1e-14&&!m&&!b)return[{value:g},{value:f}];k=Math.ceil(f/S)-Math.floor(g/S),k>p&&(S=Ee(k*S/p/u)*u),Kt(r)||(v=Math.pow(10,r),S=Math.ceil(S*v)/v),"ticks"===s?(x=Math.floor(g/S)*S,w=Math.ceil(f/S)*S):(x=g,w=f),m&&b&&n&&function(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}((a-o)/n,S/1e3)?(k=Math.round(Math.min((a-o)/S,c)),S=(a-o)/k,x=o,w=a):_?(x=m?o:x,w=b?a:w,k=l-1,S=(w-x)/k):(k=(w-x)/S,k=Ce(k,Math.round(k),S/1e3)?Math.round(k):Math.ceil(k));const $=Math.max(Pe(S),Pe(x));v=Math.pow(10,Kt(r)?$:r),x=Math.round(x*v)/v,w=Math.round(w*v)/v;let M=0;for(m&&(d&&x!==o?(i.push({value:o}),x<o&&M++,Ce(Math.round((x+M*S)*v)/v,o,pa(o,y,t))&&M++):x<o&&M++);M<k;++M){const t=Math.round((x+M*S)*v)/v;if(b&&t>a)break;i.push({value:t})}return b&&d&&w!==a?i.length&&Ce(i[i.length-1].value,a,pa(a,y,t))?i[i.length-1].value=a:i.push({value:a}):b&&w!==a||i.push({value:w}),i}function pa(t,e,{horizontal:i,minRotation:s}){const n=Te(s),o=(i?Math.sin(n):Math.cos(n))||.001,a=.75*e*(""+t).length;return Math.min(e/o,a)}class ga extends Hn{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Kt(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:n}=this;const o=t=>s=e?s:t,a=t=>n=i?n:t;if(t){const t=Me(s),e=Me(n);t<0&&e<0?a(0):t>0&&e>0&&o(0)}if(s===n){let e=0===n?1:Math.abs(.05*n);a(n+e),t||o(s-e)}this.min=s,this.max=n}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:s}=t;return s?(e=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s=ua({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&function(t,e,i){let s,n,o;for(s=0,n=t.length;s<n;s++)o=t[s][i],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return ii(t,this.chart.options.locale,this.options.ticks.format)}}class fa extends ga{static id="linear";static defaults={ticks:{callback:si.formatters.numeric}};determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Jt(t)?t:0,this.max=Jt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Te(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/s))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}bo.register(Ws,Co,Ao,fa,da,Go,la);console.info("%c SIMPLE-CLIMATE-CARD %c 0.2.0 ","color: white; background: #ff9800; font-weight: 700;","color: #ff9800; background: white; font-weight: 700;");class ma extends at{constructor(){super(...arguments),this._graphHistory={},this._graphFetchInFlight=new Set,this._graphCacheMs=3e5,this._charts=new Map}static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-simple-climate-card-editor")}static getStubConfig(){return{type:"custom:slick-simple-climate-card",entity:"",name:"Climate"}}getCardSize(){return 2}getLayoutOptions(){return{grid_rows:2,grid_columns:2,grid_min_rows:1,grid_min_columns:1}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(this.config={name:"Climate",...t},this.config.name&&"string"!=typeof this.config.name)throw new Error("name must be a string");if(this.config.hot_water_entity&&"string"!=typeof this.config.hot_water_entity)throw new Error("hot_water_entity must be a string");if(this.config.sensors&&"object"!=typeof this.config.sensors)throw new Error("sensors must be an object")}disconnectedCallback(){for(const t of this._charts.values())t.destroy();this._charts.clear(),super.disconnectedCallback()}updated(){this._syncCharts()}_getChartPalette(t){return"tank-graph"===t?{line:"#9ad9ff",fill:"rgba(79, 195, 247, 0.2)"}:{line:"#ffd59a",fill:"rgba(255, 183, 77, 0.2)"}}_syncCharts(){const t=this.renderRoot.querySelectorAll("canvas.graph-canvas[data-key]"),e=new Set;t.forEach(t=>{var i;const s=t.dataset.key,n=t.dataset.colorClass||"heating-graph";if(!s)return;e.add(s);const o=this._graphHistory[s];if(!(null===(i=null==o?void 0:o.points)||void 0===i?void 0:i.length))return;const a=this._getChartPalette(n),r=o.points.map((t,e)=>e),l=o.points.length,c=this._charts.get(s);if(c&&c.canvas===t){c.data.labels=r;const t=c.data.datasets[0];return t.data=o.points,t.borderColor=a.line,t.backgroundColor=a.fill,t.tension=.58,t.cubicInterpolationMode="monotone",void c.update("none")}c&&c.destroy();const h=t.getContext("2d");if(!h)return;const d=new bo(h,{type:"line",data:{labels:r,datasets:[{data:o.points,borderColor:a.line,backgroundColor:a.fill,fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.7,pointRadius:t=>t.dataIndex===l-1?1.8:0,pointHoverRadius:0,pointBackgroundColor:a.line,pointBorderColor:"rgba(0, 0, 0, 0.35)",pointBorderWidth:.6}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1}}},elements:{line:{capBezierPoints:!0}},layout:{padding:{top:2,right:0,bottom:1,left:0}}}});this._charts.set(s,d)});for(const[t,i]of this._charts.entries())e.has(t)||(i.destroy(),this._charts.delete(t))}_formatTemperature(t){const e="number"==typeof t?t:parseFloat(String(t));return Number.isFinite(e)?`${e}°`:"--"}_getClimateModeIcon(t){var e;const i=String((null==t?void 0:t.state)||(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.hvac_action)||"").toLowerCase();return"heat"===i||"heating"===i?"mdi:fire":"cool"===i||"cooling"===i?"mdi:snowflake":"heat_cool"===i||"auto"===i?"mdi:autorenew":"off"===i?"mdi:power-off":"mdi:thermostat"}_getHotWaterModeIcon(t){var e,i;const s=(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.operation_mode)||(null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.preset_mode)||(null==t?void 0:t.state)||"",n=String(s).toLowerCase();return n.includes("eco")?"mdi:leaf":n.includes("high")||n.includes("boost")||n.includes("performance")||n.includes("power")||n.includes("hoch")?"mdi:fire":"off"===n?"mdi:power-off":"mdi:water-thermometer"}_isHotWaterActive(t){var e,i,s;if(!t)return!1;if(this.config.hot_water_active_entity&&this.hass){const t=this.hass.states[this.config.hot_water_active_entity];if(t){const i=null===(e=t.state)||void 0===e?void 0:e.toLowerCase();return"on"===i||"true"===i||"heat"===i||"heating"===i}}const n=String((null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.operation_mode)||(null===(s=null==t?void 0:t.attributes)||void 0===s?void 0:s.preset_mode)||"").toLowerCase();return n.includes("high")||n.includes("boost")||n.includes("performance")||n.includes("power")||n.includes("hoch")}_interpolateColor(t,e,i){const s=t=>{const e=t.replace("#","");return parseInt(e,16)},n=s(t)>>16&255,o=s(t)>>8&255,a=255&s(t),r=s(e)>>16&255,l=s(e)>>8&255,c=255&s(e);return`rgb(${Math.round(n+(r-n)*i)}, ${Math.round(o+(l-o)*i)}, ${Math.round(a+(c-a)*i)})`}_getGradient(t,e,i,s){const n=t.attributes.hvac_action||t.state,o="#607d8b",a="#455a64",r="#ff9800",l="#4caf50",c="#2196f3";if(isNaN(e))return`linear-gradient(180deg, ${o}, ${a})`;if("heating"===n){if(e<i){const t=i-e,s=t/3>=1?1:t/3;let n=0;s>.4&&(n=(s-.4)/.6);return`linear-gradient(180deg, ${this._interpolateColor(o,r,n)} 0%, ${90-70*s}%, ${this._interpolateColor(r,"#e65100",s)} 100%)`}return`linear-gradient(180deg, ${l}, 80%, ${r})`}if("cooling"===n){if(e>s){const t=e-s,i=t/3>=1?1:t/3,n=this._interpolateColor(c,"#0d47a1",i);let a=0;i>.4&&(a=(i-.4)/.6);return`linear-gradient(180deg, ${c} 0%, ${10+70*i}%, ${this._interpolateColor(o,n,a)} 100%)`}return`linear-gradient(180deg, ${c}, 20%, ${l})`}return"idle"===n?`linear-gradient(180deg, ${l} 0%, #81c784 100%)`:(t.state,`linear-gradient(180deg, ${o} 0%, ${a} 100%)`)}_getGraphCacheKey(t){return t.attributeKey?`${t.entityId}::${t.attributeKey}`:t.entityId}_resolveHeatingGraphSource(t){var e;return this.config.heating_graph_entity?{entityId:this.config.heating_graph_entity}:(null===(e=this.config.sensors)||void 0===e?void 0:e.temp)?{entityId:this.config.sensors.temp}:{entityId:t,attributeKey:"current_temperature"}}_resolveHotWaterGraphSource(t){return this.config.hot_water_graph_entity?{entityId:this.config.hot_water_graph_entity}:t?{entityId:t,attributeKey:"current_temperature"}:void 0}_isGraphFresh(t){const e=this._getGraphCacheKey(t),i=this._graphHistory[e];return!!i&&Date.now()-i.fetchedAt<this._graphCacheMs}async _ensureGraphHistory(t){var e,i;const s=this._getGraphCacheKey(t);if(this._isGraphFresh(t)||this._graphFetchInFlight.has(s))return;this._graphFetchInFlight.add(s);const n=new Date,o=new Date(n.getTime()-864e5);try{const a=await this.hass.callApi("GET",`history/period/${o.toISOString()}?filter_entity_id=${encodeURIComponent(t.entityId)}&end_time=${n.toISOString()}`),r=((null==a?void 0:a[0])||[]).map(e=>{var i;return t.attributeKey?parseFloat(String(null===(i=e.attributes)||void 0===i?void 0:i[t.attributeKey])):parseFloat(String(e.state))}).filter(t=>Number.isFinite(t)),l=Math.max(72,Math.min(180,Math.round((this.getBoundingClientRect().width||300)/2.5))),c=this._downsamplePoints(r,l),h=(null===(i=null===(e=this.hass.states[t.entityId])||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.unit_of_measurement)||"°C";this._graphHistory[s]={points:c,unit:h,fetchedAt:Date.now()}}catch(e){console.error("SimpleClimate: Graph history fetch failed",t,e)}finally{this._graphFetchInFlight.delete(s),this.requestUpdate()}}_downsamplePoints(t,e){if(t.length<=e)return t;const i=[],s=(t.length-1)/(e-1);for(let n=0;n<e;n++){const e=Math.round(n*s);i.push(t[e])}return i}_renderGraphTile(t,e,i){const s=this._getGraphCacheKey(e),n=this._graphHistory[s];n&&this._isGraphFresh(e)||this._ensureGraphHistory(e);const o=(null==n?void 0:n.points)||[],a=o.length?o[o.length-1]:void 0,r=o.length?Math.min(...o):void 0,l=o.length?Math.max(...o):void 0;return j`
      <div class="graph-tile ${i}">
        <div class="graph-head">
          <div class="graph-title">${t}</div>
          <div class="graph-value">${void 0!==a?`${a.toFixed(1)}${(null==n?void 0:n.unit)||"°C"}`:"--"}</div>
        </div>
        <div class="graph-body">
          ${o.length?j`
                <canvas class="graph-canvas" data-key="${s}" data-color-class="${i}" aria-hidden="true"></canvas>
                <div class="graph-scale">
                  <span>${void 0!==l?`${l.toFixed(1)}${(null==n?void 0:n.unit)||"°C"}`:"--"}</span>
                  <span>${void 0!==r?`${r.toFixed(1)}${(null==n?void 0:n.unit)||"°C"}`:"--"}</span>
                </div>
              `:j`<div class="graph-empty">No 24h data</div>`}
        </div>
      </div>
    `}render(){var t,e,i;if(!this.config)return j``;if(!this.hass)return j`<ha-card style="padding:16px;">Loading...</ha-card>`;const s=this.config.entity;let n=this.hass.states[s];n||(n={entity_id:s,state:"unavailable",attributes:{friendly_name:this.config.name||s}});let o=n.attributes.current_temperature;if((null===(t=this.config.sensors)||void 0===t?void 0:t.temp)&&this.hass.states[this.config.sensors.temp]){const t=this.hass.states[this.config.sensors.temp];isNaN(parseFloat(t.state))||(o=parseFloat(t.state))}let a=n.attributes.target_temp_low,r=n.attributes.target_temp_high;const l=n.attributes.temperature;void 0===a&&void 0!==l&&(a=l),void 0===r&&void 0!==l&&(r=l),void 0===a&&(a=20),void 0===r&&(r=24),(null===(e=this.config.sensors)||void 0===e?void 0:e.target_low)&&this.hass.states[this.config.sensors.target_low]&&(a=parseFloat(this.hass.states[this.config.sensors.target_low].state)),(null===(i=this.config.sensors)||void 0===i?void 0:i.target_high)&&this.hass.states[this.config.sensors.target_high]&&(r=parseFloat(this.hass.states[this.config.sensors.target_high].state));const c=this.config.hot_water_entity,h=c?this.hass.states[c]:void 0,d=Boolean(this.config.show_heating_graph),u=Boolean(this.config.show_hot_water_graph&&c),p=d?this._resolveHeatingGraphSource(s):void 0,g=u?this._resolveHotWaterGraphSource(c):void 0,f=this._getGradient(n,o,a,r),m=this.config.name||n.attributes.friendly_name||"Climate",b=n.attributes.hvac_action?this.hass.localize(`state_attributes.climate.hvac_action.${n.attributes.hvac_action}`):this.hass.localize(`component.climate.state._.${n.state}`)||n.state;let _="mdi:thermostat";const y=n.attributes.hvac_action||n.state;"heating"===y?_="mdi:fire":"cooling"===y?_="mdi:snowflake":"idle"===y?_="mdi:check-circle-outline":"off"===y&&(_="mdi:power-off");const v=[];p&&v.push(this._renderGraphTile("Inside 24h",p,"heating-graph")),g&&v.push(this._renderGraphTile("Tank 24h",g,"tank-graph"));const x=2===v.length?"two-cols":"one-col";return j`
      <ha-card @click="${this._openMoreInfo}">
        <div class="bg-layer" style="background: ${f};"></div>
        
        <div class="container">
          <div class="header">
           <div class="header-left">
             <div class="name">${m}</div>
             <div class="temp-big">
              ${void 0!==o?j`${o}<span class="unit">°</span>`:"--"}
             </div>
           </div>
             <div class="header-right">
                <ha-icon icon="${_}" class="main-icon"></ha-icon>
                <div class="state-label">${b}</div>
             </div>
          </div>

          <div class="spacer"></div>

         <div class="metrics-row">
           <div class="footer-metrics">
               <div class="targets">
                 ${this._renderTargets(n,a,r)}
               </div>
               ${this._renderHotWater(h)}
             </div>
         </div>

          ${v.length?j`
                <div class="graph-row ${x}">
                  ${v}
                </div>
              `:j``}
        </div>
      </ha-card>
    `}_renderTargets(t,e,i){const s=t.state,n=this._getClimateModeIcon(t),o=[];return o.push(j`
        <div class="target-icon-wrap">
          <ha-icon icon="${n}" class="bubble-icon"></ha-icon>
        </div>
      `),"off"===s?(o.push(j`<div class="divider"></div>`),o.push(j`<div class="target-chip">OFF</div>`)):(o.push(j`<div class="divider"></div>`),void 0!==e&&void 0!==i&&e!==i?o.push(j`
              <div class="target-group">
                <div class="target-label">Min</div>
                <div class="target-val">${this._formatTemperature(e)}</div>
              </div>
              <div class="divider"></div>
              <div class="target-group">
                <div class="target-label">Max</div>
                <div class="target-val">${this._formatTemperature(i)}</div>
              </div>
            `):o.push(j`
              <div class="target-group">
                <div class="target-label">Target</div>
                <div class="target-val">${this._formatTemperature(null!=e?e:i)}</div>
              </div>
            `)),j`${o}`}_renderHotWater(t){if(!t)return j``;const e=t.entity_id,i=t.attributes.temperature,s=t.attributes.current_temperature,n=this._getHotWaterModeIcon(t),o=this._isHotWaterActive(t);return j`
        <div
          class="targets hot-water-bubble"
          @click=${t=>this._openEntityMoreInfo(e,t)}
        >
          <div class="target-icon-wrap">
            <ha-icon icon="${n}" class="bubble-icon"></ha-icon>
          </div>
          <div class="divider"></div>
          <div class="target-group">
            <div class="target-label">Set</div>
            <div class="target-val">${this._formatTemperature(i)}</div>
          </div>
          <div class="divider"></div>
          <div class="target-group">
            <div class="target-label">Temp</div>
            <div class="target-val">
              ${this._formatTemperature(s)}
              ${o?j`<div class="hot-water-indicator"><ha-icon icon="mdi:fire" class="indicator-icon"></ha-icon></div>`:""}
            </div>
          </div>
        </div>
      `}_openMoreInfo(){this._openEntityMoreInfo(this.config.entity)}_openEntityMoreInfo(t,e){if(null==e||e.stopPropagation(),t){const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}}static get styles(){return o`
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
        min-width: clamp(14px, 2.5cqi, 18px);
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
        opacity: 0.95;
      }
      .hot-water-bubble {
        flex-shrink: 0;
        cursor: pointer;
      }
      .hot-water-indicator {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        animation: pulse-glow 1.5s ease-in-out infinite;
      }
      .indicator-icon {
        --mdc-icon-size: clamp(10px, 2cqi, 14px);
        width: clamp(10px, 2cqi, 14px);
        height: clamp(10px, 2cqi, 14px);
        color: #ff9800;
        filter: drop-shadow(0 0 3px rgba(255, 152, 0, 0.6));
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
    `}}customElements.get("slick-simple-climate-card")||customElements.define("slick-simple-climate-card",ma);class ba extends at{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return j``;return j`
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:"climate"}}},{name:"name",label:"Name",selector:{text:{}}},{name:"hot_water_entity",label:"Hot Water Entity",selector:{entity:{domain:"water_heater"}}},{name:"show_heating_graph",label:"Show Heating 24h Graph",selector:{boolean:{}}},{name:"heating_graph_entity",label:"Heating Graph Entity (optional)",selector:{entity:{}}},{name:"show_hot_water_graph",label:"Show Hot Water 24h Graph",selector:{boolean:{}}},{name:"hot_water_graph_entity",label:"Hot Water Graph Entity (optional)",selector:{entity:{}}}]}
          .computeLabel=${t=>t.label}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `}}customElements.get("slick-simple-climate-card-editor")||customElements.define("slick-simple-climate-card-editor",ba),window.customCards=window.customCards||[],window.customCards.push({type:"slick-simple-climate-card",name:"Slick Simple Climate",preview:!0,description:"A clean climate card with dynamic gradients."});const _a={id:"zeroLine",afterDraw(t){var e,i,s;if(!Boolean(null===(s=null===(i=null===(e=t.options)||void 0===e?void 0:e.plugins)||void 0===i?void 0:i.zeroLine)||void 0===s?void 0:s.enabled))return;const n=t.scales.y,o=t.chartArea;if(!n||!o)return;const a=n.getPixelForValue(0);if(!Number.isFinite(a))return;if(a<o.top||a>o.bottom)return;const r=t.ctx;r.save(),r.strokeStyle="rgba(255, 255, 255, 0.24)",r.lineWidth=1,r.beginPath(),r.moveTo(o.left,a),r.lineTo(o.right,a),r.stroke(),r.restore()}};bo.register(Ws,Co,Ao,fa,da,Go,la,_a),console.info("%c ENERGY-FLOW-CARD %c 0.2.0 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");class ya extends at{constructor(){super(...arguments),this._graphHistory={},this._graphFetchInFlight=new Set,this._graphCacheMs=3e5,this._charts=new Map,this._solarTodayFromTotalCache={},this._solarTodayFromTotalFetchInFlight=new Set,this._solarTodayFromTotalCacheMs=3e5,this._cachedGradients=["",""],this._activeIndex=0,this._displayedGradientKey=null,this._lastValidStates=new Map,this._width=0,this._height=0}static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-energy-flow-card-editor")}static getStubConfig(){return{type:"custom:slick-energy-flow-card",title:"Energiefluss",solar_entity:"",grid_import_entity:"",grid_export_entity:"",battery_entity:"",battery_soc_entity:"",home_entity:""}}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={title:"Energiefluss",inverted_grid:!1,inverted_battery:!1,...t};if(e.inverted_grid&&"boolean"!=typeof e.inverted_grid)throw new Error("inverted_grid must be a boolean");if(e.inverted_battery&&"boolean"!=typeof e.inverted_battery)throw new Error("inverted_battery must be a boolean");this.config=e}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect;this._width=t.width,this._height=t.height,this.requestUpdate()}}),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect();for(const t of this._charts.values())t.destroy();this._charts.clear(),super.disconnectedCallback()}updated(){this._syncPowerCharts()}_getState(t){if(!t)return 0;const e=this._lastValidStates.get(t);if(!this.hass||!this.hass.states[t])return null!=e?e:0;const i=this.hass.states[t].state,s=parseFloat(i);return Number.isFinite(s)?(this._lastValidStates.set(t,s),s):null!=e?e:0}_formatEnergy(t){if(!Number.isFinite(t))return"--";return`${Math.abs(t)>=10?Math.round(t):Math.round(10*t)/10} kWh`}_convertEnergyToKwh(t,e){if(!Number.isFinite(t))return t;const i=String(e||"").toLowerCase();return i.includes("mwh")?1e3*t:i.includes("wh")&&!i.includes("kwh")?t/1e3:t}_getEntityEnergyInKwh(t){var e,i,s;if(!t||!(null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t]))return;const n=this.hass.states[t],o=parseFloat(String(n.state));return Number.isFinite(o)?this._convertEnergyToKwh(o,null===(s=n.attributes)||void 0===s?void 0:s.unit_of_measurement):void 0}_isSolarTodayFromTotalFresh(t){const e=this._solarTodayFromTotalCache[t];return!!e&&Date.now()-e.fetchedAt<this._solarTodayFromTotalCacheMs}async _ensureSolarTodayFromTotal(t){var e;if(!t||!this.hass||this._isSolarTodayFromTotalFresh(t)||this._solarTodayFromTotalFetchInFlight.has(t))return;this._solarTodayFromTotalFetchInFlight.add(t);const i=new Date,s=new Date(i);s.setHours(0,0,0,0);try{const n=await this.hass.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${encodeURIComponent(t)}&end_time=${i.toISOString()}`),o=(null==n?void 0:n[0])||[],a=this.hass.states[t],r=null===(e=null==a?void 0:a.attributes)||void 0===e?void 0:e.unit_of_measurement,l=o.map(t=>parseFloat(String(t.state))).filter(t=>Number.isFinite(t)).map(t=>this._convertEnergyToKwh(t,r));if(!l.length)return;let c=0,h=l[0];for(let t=1;t<l.length;t++){const e=l[t];e>=h?c+=e-h:e>=0&&(c+=e),h=e}this._solarTodayFromTotalCache[t]={value:Math.max(0,c),fetchedAt:Date.now()}}catch(e){console.error("EnergyFlow: Solar today-from-total fetch failed",t,e)}finally{this._solarTodayFromTotalFetchInFlight.delete(t),this.requestUpdate()}}_getSolarEnergySummary(t){var e,i,s,n,o;const a=this._getEntityEnergyInKwh(this.config.solar_today_energy_entity),r=this.config.solar_total_energy_entity?null===(e=this._solarTodayFromTotalCache[this.config.solar_total_energy_entity])||void 0===e?void 0:e.value:void 0;this.config.solar_total_energy_entity&&!this._isSolarTodayFromTotalFresh(this.config.solar_total_energy_entity)&&this._ensureSolarTodayFromTotal(this.config.solar_total_energy_entity);const l=null!==(i=null!=a?a:r)&&void 0!==i?i:this._getNumericAttribute(t,["today_energy","energy_today","total_energy_today","yield_today","energy_produced_today"]),c=null!==(s=this._getEntityEnergyInKwh(this.config.solar_expected_energy_entity))&&void 0!==s?s:this._getNumericAttribute(t,["forecast_today","energy_forecast_today","prognose_heute","predicted_energy_today","estimated_energy_today"]),h=null!==(n=this._getEntityEnergyInKwh(this.config.solar_remaining_energy_entity))&&void 0!==n?n:this._getNumericAttribute(t,["remaining_today","forecast_remaining","prognose_verbleibende_leistung_heute","remaining_energy_today","remaining_energy"]),d=null!=c?c:void 0!==l&&void 0!==h?l+h:void 0;if(void 0!==l||void 0!==d)return void 0!==l&&void 0!==d?`${this._formatEnergy(l)} / ${this._formatEnergy(d)}`:this._formatEnergy(null!==(o=null!=l?l:d)&&void 0!==o?o:0)}_getNumericAttribute(t,e){if(null==t?void 0:t.attributes)for(const i of e){const e=parseFloat(String(t.attributes[i]));if(Number.isFinite(e))return e}}_getGraphCacheKey(t){return`${t.entityId}${t.centered?"::centered":""}${t.invert?"::invert":""}${t.absolute?"::abs":""}${t.zeroMin?"::zmin":""}`}_isGraphFresh(t){const e=this._graphHistory[this._getGraphCacheKey(t)];return!!e&&Date.now()-e.fetchedAt<this._graphCacheMs}_downsamplePoints(t,e){if(t.length<=e)return t;const i=[],s=(t.length-1)/(e-1);for(let n=0;n<e;n++){const e=Math.round(n*s);i.push(t[e])}return i}_smoothSeries(t,e=5){if(t.length<3||e<=1)return t;const i=Math.floor(e/2);return t.map((e,s)=>{const n=Math.max(0,s-i),o=Math.min(t.length-1,s+i);let a=0,r=0;for(let e=n;e<=o;e++)a+=t[e],r+=1;return r?a/r:t[s]})}_getChartPalette(t){return t.includes("home-chart")?{line:"#63c774",fill:"rgba(99, 199, 116, 0.18)"}:t.includes("grid-import-chart")?{line:"#8e66ff",fill:"rgba(142, 102, 255, 0.18)"}:t.includes("grid-export-chart")?{line:"#5ea1ff",fill:"rgba(94, 161, 255, 0.18)"}:{line:"#f6c945",fill:"rgba(246, 201, 69, 0.20)"}}_syncPowerCharts(){const t=this.renderRoot.querySelectorAll("canvas.stat-chart-canvas[data-chart-key]"),e=new Set;t.forEach(t=>{var i;const s=t.dataset.chartKey,n=t.dataset.sourceKey,o=t.dataset.colorClass||"solar-chart",a="1"===t.dataset.centered,r="1"===t.dataset.zeroMin;if(!s||!n)return;e.add(s);const l=this._graphHistory[n];if(!(null===(i=null==l?void 0:l.points)||void 0===i?void 0:i.length))return;const c=l.points,h=c.map((t,e)=>e),d=this._getChartPalette(o),u=c.length-1,p=a&&o.includes("grid-centered-chart");let g,f;if(a){const t=Math.max(...c.map(t=>Math.abs(t)),.1);g=-t,f=t}else{const t=[...c].sort((t,e)=>t-e),e=t[Math.floor(.1*(t.length-1))],i=t[Math.floor(.9*(t.length-1))],s=Math.min(...c),n=Math.max(...c);if(g=r?0:Math.min(s,e),f=Math.max(n,i),f-g<.1){const t=(f+g)/2;g=t-.05,f=t+.05}}const m=this._charts.get(s),b=c.map(t=>t>0?t:null),_=c.map(t=>t<0?t:null);if(m&&m.canvas===t){if(m.data.labels=h,p&&2===m.data.datasets.length){const t=m.data.datasets[0],e=m.data.datasets[1];t.data=b,e.data=_}else{const t=m.data.datasets[0];t.data=c,t.borderColor=d.line,t.backgroundColor=a?"rgba(0,0,0,0)":d.fill,t.tension=.58,t.cubicInterpolationMode="monotone"}return m.options.plugins.zeroLine={enabled:a},m.options.scales={x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1},min:g,max:f}},void m.update("none")}m&&m.destroy();const y=t.getContext("2d");if(!y)return;const v=new bo(y,{type:"line",data:{labels:h,datasets:p?[{data:b,borderColor:"#8e66ff",backgroundColor:"rgba(142, 102, 255, 0.18)",fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:0,pointHoverRadius:0,pointBackgroundColor:"#8e66ff",pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6},{data:_,borderColor:"#5ea1ff",backgroundColor:"rgba(94, 161, 255, 0.18)",fill:!0,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:t=>t.dataIndex===u?1.4:0,pointHoverRadius:0,pointBackgroundColor:"#5ea1ff",pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6}]:[{data:c,borderColor:d.line,backgroundColor:a?"rgba(0,0,0,0)":d.fill,fill:!a,tension:.58,cubicInterpolationMode:"monotone",borderWidth:1.8,pointRadius:t=>t.dataIndex===u?1.4:0,pointHoverRadius:0,pointBackgroundColor:d.line,pointBorderColor:"rgba(0, 0, 0, 0.28)",pointBorderWidth:.6}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1},zeroLine:{enabled:a}},scales:{x:{display:!1,grid:{display:!1},border:{display:!1}},y:{display:!1,grid:{display:!1},border:{display:!1},min:g,max:f}},elements:{line:{capBezierPoints:!0}},layout:{padding:{top:3,right:0,bottom:3,left:0}}}});this._charts.set(s,v)});for(const[t,i]of this._charts.entries())e.has(t)||(i.destroy(),this._charts.delete(t))}async _ensureGraphHistory(t){const e=this._getGraphCacheKey(t);if(this._isGraphFresh(t)||this._graphFetchInFlight.has(e)||!this.hass)return;this._graphFetchInFlight.add(e);const i=new Date,s=new Date(i.getTime()-864e5);try{const n=await this.hass.callApi("GET",`history/period/${s.toISOString()}?filter_entity_id=${encodeURIComponent(t.entityId)}&end_time=${i.toISOString()}`),o=((null==n?void 0:n[0])||[]).map(t=>parseFloat(String(t.state))).filter(t=>Number.isFinite(t)).map(e=>t.invert?-e:e).map(e=>t.absolute?Math.abs(e):e),a=Math.max(28,Math.min(64,Math.round((this._width||320)/8))),r=this._downsamplePoints(o,a),l=this._smoothSeries(r,7);this._graphHistory[e]={points:l,fetchedAt:Date.now()}}catch(e){console.error("EnergyFlow: Graph history fetch failed",t,e)}finally{this._graphFetchInFlight.delete(e),this.requestUpdate()}}_renderPowerChart(t,e="solar-chart"){if(!t)return j``;const i=this._getGraphCacheKey(t),s=this._graphHistory[i];s&&this._isGraphFresh(t)||this._ensureGraphHistory(t);if(!((null==s?void 0:s.points)||[]).length)return j``;return j`
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
    `}_openEntityMoreInfo(t,e){null==e||e.stopPropagation(),t&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}_handleEntityKeyDown(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._openEntityMoreInfo(e,t))}_getGridDetailEntity(t){return this.config.grid_entity?this.config.grid_entity:t>10&&this.config.grid_import_entity?this.config.grid_import_entity:t<-10&&this.config.grid_export_entity?this.config.grid_export_entity:this.config.grid_import_entity||this.config.grid_export_entity}_getBatteryDetailEntity(){return this.config.battery_entity||this.config.battery_soc_entity}_formatPower(t){const e=Math.abs(t);return e>=1e3?`${(e/1e3).toFixed(1)} kW`:`${Math.round(e)} W`}_clamp(t,e=0,i=1){return Math.min(i,Math.max(e,t))}_mixHexColors(t,e,i){const s=this._clamp(i),n=t=>{const e=t.replace("#","");return 3===e.length?e.split("").map(t=>`${t}${t}`).join(""):e},o=n(t),a=n(e),r=parseInt(o.slice(0,2),16),l=parseInt(o.slice(2,4),16),c=parseInt(o.slice(4,6),16),h=parseInt(a.slice(0,2),16),d=parseInt(a.slice(2,4),16),u=parseInt(a.slice(4,6),16);return`#${[Math.round(r+(h-r)*s),Math.round(l+(d-l)*s),Math.round(c+(u-c)*s)].map(t=>t.toString(16).padStart(2,"0")).join("")}`}_withAlpha(t,e){const i=t.replace("#",""),s=3===i.length?i.split("").map(t=>`${t}${t}`).join(""):i;return`rgba(${parseInt(s.slice(0,2),16)}, ${parseInt(s.slice(2,4),16)}, ${parseInt(s.slice(4,6),16)}, ${this._clamp(e)})`}_getLogarithmicPowerRatio(t,e=1e4,i=250){const s=Math.abs(t);if(s<=0||e<=0||i<=0)return 0;const n=Math.min(s,e),o=Math.log1p(n/i),a=Math.log1p(e/i);return a<=0?0:this._clamp(o/a)}_getSolarPowerRatio(t){return this._getLogarithmicPowerRatio(t,1e4,120)}_getNeutralEnergyColor(){return"#273844"}_buildBackgroundGradient(t,e){const i=this._getNeutralEnergyColor(),s=this._getSolarPowerRatio(t),n=this._mixHexColors(i,e,.28),o=this._mixHexColors("#314652",e,.42),a=this._mixHexColors(i,e,.62);return`${t>10?`radial-gradient(circle at 50% -8%, ${this._withAlpha("#ffffff",.26+.26*s)} 0%, ${this._withAlpha(e,.18+.2*s)} 34%, rgba(0, 0, 0, 0) 66%)`:"radial-gradient(circle at 50% -8%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 66%)"}, ${t>10?`linear-gradient(180deg, ${this._withAlpha(e,.24+.14*s)} 0%, ${this._withAlpha(e,.08)} 42%, rgba(0, 0, 0, 0) 68%)`:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 68%)"}, linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 32%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(4, 10, 14, 0.18) 100%), ${`linear-gradient(180deg, ${n} 0%, ${o} 48%, ${a} 100%)`}`}_getFlowMode(t,e,i,s){const n=Math.max(120,.06*t),o=t>e+n;if(e>t+n){return Math.max(i,0)>=Math.max(s,0)?"deficit_grid":"deficit_battery"}if(o){return Math.max(-s,0)>=Math.max(-i,0)?"surplus_battery":"surplus_grid"}return"balanced"}_getFlowModeColor(t){switch(t){case"deficit_grid":return"#8f6dff";case"deficit_battery":return"#ff9e4a";case"surplus_battery":return"#35cfc5";case"surplus_grid":return"#4f90ff";default:return"#63c774"}}_getFlowModeLabel(t){switch(t){case"deficit_grid":return"Bezug";case"deficit_battery":return"Entladung";case"surplus_battery":return"Ladung";case"surplus_grid":return"Einspeisung";default:return"Balance"}}render(){if(!this.config)return j``;const t=this.hass,e=t?this._getState(this.config.solar_entity):0;let i=0;if(this.config.grid_entity)i=t?this._getState(this.config.grid_entity):0,this.config.inverted_grid&&(i=-i);else{i=this._getState(this.config.grid_import_entity)-this._getState(this.config.grid_export_entity)}let s=this._getState(this.config.battery_entity);const n=this._getState(this.config.battery_soc_entity),o=this.config.autarky_entity?this._getState(this.config.autarky_entity):null,a=this.config.self_consumption_entity?this._getState(this.config.self_consumption_entity):null;this.config.inverted_battery&&(s=-s);let r=0;r=this.config.home_entity?this._getState(this.config.home_entity):e+i+s,r=Math.abs(r);const l=!!this.config.battery_entity&&""!==this.config.battery_entity||!!this.config.battery_soc_entity&&""!==this.config.battery_soc_entity,c=s<-10,h=s>10,d=this._getFlowMode(e,r,i,s),u=this._getFlowModeColor(d),p=e>10,g=this._buildBackgroundGradient(e,u),f=this.config.solar_entity?this.hass.states[this.config.solar_entity]:void 0,m=this._getSolarEnergySummary(f),b=this.config.solar_entity?{entityId:this.config.solar_entity}:void 0,_=this.config.grid_entity?{entityId:this.config.grid_entity,centered:!0,invert:Boolean(this.config.inverted_grid)}:void 0,y=this.config.home_entity?{entityId:this.config.home_entity,absolute:!0,zeroMin:!0}:void 0,v=this.config.solar_entity,x=this.config.home_entity,w=this._getGridDetailEntity(i),k=this._getBatteryDetailEntity(),S=u,$=S,M=`${u}:${p?"pv":"no-pv"}`;if(M!==this._displayedGradientKey){const t=(this._activeIndex+1)%2;this._cachedGradients[t]=g,this._activeIndex=t,this._displayedGradientKey=M}const C=j`<ha-icon icon="mdi:solar-power-variant"></ha-icon>`,E=j`<ha-icon icon="mdi:transmission-tower"></ha-icon>`,A=j`<ha-icon icon="mdi:home"></ha-icon>`,T=this._height>0&&(this._height<120||this._width<200),P=this._height>0&&!T&&this._height<210;let I="mdi:battery";const D=10*Math.round(n/10);I=D<=0?"mdi:battery-outline":D>=100?"mdi:battery":`mdi:battery-${D}`,c?I="mdi:battery-arrow-up":h&&(I="mdi:battery-arrow-down");const O=j`<ha-icon icon="${I}"></ha-icon>`;return j`
      <ha-card class="${T?"tiny":""} ${P?"small":""}" style="--flow-accent: ${S}; --flow-accent-soft: ${this._mixHexColors(S,"#ffffff",.28)}; box-shadow: inset 0 0 0 1px ${this._withAlpha($,.42)}, 0 18px 36px ${this._withAlpha($,.14)};">
        <div class="bg-layer" style="background: ${this._cachedGradients[0]}; opacity: ${0===this._activeIndex?1:0}"></div>
        <div class="bg-layer" style="background: ${this._cachedGradients[1]}; opacity: ${1===this._activeIndex?1:0}"></div>
        
        <!-- Tiny Mode Battery Indicator (Top Right) -->
        ${T&&l?j`
            <div class="status-badge" style="position: absolute; top: 6px; right: 8px; z-index: 2; display: flex; align-items: center; gap: 4px;">
                <span style="color: ${n<20?"#ff3b30":"inherit"}; display: flex; width: 14px;">${O}</span>
                <span>${Math.round(n)}%</span>
            </div>
        `:""}

        <div class="content">
          ${T?"":j`
              <div class="header">
                <span class="title">${this.config.title}</span>
                <div class="badges">
                     ${null!==o?j`<span class="status-badge" title="Autarkie"><span class="badge-label">AUT</span> ${Math.round(o)}%</span>`:""}
                     ${null!==a?j`<span class="status-badge" title="Eigenverbrauch"><span class="badge-label">EIG</span> ${Math.round(a)}%</span>`:""}
                     <span class="status-badge flow-badge" style="background: ${this._withAlpha(S,.28)}; border-color: ${this._withAlpha(S,.55)}; color: white;">${this._getFlowModeLabel(d)}</span>
                     
                     <!-- Small Mode Battery Badge (Inline) -->
                     ${P&&l?j`
                        <span class="status-badge" style="display: inline-flex; align-items: center; gap: 4px; padding-left: 6px;">
                            <span style="color: ${n<20?"#ff3b30":"inherit"}; display: flex; width: 14px;">${O}</span>
                            ${Math.round(n)}%
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
                    class="icon-circle mini solar-icon ${v?"interactive-target":""}"
                    role="${v?"button":"img"}"
                    tabindex="${v?"0":"-1"}"
                    aria-label="${v?"Solarverlauf anzeigen":"Solar"}"
                    @click=${t=>this._openEntityMoreInfo(v,t)}
                    @keydown=${t=>this._handleEntityKeyDown(t,v)}
                  >${C}</div>
                  ${T?"":j`<div class="stat-label chip-label">Solar</div>`}
                </div>
                ${T||P?"":this._renderPowerChart(b,"solar-chart")}
                <div class="stat-value">${this._formatPower(e)}</div>
                ${m?j`<div class="stat-detail solar-detail">${m}</div>`:""}
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
                  ${T?"":j`<div class="stat-label chip-label">Haus</div>`}
                </div>
                ${T||P?"":this._renderPowerChart(y,"home-chart")}
                <div class="stat-value big">${this._formatPower(r)}</div>
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
                  >${E}</div>
                  ${T?"":j`<span class="stat-label chip-label">${i>0?"Netz (Bezug)":"Netz (Einsp.)"}</span>`}
                </div>
                ${T||P?"":this._renderPowerChart(_,"grid-centered-chart")}
                <div class="stat-value">${this._formatPower(Math.abs(i))}</div>
              </div>
            </div>
          </div>

          <!-- BATTERY (Bottom - Only Large Mode) -->
          ${!l||T||P?"":j`
            <div
                class="battery-section ${k?"interactive-target":""}"
                role="${k?"button":"group"}"
                tabindex="${k?"0":"-1"}"
                aria-label="${k?"Batterieverlauf anzeigen":"Batterie"}"
                @click=${t=>this._openEntityMoreInfo(k,t)}
                @keydown=${t=>this._handleEntityKeyDown(t,k)}
            >
                <div class="batt-info">
                   <span class="batt-icon" style="color: ${n<20?"#ff3b30":"inherit"}">${O}</span>
                   <span class="batt-pct">${Math.round(n)}%</span>
                   <span class="batt-power">${Math.abs(s)>0?this._formatPower(s):"Standby"}</span>
                   <span class="batt-state">${c?"Laden":h?"Entladen":""}</span>
                </div>
                <div class="batt-bar-bg">
                    <div class="batt-bar-fill" style="width: ${n}%; background: ${n<20?"linear-gradient(90deg, #ff453a 0%, #ff8a80 100%)":"linear-gradient(90deg, #4f95ff 0%, #8fbfff 100%)"}; box-shadow: 0 0 12px ${this._withAlpha(n<20?"#ff453a":"#4f95ff",.32)};"></div>
                </div>
            </div>
          `}

        </div>
      </ha-card>
    `}static get styles(){return o`
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
    `}}customElements.get("slick-energy-flow-card")||customElements.define("slick-energy-flow-card",ya);class va extends at{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config,...t.detail.value}},bubbles:!0,composed:!0}))}render(){if(!this.hass||!this._config)return j``;return j`<ha-form .hass=${this.hass} .data=${this._config} .schema=${[{name:"title",label:"Titel",selector:{text:{}}},{name:"solar_entity",label:"Solar Leistung",selector:{entity:{domain:"sensor"}}},{name:"solar_today_energy_entity",label:"Solar Erzeugt heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"solar_total_energy_entity",label:"Solar Gesamtzähler (Opt, seit 0 Uhr berechnen)",selector:{entity:{domain:"sensor"}}},{name:"solar_expected_energy_entity",label:"Solar Erwartet heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"solar_remaining_energy_entity",label:"Solar Rest heute (kWh, Opt)",selector:{entity:{domain:"sensor"}}},{name:"grid_entity",label:"Netz Leistung",selector:{entity:{domain:"sensor"}}},{name:"battery_entity",label:"Batterie Leistung (Opt)",selector:{entity:{domain:"sensor"}}},{name:"battery_soc_entity",label:"Batterie Stand % (Opt)",selector:{entity:{domain:"sensor"}}},{name:"home_entity",label:"Haus Verbrauch (Opt)",selector:{entity:{domain:"sensor"}}},{name:"inverted_grid",label:"Invertiere Grid (+ ist Export)",selector:{boolean:{}}},{name:"inverted_battery",label:"Invertiere Batt (+ ist Laden)",selector:{boolean:{}}}]} .computeLabel=${t=>t.label} @value-changed=${this._valueChanged}></ha-form>`}}customElements.get("slick-energy-flow-card-editor")||customElements.define("slick-energy-flow-card-editor",va),window.customCards=window.customCards||[],window.customCards.push({type:"slick-energy-flow-card",name:"Slick Energy Flow",preview:!0,description:"Modern energy flow visualization."});console.info("%c PERSON-CARD %c 0.2.0 ","color: white; background: #9c27b0; font-weight: 700;","color: #9c27b0; background: white; font-weight: 700;");class xa extends at{static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-person-card-editor")}static getStubConfig(t){let e=[];return t&&t.states&&(e=Object.keys(t.states).filter(t=>t.startsWith("person."))),{type:"custom:slick-person-card",people:e,layout:"wrap"}}getCardSize(){return 1}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={layout:"wrap",...t};if(!e.entity||e.people&&0!==e.people.length||(e.people=[e.entity]),e.layout&&!["wrap","horizontal"].includes(e.layout))throw new Error("layout must be wrap or horizontal");this.config=e}render(){if(!this.config)return j``;if(!this.hass)return j`<ha-card style="padding: 10px;">Loading persons...</ha-card>`;const t="horizontal"===this.config.layout,e=this.config.people||[],i="\n      width: 38px;\n      height: 38px;\n      border-radius: 50%;\n    ";return j`
      <div class="person-container ${t?"horizontal":""}">
        ${e.map(t=>{const e=this.hass.states[t];if(!e)return j`
            <div class="person-card away" style="${i}; display: flex; align-items: center; justify-content: center; background-color: #555;">
               <span style="font-size: 0.5em; text-align: center; color: white;">?</span>
            </div>
          `;const s="home"===e.state,n=e.attributes.entity_picture;return j`
            <div class="person-card ${s?"home":"away"}" 
                 style="background-image: url('${n}'); ${i}">
            </div>
          `})}
      </div>
    `}}xa.styles=o`
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
  `,customElements.get("slick-person-card")||customElements.define("slick-person-card",xa);class wa extends at{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){const e={...t};!e.entity||e.people&&0!==e.people.length||(e.people=[e.entity]),this._config=e}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;this._config=e;const i=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return j``;return j`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"people",label:"People",selector:{entity:{domain:["person","device_tracker"],multiple:!0}}},{name:"layout",label:"Layout",selector:{select:{mode:"dropdown",options:[{value:"wrap",label:"Wrap (Grid)"},{value:"horizontal",label:"Horizontal Scroll (Chips)"}]}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-person-card-editor")||customElements.define("slick-person-card-editor",wa),window.customCards=window.customCards||[],window.customCards.push({type:"slick-person-card",name:"Slick Person",preview:!0,description:"A round person badge/card."}),window.customBadges=window.customBadges||[],window.customBadges.push({type:"slick-person-card",name:"Slick Person Badge",description:"A round person badge.",preview:!0});console.info("%c VACUUM-CARD %c 0.2.0 ","color: white; background: #673ab7; font-weight: 700;","color: #673ab7; background: white; font-weight: 700;");class ka extends at{constructor(){super(...arguments),this._tempTime=null,this._touchStartState=null,this._discoveredBatteryEntity=null,this._discoveredRoomEntity=null,this._deviceAreaName=null,this._discoveryAttempted=!1,this._swipeOffset=0,this._isSwiping=!1,this._swipeStartX=0,this._isTriggered=!1,this._isCompact=!1,this._isShort=!1,this._isTiny=!1,this._inputStartY=0,this._inputTargetString=null,this._isDragging=!1}static get properties(){return{hass:{attribute:!1},config:{state:!0},_tempTime:{state:!0},_discoveredBatteryEntity:{state:!0},_discoveredRoomEntity:{state:!0},_deviceAreaName:{state:!0},_swipeOffset:{state:!0},_isCompact:{state:!0},_isShort:{state:!0},_isTiny:{state:!0},_isTriggered:{state:!0}}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect.width,i=e.contentRect.height;this._isCompact=t<300,this._isShort=i<180,this._isTiny=i<100}}),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect(),super.disconnectedCallback()}static getStubConfig(){return{type:"custom:slick-vacuum-card",entity:"vacuum.robotic_vacuum_cleaner",start_button_entity:"input_button.start_vacuum_eg",automation_entity:"automation.bodenreinigung_erdgeschoss",schedule_time_entity:"input_datetime.staubsauger_start"}}static getConfigElement(){return document.createElement("slick-vacuum-card-editor")}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("Entity is required");this.config&&this.config.entity!==t.entity&&(this._discoveredBatteryEntity=null,this._discoveredRoomEntity=null,this._deviceAreaName=null,this._discoveryAttempted=!1),this.config=t}shouldUpdate(t){return!(!this.config||!this.hass)}updated(t){var e;super.updated(t),this._discoveredBatteryEntity&&this._discoveredRoomEntity&&this._deviceAreaName||this._discoveryAttempted||!this.hass||!(null===(e=this.config)||void 0===e?void 0:e.entity)||(this._discoveryAttempted=!0,this._fetchRelatedEntities())}async _fetchRelatedEntities(){try{const t=await this.hass.callWS({type:"search/related",item_type:"entity",item_id:this.config.entity});if(!t||!t.device||0===t.device.length)return;const e=t.device[0];if(this.hass.devices&&this.hass.areas){const t=this.hass.devices[e];if(t&&t.area_id){const e=this.hass.areas[t.area_id];e&&e.name&&(this._deviceAreaName=e.name,console.debug("VacuumCard: Discovered device area",this._deviceAreaName))}}const i=await this.hass.callWS({type:"search/related",item_type:"device",item_id:e});if(!i||!i.entity)return;const s=i.entity;if(!this._discoveredBatteryEntity){const t=s.filter(t=>{const e=this.hass.states[t];return!!t.startsWith("sensor.")&&(!!e&&("battery"===e.attributes.device_class||!!t.includes("battery")))});if(t.length>0){const e=t.find(t=>"battery"===this.hass.states[t].attributes.device_class)||t[0];this._discoveredBatteryEntity=e,console.debug("VacuumCard: Discovered battery entity",e)}}if(!this._discoveredRoomEntity){const t=s.filter(t=>{const e=this.hass.states[t];if(!t.startsWith("sensor."))return!1;if(!e)return!1;const i=t.toLowerCase();return i.includes("room")||i.includes("raum")||i.includes("zone")||i.includes("aktueller_raum")});t.length>0&&(this._discoveredRoomEntity=t[0],console.debug("VacuumCard: Discovered room entity",this._discoveredRoomEntity))}}catch(t){console.warn("VacuumCard: Error discovering related entities",t)}}_getActionMode(){const t=this.hass.states[this.config.entity];return t?["cleaning","error","paused"].includes(t.state)?"return":"docked"===t.state?"start":"none":"none"}_checkAutomationButtonVisibility(){return!!this.config.automation_entity}_handleStartClean(t){t&&t.stopPropagation(),this.config.start_button_entity?this.hass.callService("input_button","press",{entity_id:this.config.start_button_entity}):this.hass.callService("vacuum","start",{entity_id:this.config.entity})}_handleReturnHome(t){t&&t.stopPropagation(),this.hass.callService("vacuum","return_to_base",{entity_id:this.config.entity})}_handleMoreInfo(t){if(t.composedPath().some(t=>t.classList&&t.classList.contains("actions")))return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleToggleAutomation(t){t&&t.stopPropagation(),this.config.automation_entity&&this.hass.callService("automation","toggle",{entity_id:this.config.automation_entity})}_getDateTimeParts(){if(!this.config.schedule_time_entity)return null;const t=this.hass.states[this.config.schedule_time_entity];if(!t)return null;let{hour:e,minute:i}=t.attributes;if(void 0===e||void 0===i){const s=t.state.split(":");if(!(s.length>=2))return null;e=parseInt(s[0]),i=parseInt(s[1])}return{hour:e,minute:i}}_onInputStart(t,e){if(0!==t.button&&1!==t.buttons)return;t.currentTarget.setPointerCapture(t.pointerId),this._isDragging=!0,this._inputStartY=t.clientY,this._inputTargetString=e;const i=this._getDateTimeParts();i&&(this._touchStartState=i,this._tempTime={...i})}_onInputMove(t){if(!(this._isDragging&&this._inputTargetString&&this._touchStartState&&this._tempTime))return;t.preventDefault();const e=t.clientY,i=this._inputStartY-e,s=Math.round(i/15);if(0!==s)if("hour"===this._inputTargetString){let t=(this._touchStartState.hour+s)%24;t<0&&(t+=24),this._tempTime={...this._tempTime,hour:t}}else{let t=(this._touchStartState.minute+s)%60;t<0&&(t+=60),this._tempTime={...this._tempTime,minute:t}}}_onInputEnd(t){if(!this._isDragging)return;this._isDragging=!1;if(t.currentTarget.releasePointerCapture(t.pointerId),!this._inputTargetString||!this._tempTime)return void this._cleanupInput();const{hour:e,minute:i}=this._tempTime,s=`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:00`;this.hass.callService("input_datetime","set_datetime",{entity_id:this.config.schedule_time_entity,time:s}),this._cleanupInput()}_cleanupInput(){this._inputTargetString=null,this._tempTime=null,this._touchStartState=null}_onSwipeStart(t){if(0!==t.button&&1!==t.buttons)return;t.currentTarget.setPointerCapture(t.pointerId),this._isSwiping=!0,this._swipeStartX=t.clientX,this._swipeOffset=0}_onSwipeMove(t){if(!this._isSwiping)return;const e=t.currentTarget,i=e.parentElement;if(!i)return;const s=t.clientX-this._swipeStartX,n=i.clientWidth-e.clientWidth-8,o=Math.max(0,Math.min(s,n));this._swipeOffset=o}_onSwipeEnd(t){if(!this._isSwiping)return;this._isSwiping=!1;const e=t.currentTarget;e.releasePointerCapture(t.pointerId);const i=e.parentElement;if(i){const t=i.clientWidth-e.clientWidth-8;if(this._swipeOffset>.9*t&&!this._isTriggered){const t=this._getActionMode();this._isTriggered=!0,"start"===t?this._handleStartClean():"return"===t&&this._handleReturnHome(),navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{this._isTriggered=!1,this._swipeOffset=0},4e3)}}this._isTriggered||(this._swipeOffset=0)}_getStatusIcon(t){switch(t){case"cleaning":default:return"mdi:robot-vacuum";case"docked":return"mdi:robot-vacuum-off";case"returning":return"mdi:home-import-outline";case"error":return"mdi:alert-circle";case"paused":return"mdi:pause-circle";case"idle":return"mdi:robot-vacuum-variant"}}_getStatusLabel(t){switch(t){case"cleaning":return"Cleaning";case"docked":return"Docked";case"returning":return"Returning";case"error":return"Error";case"paused":return"Paused";case"idle":return"Idle";default:return t}}render(){var t;if(!this.config||!this.hass)return j``;const e=this.hass.states[this.config.entity];if(!e)return j`<div>Vacuum not found</div>`;const i=e.state,s=e.attributes;let n=null;if(this._discoveredBatteryEntity){const t=this.hass.states[this._discoveredBatteryEntity];t&&!isNaN(parseFloat(t.state))&&(n=Math.round(parseFloat(t.state)))}if(null===n){const t=void 0!==s.battery_level?s.battery_level:s.battery;if(void 0!==t){const e=parseFloat(t);isNaN(e)||(n=Math.round(e))}}let o="mdi:battery-unknown";null!==n&&(o=n>=90?"mdi:battery":n>=70?"mdi:battery-80":n>=50?"mdi:battery-50":n>=30?"mdi:battery-40":"mdi:battery-20");const a=this._getStatusLabel(i);let r=null;if(this._discoveredRoomEntity){const t=this.hass.states[this._discoveredRoomEntity];t&&t.state&&"unknown"!==t.state&&"unavailable"!==t.state&&(r=t.state)}!r&&this._deviceAreaName&&(r=this._deviceAreaName);const l=s.friendly_name||this.config.entity,c=[s.cleaned_area?`${s.cleaned_area} m²`:null,s.cleaning_time?`${s.cleaning_time} min`:null].filter(Boolean).join(" • ");let h="--",d="--";if(this._tempTime)h=this._tempTime.hour.toString().padStart(2,"0"),d=this._tempTime.minute.toString().padStart(2,"0");else{const t=this._getDateTimeParts();t&&(h=t.hour.toString().padStart(2,"0"),d=t.minute.toString().padStart(2,"0"))}const u=this.config.automation_entity?null===(t=this.hass.states[this.config.automation_entity])||void 0===t?void 0:t.state:"off";let p="rgba(55, 71, 79, 0.25)";["cleaning","returning"].includes(i)?p="rgba(33, 150, 243, 0.25)":"error"===i&&(p="rgba(244, 67, 54, 0.25)");let g="rgba(158, 158, 158, 0.25)";null!==n&&(g=n>=80?"rgba(76, 175, 80, 0.25)":n>=40?"rgba(255, 193, 7, 0.25)":"rgba(244, 67, 54, 0.25)");const f=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||"#fff",m=this._getActionMode();return j`
      <div class="vacuum-card-container ${this._isTiny?"tiny":this._isShort?"short":""}" 
           style="background: linear-gradient(to bottom, ${p} 0%, ${g} 100%), ${f};"
           @click=${this._handleMoreInfo}>
        <div class="header">
          <div class="icon-container state-${i}">
            <ha-icon icon="${this._getStatusIcon(i)}"></ha-icon>
          </div>
          <div class="info">
             <div class="status">${l}</div>
             ${this._isShort?j`
                 <!-- Short Mode: Condensed Info -->
                 <div class="room" style="font-size: 0.9rem; opacity: 0.8;">
                    ${a} 
                    ${null!==n?j` • ${n}%`:""}
                 </div>
             `:j`
                 <div class="room">${a} ${r?j`${r}`:""}</div>
                 <div class="battery">
                   ${null!==n?j`<ha-icon icon="${o}"></ha-icon> ${n}%`:""} 
                   ${!r&&s.fan_speed?`• ${s.fan_speed}`:""}
                 </div>
                 ${c?j`<div class="stats">${c}</div>`:""}
             `}
          </div>
        </div>

        <div class="actions">
          ${"none"===m||this._isTriggered?"":this._isCompact?j`
            <div class="action-btn ${"start"===m?"start-btn":"return-btn"}" 
                 @click=${"start"===m?this._handleStartClean:this._handleReturnHome}>
                <ha-icon icon="${"start"===m?"mdi:play":"mdi:home-import-outline"}"></ha-icon>
            </div>
          `:j`
            <div class="swipe-slider ${"return"===m?"return-mode":""}">
               <div class="slide-track" style="opacity: ${Math.max(0,1-this._swipeOffset/150)}">
                   ${"start"===m?"Slide to Start":"Slide to Return"}
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
          
          ${this._isTriggered?j`
             <div class="swipe-slider triggered">
                 <div class="dots-loader">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                 </div>
             </div>
          `:""}

          ${this.config.schedule_time_entity&&!this._isShort?j`
            <div class="time-picker">
              <div class="time-label">SCHEDULE</div>
              <div class="time-values">
                <div class="time-inputs">
                    <div class="time-column" 
                         @pointerdown=${t=>this._onInputStart(t,"hour")}
                         @pointermove=${t=>this._onInputMove(t)}
                         @pointerup=${t=>this._onInputEnd(t)}
                         @pointercancel=${t=>this._onInputEnd(t)}>
                      ${h}
                    </div>
                    <div class="time-sep">:</div>
                    <div class="time-column"
                         @pointerdown=${t=>this._onInputStart(t,"minute")}
                         @pointermove=${t=>this._onInputMove(t)}
                         @pointerup=${t=>this._onInputEnd(t)}
                         @pointercancel=${t=>this._onInputEnd(t)}>
                      ${d}
                    </div>
                </div>

                ${this._checkAutomationButtonVisibility()?j`
                    <div class="sparkle-btn ${"on"===u?"active":""}" 
                         @click=${this._handleToggleAutomation}>
                       <ha-icon icon="mdi:auto-fix"></ha-icon>
                    </div>
                 `:""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}}ka.styles=o`
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
  `;class Sa extends at{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return j``;return j`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"entity",label:"Vacuum Entity",selector:{entity:{domain:"vacuum"}}},{name:"start_button_entity",label:"Start Button",selector:{entity:{domain:"input_button"}}},{name:"automation_entity",label:"Automation",selector:{entity:{domain:"automation"}}},{name:"schedule_time_entity",label:"Schedule Time",selector:{entity:{domain:"input_datetime"}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-vacuum-card")||customElements.define("slick-vacuum-card",ka),customElements.get("slick-vacuum-card-editor")||customElements.define("slick-vacuum-card-editor",Sa),window.customCards=window.customCards||[],window.customCards.push({type:"slick-vacuum-card",name:"Slick Vacuum Card",preview:!0,description:"A card for controlling a vacuum robot."});console.info("%c MOWER-CARD %c 0.2.0 ","color: white; background: #673ab7; font-weight: 700;","color: #673ab7; background: white; font-weight: 700;");class $a extends at{constructor(){super(...arguments),this._tempTime=null,this._touchStartState=null,this._discoveredBatteryEntity=null,this._discoveredRoomEntity=null,this._deviceAreaName=null,this._discoveryAttempted=!1,this._swipeOffset=0,this._isSwiping=!1,this._swipeStartX=0,this._isTriggered=!1,this._isCompact=!1,this._isShort=!1,this._isTiny=!1,this._inputStartY=0,this._inputTargetString=null,this._isDragging=!1}static get properties(){return{hass:{attribute:!1},config:{state:!0},_tempTime:{state:!0},_discoveredBatteryEntity:{state:!0},_discoveredRoomEntity:{state:!0},_deviceAreaName:{state:!0},_swipeOffset:{state:!0},_isCompact:{state:!0},_isShort:{state:!0},_isTiny:{state:!0},_isTriggered:{state:!0}}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const t=e.contentRect.width,i=e.contentRect.height;this._isCompact=t<300,this._isShort=i<200,this._isTiny=i<100}}),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver&&this._resizeObserver.disconnect(),super.disconnectedCallback()}static getStubConfig(){return{type:"custom:slick-mower-card",entity:"lawn_mower.smart_mower",start_button_entity:"input_button.start_mowing",automation_entity:"automation.mowing_schedule",schedule_time_entity:"input_datetime.mower_start_time"}}static getConfigElement(){return document.createElement("slick-mower-card-editor")}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity)throw new Error("Entity is required");this.config&&this.config.entity!==t.entity&&(this._discoveredBatteryEntity=null,this._discoveredRoomEntity=null,this._deviceAreaName=null,this._discoveryAttempted=!1),this.config=t}shouldUpdate(t){return!(!this.config||!this.hass)}updated(t){var e;super.updated(t),this._discoveredBatteryEntity&&this._discoveredRoomEntity&&this._deviceAreaName||this._discoveryAttempted||!this.hass||!(null===(e=this.config)||void 0===e?void 0:e.entity)||(this._discoveryAttempted=!0,this._fetchRelatedEntities())}async _fetchRelatedEntities(){try{const t=await this.hass.callWS({type:"search/related",item_type:"entity",item_id:this.config.entity});if(!t||!t.device||0===t.device.length)return;const e=t.device[0];if(this.hass.devices&&this.hass.areas){const t=this.hass.devices[e];if(t&&t.area_id){const e=this.hass.areas[t.area_id];e&&e.name&&(this._deviceAreaName=e.name,console.debug("MowerCard: Discovered device area",this._deviceAreaName))}}const i=await this.hass.callWS({type:"search/related",item_type:"device",item_id:e});if(!i||!i.entity)return;const s=i.entity;if(!this._discoveredBatteryEntity){const t=s.filter(t=>{const e=this.hass.states[t];return!!t.startsWith("sensor.")&&(!!e&&("battery"===e.attributes.device_class||!!t.includes("battery")))});if(t.length>0){const e=t.find(t=>"battery"===this.hass.states[t].attributes.device_class)||t[0];this._discoveredBatteryEntity=e,console.debug("MowerCard: Discovered battery entity",e)}}if(!this._discoveredRoomEntity){const t=s.filter(t=>{const e=this.hass.states[t];if(!t.startsWith("sensor."))return!1;if(!e)return!1;const i=t.toLowerCase();return i.includes("zone")||i.includes("lawn")||i.includes("rasen")||i.includes("area")});t.length>0&&(this._discoveredRoomEntity=t[0],console.debug("MowerCard: Discovered zone entity",this._discoveredRoomEntity))}}catch(t){console.warn("MowerCard: Error discovering related entities",t)}}_getActionMode(){const t=this.hass.states[this.config.entity];return t?["mowing","error","paused"].includes(t.state)?"return":"docked"===t.state||"idle"===t.state?"start":"none":"none"}_checkAutomationButtonVisibility(){return!!this.config.automation_entity}_handleStartMowing(t){t&&t.stopPropagation(),this.config.start_button_entity?this.hass.callService("input_button","press",{entity_id:this.config.start_button_entity}):this.config.entity.startsWith("lawn_mower.")?this.hass.callService("lawn_mower","start_mowing",{entity_id:this.config.entity}):this.hass.callService("vacuum","start",{entity_id:this.config.entity})}_handleReturnHome(t){t&&t.stopPropagation(),this.config.entity.startsWith("lawn_mower.")?this.hass.callService("lawn_mower","dock",{entity_id:this.config.entity}):this.hass.callService("vacuum","return_to_base",{entity_id:this.config.entity})}_handleMoreInfo(t){if(t.composedPath().some(t=>t.classList&&t.classList.contains("actions")))return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.config.entity},bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleToggleAutomation(t){t&&t.stopPropagation(),this.config.automation_entity&&this.hass.callService("automation","toggle",{entity_id:this.config.automation_entity})}_getDateTimeParts(){if(!this.config.schedule_time_entity)return null;const t=this.hass.states[this.config.schedule_time_entity];if(!t)return null;let{hour:e,minute:i}=t.attributes;if(void 0===e||void 0===i){const s=t.state.split(":");if(!(s.length>=2))return null;e=parseInt(s[0]),i=parseInt(s[1])}return{hour:e,minute:i}}_onInputStart(t,e){if(0!==t.button&&1!==t.buttons)return;t.currentTarget.setPointerCapture(t.pointerId),this._isDragging=!0,this._inputStartY=t.clientY,this._inputTargetString=e;const i=this._getDateTimeParts();i&&(this._touchStartState=i,this._tempTime={...i})}_onInputMove(t){if(!(this._isDragging&&this._inputTargetString&&this._touchStartState&&this._tempTime))return;t.preventDefault();const e=t.clientY,i=this._inputStartY-e,s=Math.round(i/15);if(0!==s)if("hour"===this._inputTargetString){let t=(this._touchStartState.hour+s)%24;t<0&&(t+=24),this._tempTime={...this._tempTime,hour:t}}else{let t=(this._touchStartState.minute+s)%60;t<0&&(t+=60),this._tempTime={...this._tempTime,minute:t}}}_onInputEnd(t){if(!this._isDragging)return;this._isDragging=!1;if(t.currentTarget.releasePointerCapture(t.pointerId),!this._inputTargetString||!this._tempTime)return void this._cleanupInput();const{hour:e,minute:i}=this._tempTime,s=`${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:00`;this.hass.callService("input_datetime","set_datetime",{entity_id:this.config.schedule_time_entity,time:s}),this._cleanupInput()}_cleanupInput(){this._inputTargetString=null,this._tempTime=null,this._touchStartState=null}_onSwipeStart(t){if(0!==t.button&&1!==t.buttons)return;t.currentTarget.setPointerCapture(t.pointerId),this._isSwiping=!0,this._swipeStartX=t.clientX,this._swipeOffset=0}_onSwipeMove(t){if(!this._isSwiping)return;const e=t.currentTarget,i=e.parentElement;if(!i)return;const s=t.clientX-this._swipeStartX,n=i.clientWidth-e.clientWidth-8,o=Math.max(0,Math.min(s,n));this._swipeOffset=o}_onSwipeEnd(t){if(!this._isSwiping)return;this._isSwiping=!1;const e=t.currentTarget;e.releasePointerCapture(t.pointerId);const i=e.parentElement;if(i){const t=i.clientWidth-e.clientWidth-8;if(this._swipeOffset>.9*t&&!this._isTriggered){const t=this._getActionMode();this._isTriggered=!0,"start"===t?this._handleStartMowing():"return"===t&&this._handleReturnHome(),navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{this._isTriggered=!1,this._swipeOffset=0},4e3)}}this._isTriggered||(this._swipeOffset=0)}_getStatusIcon(t){switch(t){case"mowing":default:return"mdi:robot-mower";case"docked":case"idle":return"mdi:robot-mower-outline";case"returning":return"mdi:home-import-outline";case"error":return"mdi:alert-circle";case"paused":return"mdi:pause-circle"}}_getStatusLabel(t){switch(t){case"mowing":return"Mowing";case"docked":return"Docked";case"returning":return"Returning";case"error":return"Error";case"paused":return"Paused";case"idle":return"Idle";default:return t}}render(){var t;if(!this.config||!this.hass)return j``;const e=this.hass.states[this.config.entity];if(!e)return j`<div>Mower not found</div>`;const i=e.state,s=e.attributes;let n=null;if(this._discoveredBatteryEntity){const t=this.hass.states[this._discoveredBatteryEntity];t&&!isNaN(parseFloat(t.state))&&(n=Math.round(parseFloat(t.state)))}if(null===n){const t=void 0!==s.battery_level?s.battery_level:s.battery;if(void 0!==t){const e=parseFloat(t);isNaN(e)||(n=Math.round(e))}}let o="mdi:battery-unknown";null!==n&&(o=n>=90?"mdi:battery":n>=70?"mdi:battery-80":n>=50?"mdi:battery-50":n>=30?"mdi:battery-40":"mdi:battery-20");const a=this._getStatusLabel(i);let r=null;if(this._discoveredRoomEntity){const t=this.hass.states[this._discoveredRoomEntity];t&&t.state&&"unknown"!==t.state&&"unavailable"!==t.state&&(r=t.state)}!r&&this._deviceAreaName&&(r=this._deviceAreaName);const l=s.friendly_name||this.config.entity,c=[s.mowed_area?`${s.mowed_area} m²`:null,s.mowing_time?`${s.mowing_time} min`:null].filter(Boolean).join(" • ");let h="--",d="--";if(this._tempTime)h=this._tempTime.hour.toString().padStart(2,"0"),d=this._tempTime.minute.toString().padStart(2,"0");else{const t=this._getDateTimeParts();t&&(h=t.hour.toString().padStart(2,"0"),d=t.minute.toString().padStart(2,"0"))}const u=this.config.automation_entity?null===(t=this.hass.states[this.config.automation_entity])||void 0===t?void 0:t.state:"off";let p="rgba(55, 71, 79, 0.25)";["mowing","returning"].includes(i)?p="rgba(76, 175, 80, 0.25)":"error"===i&&(p="rgba(244, 67, 54, 0.25)");let g="rgba(158, 158, 158, 0.25)";null!==n&&(g=n>=80?"rgba(76, 175, 80, 0.25)":n>=40?"rgba(255, 193, 7, 0.25)":"rgba(244, 67, 54, 0.25)");const f=getComputedStyle(document.body).getPropertyValue("--ha-card-background")||"#fff",m=this._getActionMode();return j`
      <div class="mower-card-container ${this._isTiny?"tiny":this._isShort?"short":""}" 
           style="background: linear-gradient(to bottom, ${p} 0%, ${g} 100%), ${f};"
           @click=${this._handleMoreInfo}>
        <div class="header">
          <div class="icon-container state-${i}">
            <ha-icon icon="${this._getStatusIcon(i)}"></ha-icon>
          </div>
          <div class="info">
             <div class="status">${l}</div>
             ${this._isShort?j`
                 <!-- Short Mode: Condensed Info -->
                 <div class="room" style="font-size: 0.9rem; opacity: 0.8;">
                    ${a} 
                    ${null!==n?j` • ${n}%`:""}
                 </div>
             `:j`
                 <div class="room">${a} ${r?j`${r}`:""}</div>
                 <div class="battery">
                   ${null!==n?j`<ha-icon icon="${o}"></ha-icon> ${n}%`:""} 
                   ${!r&&s.fan_speed?`• ${s.fan_speed}`:""}
                 </div>
                 ${c?j`<div class="stats">${c}</div>`:""}
             `}
          </div>
        </div>

        <div class="actions">
          ${"none"===m||this._isTriggered?"":this._isCompact?j`
            <div class="action-btn ${"start"===m?"start-btn":"return-btn"}" 
                 @click=${"start"===m?this._handleStartMowing:this._handleReturnHome}>
                <ha-icon icon="${"start"===m?"mdi:play":"mdi:home-import-outline"}"></ha-icon>
            </div>
          `:j`
            <div class="swipe-slider ${"return"===m?"return-mode":""}">
               <div class="slide-track" style="opacity: ${Math.max(0,1-this._swipeOffset/150)}">
                   ${"start"===m?"Slide to Mow":"Slide to Return"}
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
          
          ${this._isTriggered?j`
             <div class="swipe-slider triggered">
                 <div class="dots-loader">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                 </div>
             </div>
          `:""}

          ${this.config.schedule_time_entity&&!this._isShort?j`
            <div class="time-picker">
              <div class="time-label">SCHEDULE</div>
              <div class="time-values">
                <div class="time-inputs">
                    <div class="time-column" 
                         @pointerdown=${t=>this._onInputStart(t,"hour")}
                         @pointermove=${t=>this._onInputMove(t)}
                         @pointerup=${t=>this._onInputEnd(t)}
                         @pointercancel=${t=>this._onInputEnd(t)}>
                      ${h}
                    </div>
                    <div class="time-sep">:</div>
                    <div class="time-column"
                         @pointerdown=${t=>this._onInputStart(t,"minute")}
                         @pointermove=${t=>this._onInputMove(t)}
                         @pointerup=${t=>this._onInputEnd(t)}
                         @pointercancel=${t=>this._onInputEnd(t)}>
                      ${d}
                    </div>
                </div>

                ${this._checkAutomationButtonVisibility()?j`
                    <div class="sparkle-btn ${"on"===u?"active":""}" 
                         @click=${this._handleToggleAutomation}>
                       <ha-icon icon="mdi:auto-fix"></ha-icon>
                    </div>
                 `:""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}}$a.styles=o`
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
  `;class Ma extends at{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return j``;return j`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"entity",label:"Mower Entity",selector:{entity:{domain:["lawn_mower","vacuum"]}}},{name:"start_button_entity",label:"Start Button",selector:{entity:{domain:"input_button"}}},{name:"automation_entity",label:"Automation",selector:{entity:{domain:"automation"}}},{name:"schedule_time_entity",label:"Schedule Time",selector:{entity:{domain:"input_datetime"}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-mower-card")||customElements.define("slick-mower-card",$a),customElements.get("slick-mower-card-editor")||customElements.define("slick-mower-card-editor",Ma),window.customCards=window.customCards||[],window.customCards.push({type:"slick-mower-card",name:"Slick Mower Card",preview:!0,description:"A card for controlling a lawn mower."});console.info("%c NOTIFICATION-BADGE-CARD %c 0.2.0 ","color: white; background: #e91e63; font-weight: 700;","color: #e91e63; background: white; font-weight: 700;");class Ca extends at{static get properties(){return{hass:{attribute:!1},config:{state:!0}}}static getConfigElement(){return document.createElement("slick-notification-badge-card-editor")}static getStubConfig(){return{type:"custom:slick-notification-badge-card",calendars:[],entities:[]}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config=t}_getDaysUntil(t){const e=new Date,i=new Date(t),s=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()-s.getTime();return Math.ceil(n/864e5)}_handleEntityTap(t){this.hass.callService("homeassistant","turn_off",{entity_id:t})}_handleCalendarTap(t){const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){if(!this.config||!this.hass)return j``;const t=[],e=[];this.config.calendars&&this.config.calendars.forEach(e=>{var i;const s=this.hass.states[e.entity];if(!s)return;const n=s.attributes.start_time;if(!n)return;const o=this._getDaysUntil(n),a=null!==(i=e.days)&&void 0!==i?i:7;if(o>=0&&o<=a){const i=(s.attributes.message||"").toLowerCase();let n=e.color||"var(--primary-color)";if(e.rules)for(const t of e.rules)if(i.includes(t.pattern.toLowerCase())){n=t.color;break}t.push({type:"calendar",entity:e.entity,icon:e.icon||"mdi:calendar",label:0===o?"":o.toString(),color:n,active:!0,title:s.attributes.message,entityPicture:null})}}),this.config.entities&&this.config.entities.forEach(t=>{const i=this.hass.states[t.entity];if(i&&("on"===i.state||"active"===i.state||"home"===i.state)){const s=!!i.attributes.entity_picture;e.push({type:"entity",entity:t.entity,icon:t.icon||i.attributes.icon||"mdi:alert-circle",label:"",color:t.color||"#ff9800",active:!0,title:i.attributes.friendly_name,entityPicture:s?i.attributes.entity_picture:null})}});const i=[...e,...t];return 0===i.length?j``:j`
      <div class="badge-container">
        ${i.map(t=>j`
            <div class="badge ${t.type}" 
                 style="background: ${t.color}; border-color: ${t.color}"
                 title="${t.title} (${t.entity})"
                 @click=${()=>"entity"===t.type?this._handleEntityTap(t.entity):this._handleCalendarTap(t.entity)}>
               
               ${t.entityPicture?j`
                   <div class="badge-icon-img" style="background-image: url('${t.entityPicture}')"></div>
               `:j`
                   <ha-icon icon="${t.icon}" style="color: white; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));"></ha-icon>
               `}

               ${t.label?j`<div class="badge-label">${t.label}</div>`:""}
            </div>
        `)}
      </div>
    `}}Ca.styles=o`
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
  `;class Ea extends at{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return j``;return j`
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
    `}}customElements.get("slick-notification-badge-card")||customElements.define("slick-notification-badge-card",Ca),customElements.get("slick-notification-badge-card-editor")||customElements.define("slick-notification-badge-card-editor",Ea),window.customCards=window.customCards||[],window.customCards.push({type:"slick-notification-badge-card",name:"Slick Notification Badge",preview:!0,description:"Displays badges for calendar events and active entities."}),window.customBadges=window.customBadges||[],window.customBadges.push({type:"slick-notification-badge-card",name:"Slick Notification Badge",preview:!0,description:"Displays badges for calendar events and active entities."});class Aa extends at{static get properties(){return{hass:{attribute:!1},_config:{state:!0}}}setConfig(t){this._config=t}_valueChanged(t){const e={...this._config,...t.detail.value},i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return j``;return j`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${[{name:"entity",label:"Light Entity",selector:{entity:{domain:"light"}}},{name:"name",label:"Name (Optional)",selector:{text:{}}},{name:"covers",label:"Covers",selector:{entity:{domain:"cover",multiple:!0}}},{name:"layout",label:"Layout Mode",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (Responsive)"},{value:"compact",label:"Compact"},{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}}}]}
        .computeLabel=${t=>t.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}customElements.get("slick-light-control-card-editor")||customElements.define("slick-light-control-card-editor",Aa);console.info("%c SLICK-LIGHT-CONTROL-CARD %c 0.2.0 ","color: white; background: #FFC107; font-weight: 700;","color: #FFC107; background: white; font-weight: 700;");class Ta extends at{constructor(){super(...arguments),this._computed={mode:"vertical",showCovers:!1,visibleCovers:0,supports2D:!1},this._interacting=!1,this._resizeObserver=null,this._cursorPos={x:0,y:0},this._activeSlider=null,this._pointerStartX=0,this._pointerStartY=0,this._longPressTimer=null,this._clickTimer=null,this._pendingPointerId=null,this._handleTouchMove=t=>{(this._interacting||this._activeSlider)&&t.cancelable&&t.preventDefault()},this._lastClick=0}static get properties(){return{hass:{attribute:!1},config:{state:!0},_interacting:{state:!0},_cursorPos:{state:!0},_computed:{state:!0}}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{for(const e of t){const{width:t,height:i}=e.contentRect;this._updateLayout(t,i)}}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}firstUpdated(t){var e;super.firstUpdated(t);const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");i&&i.addEventListener("touchmove",this._handleTouchMove,{passive:!1})}_updateLayout(t,e){var i,s;const n=Ta.SIZES,o=((null===(i=this.config)||void 0===i?void 0:i.covers)||[]).length;if((null===(s=this.config)||void 0===s?void 0:s.layout)&&"auto"!==this.config.layout){const t={compact:"compact",small:"vertical",medium:"horizontal",large:"vertical"}[this.config.layout]||"vertical";return void(this._computed={mode:t,showCovers:"compact"!==t&&o>0,visibleCovers:"compact"===t?0:o,supports2D:"compact"!==t})}const a=t-2*n.PAD_H,r=e-2*n.PAD_V,l=n.ICON;if(r<l)return void(this._computed={mode:"compact",showCovers:!1,visibleCovers:0,supports2D:!1});const c=r-l-n.CONTENT_GAP-n.COVER_SECTION_PAD,h=c>=n.COVER_ROW_H?Math.floor((c+n.COVER_GAP)/(n.COVER_ROW_H+n.COVER_GAP)):0,d=a-n.COVER_ICON_W,u=a-(n.ICON+n.HEADER_GAP+n.HEADER_MIN_W)-12-n.COVER_ICON_W,p=r,g=u>=n.SLIDER_MIN_W&&p>=n.COVER_ROW_H?Math.floor((p+n.COVER_GAP)/(n.COVER_ROW_H+n.COVER_GAP)):0;if(0===o)return void(this._computed={mode:"vertical",showCovers:!1,visibleCovers:0,supports2D:r>=l+40});const f=Math.min(o,h),m=Math.min(o,g);if(0===f&&0===m)return void(this._computed={mode:"vertical",showCovers:!1,visibleCovers:0,supports2D:r>=l+40});let b,_;f>=m&&d>=n.SLIDER_MIN_W?(b="vertical",_=f):m>f||u>d?(b="horizontal",_=m):(b="vertical",_=f),this._computed={mode:b,showCovers:_>0,visibleCovers:_,supports2D:"vertical"!==b||r>=l+40}}static getConfigElement(){return document.createElement("slick-light-control-card-editor")}static getStubConfig(){return{type:"custom:slick-light-control-card",entity:"light.example_light",name:"Living Room",covers:[]}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity (light)");this.config=t}shouldUpdate(t){if(t.has("config"))return!0;const e=t.get("hass");if(!e)return!0;if(e.states[this.config.entity]!==this.hass.states[this.config.entity])return!0;if(this.config.covers)for(const t of this.config.covers)if(e.states[t]!==this.hass.states[t])return!0;return!1}_toggleLight(t){t&&t.stopPropagation(),this.hass.callService("light","toggle",{entity_id:this.config.entity})}_handlePointerDown(t){var e,i,s;const n=t.composedPath();for(const t of n)if((null===(e=t.classList)||void 0===e?void 0:e.contains("control-btn"))||(null===(i=t.classList)||void 0===i?void 0:i.contains("icon-container"))||(null===(s=t.classList)||void 0===s?void 0:s.contains("slider-control")))return;const o=Date.now();if(o-this._lastClick<300&&(this._clickTimer&&(clearTimeout(this._clickTimer),this._clickTimer=null),"compact"===this._computed.mode&&this.config.covers&&this.config.covers.length>0))return this._openMoreInfo(this.config.covers[0]),this._longPressTimer&&clearTimeout(this._longPressTimer),void(this._pendingPointerId=null);this._lastClick=o,this._pointerStartX=t.clientX,this._pointerStartY=t.clientY,this._pendingPointerId=t.pointerId,this._longPressTimer=window.setTimeout(()=>{this._startInteraction()},500)}_openMoreInfo(t){const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_startInteraction(){var t;if(this._longPressTimer=null,!this._computed.supports2D)return this._openMoreInfo(this.config.entity),void(this._pendingPointerId=null);const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");if(e){const t=e.getBoundingClientRect();this._cursorPos={x:this._pointerStartX-t.left,y:this._pointerStartY-t.top}}if(this._interacting=!0,navigator.vibrate&&navigator.vibrate(50),e&&null!==this._pendingPointerId)try{e.setPointerCapture(this._pendingPointerId)}catch(t){}}_handlePointerUp(t){var e;if(this._activeSlider){const{entityId:e,type:i,currentVal:s}=this._activeSlider;this._activeSlider=null;const n=t.target;if(n&&n.releasePointerCapture)try{n.releasePointerCapture(t.pointerId)}catch(t){}return"position"===i?this.hass.callService("cover","set_cover_position",{entity_id:e,position:s}):this.hass.callService("cover","set_cover_tilt_position",{entity_id:e,tilt_position:s}),void this.requestUpdate()}if(this._longPressTimer)return clearTimeout(this._longPressTimer),this._longPressTimer=null,"pointerup"===t.type&&(this._clickTimer&&clearTimeout(this._clickTimer),this._clickTimer=window.setTimeout(()=>{this._toggleLight(),this._clickTimer=null},250)),void(this._pendingPointerId=null);if(!this._interacting)return;this._interacting=!1,this._pendingPointerId=null;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");if(i){if(i.releasePointerCapture)try{i.releasePointerCapture(t.pointerId)}catch(t){}"pointerup"===t.type&&this._applyLightState(t,i)}}_handlePointerMove(t){var e;if(this._activeSlider)return void this._handleSliderMove(t);if(this._longPressTimer){return void(Math.sqrt(Math.pow(t.clientX-this._pointerStartX,2)+Math.pow(t.clientY-this._pointerStartY,2))>5&&(clearTimeout(this._longPressTimer),this._longPressTimer=null,this._pendingPointerId=null))}if(!this._interacting)return;t.preventDefault(),t.stopPropagation();const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-card");if(i){const e=i.getBoundingClientRect();this._cursorPos={x:t.clientX-e.left,y:t.clientY-e.top}}}_handleSliderDown(t,e,i,s){t.stopPropagation();const n=t.currentTarget;this._activeSlider={entityId:e,type:i,startX:t.clientX,startVal:s,currentVal:s},n.setPointerCapture(t.pointerId)}_handleSliderMove(t){if(!this._activeSlider)return;const e=t.target.closest(".slider-control");e&&this._processSliderMove(t,e)}_processSliderMove(t,e){const i=e.getBoundingClientRect(),{startX:s,startVal:n}=this._activeSlider,o=(t.clientX-s)/i.width*100;let a=Math.max(0,Math.min(100,Math.round(n+o)));a<5&&(a=0),a>95&&(a=100),this._activeSlider.currentVal=a,this.requestUpdate()}_applyLightState(t,e){const i=e.getBoundingClientRect(),s=Math.max(0,Math.min(1,(t.clientX-i.left)/i.width)),n=Math.max(0,Math.min(1,(t.clientY-i.top)/i.height)),o=this.hass.states[this.config.entity];if(!o)return;let a=Math.round(100*(1-n));a>90&&(a=100),a<15&&(a=0);const r=o.attributes.min_mireds||153,l=o.attributes.max_mireds||500,c=Math.round(r+s*(l-r));if(0===a)return void this.hass.callService("light","turn_off",{entity_id:this.config.entity});const h={entity_id:this.config.entity,brightness_pct:a};o.attributes.min_mireds&&(h.color_temp=c),this.hass.callService("light","turn_on",h)}render(){const t=this.hass.states[this.config.entity];if(!t)return j`<ha-card class="not-found">Entity not found: ${this.config.entity}</ha-card>`;const e="on"===t.state,i=t.attributes.brightness?Math.round(t.attributes.brightness/255*100):0,s=t.attributes.min_mireds||153,n=t.attributes.max_mireds||500,o=t.attributes.color_temp||Math.round((s+n)/2),a=this.config.covers||[];let r="background: linear-gradient(135deg, #2c3e50 0%, #000000 100%);";if(this._interacting)r="background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), linear-gradient(to right, rgb(166, 209, 255) 0%, rgb(255, 160, 0) 100%);";else if(e){const e=(o-s)/(n-s);if(t.attributes.rgb_color){const[e,i,s]=t.attributes.rgb_color;r=`background: linear-gradient(135deg, rgba(${e},${i},${s},0.8) 0%, rgba(${e},${i},${s},0.4) 100%);`}else{const t=200+55*e,i=220-20*e,s=255-105*e;r=`background: linear-gradient(135deg, rgb(${t},${i},${s}) 0%, rgb(${Math.round(.6*t)},${Math.round(.6*i)},${Math.round(.6*s)}) 100%);`}}const{mode:l,showCovers:c,visibleCovers:h}=this._computed;return j`
      <ha-card 
        class="mode-${l}"
        style="${r}"
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
                ${c?j`
                    <div class="covers-section" @pointerdown=${t=>t.stopPropagation()}>
                        ${a.slice(0,h).map(t=>this._renderCover(t))}
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
    `}_renderCover(t){const e=this.hass.states[t];if(!e)return j``;const i=!(128&~e.attributes.supported_features);let s="number"==typeof e.attributes.current_position?e.attributes.current_position:0,n="number"==typeof e.attributes.current_tilt_position?e.attributes.current_tilt_position:0;this._activeSlider&&this._activeSlider.entityId===t&&("position"===this._activeSlider.type?s=this._activeSlider.currentVal:"tilt"===this._activeSlider.type&&(n=this._activeSlider.currentVal));return j`
        <div class="cover-row" @contextmenu=${e=>{this._computed.supports2D||(e.preventDefault(),this._openMoreInfo(t))}}>
            <div class="cover-info">
                <ha-icon icon="${e.attributes.icon||"mdi:window-shutter"}"></ha-icon>
            </div>
            <div class="cover-sliders">
                <!-- Position Slider -->
                <div class="slider-control" 
                     @pointerdown=${e=>this._handleSliderDown(e,t,"position",s)}
                >
                     <div class="slider-fill" style="width: calc((100% - 50px) * ${s/100} + 46px)"></div>
                     <div class="slider-handle" style="left: calc((100% - 42px - 8px) * ${s/100} + 4px)"></div>
                     <div class="slider-label">${s}%</div>
                </div>

                <!-- Tilt Slider -->
                ${i?j`
                <div class="slider-control" 
                     @pointerdown=${e=>this._handleSliderDown(e,t,"tilt",n)}
                >
                     <div class="slider-fill" style="width: calc((100% - 50px) * ${n/100} + 46px)"></div>
                     <div class="slider-handle" style="left: calc((100% - 42px - 8px) * ${n/100} + 4px)"></div>
                     <div class="slider-label">Tilt: ${n}%</div>
                </div>
                `:""}
            </div>
        </div>
      `}static get styles(){return o`
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
    `}}Ta.SIZES={ICON:40,HEADER_GAP:12,HEADER_MIN_W:120,COVER_ROW_H:42,COVER_ICON_W:40,COVER_GAP:8,COVER_SECTION_PAD:24,CONTENT_GAP:8,PAD_H:12,PAD_V:12,SLIDER_MIN_W:100},customElements.get("slick-light-control-card")||customElements.define("slick-light-control-card",Ta),window.customCards=window.customCards||[],window.customCards.push({type:"slick-light-control-card",name:"Slick Light Control",description:"A card to control lights (brightness, color temp) and associated covers.",preview:!0}),console.info("%c Lovelace Slick Screen Cards %c 0.2.0 ","color: white; background: #607d8b; font-weight: 700;","color: #607d8b; background: white; font-weight: 700;");
//# sourceMappingURL=slick-screen-cards.js.map
