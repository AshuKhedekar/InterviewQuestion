import React,{useState} from 'react'
 const ObjWithSpread = () => {
 const [person ,setPerson] = useState({
    firstName:'Ashwini',
    lastName:'Khedekar',
    email:'Ashu123@gmail.com'
 });

const handleFirstNameChange=(e)=>{
   setPerson({
    ...person,
    firstName:e.target.value
   });
}
const handleLastNameChange=(e)=>{
   setPerson({
    ...person,
    lastName:e.target.value
   })
}

const handleEmailChange =(e)=>{
    setPerson({
     ...person,
     email:e.target.value
    })
 }


  return (
    <>
    <div>
    <label>
        First name: 
        <input
        value={person.firstName}
        onChange={handleFirstNameChange}
        />
    </label>
    </div>
    <div>
    <label>
        Last name: 
        <input
        value={person.lastName}
        onChange={handleLastNameChange}
        />
    </label>
    </div>
    <div>
    <label>
        Email: 
        <input
        value={person.email}
        onChange={handleEmailChange}
        />
    </label>
    </div>
    <div>
   <p> firstName: {person.firstName}</p>
    <p>lastName :{person.lastName}</p>
    <p>Email : {person.email}</p>
    </div>
    </>
  )
}

export default ObjWithSpread;