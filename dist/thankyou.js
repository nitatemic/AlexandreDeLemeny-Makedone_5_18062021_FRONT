/*! For license information please see thankyou.js.LICENSE.txt */
!function(){var e={638:function(e){e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,l=Object.create,c="undefined"!=typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var m,f=x(Array.prototype.forEach),d=x(Array.prototype.pop),p=x(Array.prototype.push),g=x(String.prototype.toLowerCase),h=x(String.prototype.match),y=x(String.prototype.replace),v=x(String.prototype.indexOf),b=x(String.prototype.trim),T=x(RegExp.prototype.test),A=(m=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(m,t)});function x(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function S(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=g(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function w(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function N(e,t){for(;null!==e;){var n=o(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var E=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),k=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),O=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),R=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),_=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),D=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=i(["#text"]),L=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),F=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),C=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),H=a(/<%[\s\S]*|[\s\S]*%>/gm),U=a(/^data-[\-\w.\u00B7-\uFFFF]/),B=a(/^aria-[\-\w]+$/),j=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),P=a(/^(?:\w+script|data):/i),W=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var V=function(){return"undefined"==typeof window?null:window},K=function(e,t){if("object"!==(void 0===e?"undefined":G(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V(),n=function(t){return e(t)};if(n.version="2.3.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,m=t.NamedNodeMap,x=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,Y=t.Text,X=t.Comment,$=t.DOMParser,J=t.trustedTypes,Z=s.prototype,Q=N(Z,"cloneNode"),ee=N(Z,"nextSibling"),te=N(Z,"childNodes"),ne=N(Z,"parentNode");if("function"==typeof l){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument)}var oe=K(J,r),ie=oe&&ze?oe.createHTML(""):"",ae=o,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=ae.getElementsByTagName,me=r.importNode,fe={};try{fe=w(o).documentMode?o.documentMode:{}}catch(e){}var de={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==fe;var pe=z,ge=H,he=U,ye=B,ve=P,be=W,Te=j,Ae=null,xe=S({},[].concat(q(E),q(k),q(O),q(_),q(M))),Se=null,we=S({},[].concat(q(L),q(F),q(I),q(C))),Ne=null,Ee=null,ke=!0,Oe=!0,Re=!1,_e=!1,De=!1,Me=!1,Le=!1,Fe=!1,Ie=!1,Ce=!0,ze=!1,He=!0,Ue=!0,Be=!1,je={},Pe=null,We=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ge=null,qe=S({},["audio","video","img","source","image","track"]),Ve=null,Ke=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ye="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",$e="http://www.w3.org/1999/xhtml",Je=$e,Ze=!1,Qe=null,et=o.createElement("form"),tt=function(e){Qe&&Qe===e||(e&&"object"===(void 0===e?"undefined":G(e))||(e={}),e=w(e),Ae="ALLOWED_TAGS"in e?S({},e.ALLOWED_TAGS):xe,Se="ALLOWED_ATTR"in e?S({},e.ALLOWED_ATTR):we,Ve="ADD_URI_SAFE_ATTR"in e?S(w(Ke),e.ADD_URI_SAFE_ATTR):Ke,Ge="ADD_DATA_URI_TAGS"in e?S(w(qe),e.ADD_DATA_URI_TAGS):qe,Pe="FORBID_CONTENTS"in e?S({},e.FORBID_CONTENTS):We,Ne="FORBID_TAGS"in e?S({},e.FORBID_TAGS):{},Ee="FORBID_ATTR"in e?S({},e.FORBID_ATTR):{},je="USE_PROFILES"in e&&e.USE_PROFILES,ke=!1!==e.ALLOW_ARIA_ATTR,Oe=!1!==e.ALLOW_DATA_ATTR,Re=e.ALLOW_UNKNOWN_PROTOCOLS||!1,_e=e.SAFE_FOR_TEMPLATES||!1,De=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,He=!1!==e.SANITIZE_DOM,Ue=!1!==e.KEEP_CONTENT,Be=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,Je=e.NAMESPACE||$e,_e&&(Oe=!1),Ie&&(Fe=!0),je&&(Ae=S({},[].concat(q(M))),Se=[],!0===je.html&&(S(Ae,E),S(Se,L)),!0===je.svg&&(S(Ae,k),S(Se,F),S(Se,C)),!0===je.svgFilters&&(S(Ae,O),S(Se,F),S(Se,C)),!0===je.mathMl&&(S(Ae,_),S(Se,I),S(Se,C))),e.ADD_TAGS&&(Ae===xe&&(Ae=w(Ae)),S(Ae,e.ADD_TAGS)),e.ADD_ATTR&&(Se===we&&(Se=w(Se)),S(Se,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&S(Ve,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(Pe===We&&(Pe=w(Pe)),S(Pe,e.FORBID_CONTENTS)),Ue&&(Ae["#text"]=!0),De&&S(Ae,["html","head","body"]),Ae.table&&(S(Ae,["tbody"]),delete Ne.tbody),i&&i(e),Qe=e)},nt=S({},["mi","mo","mn","ms","mtext"]),rt=S({},["foreignobject","desc","title","annotation-xml"]),ot=S({},k);S(ot,O),S(ot,R);var it=S({},_);S(it,D);var at=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:$e,tagName:"template"});var n=g(e.tagName),r=g(t.tagName);if(e.namespaceURI===Xe)return t.namespaceURI===$e?"svg"===n:t.namespaceURI===Ye?"svg"===n&&("annotation-xml"===r||nt[r]):Boolean(ot[n]);if(e.namespaceURI===Ye)return t.namespaceURI===$e?"math"===n:t.namespaceURI===Xe?"math"===n&&rt[r]:Boolean(it[n]);if(e.namespaceURI===$e){if(t.namespaceURI===Xe&&!rt[r])return!1;if(t.namespaceURI===Ye&&!nt[r])return!1;var o=S({},["title","style","font","a","script"]);return!it[n]&&(o[n]||!ot[n])}return!1},lt=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},ct=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Se[e])if(Fe||Ie)try{lt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},st=function(e){var t=void 0,n=void 0;if(Le)e="<remove></remove>"+e;else{var r=h(e,/^[\r\n\t ]+/);n=r&&r[0]}var i=oe?oe.createHTML(e):e;if(Je===$e)try{t=(new $).parseFromString(i,"text/html")}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Je,"template",null);try{t.documentElement.innerHTML=Ze?"":i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),Je===$e?ue.call(t,De?"html":"body")[0]:De?t.documentElement:a},ut=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},mt=function(e){return!(e instanceof Y||e instanceof X||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof x&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},ft=function(e){return"object"===(void 0===c?"undefined":G(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":G(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},dt=function(e,t,r){de[e]&&f(de[e],(function(e){e.call(n,t,r,Qe)}))},pt=function(e){var t=void 0;if(dt("beforeSanitizeElements",e,null),mt(e))return lt(e),!0;if(h(e.nodeName,/[\u0080-\uFFFF]/))return lt(e),!0;var r=g(e.nodeName);if(dt("uponSanitizeElement",e,{tagName:r,allowedTags:Ae}),!ft(e.firstElementChild)&&(!ft(e.content)||!ft(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return lt(e),!0;if("select"===r&&T(/<template/i,e.innerHTML))return lt(e),!0;if(!Ae[r]||Ne[r]){if(Ue&&!Pe[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e))}return lt(e),!0}return e instanceof s&&!at(e)?(lt(e),!0):"noscript"!==r&&"noembed"!==r||!T(/<\/no(script|embed)/i,e.innerHTML)?(_e&&3===e.nodeType&&(t=e.textContent,t=y(t,pe," "),t=y(t,ge," "),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),dt("afterSanitizeElements",e,null),!1):(lt(e),!0)},gt=function(e,t,n){if(He&&("id"===t||"name"===t)&&(n in o||n in et))return!1;if(Oe&&!Ee[t]&&T(he,t));else if(ke&&T(ye,t));else{if(!Se[t]||Ee[t])return!1;if(Ve[t]);else if(T(Te,y(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Ge[e])if(Re&&!T(ve,y(n,be,"")));else if(n)return!1}return!0},ht=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;dt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Se};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=b(t.value),o=g(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,dt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(ct(s,e),l.keepAttr))if(T(/\/>/i,r))ct(s,e);else{_e&&(r=y(r,pe," "),r=y(r,ge," "));var m=e.nodeName.toLowerCase();if(gt(m,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),d(n.removed)}catch(e){}}}dt("afterSanitizeAttributes",e,null)}},yt=function e(t){var n=void 0,r=ut(t);for(dt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)dt("uponSanitizeShadowNode",n,null),pt(n)||(n.content instanceof a&&e(n.content),ht(n));dt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,o){var i=void 0,l=void 0,s=void 0,u=void 0,m=void 0;if((Ze=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ft(e)){if("function"!=typeof e.toString)throw A("toString is not a function");if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}if(!n.isSupported){if("object"===G(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(ft(e))return t.toStaticHTML(e.outerHTML)}return e}if(Me||tt(o),n.removed=[],"string"==typeof e&&(Be=!1),Be);else if(e instanceof c)1===(l=(i=st("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?i=l:i.appendChild(l);else{if(!Fe&&!_e&&!De&&-1===e.indexOf("<"))return oe&&ze?oe.createHTML(e):e;if(!(i=st(e)))return Fe?null:ie}i&&Le&&lt(i.firstChild);for(var f=ut(Be?e:i);s=f.nextNode();)3===s.nodeType&&s===u||pt(s)||(s.content instanceof a&&yt(s.content),ht(s),u=s);if(u=null,Be)return e;if(Fe){if(Ie)for(m=se.call(i.ownerDocument);i.firstChild;)m.appendChild(i.firstChild);else m=i;return Ce&&(m=me.call(r,m,!0)),m}var d=De?i.outerHTML:i.innerHTML;return _e&&(d=y(d,pe," "),d=y(d,ge," ")),oe&&ze?oe.createHTML(d):d},n.setConfig=function(e){tt(e),Me=!0},n.clearConfig=function(){Qe=null,Me=!1},n.isValidAttribute=function(e,t,n){Qe||tt({});var r=g(e),o=g(t);return gt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],p(de[e],t))},n.removeHook=function(e){de[e]&&d(de[e])},n.removeHooks=function(e){de[e]&&(de[e]=[])},n.removeAllHooks=function(){de={}},n}()}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}!function(){"use strict";var e=n(638);const t=JSON.parse(sessionStorage.getItem("order"));document.querySelector("h1").textContent="Merci pour votre commande "+(0,e.sanitize)(t.contact.firstName)+"!",document.getElementById("orderNumber").textContent="Vous avez la commande n° "+(0,e.sanitize)(t.orderId)+"!";let r=document.createElement("p");r.textContent="Pour rappel votre commande a un montant total de "+(0,e.sanitize)(function(e){let t=0;for(var n=0;n<e.length;n++)t=+e[n].price;return t/100+"€"}(t.products))+".",document.getElementById("yourOrder").appendChild(r)}()}();