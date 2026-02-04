/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

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
 * Mini Weather Card
 * @version 0.1.0
 */
const CARD_VERSION = "0.1.0";
console.info(`%c MINI-WEATHER-CARD %c ${CARD_VERSION} `, 'color: white; background: #2980b9; font-weight: 700;', 'color: #2980b9; background: white; font-weight: 700;');
// ----------------------------------------------------------------------
// CATMULL-ROM SPLINE LOGIK
// ----------------------------------------------------------------------
function catmullRom2bezier(x, k) {
    const n = x.length - 1;
    if (n < 1)
        return [];
    const result = [];
    const x1 = x[0], y1 = x[1];
    result.push([x1, y1]);
    for (let i = 0; i < n - 1; i++) {
        const p0 = i === 0 ? [x[0], x[1]] : [x[(i - 1) * 2], x[(i - 1) * 2 + 1]];
        const p1 = [x[i * 2], x[i * 2 + 1]];
        const p2 = [x[(i + 1) * 2], x[(i + 1) * 2 + 1]];
        const p3 = i + 2 > n ? p2 : [x[(i + 2) * 2], x[(i + 2) * 2 + 1]];
        const cp1x = p1[0] + (p2[0] - p0[0]) / 6 * k;
        const cp1y = p1[1] + (p2[1] - p0[1]) / 6 * k;
        const cp2x = p2[0] - (p3[0] - p1[0]) / 6 * k;
        const cp2y = p2[1] - (p3[1] - p1[1]) / 6 * k;
        result.push([cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]]);
    }
    return result;
}
function generateSmoothPath(points) {
    if (points.length < 2)
        return "";
    const flatPoints = points.reduce((acc, p) => [...acc, p[0], p[1]], []);
    const curves = catmullRom2bezier(flatPoints, 1);
    if (curves.length === 0)
        return "";
    let d = `M ${curves[0][0]},${curves[0][1]} `;
    for (let i = 1; i < curves.length; i++) {
        const c = curves[i];
        d += `C ${c[0]},${c[1]} ${c[2]},${c[3]} ${c[4]},${c[5]} `;
    }
    return d;
}
function getTimeOfDayFromSun(elevation, rising) {
    // Nacht: Sonne tief unter Horizont
    if (elevation < -18)
        return 'night';
    // Dämmerungsphasen
    if (elevation >= -18 && elevation < -6) {
        return rising ? 'early-dawn' : 'late-dusk';
    }
    if (elevation >= -6 && elevation < 0) {
        return rising ? 'late-dawn' : 'early-dusk';
    }
    // Tag: Sonne über Horizont
    if (elevation >= 0 && elevation < 15) {
        return rising ? 'morning' : 'late-afternoon';
    }
    if (elevation >= 15 && elevation < 35) {
        return rising ? 'morning' : 'early-afternoon';
    }
    if (elevation >= 35) {
        return 'noon';
    }
    return 'noon';
}
function isBadWeather(condition) {
    const badConditions = ['rainy', 'pouring', 'lightning', 'snowy', 'hail', 'fog'];
    return badConditions.includes(condition);
}
function getGradients(timeOfDay, isBad) {
    const gradients = {
        // SCHÖNWETTER
        'night-good': {
            bright: 'linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
            dark: 'linear-gradient(180deg, #000000 0%, #0a1929 50%, #1a2f42 100%)'
        },
        'early-dawn-good': {
            bright: 'linear-gradient(180deg, #2c3e50 0%, #3a5169 50%, #526c87 100%)',
            dark: 'linear-gradient(180deg, #1a1f2e 0%, #2b3a4d 50%, #3d5167 100%)'
        },
        'late-dawn-good': {
            bright: 'linear-gradient(180deg, #f3904f 0%, #f7b267 50%, #ffd89b 100%)',
            dark: 'linear-gradient(180deg, #d76d47 0%, #e89a5f 50%, #f5c98c 100%)'
        },
        'morning-good': {
            bright: 'linear-gradient(180deg, #56ccf2 0%, #87ceeb 50%, #a8daff 100%)',
            dark: 'linear-gradient(180deg, #3ba5d1 0%, #6bb8e0 50%, #8dc9f2 100%)'
        },
        'noon-good': {
            bright: 'linear-gradient(180deg, #1e88e5 0%, #42a5f5 50%, #64b5f6 100%)',
            dark: 'linear-gradient(180deg, #1565c0 0%, #1e88e5 50%, #42a5f5 100%)'
        },
        'early-afternoon-good': {
            bright: 'linear-gradient(180deg, #42a5f5 0%, #64b5f6 50%, #90caf9 100%)',
            dark: 'linear-gradient(180deg, #2196f3 0%, #42a5f5 50%, #64b5f6 100%)'
        },
        'late-afternoon-good': {
            bright: 'linear-gradient(180deg, #ff9a56 0%, #ffb07c 50%, #ffcda3 100%)',
            dark: 'linear-gradient(180deg, #f57c42 0%, #ff9656 50%, #ffb486 100%)'
        },
        'early-dusk-good': {
            bright: 'linear-gradient(180deg, #fa709a 0%, #fc8ba8 50%, #ffa7bd 100%)',
            dark: 'linear-gradient(180deg, #e85285 0%, #f56a94 50%, #fc8ba8 100%)'
        },
        'late-dusk-good': {
            bright: 'linear-gradient(180deg, #434343 0%, #5a5a5a 50%, #717171 100%)',
            dark: 'linear-gradient(180deg, #1a1a1a 0%, #2f2f2f 50%, #454545 100%)'
        },
        // SCHLECHTWETTER
        'night-bad': {
            bright: 'linear-gradient(180deg, #263238 0%, #37474f 50%, #455a64 100%)',
            dark: 'linear-gradient(180deg, #0d1117 0%, #1a1f2e 50%, #263238 100%)'
        },
        'early-dawn-bad': {
            bright: 'linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)',
            dark: 'linear-gradient(180deg, #2c3e50 0%, #34495e 50%, #455a64 100%)'
        },
        'late-dawn-bad': {
            bright: 'linear-gradient(180deg, #78909c 0%, #90a4ae 50%, #b0bec5 100%)',
            dark: 'linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)'
        },
        'morning-bad': {
            bright: 'linear-gradient(180deg, #607d8b 0%, #78909c 50%, #90a4ae 100%)',
            dark: 'linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)'
        },
        'noon-bad': {
            bright: 'linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)',
            dark: 'linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)'
        },
        'early-afternoon-bad': {
            bright: 'linear-gradient(180deg, #607d8b 0%, #78909c 50%, #90a4ae 100%)',
            dark: 'linear-gradient(180deg, #455a64 0%, #546e7a 50%, #607d8b 100%)'
        },
        'late-afternoon-bad': {
            bright: 'linear-gradient(180deg, #78909c 0%, #8d9da6 50%, #a3b1ba 100%)',
            dark: 'linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)'
        },
        'early-dusk-bad': {
            bright: 'linear-gradient(180deg, #546e7a 0%, #607d8b 50%, #78909c 100%)',
            dark: 'linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)'
        },
        'late-dusk-bad': {
            bright: 'linear-gradient(180deg, #37474f 0%, #455a64 50%, #546e7a 100%)',
            dark: 'linear-gradient(180deg, #1c2329 0%, #263238 50%, #37474f 100%)'
        }
    };
    const key = `${timeOfDay}-${isBad ? 'bad' : 'good'}`;
    return gradients[key] || gradients['noon-good'];
}
// ----------------------------------------------------------------------
// HAUPT KARTE
// ----------------------------------------------------------------------
class MiniWeatherCard extends i {
    static get properties() {
        return {
            hass: { attribute: false },
            config: { state: true },
            _forecast: { state: true },
            _historyData: { state: true },
            _cardWidth: { state: true },
            _cardHeight: { state: true }
        };
    }
    static getConfigElement() { return document.createElement("slick-minimal-weather-card-editor"); }
    static getStubConfig(hass) {
        let entity = "";
        if (hass && hass.states) {
            const weatherEntities = Object.keys(hass.states).filter(id => id.startsWith("weather."));
            if (weatherEntities.length > 0)
                entity = weatherEntities[0];
        }
        return {
            type: 'custom:slick-minimal-weather-card',
            entity: entity,
            title: "Wetter",
            mode: "daily",
            sampling_size: 50,
            history_hours: 24
        };
    }
    constructor() {
        super();
        this._forecast = null;
        this._historyData = [];
        this._cardHeight = 200;
        this._cardWidth = 300;
        this._forecast = null;
        this._historyData = [];
        this._cardHeight = 200;
        this._cardWidth = 300;
        this._resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                this._cardWidth = entry.contentRect.width;
                this._cardHeight = entry.contentRect.height;
                this.requestUpdate();
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this._resizeObserver.observe(this);
        if (this.hass && this.config) {
            this._subscribeForecast();
            this._updateHistory();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._resizeObserver.disconnect();
        this._unsubscribeForecast();
    }
    setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        const newConfig = {
            title: "Wetter",
            mode: "daily",
            temp_sensor: undefined,
            history_entity: undefined,
            sun_entity: "sun.sun",
            sampling_size: 50,
            history_hours: 24,
            ...config
        };
        if (newConfig.mode && !['daily', 'hourly'].includes(newConfig.mode)) {
            throw new Error(`Invalid mode: ${newConfig.mode}. Expected 'daily' or 'hourly'.`);
        }
        this.config = newConfig;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has('config') || changedProps.has('hass')) {
            if (!this._unsub && this.config.entity)
                this._subscribeForecast();
            if (this._historyTimeout)
                clearTimeout(this._historyTimeout);
            this._historyTimeout = window.setTimeout(() => this._updateHistory(), 10000);
        }
    }
    async _subscribeForecast() {
        var _a;
        this._unsubscribeForecast();
        if (!this.hass || !this.config || !this.config.entity || !this.hass.connection)
            return;
        const entityId = this.config.entity;
        const stateObj = this.hass.states[entityId];
        if (!stateObj)
            return;
        if (this.config.mode === 'daily' && ((_a = stateObj.attributes.forecast) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this._forecast = stateObj.attributes.forecast;
            return;
        }
        try {
            this._unsub = await this.hass.connection.subscribeMessage((event) => { if (event && event.forecast) {
                this._forecast = event.forecast;
                this.requestUpdate();
            } }, { type: "weather/subscribe_forecast", forecast_type: this.config.mode || 'daily', entity_id: entityId });
        }
        catch (err) {
            console.error("MiniWeatherCard: Subscription failed", err);
        }
    }
    _unsubscribeForecast() {
        if (this._unsub) {
            this._unsub();
            this._unsub = undefined;
        }
    }
    async _updateHistory() {
        if (!this.hass || !this.config.history_entity) {
            this._historyData = [];
            return;
        }
        const entityId = this.config.history_entity;
        const hoursBack = parseInt(String(this.config.history_hours)) || 24;
        const endTime = new Date();
        const startTime = new Date(endTime.getTime() - hoursBack * 60 * 60 * 1000);
        const startStr = encodeURIComponent(startTime.toISOString());
        const endStr = encodeURIComponent(endTime.toISOString());
        const entityStr = encodeURIComponent(entityId);
        try {
            const history = await this.hass.callApi("GET", `history/period/${startStr}?filter_entity_id=${entityStr}&end_time=${endStr}&minimal_response`);
            if (history && history.length > 0 && history[0].length > 0) {
                const rawData = history[0]
                    .map((pt) => ({ time: new Date(pt.last_changed).getTime(), state: parseFloat(pt.state) }))
                    .filter((pt) => !isNaN(pt.state));
                const targetPoints = this.config.sampling_size || 50;
                if (rawData.length > targetPoints) {
                    const step = Math.ceil(rawData.length / targetPoints);
                    this._historyData = rawData.filter((_, i) => i % step === 0);
                }
                else {
                    this._historyData = rawData;
                }
            }
            else {
                this._historyData = [];
            }
        }
        catch (err) {
            this._historyData = [];
        }
    }
    _calculatePathPoints() {
        const data = this._historyData;
        if (!data || data.length < 2 || this._cardWidth === 0 || this._cardHeight === 0)
            return null;
        const marginY = 20;
        const width = this._cardWidth;
        const height = this._cardHeight;
        const graphHeight = height - (marginY * 2);
        let minVal = data[0].state;
        let maxVal = data[0].state;
        const minTime = data[0].time;
        const maxTime = data[data.length - 1].time;
        data.forEach(pt => {
            if (pt.state < minVal)
                minVal = pt.state;
            if (pt.state > maxVal)
                maxVal = pt.state;
        });
        if (maxVal === minVal) {
            maxVal += 0.5;
            minVal -= 0.5;
        }
        const valRange = maxVal - minVal;
        const timeRange = maxTime - minTime;
        if (timeRange <= 0)
            return null;
        const points = data.map(pt => {
            const x = ((pt.time - minTime) / timeRange) * width;
            const yNormalized = (pt.state - minVal) / valRange;
            const y = height - marginY - (yNormalized * graphHeight);
            return [x, y];
        });
        const linePath = generateSmoothPath(points);
        if (!linePath)
            return null;
        return {
            line: linePath,
            area: linePath + ` L ${width},${height} L 0,${height} Z`
        };
    }
    render() {
        var _a, _b, _c, _d;
        if (!this.config)
            return b ``;
        if (!this.hass)
            return b ``;
        const stateObj = this.config.entity ? this.hass.states[this.config.entity] : undefined;
        let currentTemp = (_b = (_a = stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes) === null || _a === void 0 ? void 0 : _a.temperature) !== null && _b !== void 0 ? _b : '--';
        if (this.config.temp_sensor) {
            const sensorState = this.hass.states[this.config.temp_sensor];
            if (sensorState && !isNaN(parseFloat(sensorState.state)))
                currentTemp = sensorState.state;
        }
        const FIXED_HEIGHT = 162;
        const ROW_HEIGHT = 32;
        let maxRows = Math.floor((this._cardHeight - FIXED_HEIGHT) / ROW_HEIGHT);
        if (maxRows < 0)
            maxRows = 0;
        const showForecast = this._cardHeight > 140;
        const forecast = this._forecast ? this._forecast.slice(0, maxRows) : [];
        const isHourly = this.config.mode === 'hourly';
        let headerLabel = b `&nbsp;`;
        const fullForecast = this._forecast || [];
        if (fullForecast.length > 0) {
            const today = fullForecast[0];
            const h = (_c = today.temperature) !== null && _c !== void 0 ? _c : today.temp_max;
            const l = (_d = today.templow) !== null && _d !== void 0 ? _d : today.temp_min;
            const hVal = h !== undefined ? Math.round(h) : '--';
            const lVal = l !== undefined ? Math.round(l) : '--';
            if (isHourly)
                headerLabel = b `${hVal}°`;
            else
                headerLabel = lVal === '--' ? b `H:${hVal}°` : b `H:${hVal}° L:${lVal}°`;
        }
        const pathData = this._calculatePathPoints();
        const clipPathStyle = pathData ? `path('${pathData.area}')` : 'none';
        const gradients = this._getCurrentGradients();
        return b `
      <ha-card @click="${this._openMoreInfo}" style="cursor: pointer;">
        <div class="bg-container">
            <div class="bg-layer bright" style="background: ${gradients.bright};"></div>
            <div class="bg-layer dark" style="background: ${gradients.dark}; clip-path: ${clipPathStyle}; -webkit-clip-path: ${clipPathStyle};"></div>
            
            ${this.config.history_entity && pathData ? b `
                <svg class="history-svg" viewBox="0 0 ${this._cardWidth} ${this._cardHeight}" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="lineFade" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:white; stop-opacity:0.0;" />
                            <stop offset="20%" style="stop-color:white; stop-opacity:0.1;" />
                            <stop offset="100%" style="stop-color:white; stop-opacity:0.8;" />
                        </linearGradient>
                    </defs>
                    
                    <path d="${pathData.line}" fill="none" stroke="url(#lineFade)" stroke-width="1.2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
                </svg>
            ` : ''}
        </div>

        <div class="container content-layer">
            <div class="header">
                <div class="temp-big">${currentTemp !== undefined ? Math.round(Number(currentTemp)) + "°" : "--"}</div>
                <div class="header-right">
                    <ha-icon icon="${this._getIcon(stateObj ? stateObj.state : '')}" class="main-icon"></ha-icon>
                    <div class="hl-label">${headerLabel}</div>
                </div>
            </div>

            ${showForecast ? b `
                <div class="forecast-list">
                    ${forecast.map((day) => this._renderRow(day))}
                    ${fullForecast.length === 0 ? b `<div class="loading">Lade...</div>` : ''}
                </div>
            ` : b `<div style="flex:1;"></div>`} 

            <div class="footer">${this.config.title}</div>
        </div>
      </ha-card>
    `;
    }
    _renderRow(day) {
        var _a, _b;
        const date = new Date(day.datetime);
        const isHourly = this.config.mode === 'hourly';
        const label = isHourly ? date.toLocaleTimeString(this.hass.language, { hour: '2-digit', minute: '2-digit' }) : date.toLocaleDateString(this.hass.language, { weekday: 'short' });
        const temp = (_a = day.temperature) !== null && _a !== void 0 ? _a : day.temp_max;
        const low = (_b = day.templow) !== null && _b !== void 0 ? _b : day.temp_min;
        if (isHourly && temp !== undefined)
            return b `<div class="row hourly"><div class="day-name">${label}</div><div class="icon-small"><ha-icon icon="${this._getIcon(day.condition)}"></ha-icon></div><div class="temp-single">${Math.round(temp)}°</div></div>`;
        else if (low !== undefined && temp !== undefined)
            return b `<div class="row"><div class="day-name">${label}</div><div class="icon-small"><ha-icon icon="${this._getIcon(day.condition)}"></ha-icon></div><div class="bars"><span class="val-low">${Math.round(low)}°</span><div class="bar-track"><div class="bar-fill"></div></div><span class="val-high">${Math.round(temp)}°</span></div></div>`;
        return b ``;
    }
    _getIcon(condition) {
        const map = { 'sunny': 'mdi:weather-sunny', 'clear-night': 'mdi:weather-night', 'partlycloudy': 'mdi:weather-partly-cloudy', 'cloudy': 'mdi:cloud', 'rainy': 'mdi:weather-rainy', 'pouring': 'mdi:weather-pouring', 'fog': 'mdi:weather-fog', 'hail': 'mdi:weather-hail', 'snowy': 'mdi:weather-snowy', 'lightning': 'mdi:weather-lightning' };
        return map[condition] || 'mdi:weather-cloudy';
    }
    _openMoreInfo() {
        if (this.config.entity) {
            this.dispatchEvent(new CustomEvent('hass-more-info', {
                composed: true,
                detail: { entityId: this.config.entity }
            }));
        }
    }
    _getCurrentGradients() {
        if (!this.hass || !this.config || !this.config.entity) {
            return { bright: 'linear-gradient(180deg, #2c3e50 0%, #151a1e 100%)', dark: 'linear-gradient(180deg, #243342 0%, #0a0a0a 100%)' };
        }
        const stateObj = this.hass.states[this.config.entity];
        if (!stateObj) {
            return { bright: 'linear-gradient(180deg, #2c3e50 0%, #151a1e 100%)', dark: 'linear-gradient(180deg, #243342 0%, #0a0a0a 100%)' };
        }
        const sunEntityId = this.config.sun_entity || 'sun.sun';
        const sunEntity = this.hass.states[sunEntityId];
        let timeOfDay = 'noon';
        if (sunEntity && sunEntity.attributes) {
            const elevation = sunEntity.attributes.elevation || 0;
            const rising = sunEntity.attributes.rising || false;
            timeOfDay = getTimeOfDayFromSun(elevation, rising);
        }
        const condition = stateObj.state;
        const isBad = isBadWeather(condition);
        return getGradients(timeOfDay, isBad);
    }
    static get styles() {
        return i$3 `
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
      .history-svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 3; pointer-events: none; }
      .content-layer { position: relative; z-index: 4; }
      .container { padding: 16px; height: 100%; display: flex; flex-direction: column; box-sizing: border-box; }
      .header { display: flex; justify-content: space-between; align-items: flex-start; flex: 0 0 auto; margin-bottom: 10px; }
      .temp-big { font-size: 3.5rem; font-weight: 200; line-height: 1; text-shadow: 0 1px 5px rgba(0,0,0,0.5); }
      .header-right { display: flex; flex-direction: column; align-items: flex-end; text-shadow: 0 1px 5px rgba(0,0,0,0.5); }
      .main-icon { --mdc-icon-size: 32px; margin-bottom: 4px; filter: drop-shadow(0 1px 5px rgba(0,0,0,0.5)); }
      .hl-label { font-size: 0.9rem; font-weight: 500; opacity: 0.9; }
      .forecast-list { display: flex; flex-direction: column; gap: 0; flex: 1 1 auto; overflow: hidden; justify-content: flex-start; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }
      .row { display: grid; grid-template-columns: 50px 30px 1fr; align-items: center; font-size: 0.95rem; height: 32px; }
      .day-name { font-weight: 600; opacity: 0.9; }
      .icon-small { text-align: center; }
      .icon-small ha-icon { --mdc-icon-size: 20px; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.8)); }
      .bars { display: flex; align-items: center; gap: 8px; justify-content: flex-end; }
      .val-low { opacity: 0.6; width: 25px; text-align: right; }
      .val-high { font-weight: 600; width: 25px; text-align: right; }
      .bar-track { flex-grow: 1; height: 5px; background: rgba(255,255,255,0.15); border-radius: 3px; position: relative; min-width: 50px; max-width: 100px; overflow: hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.2); }
      .bar-fill { position: absolute; left: 0; top: 0; bottom: 0; right: 0; background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%); opacity: 0.8; }
      .hourly .temp-single { text-align: right; font-weight: 600; padding-right: 5px; }
      .footer { margin-top: auto; padding-top: 10px; text-align: center; font-size: 0.7rem; opacity: 0.5; text-transform: uppercase; letter-spacing: 1px; flex: 0 0 auto; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
      .loading { text-align: center; font-size: 0.8rem; opacity: 0.5; padding: 10px; }
    `;
    }
}
if (!customElements.get("slick-minimal-weather-card")) {
    customElements.define("slick-minimal-weather-card", MiniWeatherCard);
    console.info("%c slick-minimal-weather-card Registered", "color: green; font-weight: bold;");
}
class MiniWeatherCardEditor extends i {
    static get properties() { return { hass: {}, _config: {} }; }
    setConfig(config) { this._config = config; }
    _valueChanged(ev) { const newConfig = ev.detail.value; const event = new CustomEvent("config-changed", { detail: { config: newConfig }, bubbles: true, composed: true, }); this.dispatchEvent(event); }
    render() {
        if (!this.hass || !this._config)
            return b ``;
        const schema = [
            { name: "entity", label: "Wetter Entität", selector: { entity: { domain: "weather" } } },
            { name: "title", label: "Titel", selector: { text: {} } },
            { name: "temp_sensor", label: "Temp. Override (Sensor)", selector: { entity: { domain: "sensor" } } },
            { name: "history_entity", label: "Verlauf (Hintergrund)", selector: { entity: { domain: "sensor" } } },
            { name: "sun_entity", label: "Sonnen-Sensor", selector: { entity: { domain: "sun" } } },
            {
                name: "history_hours",
                label: "Verlauf Zeitraum",
                selector: {
                    select: {
                        options: [
                            { value: "1", label: "1 Stunde" },
                            { value: "6", label: "6 Stunden" },
                            { value: "12", label: "12 Stunden" },
                            { value: "24", label: "24 Stunden" },
                            { value: "48", label: "2 Tage" },
                            { value: "72", label: "3 Tage" },
                            { value: "168", label: "7 Tage" }
                        ]
                    }
                }
            },
            { name: "sampling_size", label: "Glättung (Punkte)", selector: { number: { min: 5, max: 200, mode: "slider" } } },
            { name: "mode", label: "Modus", selector: { select: { options: [{ value: "daily", label: "Täglich" }, { value: "hourly", label: "Stündlich" }] } } }
        ];
        return b `<ha-form .hass=${this.hass} .data=${this._config} .schema=${schema} .computeLabel=${(s) => s.label} @value-changed=${this._valueChanged}></ha-form>`;
    }
}
if (!customElements.get("slick-minimal-weather-card-editor")) {
    customElements.define("slick-minimal-weather-card-editor", MiniWeatherCardEditor);
}
window.customCards = window.customCards || [];
window.customCards.push({
    type: "slick-minimal-weather-card",
    name: "Slick Minimal Weather",
    preview: true,
    description: "Minimalist weather card with history and forecasting."
});

export { MiniWeatherCard };
//# sourceMappingURL=minimal-weather-card.js.map
