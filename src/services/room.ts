import { createOpenCV } from "./gdcs";
import { createRTC } from './wrtc';

export type Room = {
    code: string,
    rtc: any,
    ocv: any,
}

export type Rooms = {
    [code: string]: Room,
}

export const rooms: Rooms = {};

export function createRoom() {
    const code = "";
    rooms[code] = {
        code,
        rtc: createRTC(),
        ocv: createOpenCV(),
    };
    return rooms[code];
}