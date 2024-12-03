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

/***/ "./your-extensions/widgets/map-components/src/setting/translations/default.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/map-components/src/setting/translations/default.ts ***!
  \************************************************************************************/
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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/map-components/src/setting/setting.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/map-components/src/setting/translations/default.ts");
/**
 * Map Components Settings
 *
 * Map Components settings implementation.
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
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget-setting widget-setting-Map Components" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtY29tcG9uZW50cy9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2Isb0JBQW9CLEVBQUUscUJBQXFCO0lBQzNDLHNCQUFzQixFQUFFLHFEQUFxRDtDQUM5RSxFQUFDOzs7Ozs7Ozs7Ozs7QUNIRjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRDs7OztHQUlHO0FBQ0gsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUNmO0FBQ2pDO0FBU2E7QUFDN0MsZ0ZBQWdGO0FBRWhGLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFFaEYsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUVoRixnRkFBZ0Y7QUFDM0I7QUFFckQsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUVoRixnRkFBZ0Y7QUFDaEYsZ0ZBQWdGO0FBRWhGLGdGQUFnRjtBQUNoRixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO0lBQ2hDLDhFQUE4RTtJQUM5RSw4RUFBOEU7O0lBRTlFLDhFQUE4RTtJQUM5RSw4RUFBOEU7SUFFOUUsOEVBQThFO0lBQzlFLDhFQUE4RTtJQUU5RSw4RUFBOEU7SUFDOUUsOEVBQThFO0lBRTlFLDhFQUE4RTtJQUM5RSw4RUFBOEU7SUFFOUUsOEVBQThFO0lBQzlFOzs7T0FHRztJQUNILE1BQU0sZUFBZSxHQUFHLENBQUMsUUFBZ0MsRUFBUSxFQUFFO1FBQ2pFLEtBQUssQ0FBQyxlQUFlLGlDQUFNLFFBQVEsS0FBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBRyxDQUFDO0lBQ3ZELENBQUMsQ0FBQztJQUNGLDhFQUE4RTtJQUU5RSw4RUFBOEU7SUFDOUU7OztPQUdHO0lBQ0gsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLGNBQStCLEVBQUUsRUFBRTtRQUM3RCxlQUFlLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztJQUVGOzs7T0FHRztJQUNILE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxlQUF5QixFQUFRLEVBQUU7UUFDOUQsZUFBZSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUM7SUFDRiw4RUFBOEU7SUFFOUUsOEVBQThFO0lBQzlFLE9BQU8sQ0FDTCxvRUFBSyxTQUFTLEVBQUMsbURBQW1EO1FBQ2hFLDJEQUFDLCtFQUFjLElBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM5QixFQUFFLEVBQUUsc0JBQXNCO2dCQUMxQixjQUFjLEVBQUUsNkRBQWUsQ0FBQyxvQkFBb0I7YUFDckQsQ0FBQztZQUVGLDJEQUFDLDJFQUFVO2dCQUNULDJEQUFDLGtGQUFpQixJQUNoQixRQUFRLEVBQUUsbUJBQW1CLEVBQzdCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxHQUN0QyxDQUNTO1lBQ1osQ0FBQyxZQUFLLENBQUMsZUFBZSwwQ0FBRSxNQUFNLEtBQUksQ0FDakMsMkRBQUMsMkVBQVU7Z0JBQ1QsMkRBQUMsMENBQUssSUFDSixRQUFRLEVBQUUsQ0FBQyxFQUNYLElBQUksRUFBRSxJQUFJLEVBQ1YsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUM3QixFQUFFLEVBQUUsd0JBQXdCO3dCQUM1QixjQUFjLEVBQUUsNkRBQWUsQ0FBQyxzQkFBc0I7cUJBQ3ZELENBQUMsRUFDRixJQUFJLEVBQUUsU0FBUyxHQUNmLENBQ1MsQ0FDZCxDQUNjLENBQ2IsQ0FDUCxDQUFDO0lBQ0YsOEVBQThFO0FBQ2hGLENBQUMsQ0FBQztBQUNGLGlFQUFlLFFBQVEsRUFBQztBQUN4QixnRkFBZ0Y7QUFFeEUsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwLWNvbXBvbmVudHMvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtY29tcG9uZW50cy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHNlbGVjdE1hcFdpZGdldExhYmVsOiAnU2VsZWN0IGEgTWFwIHdpZGdldCcsXG4gIHNlbGVjdE1hcFdpZGdldFdhcm5pbmc6ICdBIE1hcCB3aWRnZXQgbXVzdCBiZSBzZWxlY3RlZCB0byBlbmFibGUgdGhlIHdpZGdldC4nLFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKlxuICogTWFwIENvbXBvbmVudHMgU2V0dGluZ3NcbiAqXG4gKiBNYXAgQ29tcG9uZW50cyBzZXR0aW5ncyBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuLy8gI3JlZ2lvbiA9PT09PT09PT09PT09PT09PT09PT09PT09IElNUE9SVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBKaW11IC8gUmVhY3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgeyBJbW11dGFibGUsIFJlYWN0LCB0eXBlIFVzZURhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdqaW11LXVpJztcbmltcG9ydCB7XG4gIEFsbERhdGFTb3VyY2VUeXBlcyxcbiAgRGF0YVNvdXJjZVNlbGVjdG9yLFxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJztcbmltcG9ydCB7XG4gIE1hcFdpZGdldFNlbGVjdG9yLFxuICBTZXR0aW5nU2VjdGlvbixcbiAgU2V0dGluZ1Jvdyxcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnO1xuLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tIEppbXUgLyBSZWFjdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0gM3JkLVBhcnR5IENvbXBvbmVudHMgLyBMaWJyYXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICNlbmRyZWdpb24gLS0tLS0tLS0tIDNyZC1QYXJ0eSBDb21wb25lbnRzIC8gTGlicmFyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0gQ3VzdG9tIENvbXBvbmVudHMgLyBVdGlsaXRpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tIEN1c3RvbSBDb21wb25lbnRzIC8gVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSZXNvdXJjZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0JztcbmltcG9ydCB7IHR5cGUgUHJvcHMgfSBmcm9tICcuL3NldHRpbmcudHlwZXMnO1xuLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVzb3VyY2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICNlbmRyZWdpb24gPT09PT09PT09PT09PT09PT09PT09PSBJTVBPUlRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICNyZWdpb24gPT09PT09PT09PT09PT09PT09PT0gU1RZTEVEIENPTVBPTkVOVFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAjZW5kcmVnaW9uID09PT09PT09PT09PT09PT09IFNUWUxFRCBDT01QT05FTlRTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAjcmVnaW9uID09PT09PT09PT09PT09PT09PT09IEVYUE9SVEVEIFNFVFRJTkdTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgU2V0dGluZ3MgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIC8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDb25zdGFudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0gQ29uc3RhbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tIEhvb2tzIChTdGF0ZSkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gI2VuZHJlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLSBIb29rcyAoU3RhdGUpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tLSBIb29rcyAoTWVtb2l6YXRpb24pIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0gSG9va3MgKE1lbW9pemF0aW9uKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vICNyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0gSG9va3MgKE90aGVyKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tIEhvb2tzIChPdGhlcikgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAjcmVnaW9uIC0tLS0tLS0tLS0gU2hvcnQtQ2lyY3VpdCAoSW52YWxpZCBTZXR0aW5ncykgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gI2VuZHJlZ2lvbiAtLS0tLS0tIFNob3J0LUNpcmN1aXQgKEludmFsaWQgU2V0dGluZ3MpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gI3JlZ2lvbiAtLS0tLS0tLS0tLS0tLS0tIFN1cHBvcnRpbmcgRnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgd2lkZ2V0IHNldHRpbmdzLlxuICAgKiBAcGFyYW0gc2V0dGluZ3MgU2V0dGluZ3MgdG8gdXBkYXRlXG4gICAqL1xuICBjb25zdCBvblNldHRpbmdDaGFuZ2UgPSAoc2V0dGluZ3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiB2b2lkID0+IHtcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2UoeyAuLi5zZXR0aW5ncywgaWQ6IHByb3BzLmlkIH0pO1xuICB9O1xuICAvLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tLS0gU3VwcG9ydGluZyBGdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0gRXZlbnQgSGFuZGxlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdGhlIGRhdGEgc291cmNlcyBhcmUgdXBkYXRlZC5cbiAgICogQHBhcmFtIHVzZURhdGFTb3VyY2VzIFVwZGF0ZWQgZGF0YSBzb3VyY2VzIGFycmF5XG4gICAqL1xuICBjb25zdCBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgIG9uU2V0dGluZ0NoYW5nZSh7IHVzZURhdGFTb3VyY2VzIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGZvciB3aGVuIHRoZSBtYXAgd2lkZ2V0IGlzIHNlbGVjdGVkLlxuICAgKiBAcGFyYW0gdXNlTWFwV2lkZ2V0SWRzIFNlbGVjdCBtYXAgd2lkZ2V0IGlkc1xuICAgKi9cbiAgY29uc3Qgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gICAgb25TZXR0aW5nQ2hhbmdlKHsgdXNlTWFwV2lkZ2V0SWRzIH0pO1xuICB9O1xuICAvLyAjZW5kcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0gRXZlbnQgSGFuZGxlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAjcmVnaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0LXNldHRpbmcgd2lkZ2V0LXNldHRpbmctTWFwIENvbXBvbmVudHNcIj5cbiAgICAgIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICB0aXRsZT17cHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICBpZDogJ3NlbGVjdE1hcFdpZGdldExhYmVsJyxcbiAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldExhYmVsLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgeyFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgIG9wZW49e3RydWV9XG4gICAgICAgICAgICAgIHRleHQ9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgaWQ6ICdzZWxlY3RNYXBXaWRnZXRXYXJuaW5nJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldFdhcm5pbmcsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0eXBlPXsnd2FybmluZyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG4gIC8vICNlbmRyZWdpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufTtcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuLy8gI2VuZHJlZ2lvbiA9PT09PT09PT09PT09PT09PSBFWFBPUlRFRCBTRVRUSU5HUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=