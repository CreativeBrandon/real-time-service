import { NextFunction, Request, Response } from 'express'

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        error: {
            message: 'Not Found',
            status: 404
        }
    })
}

export const devError = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (req.app.get('env') === 'development') {
        res.status(err.status || 500).json({
            message: err.message,
            error: err
        })
    }
    next()
}

export const prodError = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
        message: err.message,
        error: err
    })
}
