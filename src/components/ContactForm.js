import React, { useEffect } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import db from "../firebase";
import { app, auth } from "firebase";



const ContactForm = () => {
  // const [name, setName] = useState("");
  // const [company, setCompany] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [contact, setContact] = useState({
    name :"",
    email :"",
    phone:"",
    message:"",
    company:"",
    password:""
  })
  const [contacts,setContacts]=useState([])

  useEffect(()=>
    {
      db.collection("contact").onSnapshot(snapshot=>{
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
    /*const {email,password} = e.target.name;
    try {
      await app
        .auth()
        .creatUserWithEmailAndPassword(email.value,password.value);
  history.push("/");
    } catch (error) {
      alert(error)
    }*/
     setContact((prevalue) => {
      return {
        ...prevalue,                
        [name]: value
      }
    })
   
  console.log(contact)
  console.log("contacts",contacts)

  }


  const isEmail = () => {
    let isMail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (contact.email.match(regex)) {
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
    db.collection('contact').add({
      contacts: contact
    })
    let formMess = document.querySelector(".form-message");
    console.log("testtesttes",contacts)
    if (contact.name && contact.company && contact.phone &&   isEmail() && contact.message ){

    // let nameS = document.getElementById("name");;
    // let companyS = document.getElementById("company");
    // let phoneS = document.getElementById("phone");
    // let emailS = document.getElementById("email");
    // let messageS = document.getElementById("message");
    
    emailjs
    .send(
      // your service ID
      "service_hbqg29h",
      // your template ID
      "template_hxsix6f",
    contact,
      // your user ID (protégé par .env)
      process.env.REACT_APP_EMAILJS_KEY
  
    )
    .then(
      () => {
        formMess.innerHTML =
          "Message envoyé ! Je vous recontacterai dès que possible.";

        // document.getElementById("contact.name").classList.remove("error");
        // document.getElementById("contact.company").classList.remove("error");
        // document.getElementById("contact.phone").classList.remove("error");
        // document.getElementById("contact.email").classList.remove("error");
        // document.getElementById("contact.message").classList.remove("error");
        // setName("");
        // setCompany("");
        // setPhone("");
        // setEmail("");
        // setMessage("");
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
      //      if (!contact.name) {
      //   nameS.classList.add("error");
      // }
    
      // if (!email) {
      //   emailS.classList.add("error");
      // }
      // if (!message) {
      //   messageS.classList.add("error");
      // }
  };
}
    

    // if (contact.name && contact.company && contact.phone &&   isEmail() && contact.message ) {
    //   // nameS.classList.remove("red");
    //   // companyS.classList.remove("red");
    //   // phoneS.classList.remove("red");
    //   // emailS.classList.remove("red");
    //   // messageS.classList.remove("red");

    //   // formMess.innerHTML = "Message en cours d'envoi...";
    //   // formMess.style.background = "#00c1ec";
    //   // formMess.style.opacity = "1";
     
    //   // voir doc : https://www.emailjs.com/docs/examples/reactjs/
    //   emailjs
    //     .send(
    //       // your service ID
    //       "service_hbqg29h",
    //       // your template ID
    //       "template_hxsix6f",
    //     contact,
    //       // your user ID (protégé par .env)
    //       process.env.REACT_APP_EMAILJS_KEY
      
    //     )
    //     .then(
    //       () => {
    //       //   formMess.innerHTML =
    //       //     "Message envoyé ! Je vous recontacterai dès que possible.";

    //       //   document.getElementById("name").classList.remove("error");
    //       //   document.getElementById("company").classList.remove("error");
    //       //   document.getElementById("phone").classList.remove("error");
    //       //   document.getElementById("email").classList.remove("error");
    //       //   document.getElementById("message").classList.remove("error");
    //       //   setName("");
    //       //   setCompany("");
    //       //   setPhone("");
    //       //   setEmail("");
    //       //   setMessage("");
    //       //   setTimeout(() => {
    //       //     formMess.style.opacity = "1";
    //       //   }, 5000);
    //       // },
    //       // (err) => {
    //       //   console.log(err);
    //       //   formMess.style.background = "rgb(253, 87, 87)";
    //       //   formMess.innerHTML ="Une erreur s'est produite, veuillez réessayer.";
    //        }
    //     );
    // } else {
    //   formMess.innerHTML = "Merci de remplir correctement les champs requis *";
    //   formMess.style.background = "rgb(253, 87, 87)";
    //   formMess.style.opacity = "1";

    //   if (!name) {
    //     nameS.classList.add("error");
    //   }
    
    //   if (!email) {
    //     emailS.classList.add("error");
    //   }
    //   if (!message) {
    //     messageS.classList.add("error");
    //   }
    // }
  

  return (
    <div>
      <form className="contact-form">
      <h3>Contactez-moi</h3>
      <div className="form-content">
        <input
          type="text"
          // id="name"
          name="name"
          required
          onChange={handleChange}
          placeholder="nom *"
          // value={name}
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={handleChange}
          placeholder="société"
          // value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
          placeholder="téléphone"
          // value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="email *"
            // value={email}
          />
        </div>
      {/* <div className="password-content">
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
          // value={phone}
        />
          <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          onChange={handleChange}
          placeholder="confirm password"
          // value={phone}
        />
        </div>
         */}
        <textarea
        type="text"
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="message"
          // value={message}
          required
        />  

      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
       required/>
      <div className="form-message"></div>
    </form>
  
    </div>
    
  );
};

export default ContactForm;