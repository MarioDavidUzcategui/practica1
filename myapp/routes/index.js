var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ usuario: 'mario' });
});

module.exports = router;
