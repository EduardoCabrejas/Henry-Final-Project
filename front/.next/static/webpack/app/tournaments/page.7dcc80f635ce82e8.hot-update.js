"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tournaments/page",{

/***/ "(app-pages-browser)/./src/utils/tournamentsData.ts":
/*!**************************************!*\
  !*** ./src/utils/tournamentsData.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryIcons: function() { return /* binding */ categoryIcons; },\n/* harmony export */   gameIcons: function() { return /* binding */ gameIcons; },\n/* harmony export */   games: function() { return /* binding */ games; },\n/* harmony export */   name: function() { return /* binding */ name; },\n/* harmony export */   navigationIcons: function() { return /* binding */ navigationIcons; }\n/* harmony export */ });\n/* harmony import */ var _app_assets_images_banners_csgo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/assets/images/banners/csgo.jpg */ \"(app-pages-browser)/./src/app/assets/images/banners/csgo.jpg\");\n/* harmony import */ var _app_assets_images_banners_fortnite_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/assets/images/banners/fortnite.jpg */ \"(app-pages-browser)/./src/app/assets/images/banners/fortnite.jpg\");\n/* harmony import */ var _app_assets_images_banners_lol_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/assets/images/banners/lol.png */ \"(app-pages-browser)/./src/app/assets/images/banners/lol.png\");\n/* harmony import */ var _app_assets_images_icons_previous_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/assets/images/icons/previous.png */ \"(app-pages-browser)/./src/app/assets/images/icons/previous.png\");\n/* harmony import */ var _app_assets_images_icons_next_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/assets/images/icons/next.png */ \"(app-pages-browser)/./src/app/assets/images/icons/next.png\");\n/* harmony import */ var _app_assets_images_icons_cs_A_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/assets/images/icons/cs-A.png */ \"(app-pages-browser)/./src/app/assets/images/icons/cs-A.png\");\n/* harmony import */ var _app_assets_images_icons_fortnite_A_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/assets/images/icons/fortnite-A.png */ \"(app-pages-browser)/./src/app/assets/images/icons/fortnite-A.png\");\n/* harmony import */ var _app_assets_images_icons_lol_A_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/assets/images/icons/lol-A.png */ \"(app-pages-browser)/./src/app/assets/images/icons/lol-A.png\");\n/* harmony import */ var _app_assets_images_icons_medal_bronze_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/assets/images/icons/medal-bronze.png */ \"(app-pages-browser)/./src/app/assets/images/icons/medal-bronze.png\");\n/* harmony import */ var _app_assets_images_icons_medal_silver_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/assets/images/icons/medal-silver.png */ \"(app-pages-browser)/./src/app/assets/images/icons/medal-silver.png\");\n/* harmony import */ var _app_assets_images_icons_medal_gold_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/assets/images/icons/medal-gold.png */ \"(app-pages-browser)/./src/app/assets/images/icons/medal-gold.png\");\n/* harmony import */ var _app_assets_images_icons_premium_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/assets/images/icons/premium.png */ \"(app-pages-browser)/./src/app/assets/images/icons/premium.png\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst gameIcons = {\n    \"a2b3c4d5-6e7f-8g9h-0i1j-2k3l4m5n6o7p\": _app_assets_images_icons_cs_A_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    \"b3c4d5e6-7f8g-9h0i-1j2k-3l4m5n6o7p8q\": _app_assets_images_icons_cs_A_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    \"c4d5e6f7-8g9h-0i1j-2k3l-4m5n6o7p8q9r\": _app_assets_images_icons_cs_A_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    \"d5e6f7g8-9h0i-1j2k-3l4m-5n6o7p8q9r0s\": _app_assets_images_icons_fortnite_A_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    \"e6f7g8h9-0i1j-2k3l-4m5n-6o7p8q9r0s1t\": _app_assets_images_icons_fortnite_A_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    \"f7g8h9i0-1j2k-3l4m-5n6o-7p8q9r0s1t2u\": _app_assets_images_icons_fortnite_A_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    \"d1f5d4e7-9b64-4d39-aebd-f76980d72f3e\": _app_assets_images_icons_lol_A_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    \"g8h9i0j1-2k3l-4m5n-6o7p-8q9r0s1t2u3v\": _app_assets_images_icons_lol_A_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    \"h9i0j1k2-3l4m-5n6o-7p8q-9r0s1t2u3v4w\": _app_assets_images_icons_lol_A_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n};\nconst games = {\n    \"a2b3c4d5-6e7f-8g9h-0i1j-2k3l4m5n6o7p\": _app_assets_images_banners_csgo_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    \"b3c4d5e6-7f8g-9h0i-1j2k-3l4m5n6o7p8q\": _app_assets_images_banners_csgo_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    \"c4d5e6f7-8g9h-0i1j-2k3l-4m5n6o7p8q9r\": _app_assets_images_banners_csgo_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    \"d5e6f7g8-9h0i-1j2k-3l4m-5n6o7p8q9r0s\": _app_assets_images_banners_fortnite_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    \"e6f7g8h9-0i1j-2k3l-4m5n-6o7p8q9r0s1t\": _app_assets_images_banners_fortnite_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    \"f7g8h9i0-1j2k-3l4m-5n6o-7p8q9r0s1t2u\": _app_assets_images_banners_fortnite_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    \"d1f5d4e7-9b64-4d39-aebd-f76980d72f3e\": _app_assets_images_banners_lol_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    \"g8h9i0j1-2k3l-4m5n-6o7p-8q9r0s1t2u3v\": _app_assets_images_banners_lol_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    \"h9i0j1k2-3l4m-5n6o-7p8q-9r0s1t2u3v4w\": _app_assets_images_banners_lol_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\nconst name = {\n    \"a2b3c4d5-6e7f-8g9h-0i1j-2k3l4m5n6o7p\": \"Counter Strike\",\n    \"b3c4d5e6-7f8g-9h0i-1j2k-3l4m5n6o7p8q\": \"Counter Strike\",\n    \"c4d5e6f7-8g9h-0i1j-2k3l-4m5n6o7p8q9r\": \"Counter Strike\",\n    \"d5e6f7g8-9h0i-1j2k-3l4m-5n6o7p8q9r0s\": \"Fortnite\",\n    \"e6f7g8h9-0i1j-2k3l-4m5n-6o7p8q9r0s1t\": \"Fortnite\",\n    \"f7g8h9i0-1j2k-3l4m-5n6o-7p8q9r0s1t2u\": \"Fortnite\",\n    \"d1f5d4e7-9b64-4d39-aebd-f76980d72f3e\": \"League of Legends\",\n    \"g8h9i0j1-2k3l-4m5n-6o7p-8q9r0s1t2u3v\": \"League of Legends\",\n    \"h9i0j1k2-3l4m-5n6o-7p8q-9r0s1t2u3v4w\": \"League of Legends\"\n};\nconst categoryIcons = {\n    \"CATEGORY1\": _app_assets_images_icons_medal_bronze_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    \"CATEGORY2\": _app_assets_images_icons_medal_silver_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    \"CATEGORY3\": _app_assets_images_icons_medal_gold_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n};\nconst navigationIcons = {\n    previous: _app_assets_images_icons_previous_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    next: _app_assets_images_icons_next_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    vip: _app_assets_images_icons_premium_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy90b3VybmFtZW50c0RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDUTtBQUNWO0FBQ1E7QUFDUjtBQUNFO0FBQ007QUFDSjtBQUNNO0FBQ0E7QUFDSjtBQUNKO0FBS2xELE1BQU1ZLFlBQTRDO0lBQ3JELHdDQUF3Q1AseUVBQU1BO0lBQzlDLHdDQUF3Q0EseUVBQU1BO0lBQzlDLHdDQUF3Q0EseUVBQU1BO0lBQzlDLHdDQUF3Q0MsK0VBQU1BO0lBQzlDLHdDQUF3Q0EsK0VBQU1BO0lBQzlDLHdDQUF3Q0EsK0VBQU1BO0lBQzlDLHdDQUF3Q0MsMEVBQU9BO0lBQy9DLHdDQUF3Q0EsMEVBQU9BO0lBQy9DLHdDQUF3Q0EsMEVBQU9BO0FBQ25ELEVBQUU7QUFFSyxNQUFNTSxRQUF3QztJQUNqRCx3Q0FBd0NiLDJFQUFJQTtJQUM1Qyx3Q0FBd0NBLDJFQUFJQTtJQUM1Qyx3Q0FBd0NBLDJFQUFJQTtJQUM1Qyx3Q0FBd0NDLCtFQUFRQTtJQUNoRCx3Q0FBd0NBLCtFQUFRQTtJQUNoRCx3Q0FBd0NBLCtFQUFRQTtJQUNoRCx3Q0FBd0NDLDBFQUFHQTtJQUMzQyx3Q0FBd0NBLDBFQUFHQTtJQUMzQyx3Q0FBd0NBLDBFQUFHQTtBQUMvQyxFQUFFO0FBRUssTUFBTVksT0FBa0M7SUFDM0Msd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7QUFDNUMsRUFBRTtBQUVLLE1BQU1DLGdCQUFnRDtJQUN6RCxhQUFhUCxpRkFBTUE7SUFDbkIsYUFBYUMsaUZBQU1BO0lBQ25CLGFBQWFDLGdGQUFJQTtBQUNyQixFQUFFO0FBRUssTUFBTU0sa0JBQWtCO0lBQzNCYixRQUFRQSwrRUFBQUE7SUFDUkMsSUFBSUEsMkVBQUFBO0lBQ0pPLEdBQUdBLCtFQUFBQTtBQUNQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3RvdXJuYW1lbnRzRGF0YS50cz85OGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc2dvIGZyb20gXCIuLi9hcHAvYXNzZXRzL2ltYWdlcy9iYW5uZXJzL2NzZ28uanBnXCI7XHJcbmltcG9ydCBmb3J0bml0ZSBmcm9tIFwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvYmFubmVycy9mb3J0bml0ZS5qcGdcIjtcclxuaW1wb3J0IGxvbCBmcm9tIFwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvYmFubmVycy9sb2wucG5nXCI7XHJcbmltcG9ydCBwcmV2aW91cyBmcm9tIFwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcHJldmlvdXMucG5nXCI7XHJcbmltcG9ydCBuZXh0IGZyb20gXCIuLi9hcHAvYXNzZXRzL2ltYWdlcy9pY29ucy9uZXh0LnBuZ1wiO1xyXG5pbXBvcnQgY3NJY29uIGZyb20gXCIuLi9hcHAvYXNzZXRzL2ltYWdlcy9pY29ucy9jcy1BLnBuZ1wiO1xyXG5pbXBvcnQgZnRJY29uIGZyb20gXCIuLi9hcHAvYXNzZXRzL2ltYWdlcy9pY29ucy9mb3J0bml0ZS1BLnBuZ1wiO1xyXG5pbXBvcnQgbG9sSWNvbiBmcm9tIFwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbG9sLUEucG5nXCI7XHJcbmltcG9ydCBicm9uemUgZnJvbSBcIi4uL2FwcC9hc3NldHMvaW1hZ2VzL2ljb25zL21lZGFsLWJyb256ZS5wbmdcIjtcclxuaW1wb3J0IHNpbHZlciBmcm9tIFwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVkYWwtc2lsdmVyLnBuZ1wiO1xyXG5pbXBvcnQgZ29sZCBmcm9tIFwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVkYWwtZ29sZC5wbmdcIjtcclxuaW1wb3J0IHZpcCBmcm9tIFwiLi4vYXBwL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcHJlbWl1bS5wbmdcIjtcclxuaW1wb3J0IHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbnR5cGUgSW1hZ2VTb3VyY2UgPSBTdGF0aWNJbWFnZURhdGEgfCBzdHJpbmc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZUljb25zOiB7IFtrZXk6IHN0cmluZ106IEltYWdlU291cmNlIH0gPSB7XHJcbiAgICBcImEyYjNjNGQ1LTZlN2YtOGc5aC0waTFqLTJrM2w0bTVuNm83cFwiOiBjc0ljb24sXHJcbiAgICBcImIzYzRkNWU2LTdmOGctOWgwaS0xajJrLTNsNG01bjZvN3A4cVwiOiBjc0ljb24sXHJcbiAgICBcImM0ZDVlNmY3LThnOWgtMGkxai0yazNsLTRtNW42bzdwOHE5clwiOiBjc0ljb24sXHJcbiAgICBcImQ1ZTZmN2c4LTloMGktMWoyay0zbDRtLTVuNm83cDhxOXIwc1wiOiBmdEljb24sXHJcbiAgICBcImU2ZjdnOGg5LTBpMWotMmszbC00bTVuLTZvN3A4cTlyMHMxdFwiOiBmdEljb24sXHJcbiAgICBcImY3ZzhoOWkwLTFqMmstM2w0bS01bjZvLTdwOHE5cjBzMXQydVwiOiBmdEljb24sXHJcbiAgICBcImQxZjVkNGU3LTliNjQtNGQzOS1hZWJkLWY3Njk4MGQ3MmYzZVwiOiBsb2xJY29uLFxyXG4gICAgXCJnOGg5aTBqMS0yazNsLTRtNW4tNm83cC04cTlyMHMxdDJ1M3ZcIjogbG9sSWNvbixcclxuICAgIFwiaDlpMGoxazItM2w0bS01bjZvLTdwOHEtOXIwczF0MnUzdjR3XCI6IGxvbEljb24sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZXM6IHsgW2tleTogc3RyaW5nXTogSW1hZ2VTb3VyY2UgfSA9IHtcclxuICAgIFwiYTJiM2M0ZDUtNmU3Zi04ZzloLTBpMWotMmszbDRtNW42bzdwXCI6IGNzZ28sXHJcbiAgICBcImIzYzRkNWU2LTdmOGctOWgwaS0xajJrLTNsNG01bjZvN3A4cVwiOiBjc2dvLFxyXG4gICAgXCJjNGQ1ZTZmNy04ZzloLTBpMWotMmszbC00bTVuNm83cDhxOXJcIjogY3NnbyxcclxuICAgIFwiZDVlNmY3ZzgtOWgwaS0xajJrLTNsNG0tNW42bzdwOHE5cjBzXCI6IGZvcnRuaXRlLFxyXG4gICAgXCJlNmY3ZzhoOS0waTFqLTJrM2wtNG01bi02bzdwOHE5cjBzMXRcIjogZm9ydG5pdGUsXHJcbiAgICBcImY3ZzhoOWkwLTFqMmstM2w0bS01bjZvLTdwOHE5cjBzMXQydVwiOiBmb3J0bml0ZSxcclxuICAgIFwiZDFmNWQ0ZTctOWI2NC00ZDM5LWFlYmQtZjc2OTgwZDcyZjNlXCI6IGxvbCxcclxuICAgIFwiZzhoOWkwajEtMmszbC00bTVuLTZvN3AtOHE5cjBzMXQydTN2XCI6IGxvbCxcclxuICAgIFwiaDlpMGoxazItM2w0bS01bjZvLTdwOHEtOXIwczF0MnUzdjR3XCI6IGxvbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYW1lOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gICAgXCJhMmIzYzRkNS02ZTdmLThnOWgtMGkxai0yazNsNG01bjZvN3BcIjogXCJDb3VudGVyIFN0cmlrZVwiLFxyXG4gICAgXCJiM2M0ZDVlNi03ZjhnLTloMGktMWoyay0zbDRtNW42bzdwOHFcIjogXCJDb3VudGVyIFN0cmlrZVwiLFxyXG4gICAgXCJjNGQ1ZTZmNy04ZzloLTBpMWotMmszbC00bTVuNm83cDhxOXJcIjogXCJDb3VudGVyIFN0cmlrZVwiLFxyXG4gICAgXCJkNWU2ZjdnOC05aDBpLTFqMmstM2w0bS01bjZvN3A4cTlyMHNcIjogXCJGb3J0bml0ZVwiLFxyXG4gICAgXCJlNmY3ZzhoOS0waTFqLTJrM2wtNG01bi02bzdwOHE5cjBzMXRcIjogXCJGb3J0bml0ZVwiLFxyXG4gICAgXCJmN2c4aDlpMC0xajJrLTNsNG0tNW42by03cDhxOXIwczF0MnVcIjogXCJGb3J0bml0ZVwiLFxyXG4gICAgXCJkMWY1ZDRlNy05YjY0LTRkMzktYWViZC1mNzY5ODBkNzJmM2VcIjogXCJMZWFndWUgb2YgTGVnZW5kc1wiLFxyXG4gICAgXCJnOGg5aTBqMS0yazNsLTRtNW4tNm83cC04cTlyMHMxdDJ1M3ZcIjogXCJMZWFndWUgb2YgTGVnZW5kc1wiLFxyXG4gICAgXCJoOWkwajFrMi0zbDRtLTVuNm8tN3A4cS05cjBzMXQydTN2NHdcIjogXCJMZWFndWUgb2YgTGVnZW5kc1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5SWNvbnM6IHsgW2tleTogc3RyaW5nXTogSW1hZ2VTb3VyY2UgfSA9IHtcclxuICAgIFwiQ0FURUdPUlkxXCI6IGJyb256ZSxcclxuICAgIFwiQ0FURUdPUlkyXCI6IHNpbHZlcixcclxuICAgIFwiQ0FURUdPUlkzXCI6IGdvbGQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbkljb25zID0ge1xyXG4gICAgcHJldmlvdXMsXHJcbiAgICBuZXh0LFxyXG4gICAgdmlwLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiY3NnbyIsImZvcnRuaXRlIiwibG9sIiwicHJldmlvdXMiLCJuZXh0IiwiY3NJY29uIiwiZnRJY29uIiwibG9sSWNvbiIsImJyb256ZSIsInNpbHZlciIsImdvbGQiLCJ2aXAiLCJnYW1lSWNvbnMiLCJnYW1lcyIsIm5hbWUiLCJjYXRlZ29yeUljb25zIiwibmF2aWdhdGlvbkljb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/tournamentsData.ts\n"));

/***/ })

});