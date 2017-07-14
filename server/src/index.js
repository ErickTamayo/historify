import express from 'express';
import graphqlHTTP from 'express-graphql';

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInputObjectType,
} from 'graphql';

import {
    nodeDefinitions,
    fromGlobalId,
    globalIdField,
    connectionDefinitions,
    connectionFromPromisedArray,
    connectionArgs,
    mutationWithClientMutationId,
} from 'graphql-relay';

import {
    getUser,
    getSongs,
    getSongById,
    createSong,
    getObjectById,
} from './data';

const { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
        const { type, id } = fromGlobalId(globalId);
        return getObjectById(type.toLowerCase(), id);
    },
    (object) => {
        if (object.name) {
            return songType;
        }
        return null;
    },
);

const songType = new GraphQLObjectType({
    name: 'Song',
    description: 'A song on historify',
    fields: {
        id: globalIdField(),
        name: {
            type: GraphQLString,
            description: 'The name of the song.',
        },
        artist: {
            type: GraphQLString,
            description: 'The artist of the song.',
        },
        image: {
            type: GraphQLString,
            description: 'The image of the song.',
        },
        totalPlays: {
            type: GraphQLInt,
            description: 'The total plays of the song.',
        },
    },
    interfaces: [nodeInterface],
});

const { connectionType: SongConnection } = connectionDefinitions({
    nodeType: songType,
});

const userType = new GraphQLObjectType({
    name: 'User',
    description: 'An app user',
    fields: {
        id: globalIdField(),
        name: {
            type: GraphQLString,
            description: 'The name of the user',
        },
        profileImg: {
            type: GraphQLString,
            description: 'Profile picture',
        },
        playedAllTime: {
            type: GraphQLInt,
            description: 'Number of songs played by a user forever',
        },
        playedThisWeek: {
            type: GraphQLInt,
            description: 'Number of songs played by a user this week',
        },
        songs: {
            type: SongConnection,
            args: connectionArgs,
            description: 'Songs belonging to this user',
            resolve: (obj, {status, ...args}) => connectionFromPromisedArray(getSongs(), args),
        }
    }
});

const queryType = new GraphQLObjectType({
    name: 'Query',
    description: 'The root query type.',
    fields: {
        node: nodeField,
        viewer: {
            type: userType,
            resolve: () => getUser(),
        },
        song: {
            type: songType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                    description: 'The id of the song.',
                }
            },
            resolve: (_, args) => {
                return getSongById(args.id);
            }
        },
    },
});

const songInputType = new GraphQLInputObjectType({
    name: 'SongInput',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the song.',
        },
        artist: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The artist of the song.',
        },
        image: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The image of the song.',
        },
        totalPlays: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The total plays of the song.',
        },
    },
});

const songMutation = mutationWithClientMutationId({
    name: 'AddSong',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the song.',
        },
        artist: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The artist of the song.',
        },
        image: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The image of the song.',
        },
        totalPlays: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The total plays of the song.',
        },
    },
    outputFields: {
        song: {
            type: songType
        }
    },
    mutateAndGetPayload: (args) => new Promise((resolve, reject) => {
        Promise.resolve(createSong(args))
            .then((song) => resolve({ song }))
            .catch(reject);
    }),
})

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'The root mutation type',
    fields: {
        createSong: songMutation,
    }
});

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

const server = app.listen(8000, () => {
    console.log('Server running at http://localhost:' + server.address().port);
});