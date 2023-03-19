import React, { useEffect, useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import p111 from "./p4.jpg"
import p9 from "./p9.jpg"
import p1 from "./p1.jpg"

import p2 from "./p2.jpg"

import p3 from "./p3.jpg"

import p6 from "./p6.jpg"
import p7 from "./p7.jpg"
import p8 from "./p8.jpg"

import p10 from "./p10.jpg"
import p11 from "./p11.jpg"


import "./Favourite.css"
import { CloudUploadFill,X, ChatDots,PencilSquare,Trash} from 'bootstrap-icons-react';
import Comment from "./Comment.jsx"

import {auth,provider}  from "../Login/Config.js"
import {signInWithPopup} from "firebase/auth"
import Home from "../Home/Home.js"

import Login from '../Login/Login.js';
import { ChatFill, ChatLeftDots} from 'bootstrap-icons-react';

import { } from 'bootstrap-icons-react';
const api_base = "https://css-website-nqu8.onrender.com/";
const timestamp = 167822137944;
const date = new Date(timestamp);
console.log(typeof timestamp)
const Favourite = () => {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [date,setDate]=useState("")
  const [value,setValue] = useState('')
  const [newAuthor,setAuthor]=useState("")
  const [popupActiveu, setPopupActiveu] = useState(false);
  const [url,setUrl]=useState('')
  const pic=[p1,p2,p3,p7,p8,p9,p10,p11,p1,p2,p3];
  
  const [avatarnum,setAvatarNum]=useState("")
  const [updates,setupdates]=useState("")
  


  const update = async(id)=>

  {
  
    
    const data = await fetch(api_base + "/todo/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: updates, // the updated text
      }),
    }).then((res) => res.json());
    
    // handle the response data
    if (data.error) {
      // handle error
    } else {
      // update the todo item in the UI
      const updatedTodos = todos.map(todo => {
        if (todo._id === id) {
          // replace the old todo with the updated one
          return data;
        } else {
          return todo;
        }
      });
    setupdates("")
    setDate("");
      setTodos(updatedTodos);
      setPopupActiveu(false);
    }
    
  
  }
  const handleClick =()=>{
   
    alert("clicked")
    signInWithPopup(auth,provider).then(
      (user)=>{
        console.log(user)
          localStorage.setItem("user",JSON.stringify(user))
          localStorage.setItem("email",user.user.email)
          setValue(user.user.email)
          
          setAuthor(user.user.displayName)
    setUrl(user.user.photoURL)


       
      }
  ).catch((e)=>console.log()) 

  
     
  }

  const [load,setLoad]=useState(true)

const [loading,setLoading]=useState(true)

  //create new todo
  const [newTodo, setNewTodo] = useState("");
  const [user,setuser]=useState("")
  
 
  // on mountdidmount change effect
  //e.target.files is an array

  useEffect(() => {
    GetTodos();
    async function fetchTodos() {
      const response = await fetch('/todos');
      const data = await response.json();
      setTodos(data);
    }
    fetchTodos();
  }, []);
  const GetTodos = () => {
    //pass the json string
    //console.log("here1")
    setLoading(true);
    fetch("https://css-website-nqu8.onrender.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
      setLoading(false);
  };
  const deleteTodo = async (id) => {
    setLoading(true);
    const data = await fetch( "https://css-website-nqu8.onrender.com/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
    setLoading(false);
    setTodos((todos) => todos.filter((todo) => todo._id !== data.result._id));
  };
 

  
  const addTodo = async () => {
    setLoading(true);
    
    const data = await fetch("https://css-website-nqu8.onrender.com/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
        author:newAuthor,
        avatar:pic[avatarnum]
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);
setupdates('')
setLoading(false);
setAvatarNum("")
    setPopupActive(false);
    setNewTodo("");
    
  };
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);
  
  function covertToBase64(e) {
    //console.log(e.target.files[0]);
    setLoad(true)
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
       // console.log(reader.result); //base64encoded string  
        setImage(reader.result);
        setLoad(false)
    };
    reader.onerror = error => {
        console.log("Error: ", error);
        setLoad(false)
    };
}


useEffect(()=>{
  
  getImage()

  setLoad(false)

},[allImage])
function getImage() {
 // console.log("called");
 setLoad(true)
  fetch("https://css-website-nqu8.onrender.com/get-image", {
    method: "GET",
  })
    .then((res) => {
      //console.log("response headers:", res.headers);
      setLoad(false)
      return res.json();
      
    })
    .then((data) => {
     // console.log("getImage data:", data);
      setAllImage(data.data);
      setLoad(false)
    })
    .catch((error) => {
      console.error(error);
      setLoad(false)
    });
    
}


function uploadImage() {
 

  console.log("clicked")
  fetch("https://css-website-nqu8.onrender.com/upload-image", {
      method: "POST",
      crossDomain: true,
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
          base64: image
      })
  }).then((res) => {//console.log("p1") ;  
    if(image!=null)
  res.json();
  setImage("")
 
}).then((data) => {console.log(data); })

}


return (
<div className="d">
{value===''||value===null?<>
<div  onClick={handleClick}>

 
    <center  className="cent" style={{backgroundColor:'black',opacity:'1',height:'100vh',width:'100vw'}}>
        
         

      <GoogleIcon  sx={{fontSize:'100px' ,backgroundColor:'green',border:'8px solid red',borderRadius:'50px',color:'orange',right:'50vw',}} onClick={handleClick} className="logo floating"/>
      
      </center>

  </div>




























</>:
<>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:'black',color:'black'}}>
        <h5 class="modal-title" id="exampleModalLabel" >Update Your Comment </h5>
        
      </div>
      <div class="modal-body" >
        
      <input style={{padding:'10px'}}
              type="text"
              className="add-todo-input"
              onChange={(e) => setupdates(e.target.value)}
              value={updates}
              placeholder="update comment only once at a time...."
              
            />
              
        { updates===""   ? "":
            <div className="update button" style={{padding:'10px',margin:'10px',color:'white',width:'250px'}} onClick={() => {
              console.log(date);update(date)}}>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
             Update Comment
        </button>
              
            </div>
}
        
       
      </div>
     
    </div>
  </div>
</div>
    
<div className="App">



{loading ? <>



 loading .......

</>:<>

     <center ><span ><h1 style={{borderTop:'2px solid white',borderBottom:'2px solid white',width:'50vw',marginLeft:'0vw'}}>Comments({todos.length})   and  Gallery({allImage.length})  <a href="#imges" className="tools"><ArrowCircleDownIcon style={{marginBottom:'15px',visibility: 'visible',color:'orange'}}/></a> </h1>
      
     
     
     </span>
     
 



     
     
   </center>

   
  <center> {/*add comment section  */}
                 <div className="commentf" style={{pading:'20px',gap:'10px',left:'20px',color:'black',width:'100px'}} > </div>
                 </center>


                 <div class="media" style={{padding:'60px'}}>
                   
                    <div class="media-body">
                       
                              <div className="space" style={{padding:'20px',left:'10px'}}></div>
                        
                            <div className="comme"  style={{padding:'0px',left:'10px'}}>
                            <input
              type="text"
              className="add-todo-input"
              onChange={(e) => {setNewTodo(e.target.value); }}
              value={newTodo}
              placeholder="Type Your Comment here...."
              style={{fontSize:'larger',fontWeight:'bolder',padding:'10px',width:'80vw'}}
            /> 
            <div className="space" style={{margin:'20px'}}></div>
            <div className="magic-avatar" >
            <input    onChange={(e) => {setAvatarNum(e.target.value); }}
              value={avatarnum}
            
            placeholder="A number between 0 to 9 for magic avatar...." type="number" id="quantity" name="quantity" min="0" max="9" style={{fontSize:'larger',fontWeight:'bolder',padding:'10px',width:'30vw',margin:'10px'}}/>
            </div>
         

                   { newTodo==="" ||avatarnum===""||avatarnum>9  ? "":
            <div className="button" style={{padding:'10px',margin:'10px' ,backgroundColor:'white',color:'black',width:'50%',marginLeft:'250px'}}  onClick={addTodo}>
             Post Comment 
             
            </div>
}       
                         </div>
                        
                       
                        
                    </div>
                </div>

  {todos.length>0?(todos.map((todo)=>{
  return (
      <div style={{display:'flex',width:'100%',height:'auto ',backgroundColor:'white',padding:'1rem',borderBottom:'1px solid black',borderRadius:'2px',color:"black"}}>
      <img src={todo.avatar} alt="no Image" style = {{width:'60px',height:'60px',borderRadius:'1000rem'}}  onClick={() => {  setDate(todo._id);console.log(todo._id);}}data-toggle="modal" data-target="#exampleModal"/>
        <div style={{paddingLeft:'1rem',width:'100%'}}>
            <div style={{display:'flex',gap:'1rem',marginBottom:'1px',alignItems:''}}>
                <p style={{fontWeight:'bold',fontSize:"1.2rem",color:"#008B8B"}}>{todo.author}</p>
                <p style={{color:'gray',fontWeight:'bold'}}>posted at {new Date(parseInt(todo.timestamp)).toLocaleString()}</p>
             
            </div>
            <p style={{color:"gray" ,display:'flex',width:'80vw'}} >{todo.text}</p>
            {/*<div style={{display:'flex',width:'90%',marginTop:'1.6rem',flexDirection:'row-reverse',gap:'1rem',fontSize:'small'}}>
                <PencilSquare  style={{fontSize:'small'}}/>
                <Trash style={{fontSize:'10px'}} />
  </div>*/}
   <div className="iconss" style={{display:'flex',width:'100%',flexDirection:'row-reverse',fontSize:'30px',fontWeight:'bold',}}> 
     
     <div className="X"  style={{backgroundColor:'white',borderRadius:'40px',height:'40px',width:'40px'}}  onClick={() => deleteTodo(todo._id)}>X</div>
 </div>
  
        </div>
    </div>


   ) }
  
  
  
  )):<div>No Comments</div>}


</> }
{load ? <>loadings....</>:<>
 
  <div className="wrapper container  text-center" >
            <div className="inner text-center">
              <br />
               
              { image!=="" ? <button  type="button" class="btn btn-outline-info" onClick={uploadImage}>Upload</button>:"" }
                <br />
                <br />
              
                
<br/>    
<div className="imge container"  id="imges"style={{height:'300px',width:'300px'}}>
{image ==="" || image == null ? 
  
  <div className="preview">
    <img src={p111} style={{height:'300px',width:'300px',padding:'30px'}}/>
  </div>



: <img style={{height:'300px',width:'300px',padding:'30px'}} src={image} />}
</div>
<center style={{position:'center',padding:'10px'}}>
<input
                   
                   type="file"
                   onChange={covertToBase64}
                   
               /> </center>

<div className="container text-center load" >
<div className="row">
                {allImage.map(data=>{
                  
                    return(
                          
                             <div className="col-md-4">
                             { data.image!="" ? <img  style={{width:'300px',height:'300px',padding:'20px',display:'flex',flexDirection:'column' }}src={data.image} alt="Nopic"/> :""}
                       
                         
                        </div>
                        
                       
                    )
                })}
                </div>
                 </div>

            </div>
            </div>



            </>}





            </div>


</>
}
</div>

)




}


export default Favourite
