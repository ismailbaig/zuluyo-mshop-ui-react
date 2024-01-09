import React from "react";
import './Home.css'
import { useAuth0 } from "@auth0/auth0-react";
export const Home=()=>{
    
  const { isAuthenticated,user } = useAuth0();
    return(
        <div className="home">
            <h1>{isAuthenticated && <p>Welcome {user.name}</p>}</h1>
        </div>
    )
}