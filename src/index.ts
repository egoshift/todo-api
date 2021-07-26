import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import Routes from 'routes/routes'
import logger from '@logger'

import { Client } from 'pg'

dotenv.config()

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(Routes)

app.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`)

  // checkConnection()
})

// function checkConnection() {
//   const client = new Client({
//     connectionString: 'postgres://basic:4dmin1234@localhost:5432/todo'
//   })

//   client.connect()
//   client.query('SELECT * FROM users', (error, results) => {
//     if (error) {
//       console.log(error)
//       return
//     }

//     console.log(results.rows)
//     client.end()
//   })
// }