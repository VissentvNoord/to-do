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

/***/ "./src/scripts/DisplayController.js":
/*!******************************************!*\
  !*** ./src/scripts/DisplayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectDisplayer: () => (/* binding */ projectDisplayer)\n/* harmony export */ });\nconst projectDisplayer = (function(){\n    const contentBox = document.getElementById(\"content\");\n    const projectBox = document.getElementById(\"projects\");\n    const taskBox = document.getElementById(\"tasks\");\n\n    const loadProjects = function(projectList){\n        for(let i = 0; i < projectList.length; i++){\n            const newDiv = document.createElement(\"button\");\n            newDiv.onclick = function(){ loadTasks(projectList[i])};\n            newDiv.innerHTML = projectList[i].GetName();\n            projectBox.appendChild(newDiv);\n\n            // const editButton = document.createElement(\"button\");\n            // editButton.id = \"visible\";\n            // editButton.innerHTML = \"Edit\";\n            // newDiv.appendChild(editButton);\n        }\n    }\n\n    const loadTasks = function(project){\n        taskBox.innerHTML = \"\";\n\n        const tasks = project.Tasks;\n        for(let i = 0; i < tasks.length; i++){\n            const name = tasks[i].GetName();\n            const priorityLevel = tasks[i].GetPriority();\n\n            const taskCard = document.createElement(\"div\");\n            taskBox.appendChild(taskCard);\n\n            const taskName = document.createElement('h2');\n            taskName.innerHTML = name;\n            taskCard.appendChild(taskName);\n\n            const taskPriority = document.createElement('h5');\n            taskPriority.innerHTML = \"Priority: \" + priorityLevel.Name;\n            taskCard.appendChild(taskPriority);\n        }\n    }\n\n    return {loadProjects , loadTasks};\n})();\n\n\n \n\n//# sourceURL=webpack:///./src/scripts/DisplayController.js?");

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
/******/ 	__webpack_modules__["./src/scripts/DisplayController.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;