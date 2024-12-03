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

/***/ "./your-extensions/widgets/sdk/src/setting/translations/default.ts":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/sdk/src/setting/translations/default.ts ***!
  \*************************************************************************/
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
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/sdk/src/setting/setting.tsx ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/sdk/src/setting/translations/default.ts");
/**
 * SDK Settings
 *
 * SDK settings implementation.
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
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget-setting widget-setting-SDK" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZGsvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLG9CQUFvQixFQUFFLHFCQUFxQjtJQUMzQyxzQkFBc0IsRUFBRSxxREFBcUQ7Q0FDOUUsRUFBQzs7Ozs7Ozs7Ozs7O0FDSEY7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQ7Ozs7R0FJRztBQUNILGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFDZjtBQUNqQztBQVNhO0FBQzdDLGdGQUFnRjtBQUVoRixnRkFBZ0Y7QUFDaEYsZ0ZBQWdGO0FBRWhGLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFFaEYsZ0ZBQWdGO0FBQzNCO0FBRXJELGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFFaEYsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUVoRixnRkFBZ0Y7QUFDaEYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtJQUNoQyw4RUFBOEU7SUFDOUUsOEVBQThFOztJQUU5RSw4RUFBOEU7SUFDOUUsOEVBQThFO0lBRTlFLDhFQUE4RTtJQUM5RSw4RUFBOEU7SUFFOUUsOEVBQThFO0lBQzlFLDhFQUE4RTtJQUU5RSw4RUFBOEU7SUFDOUUsOEVBQThFO0lBRTlFLDhFQUE4RTtJQUM5RTs7O09BR0c7SUFDSCxNQUFNLGVBQWUsR0FBRyxDQUFDLFFBQWdDLEVBQVEsRUFBRTtRQUNqRSxLQUFLLENBQUMsZUFBZSxpQ0FBTSxRQUFRLEtBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUcsQ0FBQztJQUN2RCxDQUFDLENBQUM7SUFDRiw4RUFBOEU7SUFFOUUsOEVBQThFO0lBQzlFOzs7T0FHRztJQUNILE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxjQUErQixFQUFFLEVBQUU7UUFDN0QsZUFBZSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUM7SUFFRjs7O09BR0c7SUFDSCxNQUFNLG1CQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBUSxFQUFFO1FBQzlELGVBQWUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0lBQ0YsOEVBQThFO0lBRTlFLDhFQUE4RTtJQUM5RSxPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLHdDQUF3QztRQUNyRCwyREFBQywrRUFBYyxJQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDOUIsRUFBRSxFQUFFLHNCQUFzQjtnQkFDMUIsY0FBYyxFQUFFLDZEQUFlLENBQUMsb0JBQW9CO2FBQ3JELENBQUM7WUFFRiwyREFBQywyRUFBVTtnQkFDVCwyREFBQyxrRkFBaUIsSUFDaEIsUUFBUSxFQUFFLG1CQUFtQixFQUM3QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsR0FDdEMsQ0FDUztZQUNaLENBQUMsWUFBSyxDQUFDLGVBQWUsMENBQUUsTUFBTSxLQUFJLENBQ2pDLDJEQUFDLDJFQUFVO2dCQUNULDJEQUFDLDBDQUFLLElBQ0osUUFBUSxFQUFFLENBQUMsRUFDWCxJQUFJLEVBQUUsSUFBSSxFQUNWLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzt3QkFDN0IsRUFBRSxFQUFFLHdCQUF3Qjt3QkFDNUIsY0FBYyxFQUFFLDZEQUFlLENBQUMsc0JBQXNCO3FCQUN2RCxDQUFDLEVBQ0YsSUFBSSxFQUFFLFNBQVMsR0FDZixDQUNTLENBQ2QsQ0FDYyxDQUNiLENBQ1AsQ0FBQztJQUNGLDhFQUE4RTtBQUNoRixDQUFDLENBQUM7QUFDRixpRUFBZSxRQUFRLEVBQUM7QUFDeEIsZ0ZBQWdGO0FBRXhFLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Nkay9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3Nkay9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHNlbGVjdE1hcFdpZGdldExhYmVsOiAnU2VsZWN0IGEgTWFwIHdpZGdldCcsXG4gIHNlbGVjdE1hcFdpZGdldFdhcm5pbmc6ICdBIE1hcCB3aWRnZXQgbXVzdCBiZSBzZWxlY3RlZCB0byBlbmFibGUgdGhlIHdpZGdldC4nLFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKlxuICogU0RLIFNldHRpbmdzXG4gKlxuICogU0RLIHNldHRpbmdzIGltcGxlbWVudGF0aW9uLlxuICovXG4vLyAjcmVnaW9uID09PT09PT09PT09PT09PT09PT09PT09PT0gSU1QT1JUUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEppbXUgLyBSZWFjdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCB7IEltbXV0YWJsZSwgUmVhY3QsIHR5cGUgVXNlRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ2ppbXUtdWknO1xuaW1wb3J0IHtcbiAgQWxsRGF0YVNvdXJjZVR5cGVzLFxuICBEYXRhU291cmNlU2VsZWN0b3IsXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InO1xuaW1wb3J0IHtcbiAgTWFwV2lkZ2V0U2VsZWN0b3IsXG4gIFNldHRpbmdTZWN0aW9uLFxuICBTZXR0aW5nUm93LFxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cyc7XG4vLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0gSmltdSAvIFJlYWN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAjcmVnaW9uIC0tLS0tLS0tLS0tLSAzcmQtUGFydHkgQ29tcG9uZW50cyAvIExpYnJhcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0gM3JkLVBhcnR5IENvbXBvbmVudHMgLyBMaWJyYXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLSBDdXN0b20gQ29tcG9uZW50cyAvIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0gQ3VzdG9tIENvbXBvbmVudHMgLyBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJlc291cmNlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnO1xuaW1wb3J0IHsgdHlwZSBQcm9wcyB9IGZyb20gJy4vc2V0dGluZy50eXBlcyc7XG4vLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSZXNvdXJjZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PT09PT09PT09PT09IElNUE9SVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gI3JlZ2lvbiA9PT09PT09PT09PT09PT09PT09PSBTVFlMRUQgQ09NUE9ORU5UUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICNlbmRyZWdpb24gPT09PT09PT09PT09PT09PT0gU1RZTEVEIENPTVBPTkVOVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICNyZWdpb24gPT09PT09PT09PT09PT09PT09PT0gRVhQT1JURUQgU0VUVElOR1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBTZXR0aW5ncyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENvbnN0YW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLSBDb25zdGFudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0gSG9va3MgKFN0YXRlKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tIEhvb2tzIChTdGF0ZSkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tIEhvb2tzIChNZW1vaXphdGlvbikgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLS0tLSBIb29rcyAoTWVtb2l6YXRpb24pIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLSBIb29rcyAoT3RoZXIpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0gSG9va3MgKE90aGVyKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vICNyZWdpb24gLS0tLS0tLS0tLSBTaG9ydC1DaXJjdWl0IChJbnZhbGlkIFNldHRpbmdzKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAjZW5kcmVnaW9uIC0tLS0tLS0gU2hvcnQtQ2lyY3VpdCAoSW52YWxpZCBTZXR0aW5ncykgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0gU3VwcG9ydGluZyBGdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB3aWRnZXQgc2V0dGluZ3MuXG4gICAqIEBwYXJhbSBzZXR0aW5ncyBTZXR0aW5ncyB0byB1cGRhdGVcbiAgICovXG4gIGNvbnN0IG9uU2V0dGluZ0NoYW5nZSA9IChzZXR0aW5nczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHZvaWQgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IC4uLnNldHRpbmdzLCBpZDogcHJvcHMuaWQgfSk7XG4gIH07XG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLSBTdXBwb3J0aW5nIEZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLSBFdmVudCBIYW5kbGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgZGF0YSBzb3VyY2VzIGFyZSB1cGRhdGVkLlxuICAgKiBAcGFyYW0gdXNlRGF0YVNvdXJjZXMgVXBkYXRlZCBkYXRhIHNvdXJjZXMgYXJyYXlcbiAgICovXG4gIGNvbnN0IG9uRGF0YVNvdXJjZUNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XG4gICAgb25TZXR0aW5nQ2hhbmdlKHsgdXNlRGF0YVNvdXJjZXMgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdGhlIG1hcCB3aWRnZXQgaXMgc2VsZWN0ZWQuXG4gICAqIEBwYXJhbSB1c2VNYXBXaWRnZXRJZHMgU2VsZWN0IG1hcCB3aWRnZXQgaWRzXG4gICAqL1xuICBjb25zdCBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pOiB2b2lkID0+IHtcbiAgICBvblNldHRpbmdDaGFuZ2UoeyB1c2VNYXBXaWRnZXRJZHMgfSk7XG4gIH07XG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLSBFdmVudCBIYW5kbGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXQtc2V0dGluZyB3aWRnZXQtc2V0dGluZy1TREtcIj5cbiAgICAgIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICB0aXRsZT17cHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICBpZDogJ3NlbGVjdE1hcFdpZGdldExhYmVsJyxcbiAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldExhYmVsLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgeyFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgIG9wZW49e3RydWV9XG4gICAgICAgICAgICAgIHRleHQ9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgaWQ6ICdzZWxlY3RNYXBXaWRnZXRXYXJuaW5nJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldFdhcm5pbmcsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0eXBlPXsnd2FybmluZyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufTtcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PT09PT09PSBFWFBPUlRFRCBTRVRUSU5HUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=