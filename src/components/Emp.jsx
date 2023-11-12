import React,{useState} from "react";

export const Emp = ()=>{
    // java script// getter to display and setter to take input from input box. 
    // inp text saved in e and take setvalue as e.target.value
    const [name,setName] = useState()
    const [lname,setLname] =useState()
    const [mname,setMname] =useState()
    const [mobile,setMobile]=useState()
    const [email,setEmail]= useState()
    const [city,setCity]= useState()
    const [pincode,setPinCode]=useState()
    return(
        <div className="main">
        <div className="inp">
            <input onChange={(e)=>setName(e.target.value)} type="text"placeholder="Enter First Name" />
            <br /><br />
            <input onChange={(e)=>setLname(e.target.value)} type="text" placeholder="Enter Last Name" />
            <br /><br />
            <input onChange={(e)=>setMname(e.target.value)} type="text" placeholder="Enter Middle Name"/>
            <br /><br />
            <input onChange={(e)=>setMobile(e.target.value)} type="number" placeholder="Enter Mobile Number" />
            <br /><br />            
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email id" />
            <br /><br />
            <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Enter City" />
            <br /><br />
            <input onChange={(e)=>setPinCode(e.target.value)} type="number" placeholder="Enter Pincode" /> 
            <br /><br />
        </div>
        <div className="disp">
            <h1>Personal Details</h1>
            <h3>Name -{name} {mname} {lname}</h3>
            <h3>Mobile -{mobile}</h3>
            <h3>Email -{email}</h3>
            <h3>City -{city}</h3>
            <h3>Pincode -{pincode}</h3>
        </div>
        </div>
        
    )
}