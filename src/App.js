import React, { useEffect } from 'react';
import { 
  Redirect,
   Route, 
   Switch,
    useHistory,
     useLocation,
     } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import  { Project1, Project2, Project3, Project4 } from './Pages/Projects';
import { AnimatePresence } from 'framer-motion';
const App = () => {
  const location =useLocation();
  const history = useHistory();

  
useEffect(() => {
 /* const handleScrollToElement = (e) => {
    const url =Window.location.origin + "/" ; 


    const wheelRouter = (after,before) => {
      if (e.wheelDeltaY  < 0) {
        setTimeout (() => {
          history.push(after);
       },500);
      }else if (e.wheelDeltaY > 0) {
        setTimeout (() => {
          history.push(before);
       },500);
    }
  };
    switch (Window.location.href.toString()){
      case url :
        if (e.wheelDeltaY < e ){
        setTimeout (() => {
          history.push("project-1");
       },500);
      }
        break ; 
        case url + "project-1" :
        wheelRouter("project-2", "");
      break ;
      case url + "project-2" :
        wheelRouter("project-3","project-1");
      break ;
      case url + "project-3" :
        wheelRouter("project-4","project-2");
      break ;
      case url + "project-4" :
        wheelRouter("contact","project-3");
      break ;
      case url + "contact" :
        if (e.wheelDeltaY > 0 ){
          setTimeout (() => {
             history.push("project-4");
          },500);
        } 
        break ;
        default :
        console.log("nothing");
    }
  };

      Window.addEventListener("wheel", handleScrollToElement);*/
},[history]);

  return (
    <AnimatePresence>
    
<Switch location={location} key={location.pathname}>
  <Route exact path="/" component={Home} />
  <Route exact path="/Project-1"component={Project1} />
  <Route exact path="/Project-2"component={Project2} />
  <Route exact path="/Project-3"component={Project3} />
  <Route exact path="/Project-4"component={Project4 } />
  <Route exact path="/contact"component={Contact} />
  <Redirect to="/" />
</Switch>
</AnimatePresence>
  );
};
export default App ;