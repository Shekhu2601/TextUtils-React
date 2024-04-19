
import React from "react";
//import {
  //BrowserRouter as Router,
  //Routes,
  //Route,
  
//} from "react-router-dom";
import './App.css';
import Navbar from './componenets/Navbar';
import Textform from './componenets/Textform';
import { useState } from 'react';
import Alert from './componenets/Alert';
import './componenets/style.css'




function App() {
  const [mode, setmode] = useState("light")// dark mode is enable ;
  const [alert, setAlert]= useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg :message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500); }




    const gMode = ()=>{
      setmode("dark")
      //remove
      document.querySelector("#sn-1").classList.remove("sr")
      document.querySelector("#sn-2").classList.remove("sr")
      document.querySelector("#sn-3").classList.remove("sr")
      document.querySelector("#sn-4").classList.remove("sr")
      document.querySelector("#sn-5").classList.remove("sr")
      document.querySelector("#sn-1").classList.remove("sy")
      document.querySelector("#sn-2").classList.remove("sy")
      document.querySelector("#sn-3").classList.remove("sy")
      document.querySelector("#sn-4").classList.remove("sy")
      document.querySelector("#sn-5").classList.remove("sy")


      document.querySelector("#sn-1").classList.add("sg")
      document.querySelector("#sn-2").classList.add("sg")
      document.querySelector("#sn-3").classList.add("sg")
      document.querySelector("#sn-4").classList.add("sg")
      document.querySelector("#sn-5").classList.add("sg")
      
      
      
      
      document.body.style.background =" rgba(0, 128, 0, 0.836)"
      document.body.style.color="white"
      document.getElementById("mybox").style.color="white"
      
      showAlert( " Green Dark mode is Enable","success");
      

    }

    const yMode = ()=>{
//remove
document.querySelector("#sn-1").classList.remove("sr")
document.querySelector("#sn-2").classList.remove("sr")
document.querySelector("#sn-3").classList.remove("sr")
document.querySelector("#sn-4").classList.remove("sr")
document.querySelector("#sn-5").classList.remove("sr")
document.querySelector("#sn-1").classList.remove("sg")
document.querySelector("#sn-2").classList.remove("sg")
document.querySelector("#sn-3").classList.remove("sg")
document.querySelector("#sn-4").classList.remove("sg")
document.querySelector("#sn-5").classList.remove("sg")





      
      setmode("dark")
        
      document.querySelector("#sn-1").classList.add("sy")
      document.querySelector("#sn-2").classList.add("sy")
      document.querySelector("#sn-3").classList.add("sy")
      document.querySelector("#sn-4").classList.add("sy")
      document.querySelector("#sn-5").classList.add("sy")




        document.body.style.background ="yellow"
        document.body.style.color="white"
        document.getElementById("mybox").style.color="white"
        
        showAlert( "Yellow Dark mode is Enable","success");
        
  
      }
      
  
  const redMode = ()=>{

//remove
document.querySelector("#sn-1").classList.remove("sg")
document.querySelector("#sn-2").classList.remove("sg")
document.querySelector("#sn-3").classList.remove("sg")
document.querySelector("#sn-4").classList.remove("sg")
document.querySelector("#sn-5").classList.remove("sg")
document.querySelector("#sn-1").classList.remove("sy")
document.querySelector("#sn-2").classList.remove("sy")
document.querySelector("#sn-3").classList.remove("sy")
document.querySelector("#sn-4").classList.remove("sy")
document.querySelector("#sn-5").classList.remove("sy")



    
    setmode("dark")

    document.querySelector("#sn-1").classList.add("sr")
    document.querySelector("#sn-2").classList.add("sr")
    document.querySelector("#sn-3").classList.add("sr")
    document.querySelector("#sn-4").classList.add("sr")
    document.querySelector("#sn-5").classList.add("sr")




      document.body.style.background =" rgba(255, 0, 0, 0.850)"
      document.body.style.color="white"
      document.querySelector("#mybox").style.color = "white"
      
      showAlert( " Red Dark mode is Enable","success");
      

    
    
    

  }






  
  const toggleMode = ()=>{
    if(mode ==="light"){
      setmode("dark")
      document.title = "TextUtils- Dark Mode"
      document.body.style.background =" #042743"
      document.body.style.color="white"
      document.querySelector("#mybox").style.color="white" 
      document.getElementById("my").innerText = "Disable DarkMode"
      showAlert( "Dark mode is Enable","success");
      
// setInterval(() => {
  //document.title = "TextUtlis is amazing"

//}, 2000);
//setInterval(() => {
//  document.title = "Install  TextUtlis "
//}, 1500);
    }
    else{
      setmode("light");
      document.title = "TextUtils- Light Mode"
      document.body.style.background ="white"
      document.body.style.color="black"
      document.getElementById("mybox").style.color="black"
      document.getElementById("my").innerText = "Enable DarkMode"
      showAlert( "Light mode is Enable","success");
    }
  }
  return (
    

  <>
 {/*<Router> */}
  <Navbar title="TextUtils"  gMode={gMode} yMode={yMode} redMode={redMode}  toggleMode={toggleMode} mode={mode} aboutText="About"/>
  <Alert alert={alert}/>


   
{/*<Routes> */}
         {/* <Route path="/about" element={<About toggleMode={toggleMode}  showAlert={showAlert} mode={mode}  />}> 
            
          </Route>
          
          <Route path="/" element =  */} 
          
          < Textform   showAlert={showAlert} mode={mode} heading ="Enter the text analyze" />
            { /* } >
          
            
          </Route>
        </Routes>

        </*Router> */}
  </>
  );
}

export default App;


