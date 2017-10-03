import { Express } from 'express'
import { home } from './features/home/home'

export const init = (app: Express) => {
    app.get('/', home)
}
