import React from 'react'
import {useNavigate}  from 'react-router-dom'
import {useState} from 'react'
import './Navbar.css'
import logo from "./logo.png"
const Navbar = () => {
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
    <div>
  
       <nav className={`${isSignUp}`}>
  <span onClick={()=>navigate('/Home')}><img src={logo} style={{height:'80px',width:'100px'}} /></span>

  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
  <div className="1">
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
  )
}

export default Navbar
