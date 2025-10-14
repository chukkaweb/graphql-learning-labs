import { Request, Response, Router } from 'express'
import { articleStore } from '@/data/article'
import { IArticle } from '@/types'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    const withAuthor = req.query.withAuthor === 'true'
    const data = withAuthor ? articleStore.getAllWithAuthor() : articleStore.getAll()
    res.json(data)
})

router.get('/:id', (req: Request, res: Response) => {
    const withAuthor = req.query.withAuthor === 'true'
    const articleId = req.params.id
    const article = withAuthor ? articleStore.getWithAuthor(articleId) : articleStore.get(articleId)
    if (!article) {
        res.status(404).json({ msg: 'Article not found' })
    }
    res.json(article)
})

router.post('/', (req: Request, res: Response) => {
    const { title, authorId, content } = req.body
    if (!title || !authorId) {
        res.status(400).json({ msg: 'title and authorId is required' })
    }
    const newAuthor: IArticle = articleStore.add({ title, authorId, content })
    res.status(201).json(newAuthor)
})

router.post('/search', (req: Request, res: Response) => {
    const { term } = req.body as { term: string }
    if (!term || typeof term !== 'string') {
        res.status(400).json({ msg: 'term:string is required and should be a string' })
        return
    }
    const articles = articleStore.search(term)
    res.json(articles)
})

router.put('/:id', (req: Request, res: Response) => {
    const { title, authorId, content } = req.body
    const updatedArticle = articleStore.update(req.params.id, { title, authorId, content })
    if (!updatedArticle) {
        res.status(404).json({ msg: 'Article not found' })
    }
    res.json(updatedArticle)
})

router.delete('/:id', (req: Request, res: Response) => {
    const deletedArticle = articleStore.delete(req.params.id)
    if (!deletedArticle) {
        res.status(404).json({ msg: 'Article not found' })
    }
    res.status(204).json(deletedArticle)
})

export default router
