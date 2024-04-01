import { collection, addDoc, getDoc, doc } from "firebase/firestore"; 
import { db } from "./FirebaseConfig";
// export const addRef = async(userName, email, password)=>{
//     try {
//         const docRef = await addDoc(collection(db, 'users'), {
//             first:'Ada',
//             last:'Lopez',
//             age:25,
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
 

// export const movi = await getDocs(collection(db, "muvi"));
// movi.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

export const getDocument = async (id)=>{
    try {
        const docRef = await getDoc(doc(db, "muvi", id));
        console.log(docRef);
        // console.log(`${docRef.id} => ${docRef.data()}`);
    } catch (error) {
        console.log(error);
    }
}