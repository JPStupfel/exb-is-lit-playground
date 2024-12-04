/**
 * Map Components
 *
 * Map Components implementation.
 */
// #region ========================= IMPORTS ===================================
// #region ---------------------- Jimu / React ---------------------------------
import { React } from 'jimu-core';
import { WidgetPlaceholder } from 'jimu-ui';
// #endregion ------------------- Jimu / React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
import 'lit-components/map-component';
import { MapComponent } from 'lit-components/map-component';
import { createComponent } from '@lit/react';

import { isMapViewConfigured } from './widget.utilities';
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import icon from '../../icon.svg';
import defaultMessages from './translations/default';
import { type Props } from './widget.types';
import { JimuMapViewComponent } from 'jimu-arcgis';
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ===================== EXPORTED WIDGET ===============================
const Widget = (props: Props) => {
  // #region ---------------------- Constants ----------------------------------
  // #endregion ------------------- Constants ----------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [activeView, setActiveView] = React.useState(null);
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

  // using the createComponent function from @lit/react to create a react component from the lit-element component
  // per https://lit.dev/docs/frameworks/react/#how-it-works-1
  // as otherwise the componnent wasn't picking up on the reactive state changes of the webmap view
  const MapComponents = createComponent({
    tagName: 'map-component',
    react: React,
    elementClass: MapComponent,
  });
  // #endregion ------- Short-Circuit (Invalid Settings) -----------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <div className="jimu-widget widget-map-components">
      <MapComponents map={activeView?.view} item="view"></MapComponents>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={(mv) => {
          setActiveView(mv);
        }}
      />
    </div>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Widget;
// #endregion ================== EXPORTED WIDGET ===============================
