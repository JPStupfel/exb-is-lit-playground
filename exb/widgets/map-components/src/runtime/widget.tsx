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

import { isMapViewConfigured } from './widget.utilities';
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import icon from '../../icon.svg';
import defaultMessages from './translations/default';
import { type Props } from './widget.types';
import { JsxEmit } from 'typescript';
import { JimuMapViewComponent } from 'jimu-arcgis';
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ===================== EXPORTED WIDGET ===============================
const Widget = (props: Props) => {
  // #region ---------------------- Constants ----------------------------------
  // #endregion ------------------- Constants ----------------------------------

  // #region -------------------- Hooks (State) --------------------------------
  const [activeView, setActiveView] = React.useState(null);
  const [zoom, setZoom] = React.useState(99);
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

  // useEffect that uses reactive utils to watch the activeView.view.zoom and sets it to state
  React.useEffect(() => {
    if (activeView) {
      const handle = activeView.view.watch('zoom', (zoom) => {
        setZoom(zoom);
      });
      return () => handle.remove();
    }
  }, [activeView]);
  // #endregion ------- Short-Circuit (Invalid Settings) -----------------------

  // #region ---------------- Supporting Functions -----------------------------
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <div className="jimu-widget widget-map-components">
      <map-component map={zoom}></map-component>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={(mv) => {
          console.log('active view changed');
          setActiveView(mv);
        }}
      />
    </div>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Widget;
// #endregion ================== EXPORTED WIDGET ===============================
