const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let PORT =5001

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use(cors({
  credentials : true,
  origin: "https://vyzenrepo.onrender.com",
  methods:['POST',"GET"]
}))

app.use(express.json());

app.use('/api',require('./routes/router'));
app.get("/",(req,res)=>{
  res.json("helloooo");
})

app.listen(PORT,function (){
  console.log('Example app listening on port',PORT);
});
