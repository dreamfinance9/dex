"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/liquidity",{

/***/ "./src/pages/liquidity.tsx":
/*!*********************************!*\
  !*** ./src/pages/liquidity.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_namasiahongkong_Downloads_Criptic_React_Next_Web3_NFT_Crypto_Dashboard_Criptic_dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_namasiahongkong_Downloads_Criptic_React_Next_Web3_NFT_Crypto_Dashboard_Criptic_dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_namasiahongkong_Downloads_Criptic_React_Next_Web3_NFT_Crypto_Dashboard_Criptic_dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var _layouts_trade_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layouts/_trade-layout */ \"./src/layouts/_trade-layout.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ \"./src/components/ui/button/index.ts\");\n/* harmony import */ var _components_ui_coin_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/coin-input */ \"./src/components/ui/coin-input.tsx\");\n/* harmony import */ var _components_ui_transaction_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/transaction-info */ \"./src/components/ui/transaction-info.tsx\");\n/* harmony import */ var _components_icons_plus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/icons/plus */ \"./src/components/icons/plus.tsx\");\n/* harmony import */ var _components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ui/links/active-link */ \"./src/components/ui/links/active-link.tsx\");\n/* harmony import */ var _contracts_swap_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/contracts/swap.json */ \"./src/contracts/swap.json\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_11__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar abi = _contracts_swap_json__WEBPACK_IMPORTED_MODULE_10__;\nvar web3;\nvar enable = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(_Users_namasiahongkong_Downloads_Criptic_React_Next_Web3_NFT_Crypto_Dashboard_Criptic_dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _Users_namasiahongkong_Downloads_Criptic_React_Next_Web3_NFT_Crypto_Dashboard_Criptic_dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    web3 = new (web3__WEBPACK_IMPORTED_MODULE_11___default())((web3__WEBPACK_IMPORTED_MODULE_11___default().givenProvider));\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function enable() {\n        return _ref.apply(this, arguments);\n    };\n}();\nenable();\nfunction dec(count, count1) {\n    return _dec.apply(this, arguments);\n}\nfunction _dec() {\n    _dec = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(_Users_namasiahongkong_Downloads_Criptic_React_Next_Web3_NFT_Crypto_Dashboard_Criptic_dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(count, count1) {\n        var pool_contract, greeting, swap_method, accounts, dataFie;\n        return _Users_namasiahongkong_Downloads_Criptic_React_Next_Web3_NFT_Crypto_Dashboard_Criptic_dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    pool_contract = new web3.eth.Contract(_contracts_swap_json__WEBPACK_IMPORTED_MODULE_10__, \"0x0e51aA105821f459998aFBDFf2864F44ae67aE41\");\n                    _ctx.next = 3;\n                    return swap_contract.methods.check_apy_a(\"0x34De3E504892841e0247931582028bEbbF27220d\").call();\n                case 3:\n                    greeting = _ctx.sent;\n                    console.log(\"tt\");\n                    console.log(greeting);\n                    console.log(\"tt\");\n                    console.log(count.coin);\n                    console.log(count.value);\n                    console.log(count1.coin);\n                    console.log(count1.value);\n                    swap_method = \"swap_contract.methods.swap\" + \"_\" + count.coin.toLowerCase() + \"_\" + count1.coin.toLowerCase() + \"(\" + count.value + \").encodeABI()\";\n                    console.log(swap_method);\n                    _ctx.next = 15;\n                    return web3.eth.requestAccounts();\n                case 15:\n                    accounts = _ctx.sent;\n                    dataFie = eval(swap_method); //user address to CONTRACT\n                    window.ethereum.request({\n                        method: \"eth_sendTransaction\",\n                        params: [\n                            {\n                                from: accounts[0],\n                                to: \"0x0e51aA105821f459998aFBDFf2864F44ae67aE41\",\n                                data: dataFie,\n                                gas: \"1d184\"\n                            }, \n                        ]\n                    }).then(function(txHash) {\n                        return console.log(txHash);\n                    }).catch(function(error) {\n                        return console.error;\n                    });\n                case 18:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _dec.apply(this, arguments);\n}\nvar LiquidityPage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), count = ref[0], setCount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), count1 = ref1[0], setCount1 = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {\n                title: \"Liquidity\",\n                description: \"DREAM FINANCE\"\n            }, void 0, false, {\n                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_layouts_trade_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-5 border-b border-dashed border-gray-200 pb-5 dark:border-gray-800 xs:mb-7 xs:pb-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"relative flex flex-col gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_coin_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    label: \"From\",\n                                    exchangeRate: 0.0,\n                                    defaultCoinIndex: 0,\n                                    getCoinValue: function(data) {\n                                        return setCount(data);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"absolute top-1/2 left-1/2 z-[1] -mt-4 -ml-4 rounded-full bg-white shadow-large dark:bg-gray-600\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        size: \"mini\",\n                                        color: \"gray\",\n                                        shape: \"circle\",\n                                        variant: \"transparent\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_icons_plus__WEBPACK_IMPORTED_MODULE_8__.Plus, {\n                                            className: \"h-auto w-3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_coin_input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    label: \"To\",\n                                    exchangeRate: 0.0,\n                                    defaultCoinIndex: 1,\n                                    getCoinValue: function(data) {\n                                        return setCount1(data);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-4 xs:gap-[18px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_transaction_info__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                label: \"13.77 eth per btc\",\n                                value: \"0%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_transaction_info__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                label: \"0.072631 Btc per ETH\",\n                                value: \"Share of Pool\"\n                            }, void 0, false, {\n                                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mt-6 grid grid-cols-2 gap-2.5 xs:mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                href: \"/liquidity-position\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    size: \"large\",\n                                    shape: \"rounded\",\n                                    fullWidth: true,\n                                    className: \"uppercase\",\n                                    children: \"Approve BTC\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                href: \"/liquidity-position\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    size: \"large\",\n                                    shape: \"rounded\",\n                                    fullWidth: true,\n                                    className: \"uppercase\",\n                                    children: \"Approve ETH\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                href: \"/liquidity-position\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    size: \"large\",\n                                    shape: \"rounded\",\n                                    fullWidth: true,\n                                    className: \"mt-6 uppercase xs:mt-8 xs:tracking-widest sendEthButton2\",\n                                    onClick: function() {\n                                        return dec(count, count1);\n                                    },\n                                    children: \"SWAP\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/pages/liquidity.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(LiquidityPage, \"4eLOaIE0Yl15ohhrrvSgicSmGzk=\");\n_c = LiquidityPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LiquidityPage);\nvar _c;\n$RefreshReg$(_c, \"LiquidityPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OENBQ2xDLE1BRUQ7Ozs7O3lDQUFTOzs7OztxQ0FDRTs7Ozs7OzZCQUNUOzs7Ozs7cUJBQ007O29CQUNiLENBQ0g7Q0FDSDtHQWhGS2dDLGFBQWE7QUFBYkEsS0FBQUEsYUFBYTtBQWtGbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGlxdWlkaXR5LnRzeD80MGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2VXaXRoTGF5b3V0IH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQgVHJhZGVMYXlvdXQgZnJvbSAnQC9sYXlvdXRzL190cmFkZS1sYXlvdXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCBDb2luSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL3VpL2NvaW4taW5wdXQnO1xuaW1wb3J0IFRyYW5zYWN0aW9uSW5mbyBmcm9tICdAL2NvbXBvbmVudHMvdWkvdHJhbnNhY3Rpb24taW5mbyc7XG5pbXBvcnQgeyBQbHVzIH0gZnJvbSAnQC9jb21wb25lbnRzL2ljb25zL3BsdXMnO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnQC9jb21wb25lbnRzL3VpL2xpbmtzL2FjdGl2ZS1saW5rJztcblxuaW1wb3J0IEFCSSBmcm9tIFwiQC9jb250cmFjdHMvc3dhcC5qc29uXCI7XG5pbXBvcnQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlciBmcm9tICdAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyJztcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmNvbnN0IGFiaSA9IEFCSTtcbnZhciB3ZWIzOiBXZWIzO1xuXG5jb25zdCBlbmFibGUgPSBhc3luYyAoKSA9PiB7XG4gICAgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlcik7XG59XG5cbmVuYWJsZSgpO1xuXG5hc3luYyBmdW5jdGlvbiBkZWMoY291bnQsIGNvdW50MSl7XG4gICAgICBsZXQgcG9vbF9jb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIFwiMHgwZTUxYUExMDU4MjFmNDU5OTk4YUZCREZmMjg2NEY0NGFlNjdhRTQxXCIpO1xuXG4gICAgICBjb25zdCBncmVldGluZyA9IGF3YWl0IHN3YXBfY29udHJhY3QubWV0aG9kcy5jaGVja19hcHlfYShcIjB4MzREZTNFNTA0ODkyODQxZTAyNDc5MzE1ODIwMjhiRWJiRjI3MjIwZFwiKS5jYWxsKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInR0XCIpO1xuICAgICAgY29uc29sZS5sb2coZ3JlZXRpbmcpO1xuICAgICAgY29uc29sZS5sb2coXCJ0dFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50LmNvaW4pO1xuICAgICAgY29uc29sZS5sb2coY291bnQudmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coY291bnQxLmNvaW4pO1xuICAgICAgY29uc29sZS5sb2coY291bnQxLnZhbHVlKTtcblxuICAgICAgY29uc3Qgc3dhcF9tZXRob2QgPSBcInN3YXBfY29udHJhY3QubWV0aG9kcy5zd2FwXCIgKyBcIl9cIiArIGNvdW50LmNvaW4udG9Mb3dlckNhc2UoKSArIFwiX1wiICtjb3VudDEuY29pbi50b0xvd2VyQ2FzZSgpICsgXCIoXCIgKyBjb3VudC52YWx1ZSArIFwiKS5lbmNvZGVBQkkoKVwiO1xuICAgICAgY29uc29sZS5sb2coc3dhcF9tZXRob2QpO1xuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLnJlcXVlc3RBY2NvdW50cygpO1xuXG4gICAgICAvL3ZhciBkYXRhRmllID0gc3dhcF9jb250cmFjdC5tZXRob2RzLnN3YXBfdXNkY19kZigxKS5lbmNvZGVBQkkoKTsgLy91c2VyIGFkZHJlc3MgdG8gQ09OVFJBQ1RcbiAgICAgIHZhciBkYXRhRmllID0gZXZhbChzd2FwX21ldGhvZCk7IC8vdXNlciBhZGRyZXNzIHRvIENPTlRSQUNUXG5cbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnZXRoX3NlbmRUcmFuc2FjdGlvbicsXG4gICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICAgICAgICAgIHRvOiBcIjB4MGU1MWFBMTA1ODIxZjQ1OTk5OGFGQkRGZjI4NjRGNDRhZTY3YUU0MVwiLCAgLy9CVVNEIENvbnRyYWN0IEFkZHJlc3NcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhRmllLFxuICAgICAgICAgICAgICAgIGdhczogJzFkMTg0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh0eEhhc2gpID0+IGNvbnNvbGUubG9nKHR4SGFzaCkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IpO1xufVxuXG5jb25zdCBMaXF1aWRpdHlQYWdlOiBOZXh0UGFnZVdpdGhMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2NvdW50MSwgc2V0Q291bnQxXSA9IHVzZVN0YXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9XCJMaXF1aWRpdHlcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkRSRUFNIEZJTkFOQ0VcIlxuICAgICAgLz5cbiAgICAgIDxUcmFkZUxheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IGJvcmRlci1iIGJvcmRlci1kYXNoZWQgYm9yZGVyLWdyYXktMjAwIHBiLTUgZGFyazpib3JkZXItZ3JheS04MDAgeHM6bWItNyB4czpwYi02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGdhcC0zXCI+XG4gICAgICAgICAgICA8Q29pbklucHV0XG4gICAgICAgICAgICAgIGxhYmVsPXsnRnJvbSd9XG4gICAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZT17MC4wfVxuICAgICAgICAgICAgICBkZWZhdWx0Q29pbkluZGV4PXswfVxuICAgICAgICAgICAgICBnZXRDb2luVmFsdWU9eyhkYXRhKSA9PiAgc2V0Q291bnQoZGF0YSkgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiB6LVsxXSAtbXQtNCAtbWwtNCByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93LWxhcmdlIGRhcms6YmctZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImdyYXlcIlxuICAgICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwiaC1hdXRvIHctM1wiIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29pbklucHV0XG4gICAgICAgICAgICAgIGxhYmVsPXsnVG8nfVxuICAgICAgICAgICAgICBleGNoYW5nZVJhdGU9ezAuMH1cbiAgICAgICAgICAgICAgZGVmYXVsdENvaW5JbmRleD17MX1cbiAgICAgICAgICAgICAgZ2V0Q29pblZhbHVlPXsoZGF0YSkgPT4gc2V0Q291bnQxKGRhdGEpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCB4czpnYXAtWzE4cHhdXCI+XG4gICAgICAgICAgPFRyYW5zYWN0aW9uSW5mbyBsYWJlbD17JzEzLjc3IGV0aCBwZXIgYnRjJ30gdmFsdWU9eycwJSd9IC8+XG4gICAgICAgICAgPFRyYW5zYWN0aW9uSW5mb1xuICAgICAgICAgICAgbGFiZWw9eycwLjA3MjYzMSBCdGMgcGVyIEVUSCd9XG4gICAgICAgICAgICB2YWx1ZT17J1NoYXJlIG9mIFBvb2wnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMiBnYXAtMi41IHhzOm10LThcIj5cbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2xpcXVpZGl0eS1wb3NpdGlvblwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFwcHJvdmUgQlRDXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9saXF1aWRpdHktcG9zaXRpb25cIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcHByb3ZlIEVUSFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvbGlxdWlkaXR5LXBvc2l0aW9uXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIHNoYXBlPVwicm91bmRlZFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiB1cHBlcmNhc2UgeHM6bXQtOCB4czp0cmFja2luZy13aWRlc3Qgc2VuZEV0aEJ1dHRvbjJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWMoY291bnQsIGNvdW50MSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNXQVBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RyYWRlTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlxdWlkaXR5UGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk5leHRTZW8iLCJUcmFkZUxheW91dCIsIkJ1dHRvbiIsIkNvaW5JbnB1dCIsIlRyYW5zYWN0aW9uSW5mbyIsIlBsdXMiLCJBY3RpdmVMaW5rIiwiQUJJIiwiV2ViMyIsImFiaSIsIndlYjMiLCJlbmFibGUiLCJnaXZlblByb3ZpZGVyIiwiZGVjIiwiY291bnQiLCJjb3VudDEiLCJwb29sX2NvbnRyYWN0IiwiZ3JlZXRpbmciLCJzd2FwX21ldGhvZCIsImFjY291bnRzIiwiZGF0YUZpZSIsImV0aCIsIkNvbnRyYWN0Iiwic3dhcF9jb250cmFjdCIsIm1ldGhvZHMiLCJjaGVja19hcHlfYSIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwiY29pbiIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJyZXF1ZXN0QWNjb3VudHMiLCJldmFsIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwiZnJvbSIsInRvIiwiZGF0YSIsImdhcyIsInRoZW4iLCJ0eEhhc2giLCJjYXRjaCIsImVycm9yIiwiTGlxdWlkaXR5UGFnZSIsInNldENvdW50Iiwic2V0Q291bnQxIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiZXhjaGFuZ2VSYXRlIiwiZGVmYXVsdENvaW5JbmRleCIsImdldENvaW5WYWx1ZSIsInNpemUiLCJjb2xvciIsInNoYXBlIiwidmFyaWFudCIsImhyZWYiLCJmdWxsV2lkdGgiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/liquidity.tsx\n"));

/***/ })

});