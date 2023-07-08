declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    room: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, {
        create: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _ctx_out: object;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, {
            code: `${string}-${string}-${string}-${string}-${string}`;
            metadata: object;
            parameters: object;
            peers: string[];
        }>;
        get: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: string;
            _input_out: string;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            code: string;
            metadata: object;
            parameters: object;
            peers: string[];
        }>;
        subsJoin: import("@trpc/server").BuildProcedure<"subscription", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: string;
            _input_out: string;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@trpc/server/observable").Observable<import("./room/schema").SubsSchema, unknown>>;
        subsStream: import("@trpc/server").BuildProcedure<"subscription", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: string;
            _input_out: string;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@trpc/server/observable").Observable<unknown, unknown>>;
        signalPeer: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                client_id: string;
                data: string | {
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                } | {
                    type: "renegotiate";
                    renegotiate: true;
                } | {
                    type: "candidate";
                    candidate: RTCIceCandidate;
                } | RTCSessionDescriptionInit | (string & {
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                }) | (string & {
                    type: "renegotiate";
                    renegotiate: true;
                }) | (string & {
                    type: "candidate";
                    candidate: RTCIceCandidate;
                }) | (string & RTCSessionDescriptionInit) | ({
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                } & string) | ({
                    type: "renegotiate";
                    renegotiate: true;
                } & string) | ({
                    type: "candidate";
                    candidate: RTCIceCandidate;
                } & string) | (RTCSessionDescriptionInit & string);
            };
            _input_out: {
                client_id: string;
                data: string | {
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                } | {
                    type: "renegotiate";
                    renegotiate: true;
                } | {
                    type: "candidate";
                    candidate: RTCIceCandidate;
                } | RTCSessionDescriptionInit | (string & {
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                }) | (string & {
                    type: "renegotiate";
                    renegotiate: true;
                }) | (string & {
                    type: "candidate";
                    candidate: RTCIceCandidate;
                }) | (string & RTCSessionDescriptionInit) | ({
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                } & string) | ({
                    type: "renegotiate";
                    renegotiate: true;
                } & string) | ({
                    type: "candidate";
                    candidate: RTCIceCandidate;
                } & string) | (RTCSessionDescriptionInit & string);
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, void | undefined>;
        signalStream: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                data: string | {
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                } | {
                    type: "renegotiate";
                    renegotiate: true;
                } | {
                    type: "candidate";
                    candidate: RTCIceCandidate;
                } | RTCSessionDescriptionInit | (string & {
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                }) | (string & {
                    type: "renegotiate";
                    renegotiate: true;
                }) | (string & {
                    type: "candidate";
                    candidate: RTCIceCandidate;
                }) | (string & RTCSessionDescriptionInit) | ({
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                } & string) | ({
                    type: "renegotiate";
                    renegotiate: true;
                } & string) | ({
                    type: "candidate";
                    candidate: RTCIceCandidate;
                } & string) | (RTCSessionDescriptionInit & string);
                room_code: string;
            };
            _input_out: {
                data: string | {
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                } | {
                    type: "renegotiate";
                    renegotiate: true;
                } | {
                    type: "candidate";
                    candidate: RTCIceCandidate;
                } | RTCSessionDescriptionInit | (string & {
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                }) | (string & {
                    type: "renegotiate";
                    renegotiate: true;
                }) | (string & {
                    type: "candidate";
                    candidate: RTCIceCandidate;
                }) | (string & RTCSessionDescriptionInit) | ({
                    type: "transceiverRequest";
                    transceiverRequest: {
                        kind: string;
                        init?: RTCRtpTransceiverInit | undefined;
                    };
                } & string) | ({
                    type: "renegotiate";
                    renegotiate: true;
                } & string) | ({
                    type: "candidate";
                    candidate: RTCIceCandidate;
                } & string) | (RTCSessionDescriptionInit & string);
                room_code: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, void | undefined>;
    }>;
}>;
export type AppRouter = typeof appRouter;
export {};
