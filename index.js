let rp = require('request-promise');
let cheerio = require('cheerio');
let express = require('express');
let app = express();
var request = require('request');
const options = {
    uri: `https://www.scopecinemas.com/movie/black-panther-2018`,
    transform: function (body) {
      
      return cheerio.load(body);
    }
  };


  app.get('/', (req,res) => {
      var movies = [];
    rp(options)
    .then(function ($) {
      
      let t = $('.showTimeTitle').text();
    let message = "Movie still not avaiable";

      if(t != ""){
          message = "Movie Avaiable"
      }
 
      res.send(`<h1>`+message+`</h1>`);
    })
    .catch(function (err) {
      res.send(err);
    });
  })
  



  app.listen(3005, function(r){
      console.log("running");
  })