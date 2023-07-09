import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import ws from 'ws';
import { router, createContext } from '@/trpc';
import { roomRouter } from '@/room/index';

const appRouter = router({
  room: roomRouter,
});

// https://github.com/trpc/trpc/blob/main/examples/standalone-server/src/server.ts
const { server, listen } = createHTTPServer({
  router: appRouter,
  createContext,
});

const wss = new ws.Server({ server });
applyWSSHandler({ router: appRouter, wss, createContext });

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

server.on('listening', () => {
  console.log('tRPC Listening...');
  console.log(server.address());
});

listen(3000);
