import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initilition=()=>{
    initializeApp(firebaseConfig);
}
export default initilition;