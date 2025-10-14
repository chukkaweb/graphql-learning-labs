import { Request, Response, Router } from 'express'
import { authenticate } from '@/middleware/auth'
import { default as AuthorReouter } from './author'
import { default as ArticleRouter } from './article'
import { default as CommentsRouter } from './comments'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
    res.json({ msg: 'Hello, Rest Service!' })
})

router.use('/author', authenticate, AuthorReouter)
router.use('/article', authenticate, ArticleRouter)
router.use('/comments', authenticate, CommentsRouter)

export default router
