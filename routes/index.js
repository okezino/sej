var express = require('express');
var router = express.Router();

let controller = require("../controller/index")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/form', function(req, res, next) {
  res.render('form', {
    sucess : "",
        error : ""
  });
});

router.post("/form", (req, res) =>{
  controller.postreg(req, result => {
    if (result.sucess){
      res.render('form', {
        sucess : "your data has been sent sucessfully, we will get in touch with you",
        error : ""
      });
    } else{
      res.render('form', {
        sucess : "",
        error : result.message
      });
    }
  })
})

module.exports = router;
