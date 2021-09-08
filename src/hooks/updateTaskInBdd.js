import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const updateTaskInBdd = async ({ id, title, uid, order = 0, done = false }) => {
  await updateDoc(doc(db, "tasks", id), {
    id, title, done, order, uid
  })
}

export default updateTaskInBdd