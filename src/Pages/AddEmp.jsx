import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Employee } from "../Components/Employee";



export const AddEmp = () => {
  const navigate = useNavigate();

  const addemp = (data) => {
    fetch("http://localhost:8080/employees", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
        method: "POST",
        body:JSON.stringify({

        fullname:data.fullname,
        emailaddress:data.emailaddress,
        phonenumber:data.phonenumber,
        salary:data.salary,
        department:data.department,
        position:data.position,
        status:data.status,
        joindate:data.joindate
        })

      })

     .then(function(res){console.log(res)
      toast.success("Employee add Successfully")
      navigate("/")
     })

    .catch(function(res) {console.log(res)
      toast.error("Error in Adding Employee")
    })
  }

  return (
    <>
      <Employee submitForm={addemp} isEdit={false} />
    </>
  )
}
