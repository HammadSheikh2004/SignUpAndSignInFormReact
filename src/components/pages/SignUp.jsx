import { useState } from "react"
import Heading from "../reuseableCom/Heading"
import TextField from "../reuseableCom/TextField"
import '../css/style.css'
import Button from "../reuseableCom/Button"
import Swal from "sweetalert2"

const SignUp = () => {

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
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
          Swal.fire({
            title: "Given Email is already Exit. Please Login Now!",
            icon: "error"
          });
        } else {
          parseData.push(formData);
          localStorage.setItem("users", JSON.stringify(parseData));
          Swal.fire({
            title: "Congratulations! You are Successfully SignUp!",
            icon: "success"
          });
        }
      } else {
        localStorage.setItem("users", JSON.stringify([formData]));
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
      <Heading heading="Sign Up Form" />
      <TextField classes="form-control mb-2" name="fName" onChange={handleChange} type="text" placeholder="Enter the First Name!" />
      <TextField classes="form-control mb-2" name="lName" onChange={handleChange} type="text" placeholder="Enter the Last Name!" />
      <TextField classes="form-control mb-2" name="email" onChange={handleChange} type="email" placeholder="Enter the Email!" />
      <TextField classes="form-control mb-2" name="password" onChange={handleChange} type="password" placeholder="Enter the Password!" />
      <Button buttonText="Sign Up" onchange={handleForm} />
    </>
  )
}

export default SignUp