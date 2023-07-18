import { RootState } from "../../app/store";

export const selectDashboardElements = (state: RootState) =>
  state.dashboardRoot.present.dashboardElements;

export const selectDashboardElementById = (
  state: RootState,
  dashboardElementId: string
) => state.dashboardRoot.present.dashboardElements[dashboardElementId];
