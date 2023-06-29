import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MediaState {
    [x: string]: string | boolean | null;
}

export const initialState: MediaState = {
    //
};

export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        insertNewRule: (state, action: PayloadAction<string>) => {
            state[action.payload] = null;
            mediaSlice.caseReducers.updateMediaState(state);
        },
        removeRule: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
            return state;
        },
        resetRules: (state) => {
            state = mediaSlice.getInitialState();
        },
        updateMediaState: (state) => {
            for (const media in state) {
                state[media] = window.matchMedia(media).matches;
            }
        },
    },
});

export const { insertNewRule, removeRule, resetRules, updateMediaState } = mediaSlice.actions;

export default mediaSlice.reducer;