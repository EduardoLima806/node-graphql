var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var query = require('./BookQuery').BookQuery;
var mutation = require('./BookMutation');

exports.BookSchema = new GraphQLSchema({
    query,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
});