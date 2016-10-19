var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var csv = require('csv-parse');
var Converter = require("csvtojson").Converter;
var converter = new Converter();

var upload = multer({dest: 'uploads/'})

router.get('/', function (req,res) {
  res.render('index', {header:'index!'})
})

router.post('/csv', upload.single('uploadFile'), function (req,res, next) {
  // res.send("success")
  var file = req.file
  converter.on("end_parsed", function(jsonArray) {
    res.send(jsonArray)
  })
  var readStream = fs.createReadStream(file.path)

  readStream.pipe(converter)
  readStream.on('end', function () {
    console.log('stream ended');
    readStream.destroy()
  })




});

module.exports = router
