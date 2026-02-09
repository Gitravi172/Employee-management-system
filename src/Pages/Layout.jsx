import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Outlet } from 'react-router'

 export const Layout = () => {
 const [search, setSearch ] = useState("");
 const [ department, setDepartment] = useState("All");
 const [status, setStatus] = useState("All")

  return (
  <>

<Navbar 
  search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus} 
/>
<Outlet  context={{ search, department, status }} />
<Footer/>

  </>
  )
}

