import { React, useState } from 'react'
import Heading from "../reuseableCom/Heading"
import TextField from "../reuseableCom/TextField"
import '../css/style.css'
import Button from "../reuseableCom/Button"
import Swal from "sweetalert2"

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleForm = () => {
        let storage = localStorage.getItem("users");
        if (formData.email != "" && formData.email.includes('@')) {
            if (storage) {
                let parseData = JSON.parse(storage);
                let isUserExit = parseData.find((val) => {
                    return val.email.toLowerCase().includes(formData.email.toLowerCase());
                });
                if (isUserExit) {
                    if(isUserExit.password == formData.password){
                        Swal.fire({
                            title: "Signin Successfully!",
                            icon: "success"
                        });
                    }else{
                        Swal.fire({
                            title: "Signin UnSuccessfully!",
                            icon: "error"
                        });
                    }
                    
                } else {
                    Swal.fire({
                        title: "User Not Found!",
                        icon: "error"
                    });
                }
            } 
        } else {
            Swal.fire({
                title: "Incorrect Email Pattern!",
                icon: "error"
            });
        }

    }
    return (
        <>
            <Heading heading="Sign In Form" />
            <TextField classes="form-control mb-2" name="email" onChange={handleChange} type="email" placeholder="Enter the Email!" />
            <TextField classes="form-control mb-2" name="password" onChange={handleChange} type="password" placeholder="Enter the Password!" />
            <Button buttonText="Sign In" onchange={handleForm} />
        </>
    )
}

export default SignIn