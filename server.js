


    //required stuff
    var path = require('path');
    var express = require('express');
    var exphbs = require('express-handlebars')

    var RecipeData = require('./RecipeData.json')
    //end of required stuff

var app = express();
var port = process.env.PORT || 3000;

app.engine ('handlebars', exphbs({defaultLayout: 'mainlayout'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));      //the folder it servers files from


//this is default page
app.get('/', function (req, res, next) {

  res.status(200).render('main',  {recipeStuff: RecipeData})           

    console.log ("rendering the main page")    
});


//this called when the url asks for specific recipes 
app.get('/recipe/:id', (req,res,next) => {
  var id = req.params.id;
  
  const recipeSelected = [ RecipeData[id] ]
  

  if (RecipeData[id]) {
    res.status(200).render('RecipePage', {recipeStuff: recipeSelected});
  } else {
    next();
  }
});


//this is the 404 page
app.get('*', function (req, res) {
    console.log ("page or file not found")

  res.status(404).render('four404', {errormessage: "The page you requested at " + req.url + " is not avaible"})
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
