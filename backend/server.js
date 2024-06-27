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
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use(express.json());

app.use('/api',require('./routes/router'));
app.get("/",(req,res)=>{
  res.json("helloooo");
})

app.listen(PORT,function (){
  console.log('Example app listening on port',PORT);
});
