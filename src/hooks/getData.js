import { getDocs } from "firebase/firestore"
import { todosCol } from "../firebase/firebaseConfig"

const accessDocs = await getDocs(todosCol)
const data = await accessDocs.docs.map(doc => doc.data())

// get only tasks from only user ATM
const getData = data[0].tasks

export default getData