import { useContext } from "react";
import  { AuthContext } from "../Context/Usecontex";


const useAuth=()=>{
    return useContext(AuthContext)
}
export default useAuth;