import React, { useState,} from 'react'
import Mini_vid from "./components/Mini_vid"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/js/src/carousel.js"
import Nav from './components/Nav'
import Footer from './components/Footer'
import {Router,Routes,Route,Link} from 'react-router-dom'

function App() {
  const [form, setform] = useState("active")
  return (
    <>
    <div style={{backgroundColor:"black", color:"white"}} className="container-fluid">
     <div className="col-12">
      <Nav/>
       <Mini_vid/>
    <Routes>
    <Route path="/" element={<Mini_vid/>}/>
    </Routes>
       <Footer/>
    </div>
    </div> 
   
    </>
  )
}



export default App;
