import { createTRPCProxyClient, createWSClient, httpLink, splitLink, wsLink } from '@trpc/client';
import type { AppRouter } from '@/types/trpc';

// create persistent WebSocket connection
const wsClient = createWSClient({
    url: `ws://localhost:3000`,
});

const wsLinkClient = wsLink({
    client: wsClient,
});

// const httpLinkClient = httpLink({
//     url: 'http://localhost:3000',
// });

const client = createTRPCProxyClient<AppRouter>({
    links: [
        wsLinkClient,

        // https://github.com/trpc/trpc/blob/main/examples/standalone-server/src/client.ts
        // splitLink({
        //     condition(op) {
        //         return op.type === 'subscription'
        //     },
        //     true: wsLinkClient,
        //     false: httpLinkClient,
        // }),
    ],
});

export default client;
