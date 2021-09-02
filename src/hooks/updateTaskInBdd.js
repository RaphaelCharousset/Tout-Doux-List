import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const updateTaskInBdd = async ({ id, title, done, order }) => {
  await updateDoc(doc(db, "tasks", id), {
    id, title, done, order,
  })
}

export default updateTaskInBdd