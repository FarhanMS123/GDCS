'use server';
import type { Room, Rooms } from './gdcs.d';

console.log("This GDCS loaded");

declare global {
    var Module: any;
    var cv: any;
}

global.Module = {
    onRuntimeInitialized() {
        // this is our application:
        console.log(cv.getBuildInformation())
    }
}

global.cv = require('@/utils/opencv4.7.0');

const rooms: Rooms = {};

export async function createOpenCV() {}

export async function createRoom(): Promise<Room> {
    return {
        code: "",
        rtc: "",
    };
}

export async function joinRoom(code: string): Promise<Room> {
    return {
        code: "",
        rtc: "",
    };
}

export async function hehe() {
    console.log(cv.getBuildInformation());
}
