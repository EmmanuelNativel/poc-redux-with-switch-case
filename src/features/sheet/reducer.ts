import { Sheet } from "../../types/types";
import { DashboardActions } from "../dashboard/actions";
import { DashboardElementActions } from "../dashboardElement/actions";
import { SheetActions } from "./actions";

export type SheetState = Record<string, Sheet>;

const initialState: SheetState = {};

export default function SheetReducer(
  state = initialState,
  action: SheetActions | DashboardElementActions | DashboardActions
): SheetState {
  switch (action.type) {
    case "sheet/sheetAdded": {
      return {
        ...state,
        [action.payload.sheet.id]: action.payload.sheet,
      };
    }
    case "dashboardElement/dashboardElementAdded": {
      const sheetId = action.payload.sheetId;

      return {
        ...state,
        [sheetId]: {
          ...state[sheetId],
          dashboardElementsIds: [
            ...state[sheetId].dashboardElementsIds,
            action.payload.dashboardElement.id,
          ],
        },
      };
    }
    case "dashboard/dashboardAdded": {
      const sheetId = action.payload.dashboard.sheetsIds[0];

      return {
        ...state,
        [sheetId]: {
          id: sheetId,
          bgColor: "cyan",
          dashboardElementsIds: [],
        },
      };
    }
    default:
      return state;
  }
}
