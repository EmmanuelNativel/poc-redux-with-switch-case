import { createAction, nanoid } from "@reduxjs/toolkit";

export const dashboardAdded = createAction(
  "dashboard/dashboardAdded",
  function prepare(title: string) {
    return {
      payload: {
        dashboard: {
          id: nanoid(),
          title,
          sheetsIds: [nanoid()],
        },
      },
    };
  }
);

export type DashboardActions = typeof dashboardAdded;
