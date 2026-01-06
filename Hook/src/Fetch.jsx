import { useEffect,useState } from "react";

export default function Fetch(){
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [showId,setShow]=useState();

    useEffect(()=>{
        const fetchUsers = async () =>{
            const response=await fetch("https://jsonplaceholder.typicode.com/posts/");
            const data=await response.json();
            setUsers(data);
            setLoading(false);
            console.log(data);
        }
        fetchUsers();
    },[])
    
    return (
        <div>
            <h1 className="text-4xl">Fetch API Call</h1>
           {(loading) && <h2>Loading...</h2>}
           {users.map(user =>(
                <span key={user.id} className="bg-amber-100 block p-2 my-2 rounded flex">
                 <p >{user.title}</p>
                 {showId === user.userId && 
                 (<span>User id: {showId}</span>)}

                 <button className="ml-2 bg-green-500 h-10 w-15" onClick={()=>setShow(user.userId)}>Show</button>
                </span>
           ))}
        </div>
    )
}

