const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let PORT =5001

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use(cors({
  credentials : true,
  origin: ["https://vyzen-repo-frontend.vercel.app"],
  methods:['POST',"GET"]
}))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use(express.json());

app.use('/api',require('./routes/router'));
app.get("/",(req,res)=>{
  res.json("helloooo");
}

app.listen(PORT,function (){
  console.log('Example app listening on port',PORT);
});
