import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/material';
const Avatar = (props) => {
  return (
    <>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:'black'}}>
        <h5 class="modal-title" id="exampleModalLabel" >Senior Coordinator</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{color:'white'}}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{backgroundColor:'grey'}}>
        
      <h1 style={{color:'black'}}>{props.name}</h1>
      <h2 style={{color:'white',opacity:'0.6'}}>"{props.motto}"</h2>
        
        
         <div className="contact"  style={{fontSize:'40px',paddingLeft:'50px'}}>
         
         <div className="p" style={{paddingRight:'250px',fontSize:'40px'}}>
        <a style={{paddingRight:'100px',fontSize:'40px'}} href={props.url} target="_blank" style={{color:'#87CEFA',}}><LinkedInIcon  sx={{fontSize:40}} /></a>
        </div>
          
        <div className="p" style={{paddingRight:'125px',fontSize:'40px'}}>
        <a style={{paddingRight:'100px',fontSize:'40px'}} href={props.url} target="_blank" style={{color:'#00BFFF',}}><TwitterIcon  sx={{fontSize:40}} /></a>
        </div>
        <div className="p">
        <a href={props.url} target="_blank" style={{color:'black'}}><GitHubIcon  sx={{fontSize:40}}  /></a>
        </div>
        
        </div>
        <div className="modal-footer" ></div>
        
      </div>
     
    </div>
  </div>
</div>
    
    </>
  )
}

export default Avatar
