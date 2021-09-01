import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const deleteTaskFromBdd = async (id) => {
  await deleteDoc(doc(db, "tasks", id))
}

export default deleteTaskFromBdd