var express = require('express');
var router = express.Router();


router.post('/', function(req, res) {
    const email = req.body.email
    if(email==="MarioDavid"){
      res.json({usuario: email })
    }
    else{
      res.json({usuario: "usuario no encontrado" })
    }
    
  });
    

  module.exports = router;