/// <reference types="vite/client" />

declare module 'simple-peer/simplepeer.min.js' {
    import SimplePeer from 'simple-peer';
    export * from 'simple-peer';
    export default SimplePeer;
}

// declare var Peer: import("simple-peer");
// declare var peer: import("simple-peer").Instance;

// declare global {
//     import _Peer from 'simple-peer';
//     var Peer: _Peer;
//     var peer: _Peer.Instance;
// }
