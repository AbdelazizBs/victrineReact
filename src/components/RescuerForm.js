import React, { useEffect } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import db from "../firebase";



const RescuerForm = () => {

  const [rescuer, setRescuer] = useState({
    name :"",
    lastName :"",
    nationality:"",
    dateOfBirth:""
  })


  useEffect(()=>
    {
      db.collection("rescuer").onSnapshot(snapshot=>{
        console.log(snapshot.docs.map(doc=> doc.data()))
          // setContacts(snapshot.docs.map(doc=> doc.data().contacts))
      }
    
      )
    }
  ,[])

  const handleChange = (e)=>{
    // e.preventDefault(),
    let value = e.target.value;
    let name = e.target.name;
     setRescuer((prevalue) => {
      return {
        ...prevalue,                
        [name]: value
      }
    })
   
  console.log(rescuer)
  console.log("rescuer",rescuer)

  }


  const isEmail = () => {
    let isMail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (rescuer.email.match(regex)) {
      isMail.style.display = "none";
      return true;
    } else {
      isMail.style.display = "block";
      isMail.style.animation = "dongle 1s";
      setTimeout(() => {
        isMail.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  emailjs.init("user_UlaJhXPWKKOr9S2ktyq5r");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('rescuer').add({
      rescuer: rescuer
    })
    let formMess = document.querySelector(".form-message");
    console.log("testtesttes",rescuer)
    if (rescuer.name && rescuer.nationality && rescuer.phone &&   isEmail() && rescuer.message ){
    
    emailjs
    .send(
      // your service ID
      "service_hbqg29h",
      // your template ID
      "template_hxsix6f",
      rescuer,
      // your user ID (protégé par .env)
      process.env.REACT_APP_EMAILJS_KEY
  
    )
    .then(
      () => {
        formMess.innerHTML =
          "Message envoyé ! Je vous recontacterai dès que possible.";
        setTimeout(() => {
          formMess.style.opacity = "1";
        }, 5000);
      },
      (err) => {
        console.log(err);
        formMess.style.background = "rgb(253, 87, 87)";
        formMess.innerHTML ="Une erreur s'est produite, veuillez réessayer.";
            }
        );
    }
      else {
        formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

  };
}
    

  

  return (
    <div>
      <form className="rescuer-form">
      <h3>Inscriver pour</h3>
      <div className="form-content">
        <input
          type="text"
          // id="name"
          name="name"
          required
          onChange={handleChange}
          placeholder="name *"
          // value={name}
        />
          <input
          type="text"
          // id="name"
          name="lastName"
          required
          onChange={handleChange}
          placeholder="Last Name *"
          // value={name}
        />
        <input
          type="text"
          id="nationality"
          name="nationality"
          onChange={handleChange}
          placeholder="nationality"
          // value={nationality}
        />
       
      <form>
  <div>
    <input type="date" id="bday" name="bday"></input>
  </div>
</form>

     
      </div>
      <input to="/home"
        className="button"
        type="button"
        value="Inscrit"
        onClick={handleSubmit}
       required/>
      <div className="form-message"></div>
    </form>
  
    </div>
    
  );
};

export default RescuerForm;