import { Request, Response, Router } from 'express'
import { commentStore } from '@/data/comments'

const router = Router()

router.get('/article/:articleId', (req: Request, res: Response) => {
    res.status(201).json(commentStore.getWithArticle(req.params.articleId))
})

router.get('/author/:authorId', (req: Request, res: Response) => {
    res.status(201).json(commentStore.getWithAuthor(req.params.authorId))
})

export default router
