var allRecipeElems = []; // all recipes

function showCreateRecipe() {		//works
	var modalBackdrop = document.getElementById("modal-backdrop");  
	var createRecipeModal = document.getElementById("create-recipe-modal");

	console.log("test open")

	createRecipeModal.classList.remove('hidden');
	modalBackdrop.classList.remove('hidden');
}

function closeCreateRecipe() {		//works
	var modalBackdrop = document.getElementById("modal-backdrop");  
	var createRecipeModal = document.getElementById("create-recipe-modal");
	
	console.log("test close")

	createRecipeModal.classList.add("hidden");
	modalBackdrop.classList.add("hidden");

	clearRecipeInputValues();
}

function clearRecipeInputValues() {		//works

	var recipeInputElems = document.getElementsByClassName("recipe-input-element");

	  for (var i = 0; i < recipeInputElems.length; i++) {
		var input = recipeInputElems[i].querySelector('input, textarea');
		if (input)		//this checks to see if its not already null
		input.value = '';
	  }
	console.log("test clear")
}

function NewRecipeElems(name, author, servings, bakeTime, description, ingredients, instructions, notes) {	//unused
	var recipeData = {
    name: recipeName,
    author: recipeAuthor,
    servings: recipeServings,
    bakeTime: recipeBakeTime,
    description: recipeDescription,
    ingredients: recipeIngredients,
    instructions: recipeInstructions,
    notes: recipeNotes
	};
	return recipeData;
}

/*
function getrecipeId() { //idk about this one
  var pathComponents = window.location.pathname.split('/');
  if (pathComponents[0] !== '' && pathComponents[1] !== 'recipes') {
    return null;
  }
	console.log ("test ID")
	return pathComponents[2];
}


	///* [add function to make sure all recipe boxes are filled] //


  function insertNewRecipe(recipeName, recipeAuthor) {

	console.log ("test insert crazy thing")

    var recipeName = document.getElementById('recipe-name-input').value || ''; //name
    var recipeAuthor = document.getElementById('recipe-author-input').value || ''; //author
  
    if (recipeName && recipeAuthor) {
      var recipeID= getrecipeId();
      if (recipeID) {
        console.log("== recipe ID:", recipeID);
        storeRecipe(recipeID, recipeName, recipeAuthor, function (err) {
          if (err) {
            alert("Unable to save recipe. Got this error:\n\n" + err);
          }
          else {
            var recipeTemplate = Handlebars.templates.RecipeCard;
            var templateArgs = {
              name: recipeName,
              author: recipeAuthor
          };
          var recipeHTML = recipeTemplate(templateArgs);
          var recipeContainer = document.querySelector('.recipe-container');
          recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);
          }
        });
      }
      closeCreateRecipe();
    }
    else {
      alert('Please enter both "name" and "author"!');
    }
  var postBody = {
    name: recipeName,
    author: recipeAuthor
    };
  postRequest.send(JSON.stringify(postBody));		//postRequest not defined
  }
  */

  function insertNewRecipe() {		//this works but it does not save for searching

  
  var RecipeName = document.getElementById('recipe-name-input').value;
  var RecipeAuthor = document.getElementById('recipe-author-input').value;
  var RecipeDescription = document.getElementById('recipe-text-input').value;


  if (RecipeName && RecipeAuthor && RecipeDescription) {	//isnt saved for searching
    allRecipeElems.push({
      Name: RecipeName,
      Author: RecipeAuthor,
      Description: RecipeDescription
    });
	
    var Recipehtml = Handlebars.templates.RecipeCard( {Name: RecipeName, Author: RecipeAuthor, Description: RecipeDescription} )     
    var RecipeContainer = document.querySelector('main.recipes-container');

    RecipeContainer.insertAdjacentHTML('beforeend', Recipehtml)
  } else {
    alert('You must fill in all text boxes! (besides note, that is optional)');
  }

  closeCreateRecipe() 

  }

function recipeSearch() {	//does not search, it works overall, but doesnt actually search through the recipies

	console.log ("test Search")

	var searchQuery = document.getElementById("navbar-search-input").value;
	searchQuery = searchQuery ? searchQuery.trim().toLowerCase : '';

	var recipeContainer = document.querySelector(".recipes-container");
	
	//console.log ("test container" + allRecipeElems)

	if (recipeContainer){		//this should check to make sure there is a container
		while (recipeContainer.lastChild) {
			recipeContainer.removeChild(recipeContainer.lastChild);
		}
	}
	
	//console.log ("test container" + allRecipeElems)
	
	allRecipeElems.forEach(function (recipeElem) {
		if (!searchQuery || recipeElem.textContent.toLowerCase().indexOf(searchQuery) !== -1) {
			recipeContainer.appendChild(recipeElem);
		}
	});
}

function buttonSearch(Buttontype){	//this should trigger when the buttons in the header are pressed, but will need the searching system worked out

	console.log(Buttontype)

	var recipeContainer = document.querySelector(".recipes-container");

	if (recipeContainer){		//this should check to make sure there is a container
		while (recipeContainer.lastChild) {
			recipeContainer.removeChild(recipeContainer.lastChild);
		}
	}

	allRecipeElems.forEach(function (recipeElem) {
		if (recipeElem.Type == Buttontype || Buttontype == "home" ) {
			recipeContainer.appendChild(recipeElem);
		}
	});

}



window.addEventListener("DOMContentLoaded", function () {	

  var recipeElemsCollection = document.getElementsByClassName('recipe-card');
  for (var i = 0; i < recipeElemsCollection.length; i++) {
    allRecipeElems.push(recipeElemsCollection[i]);
  }

  //this is for the header buttons for searching	
	var Searchbuttons = document.getElementsByClassName("navlink");
	Searchbuttons[1].addEventListener("click", function() { buttonSearch("Entrée"), document.querySelector(".active").classList.remove("active"), Searchbuttons[1].classList.add("active") });
	Searchbuttons[2].addEventListener("click", function() { buttonSearch("Breakfast"), document.querySelector(".active").classList.remove("active"), Searchbuttons[2].classList.add("active") });
	Searchbuttons[3].addEventListener("click", function() { buttonSearch("Side"), document.querySelector(".active").classList.remove("active"), Searchbuttons[3].classList.add("active") });
	Searchbuttons[4].addEventListener("click", function() { buttonSearch("Dessert"), document.querySelector(".active").classList.remove("active"), Searchbuttons[4].classList.add("active") });
	Searchbuttons[5].addEventListener("click", function() { buttonSearch("Uncategorized"), document.querySelector(".active").classList.remove("active"), Searchbuttons[5].classList.add("active") });
	Searchbuttons[0].addEventListener("click", function() { buttonSearch("home"), document.querySelector(".active").classList.remove("active"), Searchbuttons[0].classList.add("active") });


	var createRecipeButton = document.getElementById('create-recipe-button');
	createRecipeButton.addEventListener('click', showCreateRecipe);
	
	var modalCloseButton = document.getElementsByClassName("modal-close-button");
	modalCloseButton[0].addEventListener("click", closeCreateRecipe);
	
	var modalCancelButton = document.getElementsByClassName("modal-cancel-button");
	modalCancelButton[0].addEventListener("click", closeCreateRecipe);
	
	var modalAcceptButton = document.getElementsByClassName("modal-accept-button");
	modalAcceptButton[0].addEventListener("click", insertNewRecipe);
	
	var searchButton = document.getElementById("navbar-search-button");
	searchButton.addEventListener("click", recipeSearch);
	
	var searchInput = document.getElementById("navbar-search-input");
	searchInput.addEventListener("input", recipeSearch);
});

