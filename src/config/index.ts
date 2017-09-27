import * as dotenv from "dotenv"

dotenv.config({ path: ".env" })

export interface Config {
    ENV: string
    PORT: number | string
}

const config: Config = {
    ENV: process.env.ENV || 'development',
    PORT: process.env.PORT || 3000
}

export default config
