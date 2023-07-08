import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Peer from 'simple-peer';

export interface GdcsState {
    status: 'closed' | 'established' | 'wait';
    room: string;
    client_id: string;
    peer: Peer.Instance | null;
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
    client_id: "",
    peer: null
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
        setClientId: (state, action: PayloadAction<GdcsState['client_id']>) => {
            state.client_id = action.payload;
        },
        setPeer: (state, action: PayloadAction<GdcsState['peer']>) => {
            state.peer = action.payload;
        },
        setCamera: (state, action: PayloadAction<GdcsState['camera']>) => {
            state.camera = action.payload;
        },
        resetCamera: (state) => {
            state.camera = null;
        }
    },
});

export const { setConnectionState, setRoom, setCamera, resetCamera, setClientId, setPeer } = gdcsSlice.actions;

export default gdcsSlice.reducer;
