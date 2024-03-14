const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! Hoi Dan it with PhamTan')
  })
  
router.get('/hoidanit', (req, res) => {
    // res.send('<h1> sieu probip Hello World! </h1>')
    res.render('sample.ejs')
  })

  module.exports = router; //export default