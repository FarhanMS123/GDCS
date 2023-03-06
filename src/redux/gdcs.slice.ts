import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GdcsState {
    status: 'closed' | 'established' | 'wait';
    room: string;
    camera: string | null;
    rotate: -90 | 0 | 90 | 180;
    ratio: number; // width / height
};

export const initialState: GdcsState = {
    status: 'closed',
    room: '',
    camera: null,
    rotate: 0,
    ratio: 0,
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