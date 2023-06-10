export type Room = {
    code: string,
    rtc: string,
}

export type Rooms = {
    [code: string]: Room,
}

export const rooms: Rooms = {};

export function createRoom() {}