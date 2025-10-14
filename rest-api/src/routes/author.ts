import { Request, Response, Router } from 'express'
import { authorStore } from '@/data/author'
import { IAuthor } from '@/types'

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
    res.json(author)
})

router.post('/', (req: Request, res: Response) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({ msg: 'Name is required' })
    }
    const newAuthor: IAuthor = authorStore.add(name)
    res.status(201).json(newAuthor)
})

router.post('/searchByIds', (req: Request, res: Response) => {
    const { ids } = req.body as { ids: string[] }
    if (!ids || !Array.isArray(ids)) {
        res.status(400).json({ msg: 'ids:[] is required and should be an array' })
    }
    const authors = authorStore.getByIds(ids)
    res.json(authors)
})

router.post('/search', (req: Request, res: Response) => {
    const { term } = req.body as { term: string }
    if (!term || typeof term !== 'string') {
        res.status(400).json({ msg: 'term:string is required and should be a string' })
        return
    }
    const authors = authorStore.search(term)
    res.json(authors)
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
