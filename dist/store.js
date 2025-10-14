"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorStore = exports.data = void 0;
const uuid_1 = require("uuid");
exports.data = [];
exports.authorStore = {
    getAll: () => exports.data,
    get: (id) => exports.data.find((a) => a.id === id),
    add: (name) => {
        const newAuthor = { id: (0, uuid_1.v4)(), name };
        exports.data.push(newAuthor);
        return newAuthor;
    },
    update: (id, name) => {
        const author = exports.data.find((a) => a.id === id);
        if (author) {
            author.name = name;
        }
        return author;
    },
    delete: (id) => {
        const index = exports.data.findIndex((a) => a.id === id);
        if (index !== -1) {
            return exports.data.splice(index, 1)[0];
        }
        return null;
    },
};
//# sourceMappingURL=store.js.map