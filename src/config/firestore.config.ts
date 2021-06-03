import dotenv from 'dotenv'
import admin from 'firebase-admin'

dotenv.config()

export const firestoreConfig = {
  credential: admin.credential.cert({
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: process.env.PRIVATE_KEY,
    projectId: process.env.PROJECT_ID,
  }),
  databaseURL: process.env.DATABASE_URL,
}