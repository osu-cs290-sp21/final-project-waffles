var allRecipeElems = []; // all recipes

function showCreateRecipe() {
	var modalBackdrop = document.getElementById("modal-backdrop");  
	var createRecipeModal = document.getElementById("create-recipe-modal");

	console.log("test open")

	createRecipeModal.classList.remove('hidden');
	modalBackdrop.classList.remove('hidden');
}

function closeCreateRecipe() {
	var modalBackdrop = document.getElementById("modal-backdrop");  
	var createRecipeModal = document.getElementById("create-recipe-modal");
	
	console.log("test close")

	createRecipeModal.classList.add("hidden");
	modalBackdrop.classList.add("hidden");

	clearRecipeInputValues();
}

function clearRecipeInputValues() {

	var recipeInputElems = document.getElementsByClassName("recipe-input-element");

	  for (var i = 0; i < recipeInputElems.length; i++) {
		var input = recipeInputElems[i].querySelector('input, textarea');
		if (input)		//this checks to see if its not already null
		input.value = '';
	  }

}

function NewRecipeElems(name, author, servings, bakeTime, description, ingredients, instructions, notes) {
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
function getrecipeId() { //idk about this one
  var pathComponents = window.location.pathname.split('/');
  if (pathComponents[0] !== '' && pathComponents[1] !== 'recipes') {
    return null;
  }
return pathComponents[2];
}


	/* [add function to make sure all recipe boxes are filled] */


  function insertNewRecipe(recipeName, recipeAuthor) {
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


function recipeSearch() {
	var searchQuery = document.getElementById("navbar-search-input").value;
	searchQuery = searchQuery ? searchQuery.trim().toLowerCase : '';
	var recipeContainer = document.querySelector(".recipe-container");
	if (recipeContainer){		//this should check to make sure there is a container
		while (recipeContainer.lastChild) {
			recipeContainer.removeChild(recipeContainer.lastChild);
		}
	}
	
	allRecipeElems.forEach(function (recipeElem) {
		if (!searchQuery || recipeElem.textContent.toLowerCase().indexOf(searchQuery) !== -1) {
			recipeContainer.appendChild(recipeElem);
		}
	});
}

window.addEventListener("DOMContentLoaded", function () {	
  var recipeElemsCollection = document.getElementsByClassName('recipe-container');
  for (var i = 0; i < recipeElemsCollection.length; i++) {
    allRecipeElems.push(recipeElemsCollection[i]);
  }

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

