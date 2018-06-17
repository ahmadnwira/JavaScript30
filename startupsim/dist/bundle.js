/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(/*! ./game */ \"./scripts/game.js\");\n\nvar _mc = __webpack_require__(/*! ./mc */ \"./scripts/mc.js\");\n\nvar game = new _game.GameMode();\nvar mc = new _mc.MCMode();\n\nvar form = document.querySelector('.paramters');\n\nform.addEventListener('submit', function (e) {\n    e.preventDefault();\n    e.target.querySelector('[type=\"checkbox\"]').checked ? game.run(e) : mc.run(e);\n});\n\ndocument.querySelector('#feature').addEventListener('click', game.addFeature);\ndocument.querySelector('#pivot').addEventListener('click', game.pivot);\ndocument.querySelector('#ico').addEventListener('click', game.ico);\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.GameMode = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./scripts/utils.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar GameMode = exports.GameMode = function () {\n    function GameMode() {\n        _classCallCheck(this, GameMode);\n\n        this.f = document.querySelector('#displayFund');\n        this.d = document.querySelector('#displayDays');\n\n        this.params = { isSet: false };\n\n        this.addFeature = this.addFeature.bind(this);\n        this.pivot = this.pivot.bind(this);\n        this.ico = this.ico.bind(this);\n    }\n\n    _createClass(GameMode, [{\n        key: 'gameStep',\n        value: function gameStep(params) {\n            params.days++;\n            (0, _utils.step)(params);\n            if (params.fund <= 0) clearInterval(this.gameInterval);\n            this.f.innerHTML = 'Fund: ' + params.fund;\n            this.d.innerHTML = 'Day: ' + params.days;\n        }\n    }, {\n        key: 'run',\n        value: function run(e) {\n            var _this = this;\n\n            this.params = {\n                makeMoney: e.target.querySelector('#makeMoney').value / 100,\n                loseMoney: e.target.querySelector('#loseMoney').value / 100,\n                getFunded: e.target.querySelector('#getFunded').value / 100,\n                inflation: e.target.querySelector('#inflation').value / 100,\n                rent: Number(e.target.querySelector('#rent').value),\n                fund: Number(e.target.querySelector('#fund').value),\n                trials: Number(e.target.querySelector('#trials').value),\n                days: 0\n            };\n\n            this.gameInterval = setInterval(function () {\n                _this.gameStep(_this.params);\n            }, 400);\n        }\n    }, {\n        key: 'addFeature',\n        value: function addFeature() {\n            if (this.params.isSet || this.params.isSet === undefined) {\n                if (Math.random() <= .3) {\n                    this.params.makeMoney += .02;\n                }\n                this.params.fund -= 10000;\n            }\n        }\n    }, {\n        key: 'pivot',\n        value: function pivot() {\n            if (this.params.isSet || this.params.isSet === undefined) {\n                if (Math.random() <= .6) {\n                    this.params.makeMoney += .05;\n                    this.params.loseMoney -= .02;\n                }\n                this.params.fund -= 10000;\n            }\n        }\n    }, {\n        key: 'ico',\n        value: function ico() {\n            if (this.params.isSet || this.params.isSet === undefined) {\n                if (Math.random() <= .01) {\n                    this.params.fund += 500000;\n                    this.params.loseMoney -= .2;\n                    this.params.makeMoney += .1;\n                }\n                this.params.fund -= 10000;\n            }\n        }\n    }]);\n\n    return GameMode;\n}();\n\n//# sourceURL=webpack:///./scripts/game.js?");

/***/ }),

/***/ "./scripts/mc.js":
/*!***********************!*\
  !*** ./scripts/mc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.MCMode = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./scripts/utils.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MCMode = exports.MCMode = function () {\n    function MCMode() {\n        _classCallCheck(this, MCMode);\n\n        this.result = document.querySelector('.result');\n        this.worker = new Worker('./scripts/mcWorker.js');\n        this.worker.onmessage = function (e) {\n            var mean = (0, _utils.getMean)(e.data);\n            var SD = (0, _utils.getSD)(e.data, mean).toFixed(3);\n            this.result.innerHTML = 'will last for (' + (mean - 1.96 * SD).toFixed(0) + '-' + (mean + 1.96 * SD).toFixed(0) + ')/days 95% of the time';\n        }.bind(this);\n    }\n\n    _createClass(MCMode, [{\n        key: 'run',\n        value: function run(e) {\n            this.worker.postMessage({\n                makeMoney: e.target.querySelector('#makeMoney').value / 100,\n                loseMoney: e.target.querySelector('#loseMoney').value / 100,\n                getFunded: e.target.querySelector('#getFunded').value / 100,\n                inflation: e.target.querySelector('#inflation').value / 100,\n                rent: Number(e.target.querySelector('#rent').value),\n                fund: Number(e.target.querySelector('#fund').value),\n                trials: Number(e.target.querySelector('#trials').value),\n                days: 0\n            });\n            this.result.innerHTML = \"calculating\";\n        }\n    }]);\n\n    return MCMode;\n}();\n\n//# sourceURL=webpack:///./scripts/mc.js?");

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar getMean = function getMean(data) {\n    var sum = data.reduce(function (sum, value) {\n        return sum + value;\n    }, 0);\n\n    return sum / data.length;\n};\n\nvar getSD = function getSD(data, mean) {\n    var sq = data.reduce(function (sum, value) {\n        return sum += Math.pow(value - mean, 2);\n    }, 0);\n\n    var variance = sq / data.length;\n\n    return Math.sqrt(variance);\n};\n\nvar step = function step(params) {\n    var rand = Math.random();\n    if (rand <= params.makeMoney) {\n        params.fund += 500;\n    } else if (rand <= params.loseMoney) {\n        params.fund -= 500;\n    }\n    if (params.days % 30 === 0) {\n        params.fund -= params.rent;\n    }\n    if (params.days % 365 === 0) {\n        params.rent += params.rent * params.inflation;\n        params.getFunded += .01;\n    }\n    if (Math.random <= params.getFunded) {\n        params.fund += 100000;\n    };\n};\n\nexports.getMean = getMean;\nexports.getSD = getSD;\nexports.step = step;\n\n//# sourceURL=webpack:///./scripts/utils.js?");

/***/ })

/******/ });