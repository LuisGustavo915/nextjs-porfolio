"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\n\nconst PostCard = (param)=>/*#__PURE__*/ {\n    let { post } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.imageURL,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCard;\nconst Blog = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: \"My Blog\",\n        dark: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map((post, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                    post: post\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n                    lineNumber: 24,\n                    columnNumber: 16\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n            lineNumber: 21,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\NEXT-simple-porfolio\\\\pages\\\\blog.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUNQO0FBRW5DLE1BQU9FLFdBQVU7UUFBQyxFQUFDQyxJQUFJLEVBQUM7V0FDcEIsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUlDLEtBQUtKLEtBQUtLLFFBQVE7d0JBQUVDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUVqQyw4REFBQ0w7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDSztzQ0FBSVAsS0FBS1EsS0FBSzs7Ozs7O3NDQUNmLDhEQUFDQztzQ0FBR1QsS0FBS1UsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkI7S0FiRlg7QUFlUCxNQUFNWSxPQUFPLGtCQUNULDhEQUFDZCwwREFBTUE7UUFBQ2UsUUFBUTtRQUFPSixPQUFNO1FBQVVLLElBQUk7a0JBQ3hDLDRFQUFDWjtZQUFJQyxXQUFVO3NCQUVWSiwyQ0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDZCxNQUFNZSxrQkFDZCw4REFBQ2hCO29CQUFTQyxNQUFNQTttQkFBV2U7Ozs7Ozs7Ozs7Ozs7OztNQUxwQ0o7QUFhTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nLmpzP2NiYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgcG9zdHMgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgIFBvc3RDYXJkID0oe3Bvc3R9KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlVVJMfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4pXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiAoXHJcbiAgICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9IHRpdGxlPVwiTXkgQmxvZ1wiIGRhcms+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgPFBvc3RDYXJkIHBvc3Q9e3Bvc3R9IGtleT17aX0+XHJcblxyXG4gICAgICAgICAgICAgICA8L1Bvc3RDYXJkPiBcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwb3N0cyIsIlBvc3RDYXJkIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlVVJMIiwiYWx0IiwiaDEiLCJ0aXRsZSIsInAiLCJjb250ZW50IiwiQmxvZyIsImZvb3RlciIsImRhcmsiLCJtYXAiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n"));

/***/ })

});