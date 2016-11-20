var express= require('express');
var app = express();

app.get('/',(req,res) => {
  res.json({message:"Welcome to API"});
});

app.listen(process.env.PORT || 8080);