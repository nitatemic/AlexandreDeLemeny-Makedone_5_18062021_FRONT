/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dompurify/dist/purify.min.js":
/*!***************************************************!*\
  !*** ./node_modules/dompurify/dist/purify.min.js ***!
  \***************************************************/
/***/ (function(module) {

eval("/*! @license DOMPurify 2.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.1/LICENSE */\n!function(e,t){ true?module.exports=t():0}(this,(function(){\"use strict\";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,l=Object.create,c=\"undefined\"!=typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var f,m=x(Array.prototype.forEach),d=x(Array.prototype.pop),p=x(Array.prototype.push),g=x(String.prototype.toLowerCase),h=x(String.prototype.match),y=x(String.prototype.replace),v=x(String.prototype.indexOf),b=x(String.prototype.trim),T=x(RegExp.prototype.test),A=(f=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(f,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function S(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if(\"string\"==typeof i){var a=g(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function w(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function N(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return x(n.get);if(\"function\"==typeof n.value)return x(n.value)}e=r(e)}return function(e){return console.warn(\"fallback value for\",e),null}}var k=i([\"a\",\"abbr\",\"acronym\",\"address\",\"area\",\"article\",\"aside\",\"audio\",\"b\",\"bdi\",\"bdo\",\"big\",\"blink\",\"blockquote\",\"body\",\"br\",\"button\",\"canvas\",\"caption\",\"center\",\"cite\",\"code\",\"col\",\"colgroup\",\"content\",\"data\",\"datalist\",\"dd\",\"decorator\",\"del\",\"details\",\"dfn\",\"dialog\",\"dir\",\"div\",\"dl\",\"dt\",\"element\",\"em\",\"fieldset\",\"figcaption\",\"figure\",\"font\",\"footer\",\"form\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"i\",\"img\",\"input\",\"ins\",\"kbd\",\"label\",\"legend\",\"li\",\"main\",\"map\",\"mark\",\"marquee\",\"menu\",\"menuitem\",\"meter\",\"nav\",\"nobr\",\"ol\",\"optgroup\",\"option\",\"output\",\"p\",\"picture\",\"pre\",\"progress\",\"q\",\"rp\",\"rt\",\"ruby\",\"s\",\"samp\",\"section\",\"select\",\"shadow\",\"small\",\"source\",\"spacer\",\"span\",\"strike\",\"strong\",\"style\",\"sub\",\"summary\",\"sup\",\"table\",\"tbody\",\"td\",\"template\",\"textarea\",\"tfoot\",\"th\",\"thead\",\"time\",\"tr\",\"track\",\"tt\",\"u\",\"ul\",\"var\",\"video\",\"wbr\"]),E=i([\"svg\",\"a\",\"altglyph\",\"altglyphdef\",\"altglyphitem\",\"animatecolor\",\"animatemotion\",\"animatetransform\",\"circle\",\"clippath\",\"defs\",\"desc\",\"ellipse\",\"filter\",\"font\",\"g\",\"glyph\",\"glyphref\",\"hkern\",\"image\",\"line\",\"lineargradient\",\"marker\",\"mask\",\"metadata\",\"mpath\",\"path\",\"pattern\",\"polygon\",\"polyline\",\"radialgradient\",\"rect\",\"stop\",\"style\",\"switch\",\"symbol\",\"text\",\"textpath\",\"title\",\"tref\",\"tspan\",\"view\",\"vkern\"]),D=i([\"feBlend\",\"feColorMatrix\",\"feComponentTransfer\",\"feComposite\",\"feConvolveMatrix\",\"feDiffuseLighting\",\"feDisplacementMap\",\"feDistantLight\",\"feFlood\",\"feFuncA\",\"feFuncB\",\"feFuncG\",\"feFuncR\",\"feGaussianBlur\",\"feMerge\",\"feMergeNode\",\"feMorphology\",\"feOffset\",\"fePointLight\",\"feSpecularLighting\",\"feSpotLight\",\"feTile\",\"feTurbulence\"]),O=i([\"animate\",\"color-profile\",\"cursor\",\"discard\",\"fedropshadow\",\"feimage\",\"font-face\",\"font-face-format\",\"font-face-name\",\"font-face-src\",\"font-face-uri\",\"foreignobject\",\"hatch\",\"hatchpath\",\"mesh\",\"meshgradient\",\"meshpatch\",\"meshrow\",\"missing-glyph\",\"script\",\"set\",\"solidcolor\",\"unknown\",\"use\"]),R=i([\"math\",\"menclose\",\"merror\",\"mfenced\",\"mfrac\",\"mglyph\",\"mi\",\"mlabeledtr\",\"mmultiscripts\",\"mn\",\"mo\",\"mover\",\"mpadded\",\"mphantom\",\"mroot\",\"mrow\",\"ms\",\"mspace\",\"msqrt\",\"mstyle\",\"msub\",\"msup\",\"msubsup\",\"mtable\",\"mtd\",\"mtext\",\"mtr\",\"munder\",\"munderover\"]),_=i([\"maction\",\"maligngroup\",\"malignmark\",\"mlongdiv\",\"mscarries\",\"mscarry\",\"msgroup\",\"mstack\",\"msline\",\"msrow\",\"semantics\",\"annotation\",\"annotation-xml\",\"mprescripts\",\"none\"]),M=i([\"#text\"]),L=i([\"accept\",\"action\",\"align\",\"alt\",\"autocapitalize\",\"autocomplete\",\"autopictureinpicture\",\"autoplay\",\"background\",\"bgcolor\",\"border\",\"capture\",\"cellpadding\",\"cellspacing\",\"checked\",\"cite\",\"class\",\"clear\",\"color\",\"cols\",\"colspan\",\"controls\",\"controlslist\",\"coords\",\"crossorigin\",\"datetime\",\"decoding\",\"default\",\"dir\",\"disabled\",\"disablepictureinpicture\",\"disableremoteplayback\",\"download\",\"draggable\",\"enctype\",\"enterkeyhint\",\"face\",\"for\",\"headers\",\"height\",\"hidden\",\"high\",\"href\",\"hreflang\",\"id\",\"inputmode\",\"integrity\",\"ismap\",\"kind\",\"label\",\"lang\",\"list\",\"loading\",\"loop\",\"low\",\"max\",\"maxlength\",\"media\",\"method\",\"min\",\"minlength\",\"multiple\",\"muted\",\"name\",\"noshade\",\"novalidate\",\"nowrap\",\"open\",\"optimum\",\"pattern\",\"placeholder\",\"playsinline\",\"poster\",\"preload\",\"pubdate\",\"radiogroup\",\"readonly\",\"rel\",\"required\",\"rev\",\"reversed\",\"role\",\"rows\",\"rowspan\",\"spellcheck\",\"scope\",\"selected\",\"shape\",\"size\",\"sizes\",\"span\",\"srclang\",\"start\",\"src\",\"srcset\",\"step\",\"style\",\"summary\",\"tabindex\",\"title\",\"translate\",\"type\",\"usemap\",\"valign\",\"value\",\"width\",\"xmlns\",\"slot\"]),F=i([\"accent-height\",\"accumulate\",\"additive\",\"alignment-baseline\",\"ascent\",\"attributename\",\"attributetype\",\"azimuth\",\"basefrequency\",\"baseline-shift\",\"begin\",\"bias\",\"by\",\"class\",\"clip\",\"clippathunits\",\"clip-path\",\"clip-rule\",\"color\",\"color-interpolation\",\"color-interpolation-filters\",\"color-profile\",\"color-rendering\",\"cx\",\"cy\",\"d\",\"dx\",\"dy\",\"diffuseconstant\",\"direction\",\"display\",\"divisor\",\"dur\",\"edgemode\",\"elevation\",\"end\",\"fill\",\"fill-opacity\",\"fill-rule\",\"filter\",\"filterunits\",\"flood-color\",\"flood-opacity\",\"font-family\",\"font-size\",\"font-size-adjust\",\"font-stretch\",\"font-style\",\"font-variant\",\"font-weight\",\"fx\",\"fy\",\"g1\",\"g2\",\"glyph-name\",\"glyphref\",\"gradientunits\",\"gradienttransform\",\"height\",\"href\",\"id\",\"image-rendering\",\"in\",\"in2\",\"k\",\"k1\",\"k2\",\"k3\",\"k4\",\"kerning\",\"keypoints\",\"keysplines\",\"keytimes\",\"lang\",\"lengthadjust\",\"letter-spacing\",\"kernelmatrix\",\"kernelunitlength\",\"lighting-color\",\"local\",\"marker-end\",\"marker-mid\",\"marker-start\",\"markerheight\",\"markerunits\",\"markerwidth\",\"maskcontentunits\",\"maskunits\",\"max\",\"mask\",\"media\",\"method\",\"mode\",\"min\",\"name\",\"numoctaves\",\"offset\",\"operator\",\"opacity\",\"order\",\"orient\",\"orientation\",\"origin\",\"overflow\",\"paint-order\",\"path\",\"pathlength\",\"patterncontentunits\",\"patterntransform\",\"patternunits\",\"points\",\"preservealpha\",\"preserveaspectratio\",\"primitiveunits\",\"r\",\"rx\",\"ry\",\"radius\",\"refx\",\"refy\",\"repeatcount\",\"repeatdur\",\"restart\",\"result\",\"rotate\",\"scale\",\"seed\",\"shape-rendering\",\"specularconstant\",\"specularexponent\",\"spreadmethod\",\"startoffset\",\"stddeviation\",\"stitchtiles\",\"stop-color\",\"stop-opacity\",\"stroke-dasharray\",\"stroke-dashoffset\",\"stroke-linecap\",\"stroke-linejoin\",\"stroke-miterlimit\",\"stroke-opacity\",\"stroke\",\"stroke-width\",\"style\",\"surfacescale\",\"systemlanguage\",\"tabindex\",\"targetx\",\"targety\",\"transform\",\"text-anchor\",\"text-decoration\",\"text-rendering\",\"textlength\",\"type\",\"u1\",\"u2\",\"unicode\",\"values\",\"viewbox\",\"visibility\",\"version\",\"vert-adv-y\",\"vert-origin-x\",\"vert-origin-y\",\"width\",\"word-spacing\",\"wrap\",\"writing-mode\",\"xchannelselector\",\"ychannelselector\",\"x\",\"x1\",\"x2\",\"xmlns\",\"y\",\"y1\",\"y2\",\"z\",\"zoomandpan\"]),I=i([\"accent\",\"accentunder\",\"align\",\"bevelled\",\"close\",\"columnsalign\",\"columnlines\",\"columnspan\",\"denomalign\",\"depth\",\"dir\",\"display\",\"displaystyle\",\"encoding\",\"fence\",\"frame\",\"height\",\"href\",\"id\",\"largeop\",\"length\",\"linethickness\",\"lspace\",\"lquote\",\"mathbackground\",\"mathcolor\",\"mathsize\",\"mathvariant\",\"maxsize\",\"minsize\",\"movablelimits\",\"notation\",\"numalign\",\"open\",\"rowalign\",\"rowlines\",\"rowspacing\",\"rowspan\",\"rspace\",\"rquote\",\"scriptlevel\",\"scriptminsize\",\"scriptsizemultiplier\",\"selection\",\"separator\",\"separators\",\"stretchy\",\"subscriptshift\",\"supscriptshift\",\"symmetric\",\"voffset\",\"width\",\"xmlns\"]),C=i([\"xlink:href\",\"xml:id\",\"xlink:title\",\"xml:space\",\"xmlns:xlink\"]),z=a(/\\{\\{[\\s\\S]*|[\\s\\S]*\\}\\}/gm),H=a(/<%[\\s\\S]*|[\\s\\S]*%>/gm),U=a(/^data-[\\-\\w.\\u00B7-\\uFFFF]/),j=a(/^aria-[\\-\\w]+$/),B=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\\-]+(?:[^a-z+.\\-:]|$))/i),P=a(/^(?:\\w+script|data):/i),W=a(/[\\u0000-\\u0020\\u00A0\\u1680\\u180E\\u2000-\\u2029\\u205F\\u3000]/g),G=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var K=function(){return\"undefined\"==typeof window?null:window},V=function(e,t){if(\"object\"!==(void 0===e?\"undefined\":G(e))||\"function\"!=typeof e.createPolicy)return null;var n=null,r=\"data-tt-policy-suffix\";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o=\"dompurify\"+(n?\"#\"+n:\"\");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn(\"TrustedTypes policy \"+o+\" could not be created.\"),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),n=function(t){return e(t)};if(n.version=\"2.3.1\",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,f=t.NamedNodeMap,x=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,Y=t.Text,X=t.Comment,$=t.DOMParser,Z=t.trustedTypes,J=s.prototype,Q=N(J,\"cloneNode\"),ee=N(J,\"nextSibling\"),te=N(J,\"childNodes\"),ne=N(J,\"parentNode\");if(\"function\"==typeof l){var re=o.createElement(\"template\");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument)}var oe=V(Z,r),ie=oe&&ze?oe.createHTML(\"\"):\"\",ae=o,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=ae.getElementsByTagName,fe=r.importNode,me={};try{me=w(o).documentMode?o.documentMode:{}}catch(e){}var de={};n.isSupported=\"function\"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==me;var pe=z,ge=H,he=U,ye=j,ve=P,be=W,Te=B,Ae=null,xe=S({},[].concat(q(k),q(E),q(D),q(R),q(M))),Se=null,we=S({},[].concat(q(L),q(F),q(I),q(C))),Ne=null,ke=null,Ee=!0,De=!0,Oe=!1,Re=!1,_e=!1,Me=!1,Le=!1,Fe=!1,Ie=!1,Ce=!0,ze=!1,He=!0,Ue=!0,je=!1,Be={},Pe=null,We=S({},[\"annotation-xml\",\"audio\",\"colgroup\",\"desc\",\"foreignobject\",\"head\",\"iframe\",\"math\",\"mi\",\"mn\",\"mo\",\"ms\",\"mtext\",\"noembed\",\"noframes\",\"noscript\",\"plaintext\",\"script\",\"style\",\"svg\",\"template\",\"thead\",\"title\",\"video\",\"xmp\"]),Ge=null,qe=S({},[\"audio\",\"video\",\"img\",\"source\",\"image\",\"track\"]),Ke=null,Ve=S({},[\"alt\",\"class\",\"for\",\"id\",\"label\",\"name\",\"pattern\",\"placeholder\",\"role\",\"summary\",\"title\",\"value\",\"style\",\"xmlns\"]),Ye=\"http://www.w3.org/1998/Math/MathML\",Xe=\"http://www.w3.org/2000/svg\",$e=\"http://www.w3.org/1999/xhtml\",Ze=$e,Je=!1,Qe=null,et=o.createElement(\"form\"),tt=function(e){Qe&&Qe===e||(e&&\"object\"===(void 0===e?\"undefined\":G(e))||(e={}),e=w(e),Ae=\"ALLOWED_TAGS\"in e?S({},e.ALLOWED_TAGS):xe,Se=\"ALLOWED_ATTR\"in e?S({},e.ALLOWED_ATTR):we,Ke=\"ADD_URI_SAFE_ATTR\"in e?S(w(Ve),e.ADD_URI_SAFE_ATTR):Ve,Ge=\"ADD_DATA_URI_TAGS\"in e?S(w(qe),e.ADD_DATA_URI_TAGS):qe,Pe=\"FORBID_CONTENTS\"in e?S({},e.FORBID_CONTENTS):We,Ne=\"FORBID_TAGS\"in e?S({},e.FORBID_TAGS):{},ke=\"FORBID_ATTR\"in e?S({},e.FORBID_ATTR):{},Be=\"USE_PROFILES\"in e&&e.USE_PROFILES,Ee=!1!==e.ALLOW_ARIA_ATTR,De=!1!==e.ALLOW_DATA_ATTR,Oe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=e.SAFE_FOR_TEMPLATES||!1,_e=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,je=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,Ze=e.NAMESPACE||$e,Re&&(De=!1),Ie&&(Fe=!0),Be&&(Ae=S({},[].concat(q(M))),Se=[],!0===Be.html&&(S(Ae,k),S(Se,L)),!0===Be.svg&&(S(Ae,E),S(Se,F),S(Se,C)),!0===Be.svgFilters&&(S(Ae,D),S(Se,F),S(Se,C)),!0===Be.mathMl&&(S(Ae,R),S(Se,I),S(Se,C))),e.ADD_TAGS&&(Ae===xe&&(Ae=w(Ae)),S(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(Se===we&&(Se=w(Se)),S(Se,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&S(Ke,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(Pe===We&&(Pe=w(Pe)),S(Pe,e.FORBID_CONTENTS)),Ue&&(Ae[\"#text\"]=!0),_e&&S(Ae,[\"html\",\"head\",\"body\"]),Ae.table&&(S(Ae,[\"tbody\"]),delete Ne.tbody),i&&i(e),Qe=e)},nt=S({},[\"mi\",\"mo\",\"mn\",\"ms\",\"mtext\"]),rt=S({},[\"foreignobject\",\"desc\",\"title\",\"annotation-xml\"]),ot=S({},E);S(ot,D),S(ot,O);var it=S({},R);S(it,_);var at=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:$e,tagName:\"template\"});var n=g(e.tagName),r=g(t.tagName);if(e.namespaceURI===Xe)return t.namespaceURI===$e?\"svg\"===n:t.namespaceURI===Ye?\"svg\"===n&&(\"annotation-xml\"===r||nt[r]):Boolean(ot[n]);if(e.namespaceURI===Ye)return t.namespaceURI===$e?\"math\"===n:t.namespaceURI===Xe?\"math\"===n&&rt[r]:Boolean(it[n]);if(e.namespaceURI===$e){if(t.namespaceURI===Xe&&!rt[r])return!1;if(t.namespaceURI===Ye&&!nt[r])return!1;var o=S({},[\"title\",\"style\",\"font\",\"a\",\"script\"]);return!it[n]&&(o[n]||!ot[n])}return!1},lt=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},ct=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),\"is\"===e&&!Se[e])if(Fe||Ie)try{lt(t)}catch(e){}else try{t.setAttribute(e,\"\")}catch(e){}},st=function(e){var t=void 0,n=void 0;if(Le)e=\"<remove></remove>\"+e;else{var r=h(e,/^[\\r\\n\\t ]+/);n=r&&r[0]}var i=oe?oe.createHTML(e):e;if(Ze===$e)try{t=(new $).parseFromString(i,\"text/html\")}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Ze,\"template\",null);try{t.documentElement.innerHTML=Je?\"\":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Ze===$e?ue.call(t,_e?\"html\":\"body\")[0]:_e?t.documentElement:a},ut=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ft=function(e){return!(e instanceof Y||e instanceof X)&&!(\"string\"==typeof e.nodeName&&\"string\"==typeof e.textContent&&\"function\"==typeof e.removeChild&&e.attributes instanceof x&&\"function\"==typeof e.removeAttribute&&\"function\"==typeof e.setAttribute&&\"string\"==typeof e.namespaceURI&&\"function\"==typeof e.insertBefore)},mt=function(e){return\"object\"===(void 0===c?\"undefined\":G(c))?e instanceof c:e&&\"object\"===(void 0===e?\"undefined\":G(e))&&\"number\"==typeof e.nodeType&&\"string\"==typeof e.nodeName},dt=function(e,t,r){de[e]&&m(de[e],(function(e){e.call(n,t,r,Qe)}))},pt=function(e){var t=void 0;if(dt(\"beforeSanitizeElements\",e,null),ft(e))return lt(e),!0;if(h(e.nodeName,/[\\u0080-\\uFFFF]/))return lt(e),!0;var r=g(e.nodeName);if(dt(\"uponSanitizeElement\",e,{tagName:r,allowedTags:Ae}),!mt(e.firstElementChild)&&(!mt(e.content)||!mt(e.content.firstElementChild))&&T(/<[/\\w]/g,e.innerHTML)&&T(/<[/\\w]/g,e.textContent))return lt(e),!0;if(\"select\"===r&&T(/<template/i,e.innerHTML))return lt(e),!0;if(!Ae[r]||Ne[r]){if(Ue&&!Pe[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e))}return lt(e),!0}return e instanceof s&&!at(e)?(lt(e),!0):\"noscript\"!==r&&\"noembed\"!==r||!T(/<\\/no(script|embed)/i,e.innerHTML)?(Re&&3===e.nodeType&&(t=e.textContent,t=y(t,pe,\" \"),t=y(t,ge,\" \"),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),dt(\"afterSanitizeElements\",e,null),!1):(lt(e),!0)},gt=function(e,t,n){if(He&&(\"id\"===t||\"name\"===t)&&(n in o||n in et))return!1;if(De&&!ke[t]&&T(he,t));else if(Ee&&T(ye,t));else{if(!Se[t]||ke[t])return!1;if(Ke[t]);else if(T(Te,y(n,be,\"\")));else if(\"src\"!==t&&\"xlink:href\"!==t&&\"href\"!==t||\"script\"===e||0!==v(n,\"data:\")||!Ge[e]){if(Oe&&!T(ve,y(n,be,\"\")));else if(n)return!1}else;}return!0},ht=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;dt(\"beforeSanitizeAttributes\",e,null);var a=e.attributes;if(a){var l={attrName:\"\",attrValue:\"\",keepAttr:!0,allowedAttributes:Se};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=b(t.value),o=g(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,dt(\"uponSanitizeAttribute\",e,l),r=l.attrValue,!l.forceKeepAttr&&(ct(s,e),l.keepAttr))if(T(/\\/>/i,r))ct(s,e);else{Re&&(r=y(r,pe,\" \"),r=y(r,ge,\" \"));var f=e.nodeName.toLowerCase();if(gt(f,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),d(n.removed)}catch(e){}}}dt(\"afterSanitizeAttributes\",e,null)}},yt=function e(t){var n=void 0,r=ut(t);for(dt(\"beforeSanitizeShadowDOM\",t,null);n=r.nextNode();)dt(\"uponSanitizeShadowNode\",n,null),pt(n)||(n.content instanceof a&&e(n.content),ht(n));dt(\"afterSanitizeShadowDOM\",t,null)};return n.sanitize=function(e,o){var i=void 0,l=void 0,s=void 0,u=void 0,f=void 0;if((Je=!e)&&(e=\"\\x3c!--\\x3e\"),\"string\"!=typeof e&&!mt(e)){if(\"function\"!=typeof e.toString)throw A(\"toString is not a function\");if(\"string\"!=typeof(e=e.toString()))throw A(\"dirty is not a string, aborting\")}if(!n.isSupported){if(\"object\"===G(t.toStaticHTML)||\"function\"==typeof t.toStaticHTML){if(\"string\"==typeof e)return t.toStaticHTML(e);if(mt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Me||tt(o),n.removed=[],\"string\"==typeof e&&(je=!1),je);else if(e instanceof c)1===(l=(i=st(\"\\x3c!----\\x3e\")).ownerDocument.importNode(e,!0)).nodeType&&\"BODY\"===l.nodeName||\"HTML\"===l.nodeName?i=l:i.appendChild(l);else{if(!Fe&&!Re&&!_e&&-1===e.indexOf(\"<\"))return oe&&ze?oe.createHTML(e):e;if(!(i=st(e)))return Fe?null:ie}i&&Le&&lt(i.firstChild);for(var m=ut(je?e:i);s=m.nextNode();)3===s.nodeType&&s===u||pt(s)||(s.content instanceof a&&yt(s.content),ht(s),u=s);if(u=null,je)return e;if(Fe){if(Ie)for(f=se.call(i.ownerDocument);i.firstChild;)f.appendChild(i.firstChild);else f=i;return Ce&&(f=fe.call(r,f,!0)),f}var d=_e?i.outerHTML:i.innerHTML;return Re&&(d=y(d,pe,\" \"),d=y(d,ge,\" \")),oe&&ze?oe.createHTML(d):d},n.setConfig=function(e){tt(e),Me=!0},n.clearConfig=function(){Qe=null,Me=!1},n.isValidAttribute=function(e,t,n){Qe||tt({});var r=g(e),o=g(t);return gt(r,o,n)},n.addHook=function(e,t){\"function\"==typeof t&&(de[e]=de[e]||[],p(de[e],t))},n.removeHook=function(e){de[e]&&d(de[e])},n.removeHooks=function(e){de[e]&&(de[e]=[])},n.removeAllHooks=function(){de={}},n}()}));\n//# sourceMappingURL=purify.min.js.map\n\n\n//# sourceURL=webpack://orinoco-frontend/./node_modules/dompurify/dist/purify.min.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"totalOrder\": function() { return /* binding */ totalOrder; },\n/* harmony export */   \"getColor\": function() { return /* binding */ getColor; },\n/* harmony export */   \"createImage\": function() { return /* binding */ createImage; },\n/* harmony export */   \"createDiv\": function() { return /* binding */ createDiv; },\n/* harmony export */   \"createHType\": function() { return /* binding */ createHType; },\n/* harmony export */   \"showTeddies\": function() { return /* binding */ showTeddies; },\n/* harmony export */   \"getCartLength\": function() { return /* binding */ getCartLength; },\n/* harmony export */   \"showCartItem\": function() { return /* binding */ showCartItem; },\n/* harmony export */   \"checkMail\": function() { return /* binding */ checkMail; },\n/* harmony export */   \"checkName\": function() { return /* binding */ checkName; },\n/* harmony export */   \"checkStreet\": function() { return /* binding */ checkStreet; }\n/* harmony export */ });\n/* ------------ Fonction qui fait le total de la commande (Return : String) ---------- */\r\nfunction totalOrder(cart) {\r\n  let total = 0;\r\n  for (let i = 0; i < cart.length; i++) {\r\n    total += cart[i].price;\r\n  }\r\n  return total / 100 + \"€\";\r\n}\r\n/* ---------- Fonction qui fait le total de la commande (Return : String) ---------- */\r\n\r\n//Fonction qui récupère la couleur choisie par l'utilisateur dans le select ainsi que l'ID du teddy et la stocke dans un objet avec localStorage\r\n//Cette fonction sera appelée par le button \"Ajouter au panier\"\r\nfunction getColor(getColorId, getColorColor) {\r\n  const temp = {\r\n    id: getColorId,\r\n    color: getColorColor,\r\n  };\r\n  //Si le localStorage ne contient pas de tableau appelée \"cart\", on l'initialise.\r\n  if (localStorage.getItem(\"cart\") === null) {\r\n    localStorage.setItem(\"cart\", JSON.stringify([temp]));\r\n  }\r\n  else {\r\n    //On fait une copie temporaire du tableau qui est dans le localStorage\r\n    let tempCart = JSON.parse(localStorage.getItem(\"cart\"));\r\n    //On ajoute l'objet avec les informations de l'utilisateur dans le tableau\r\n    tempCart.push(temp);\r\n    //On met à jour le localStorage avec le nouveau tableau\r\n    localStorage.setItem(\"cart\", JSON.stringify(tempCart));\r\n    }\r\n}\r\n\r\n/* ---------- Fonction qui créer une image (return : void) ---------- */\r\nfunction createImage(imageURL, className, width, height, container)  {\r\n  let teddyImg = document.createElement(\"img\");\r\n  teddyImg.src = imageURL.replace(/^http:\\/\\//i, \"https://\"); //Remplace  http par https\r\n  teddyImg.className = className;\r\n  teddyImg.width = width;\r\n  teddyImg.height = height;\r\n  document.getElementById(container).appendChild(teddyImg);\r\n}\r\n/* ---------- Fin fonction qui créer une image (return : void) ---------- */\r\n\r\nfunction createDiv(className, container, id) {\r\n  let div = document.createElement(\"div\");\r\n  div.className = className;\r\n  div.id = id;\r\n  document.getElementById(container).appendChild(div);\r\n}\r\n\r\nfunction createHType(type, text, container, className, id) {\r\n    let hType = document.createElement(type);\r\n\r\n  if (text !== undefined) {\r\n      hType.textContent = text;\r\n  }\r\n  if (className !== undefined) {\r\n    hType.className = className;\r\n  }\r\n  if (id !== undefined) {\r\n    hType.id = id;\r\n  }\r\n  \r\n  document.getElementById(container).appendChild(hType);\r\n}\r\n\r\n//Fonction qui affiche les teddies sur la page d'accueil\r\nfunction showTeddies(teddys) {\r\n  //Faire une boucle qui parcours tout les teddys\r\n    let j = -2; //Sert pour les cas de i impaires\r\n    for (let i = 0; i < teddys.length; i++) {\r\n        let teddy = teddys[i];\r\n        teddy.price = teddy.price / 100;\r\n        //Créer une div si i est pair\r\n        if (i % 2 === 0) {\r\n            let div = document.createElement(\"div\");\r\n            div.className = \"row mb-2\";\r\n            div.id = \"containerFor2\" + i;\r\n            document.getElementById(\"listOfTeddies\").appendChild(div);\r\n            j += 2;\r\n        }\r\n        //Créer une div dans la dernière div créée\r\n        let div = document.createElement(\"div\");\r\n        div.className = \"col-md-6\";\r\n        let imgUrlSecure = teddy.imageUrl;\r\n        imgUrlSecure = imgUrlSecure.replace(/^http:\\/\\//i, \"https://\");\r\n        div.innerHTML +=\r\n            `\r\n            <a class=\"teddylink\" href=\"./product.html?id=${teddy._id}\" >\r\n                <div class=\"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 cursor-pointer\">\r\n                    <div class=\"col p-4 d-flex flex-column position-static\">\r\n                        <h3 class=\"mb-0\" >${teddy.name}</h3>\r\n                        <div class=\"mb-1 text-muted\">${teddy.price} €\r\n                        </div>\r\n                        <p class=\"card-text mb-auto\">${teddy.description}</p>\r\n                        <div class =\"col-auto d-lg-block\" id=\"teddy__0__img\">\r\n                            <img src=\"${imgUrlSecure}\" alt=\"${teddy.name}\" class=\"img-fluid rounded\"  width=\"200\" height=\"250\" role=\"img\" aria-label=\"Ours en peluche fait main\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        `;\r\n        //Ajouter la div dans la dernière div containerFor2\r\n        document.getElementById(\"containerFor2\" + j).appendChild(div);\r\n    }\r\n}\r\n\r\n//Fonction qui affiche un produit du panier\r\nfunction showCartItem(nameItem, colorItem, priceItem, i) {\r\n  createHType(\"li\", \"\", \"cartListUl\", \"list-group-item d-flex justify-content-between lh-sm\",nameItem + \"Li\" + i);\r\n  createItem(nameItem, colorItem, priceItem, i);\r\n}\r\n\r\nfunction createItem(nameItem, colorItem, priceItem, i) {\r\n  let div1 = document.createElement(\"div\");\r\n  //Ajouter div1 dans le li\r\n  document.getElementById(nameItem + \"Li\" + i).appendChild(div1);\r\n  \r\n  //Ajouter un h6 dans la div1\r\n  let h61 = document.createElement(\"h6\");\r\n  h61.innerHTML = nameItem;\r\n  h61.className = \"my-0\";\r\n  div1.appendChild(h61);\r\n\r\n  //Ajouter un span dans la div1\r\n  let span1 = document.createElement(\"span\");\r\n  span1.innerHTML = colorItem;\r\n  span1.className = \"text-muted\";\r\n  div1.appendChild(span1);\r\n\r\n  //Ajouter un span dans la \"li\" parente de \"div1\"\r\n  let span2 = document.createElement(\"span\");\r\n  span2.className = \"text-muted\";\r\n  span2.innerHTML = priceItem;\r\n  document.getElementById(nameItem + \"Li\" + i).appendChild(span2);\r\n}\r\n\r\n/* ---------- Fonction qui récupère le nombre d'article dans le panier (Return : int) ---------- */\r\nfunction getCartLength(cart) {\r\n  if (cart === null) {\r\n    return 0;\r\n  } else {\r\n    return cart.length;\r\n  }\r\n}\r\n/* ---------- Fin fonction qui récupère le nombre d'article dans le panier (Return : int) ---------- */\r\n\r\n/* ------------ Fonction qui vérifie l'adresse mail (Return boolean) ------------ */\r\nfunction checkMail(mail) {\r\n  let regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\\.[a-z]{2,})$/i;\r\n  return regex.test(mail);\r\n}\r\n/* ------------ Fin fonction qui vérifie l'adresse mail ------------ */\r\n\r\n/* ------------ Fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\r\nfunction checkName(name) {\r\n  let regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.'-]+$/u;\r\n  return regex.test(name);\r\n}\r\n/* ------------ Fin fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\r\n\r\n/* ------------ Fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\r\nfunction checkStreet(street) {\r\n    let regex = /^([1-9][0-9]*(?:-[1-9][0-9]*)*)[\\s,-]+(?:(bis|ter|qua)[\\s,-]+)?([\\w]+[\\w]*)[\\s,]+([-\\w].+)$/gmiu;\r\n  return regex.test(street);\r\n}\r\n/* ------------ Fin fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://orinoco-frontend/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/thankyou/index.js":
/*!**********************************!*\
  !*** ./src/js/thankyou/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ \"./src/js/functions.js\");\n/* harmony import */ var dompurify_dist_purify_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify/dist/purify.min.js */ \"./node_modules/dompurify/dist/purify.min.js\");\n/* harmony import */ var dompurify_dist_purify_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify_dist_purify_min_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst orderDetail = JSON.parse(sessionStorage.getItem(\"order\"));\r\n\r\n//Créer le h1 de la page de remerciement\r\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createHType)(\"h1\", \"Merci pour votre commande \" + (0,dompurify_dist_purify_min_js__WEBPACK_IMPORTED_MODULE_1__.sanitize)(orderDetail.contact.firstName) + \" !\" , \"yourOrder\")\r\n\r\n//Modifier le p de la page de remerciement\r\n;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createHType)(\"p\", \"Vous avez la commande n° \" + (0,dompurify_dist_purify_min_js__WEBPACK_IMPORTED_MODULE_1__.sanitize)(orderDetail.orderId) + \" !\" , \"yourOrder\")\r\n\r\n//Créer un p dans yourOrder\r\n;(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.createHType)(\"p\",\"Pour rappel votre commande a un montant total de \" + (0,dompurify_dist_purify_min_js__WEBPACK_IMPORTED_MODULE_1__.sanitize)((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.totalOrder)(orderDetail.products)) +\".\", \"yourOrder\");\n\n//# sourceURL=webpack://orinoco-frontend/./src/js/thankyou/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/thankyou/index.js");
/******/ 	
/******/ })()
;