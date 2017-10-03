import * as bodyparser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import config from './config'
import * as routes from "./routes"
import { devError, notFound, prodError } from './exceptions/exceptions'

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())

app.set('env', config.ENV)
app.set('port', config.PORT)

routes.init(app)

app.use(notFound)

if (config.ENV == 'development') {
    app.use(devError)
} else {
    app.use(prodError)
}

app.listen(app.get('port'), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get('port'), app.get("env"))
    console.log("  Press CTRL-C to stop\n")
})
