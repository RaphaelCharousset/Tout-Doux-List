import { collection, query, where, getDocs } from "firebase/firestore"
import { tasksCol } from "../firebase/firebaseConfig"



// get only tasks from only user ATM
export const getData = async (uid) => {
  const q = query(collection(tasksCol, '/'), where("uid", "==", uid));

  const accessDocs = await getDocs(q)
  return accessDocs.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
}
