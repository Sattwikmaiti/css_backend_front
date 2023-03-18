import React from "react";
import "./Home.css";
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';
import sub from "./pogo.jpeg"
import { useNavigate,} from "react-router-dom";
import { useState ,useEffect} from "react";
import p1 from "../images/p2.png";
import p2 from "../images/p1.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import subrata from "../images/subrata.jpeg"
import sajal from "../images/sajal.jpeg"
import parag from "../images/parag.jpeg"
import animesh from "../images/animesh.jpeg"
import pp1 from "../images/1.png"
import pp2 from "../images/2.png"
import pp3 from "../images/3.png"
import p from "./1.png";
import GitHubIcon from '@mui/icons-material/GitHub';

import { Grid } from "@mui/material";

const Home = () => { const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [duration, setDuration] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(end);
      setStart(end);
      setEnd(start);
    }, duration * 1000 + 100); // add 100ms delay to prevent flicker

    return () => {
      clearInterval(intervalId);
    };
  }, [start, end, duration]);
  
  function reveal() {
    
  function lol (){
   
    let count = document.querySelectorAll(".counter");
  
   
    count.forEach((val)=>
    {
    
      let str=0;
      let end=parseInt(val.getAttribute("data-val"));
    
     
      
      let counter=setInterval(function(){
        str+=1;
        val.textContent=str;
        if(str===end)
        {
          clearInterval(counter);
          
          
        }
      },400)
    })
  }
  lol()
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
 
  
  window.addEventListener("scroll", reveal);
 

  
  

  
  return (
    <> 
      <div className="imageslider container  ">
        
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-wrap="true"
          data-interval="1000"

        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="cara d-block w-100" src={p3} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="cara d-block w-100" src={p2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="cara d-block w-100" src={p3} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class=" cara d-block w-100" src={p4} alt="Fourth slide" />
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className=" reveal motto " style={{height:'200px'}}>
        <h2>OUR MOTTO</h2>
        <p style={{ fontSize: "30px" }}>
        <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'Sometimes it is the people no one can  imagine anything of who do the things no one can imagine',
    1000,
   
    ]}
    speed={2} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '40px' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
        </p>
      </div>

   <center>
      <div className=" reveal body">
        <h1 className="black-lives-matter"># COMPUTER SCIENCE SOCIETY </h1>
      </div>
      </center>
 <center >
    <h3 style={{marginTop:'100px',}}>
      WE 
    </h3>
  </center>
<div className="box" style={{display:'flex',justifyContent:'space-around',flexDirection:'row',padding:'0px',backgroundColor:'black' ,boxShadow:'2px 2px 2px 2px solid white'}}>
 
  <div className="di">
      <center>
        <div className="ico " style={{padding:'70px',color:'white'}}>
            <GitHubIcon className="floating" style={{fontSize:'50px',left:'175px',translateY:'(12px)'}} />
        </div>
    
         <div className="names">
          EVENTS
         </div>
         <CountUp start={start} end={end} duration={duration} useEasing={true} />
        
      </center>
  </div>
  <div className="di">
      <center>
        <div className="ico" style={{padding:'70px',color:'white'}}>
            <GitHubIcon  className="floating" style={{fontSize:'50px',left:'600px'}} />
        </div>
    
         <div className="names">
          EVENTS
         </div>
         <CountUp start={start} end={end} duration={duration} useEasing={true} />
        
      </center>
  </div>
  <div className="di">
      <center>
        <div className="ico" style={{padding:'70px',color:'white'}}>
            <GitHubIcon  className="floating"  style={{fontSize:'50px',left:'1020px'}} />
        </div>
    
         <div className="names">
          EVENTS
         </div>
         <h1>
         <CountUp start={start} end={end} duration={duration} useEasing={true} />
      </h1>
        
      </center>
  </div>
</div>
  
      <div className="space" style={{padding:'100px'}}></div>

    <div className="container reveal services part" >
        <div
          className="lol"
          style={{ fontSize: "20px", fontWeight: "bolder", color: "white" , backgroundColor:'black',height:'160px',width:'160px',borderRadius:'20px'}}
        > 
        <div style={{display:'flex',justifyContent:'center',top:'20px',margin:'30px',borderRadius:'20px'}}>
        OUR &nbsp;FACULTY &nbsp; ADVISOR
        </div>
         
        </div>
        
<div className="container reveal floating" style={{padding:'0px',marginLeft:'130px',height:'600px',width:'500px'}}> 

    <div className="grid-1" style={{display:'flex',flexDirection:'row',padding:'10px'}}>

      <div className="obj1" style={{margin:'10px'}}>
      <center>
  <img src={sub} alt="Avatar" className="image"/>
  <div className="middle">
    <div className ="text">Subrata Nandi</div>
  </div></center>
      </div>
      <div className="obj1"  style={{margin:'10px'}}>
      <center>
  <img src={sub} alt="Avatar" className="image"/>
  <div className="middle">
    <div className ="text">Subrata Nandi</div>
  </div></center>
      </div>
    </div>
    <div className="grid-1" style={{display:'flex',flexDirection:'row',}}>

<div className="obj1"  >
<center>
  <img src={sub} alt="Avatar" className="image"/>
  <div className="middle">
    <div className ="text">Subrata Nandi</div>
  </div></center>
</div>
<div className="obj1">
<center>
  <img src={sub} alt="Avatar" className="image" />
  <div className="middle">
    <div className ="text">Subrata Nandi</div>
  </div></center>
</div>
</div>
 
 
 
    </div>

    

    
      </div>  
      <div className="reveal  container" style={{display:'flex',flexDirection:'row',height:'300px',width:'400px',marginTop:'400px',marginBottom:'50px'}}>
      <div class="blockquote-wrapper">
  <div class="blockquote">
    <h1>
    Sometimes it is the people no one can <span style={{color:'#2F4F4F'}}> imagine anything of</span> who do the things no one can imagine<span style={{color:'#778899'}}>.</span>
     </h1>
    <h4> Alan Turing<br/><em>Father of Modern Computers</em></h4>
    
  </div>
</div>
      </div>

      <div className="reveal MAP">
        <div
          className="g"
          style={{
            fontSize: "35px",
            fontWeight: "bolder",
            color: "white",
            padding: "10px 20px 0 500px",
          }}
        >
          GET IN TOUCH
        </div>

        <img
          src={p}
          style={{
            height: "500px ",
            width: "80vw",
            padding: "0px 0px 0 200px",
          }}
        />
      </div>
    </>
  );
};

export default Home;
