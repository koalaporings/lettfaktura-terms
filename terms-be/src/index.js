import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

fastify.get('/', options, (req, reply) => {
    return {
        message: 'Hello World'
    };
});

fastify.route({
    method: 'GET',
    url: '/hello/:name',
    schema: {
        querystring: {
            properties: {
                lastName: { type: 'string' }
            },
            required: ['lastName']
        },
        params: {
            properties: {
                name: { type: 'string' }
            },
            required: ['name']
        },

        response: {
            200: {
                properties: {
                    message: { type: 'string' }
                },
                required: ['message']
            }
        }
    },
    handler: (req, reply) => {
        return {
            message: `Hello ${req.params.name} ${req.query.lastName}`
        };
    }
})

try {
    fastify.listen({ port: 8000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}