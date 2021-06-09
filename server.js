


    //required stuff
    var path = require('path');
    var express = require('express');
    var exphbs = require('express-handlebars')
    var fs = require('fs')

    var RecipeData = require('./RecipeData.json')
    //end of required stuff

var app = express();
var port = process.env.PORT || 3000;


app.engine ('handlebars', exphbs({defaultLayout: 'mainlayout', partialsDir  : [path.join(__dirname, 'views/partials'),]}))
app.set('view engine', 'handlebars')

app.use(express.json());
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


app.post('/addRecipe', function (req, res, next) {

  //console.log("== req.body:", req.body)
  //console.log("== req.body.Name:", req.body.Name)
  //console.log("== req.body.Author:", req.body.Author)
  //console.log("== req.body.desc", req.body.Description)

  //console.log("test log")

  if (req.body && req.body.Name && req.body.Author && req.body.Description && req.body.Type) {   //the parts of the recipe (need the rest)

    if (RecipeData) {
      RecipeData.push({
      Name: req.body.Name,
      Author: req.body.Author,
      Description: req.body.Description,
	  Type: req.body.Type,
	  Servings: req.body.Servings,
	  Time: req.body.Time,
	  Note: req.body.Note,
      ingredients: {List_item: req.body.ingredients},
      instructions: {List_item: req.body.instructions},
      })

      fs.writeFile(
        __dirname + '/RecipeData.json',
        JSON.stringify(RecipeData, null, 2),
        function (err) {
          if (err) {
            res.status(500).send("Error writing new data.  Try again later.")
          } else {
            res.status(200).send()
          }
        }
      )
    } else {
      next()
    }
  } else {
    res.status(400).send("Request needs a JSON body with 'Name', 'author', 'description','type' .")
  }
})

//this is the 404 page
app.get('*', function (req, res) {
    console.log ("page or file not found")

  res.status(404).render('four404', {errormessage: "The page you requested at " + req.url + " is not avaible"})
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
