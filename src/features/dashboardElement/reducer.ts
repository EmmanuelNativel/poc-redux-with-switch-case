import { DashboardElement } from "../../types/types";
import { DashboardElementActions } from "./actions";

export type DashboardElementState = Record<string, DashboardElement>;

const initialState: DashboardElementState = {};

export default function DashboardElementReducer(
  state = initialState,
  action: DashboardElementActions
): DashboardElementState {
  switch (action.type) {
    case "dashboardElement/dashboardElementAdded": {
      return {
        ...state,
        [action.payload.dashboardElement.id]: action.payload.dashboardElement,
      };
    }
    default:
      return state;
  }
}
