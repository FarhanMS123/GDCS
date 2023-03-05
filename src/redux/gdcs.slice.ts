import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GdcsState {
    status: 'closed' | 'established' | 'wait';
    room: string;
    camera: string | null;
};

export const initialState: GdcsState = {
    status: 'closed',
    room: '',
    camera: null,
};

export const gdcsSlice = createSlice({
    name: 'gdcs',
    initialState,
    reducers: {
        setConnectionState: (state, action: PayloadAction<GdcsState['status']>) => {
            state.status = action.payload;
        },
        setRoom: (state, action: PayloadAction<GdcsState['room']>) => {
            state.room = action.payload;
        },
        setCamera: (state, action: PayloadAction<GdcsState['camera']>) => {
            state.camera = action.payload;
        },
        resetCamera: (state) => {
            state.camera = null;
        }
    },
});

export const { setConnectionState, setRoom, setCamera, resetCamera } = gdcsSlice.actions;

export default gdcsSlice.reducer;