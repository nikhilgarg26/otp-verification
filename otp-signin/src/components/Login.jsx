import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useRecoilState } from "recoil";
import {nameAtom, emailAtom} from "../store/atoms/user"

function Login(){
    const [name, setname] = useRecoilState(nameAtom)
    const [email, setemail] = useRecoilState(emailAtom)

    const navigate = useNavigate()

    async function handleForm(e){
        e.preventDefault()

        axios.post('http://localhost:3000/auth/email', {
            email
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          navigate('/otp')
    }

    return <>
        <form>
            <input type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}} value={name}></input><br></br>
            <input type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} value={email}></input><br></br>
            <button type="submit" onClick={handleForm}>Login</button>
        </form>
    </>
}

export default Login
