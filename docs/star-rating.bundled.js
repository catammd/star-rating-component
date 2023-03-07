/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class n{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(e,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var h;const l=window,a=l.trustedTypes,u=a?a.emptyScript:"",c=l.reactiveElementPolyfillSupport,d={toAttribute(t,i){switch(i){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,i)=>i!==t&&(i==i||t==t),f={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:v};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=f){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=f){var e;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:d).toAttribute(i,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,n=e._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=e.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:d;this._$El=n,this[n]=o.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(h=l.reactiveElementVersions)&&void 0!==h?h:l.reactiveElementVersions=[]).push("1.6.1");const b=window,y=b.trustedTypes,m=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,_=`<${$}>`,C=document,S=(t="")=>C.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,M=/>/g,j=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,U=/"/g,T=/^(?:script|style|textarea|title)$/i,L=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),N=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),z=new WeakMap,R=C.createTreeWalker(C,129,null,!1),V=(t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",r=E;for(let i=0;i<s;i++){const s=t[i];let h,l,a=-1,u=0;for(;u<s.length&&(r.lastIndex=u,l=r.exec(s),null!==l);)u=r.lastIndex,r===E?"!--"===l[1]?r=k:void 0!==l[1]?r=M:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=j):void 0!==l[3]&&(r=j):r===j?">"===l[0]?(r=null!=n?n:E,a=-1):void 0===l[1]?a=-2:(a=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?j:'"'===l[3]?U:O):r===U||r===O?r=j:r===k||r===M?r=E:(r=j,n=void 0);const c=r===j&&t[i+1].startsWith("/>")?" ":"";o+=r===E?s+_:a>=0?(e.push(h),s.slice(0,a)+"$lit$"+s.slice(a)+w+c):s+w+(-2===a?(e.push(void 0),i):c)}const h=o+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(h):h,e]};class P{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const r=t.length-1,h=this.parts,[l,a]=V(t,i);if(this.el=P.createElement(l,s),R.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=R.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const s=a[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?F:"?"===i[1]?J:"@"===i[1]?W:Z})}else h.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(T.test(e.tagName)){const t=e.textContent.split(w),i=t.length-1;if(i>0){e.textContent=y?y.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],S()),R.nextNode(),h.push({type:2,index:++n});e.append(t[i],S())}}}else if(8===e.nodeType)if(e.data===$)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(w,t+1));)h.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,i){const s=C.createElement("template");return s.innerHTML=t,s}}function I(t,i,s=t,e){var n,o,r,h;if(i===N)return i;let l=void 0!==e?null===(n=s._$Co)||void 0===n?void 0:n[e]:s._$Cl;const a=A(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,e)),void 0!==e?(null!==(r=(h=s)._$Co)&&void 0!==r?r:h._$Co=[])[e]=l:s._$Cl=l),void 0!==l&&(i=I(t,l._$AS(t,i.values),l,e)),i}class B{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:C).importNode(s,!0);R.currentNode=n;let o=R.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new D(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new q(o,this,t)),this.u.push(i),l=e[++h]}r!==(null==l?void 0:l.index)&&(o=R.nextNode(),r++)}return n}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class D{constructor(t,i,s,e){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=I(this,t,i),A(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==N&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(s);else{const t=new B(n,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let i=z.get(t.strings);return void 0===i&&z.set(t.strings,i=new P(t)),i}k(t){x(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new D(this.O(S()),this.O(S()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class Z{constructor(t,i,s,e,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=I(this,t,i,0),o=!A(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const e=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=I(this,e[s+r],i,r),h===N&&(h=this._$AH[r]),o||(o=!A(h)||h!==this._$AH[r]),h===H?t=H:t!==H&&(t+=(null!=h?h:"")+n[r+1]),this._$AH[r]=h}o&&!e&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const K=y?y.emptyScript:"";class J extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class W extends Z{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=I(this,t,i,0))&&void 0!==s?s:H)===N)return;const e=this._$AH,n=t===H&&e!==H||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==H&&(e===H||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const G=b.litHtmlPolyfillSupport;null==G||G(P,D),(null!==(g=b.litHtmlVersions)&&void 0!==g?g:b.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,Q;class Y extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new D(i.insertBefore(S(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}Y.finalized=!0,Y._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function et(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):st(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function nt(t){return et({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=({finisher:t,descriptor:i})=>(s,e)=>{var n;if(void 0===e){const e=null!==(n=s.originalKey)&&void 0!==n?n:s.key,o=null!=i?{kind:"method",placement:"prototype",key:e,descriptor:i(s.key)}:{...s,key:e};return null!=t&&(o.finisher=function(i){t(i,e)}),o}{const n=s.constructor;void 0!==i&&Object.defineProperty(s,e,i(e)),null==t||t(n,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=1,lt=2,at=t=>(...i)=>({_$litDirective$:t,values:i});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=at(class extends ut{constructor(t){var i;if(super(t),t.type!==ht||"style"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((i,s)=>{const e=t[s];return null==e?i:i+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`}),"")}update(t,[i]){const{style:s}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in i)this.vt.add(t);return this.render(i)}this.vt.forEach((t=>{null==i[t]&&(this.vt.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in i){const e=i[t];null!=e&&(this.vt.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e)}return N}}),dt=at(class extends ut{constructor(t){var i;if(super(t),t.type!==ht||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var s,e;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(s=this.st)||void 0===s?void 0:s.has(t))&&this.nt.add(t);return this.render(i)}const n=t.element.classList;this.nt.forEach((t=>{t in i||(n.remove(t),this.nt.delete(t))}));for(const t in i){const s=!!i[t];s===this.nt.has(t)||(null===(e=this.st)||void 0===e?void 0:e.has(t))||(s?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return N}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class vt extends ut{constructor(t){if(super(t),this.it=H,t.type!==lt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||null==t)return this._t=void 0,this.it=t;if(t===N)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}vt.directiveName="unsafeHTML",vt.resultType=1;const ft=at(vt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt extends vt{}pt.directiveName="unsafeSVG",pt.resultType=2;const gt=at(pt);var bt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let yt=class extends Y{constructor(){super(...arguments),this.svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.07512 22.3085L6.21423 14.999L0.476607 10.1393C0.269663 9.96838 0.120233 9.73794 0.0485476 9.4792C-0.0231375 9.22047 -0.0136153 8.94595 0.0758251 8.69282C0.165265 8.43968 0.330304 8.22015 0.548596 8.06394C0.766889 7.90774 1.02789 7.82241 1.29627 7.8195H8.29337L10.7823 0.859942C10.8692 0.60817 11.0324 0.394579 11.2492 0.239984C11.466 0.0853893 11.7256 0 11.9918 0C12.2581 0 12.5177 0.0853893 12.7345 0.239984C12.9513 0.394579 13.1145 0.60817 13.2013 0.859942L15.7103 7.8695H22.7074C22.977 7.87512 23.2384 7.96323 23.4564 8.12197C23.6744 8.28072 23.8386 8.50247 23.9268 8.75737C24.015 9.01227 24.023 9.28809 23.9498 9.54768C23.8765 9.80728 23.7255 10.0382 23.5171 10.2093L17.6195 15.049L19.9086 22.2385C20.0126 22.4941 20.0319 22.7711 19.9638 23.0385C19.8956 23.3058 19.7436 23.5439 19.53 23.7184C19.3164 23.8929 19.0524 23.985 18.7769 23.9984C18.5014 24.0118 18.2289 23.9414 17.9994 23.7884L12.0148 19.7187L6.00432 23.7884C5.78082 23.9337 5.51778 24.0088 5.2514 23.9984C4.98503 23.988 4.72841 23.8907 4.51687 23.7284C4.30534 23.5661 4.14927 23.3431 4.07016 23.0885C3.99105 22.8338 3.99278 22.5621 4.07512 22.3085Z" fill="currentColor"/></svg>',this.label=""}connectedCallback(){super.connectedCallback()}firstUpdated(){this.setLabel()}disconnectedCallback(){super.disconnectedCallback()}setLabel(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}render(){return L` ${gt(this.svg)} `}};function mt(t,i){const s={waitUntilFirstUpdate:!1,...i};return(i,e)=>{const{update:n}=i,o=Array.isArray(t)?t:[t];i.update=function(t){o.forEach((i=>{const n=i;if(t.has(n)){const i=t.get(n),o=this[n];i!==o&&(s.waitUntilFirstUpdate&&!this.hasUpdated||this[e](i,o))}})),n.call(this,t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */yt.styles=o`
    :host {
      display: inline-block;
      width: 1em;
      height: 1em;
    }

    svg {
      display: block;
      height: 100%;
      width: 100%;
    }
  `,bt([et()],yt.prototype,"label",void 0),yt=bt([it("rating-icon")],yt);var wt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let $t=class extends Y{constructor(){super(...arguments),this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.hoverValue=0,this.isHovering=!1,this.getSymbol=()=>'<rating-icon label="This is a rating"></rating-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromXCoordinate(t){const{left:i,width:s}=this.rating.getBoundingClientRect(),e=this.roundToPrecision((t-i)/s*this.max,this.precision);return this.ensureNumberBetweenMinAndMax(e,0,this.max)}roundToPrecision(t,i=.5){const s=1/i;return Math.ceil(t*s)/s}ensureNumberBetweenMinAndMax(t,i,s){const e=t=>Object.is(t,-0)?0:t;return e(t<i?i:t>s?s:t)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.dispatchEvent(new CustomEvent("sl-change")))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const i=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||"ArrowLeft"===t.key){const i=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),t.preventDefault()}if("ArrowUp"===t.key||"ArrowRight"===t.key){const i=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.dispatchEvent(new CustomEvent("rating-value-change"))}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleHoverValueChange(){const t=new CustomEvent("rating-hover",{detail:{phase:"move",value:this.hoverValue}});this.dispatchEvent(t)}handleIsHoveringChange(){const t=new CustomEvent("rating-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}});this.dispatchEvent(t)}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=Array.from(Array(this.max).keys());let i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,L` <div
      part="base"
      class=${dt({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled})}
      role="slider"
      aria-label=${this.label}
      aria-disabled=${this.disabled?"true":"false"}
      aria-readonly=${this.readonly?"true":"false"}
      aria-valuenow=${this.value}
      aria-valuemin=${0}
      aria-valuemax=${this.max}
      tabindex=${this.disabled?"-1":"0"}
      @click=${this.handleClick}
      @keydown=${this.handleKeyDown}
      @mouseenter=${this.handleMouseEnter}
      @mouseleave=${this.handleMouseLeave}
      @mousemove=${this.handleMouseMove}
    >
      <span class="rating__symbols rating__symbols--inactive">
        ${t.map((t=>L`
            <span
              class=${dt({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===t+1})}
              role="presentation"
              @mouseenter=${this.handleMouseEnter}
            >
              ${ft(this.getSymbol(t+1))}
            </span>
          `))}
      </span>
      <span class="rating__symbols rating__symbols--indicator">
        ${t.map((t=>L`
            <span
              class=${dt({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===t+1})}
              style=${ct({clipPath:i>t+1?"none":`inset(0 ${100-(i-t)/1*100}% 0 0)`})}
              role="presentation"
            >
              ${ft(this.getSymbol(t+1))}
            </span>
          `))}
      </span>
    </div>`}};$t.styles=o`
    :host {
      --color-blue: #0ea5e9;
      --color-gray: #ccc;
      --color-active: #f2a702;
      --spacing-small: 2px;
      --star-color: var(--color-gray);
      --star-color-active: var(--color-active);
      --star-size: 1.2rem;
      --star-spacing: var(--spacing-small);
      --focus-color: var(--color-blue);
      --focus-style: solid;
      --focus-width: 2px;
      --focus-offset: 1px;
      --border-radius-medium: 0.25rem;
      --focus-ring: var(--focus-style) var(--focus-width) var(--focus-color);

      display: inline-flex;
    }
    .rating {
      position: relative;
      display: inline-flex;
      border-radius: var(--border-radius-medium);
      vertical-align: middle;
    }

    .rating:focus {
      outline: none;
    }

    .rating:focus-visible {
      outline: var(--focus-ring);
      outline-offset: var(--focus-offset);
    }

    .rating__symbols {
      display: inline-flex;
      position: relative;
      font-size: var(--star-size);
      line-height: 0;
      color: var(--star-color);
      white-space: nowrap;
      cursor: pointer;
    }

    .rating__symbols > * {
      padding: var(--star-spacing);
    }

    .rating__symbols--indicator {
      position: absolute;
      top: 0;
      left: 0;
      color: var(--star-color-active);
      pointer-events: none;
    }

    .rating--disabled .rating__symbols,
    .rating--readonly .rating__symbols {
      cursor: default;
    }

    .rating--disabled {
      opacity: 0.5;
    }

    .rating--disabled .rating__symbols {
      cursor: not-allowed;
    }
  `,wt([et()],$t.prototype,"label",void 0),wt([et({type:Number})],$t.prototype,"value",void 0),wt([et({type:Number})],$t.prototype,"max",void 0),wt([et({type:Number})],$t.prototype,"precision",void 0),wt([et({type:Boolean,reflect:!0})],$t.prototype,"readonly",void 0),wt([et({type:Boolean,reflect:!0})],$t.prototype,"disabled",void 0),wt([function(t,i){return ot({descriptor:s=>{const e={get(){var i,s;return null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof s?Symbol():"__"+s;e.get=function(){var s,e;return void 0===this[i]&&(this[i]=null!==(e=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(t))&&void 0!==e?e:null),this[i]}}return e}})}(".rating")],$t.prototype,"rating",void 0),wt([nt()],$t.prototype,"hoverValue",void 0),wt([nt()],$t.prototype,"isHovering",void 0),wt([mt("hoverValue")],$t.prototype,"handleHoverValueChange",null),wt([mt("isHovering")],$t.prototype,"handleIsHoveringChange",null),$t=wt([it("star-rating")],$t);export{$t as StarRating};
