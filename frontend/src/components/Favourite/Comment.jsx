import React from 'react'
import im from "./p9.png"
import './Favourite.css'
import { CloudUploadFill,X, ChatDots,PencilSquare} from 'bootstrap-icons-react';
import { Trash} from 'bootstrap-icons-react';
import {ImCross} from 'react-icons/im'
const Comment = ({author,postedOn,comment,keyid}) => {
    
  return (
    <div style={{display:'flex',width:'100%',height:'auto ',backgroundColor:'white',padding:'1rem',borderBottom:'1px solid black',borderRadius:'2px',color:"black"}}>
      <img src={im} alt="no Image" style = {{width:'60px',height:'60px',borderRadius:'1000rem'}} />
        <div style={{paddingLeft:'1rem',width:'100%'}}>
            <div style={{display:'flex',gap:'1rem',marginBottom:'1px',alignItems:''}}>
                <p style={{fontWeight:'bold',fontSize:"1.2rem",color:"#008B8B"}}>{author}</p>
                <p style={{color:'gray',fontWeight:'bold'}}>posted at {postedOn}</p>
             
            </div>
            <p style={{color:"gray" ,display:'flex',width:'80vw'}} >{comment}</p>
            {/*<div style={{display:'flex',width:'90%',marginTop:'1.6rem',flexDirection:'row-reverse',gap:'1rem',fontSize:'small'}}>
                <PencilSquare  style={{fontSize:'small'}}/>
                <Trash style={{fontSize:'10px'}} />
  </div>*/}
   <div className="iconss" style={{display:'flex',width:'100%',flexDirection:'row-reverse',fontSize:'30px',fontWeight:'bold',}}> 
     
     <div className="X"  style={{backgroundColor:'white',borderRadius:'40px',height:'40px',width:'40px'}}  >X</div>
 </div>
  
        </div>
    </div>
  )
}

export default Comment
