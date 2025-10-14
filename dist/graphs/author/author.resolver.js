"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("../../store");
const resolvers = {
    Query: {
        hello: () => `Hi, this is gQL server`,
        author: (_, data) => {
            return store_1.authorStore.get(data.id);
        },
        authors: () => store_1.authorStore.getAll(),
    },
    Mutation: {
        createAuthor: (_, data) => {
            const author = store_1.authorStore.add(data.name);
            return author;
        },
        updateAuthor: (_, data) => {
            const author = store_1.authorStore.update(data.id, data.name);
            return author;
        },
        deleteAuthor: (_, data) => {
            const author = store_1.authorStore.delete(data.id);
            return author;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=author.resolver.js.map