import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import Routes from 'routes/routes'
import logger from '@logger'

dotenv.config()

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json())

app.use(Routes)

app.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`)
})