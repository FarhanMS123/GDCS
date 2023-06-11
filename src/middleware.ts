import { MiddlewareConfig, MiddlewareMatcher } from "next/dist/build/analysis/get-page-static-info";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    console.log(arguments);
    // let res = new NextResponse<unknown>;

    // return res;
}

export function socketIO(req: NextRequest) {
    return null;
}

export const config = {
    matcher: '/(.*)',
}