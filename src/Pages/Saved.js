import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from  'react-copy-to-clipboard';
import SocialNetwork from '../components/socialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import RescuerForm from '../components/RescuerForm';
import { motion } from 'framer-motion';
const Saved = () => {
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
className="rescuer"
exit="out"
animate="in"
initial="out"
variants={variants}
transition={transition}
>
<Navigation />
<Logo />
<RescuerForm />
<div className="rescuer-infos">
<div className="address">
<div className="content">
<h4>address</h4>
<p>99000 Tunisie,Sousse</p>
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
>+216 99 999 ---</p>
</CopyToClipboard>
</div>
</div>
<div className="content">
  <h4>email</h4>
  <CopyToClipboard text="SOS-Teams@gmail.com" 
  className="hover">
<p
style={{cursor:"pointer"}}
className="clipboard"
onClick={()=> {
  alert('Email copié !');
}}>SOS-Teams</p>
  </CopyToClipboard>
</div>
<SocialNetwork />
<div className="credits">
  <p>SOS-Teams -2021  </p>
  </div>
  </div>
  <ButtonsBottom left={'/home'} />
</motion.div>
  </main>
  );
};
export default Saved ;