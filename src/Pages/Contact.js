import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from  'react-copy-to-clipboard';
import SocialNetwork from '../components/socialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
const Contact = () => {
  const variants ={
    in: {
      opacity:1,
      x:0
    },
    out : {
      opacity :0,
      x :300 ,
    }
  }
  const transition ={
    case :[0.03,0.87,0.73,0.9],
    duration:0.6
}
  return (
    <main>
      <Mouse />
<motion.div 
className="contact"
exit="out"
animate="in"
initial="out"
variants={variants}
transition={transition}
>
<Navigation />
<Logo />
<ContactForm />
<div className="contact-infos">
<div className="address">
<div className="content">
<h4>address</h4>
<p>33000 Tunisie,Monastir</p>
</div>
</div>
<div className="phone">
  <div className="content">
<h4>téléphone </h4>
<CopyToClipboard text="+216228503" 
className="hover" >
<p 
style={{ cursor:"pointer"}}
 className="clipboard" 
 onClick={() => {
  alert('Téléphone copié !');
}}
>+216 22 85 66 03</p>
</CopyToClipboard>
</div>
</div>
<div className="content">
  <h4>email</h4>
  <CopyToClipboard text="Bsagency@gmail.com" 
  className="hover">
<p
style={{cursor:"pointer"}}
className="clipboard"
onClick={()=> {
  alert('Email copié !');
}}>Bsagency@gmail.com</p>
  </CopyToClipboard>
</div>
<SocialNetwork />
<div className="credits">
  <p>fromScratch -2021  </p>
  </div>
  </div>
  <ButtonsBottom left={'/project-4'} />
</motion.div>
  </main>
  );
};
export default Contact ;