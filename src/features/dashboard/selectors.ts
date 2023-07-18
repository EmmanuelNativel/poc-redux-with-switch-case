import { RootState } from "../../app/store";

export const selectDashboards = (state: RootState) =>
  state.dashboardRoot.present.dashboards;
