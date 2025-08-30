import Fastify from 'fastify';
import sequelize from './db.js';
import greetingsController from './api/api.js'
import textController from './api/api.js';


const fastify = Fastify({
    logger: true
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
    fastify.listen({ port: 8000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}