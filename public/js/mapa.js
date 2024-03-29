/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mapa.js":
/*!************************!*\
  !*** ./src/js/mapa.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function () {\r\n\r\n    const lat = -41.13348;\r\n    const lng = -71.31015;\r\n    const mapa = L.map('mapa').setView([lat, lng], 13);\r\n    let marker; //marcador.\r\n\r\n    //Utilizar los servicios de Provider y Geocoder.\r\n    const geocodeService = L.esri.Geocoding.geocodeService();\r\n\r\n\r\n\r\n    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n        attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n    }).addTo(mapa);\r\n\r\n    //el pin\r\n    marker = new L.marker([lat, lng], {\r\n        draggable: true,\r\n        autoPan: true//permite mover el pin y sigue el movimieento del mapa\r\n\r\n    })\r\n        .addTo(mapa);\r\n    //detecta el movimiento del pin \r\n    marker.on('moveend', function (event) {\r\n        marker = event.target //elemento que movemos.\r\n\r\n        const posicion = marker.getLatLng();//toma la lat y long del elemento\r\n        //centramos a la posicion seleccionada\r\n        mapa.panTo(new L.LatLng(posicion.lat, posicion.lng))\r\n\r\n        //obtener la informacion de las calles al soltar el pin\r\n        geocodeService.reverse().latlng(posicion, 13).run(function (error, resultado) { \r\n            //al presionar larga un popup con la direccion\r\n            marker.bindPopup(resultado.address.LongLabel) \r\n\r\n            //llenar los campos\r\n            document.querySelector('.calle').textContent = resultado?.address?.Address ?? '';//lectura\r\n            //datos a guardar\r\n            document.querySelector('#calle').value = resultado?.address?.Address ?? '';\r\n            document.querySelector('#lat').value = resultado?.latlng?.lat ?? '';\r\n            document.querySelector('#lng').value = resultado?.latlng?.lng ?? '';\r\n        })\r\n\r\n    })\r\n})()\n\n//# sourceURL=webpack://bienesraices/./src/js/mapa.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/mapa.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;