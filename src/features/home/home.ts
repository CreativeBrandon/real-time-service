import { NextFunction, Request, Response, Express } from 'express'
import config from '../../config'

export const home = (req: Request, res: Response) => {
    res.json({
        meta: {
            env: config.ENV,
            port: config.PORT
        },
        message: 'Welcome to Websocket microservice'
    })
}
