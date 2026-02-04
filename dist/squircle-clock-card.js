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
 * Squircle Clock Card
 * @version 0.1.0
 */
// --- KONFIGURATIONSSCHEMA ---
const CARD_SCHEMA = [
    {
        name: "display_mode",
        label: "Anzeigemodus",
        selector: {
            select: {
                mode: "dropdown",
                options: [
                    { value: "analog", label: "Analog (Klassisch)" },
                    { value: "digital", label: "Digital (Hybrid)" }
                ]
            }
        }
    },
    {
        name: "font_style",
        label: "Schriftart",
        selector: {
            select: {
                mode: "dropdown",
                options: [
                    { value: "standard", label: "Standard (Apple Bold)" },
                    { value: "thin", label: "Modern & Dünn (iOS)" },
                    { value: "retro", label: "Retro Bahnhof (DIN-Style)" }
                ]
            }
        }
    }
];
class SquircleClockCard extends HTMLElement {
    constructor() {
        super(...arguments);
        this._ticks = [];
        this._lastMin = -1;
        this._lastSecond = -1;
    }
    static getConfigElement() {
        return document.createElement("slick-squircle-clock-editor");
    }
    static getStubConfig() {
        return {
            type: "custom:slick-squircle-clock-card",
            display_mode: "digital",
            font_style: "standard"
        };
    }
    set hass(hass) { this._hass = hass; }
    setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        const newConfig = {
            display_mode: 'digital',
            font_style: 'standard', // Apple Bold
            ...config
        };
        // Validation
        if (newConfig.display_mode && !['analog', 'digital'].includes(newConfig.display_mode)) {
            throw new Error(`Invalid display_mode: ${newConfig.display_mode}`);
        }
        if (newConfig.font_style && !['standard', 'thin', 'retro'].includes(newConfig.font_style)) {
            throw new Error(`Invalid font_style: ${newConfig.font_style}`);
        }
        this.config = newConfig;
        if (this.shadowRoot) {
            this._render();
            this._drawContent();
        }
    }
    getLayoutOptions() {
        return {
            grid_rows: 2,
            grid_columns: 2,
            grid_min_rows: 1,
            grid_min_columns: 1,
        };
    }
    // --- CONNECTED/DISCONNECTED (Old Style + Fix) ---
    connectedCallback() {
        if (!this.shadowRoot)
            this.attachShadow({ mode: 'open' });
        this._render();
        this._drawContent();
        this._startClock();
        this._resizeObserver = new ResizeObserver(() => this._drawContent());
        this._resizeObserver.observe(this);
    }
    disconnectedCallback() {
        var _a;
        this._stopClock();
        (_a = this._resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    _startClock() {
        if (this._timer)
            cancelAnimationFrame(this._timer);
        const update = () => {
            var _a, _b, _c;
            const now = new Date();
            let displayTime = now;
            // Zeitzonen-Logik
            let timezone = (_a = this.config) === null || _a === void 0 ? void 0 : _a.timezone;
            // Prüfe ob timezone_entity gesetzt ist und hole Zeitzone daraus
            if (((_b = this.config) === null || _b === void 0 ? void 0 : _b.timezone_entity) && this._hass) {
                const entity = this._hass.states[this.config.timezone_entity];
                if (entity && entity.state) {
                    timezone = entity.state;
                }
            }
            if (timezone) {
                try {
                    const tzString = now.toLocaleString('en-US', { timeZone: timezone });
                    displayTime = new Date(tzString);
                    displayTime.setMilliseconds(now.getMilliseconds());
                }
                catch (e) {
                    // Fallback falls Zeitzone ungültig
                    displayTime = now;
                }
            }
            if (((_c = this.config) === null || _c === void 0 ? void 0 : _c.display_mode) === 'digital') {
                this._updateDigital(displayTime);
            }
            else {
                this._updateAnalog(displayTime);
            }
            this._timer = requestAnimationFrame(update);
        };
        this._timer = requestAnimationFrame(update);
    }
    _stopClock() { if (this._timer)
        cancelAnimationFrame(this._timer); }
    // --- MATHEMATIK ---
    _getPointOnRoundedRect(angleDeg, w, h, radius, inset) {
        const angleRad = (angleDeg - 90) * (Math.PI / 180);
        const xCenter = w / 2;
        const yCenter = h / 2;
        const width = Math.max(0, w - 2 * inset);
        const height = Math.max(0, h - 2 * inset);
        const r = Math.max(0, radius - inset);
        const halfW = width / 2;
        const halfH = height / 2;
        const absCos = Math.abs(Math.cos(angleRad));
        const absSin = Math.abs(Math.sin(angleRad));
        let x, y;
        if (halfW * absSin <= halfH * absCos) {
            x = halfW * Math.sign(Math.cos(angleRad));
            y = halfW * Math.tan(angleRad) * Math.sign(Math.cos(angleRad));
        }
        else {
            x = halfH / Math.tan(angleRad) * Math.sign(Math.sin(angleRad));
            y = halfH * Math.sign(Math.sin(angleRad));
        }
        const innerW = Math.max(0, halfW - r);
        const innerH = Math.max(0, halfH - r);
        if (Math.abs(x) > innerW && Math.abs(y) > innerH) {
            const dx = Math.abs(x) - innerW;
            const dy = Math.abs(y) - innerH;
            const dist = Math.sqrt(dx * dx + dy * dy);
            x = (innerW + (dx / dist) * r) * Math.sign(x);
            y = (innerH + (dy / dist) * r) * Math.sign(y);
        }
        return { x: xCenter + x, y: yCenter + y };
    }
    // --- CSS FÜR SCHRIFTARTEN ---
    _getFontStyle() {
        var _a;
        const style = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.font_style) || 'standard';
        switch (style) {
            case 'thin':
                return `
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                font-weight: 200;
              `;
            case 'retro':
                return `
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-weight: 700;
                letter-spacing: 0.5px;
              `;
            case 'standard':
            default:
                return `
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                font-weight: 600;
              `;
        }
    }
    // --- RENDERING ---
    _render() {
        var _a;
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block; width: 100%; height: 100%;
          background: var(--ha-card-background, var(--card-background-color, white));
          border-radius: var(--ha-card-border-radius, 12px);
          box-shadow: var(--ha-card-box-shadow, none);
          overflow: hidden;
          box-sizing: border-box;
          position: relative;
        }
        svg { width: 100%; height: 100%; display: block; position: absolute; top: 0; left: 0; }
        
        /* Analog Styles */
        text.analog-num {
          ${this._getFontStyle()}
          fill: var(--primary-text-color); 
          text-anchor: middle; dominant-baseline: middle;
        }
        #hour-hand, #minute-hand { stroke: var(--primary-text-color); stroke-width: 6; stroke-linecap: round; }
        #second-hand { stroke: #ff9500; stroke-width: 2.5; stroke-linecap: round; }
        #center-dot { fill: #ff9500; stroke: var(--primary-text-color); stroke-width: 1.5; }

        /* Digital Styles */
        .digital-container {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            text-align: center; 
            color: var(--primary-text-color); pointer-events: none;
            ${this._getFontStyle()}
        }
        .time-big { font-size: 1em; line-height: 1; font-variant-numeric: tabular-nums; }
        .date-small { 
            font-weight: 500; 
            opacity: 0.6; 
            margin-top: 4px; 
            text-transform: uppercase; 
            font-weight: ${((_a = this.config) === null || _a === void 0 ? void 0 : _a.font_style) === 'thin' ? '400' : 'bold'};
        }
        
        /* Aktiver Sekunden-Tick (Digital) */
        .active-tick { 
            stroke: #ff9500 !important; 
            stroke-opacity: 1 !important; 
            stroke-width: 3px !important; 
        }
      </style>
      <div id="content"></div>
    `;
    }
    _drawContent() {
        var _a;
        if (!this.shadowRoot)
            return;
        const container = this.shadowRoot.getElementById('content');
        if (!container)
            return;
        const rect = this.getBoundingClientRect();
        const w = rect.width || 300;
        const h = rect.height || 300;
        const minDim = Math.min(w, h);
        const style = window.getComputedStyle(this);
        let rVal = parseFloat(style.borderTopLeftRadius);
        if (style.borderTopLeftRadius && style.borderTopLeftRadius.includes('%')) {
            rVal = (minDim * parseFloat(style.borderTopLeftRadius)) / 100;
        }
        const radius = rVal || (minDim * 0.22);
        const mode = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.display_mode) || 'analog';
        if (mode === 'analog') {
            this._drawAnalog(container, w, h, radius, minDim);
        }
        else {
            this._drawDigital(container, w, h, radius, minDim);
        }
    }
    _drawAnalog(container, w, h, radius, minDim) {
        var _a, _b, _c, _d, _e;
        let ticks = '';
        for (let i = 0; i < 60; i++) {
            const isHour = i % 5 === 0;
            const angle = i * 6;
            const p2 = this._getPointOnRoundedRect(angle, w, h, radius, 5);
            const p1 = this._getPointOnRoundedRect(angle, w, h, radius, isHour ? 20 : 12);
            const color = isHour ? 'var(--primary-text-color)' : 'var(--secondary-text-color)';
            // Bei Retro dicke Striche, bei Thin dünne
            let sw = isHour ? 3 : 1.5;
            if (((_a = this.config) === null || _a === void 0 ? void 0 : _a.font_style) === 'retro' && isHour)
                sw = 4.5;
            if (((_b = this.config) === null || _b === void 0 ? void 0 : _b.font_style) === 'retro' && !isHour)
                sw = 2;
            ticks += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" />`;
        }
        const nPos = {
            12: this._getPointOnRoundedRect(0, w, h, radius, minDim * 0.25),
            3: this._getPointOnRoundedRect(90, w, h, radius, minDim * 0.25),
            6: this._getPointOnRoundedRect(180, w, h, radius, minDim * 0.25),
            9: this._getPointOnRoundedRect(270, w, h, radius, minDim * 0.25)
        };
        container.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}">
        ${ticks}
        <text class="analog-num" style="font-size: ${Math.max(12, minDim / 10)}px" x="${nPos[12].x}" y="${nPos[12].y}">12</text>
        <text class="analog-num" style="font-size: ${Math.max(12, minDim / 10)}px" x="${nPos[3].x}" y="${nPos[3].y}">3</text>
        <text class="analog-num" style="font-size: ${Math.max(12, minDim / 10)}px" x="${nPos[6].x}" y="${nPos[6].y}">6</text>
        <text class="analog-num" style="font-size: ${Math.max(12, minDim / 10)}px" x="${nPos[9].x}" y="${nPos[9].y}">9</text>
        <line id="hour-hand" x1="${w / 2}" y1="${h / 2}" x2="${w / 2}" y2="${h / 2 - minDim / 4}" />
        <line id="minute-hand" x1="${w / 2}" y1="${h / 2}" x2="${w / 2}" y2="${h / 2 - minDim / 2.8}" />
        <line id="second-hand" x1="${w / 2}" y1="${h / 2 + 15}" x2="${w / 2}" y2="${h / 2 - minDim / 2.4}" />
        <circle id="center-dot" cx="${w / 2}" cy="${h / 2}" r="3.5" />
      </svg>
    `;
        this.hourHand = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#hour-hand');
        this.minuteHand = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#minute-hand');
        this.secondHand = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector('#second-hand');
        this._center = { x: w / 2, y: h / 2 };
    }
    _drawDigital(container, w, h, radius, minDim) {
        var _a, _b, _c, _d;
        let ticks = '';
        for (let i = 0; i < 60; i++) {
            const angle = i * 6;
            const p2 = this._getPointOnRoundedRect(angle, w, h, radius, 6);
            const p1 = this._getPointOnRoundedRect(angle, w, h, radius, 14);
            ticks += `<line id="tick-${i}" x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" 
                stroke="var(--secondary-text-color)" 
                stroke-opacity="0.4" 
                stroke-width="1.5" 
                stroke-linecap="round" />`;
        }
        container.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}">${ticks}</svg>
      <div class="digital-container">
        <div class="time-big" id="time-display" style="font-size: ${minDim * 0.25}px">--:--</div>
        <div class="date-small" id="date-display" style="font-size: ${minDim * 0.08}px">--</div>
      </div>
    `;
        this._timeDisplay = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#time-display');
        this._dateDisplay = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#date-display');
        this._ticks = [];
        for (let i = 0; i < 60; i++)
            this._ticks.push(((_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(`#tick-${i}`)) || null);
        this._lastMin = -1;
        this._lastSecond = -1;
        const now = new Date();
        // Falls Zeitzone konfiguriert ist, direkt anwenden für Initial-Render
        if ((_d = this.config) === null || _d === void 0 ? void 0 : _d.timezone) {
            try {
                const tzString = now.toLocaleString('en-US', { timeZone: this.config.timezone });
                const tzTime = new Date(tzString);
                this._updateDigital(tzTime, true);
            }
            catch (e) {
                this._updateDigital(now, true);
            }
        }
        else {
            this._updateDigital(now, true);
        }
    }
    _updateAnalog(time) {
        var _a, _b;
        if (!this.hourHand)
            return;
        const s = time.getSeconds() + time.getMilliseconds() / 1000;
        const m = time.getMinutes() + s / 60;
        const h = (time.getHours() % 12) + m / 60;
        const { x, y } = this._center || { x: 0, y: 0 };
        (_a = this.secondHand) === null || _a === void 0 ? void 0 : _a.setAttribute('transform', `rotate(${s * 6} ${x} ${y})`);
        (_b = this.minuteHand) === null || _b === void 0 ? void 0 : _b.setAttribute('transform', `rotate(${m * 6} ${x} ${y})`);
        this.hourHand.setAttribute('transform', `rotate(${h * 30} ${x} ${y})`);
    }
    _updateDigital(time, force = false) {
        var _a, _b, _c;
        if (!this._timeDisplay)
            return;
        const seconds = time.getSeconds();
        if (force || this._lastMin !== time.getMinutes()) {
            const hours = String(time.getHours()).padStart(2, '0');
            const minutes = String(time.getMinutes()).padStart(2, '0');
            this._timeDisplay.textContent = `${hours}:${minutes}`;
            const options = { weekday: 'short', day: 'numeric' };
            const localeOptions = { ...options };
            if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.timezone)
                localeOptions.timeZone = this.config.timezone;
            if (this._dateDisplay) {
                this._dateDisplay.textContent = new Date().toLocaleDateString('de-DE', localeOptions);
            }
            this._lastMin = time.getMinutes();
        }
        if (force || this._lastSecond !== seconds) {
            if (this._lastSecond !== -1 && this._ticks[this._lastSecond]) {
                (_b = this._ticks[this._lastSecond]) === null || _b === void 0 ? void 0 : _b.classList.remove('active-tick');
            }
            if (this._ticks[seconds]) {
                (_c = this._ticks[seconds]) === null || _c === void 0 ? void 0 : _c.classList.add('active-tick');
            }
            this._lastSecond = seconds;
        }
    }
}
// --- EDITOR (LIT) ---
class SquircleClockEditor extends i {
    static get properties() {
        return {
            hass: { attribute: false },
            _config: { state: true },
        };
    }
    setConfig(config) {
        this._config = config;
    }
    _valueChanged(ev) {
        if (!this._config || !this.hass)
            return;
        const newConfig = { ...this._config, ...ev.detail.value };
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        if (!this.hass || !this._config)
            return b ``;
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${CARD_SCHEMA}
        .computeLabel=${(s) => s.label || s.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
    }
}
if (!customElements.get('slick-squircle-clock-card')) {
    customElements.define('slick-squircle-clock-card', SquircleClockCard);
    console.info("%c slick-squircle-clock-card Registered", "color: green; font-weight: bold;");
}
if (!customElements.get('slick-squircle-clock-editor')) {
    customElements.define('slick-squircle-clock-editor', SquircleClockEditor);
}
window.customCards = window.customCards || [];
window.customCards.push({
    type: "slick-squircle-clock-card",
    name: "Slick Squircle Clock",
    preview: true,
    description: "A customizable clock card with analog and digital modes."
});

export { SquircleClockCard };
//# sourceMappingURL=squircle-clock-card.js.map
