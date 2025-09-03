import Fastify from 'fastify';
import sequelize from './db.js';
import cors from "@fastify/cors";

import textController from './api/api.js';

const fastify = Fastify({
    logger: true
});

await fastify.register(cors, {
    origin: [
        "http://localhost:5173",
        "https://lettfaktura-terms.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
});

fastify.register(textController, { prefix: '/text' })

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection to the database has been established successfully.");
    }).catch(err => {
        console.error("Unable to connect to the database:", err);
    });

try {
    fastify.listen({ port: process.env.PORT || 4000, host: "0.0.0.0" });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}