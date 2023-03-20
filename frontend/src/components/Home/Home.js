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
import p from "./1.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';

import { Grid } from "@mui/material";

const Home = () => { 
  const [count, setCount] = useState(0);
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
  


  const [count1, setCount1] = useState(0);
  const [start1, setStart1] = useState(0);
  const [end1, setEnd1] = useState(22);
  const [duration1, setDuration1] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount1(end1);
      setStart1(end1);
      setEnd1(start1);
    }, duration1 * 1000 + 100); // add 100ms delay to prevent flicker

    return () => {
      clearInterval(intervalId);
    };
  }, [start1, end1, duration1]);
  
  function reveal() {
 
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
          data-interval="3000"

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
      <div className="space" style={{ padding:'30px',}}></div>



      <div className="  motto " style={{height:'auto',padding:'10em',width:'100vw'}}>
        <h2 style={{fontSize:'50px',borderTop:'2px solid white',borderBottom:'2px solid white'}}>OUR MOTTO</h2>
        <p style={{ fontSize: "5vh" }}>
        <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'Sometimes it is the people no one can  imagine anything of who do the things no one can imagine.',
    1000,
  
   
    ]}
    speed={1} // Custom Speed from 1-99 - Default Speed: 20
    style={{ fontSize: '5vh' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
        </p>
      </div>

      <div className="space" style={{ padding:'30px',}}></div>

   <center>
      <div className=" reveal body" >
        <h1 className="black-lives-matter"># COMPUTER SCIENCE SOCIETY </h1>
      </div>
      </center>

     
  <div className="  motto " style={{height:'auto',width:'100vw'}}>
        <h2 style={{fontSize:'50px',borderTop:'2px solid white',borderBottom:'2px solid white'}}>WE </h2></div>
      <div className="wrapp">
 
  <center>
    <div className="grid" style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
          <div className="container1">
                  <div >
                    <center>

                   
                    <div className="iconss" style={{height:'30vh',backgroundColor:'grey',paddingRight:'10vw'}}>
                     <GitHubIcon  className="git floating"style={{alignSelf:'center',justifyContent:'center'}} />
                    </div>
                     <div className="legend"   style={{borderTop:'2px solid white',borderBottom:'2px solid white',height:'10%',fontWeight:'bold'}}>
                        EVENTS
                     </div>
                    <div className="data" style={{fontSize:'3em'}}>
                    <CountUp start={start} end={end} duration={duration} useEasing={true} />
                    </div>
                    </center>

                  </div>
          </div>
          <div className="container1">
          <div >
                    <center>

                   
                    <div className="iconss " style={{height:'30vh',backgroundColor:'grey' ,paddingRight:'10vw'}}>
                     <GitHubIcon className="git floating" style={{alignSelf:'center',justifyContent:'center'}} />
                    </div>
                     <div className="legend"   style={{borderTop:'2px solid white',borderBottom:'2px solid white',height:'10%',fontWeight:'bold'}}>
                        SINCE
                     </div>
                    <div className="data" style={{fontSize:'3em'}}>
                    2021
                    </div>
                    </center>

                  </div>
          </div>

             <div className="container1">
             <div >
                    <center>

                   
                    <div className="iconss" style={{height:'30vh',backgroundColor:'grey',paddingRight:'10vw'}}>
                     <GitHubIcon  className="git floating" style={{alignSelf:'center',justifyContent:'center',marginRight:'10vw'}} />
                    </div>
                     <div className="legend"   style={{borderTop:'2px solid white',borderBottom:'2px solid white',height:'10%',fontWeight:'bold'}}>
                        MEMBERS
                     </div>
                    <div className="data" style={{fontSize:'3em'}}>
                    <CountUp start={start1} end={end1} duration={duration1} useEasing={true} />
                    </div>
                    </center>

                  </div>
             </div>
    </div>
  </center>
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
      <div className="space" style={{padding:'100px'}}></div>
      
   
      <div className="reveal  container gapp" style={{display:'flex',flexDirection:'row',height:'300px',width:'auto',marginTop:'200px',marginBottom:'50px',fontFamily: 'Lora, serif',marginLeft:'auto'}}>
      <div class="blockquote-wrapper">
  <div class="blockquote">
    <h1 style={{fontFamily: 'Lora, serif'}}>
    Sometimes it is the people no one can <span style={{color:'#2F4F4F',fontFamily: 'Lora, serif'}}> imagine anything of</span> who do the things no one can imagine<span style={{color:'#778899'}}>.</span>
     </h1>
    <h4 style={{borderBottom:'2px solid white'}}> Alan Turing<br/><em>Father of Modern Computers</em></h4>
    
  </div>
</div>
      </div>
      <div className="  motto " style={{height:'auto',width:'100vw'}}>
        <h2 style={{fontSize:'50px',borderTop:'2px solid white',borderBottom:'2px solid white'}}>CONTACT US </h2></div>

  
      <div className="reveal  container"  style={{height:'80vh',display:'flex'}}>
        <div className="grid" >
        <div className="c1" style={{backgroundColor:'#F0F8FF',height:'80px',color:'black',fontWeight:'bold'}}>
           <div className="g1" style={{fontSize:'20px',paddingLeft:'5px'}}>
           ABHISHEK BASU (PRESIDENT)
           </div>
           <div className="g2" style={{fontSize:'20px',paddingLeft:'5px'}}  >
            CONTACT : 9712245467
           </div>
          </div> 
          <div className="c1" style={{backgroundColor:'grey',height:'80px',color:'#F0F8FF',fontWeight:'bold'}}>
           <div className="g1" style={{fontSize:'20px',paddingLeft:'5px'}}>
           ABHISHEK BASU (VICE PRESIDENT)
           </div>
           <div className="g2" style={{fontSize:'20px',paddingLeft:'5px'}}  >
            CONTACT : 9712245467
           </div>
          </div> 
          <div className="c1" style={{backgroundColor:'#F0F8FF',height:'80px',color:'black',fontWeight:'bold'}}>
           <div className="g1" style={{fontSize:'20px',paddingLeft:'5px'}}>
           ABHISHEK BASU (PRESIDENT)
           </div>
           <div className="g2" style={{fontSize:'20px',paddingLeft:'5px'}}  >
            CONTACT : 9712245467
           </div>
          </div> 
          
          <div className="c1" style={{backgroundColor:'grey',height:'80px',color:'#F0F8FF',fontWeight:'bold'}}>
           <div className="g1" style={{fontSize:'20px',paddingLeft:'5px'}}>
           ABHISHEK BASU (PRESIDENT)
           </div>
           <div className="g2" style={{fontSize:'20px',paddingLeft:'5px'}}  >
            CONTACT : 9712245467
           </div>
          </div> 
        </div>
         <div className="grid-2">
          <img src={p}  style={{height:'70vh',marginLeft:'10px',width:'50vw'}}/>

         </div>
      </div>
     
 
    </>
  );
};

export default Home;
