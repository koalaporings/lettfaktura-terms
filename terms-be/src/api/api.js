import Text from '../models/models.js'

const responseTextSchema = {
    type: "object",
    properties: {
        id: { type: "integer" },
        content: { type: "string" },
        language: { type: "string"}
    }
};

const textController = (fastify, options, done) => {
    fastify.get('/:language', { schema: responseTextSchema }, async (req, reply) => {
        const queryFilter = {}
        queryFilter.language = req.params.language;
        console.log(await Text.findAll( {queryFilter} ))
        return await Text.findAll( {queryFilter} );
    });

    done();
};

export default textController;