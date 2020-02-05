import React, { useState } from "react";


function App(){

  const [contact, updateContact] = useState({
    fName:"",
    lName:"",
    email:""
  });

  function handleChange(event){
    const{value,name} =event.target;
    updateContact(prevValue =>{
      if(name ==="fName"){
        return{
          fName:value,
          lName:prevValue.lName,
          email:prevValue.email
        };
      }else if(name === "lName"){
        return{
          fName:prevValue.fName,
          lName:value,
          email:prevValue.email
        };
      }else if (name === "email"){
        return{
          fName:prevValue.fName,
          lName:prevValue.lName,
          email:value
        };
      }
    }

    )
  }

  return(
<div className="container">
  <h1>Hello {contact.fName} {contact.lName} </h1>
  <p>{contact.email}</p>
<form>
<input 
placeholder="first Name"
name= "fName"
value={contact.fName}
onChange={handleChange}
/>
<input
placeholder = "last Name"
name="lName"
value={contact.lName}
onChange={handleChange}
/>
<input 
placeholder = "email"
name="email"
value={contact.email}
onChange={handleChange}

/>
<button>Submit</button>
</form>



</div>
  );
}

export default App;
