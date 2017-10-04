import { Express } from 'express'
import { home } from './features'

export const init = (app: Express) => {
    app.get('/', home)
}
