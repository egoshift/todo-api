import dotenv from 'dotenv'
import knexfile from '../../knexfile'

dotenv.config()

const environment = process.env.ENVIRONMENT || 'development'
const knexconfig = knexfile[environment]

export default knexconfig
