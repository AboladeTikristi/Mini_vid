//http://www.omdbapi.com/?i=tt3896198&apikey=c7e3c7b8
//"https://imdb-api.com/en/API/Top250Movies/k_d6a0lkoi"
//https://imdb-api.com/en/API/Top250Movies/k_lv17lnyd
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Footer from './Footer'
function Mini_vid() {
    //const [num, setnum] = useState(0)
    const [allMovies, setallMovies] = useState([])
    const [error, seterror] = useState("")
    const url="https://imdb-api.com/en/API/Top250Movies/k_lv17lnyd"
    const [isloading, setisloading] = useState(true)
    
    useEffect(()=>{
        console.log("yoyoyo")
        makeRequest()
    },[])
    
    const makeRequest=()=>{
        axios.get(url).then((res)=>{
            if (res.status===200) {
                
           
            console.log(res.data)
            setallMovies(res.data.items) 
            setisloading(false)
                
        }
            else{
                console.log("error ocurred")
            }
        }).catch((err)=>{
            seterror(err)
        })

    }
    
//   function changeBackground(e) {
//     e.target.className+= "shadow";
//   }
    const hover={
        width: "15rem",
        height:"15rem",
        "&:hover": {
            backgroundColor: "red !important",
            filter:"brightness(50px)"
          },
    }
    const slideImages = [
        "https://www.filmmakersacademy.com/wp-content/uploads/2020/01/EOQ_tMzWAAIWpoV-1280x720.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBKJxpQySsg8XWSgg9kOjyvovaVXOdlO7IA&usqp=CAU",
        "https://www.themoviedb.org/t/p/w220_and_h330_face/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
        ];
  return (
  <>

    {isloading? <div>
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
        </div>:
        <div style={{ color:"white"}} className="container-fluid">
        <div className="row">
        <Slide>

              {slideImages.map((each, index)=> (
               <img style={{height:"500px",filter:"brightness(50%)"}}className="w-100"src={each} alt="" />
              ))}
              
          
        </Slide>
        <span style={{position:"absolute",top:"200px",left:"700px",color:"white"}}>
           <h1>Ancient And Current Movies, <br />TV Shows</h1>
           <h4>Watch Anywhere</h4>
        </span>
            
       </div>
       <div class="row ms-5 mt-3 ">
       {allMovies.map((vid)=>(

          <div className=" col-1 col-sm-1 col-md-3 ms-2 bg-image hover-zoom"   key={vid.id} style={hover}>
            <img src={vid.image} className="card-img-top w-75 h-50" alt="..."/>
            <div className="card-body">
                <span className="card-text">
                <span><b>{vid.fullTitle}</b></span>
                 <br/>
                 <span style={{fontSize:"10px"}}>{vid.crew}</span>
                </span>
            </div>
           
            </div> 

        ))}
       </div> 
     
       </div>
    }
  
 
  </>
  )
}

export default Mini_vid