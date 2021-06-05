


    //required stuff
    var path = require('path');
    var express = require('express');
    var exphbs = require('express-handlebars')

    var RecipeData = require('./RecipeData.json')
    //end of required stuff

var app = express();
var port = process.env.PORT || 3000;

app.engine ('handlebars', exphbs({defaultLayout: null}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));      //the folder it servers files from


//this is default page
app.get('/', function (req, res, next) {

  res.status(200).render('main',  {RecipeData: RecipeData})           

    console.log ("rendering the main page")
    
});


//this called when the url asks for specific recipes 
app.get('/recipe/:id', (req,res,next) => {
  var id = req.params.id;
  
  const test = [ RecipeData[id] ]

  if (RecipeData[id]) {
    res.status(200).render('RecipePage', {RecipeInfo: test});
  } else {
    next();
  }
});

//this called when the url asks for specific type of recipes 
//this code needs worked on since it will be deferent than just pulling up one recipe
app.get('/type/:id', (req,res,next) => {
  var id = req.params.id;
  
  if (RecipeData[id]) {
        res.status(200).render('main', {RecipeData: RecipeData, Recipetype: id});
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
