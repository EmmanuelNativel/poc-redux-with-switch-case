import { Dashboard } from "../../types/types";
import { SheetActions } from "../sheet/actions";
import { DashboardActions } from "./actions";

export type DashboardState = Record<string, Dashboard>;

const initialState: DashboardState = {};

export default function DashboardReducer(
  state = initialState,
  action: DashboardActions | SheetActions
): DashboardState {
  switch (action.type) {
    case "dashboard/dashboardAdded": {
      return {
        ...state,
        [action.payload.dashboard.id]: action.payload.dashboard,
      };
    }
    case "sheet/sheetAdded": {
      return {
        ...state,
        [action.payload.dashboardId]: {
          ...state[action.payload.dashboardId],
          sheetsIds: [
            ...state[action.payload.dashboardId].sheetsIds,
            action.payload.sheet.id,
          ],
        },
      };
    }

    default:
      return state;
  }
}
