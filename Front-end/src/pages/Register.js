import React from "react";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/register_form";

function Register(){
    return(
        <React.Fragment>
            <Navbar/>
            <RegisterForm/>
        </React.Fragment>
    );
}

export default Register;