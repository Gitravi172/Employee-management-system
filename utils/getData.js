

 export const  getData = async(id)=>  {

     const res=await fetch(`http://localhost:8080/employees/${id}`)
    const data = await res.json()
    console.log(data)
    return data;
}


