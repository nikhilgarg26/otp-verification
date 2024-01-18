import axios from "axios";
import { useState } from "react"
import { useRecoilValue } from "recoil";
import {nameAtom, emailAtom} from "../store/atoms/user"

function Otp(){

    const [otp,setotp] = useState("")
    const name = useRecoilValue(nameAtom)
    const email = useRecoilValue(emailAtom)

    async function handleForm(e){
        e.preventDefault()

        const res = await axios.post('http://localhost:3000/auth/otp', {
            email,
            otp,
            name
          })

          console.log(res)

    }

    return <>
        <form>
            <input type="text" placeholder="OTP" onChange={(e)=>{setotp(e.target.value)}} value={otp}></input><br></br>
            <button type="submit" onClick={handleForm}>Submit</button>
        </form>
    </>
}

export default Otp