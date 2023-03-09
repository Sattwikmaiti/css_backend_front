import React, { useEffect, useState } from 'react'

import p2 from "./p4.jpg"
import "./Favourite.css"
import { ChatFill, ChatLeftDots, Trash} from 'bootstrap-icons-react';

import { CloudUploadFill,X, ChatDots} from 'bootstrap-icons-react';
const api_base = "http://localhost:3001";
const timestamp = 167822137944;
const date = new Date(timestamp);
console.log(typeof timestamp)
const Favourite = () => {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [date,setDate]=useState("")

 
  //create new todo
  const [newTodo, setNewTodo] = useState("");
  const [newAuthor, setnewAuthor] = useState("");
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
    console.log("here1")
    fetch("http://localhost:3005/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeTodo = async (id) => {
    const data = await fetch("http://localhost:3005/todo/complete/" + id).then((res) =>
      res.json()
    );

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
        }

        return todo;
      })
    );
  };

  const addTodo = async () => {
    const data = await fetch("http://localhost:3005/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
        author:newAuthor
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);

    setPopupActive(false);
    setNewTodo("");
    setnewAuthor("")
  };
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);
  
  function covertToBase64(e) {
    //console.log(e.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
       // console.log(reader.result); //base64encoded string  
        setImage(reader.result);
    };
    reader.onerror = error => {
        console.log("Error: ", error);
    };
}


useEffect(()=>{
  getImage()
},[allImage])
function getImage() {
 // console.log("called");
  fetch("http://localhost:3005/get-image", {
    method: "GET",
  })
    .then((res) => {
      //console.log("response headers:", res.headers);
      return res.json();
    })
    .then((data) => {
     // console.log("getImage data:", data);
      setAllImage(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
}


function uploadImage() {


  console.log("clicked")
  fetch("http://localhost:3005/upload-image", {
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
}).then((data) => {console.log(data);})
}
  return (
    <>
  <div className="App">
  <center><h1 style={{color:'white',padding:'10px'}}> Gallery and Comments </h1> </center>
  

    <div className="todos">
      {todos.length > 0 ? (
        todos.map((todo) => (
          
          <div
            className={"todo" + (todo.complete ? " is-complete" : "")}
            key={todo._id}
            //onClick={() => completeTodo(todo._id)}
          >
              <center >
              <div className="author" style={{padding:'7px', overflowWrap: 'break-word',display:'center',fontSize:'20px'}}>{todo.author}</div></center>
              <br/>
              <br/>
              <div style={{padding:'10px'}}></div>
            <div className="text" style={{height:'auto',width:'800px', overflowWrap: 'break-word',padding:'10px'}}>{todo.text}</div>
             
            <div className="timestamp" style={{padding:'15px'}}>
    {new Date( parseInt(todo.timestamp)).toLocaleString() }
    </div>
           {/**  <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>
           <Trash style={{fontSize:'40px'}}/>
            </div>*/}
          </div>
        ))
      ) : (
        <p>No Comments</p>
      )}
    </div>

    <div className="addPopup" onClick={() => setPopupActive(true)}>
     <ChatLeftDots className="io" />
    </div>

    {popupActive ? (
      <div className="popup">
        
        <div className="closePopup" onClick={() => setPopupActive(false)}>
          <X style={{backgroundColor:'grey'}}/>
        </div>
        <div className="content">
          <h3>Comment </h3>
          
          <input
            type="text"
            className="add-todo-input name"
            onChange={(e) => setnewAuthor(e.target.value)}
            value={newAuthor}
            placeholder="Enter full Name..."
            
          />
          <div style={{padding:'10px'}}></div>
          <input
            type="text"
            className="add-todo-input"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
            placeholder="Comment..."
            
          />
      { newTodo===""  || newAuthor==="" ? "":
          <div className="button" style={{padding:'10px',margin:'10px'}}onClick={addTodo}>
           Post Comment 
           
          </div>
}
        </div>
      </div>
    ) : (
      ""
    )}
  <div className="wrapper container  text-center" >
            <div className="inner text-center">
              <br />
               
              { image!="" ? <button  type="button" class="btn btn-outline-info" onClick={uploadImage}>Upload</button>:"" }
                <br />
                <br />
              
                
<br/>    
<div className="imge container" style={{height:'300px',width:'300px'}}>
{image ==="" || image == null ? 
  
  <div className="preview">
    <img src={p2} style={{height:'300px',width:'300px',padding:'30px'}}/>
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
            </div>

        </>
  
  )
}


export default Favourite
