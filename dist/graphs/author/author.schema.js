"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const Schema = (0, graphql_tag_1.default) `
    type Author {
        id: String
        name: String
    }

    type Query {
        hello: String
        author(id: String!): Author
        authors: [Author]
    }

    type Mutation {
        createAuthor(name: String!): Author
        updateAuthor(id: String!, name: String!): Author
        deleteAuthor(id: String!): Author
    }
`;
exports.default = Schema;
//# sourceMappingURL=author.schema.js.map