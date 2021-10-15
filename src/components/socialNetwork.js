import React from 'react';



const SocialNetwork = () => {
    const anim = () => {
     let navLinks = document.querySelectorAll('.social-network a');

     navLinks.forEach( link => {
        link.addEventListener('mouseover',(e) => {
let attrX= e.offsetX ;
let attrY = e.offsetY ;
link.style.transform =`translate(${attrX}px, ${attrY}px)`;
        })
        link.addEventListener('mouseleave',() => {
            link.style.transform ='';
        })
     })
    }
   return ( 
       <div className="social-network">
<ul className='content'>
<a href="http://www.facebook.com" target="_blank" 
rel="noopener noreferrer" className="hover" onMouseOver={anim}>
    <li><i className="fab fa-facebook-f"></i></li>
</a>
<a href="http://www.twitter.com" target="_blank" 
rel="noopener noreferrer" className="hover" onMouseOver={anim}>
    <li><i className="fab fa-twitter"></i></li>
</a>
<a href="http://www.instagram.com" target="_blank" 
rel="noopener noreferrer" className="hover" onMouseOver={anim}>
    <li><i className="fab fa-instagram"></i></li>
</a>
</ul>
       </div>
   );
};

export default SocialNetwork;
