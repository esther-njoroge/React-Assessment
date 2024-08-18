import "./index.css"
import { useState } from "react";


const Signup = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async(event)=>{
        event.preventDefault();
        const results = await login({name, email});
        console.log({results});
    }


    return(
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input placeholder="Enter name" type="text" onChange={(event)=>setName(event.target.value)}/>
            <br/>
            <input placeholder="Enter email" type="email" onChange={(event)=>setEmail(event.target.value)}/>
            <br/>
            <button type="submit">Signup</button>


        </form>
    )
}


export default Signup;
