import { createAction, nanoid } from "@reduxjs/toolkit";

export const sheetAdded = createAction(
  "sheet/sheetAdded",
  function prepare(dashboardId: string) {
    return {
      payload: {
        dashboardId,
        sheet: {
          id: nanoid(),
          bgColor: "cyan",
          dashboardElementsIds: [],
        },
      },
    };
  }
);

export type SheetActions = typeof sheetAdded;
