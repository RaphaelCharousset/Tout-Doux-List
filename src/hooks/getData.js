import { getDocs } from "firebase/firestore"
import { tasksCol } from "../firebase/firebaseConfig"

const accessDocs = await getDocs(tasksCol)

// get only tasks from only user ATM
const getData = await accessDocs.docs.map(doc => doc.data())

export default getData