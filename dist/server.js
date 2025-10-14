"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Server;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const gql_server_1 = __importDefault(require("./gql-server"));
const routes_1 = __importDefault(require("./routes"));
async function Server() {
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 3000;
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)());
    app.use('/', routes_1.default);
    await (0, gql_server_1.default)(app);
    app.use((_req, res, _next) => {
        res.status(404).json({ msg: 'NOT_FOUND' });
    });
    app.use((err, _req, res, _next) => {
        console.log('Server Error: ', err);
        res.status(500).json({ msg: 'UNKNOWN_ERROR', data: err });
    });
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    return app;
}
//# sourceMappingURL=server.js.map