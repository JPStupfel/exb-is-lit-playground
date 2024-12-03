/**
 * Basic Lit Component Settings
 *
 * Basic Lit Component settings implementation.
 */
// #region ========================= IMPORTS ===================================
// #region ---------------------- Jimu / React ---------------------------------
import { Immutable, React, type UseDataSource } from 'jimu-core';
import { Alert } from 'jimu-ui';
import {
  AllDataSourceTypes,
  DataSourceSelector,
} from 'jimu-ui/advanced/data-source-selector';
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow,
} from 'jimu-ui/advanced/setting-components';
// #endregion ------------------- Jimu / React ---------------------------------

// #region ------------ 3rd-Party Components / Libraries -----------------------
// #endregion --------- 3rd-Party Components / Libraries -----------------------

// #region -------------- Custom Components / Utilities ------------------------
// #endregion ----------- Custom Components / Utilities ------------------------

// #region ------------------------ Resources ----------------------------------
import defaultMessages from './translations/default';
import { type Props } from './setting.types';
// #endregion --------------------- Resources ----------------------------------
// #endregion ====================== IMPORTS ===================================

// #region ==================== STYLED COMPONENTS ==============================
// #endregion ================= STYLED COMPONENTS ==============================

// #region ==================== EXPORTED SETTINGS ==============================
const Settings = (props: Props) => {
  // #region ---------------------- Constants ----------------------------------
  // #endregion ------------------- Constants ----------------------------------

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
  const onSettingChange = (settings: { [key: string]: any }): void => {
    props.onSettingChange({ ...settings, id: props.id });
  };
  // #endregion ------------- Supporting Functions -----------------------------

  // #region ------------------- Event Handlers --------------------------------
  /**
   * Event handler for when the data sources are updated.
   * @param useDataSources Updated data sources array
   */
  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    onSettingChange({ useDataSources });
  };

  /**
   * Event handler for when the map widget is selected.
   * @param useMapWidgetIds Select map widget ids
   */
  const onMapWidgetSelected = (useMapWidgetIds: string[]): void => {
    onSettingChange({ useMapWidgetIds });
  };
  // #endregion ---------------- Event Handlers --------------------------------

  // #region ----------------------- Render ------------------------------------
  return (
    <div className="jimu-widget-setting widget-setting-Basic Lit Component">
      <SettingSection
        title={props.intl.formatMessage({
          id: 'selectMapWidgetLabel',
          defaultMessage: defaultMessages.selectMapWidgetLabel,
        })}
      >
        <SettingRow>
          <MapWidgetSelector
            onSelect={onMapWidgetSelected}
            useMapWidgetIds={props.useMapWidgetIds}
          />
        </SettingRow>
        {!props.useMapWidgetIds?.length && (
          <SettingRow>
            <Alert
              tabIndex={0}
              open={true}
              text={props.intl.formatMessage({
                id: 'selectMapWidgetWarning',
                defaultMessage: defaultMessages.selectMapWidgetWarning,
              })}
              type={'warning'}
            />
          </SettingRow>
        )}
      </SettingSection>
    </div>
  );
  // #endregion -------------------- Render ------------------------------------
};
export default Settings;
// #endregion ================= EXPORTED SETTINGS ==============================
