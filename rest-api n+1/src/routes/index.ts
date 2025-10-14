import { Request, Response, Router } from 'express'

import { default as AuthorReouter } from './author'
import { default as ArticleRouter } from './article'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
    res.json({ msg: 'Hello, Rest Service!' })
})

router.use('/author', AuthorReouter)
router.use('/article', ArticleRouter)

export default router
