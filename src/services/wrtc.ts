var wrtc = require('wrtc');

export const WRTCPeerConnection: RTCPeerConnection = wrtc.RTCPeerConnection;

// https://github.com/node-webrtc/node-webrtc/blob/develop/docs/nonstandard-apis.md#sdpsemantics
export type NS_RTCConfiguration = RTCConfiguration & {
    sdpSemantics?: 'unified-plan' | 'plan-b',
}


// https://github.com/node-webrtc/node-webrtc-examples/blob/master/lib/server/connections/webrtcconnection.js#L16
export function createRTC(){
    const rtcc: NS_RTCConfiguration = {
        sdpSemantics: 'unified-plan',
    };
    const rtc: RTCPeerConnection = new WRTCPeerConnection(rtcc);
}