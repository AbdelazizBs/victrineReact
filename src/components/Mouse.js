import React, { useEffect } from 'react';


const Mouse = () => {
    useEffect (() => {
        const cursor =document.querySelector('.cursor');
        const handleCursor  =(e) =>{
            cursor.style.top=e.pageY + "px" ;
            cursor.style.left=e.pageX + "px" ;
        }
     window.addEventListener('mousemove',handleCursor);

     const handleHover = () =>  {
        cursor.classList.add('hovered');
     };


     const handlLeave = () =>  {
        cursor.style.transition=".3s ease-out";
        cursor.classList.remove('hovered');
 
    };

        document.querySelectorAll('.hover').forEach((link) => {
         link.addEventListener('mouseover',handleHover);
         link.addEventListener('mouseleave',handlLeave);
     });
      },[]);
  
    return  <span className="cursor"></span>
};
export default  Mouse  ;
