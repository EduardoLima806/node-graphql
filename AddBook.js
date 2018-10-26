var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('./bookType');
var bookModel = require('./book');

exports.addBook = {
    type: bookType.bookType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        author: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async(root, args) => {
        const uModel = new bookModel(args);
        const newBook = await uModel.save();
        if (!newBook) {
            throw new Error('error');
        }
        return newBook;
    }
}