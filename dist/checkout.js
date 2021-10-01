/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/checkout/index.js":
/*!**********************************!*\
  !*** ./src/js/checkout/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global.js */ \"./src/js/global.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions.js */ \"./src/js/functions.js\");\n\r\n\r\n\r\n//Je récupère le tableau \"cart\" stocké dans le localStorage\r\nlet cart = JSON.parse(localStorage.getItem(\"cart\"));\r\n\r\n//Ajouter le nombre de produit dans la div numberOfItems\r\ndocument.getElementById(\"numberOfItems\").innerHTML = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.getCartLength)(cart);\r\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"ul\", \"\", \"cartList\", \"list-group mb-3\", \"cartListUl\");\r\ngenerateContentFromCart().then(total => {\r\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\r\n  \"li\",\r\n  \"\",\r\n  \"cartListUl\",\r\n  \"list-group-item d-flex justify-content-between\",\r\n  \"totalLi\"\r\n);\r\n\r\n//Mettre un span dans la li\r\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\r\n  \"span\",\r\n  \"Total (EUR)\",\r\n  \"totalLi\",\r\n  \"\",\r\n  \"totalSpan\"\r\n);\r\n\r\n//Mettre un strong dans la li\r\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"strong\", total / 100 + \"€\", \"totalLi\", \"\");\r\n});\r\n\r\nlet btnSubmit = document.getElementById(\"btnCommander\");\r\nbtnSubmit.onclick = function (e) {\r\n  e.preventDefault();\r\n  let formData = new FormData(document.querySelector(\"form\"));\r\n\r\n  if (((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkMail)(formData.get(\"email\")) === true )\r\n      && ((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkName)(formData.get(\"lastName\")) === true)\r\n      && ((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkName)(formData.get(\"FirstName\")) === true)\r\n      && ((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkName)(formData.get(\"city\")) === true) &&\r\n      ((0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkStreet)(formData.get(\"adresse\")) === true)) {\r\n    let contact = Object.create({});\r\n    contact.lastName = formData.get(\"lastName\");\r\n    contact.firstName = formData.get(\"firstName\");\r\n    contact.email = formData.get(\"email\");\r\n    contact.address = formData.get(\"address\");\r\n    contact.city = formData.get(\"city\");\r\n\r\n    let request = { contact, products: cart.map((item) => item.id) };\r\n    console.log(request);\r\n    //Faire une requête POST à l'API qui envoie request\r\n    fetch(_global_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl + \"/order\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(request),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    })\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then((orderApi) => {\r\n        console.log(\"order\", orderApi);\r\n        //Supprimer le localStorage\r\n        localStorage.removeItem(\"cart\");\r\n        sessionStorage.setItem(\"order\", JSON.stringify(orderApi));\r\n        //Redirection vers la page de confirmation avec le SHA256\r\n        window.location.href =   \"thankyou.html\";\r\n        });\r\n  }\r\n  else {\r\n    alert(\"Merci de vérifier les données saisies\");\r\n    }\r\n};\r\n\r\nasync function generateContentFromCart(){\r\n  let total = 0;\r\n  for (let i = 0; i < cart.length; i++) {\r\n    let id = cart[i].id;\r\n      try {\r\n        let response = await fetch(_global_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl + \"/\" + id);\r\n        if(!response.ok){ throw Error(\"Problème de connexion api\")}\r\n        let  teddys = await response.json();\r\n        total += teddys.price ;\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.showCartItem)(\r\n              teddys.name,\r\n              cart[i].color,\r\n              teddys.price / 100 + \"€\",\r\n              cart.indexOf(cart[i])\r\n            );\r\n      } catch (e) {\r\n          console.error(\r\n            \"Oops, an error occurred. Please contact alexandre@nitatemic.ovh\"\r\n          );\r\n        }\r\n      }\r\n  return total;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco-frontend/./src/js/checkout/index.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"totalOrder\": function() { return /* binding */ totalOrder; },\n/* harmony export */   \"getColor\": function() { return /* binding */ getColor; },\n/* harmony export */   \"createImage\": function() { return /* binding */ createImage; },\n/* harmony export */   \"createDiv\": function() { return /* binding */ createDiv; },\n/* harmony export */   \"createHType\": function() { return /* binding */ createHType; },\n/* harmony export */   \"showTeddies\": function() { return /* binding */ showTeddies; },\n/* harmony export */   \"getCartLength\": function() { return /* binding */ getCartLength; },\n/* harmony export */   \"showCartItem\": function() { return /* binding */ showCartItem; },\n/* harmony export */   \"checkMail\": function() { return /* binding */ checkMail; },\n/* harmony export */   \"checkName\": function() { return /* binding */ checkName; },\n/* harmony export */   \"checkStreet\": function() { return /* binding */ checkStreet; }\n/* harmony export */ });\n/* ------------ Fonction qui fait le total de la commande (Return : String) ---------- */\r\nfunction totalOrder(cart) {\r\n  let total = 0;\r\n  for (let i = 0; i < cart.length; i++) {\r\n    total += cart[i].price;\r\n  }\r\n  return total / 100 + \"€\";\r\n}\r\n/* ---------- Fonction qui fait le total de la commande (Return : String) ---------- */\r\n\r\n//Fonction qui récupère la couleur choisie par l'utilisateur dans le select ainsi que l'ID du teddy et la stocke dans un objet avec localStorage\r\n//Cette fonction sera appelée par le button \"Ajouter au panier\"\r\nfunction getColor(getColorId, getColorColor) {\r\n  const temp = {\r\n    id: getColorId,\r\n    color: getColorColor,\r\n  };\r\n  //Si le localStorage ne contient pas de tableau appelée \"cart\", on l'initialise.\r\n  if (localStorage.getItem(\"cart\") === null) {\r\n    localStorage.setItem(\"cart\", JSON.stringify([temp]));\r\n  }\r\n  else {\r\n    //On fait une copie temporaire du tableau qui est dans le localStorage\r\n    let tempCart = JSON.parse(localStorage.getItem(\"cart\"));\r\n    //On ajoute l'objet avec les informations de l'utilisateur dans le tableau\r\n    tempCart.push(temp);\r\n    //On met à jour le localStorage avec le nouveau tableau\r\n    localStorage.setItem(\"cart\", JSON.stringify(tempCart));\r\n    }\r\n}\r\n\r\n/* ---------- Fonction qui créer une image (return : void) ---------- */\r\nfunction createImage(imageURL, className, width, height, container)  {\r\n  let teddyImg = document.createElement(\"img\");\r\n  teddyImg.src = imageURL.replace(/^http:\\/\\//i, \"https://\"); //Remplace  http par https\r\n  teddyImg.className = className;\r\n  teddyImg.width = width;\r\n  teddyImg.height = height;\r\n  document.getElementById(container).appendChild(teddyImg);\r\n}\r\n/* ---------- Fin fonction qui créer une image (return : void) ---------- */\r\n\r\nfunction createDiv(className, container, id) {\r\n  let div = document.createElement(\"div\");\r\n  div.className = className;\r\n  div.id = id;\r\n  document.getElementById(container).appendChild(div);\r\n}\r\n\r\nfunction createHType(type, text, container, className, id) {\r\n    let hType = document.createElement(type);\r\n\r\n  if (text !== undefined) {\r\n      hType.textContent = text;\r\n  }\r\n  if (className !== undefined) {\r\n    hType.className = className;\r\n  }\r\n  if (id !== undefined) {\r\n    hType.id = id;\r\n  }\r\n  \r\n  document.getElementById(container).appendChild(hType);\r\n}\r\n\r\n//Fonction qui affiche les teddies sur la page d'accueil\r\nfunction showTeddies(teddys) {\r\n  //Faire une boucle qui parcours tout les teddys\r\n    let j = -2; //Sert pour les cas de i impaires\r\n    for (let i = 0; i < teddys.length; i++) {\r\n        let teddy = teddys[i];\r\n        teddy.price = teddy.price / 100;\r\n        //Créer une div si i est pair\r\n        if (i % 2 === 0) {\r\n            let div = document.createElement(\"div\");\r\n            div.className = \"row mb-2\";\r\n            div.id = \"containerFor2\" + i;\r\n            document.getElementById(\"listOfTeddies\").appendChild(div);\r\n            j += 2;\r\n        }\r\n        //Créer une div dans la dernière div créée\r\n        let div = document.createElement(\"div\");\r\n        div.className = \"col-md-6\";\r\n        let imgUrlSecure = teddy.imageUrl;\r\n        imgUrlSecure = imgUrlSecure.replace(/^http:\\/\\//i, \"https://\");\r\n        div.innerHTML +=\r\n            `\r\n            <a class=\"teddylink\" href=\"./product.html?id=${teddy._id}\" >\r\n                <div class=\"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 cursor-pointer\">\r\n                    <div class=\"col p-4 d-flex flex-column position-static\">\r\n                        <h3 class=\"mb-0\" >${teddy.name}</h3>\r\n                        <div class=\"mb-1 text-muted\">${teddy.price} €\r\n                        </div>\r\n                        <p class=\"card-text mb-auto\">${teddy.description}</p>\r\n                        <div class =\"col-auto d-lg-block\" id=\"teddy__0__img\">\r\n                            <img src=\"${imgUrlSecure}\" alt=\"${teddy.name}\" class=\"img-fluid rounded\"  width=\"200\" height=\"250\" role=\"img\" aria-label=\"Ours en peluche fait main\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        `;\r\n        //Ajouter la div dans la dernière div containerFor2\r\n        document.getElementById(\"containerFor2\" + j).appendChild(div);\r\n    }\r\n}\r\n\r\n//Fonction qui affiche un produit du panier\r\nfunction showCartItem(nameItem, colorItem, priceItem, i) {\r\n  createHType(\"li\", \"\", \"cartListUl\", \"list-group-item d-flex justify-content-between lh-sm\",nameItem + \"Li\" + i);\r\n  createItem(nameItem, colorItem, priceItem, i);\r\n}\r\n\r\nfunction createItem(nameItem, colorItem, priceItem, i) {\r\n  let div1 = document.createElement(\"div\");\r\n  //Ajouter div1 dans le li\r\n  document.getElementById(nameItem + \"Li\" + i).appendChild(div1);\r\n  \r\n  //Ajouter un h6 dans la div1\r\n  let h61 = document.createElement(\"h6\");\r\n  h61.innerHTML = nameItem;\r\n  h61.className = \"my-0\";\r\n  div1.appendChild(h61);\r\n\r\n  //Ajouter un span dans la div1\r\n  let span1 = document.createElement(\"span\");\r\n  span1.innerHTML = colorItem;\r\n  span1.className = \"text-muted\";\r\n  div1.appendChild(span1);\r\n\r\n  //Ajouter un span dans la \"li\" parente de \"div1\"\r\n  let span2 = document.createElement(\"span\");\r\n  span2.className = \"text-muted\";\r\n  span2.innerHTML = priceItem;\r\n  document.getElementById(nameItem + \"Li\" + i).appendChild(span2);\r\n}\r\n\r\n/* ---------- Fonction qui récupère le nombre d'article dans le panier (Return : int) ---------- */\r\nfunction getCartLength(cart) {\r\n  if (cart === null) {\r\n    return 0;\r\n  } else {\r\n    return cart.length;\r\n  }\r\n}\r\n/* ---------- Fin fonction qui récupère le nombre d'article dans le panier (Return : int) ---------- */\r\n\r\n/* ------------ Fonction qui vérifie l'adresse mail (Return boolean) ------------ */\r\nfunction checkMail(mail) {\r\n  let regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\\.[a-z]{2,})$/i;\r\n  return regex.test(mail);\r\n}\r\n/* ------------ Fin fonction qui vérifie l'adresse mail ------------ */\r\n\r\n/* ------------ Fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\r\nfunction checkName(name) {\r\n  let regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.'-]+$/u;\r\n  return regex.test(name);\r\n}\r\n/* ------------ Fin fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\r\n\r\n/* ------------ Fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\r\nfunction checkStreet(street) {\r\n    let regex = /^([1-9][0-9]*(?:-[1-9][0-9]*)*)[\\s,-]+(?:(bis|ter|qua)[\\s,-]+)?([\\w]+[\\w]*)[\\s,]+([-\\w].+)$/gmiu;\r\n  return regex.test(street);\r\n}\r\n/* ------------ Fin fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://orinoco-frontend/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiUrl\": function() { return /* binding */ apiUrl; }\n/* harmony export */ });\nconst apiUrl = \"https://backorinoco.nitatemic.ovh/api/teddies\";\n\n//# sourceURL=webpack://orinoco-frontend/./src/js/global.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/checkout/index.js");
/******/ 	
/******/ })()
;