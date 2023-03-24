import React from 'react'
import {useNavigate}  from 'react-router-dom'
import {useState} from 'react'
import './Navbar.css'
import logo from "./pogo.jpeg"
const Navbar = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
    const navigate=useNavigate();
    const [isSignUp, setSignUp] = useState("");
    window.onscroll = function() {myFunction()};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
    window.addEventListener('scroll', function() {
      const offset = window.pageYOffset;
      
      if(offset > 75)
       setSignUp('scroll')
      else 
        setSignUp('')
    });
  return (
    <div style={{paddingBottom:'90px'}}>
    
     <div className="first">
       <nav className="f">
          <div className="tog">
  <span onClick={()=>navigate('/Home')}><img src={logo} style={{height:'60px',width:'60px',borderRadius:'60px',border:'2px solid violet'}} /> <h style={{color:'black',marginLeft:'20px',fontWeight:'bold',
fontFamily: 'Lora, serif'
}}>
 
    
    </h></span>
  
  </div>
  <div className="media">
  <ul className="nav">
    <li onClick={()=>navigate('/Alumini')}>Alumini</li>

    <li onClick={()=>navigate('/Members')}>Members</li>
    <li onClick={()=>navigate('/Events')}>Events</li>
    <li onClick={()=>navigate('/Faculty')}>Faculty</li>
    <li onClick={()=>navigate('/Favourite')}>Fav-Point</li>
  </ul>
 
  </div>
 
  
</nav>
</div>
<div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
    </div>
  )
}

export default Navbar
