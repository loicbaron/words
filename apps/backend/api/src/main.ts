import Fastify from 'fastify';
import cors from '@fastify/cors';

import { app } from './app/app';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Instantiate Fastify with some config
const server = Fastify({
  logger: true,
});

// Register your application as a normal plugin.
server.register(app);

server.register(cors, {
  origin: '*', // Allow all origins — for dev only!
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Optional: Restrict allowed methods
  credentials: true, // Optional: if using cookies or authorization headers
});

// Start listening.
server.listen({ port, host }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  } else {
    console.log(`[ ready ] http://${host}:${port}`);
  }
});
