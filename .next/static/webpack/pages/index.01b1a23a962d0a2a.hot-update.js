"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n    const [articles, setArticles] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios.get(\"https://newsdata.io/api/1/news?apikey=pub_18138f6084fc1e5feb4a3092ad8c2c7f9054d&q=pegasus&language=en\").then((res)=>setArticles(res.data.results)).catch((err)=>console.log(err));\n        console.log(articles);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container lead\",\n                    children: articles.length == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Loading\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 34\n                    }, this) : articles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex flex-column\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex justify-content-between\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                className: \"text-muted\",\n                                                children: [\n                                                    \"Author: \",\n                                                    article.author\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"img-fluid my-2\",\n                                                src: article.image_url,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                    className: \"text-muted\",\n                                                    children: [\n                                                        \"Posted On: \",\n                                                        article.pubDate.slice(0, 10)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 11\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-muted mt-2\",\n                                                children: article.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: article.content ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                article.content.slice(0, 100),\n                                                \"...\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 34\n                                        }, this) : null\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"XsOpLvUbTkfx79dw07TVNsBviNQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFHaUI7QUFFcEI7QUFDUTtBQUVsQixTQUFTSSxPQUFPOztJQUU3QixNQUFNQyxRQUFRQyxtQkFBT0EsQ0FBQywwREFBTztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04scURBQWMsQ0FBQyxFQUFFO0lBRWpEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RFLE1BQU1LLEdBQUcsQ0FBQyx5R0FBeUdDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBS0osWUFBWUksSUFBSUMsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtRQUNuTEMsUUFBUUMsR0FBRyxDQUFDWDtJQUNkLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ1Asa0RBQUlBOztrQ0FDSCw4REFBQ21CO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFXMUIscUVBQVc7MEJBRTdCLDRFQUFDMkI7b0JBQUlELFdBQVU7OEJBRVZwQixTQUFTc0IsTUFBTSxJQUFJLGtCQUFJLDhEQUFDQztrQ0FBRzs7Ozs7K0JBQzNCdkIsU0FBU3dCLEdBQUcsQ0FBQ0MsQ0FBQUEsd0JBQ1gsOERBQUNDOzRCQUFFUixNQUFLO3NDQUNOLDRFQUFDRztnQ0FBSUQsV0FBVTs7a0RBQ2pCLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDYiw0RUFBQ0M7c0RBQ0wsNEVBQUNNO2dEQUFPUCxXQUFVOztvREFBYTtvREFBU0ssUUFBUUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSXRELDhEQUFDUDt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNTO2dEQUFJVCxXQUFVO2dEQUFpQlUsS0FBS0wsUUFBUU0sU0FBUztnREFBRUMsS0FBSTs7Ozs7OzBEQUMxRCw4REFBQ1g7MERBQ0wsNEVBQUNNO29EQUFPUCxXQUFVOzt3REFBYTt3REFBWUssUUFBUVEsT0FBTyxDQUFDQyxLQUFLLENBQUMsR0FBRTs7Ozs7Ozs7Ozs7OzBEQUVqRSw4REFBQ0M7Z0RBQUdmLFdBQVU7MERBQW1CSyxRQUFRYixLQUFLOzs7Ozs7Ozs7Ozs7a0RBRTlDLDhEQUFDUztrREFDRUksUUFBUVYsT0FBTyxpQkFBRyw4REFBQ3FCOztnREFBR1gsUUFBUVYsT0FBTyxDQUFDbUIsS0FBSyxDQUFDLEdBQUU7Z0RBQUs7Ozs7OzttREFBVSxJQUFJOzs7Ozs7a0RBRXRFLDhEQUFDRzs7Ozs7Ozs7Ozs7Ozs7O2lDQUdDOzs7Ozs7Ozs7Ozs7O0FBTVosQ0FBQztHQW5EdUJ4QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gUmVhY3QudXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCJodHRwczovL25ld3NkYXRhLmlvL2FwaS8xL25ld3M/YXBpa2V5PXB1Yl8xODEzOGY2MDg0ZmMxZTVmZWI0YTMwOTJhZDhjMmM3ZjkwNTRkJnE9cGVnYXN1cyZsYW5ndWFnZT1lblwiKS50aGVuKHJlcz0+c2V0QXJ0aWNsZXMocmVzLmRhdGEucmVzdWx0cykpLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcbiAgICBjb25zb2xlLmxvZyhhcnRpY2xlcylcbiAgfSwgW10pXG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGxlYWQnPlxuICAgICAgICB7XG4gICAgICAgICAgYXJ0aWNsZXMubGVuZ3RoID09IDAgPyA8aDM+TG9hZGluZzwvaDM+IDpcbiAgICAgICAgICBhcnRpY2xlcy5tYXAoYXJ0aWNsZT0+KFxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LWNvbHVtbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c21hbGwgIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+QXV0aG9yOiB7YXJ0aWNsZS5hdXRob3J9PC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZy1mbHVpZCBteS0yJyBzcmM9e2FydGljbGUuaW1hZ2VfdXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzbWFsbCAgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5Qb3N0ZWQgT246IHthcnRpY2xlLnB1YkRhdGUuc2xpY2UoMCwxMCl9PC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LW11dGVkIG10LTInPnthcnRpY2xlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7YXJ0aWNsZS5jb250ZW50ID8gPHA+e2FydGljbGUuY29udGVudC5zbGljZSgwLDEwMCl9Li4uPC9wPiA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aHIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIb21lIiwiYXhpb3MiLCJyZXF1aXJlIiwiYXJ0aWNsZXMiLCJzZXRBcnRpY2xlcyIsInVzZVN0YXRlIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJyZXN1bHRzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJsZW5ndGgiLCJoMyIsIm1hcCIsImFydGljbGUiLCJhIiwic21hbGwiLCJhdXRob3IiLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJwdWJEYXRlIiwic2xpY2UiLCJoMiIsInAiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});