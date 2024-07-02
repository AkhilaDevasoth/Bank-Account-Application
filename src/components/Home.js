import React from "react";
import {useNavigate} from 'react-router-dom'

const Home=()=>{
    const navigate =useNavigate(null)

const login=()=>{
    navigate('/login')
}

const signup=()=>{
    navigate('/signup')
}

    return(
        <div className="container">
            <div className="row">
                <div className="col-6 bg-info">
                    <h3>Akhila DEvasoth</h3>
                    <h3>9182355978</h3>
                    <h3>akhiladevasoth20@gmail.com</h3>
                </div>
                <div className="col-6">
                    <h5>add photo</h5>
                    <button className="btn btn-primary" onClick={login}>Login</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={signup}>Signup</button>
                </div>
            </div>
        </div>
    )
}
export default Home