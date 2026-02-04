/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * Wind Compass Card
 * @version 0.1.0
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
console.info('%c WindCompassCard Loaded: TS_APPLE_FINAL ', 'color: white; background: #000000; font-weight: bold;');
class WindCompassCard extends HTMLElement {
    constructor() {
        super();
        // Configuration State
        this._bucketSize = 5;
        this._bucketCount = 72;
        this._warnMultiplier = 0.9;
        // Data State
        this._historyData = [];
        this._lastHistoryFetch = 0;
        // Sensor Values
        this._avgDeg = 0; // Standard 0 um Fehler zu vermeiden
        this._instDeg = 0; // Standard 0
        this._currentUnit = '';
        this._maxSpeed = 30;
        this._currentGust = 0;
        // Limits
        this._limitRaffstore = 0;
        this._limitRollo = 0;
        this.attachShadow({ mode: 'open' });
    }
    static getConfigElement() {
        return document.createElement('slick-wind-compass-editor');
    }
    static getStubConfig() {
        return {
            type: 'custom:slick-wind-compass-card',
            direction_entity: '',
            speed_entity: '',
            max_speed: 60
        };
    }
    set hass(hass) {
        this._hass = hass;
        this._updateCard();
    }
    setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        const newConfig = {
            bucket_size: 5,
            warn_multiplier: 0.9,
            max_speed: 30,
            simple_mode: false,
            ...config
        };
        if (newConfig.bucket_size && typeof newConfig.bucket_size !== 'number')
            throw new Error("bucket_size must be a number");
        if (newConfig.max_speed && typeof newConfig.max_speed !== 'number')
            throw new Error("max_speed must be a number");
        this.config = newConfig;
        if (this.config.simple_mode) {
            this.classList.add('simple-mode');
        }
        else {
            this.classList.remove('simple-mode');
        }
        this._recalcBuckets();
    }
    _recalcBuckets() {
        let reqBucketSize = this.config.bucket_size !== undefined ? Number(this.config.bucket_size) : 5;
        if (isNaN(reqBucketSize) || reqBucketSize < 1)
            reqBucketSize = 5;
        if (reqBucketSize > 90)
            reqBucketSize = 90;
        while (360 % reqBucketSize !== 0) {
            reqBucketSize++;
        }
        if (this._bucketSize !== reqBucketSize) {
            this._bucketSize = reqBucketSize;
            this._bucketCount = Math.floor(360 / this._bucketSize);
            this._historyData = new Array(this._bucketCount).fill(null).map(() => ({ duration: 0, totalSpeed: 0 }));
            this._lastHistoryFetch = 0;
        }
    }
    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        // Ensure render is called if content is missing
        if (this.shadowRoot && (!this.shadowRoot.innerHTML || this.shadowRoot.innerHTML.trim() === '')) {
            this._render();
        }
        if (this.shadowRoot) {
            this.content = this.shadowRoot.querySelector('.container');
            if (this.content) {
                this._resizeObserver = new ResizeObserver(() => {
                    this._updateDimensions();
                    this._updateVisuals();
                });
                this._resizeObserver.observe(this.content);
            }
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this._resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    _render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 200;
          background: var(--ha-card-background, var(--card-background-color, white));
          border-radius: var(--ha-card-border-radius, 12px);
          box-shadow: var(--ha-card-box-shadow, none);
          overflow: hidden;
          box-sizing: border-box;
          position: relative;
          isolation: isolate;
        }
        
        ha-card {
          display: none;
        }

        .container {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* --- COMPASS AREA --- */
        .compass-container {
          position: relative;
          width: 100%;
          height: 90px;
          background: transparent;
          border-radius: 12px;
          
          /* Apple Fade-Out Effect Left/Right */
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          
          touch-action: pan-y;
          isolation: isolate; 
          z-index: 0;
        }

        .compass-tape {
          position: absolute;
          top: 0;
          left: 50%; /* Zentriert */
          height: 100%;
          display: flex;
          align-items: center;
          /* Smooth Animation für das Band */
          transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);
          will-change: transform;
          z-index: 1;
        }

        /* Historien-Balken */
        .hist-bar {
          position: absolute;
          bottom: 0;
          border-radius: 4px;
          pointer-events: none;
          transform: none; 
          border: none;
          box-sizing: border-box; 
          background: none; 
          transition: height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1.0);
          overflow: hidden;
          opacity: 0.9;
        }

        .hist-fill {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          transition: opacity 0.3s ease, background 0.3s ease;
        }

        .compass-tick {
          position: absolute;
          top: 42px; /* Adjusted to sit below labels */
          width: 1px;
          border-radius: 0.5px;
          background: var(--primary-text-color);
          opacity: 0.2;
          z-index: 2;
        }

        .compass-label {
          position: absolute;
          top: 12px;
          transform: translateX(-50%);
          color: var(--primary-text-color);
          font-weight: 300;
          font-size: 18px;
          letter-spacing: 0.5px;
          z-index: 3;
          line-height: 1;
        }

        /* FLOATING MARKER (Modern Arrow) */
        .compass-marker {
          position: absolute;
          left: 50%; 
          top: 0px; 
          width: 2px;
          height: 12px;
          background: var(--error-color, #ff3b30);
          border-radius: 1px;
          
          transform: translateX(-50%); 
          z-index: 20; 
          filter: drop-shadow(0 0 4px rgba(255, 59, 48, 0.4));
          transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);
          will-change: transform;
        }
        
        /* Arrowhead */
        .compass-marker::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0; 
          height: 0; 
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid var(--error-color, #ff3b30);
        }

        /* CENTER DOT - Zeigt Durchschnitt (Mitte des Fensters) */
        .compass-center-dot {
           position: absolute;
           left: 50%;
           bottom: 0;
           width: 2px; 
           height: 12px; 
           background: var(--primary-text-color);
           border-radius: 2px;
           transform: translateX(-50%);
           opacity: 0.3;
           z-index: 4;
        }

        /* --- SPEED BAR AREA --- */
        .speed-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .speed-bar-bg {
          position: relative;
          width: 100%;
          height: 12px;
          background: var(--secondary-background-color, rgba(0,0,0,0.05));
          border-radius: 6px;
          overflow: visible; 
          isolation: isolate;
        }

        .speed-bar-gust {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          background: var(--accent-color, var(--primary-color, #2196F3));
          opacity: 0.2;
          width: 0%;
          transition: width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);
          z-index: 1;
          border-radius: 6px;
        }

        .speed-bar-fill {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          background: var(--accent-color, var(--primary-color, #2196F3));
          width: 0%;
          transition: width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1.0);
          box-shadow: 0 0 10px var(--accent-color, transparent); 
          z-index: 2;
          border-radius: 6px;
        }

        .limit-marker {
          position: absolute;
          top: -2px; 
          bottom: -2px; 
          width: 2px;
          background-color: var(--primary-text-color);
          z-index: 10;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          border-radius: 1px;
          display: none; 
          pointer-events: none;
          opacity: 0.8;
        }

        .speed-text {
          display: flex;
          justify-content: flex-end;
          align-items: baseline;
          gap: 4px;
          color: var(--primary-text-color);
          text-shadow: var(--text-shadow, none);
        }

        .speed-text .value {
          font-size: 3.5rem;
          font-weight: 200;
          letter-spacing: -1px;
          line-height: 1;
        }

        .speed-text .unit {
          font-size: 1.25rem;
          color: var(--secondary-text-color);
          font-weight: 300;
        }

        .speed-text .gust-info {
          margin-left: 8px;
          font-size: 13px;
          color: var(--secondary-text-color);
          opacity: 0.8;
        }

        /* --- SIMPLE MODE --- */
        :host(.simple-mode) {
          /* Restore card background and shadow to match other cards */
          overflow: hidden; 
        }

        :host(.simple-mode) .container {
           padding: 0;
           height: 120px; /* Increased to separate text and compass */
           position: relative;
        }

        :host(.simple-mode) .compass-container {
           height: 60px; /* Thinner */
           margin-top: 60px; /* Pushed down to clear speed text */
           -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
           mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        :host(.simple-mode) .compass-tick {
           top: 42px; /* Pushed down */
        }
        
        :host(.simple-mode) .compass-label {
           top: 20px; /* Pushed down to clear marker */
           font-size: 16px;
        }

        :host(.simple-mode) .compass-marker {
           top: 0px; /* At the top edge of compass container */
        }

        :host(.simple-mode) .speed-container {
           position: absolute;
           top: 16px;
           left: 16px;
           width: auto;
           height: auto;
           display: block;
           z-index: 10;
        }
        
        :host(.simple-mode) .speed-bar-bg {
           display: none;
        }

        :host(.simple-mode) .speed-text {
           display: flex;
           flex-direction: row;
           align-items: baseline;
           justify-content: flex-start;
           color: var(--primary-text-color);
           text-shadow: 0 1px 4px rgba(0,0,0,0.5); /* Always shadow for readability over possible map/picture */
        }

        :host(.simple-mode) .speed-text .value {
           font-size: 2.5rem; /* Smaller than full mode */
        }
        
        :host(.simple-mode) .speed-text .gust-info {
           margin-left: 6px;
           font-size: 14px;
           opacity: 0.9;
        }

        /* ALERT MODE (Red Background) */
        :host(.simple-mode.alert-state) {
           background: linear-gradient(135deg, rgba(255,59,48,0.8), rgba(200,30,30,0.9)) !important;
           border-radius: var(--ha-card-border-radius, 12px);
           box-shadow: 0 4px 20px rgba(255, 59, 48, 0.4);
        }
        
        :host(.simple-mode.alert-state) .speed-text,
        :host(.simple-mode.alert-state) .compass-label {
           color: white !important;
        }
        
        :host(.simple-mode.alert-state) .compass-tick {
           background: white !important;
           opacity: 0.4;
        }
      </style>

      <div class="container">
        <div class="compass-container" id="container">
          <div class="compass-center-dot"></div>
          <div class="compass-marker" id="marker"></div>
          <div class="compass-tape" id="tape"></div>
        </div>

        <div class="speed-container">
          <div class="speed-bar-bg">
            <div class="speed-bar-gust" id="gust-bar"></div>
            <div class="speed-bar-fill" id="speed-bar"></div>
            <div class="limit-marker" id="limit-raffstore" title="Raffstore Limit"></div>
            <div class="limit-marker" id="limit-rollo" title="Rollo Limit"></div>
          </div>
          <div class="speed-text" id="speed-text">--</div>
        </div>
      </div>
    `;
    }
    _updateCard() {
        if (!this.config)
            return;
        // Entities
        const dirEntity = this.config.direction_entity; // AVG (Tape)
        // Fallback: Wenn keine Instant-Entity da ist, nimm auch Avg (Marker bleibt dann mittig)
        const instantDirEntity = this.config.instant_direction_entity || dirEntity;
        const speedEntity = this.config.speed_entity;
        const entityGust = this.config.gust_entity;
        const entityLimitRaff = this.config.raffstore_limit_entity;
        const entityLimitRollo = this.config.rollo_limit_entity;
        // Config
        this._maxSpeed = this.config.max_speed || 30;
        this._warnMultiplier = this.config.warn_multiplier !== undefined ? Number(this.config.warn_multiplier) : 0.9;
        this._recalcBuckets();
        // Use dummy values if hass is not ready yet
        const hass = this._hass;
        // States
        const dirState = hass === null || hass === void 0 ? void 0 : hass.states[dirEntity];
        const instDirState = hass === null || hass === void 0 ? void 0 : hass.states[instantDirEntity];
        const speedState = hass === null || hass === void 0 ? void 0 : hass.states[speedEntity];
        const gustState = entityGust && hass ? hass.states[entityGust] : null;
        // 1. DURCHSCHNITT (Bewegt das Band)
        if (dirState && !isNaN(parseFloat(dirState.state))) {
            this._avgDeg = parseFloat(dirState.state);
        }
        // 2. IST-WERT (Bewegt den Marker)
        if (instDirState && !isNaN(parseFloat(instDirState.state))) {
            this._instDeg = parseFloat(instDirState.state);
        }
        else {
            this._instDeg = this._avgDeg; // Fallback
        }
        // Speed Data
        if (speedState && !isNaN(parseFloat(speedState.state))) {
            this._currentSpeed = parseFloat(speedState.state);
            this._currentUnit = speedState.attributes.unit_of_measurement || 'km/h';
        }
        else {
            this._currentSpeed = 0;
            this._currentUnit = 'km/h';
        }
        if (gustState && !isNaN(parseFloat(gustState.state))) {
            this._currentGust = parseFloat(gustState.state);
        }
        else {
            this._currentGust = 0;
        }
        // Limits
        this._limitRaffstore = 0;
        this._limitRollo = 0;
        if (hass && entityLimitRaff && hass.states[entityLimitRaff]) {
            this._limitRaffstore = parseFloat(hass.states[entityLimitRaff].state) || 0;
        }
        if (hass && entityLimitRollo && hass.states[entityLimitRollo]) {
            this._limitRollo = parseFloat(hass.states[entityLimitRollo].state) || 0;
        }
        // History alle 5 min
        const now = Date.now();
        if (now - this._lastHistoryFetch > 300000 && hass) {
            this._lastHistoryFetch = now;
            this._fetchHistory(dirEntity, speedEntity);
        }
        this._updateVisuals();
    }
    async _fetchHistory(dirEntity, speedEntity) {
        if (!this._hass)
            return;
        const endTime = new Date();
        const startTime = new Date(endTime.getTime() - 24 * 60 * 60 * 1000);
        try {
            const entities = [dirEntity, speedEntity].join(',');
            const history = await this._hass.callApi('GET', `history/period/${startTime.toISOString()}?filter_entity_id=${entities}&end_time=${endTime.toISOString()}&minimal_response`);
            if (history && history.length === 2) {
                const dirHist = history.find((arr) => arr.length > 0 && arr[0].entity_id === dirEntity);
                const speedHist = history.find((arr) => arr.length > 0 && arr[0].entity_id === speedEntity);
                if (dirHist && speedHist) {
                    this._processHistoryData(dirHist, speedHist);
                }
            }
        }
        catch (e) {
            console.error('WindCompass: History fetch failed', e);
        }
    }
    _processHistoryData(dirData, speedData) {
        const buckets = new Array(this._bucketCount)
            .fill(null)
            .map(() => ({ duration: 0, totalSpeed: 0 }));
        let speedIdx = 0;
        for (let i = 0; i < dirData.length - 1; i++) {
            const deg = parseFloat(dirData[i].state);
            if (isNaN(deg))
                continue;
            const startTs = new Date(dirData[i].last_changed).getTime();
            const endTs = new Date(dirData[i + 1].last_changed).getTime();
            const durationMin = (endTs - startTs) / 1000 / 60;
            while (speedIdx < speedData.length - 1 &&
                new Date(speedData[speedIdx + 1].last_changed).getTime() <= startTs) {
                speedIdx++;
            }
            const speedVal = parseFloat(speedData[speedIdx].state) || 0;
            const bucketIndex = Math.floor(((deg % 360) / 360) * this._bucketCount);
            if (bucketIndex >= 0 && bucketIndex < this._bucketCount) {
                buckets[bucketIndex].duration += durationMin;
                buckets[bucketIndex].totalSpeed += speedVal * durationMin;
            }
        }
        this._historyData = buckets;
        this._updateDimensions();
        this._updateVisuals();
    }
    _updateDimensions() {
        if (!this.shadowRoot)
            return;
        const container = this.shadowRoot.querySelector('#container');
        if (!container)
            return;
        const width = container.offsetWidth;
        if (width === 0)
            return;
        this._pxPerDeg = width / 360;
        this._buildTape();
    }
    _buildTape() {
        if (!this.shadowRoot || !this._pxPerDeg)
            return;
        const tape = this.shadowRoot.querySelector('#tape');
        if (!tape)
            return;
        tape.innerHTML = '';
        // Referenzwerte (Max Speed / Max Dauer)
        let maxDur = 0;
        let maxBucketAvgSpeed = 0;
        this._historyData.forEach(b => {
            if (b.duration > 0) {
                if (b.duration > maxDur)
                    maxDur = b.duration;
                const avg = b.totalSpeed / b.duration;
                if (avg > maxBucketAvgSpeed)
                    maxBucketAvgSpeed = avg;
            }
        });
        if (maxDur === 0)
            maxDur = 1;
        if (maxBucketAvgSpeed === 0)
            maxBucketAvgSpeed = 1;
        // Warn-Schwelle (Rot)
        const limits = [this._limitRaffstore, this._limitRollo].filter(l => l > 0);
        const minLimit = limits.length > 0 ? Math.min(...limits) : null;
        const alertThreshold = minLimit ? (minLimit * this._warnMultiplier) : null;
        const slotWidth = this._bucketSize * this._pxPerDeg;
        const barWidth = Math.max(1, slotWidth - 2);
        const offset = 1;
        for (let i = -180; i <= 540; i += this._bucketSize) {
            const pxPos = i * this._pxPerDeg;
            const normalizedDeg = ((i % 360) + 360) % 360;
            const bucketIndex = Math.floor(normalizedDeg / this._bucketSize);
            // --- HISTOGRAMM ---
            if (bucketIndex >= 0 && bucketIndex < this._bucketCount) {
                const data = this._historyData[bucketIndex];
                if (data && data.duration > 0) {
                    const avgSpeed = data.totalSpeed / data.duration;
                    // Kritisch?
                    const isCritical = alertThreshold !== null && avgSpeed >= alertThreshold;
                    const colorNormal = 'var(--accent-color, var(--primary-color))';
                    const colorCritical = 'var(--error-color, #ff3b30)';
                    const usedColor = isCritical ? colorCritical : colorNormal;
                    const bar = document.createElement('div');
                    bar.className = 'hist-bar';
                    // Höhe = Geschwindigkeit (Intensität)
                    const heightPct = (avgSpeed / maxBucketAvgSpeed) * 100;
                    bar.style.height = `${heightPct * 0.6}%`;
                    bar.style.left = `${pxPos + offset}px`;
                    bar.style.width = `${barWidth}px`;
                    // Removed borderTopColor - handled by background now
                    const fill = document.createElement('div');
                    fill.className = 'hist-fill';
                    // Flat design: Solid color instead of gradient
                    fill.style.background = usedColor;
                    if (isCritical) {
                        fill.style.opacity = '1.0';
                    }
                    else {
                        // Opacity = Duration (Frequency)
                        // We keep the opacity logic to visualize frequency weight, 
                        // but the bar itself is a flat color block now.
                        const freqRatio = data.duration / maxDur;
                        fill.style.opacity = (0.4 + (freqRatio * 0.6)).toString();
                    }
                    bar.appendChild(fill);
                    tape.appendChild(bar);
                }
            }
            // --- TICKS & LABELS ---
            let drawTick = false;
            const tick = document.createElement('div');
            tick.className = 'compass-tick';
            tick.style.left = `${pxPos}px`;
            if (normalizedDeg % 90 === 0) {
                // Major: Label Only
                const label = document.createElement('div');
                label.className = 'compass-label';
                const directions = { 0: 'N', 90: 'O', 180: 'S', 270: 'W' };
                label.textContent = directions[normalizedDeg] || '';
                label.style.left = `${pxPos}px`;
                tape.appendChild(label);
                // No tick for major directions in minimalistic mode
                drawTick = false;
            }
            else if (normalizedDeg % 45 === 0) {
                // Middle: Medium Tick
                tick.style.height = '10px';
                tick.style.opacity = '0.4';
                drawTick = true;
            }
            else if (normalizedDeg % 15 === 0) {
                // Minor: Small Tick
                tick.style.height = '6px';
                tick.style.opacity = '0.2';
                drawTick = true;
            }
            if (drawTick)
                tape.appendChild(tick);
        }
    }
    _interpolateColor(c1, c2, factor) {
        const hex = (c) => {
            const h = c.replace('#', '');
            return parseInt(h.length === 3 ? h.split('').map(x => x + x).join('') : h, 16);
        };
        const r1 = (hex(c1) >> 16) & 255;
        const g1 = (hex(c1) >> 8) & 255;
        const b1 = (hex(c1)) & 255;
        const r2 = (hex(c2) >> 16) & 255;
        const g2 = (hex(c2) >> 8) & 255;
        const b2 = (hex(c2)) & 255;
        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);
        return `rgb(${r}, ${g}, ${b})`;
    }
    _updateVisuals() {
        var _a, _b;
        if (!this.shadowRoot || this._avgDeg === undefined || !this._pxPerDeg)
            return;
        if (!this.config)
            return;
        // 1. BAND POSITION (Basis: Durchschnitt)
        const tape = this.shadowRoot.querySelector('#tape');
        if (tape) {
            tape.style.transform = `translateX(-${this._avgDeg * this._pxPerDeg}px)`;
        }
        // 2. MARKER POSITION (Basis: Ist-Wert relativ zum Durchschnitt)
        // Wenn instDeg vorhanden, berechne Differenz. Sonst bleibt Marker in der Mitte (diff=0).
        const marker = this.shadowRoot.querySelector('#marker');
        if (marker && this._instDeg !== undefined) {
            const diff = ((this._instDeg - this._avgDeg + 540) % 360) - 180;
            marker.style.transform = `translateX(calc(-50% + ${diff * this._pxPerDeg}px))`;
        }
        // 3. SPEED BARS
        const speedBar = this.shadowRoot.querySelector('#speed-bar');
        const gustBar = this.shadowRoot.querySelector('#gust-bar');
        const speedText = this.shadowRoot.querySelector('#speed-text');
        const limitRaff = this.shadowRoot.querySelector('#limit-raffstore');
        const limitRollo = this.shadowRoot.querySelector('#limit-rollo');
        if (this._currentSpeed !== undefined) {
            // --- LOGIG FOR SIMPLE MODE ---
            if (this.config.simple_mode) {
                const limits = [this._limitRaffstore, this._limitRollo].filter(l => l > 0);
                const minLimit = limits.length > 0 ? Math.min(...limits) : null;
                if (minLimit && this._currentSpeed >= minLimit) {
                    this.classList.add('alert-state');
                }
                else {
                    this.classList.remove('alert-state');
                }
                // Allow standard logic to run for gradient background
                // Special text for simple mode
                if (speedText) {
                    let html = `
                <span class="value">${Math.round(this._currentSpeed || 0)}</span>
                <span class="unit">${this._currentUnit}</span>
             `;
                    if (this._currentGust > 0) {
                        html += `<span class="gust-info">(${Math.round(this._currentGust)})</span>`;
                    }
                    speedText.innerHTML = html;
                }
                // Fall through to standard visual update (skipping bar updates which are hidden anyway)
            }
            // --- STANDARD MODE & SHARED GRADIENT ---
            let pct = (this._currentSpeed / this._maxSpeed) * 100;
            if (pct > 100)
                pct = 100;
            if (!this.config.simple_mode && speedBar) {
                speedBar.style.width = `${pct}%`;
            }
            // Check for Dark Mode Preference from HA Theme
            const isDarkMode = ((_b = (_a = this._hass) === null || _a === void 0 ? void 0 : _a.themes) === null || _b === void 0 ? void 0 : _b.darkMode) === true;
            // Dynamic Background Gradient
            // Low: Bright Creme-Grey (#ffffff -> #e0e0e0)
            // High: Dark Grey-Blue (#546e7a -> #263238)
            const intensity = pct / 100;
            // Define Gradient Colors (Lighter at bottom for modern "uplight" look)
            let cStartLow, cEndLow;
            if (isDarkMode) {
                // Dark Mode
                cStartLow = '#1c1c1e'; // Dark top
                cEndLow = '#3a3a3c'; // Lighter bottom
            }
            else {
                // Light Mode
                cStartLow = '#e0e0e0'; // Grey top
                cEndLow = '#ffffff'; // White bottom
            }
            // High Wind Colors (Blue-Grey)
            const cStartHigh = '#37474f'; // Darker Blue-Grey top
            const cEndHigh = '#607d8b'; // Lighter Blue-Grey bottom
            const startColor = this._interpolateColor(cStartLow, cStartHigh, intensity);
            const endColor = this._interpolateColor(cEndLow, cEndHigh, intensity);
            // Update host background
            this.style.background = `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`;
            // Adjust text and UI colors for contrast
            // In Dark Mode, we almost always want white text unless intensity pushes us to something very bright (unlikely here)
            if (isDarkMode || intensity > 0.5) {
                // Dark Background -> Light Elements
                this.style.color = 'white';
                this.style.setProperty('--primary-text-color', 'white');
                this.style.setProperty('--secondary-text-color', 'rgba(255,255,255,0.7)');
                this.style.setProperty('--secondary-background-color', 'rgba(255,255,255,0.15)');
                this.style.setProperty('--ha-card-box-shadow', 'none');
                this.style.setProperty('--text-shadow', '0 1px 4px rgba(0,0,0,0.5)');
            }
            else {
                // Light Mode + Low Intensity -> Dark Elements
                this.style.color = '#212121';
                this.style.setProperty('--primary-text-color', '#212121');
                this.style.setProperty('--secondary-text-color', '#757575');
                this.style.setProperty('--secondary-background-color', 'rgba(0,0,0,0.1)');
                this.style.removeProperty('--text-shadow');
            }
            // If alert state is active (Red), it overrides this anyway via !important in CSS
            let pctGust = (this._currentGust / this._maxSpeed) * 100;
            if (pctGust > 100)
                pctGust = 100;
            if (gustBar)
                gustBar.style.width = `${pctGust}%`;
            // Only update text here if not simple mode (because simple mode has different format)
            if (!this.config.simple_mode && speedText) {
                let html = `
                <span class="value">${Math.round(this._currentSpeed || 0)}</span>
                <span class="unit">${this._currentUnit}</span>
            `;
                if (this._currentGust > 0) {
                    html += `<span class="gust-info">(Max ${Math.round(this._currentGust)})</span>`;
                }
                speedText.innerHTML = html;
            }
            if (limitRaff) {
                if (this._limitRaffstore > 0) {
                    let p = (this._limitRaffstore / this._maxSpeed) * 100;
                    if (p > 100)
                        p = 100;
                    limitRaff.style.left = `${p}%`;
                    limitRaff.style.display = 'block';
                }
                else {
                    limitRaff.style.display = 'none';
                }
            }
            if (limitRollo) {
                if (this._limitRollo > 0) {
                    let p = (this._limitRollo / this._maxSpeed) * 100;
                    if (p > 100)
                        p = 100;
                    limitRollo.style.left = `${p}%`;
                    limitRollo.style.display = 'block';
                }
                else {
                    limitRollo.style.display = 'none';
                }
            }
        }
    }
    getCardSize() {
        return 3;
    }
}
try {
    if (!customElements.get('slick-wind-compass-card')) {
        customElements.define('slick-wind-compass-card', WindCompassCard);
        console.info("%c slick-wind-compass-card Registered", "color: green; font-weight: bold;");
    }
}
catch (e) {
    console.error("Failed to register slick-wind-compass-card", e);
}
class WindCompassEditor extends i {
    static get properties() {
        return {
            hass: {},
            _config: {},
        };
    }
    setConfig(config) {
        this._config = config;
    }
    _valueChanged(ev) {
        if (!this._config || !this.hass)
            return;
        const newConfig = {
            ...this._config,
            ...ev.detail.value,
        };
        // Fire event to update card preview
        const messageEvent = new CustomEvent("config-changed", {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(messageEvent);
    }
    render() {
        if (!this.hass || !this._config)
            return b ``;
        // Schema for Home Assistant Form
        const schema = [
            { name: "direction_entity", label: "Direction Entity", selector: { entity: { domain: "sensor" } } },
            { name: "speed_entity", label: "Speed Entity", selector: { entity: { domain: "sensor" } } },
            { name: "gust_entity", label: "Gust Entity (Optional)", selector: { entity: { domain: "sensor" } } },
            { name: "instant_direction_entity", label: "Instant Dir (opt)", selector: { entity: { domain: "sensor" } } },
            { name: "max_speed", label: "Max Speed", selector: { number: { mode: "box", min: 0 } } },
            { name: "simple_mode", label: "Simple Mode", selector: { boolean: {} } },
            { name: "raffstore_limit_entity", label: "Raffstore Limit (opt)", selector: { entity: { domain: "sensor" } } },
            { name: "rollo_limit_entity", label: "Rollo Limit (opt)", selector: { entity: { domain: "sensor" } } }
        ];
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${schema}
        .computeLabel=${(s) => s.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
    }
}
if (!customElements.get('slick-wind-compass-editor')) {
    customElements.define('slick-wind-compass-editor', WindCompassEditor);
}
// Register as custom card
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'slick-wind-compass-card',
    name: 'Slick Wind Compass',
    preview: true,
    description: 'Apple-style wind direction compass with speed indicator'
});

export { WindCompassCard };
//# sourceMappingURL=wind-compass-card.js.map
