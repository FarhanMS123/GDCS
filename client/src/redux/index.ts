import { configureStore } from "@reduxjs/toolkit";
import gdcsSliceReducer from "./gdcs.slice";
import mediaSliceReducer from "./media.slice";

export const store = configureStore({
    reducer: {
        media: mediaSliceReducer,
        gdcs: gdcsSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['gdcs/setPeer'],
                // ignoredActionPaths: ['gdcs.peer'],
                ignoredPaths: ['gdcs.peer'],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
