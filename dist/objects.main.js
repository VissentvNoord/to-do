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

/***/ "./src/scripts/ClassManager.js":
/*!*************************************!*\
  !*** ./src/scripts/ClassManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   priority: () => (/* binding */ priority)\n/* harmony export */ });\nclass TaskData{\n    constructor(name){\n        this.name = name;\n    }\n\n    GetName(){\n        return this.name;\n    }\n\n    SetName(name){\n        this.name = name;\n    }\n\n    SetDescription(description){\n        this.description = description;\n    }\n\n    GetDescription(){\n        return this.description;\n    }\n\n    SetDueDate(date){\n        this.duedate = date;\n    }\n\n    GetDueDate(){\n        return this.duedate;\n    }\n\n    SetPriority(priority){\n        this.priority = priority;\n    }\n\n    GetPriority(){\n        return this.priority;\n    }\n}\n\nclass Project extends TaskData{\n    constructor(name){\n        super(name);\n        this.tasks = [];\n    }\n\n    set Tasks(taskList){\n        this.tasks = taskList;\n    }\n\n    get Tasks(){\n        return this.tasks;\n    }\n\n    AddTask(task){\n        this.tasks.push(task);\n    }\n}\n\nclass Task extends TaskData{\n    constructor(name){\n        super(name); \n        this.done = false;\n    }\n\n    set Done(done){\n        this.done = done;\n    }\n\n    get isDone(){\n        return this.done;\n    }\n}\n\nclass Priority{\n    constructor(name, index){\n        this.name = name;\n        this.index = index;\n    }\n\n    get Name(){\n        return this.name;\n    }\n}\n\nconst priority = {\n    lowest: new Priority(\"Lowest\", 0),\n    low: new Priority(\"Low\", 1),\n    medium: new Priority(\"Medium\", 2),\n    high: new Priority(\"High\", 3),\n    critical: new Priority(\"Critical\", 4)\n};\n\n\n\n//# sourceURL=webpack:///./src/scripts/ClassManager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	__webpack_modules__["./src/scripts/ClassManager.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;