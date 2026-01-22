import { useEffect, useState } from "react";

function User()
{
    const[user, setUser] = useState([]);
    const[Loading, setLoading]=useState(true);
    const[error,setError] = useState(null);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => {
    //         setUser(data);
    //         setLoading(false);
    //     })
    // },[]);

    async function getUser(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!res.ok){
                throw new Error("Something Went Wrong :/");
            }
            const data = await res.json();
            setUser(data);
        }
        catch(err){
           setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getUser();
        // const timer = setInterval(()=>{
        //   console.log("Running...");
        // },1000);

        // return ()=>{
        //     clearInterval(timer);
        // };
    },[]);

    return(
        <div>
            <h2>User List From API...</h2>
            {Loading && <p>Loading...</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
            <ul>
                {user.map(users => (
                    <li key = {users.id}>{users.name} {"->"} {users.address?.street}</li>
                ))}
            </ul>
        </div>
    );
}

export default User;