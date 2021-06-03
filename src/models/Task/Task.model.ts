import { firestore } from 'models/Base/Firestore.model'
import { Request, Response } from 'express'

export async function fetch() {
  const snapshot = await firestore.collection('tasks').get()
  const tasks: Array<{}> = []

  if (snapshot.empty)
    return []  
  
  snapshot.forEach(document => {
    const [data, id] = [ document.data(), document.id ]
    tasks.push({...data, id})
  })

  return tasks
}