var allRecipes = []; // all recipes

function showCreateRecipeModal() {
	var createRecipeModal = document.getElementById("create-recipe-modal");
	var modalBackdrop = document.getElementById("modal-backdrop");
	
	createRecipeModal.classList.remove('hidden');
	modalBackdrop.classList.remove('hidden');
}

function closeCreateRecipeModal() {
	var createRecipeModal = document.getElementById("create-recipe-modal");
	var modalBackdrop = document.getElementById("modal-backdrop");
	
	createrecipeModal.classList.add("hidden");
	modalBackdrop.classList.add("hidden");
	
	clearRecipeInputValues();
}

function clearRecipeInputValues() {
	var recipeInputElems = document.getElementsByClassName("recipe-input-element");
	var recipeConditionInput = document.getElementById("recipe-condition-list");
	var recipeDetailsInput = document.getElementById("recipe-details-input");
	recipeDetailsInput = "";
	recipeConditionInput.value = 1;
	for (var i = 0; i < 6; i++)
	{
		var input = recipeInputElems[i].querySelector('input', 'textarea');
			input.value = "";
	}
}

function creatNewRecipe(name, author, servings, bakeTime, description, ingredients, instructions, notes) {
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

function insertNewRecipe() {
	var recipeName = document.getElementById("recipe-name-input").value;
	var recipeAuthor = document.getElementById("recipe-authors-input").value;
  var recipeServings = document.getElementById("recipe-serving-input").value;
  var recipeBakeTime = document.getElementById("recipe-baketime-input").value;
  var recipeDescription = document.getElementById("recipe-desciption-input").value;
  var recipeIngredients = document.getElementById("recipe-ingredients-input").value;
  var recipeInstructions = document.getElementById("recipe-instructions-input").value;
  var recipeNotes = document.getElementById("recipe-notes-input").value;
  var addNewRecipe = createNewRecipe(recipeName. recipeAuthor, recipeServings, recipeBakeTime, recipeDescription, recipeIngredients, recipeInstructions, recipeNotes)

	storeRecipe(newRecipe, function (err) {
		if(err) {
			alert("[ERROR]: Unable to upload recipe to database. Received:\n\n" + err);
		}
		else {
			var templateArgs = {
				name: recipeName,
				author: recipeAuthor,
        description: recipeDescription,
			};				
		}
	});
	closeCreateRecipeModal(); // bye bye
}
	
	
/* [add function to make sure all recipe boxes are filled] */


function storeRecipe(recipeData, callback) {
	var postURL = "/addRecipe";
	var postRequest = new XMLHttpRequest();
	postRequest.open('POST',postURL);
	postRequest.setRequestHeader('Content-Type','RecipeData/json'); // right .json file?
	
	postRequest.addEventListener('load',function(event) {
		var error;
		if(event.target.status != 200) {
			error = event.target.response;
		}
		callback(error);
	});
	
	postRequest.send(JSON.stringify(recipeData));
}



function recipeSearch() {
	var searchQuery = document.getElementById("navbar-search-input").value;
	searchQuery = searcyQuery ? searchQuery.trim().toLowerCase : '';
	
	var recipeContainer = document.querySelector(".recipe-container");
	while (recipeContainer.lastChild) {
		recipeContainer.removeChild(recipeContainer.lastChild);
	}
	
	allRecipes.forEach(function (recipeName) {
		if (!searchQuery || recipeName.textContent.toLowerCase().indexOf(searchQuery) !== -1) {
			recipeContainer.appendChild(recipeName);
		}
	});
}

window.addEventListener("DOMContentLoaded", function () {	
	var createRecipeButton = document.getElementById('create-recipe-button');
	createRecipeButton.addEventListener('click', showCreateRecipeModal);
	
	var modalCloseButton = document.getElementsByClassName("modal-close-button");
	modalCloseButton[0].addEventListener("click", closeCreateRecipeModal);
	
	var modalCancelButton = document.getElementsByClassName("modal-cancel-button");
	modalCancelButton[0].addEventListener("click", closeCreateRecipeModal);
	
	var modalAcceptButton = document.getElementsByClassName("modal-accept-button");
	modalAcceptButton[0].addEventListener("click", insertNewRecipePost);
	
	var searchButton = document.getElementById("navbar-search-button");
	searchButton.addEventListener("click", recipeSearch);
	
	var searchInput = document.getElementById("navbar-search-input");
	searchInput.addEventListener("input", recipeSearch);
});