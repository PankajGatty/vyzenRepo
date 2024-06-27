const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let PORT =5001

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use(cors({
  credentials : true,
  origin: ['https://vyzen-repo-frontend-retkk4nxk-pankajgattys-projects.vercel.app/]
}))

app.use(express.static('public'));
app.use(express.json());

app.use('/api',require('./routes/router'));
app.get("/",(req,res)=>{
  res.json("helloooo");
}

app.listen(PORT,function (){
  console.log('Example app listening on port',PORT);
});
