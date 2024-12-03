/**
 * Basic Lit Component
 *
 * Basic Lit Component implementation.
 */
// #region ========================= IMPORTS ===================================
// #region ---------------------- Jimu / React ---------------------------------
import { React } from 'jimu-core';
import { WidgetPlaceholder } from 'jimu-ui';
// #endregion ------------------- Jimu / React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import { isMapViewConfigured } from './widget.utilities';
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import icon from '../../icon.svg';
import defaultMessages from './translations/default';
import { type Props } from './widget.types';
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ===================== EXPORTED WIDGET ===============================
const Widget = (props: Props) => {
  // #region ---------------------- Constants ----------------------------------
  // #endregion ------------------- Constants ----------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  // #endregion ----------------- Hooks (State) --------------------------------

  // #region ----------------- Hooks (Memoization) -----------------------------
  // #endregion -------------- Hooks (Memoization) -----------------------------

  // #region -------------------- Hooks (Other) --------------------------------
  // #endregion ----------------- Hooks (Other) --------------------------------

  // #region ---------- Short-Circuit (Invalid Settings) -----------------------
  if (!isMapViewConfigured(props)) {
    return (
      <WidgetPlaceholder
        icon={icon}
        message={props.intl.formatMessage({
          id: '_widgetLabel',
          defaultMessage: defaultMessages._widgetLabel,
        })}
        widgetId={props.id}
      />
    );
  }
  // #endregion ------- Short-Circuit (Invalid Settings) -----------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <div className="jimu-widget widget-basic-lit-component">
      Add a Lit Component Here!
    </div>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Widget;
// #endregion ================== EXPORTED WIDGET ===============================
