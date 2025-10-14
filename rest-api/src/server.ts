import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import GQLServer from './gql-server'
import routes from '@/routes'

export default async function Server(): Promise<Express> {
    const app = express()
    const PORT = process.env.PORT || 3000

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use('/', routes)

    await GQLServer(app)

    app.use((_req, res: Response, _next) => {
        res.status(404).json({ msg: 'NOT_FOUND' })
    })

    app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
        console.log('Server Error: ', err)
        res.status(500).json({ msg: 'UNKNOWN_ERROR', data: err })
    })

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })

    return app
}
