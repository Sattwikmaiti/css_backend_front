const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl =
  "mongodb+srv://maitisattwik:Sattwik%402002@cluster0images.k7uxezm.mongodb.net/?retryWrites=true&w=majority";
  ;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));




const Images =require('./imageSchema');

const Todo = require('./Todo');
app.use((err, req, res, next) => {
	if (err.name === 'DocumentNotFoundError') {
	  res.status(404).json({ error: 'Document not found' });
	} else {
	  res.status(500).json({ error: 'Internal server error' });
	}
  });
  
app.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});
//create a new data collection
app.post('/todo/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text,
		timestamp:req.body.timestamp,
		author:req.body.author
	})

	todo.save();

	res.json(todo);
});

app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);
   if(result!=null)
	res.json({result});
});

app.get('/todo/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);
  if(todo!==null)

  {
	
   
	todo.complete = !todo.complete;

	todo.save();

	res.json(todo);
  }
})

app.put('/todo/update/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.text = req.body.text;
	

	todo.save();

	res.json(todo);
});

app.post("/upload-image", async (req, res) => {
  const { base64 } = req.body;
  try {
    await Images.create({ image: base64 });
    res.send({ Status: "ok" })

  } catch (error) {
    console.log("eerr")
    res.send({ 
      Status: "error", data: error });

  }
})


app.get("/get-image", async (req, res) => {
  try {
    await Images.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})



app.listen(3010,()=>{console.log("serer started in port 3000")})