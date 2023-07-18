import { createAction, nanoid } from "@reduxjs/toolkit";

export const dashboardElementAdded = createAction(
  "dashboardElement/dashboardElementAdded",
  function prepare(dashboardId: string, sheetId: string) {
    return {
      payload: {
        dashboardId,
        sheetId,
        dashboardElement: {
          id: nanoid(),
          color: "red",
        },
      },
    };
  }
);

export type DashboardElementActions = typeof dashboardElementAdded;
