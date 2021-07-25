import dotenv from 'dotenv'
import knexconfig from '../../knexfile'

dotenv.config()

const environment = process.env.ENVIRONMENT || 'development'
const config = knexconfig[environment]

export default config
