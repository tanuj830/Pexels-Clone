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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);\n    const [input, setInput] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const handleChange = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = ()=>{\n        axios.get(\"https://api.pexels.com/v1/search?query=\".concat(input), {\n            headers: {\n                Authorization: \"E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL\"\n            }\n        }).then((res)=>setData(res.data.photos)).catch((err)=>console.log(err));\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleChange,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row mt-5\",\n                            children: data.length == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 28\n                            }, this) : data.map((con)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-12 col-md-4 mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"box\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"img-fluid original_img\",\n                                                src: con.src.original,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 11\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"author_name d-flex justify-content-between\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        className: \"lead \",\n                                                        children: con.photographer\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 11\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"downloadBtn\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsDownload, {}, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 44\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 11\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 11\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 11\n                                    }, this)\n                                }, con.id, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 24\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"ekMMk22E6I3GjWFf1BePflg2Qgc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBR2lCO0FBRXBCO0FBRWdCO0FBRTFCLFNBQVNJLE9BQU87O0lBRTdCLE1BQU1DLFFBQVFDLG1CQUFPQSxDQUFDLDBEQUFPO0lBQzdCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTixxREFBYyxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULHFEQUFjLENBQUM7SUFHekMsTUFBTVUsZUFBZSxDQUFDQyxJQUFLO1FBQ3pCRixTQUFTRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDekI7SUFDQSxNQUFNQyxlQUFlLElBQUk7UUFDdkJYLE1BQU1ZLEdBQUcsQ0FBQywwQ0FBZ0QsT0FBTlAsUUFBUTtZQUMxRFEsU0FBUTtnQkFDTkMsZUFBZTtZQUNqQjtRQUNGLEdBQUdDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBS2IsUUFBUWEsSUFBSWQsSUFBSSxDQUFDZSxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtRQUM5REMsUUFBUUMsR0FBRyxDQUFDbkI7SUFDZDtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ1Asa0RBQUlBOztrQ0FDSCw4REFBQzJCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFXbEMscUVBQVc7O2tDQUs5Qiw4REFBQ1M7d0JBQU0wQixVQUFVeEI7d0JBQWN5QixNQUFLOzs7Ozs7a0NBQ3BDLDhEQUFDQzt3QkFBT0MsU0FBU3ZCO2tDQUFjOzs7Ozs7a0NBQy9CLDhEQUFDd0I7d0JBQUlMLFdBQVU7a0NBQ2IsNEVBQUNLOzRCQUFJTCxXQUFVO3NDQUViNUIsS0FBS2tDLE1BQU0sSUFBSSxrQkFBSSw4REFBQ0M7MENBQUc7Ozs7O3VDQUN2Qm5DLEtBQUtvQyxHQUFHLENBQUNDLENBQUFBLG9CQUFNLDhEQUFDSjtvQ0FBaUJMLFdBQVU7OENBQ3pDLDRFQUFDSzt3Q0FBSUwsV0FBVTs7MERBQ2YsOERBQUNVO2dEQUFJVixXQUFVO2dEQUF5QlcsS0FBS0YsSUFBSUUsR0FBRyxDQUFDQyxRQUFRO2dEQUFFQyxLQUFJOzs7Ozs7MERBQ25FLDhEQUFDUjtnREFBSUwsV0FBVTs7a0VBQ2YsOERBQUNjO3dEQUFHZCxXQUFVO2tFQUFTUyxJQUFJTSxZQUFZOzs7Ozs7a0VBQ3ZDLDhEQUFDWjt3REFBT0gsV0FBVTtrRUFBZSw0RUFBQ2hDLHNEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FMckJ5QyxJQUFJTyxFQUFFOzs7O3lDQVM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9WLENBQUM7R0FyRHVCL0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCc0Rvd25sb2FkfSBmcm9tICdyZWFjdC1pY29ucy9icydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcblxuICBcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+e1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpPT57XG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5wZXhlbHMuY29tL3YxL3NlYXJjaD9xdWVyeT0ke2lucHV0fWAse1xuICAgICAgaGVhZGVyczp7XG4gICAgICAgIEF1dGhvcml6YXRpb246ICdFOWZ4R2EwcFBzbXc5cnFobWcxZjNaamk2cmpmZTVyVkJCV09EYWRKa3lEaVFOaWdZalJqR3lTTCdcbiAgICAgIH1cbiAgICB9KS50aGVuKHJlcz0+c2V0RGF0YShyZXMuZGF0YS5waG90b3MpKS5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgIFxuXG5cblxuICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwidGV4dFwiIC8+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PnN1Ym1pdDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBtdC01Jz5cbiAgICAgIHtcbiAgICAgICAgZGF0YS5sZW5ndGggPT0gMCA/IDxoMz5Mb2FkaW5nLi4uPC9oMz46XG4gICAgICAgIGRhdGEubWFwKGNvbj0+KDxkaXYga2V5PXtjb24uaWR9IGNsYXNzTmFtZT0nY29sLTEyIGNvbC1tZC00IG10LTUnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWctZmx1aWQgb3JpZ2luYWxfaW1nJyBzcmM9e2Nvbi5zcmMub3JpZ2luYWx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F1dGhvcl9uYW1lIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbGVhZCAnPntjb24ucGhvdG9ncmFwaGVyfTwvaDE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Rvd25sb2FkQnRuJyA+PEJzRG93bmxvYWQgLz48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIlJlYWN0IiwiQnNEb3dubG9hZCIsIkhvbWUiLCJheGlvcyIsInJlcXVpcmUiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsInBob3RvcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsImxlbmd0aCIsImgzIiwibWFwIiwiY29uIiwiaW1nIiwic3JjIiwib3JpZ2luYWwiLCJhbHQiLCJoMSIsInBob3RvZ3JhcGhlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});