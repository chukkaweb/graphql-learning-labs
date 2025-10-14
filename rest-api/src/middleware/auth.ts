import { Request, Response, NextFunction } from 'express'
const devAuthToken = 'AUTH'
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'] || (req.query.auth as string)
    if (authHeader !== devAuthToken) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    return next()
}
