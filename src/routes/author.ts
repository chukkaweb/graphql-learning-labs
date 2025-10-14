import { Request, Response, Router } from 'express'
import { authorStore, IAuthor } from '@/data/author'

const router = Router()

router.get('/', (_req, res: Response) => {
    const data = authorStore.getAll()
    res.json(data)
})

router.get('/:id', (req: Request, res: Response) => {
    const author = authorStore.get(req.params.id)
    if (!author) {
        res.status(404).json({ msg: 'Author not found' })
    }
    res.json({ author })
})

router.post('/', (req: Request, res: Response) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({ msg: 'Name is required' })
    }
    const newAuthor: IAuthor = authorStore.add(name)
    res.status(201).json(newAuthor)
})

router.put('/:id', (req: Request, res: Response) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({ msg: 'Name is required' })
    }
    const updatedAuthor = authorStore.update(req.params.id, name)
    if (!updatedAuthor) {
        res.status(404).json({ msg: 'Author not found' })
    }
    res.json(updatedAuthor)
})

router.delete('/:id', (req: Request, res: Response) => {
    const deletedAuthor = authorStore.delete(req.params.id)
    if (!deletedAuthor) {
        res.status(404).json({ msg: 'Author not found' })
    }
    res.status(204).json(deletedAuthor)
})

export default router
