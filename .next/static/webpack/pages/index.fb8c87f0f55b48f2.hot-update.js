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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [input, setInput] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const handleChange = (e)=>{\n        setInput(e.target.value);\n    };\n    const handleSubmit = ()=>{\n        axios.get(\"https://api.pexels.com/v1/search?query=\".concat(input), {\n            headers: {\n                Authorization: \"E9fxGa0pPsmw9rqhmg1f3Zji6rjfe5rVBBWODadJkyDiQNigYjRjGySL\"\n            }\n        }).then((res)=>setData(res.data.photos)).catch((err)=>console.log(err));\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid-header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-3 col-md-4 d-flex align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-light mx-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiPixelfedLine, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 44\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 12\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"mt-1\",\n                                    style: {\n                                        color: \"white\"\n                                    },\n                                    children: \"Pixels\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 66\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 12\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-9 d-flex justify-content-end col-md-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"text-decoration-none text-dark\",\n                                    href: \"/\",\n                                    children: \"Sign-in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 26\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 12\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row d-flex justify-content-center align-items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"p-5 text-light fs-1 mt-5\",\n                            children: \"The best free stock photos, royalty free images & videos shared by creators.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                style: {\n                                    zIndex: 100\n                                },\n                                onChange: handleChange,\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSubmit,\n                                children: \"submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Documents\\\\dummy\\\\components\\\\Header.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"ekMMk22E6I3GjWFf1BePflg2Qgc=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNTO0FBQ047QUFDaUI7QUFFN0MsTUFBTUcsU0FBUyxJQUFNOztJQUNqQixNQUFNQyxRQUFRQyxtQkFBT0EsQ0FBQywwREFBTztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AscURBQWMsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHVixxREFBYyxDQUFDO0lBR3pDLE1BQU1XLGVBQWUsQ0FBQ0MsSUFBSztRQUN6QkYsU0FBU0UsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3pCO0lBQ0EsTUFBTUMsZUFBZSxJQUFJO1FBQ3ZCWCxNQUFNWSxHQUFHLENBQUMsMENBQWdELE9BQU5QLFFBQVE7WUFDMURRLFNBQVE7Z0JBQ05DLGVBQWU7WUFDakI7UUFDRixHQUFHQyxJQUFJLENBQUNDLENBQUFBLE1BQUtiLFFBQVFhLElBQUlkLElBQUksQ0FBQ2UsTUFBTSxHQUFHQyxLQUFLLENBQUNDLENBQUFBLE1BQUtDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDOURDLFFBQVFDLEdBQUcsQ0FBQ25CO0lBQ2Q7SUFDRixxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNmLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2YsOERBQUNDO29DQUFHRCxXQUFVOzhDQUFrQiw0RUFBQ3pCLDBEQUFjQTs7Ozs7Ozs7Ozs4Q0FBTyw4REFBQzBCO29DQUFHRCxXQUFVO29DQUFPRSxPQUFPO3dDQUFDQyxPQUFNO29DQUFPOzhDQUFHOzs7Ozs7Ozs7Ozs7c0NBSW5HLDhEQUFDSjs0QkFBSUMsV0FBVTtzQ0FDViw0RUFBQ0Q7MENBQ1EsNEVBQUN6QixrREFBSUE7b0NBQUMwQixXQUFVO29DQUFpQ0ksTUFBSzs4Q0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU8zRSw4REFBQ0w7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0s7NEJBQUdMLFdBQVU7c0NBQTJCOzs7Ozs7Ozs7OztrQ0FFN0MsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ2xCO2dDQUFNb0IsT0FBTztvQ0FBQ0ksUUFBTztnQ0FBRztnQ0FBR0MsVUFBVXZCO2dDQUFjd0IsTUFBSzs7Ozs7OzBDQUNqRSw4REFBQ0M7Z0NBQU9DLFNBQVN0QjswQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25DO0dBOUNNWjtLQUFBQTtBQWdETiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qc3g/NTY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1JpUGl4ZWxmZWRMaW5lfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PntcclxuICAgICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKT0+e1xyXG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnBleGVscy5jb20vdjEvc2VhcmNoP3F1ZXJ5PSR7aW5wdXR9YCx7XHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiAnRTlmeEdhMHBQc213OXJxaG1nMWYzWmppNnJqZmU1clZCQldPRGFkSmt5RGlRTmlnWWpSakd5U0wnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlcz0+c2V0RGF0YShyZXMuZGF0YS5waG90b3MpKS5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQtaGVhZGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93ICc+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0zIGNvbC1tZC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtbGlnaHQgbXgtMSc+PFJpUGl4ZWxmZWRMaW5lLz48L2gxPjxoMSBjbGFzc05hbWU9J210LTEnIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319PlBpeGVsczwvaDE+XHJcblxyXG4gICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTkgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgY29sLW1kLTgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1kYXJrJyBocmVmPVwiL1wiPlNpZ24taW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ncC01IHRleHQtbGlnaHQgZnMtMSBtdC01Jz5UaGUgYmVzdCBmcmVlIHN0b2NrIHBob3Rvcywgcm95YWx0eSBmcmVlIGltYWdlcyAmIHZpZGVvcyBzaGFyZWQgYnkgY3JlYXRvcnMuPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3t6SW5kZXg6MTAwfX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PnN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlJpUGl4ZWxmZWRMaW5lIiwiSGVhZGVyIiwiYXhpb3MiLCJyZXF1aXJlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJwaG90b3MiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInN0eWxlIiwiY29sb3IiLCJocmVmIiwiaDMiLCJ6SW5kZXgiLCJvbkNoYW5nZSIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});