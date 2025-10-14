"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const store_1 = require("./store");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.json({ msg: 'Hello, GraphQL!' });
});
router.get('/authors', (_req, res) => {
    const data = store_1.authorStore.getAll();
    res.json(data);
});
router.get('/authors/:id', (req, res) => {
    const author = store_1.authorStore.get(req.params.id);
    if (!author) {
        res.status(404).json({ msg: 'Author not found' });
    }
    res.json({ author });
});
router.post('/authors', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ msg: 'Name is required' });
    }
    const newAuthor = store_1.authorStore.add(name);
    res.status(201).json(newAuthor);
});
router.put('/authors/:id', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ msg: 'Name is required' });
    }
    const updatedAuthor = store_1.authorStore.update(req.params.id, name);
    if (!updatedAuthor) {
        res.status(404).json({ msg: 'Author not found' });
    }
    res.json(updatedAuthor);
});
router.delete('/authors/:id', (req, res) => {
    const deletedAuthor = store_1.authorStore.delete(req.params.id);
    if (!deletedAuthor) {
        res.status(404).json({ msg: 'Author not found' });
    }
    res.status(204).json(deletedAuthor);
});
exports.default = router;
//# sourceMappingURL=routes.js.map