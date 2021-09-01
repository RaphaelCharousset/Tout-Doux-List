import { getDocs } from "firebase/firestore"
import { tasksCol } from "../firebase/firebaseConfig"

const accessDocs = await getDocs(tasksCol)

// get only tasks from only user ATM
export const getData = accessDocs.docs.map(doc => {
  return {
    ...doc.data(),
    id: doc.id
  }
})