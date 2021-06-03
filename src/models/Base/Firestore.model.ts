import admin from 'firebase-admin'
import { firestoreConfig } from '@config/firestore.config'

admin.initializeApp(firestoreConfig)

const firestore = admin.firestore()

export { admin, firestore }