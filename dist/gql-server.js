"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GQLServer;
const server_1 = require("@apollo/server");
const express5_1 = require("@as-integrations/express5");
const author_schema_1 = __importDefault(require("./graphs/author/author.schema"));
const author_resolver_1 = __importDefault(require("./graphs/author/author.resolver"));
async function GQLServer(app) {
    const articleServer = new server_1.ApolloServer({
        typeDefs: author_schema_1.default,
        resolvers: author_resolver_1.default,
    });
    await articleServer.start();
    app.use('/graphql', (0, express5_1.expressMiddleware)(articleServer));
}
//# sourceMappingURL=gql-server.js.map