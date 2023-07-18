import { createReducer } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectSheets = (state: RootState) =>
  state.dashboardRoot.present.sheets;
export const selectSheetById = (state: RootState, sheetId: string) =>
  state.dashboardRoot.present.sheets[sheetId];
