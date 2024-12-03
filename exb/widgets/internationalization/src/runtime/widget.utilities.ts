/**
 * Internationalization Utilities
 *
 * Internationalization utilities.
 */
// #region ========================= IMPORTS ===================================
// #region ---------------------- Jimu / React ---------------------------------
// #endregion ------------------- Jimu / React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import { type Props } from './widget.types';
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region =================== EXPORTED FUNCTIONS ==============================
/**
 * Checks if the map view is configured.
 *
 * @param props - The widget properties.
 * @returns A boolean indicating whether the map view is configured.
 */
export const isMapViewConfigured = (props: Props): boolean =>
  props.useMapWidgetIds?.length === 1;
// #endregion ================ EXPORTED FUNCTIONS ==============================
