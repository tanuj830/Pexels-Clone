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

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\nconst Header = ()=>{\n    _s();\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [input, setInput] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const handleChange = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = ()=>{\n        axios.get(\"https://api.pexels.com/v1/search?query=\".concat(input), {\n            headers: {\n                Authorization: \"E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL\"\n            }\n        }).then((res)=>setData(res.data.photos)).catch((err)=>console.log(err));\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid-header\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container-fluid\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-3 col-md-4 d-flex align-items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-light mx-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiPixelfedLine, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 44\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 12\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"mt-1\",\n                                        style: {\n                                            color: \"white\"\n                                        },\n                                        children: \"Pixels\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 66\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 12\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-9 d-flex justify-content-end col-md-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"text-decoration-none text-dark\",\n                                        href: \"/\",\n                                        children: \"Sign-in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 26\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 12\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 12\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row d-flex justify-content-center align-items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"p-5 text-light fs-1 mt-5\",\n                                    children: \"The best free stock photos, royalty free images & videos shared by creators.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row d-flex justify-content-center align-items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-8 d-flex justify-content-center align-items-center py-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"w-50 p-2 \",\n                                        style: {\n                                            borderRadius: 10,\n                                            color: \"white\",\n                                            border: \"solid white 2px\",\n                                            background: \"#d6cccc7f\"\n                                        },\n                                        placeholder: \"Search for free photos\",\n                                        onChange: handleChange,\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-2 btn btn-success mx-1\",\n                                        style: {\n                                            borderRadius: 10\n                                        },\n                                        onClick: handleSubmit,\n                                        children: \"submit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Header, \"ekMMk22E6I3GjWFf1BePflg2Qgc=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNTO0FBQ047QUFDaUI7QUFDSjtBQUN6QyxNQUFNSSxRQUFRQyxtQkFBT0EsQ0FBQywwREFBTztBQUU3QixNQUFNQyxTQUFTLElBQU07O0lBQ2pCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUixxREFBYyxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLHFEQUFjLENBQUM7SUFHekMsTUFBTVksZUFBZSxDQUFDQyxJQUFLO1FBQ3pCRixTQUFTRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDekI7SUFDQSxNQUFNQyxlQUFlLElBQUk7UUFDdkJaLE1BQU1hLEdBQUcsQ0FBQywwQ0FBZ0QsT0FBTlAsUUFBUTtZQUMxRFEsU0FBUTtnQkFDTkMsZUFBZTtZQUNqQjtRQUNGLEdBQUdDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBS2IsUUFBUWEsSUFBSWQsSUFBSSxDQUFDZSxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtRQUM5REMsUUFBUUMsR0FBRyxDQUFDbkI7SUFDZDtJQUNGLHFCQUFRO2tCQUNOLDRFQUFDb0I7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQ0M7d0NBQUdELFdBQVU7a0RBQWtCLDRFQUFDMUIsMERBQWNBOzs7Ozs7Ozs7O2tEQUFPLDhEQUFDMkI7d0NBQUdELFdBQVU7d0NBQU9FLE9BQU87NENBQUNDLE9BQU07d0NBQU87a0RBQUc7Ozs7Ozs7Ozs7OzswQ0FJbkcsOERBQUNKO2dDQUFJQyxXQUFVOzBDQUNWLDRFQUFDRDs4Q0FDUSw0RUFBQzFCLGtEQUFJQTt3Q0FBQzJCLFdBQVU7d0NBQWlDSSxNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTzNFLDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDZiw0RUFBQ0s7b0NBQUdMLFdBQVU7OENBQTRCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUc1Qyw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDZiw4REFBQ2xCO3dDQUFNa0IsV0FBVTt3Q0FBWUUsT0FBTzs0Q0FBQ0ksY0FBYTs0Q0FBR0gsT0FBTTs0Q0FBU0ksUUFBTzs0Q0FBbUJDLFlBQVc7d0NBQVc7d0NBQUdDLGFBQVk7d0NBQXlCQyxVQUFVMUI7d0NBQWMyQixNQUFLOzs7Ozs7a0RBQ3JNLDhEQUFDQzt3Q0FBT1osV0FBVTt3Q0FBMkJFLE9BQU87NENBQUNJLGNBQWE7d0NBQUU7d0NBQUdPLFNBQVN6QjtrREFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxHO0dBdkRNVjtLQUFBQTtBQXlETiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qc3g/NTY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1JpUGl4ZWxmZWRMaW5lfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcclxuaW1wb3J0IHtCc0Rvd25sb2FkfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+e1xyXG4gICAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpPT57XHJcbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkucGV4ZWxzLmNvbS92MS9zZWFyY2g/cXVlcnk9JHtpbnB1dH1gLHtcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246ICdFOWZ4R2EwcFBzbXc5cnFobWcxZjNaamk2cmpmZTVyVkJCV09EYWRKa3lEaVFOaWdZalJqR3lTTCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4ocmVzPT5zZXREYXRhKHJlcy5kYXRhLnBob3RvcykpLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuICByZXR1cm4gKDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkLWhlYWRlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyAnPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMyBjb2wtbWQtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWxpZ2h0IG14LTEnPjxSaVBpeGVsZmVkTGluZS8+PC9oMT48aDEgY2xhc3NOYW1lPSdtdC0xJyBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT5QaXhlbHM8L2gxPlxyXG5cclxuICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC05IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGNvbC1tZC04Jz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3RleHQtZGVjb3JhdGlvbi1ub25lIHRleHQtZGFyaycgaHJlZj1cIi9cIj5TaWduLWluPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3AtNSB0ZXh0LWxpZ2h0IGZzLTEgbXQtNScgPlRoZSBiZXN0IGZyZWUgc3RvY2sgcGhvdG9zLCByb3lhbHR5IGZyZWUgaW1hZ2VzICYgdmlkZW9zIHNoYXJlZCBieSBjcmVhdG9ycy48L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC04IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBweS01Jz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3ctNTAgcC0yICcgc3R5bGU9e3tib3JkZXJSYWRpdXM6MTAsY29sb3I6XCJ3aGl0ZVwiLCBib3JkZXI6XCJzb2xpZCB3aGl0ZSAycHhcIiwgYmFja2dyb3VuZDpcIiNkNmNjY2M3ZlwifX0gcGxhY2Vob2xkZXI9J1NlYXJjaCBmb3IgZnJlZSBwaG90b3MnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPSdwLTIgYnRuIGJ0bi1zdWNjZXNzIG14LTEnIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOjEwfX0gb25DbGljaz17aGFuZGxlU3VibWl0fT5zdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG48Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJSaVBpeGVsZmVkTGluZSIsIkJzRG93bmxvYWQiLCJheGlvcyIsInJlcXVpcmUiLCJIZWFkZXIiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsInBob3RvcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJjb2xvciIsImhyZWYiLCJoMyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});