System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/calcite/src/setting/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/calcite/src/setting/translations/default.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    selectMapWidgetLabel: 'Select a Map widget',
    selectMapWidgetWarning: 'A Map widget must be selected to enable the widget.',
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/calcite/src/setting/setting.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/calcite/src/setting/translations/default.ts");
/**
 * Calcite Settings
 *
 * Calcite settings implementation.
 */
// #region ========================= IMPORTS ===================================
// #region ---------------------- Jimu / React ---------------------------------



// #endregion ------------------- Jimu / React ---------------------------------
// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------
// #region -------------- Custom Components / Utilities ------------------------
// #endregion ----------- Custom Components / Utilities ------------------------
// #region ------------------------ Resources ----------------------------------

// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================
// #region ==================== STYLED COMPONENTS ==============================
// #endregion ================= STYLED COMPONENTS ==============================
// #region ==================== EXPORTED SETTINGS ==============================
const Settings = (props) => {
    // #region ---------------------- Constants ----------------------------------
    // #endregion ------------------- Constants ----------------------------------
    var _a;
    // #region -------------------- Hooks (State) --------------------------------
    // #endregion ----------------- Hooks (State) --------------------------------
    // #region ----------------- Hooks (Memoization) -----------------------------
    // #endregion -------------- Hooks (Memoization) -----------------------------
    // #region -------------------- Hooks (Other) --------------------------------
    // #endregion ----------------- Hooks (Other) --------------------------------
    // #region ---------- Short-Circuit (Invalid Settings) -----------------------
    // #endregion ------- Short-Circuit (Invalid Settings) -----------------------
    // #region ---------------- Supporting Functions -----------------------------
    /**
     * Utility function to update the widget settings.
     * @param settings Settings to update
     */
    const onSettingChange = (settings) => {
        props.onSettingChange(Object.assign(Object.assign({}, settings), { id: props.id }));
    };
    // #endregion ------------- Supporting Functions -----------------------------
    // #region ------------------- Event Handlers --------------------------------
    /**
     * Event handler for when the data sources are updated.
     * @param useDataSources Updated data sources array
     */
    const onDataSourceChange = (useDataSources) => {
        onSettingChange({ useDataSources });
    };
    /**
     * Event handler for when the map widget is selected.
     * @param useMapWidgetIds Select map widget ids
     */
    const onMapWidgetSelected = (useMapWidgetIds) => {
        onSettingChange({ useMapWidgetIds });
    };
    // #endregion ---------------- Event Handlers --------------------------------
    // #region ----------------------- Render ------------------------------------
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget-setting widget-setting-Calcite" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: props.intl.formatMessage({
                id: 'selectMapWidgetLabel',
                defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].selectMapWidgetLabel,
            }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: props.useMapWidgetIds })),
            !((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length) && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { tabIndex: 0, open: true, text: props.intl.formatMessage({
                        id: 'selectMapWidgetWarning',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].selectMapWidgetWarning,
                    }), type: 'warning' }))))));
    // #endregion -------------------- Render ------------------------------------
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);
// #endregion ================= EXPORTED SETTINGS ==============================
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jYWxjaXRlL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixvQkFBb0IsRUFBRSxxQkFBcUI7SUFDM0Msc0JBQXNCLEVBQUUscURBQXFEO0NBQzlFLEVBQUM7Ozs7Ozs7Ozs7OztBQ0hGOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5EOzs7O0dBSUc7QUFDSCxnRkFBZ0Y7QUFDaEYsZ0ZBQWdGO0FBQ2Y7QUFDakM7QUFTYTtBQUM3QyxnRkFBZ0Y7QUFFaEYsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUVoRixnRkFBZ0Y7QUFDaEYsZ0ZBQWdGO0FBRWhGLGdGQUFnRjtBQUMzQjtBQUVyRCxnRkFBZ0Y7QUFDaEYsZ0ZBQWdGO0FBRWhGLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFFaEYsZ0ZBQWdGO0FBQ2hGLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDaEMsOEVBQThFO0lBQzlFLDhFQUE4RTs7SUFFOUUsOEVBQThFO0lBQzlFLDhFQUE4RTtJQUU5RSw4RUFBOEU7SUFDOUUsOEVBQThFO0lBRTlFLDhFQUE4RTtJQUM5RSw4RUFBOEU7SUFFOUUsOEVBQThFO0lBQzlFLDhFQUE4RTtJQUU5RSw4RUFBOEU7SUFDOUU7OztPQUdHO0lBQ0gsTUFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFnQyxFQUFRLEVBQUU7UUFDakUsS0FBSyxDQUFDLGVBQWUsaUNBQU0sUUFBUSxLQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFHLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBQ0YsOEVBQThFO0lBRTlFLDhFQUE4RTtJQUM5RTs7O09BR0c7SUFDSCxNQUFNLGtCQUFrQixHQUFHLENBQUMsY0FBK0IsRUFBRSxFQUFFO1FBQzdELGVBQWUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLGVBQXlCLEVBQVEsRUFBRTtRQUM5RCxlQUFlLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztJQUNGLDhFQUE4RTtJQUU5RSw4RUFBOEU7SUFDOUUsT0FBTyxDQUNMLG9FQUFLLFNBQVMsRUFBQyw0Q0FBNEM7UUFDekQsMkRBQUMsK0VBQWMsSUFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzlCLEVBQUUsRUFBRSxzQkFBc0I7Z0JBQzFCLGNBQWMsRUFBRSw2REFBZSxDQUFDLG9CQUFvQjthQUNyRCxDQUFDO1lBRUYsMkRBQUMsMkVBQVU7Z0JBQ1QsMkRBQUMsa0ZBQWlCLElBQ2hCLFFBQVEsRUFBRSxtQkFBbUIsRUFDN0IsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlLEdBQ3RDLENBQ1M7WUFDWixDQUFDLFlBQUssQ0FBQyxlQUFlLDBDQUFFLE1BQU0sS0FBSSxDQUNqQywyREFBQywyRUFBVTtnQkFDVCwyREFBQywwQ0FBSyxJQUNKLFFBQVEsRUFBRSxDQUFDLEVBQ1gsSUFBSSxFQUFFLElBQUksRUFDVixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQzdCLEVBQUUsRUFBRSx3QkFBd0I7d0JBQzVCLGNBQWMsRUFBRSw2REFBZSxDQUFDLHNCQUFzQjtxQkFDdkQsQ0FBQyxFQUNGLElBQUksRUFBRSxTQUFTLEdBQ2YsQ0FDUyxDQUNkLENBQ2MsQ0FDYixDQUNQLENBQUM7SUFDRiw4RUFBOEU7QUFDaEYsQ0FBQyxDQUFDO0FBQ0YsaUVBQWUsUUFBUSxFQUFDO0FBQ3hCLGdGQUFnRjtBQUV4RSxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jYWxjaXRlL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY2FsY2l0ZS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHNlbGVjdE1hcFdpZGdldExhYmVsOiAnU2VsZWN0IGEgTWFwIHdpZGdldCcsXG4gIHNlbGVjdE1hcFdpZGdldFdhcm5pbmc6ICdBIE1hcCB3aWRnZXQgbXVzdCBiZSBzZWxlY3RlZCB0byBlbmFibGUgdGhlIHdpZGdldC4nLFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKlxuICogQ2FsY2l0ZSBTZXR0aW5nc1xuICpcbiAqIENhbGNpdGUgc2V0dGluZ3MgaW1wbGVtZW50YXRpb24uXG4gKi9cbi8vICNyZWdpb24gPT09PT09PT09PT09PT09PT09PT09PT09PSBJTVBPUlRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSmltdSAvIFJlYWN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgSW1tdXRhYmxlLCBSZWFjdCwgdHlwZSBVc2VEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQge1xuICBBbGxEYXRhU291cmNlVHlwZXMsXG4gIERhdGFTb3VyY2VTZWxlY3Rvcixcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3Rvcic7XG5pbXBvcnQge1xuICBNYXBXaWRnZXRTZWxlY3RvcixcbiAgU2V0dGluZ1NlY3Rpb24sXG4gIFNldHRpbmdSb3csXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJztcbi8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLSBKaW11IC8gUmVhY3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vICNyZWdpb24gLS0tLS0tLS0tLS0tIDNyZC1QYXJ0eSBDb21wb25lbnRzIC8gTGlicmFyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAjZW5kcmVnaW9uIC0tLS0tLS0tLSAzcmQtUGFydHkgQ29tcG9uZW50cyAvIExpYnJhcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tIEN1c3RvbSBDb21wb25lbnRzIC8gVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLSBDdXN0b20gQ29tcG9uZW50cyAvIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVzb3VyY2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCc7XG5pbXBvcnQgeyB0eXBlIFByb3BzIH0gZnJvbSAnLi9zZXR0aW5nLnR5cGVzJztcbi8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJlc291cmNlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAjZW5kcmVnaW9uID09PT09PT09PT09PT09PT09PT09PT0gSU1QT1JUUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAjcmVnaW9uID09PT09PT09PT09PT09PT09PT09IFNUWUxFRCBDT01QT05FTlRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PT09PT09PSBTVFlMRUQgQ09NUE9ORU5UUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gI3JlZ2lvbiA9PT09PT09PT09PT09PT09PT09PSBFWFBPUlRFRCBTRVRUSU5HUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IFNldHRpbmdzID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAvLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ29uc3RhbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tIENvbnN0YW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLSBIb29rcyAoU3RhdGUpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0gSG9va3MgKFN0YXRlKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0gSG9va3MgKE1lbW9pemF0aW9uKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tLS0tIEhvb2tzIChNZW1vaXphdGlvbikgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tIEhvb2tzIChPdGhlcikgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLSBIb29rcyAoT3RoZXIpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gI3JlZ2lvbiAtLS0tLS0tLS0tIFNob3J0LUNpcmN1aXQgKEludmFsaWQgU2V0dGluZ3MpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLSBTaG9ydC1DaXJjdWl0IChJbnZhbGlkIFNldHRpbmdzKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLSBTdXBwb3J0aW5nIEZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHdpZGdldCBzZXR0aW5ncy5cbiAgICogQHBhcmFtIHNldHRpbmdzIFNldHRpbmdzIHRvIHVwZGF0ZVxuICAgKi9cbiAgY29uc3Qgb25TZXR0aW5nQ2hhbmdlID0gKHNldHRpbmdzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogdm9pZCA9PiB7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgLi4uc2V0dGluZ3MsIGlkOiBwcm9wcy5pZCB9KTtcbiAgfTtcbiAgLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLS0tIFN1cHBvcnRpbmcgRnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tIEV2ZW50IEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciB3aGVuIHRoZSBkYXRhIHNvdXJjZXMgYXJlIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB1c2VEYXRhU291cmNlcyBVcGRhdGVkIGRhdGEgc291cmNlcyBhcnJheVxuICAgKi9cbiAgY29uc3Qgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcbiAgICBvblNldHRpbmdDaGFuZ2UoeyB1c2VEYXRhU291cmNlcyB9KTtcbiAgfTtcblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgbWFwIHdpZGdldCBpcyBzZWxlY3RlZC5cbiAgICogQHBhcmFtIHVzZU1hcFdpZGdldElkcyBTZWxlY3QgbWFwIHdpZGdldCBpZHNcbiAgICovXG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuICAgIG9uU2V0dGluZ0NoYW5nZSh7IHVzZU1hcFdpZGdldElkcyB9KTtcbiAgfTtcbiAgLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tIEV2ZW50IEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldC1zZXR0aW5nIHdpZGdldC1zZXR0aW5nLUNhbGNpdGVcIj5cbiAgICAgIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICB0aXRsZT17cHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICBpZDogJ3NlbGVjdE1hcFdpZGdldExhYmVsJyxcbiAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldExhYmVsLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgeyFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgIG9wZW49e3RydWV9XG4gICAgICAgICAgICAgIHRleHQ9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgaWQ6ICdzZWxlY3RNYXBXaWRnZXRXYXJuaW5nJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldFdhcm5pbmcsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0eXBlPXsnd2FybmluZyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufTtcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PT09PT09PSBFWFBPUlRFRCBTRVRUSU5HUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=