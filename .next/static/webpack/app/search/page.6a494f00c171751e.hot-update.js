"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./app/components/ui/Table/index.tsx":
/*!*******************************************!*\
  !*** ./app/components/ui/Table/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Table = (param)=>{\n    let { data, columns } = param;\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt( true && localStorage.getItem(\"currentPage\") || \"1\"));\n    const itemsPerPage = 10;\n    const indexOfLastItem = currentPage * itemsPerPage;\n    const indexOfFirstItem = indexOfLastItem - itemsPerPage;\n    const currentItems = data === null || data === void 0 ? void 0 : data.slice(indexOfFirstItem, indexOfLastItem);\n    const paginate = (pageNumber)=>setCurrentPage(pageNumber);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         true && localStorage.setItem(\"currentPage\", currentPage.toString());\n    }, [\n        currentPage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-4 py-2\",\n                                    children: column.header\n                                }, column.key, false, {\n                                    fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: currentItems === null || currentItems === void 0 ? void 0 : currentItems.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: index % 2 === 0 ? \"bg-gray-100\" : \"\",\n                                children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border px-4 py-2\",\n                                        children: row[column.key]\n                                    }, column.key, false, {\n                                        fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, index, false, {\n                                fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pagination\",\n                children: Array.from({\n                    length: Math.ceil(data.length / itemsPerPage)\n                }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded my-4 mx-1 \".concat(currentPage === i + 1 ? \"bg-gray-300 text-gray-800\" : \"\"),\n                        onClick: ()=>paginate(i + 1),\n                        children: i + 1\n                    }, i, false, {\n                        fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yavuzcirit/Desktop/repo-finder/app/components/ui/Table/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Table, \"1rR0kptdR5JMfqKctN+Lw4EFvKU=\");\n_c = Table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3VpL1RhYmxlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFHbkQsTUFBTUcsUUFBOEI7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTs7SUFDcEQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUM1Q08sU0FBUyxLQUFrQixJQUFlQyxhQUFhQyxPQUFPLENBQUMsa0JBQWtCO0lBRW5GLE1BQU1DLGVBQWU7SUFFckIsTUFBTUMsa0JBQWtCTixjQUFjSztJQUN0QyxNQUFNRSxtQkFBbUJELGtCQUFrQkQ7SUFDM0MsTUFBTUcsZUFBZVYsaUJBQUFBLDJCQUFBQSxLQUFNVyxLQUFLLENBQUNGLGtCQUFrQkQ7SUFFbkQsTUFBTUksV0FBVyxDQUFDQyxhQUF1QlYsZUFBZVU7SUFFeERmLGdEQUFTQSxDQUFDO1FBQ1IsS0FBa0IsSUFBZU8sYUFBYVMsT0FBTyxDQUFDLGVBQWVaLFlBQVlhLFFBQVE7SUFDM0YsR0FBRztRQUFDYjtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1ELFdBQVU7O2tDQUNmLDhEQUFDRTtrQ0FDQyw0RUFBQ0M7c0NBQ0VuQixRQUFRb0IsR0FBRyxDQUFDQyxDQUFBQSx1QkFDWCw4REFBQ0M7b0NBQW9CTixXQUFVOzhDQUM1QkssT0FBT0UsTUFBTTttQ0FEUEYsT0FBT0csR0FBRzs7Ozs7Ozs7Ozs7Ozs7O2tDQU16Qiw4REFBQ0M7a0NBQ0VoQix5QkFBQUEsbUNBQUFBLGFBQWNXLEdBQUcsQ0FBQyxDQUFDTSxLQUFLQyxzQkFDdkIsOERBQUNSO2dDQUFlSCxXQUFXVyxRQUFRLE1BQU0sSUFBSSxnQkFBZ0I7MENBQzFEM0IsUUFBUW9CLEdBQUcsQ0FBQ0MsQ0FBQUEsdUJBQ1gsOERBQUNPO3dDQUFvQlosV0FBVTtrREFDNUJVLEdBQUcsQ0FBQ0wsT0FBT0csR0FBRyxDQUFDO3VDQURUSCxPQUFPRyxHQUFHOzs7OzsrQkFGZEc7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVWYsOERBQUNaO2dCQUFJQyxXQUFVOzBCQUNaYSxNQUFNQyxJQUFJLENBQUM7b0JBQUVDLFFBQVFDLEtBQUtDLElBQUksQ0FBQ2xDLEtBQUtnQyxNQUFNLEdBQUd6QjtnQkFBYyxHQUFHLENBQUM0QixHQUFHQyxrQkFDakUsOERBQUNDO3dCQUNDcEIsV0FBVyx5RkFBa0osT0FBekRmLGdCQUFnQmtDLElBQUksSUFBSSw4QkFBOEI7d0JBRTFKRSxTQUFTLElBQU0xQixTQUFTd0IsSUFBSTtrQ0FFM0JBLElBQUk7dUJBSEFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0dBckRNckM7S0FBQUE7QUF1RE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvdWkvVGFibGUvaW5kZXgudHN4P2IwOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZVByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IFRhYmxlOiBSZWFjdC5GQzxUYWJsZVByb3BzPiA9ICh7IGRhdGEsIGNvbHVtbnMgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oXG4gICAgcGFyc2VJbnQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQYWdlJykgfHwgJzEnKVxuICApO1xuICBjb25zdCBpdGVtc1BlclBhZ2UgPSAxMDtcblxuICBjb25zdCBpbmRleE9mTGFzdEl0ZW0gPSBjdXJyZW50UGFnZSAqIGl0ZW1zUGVyUGFnZTtcbiAgY29uc3QgaW5kZXhPZkZpcnN0SXRlbSA9IGluZGV4T2ZMYXN0SXRlbSAtIGl0ZW1zUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudEl0ZW1zID0gZGF0YT8uc2xpY2UoaW5kZXhPZkZpcnN0SXRlbSwgaW5kZXhPZkxhc3RJdGVtKTtcblxuICBjb25zdCBwYWdpbmF0ZSA9IChwYWdlTnVtYmVyOiBudW1iZXIpID0+IHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQYWdlJywgY3VycmVudFBhZ2UudG9TdHJpbmcoKSk7XG4gIH0sIFtjdXJyZW50UGFnZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIHctZnVsbFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgIDx0aCBrZXk9e2NvbHVtbi5rZXl9IGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgIHtjb2x1bW4uaGVhZGVyfVxuICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtjdXJyZW50SXRlbXM/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT17aW5kZXggJSAyID09PSAwID8gXCJiZy1ncmF5LTEwMFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbHVtbi5rZXl9IGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgIHtyb3dbY29sdW1uLmtleV19XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKSB9LCAoXywgaSkgPT4gKFxuICAgICAgICAgIDxidXR0b24gIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0zMDAgdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkIHB5LTIgcHgtNCByb3VuZGVkIG15LTQgbXgtMSAke2N1cnJlbnRQYWdlID09PSBpICsgMSA/ICdiZy1ncmF5LTMwMCB0ZXh0LWdyYXktODAwJyA6ICcnfWB9IFxuICAgICAgICAgICAga2V5PXtpfSBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGkgKyAxKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGFibGUiLCJkYXRhIiwiY29sdW1ucyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtc1BlclBhZ2UiLCJpbmRleE9mTGFzdEl0ZW0iLCJpbmRleE9mRmlyc3RJdGVtIiwiY3VycmVudEl0ZW1zIiwic2xpY2UiLCJwYWdpbmF0ZSIsInBhZ2VOdW1iZXIiLCJzZXRJdGVtIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJtYXAiLCJjb2x1bW4iLCJ0aCIsImhlYWRlciIsImtleSIsInRib2R5Iiwicm93IiwiaW5kZXgiLCJ0ZCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIk1hdGgiLCJjZWlsIiwiXyIsImkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ui/Table/index.tsx\n"));

/***/ })

});