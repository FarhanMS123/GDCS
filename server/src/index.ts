import { applyWSSHandler } from '@trpc/server/adapters/ws';
import ws from 'ws';
import { router } from '@/trpc';
import { roomRouter } from '@/room/index';

const appRouter = router({
  room: roomRouter,
});

const wss = new ws.Server({ port: 3000 });
const handler = applyWSSHandler({ router: appRouter, wss });

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
