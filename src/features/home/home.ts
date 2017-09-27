import { NextFunction, Request, Response, Express } from 'express'
import config from '../../config'

export const home = (req: Request, res: Response) => {
    res.json({
        env: config.ENV,
        message: 'Welcome to Websocket microservice',
        port: config.PORT
    })
}
