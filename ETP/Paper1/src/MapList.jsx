import { useEffect, useState } from "react"
import axios from "axios"
export default function MapList(){
    const [users,setUsers]=useState([]);
    const [open,setOpen]=useState(false);
    useEffect(()=>{
        const UserList=async()=>{
            const response=await axios.get("https://jsonplaceholder.typicode.com/posts/");
            const data=await response.data;
            setUsers(data);
        }
        if(open) UserList();
    },[open]);
    return (
        <div>
            <button onClick={()=>{setOpen(!open)}}> {open ? "Close" : "Show"}</button>
            {open && users.map((user)=>(
                <p key={user.id}>{user.title}</p>
            ))}
        </div>
    )
}