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
	searchQuery = searchQuery.trim().toLowerCase();

	var recipeContainer = document.querySelector(".recipes-container");
	
	//console.log ("test container" + allRecipeElems)

	if (recipeContainer){		//this should check to make sure there is a container
		while (recipeContainer.lastChild) {
			recipeContainer.removeChild(recipeContainer.lastChild);
		}
	}
	
	//console.log ("test container" + allRecipeElems)

	
	
	for (var i = 0; i < allRecipeElems.length; i++) {
    if(!searchQuery || allRecipeElems[i].Name.toLowerCase().indexOf(searchQuery) >=0 || allRecipeElems[i].Author.toLowerCase().indexOf(searchQuery)  >=0 ){
			//console.log("test " + i)

			 var Recipehtml = Handlebars.templates.RecipeCard( {Name: allRecipeElems[i].Name, Author: allRecipeElems[i].Author, Description: allRecipeElems[i].Description, Type: allRecipeElems[i].Type} )     
			 var RecipeContainer = document.querySelector('main.recipes-container');

			RecipeContainer.insertAdjacentHTML('beforeend', Recipehtml)

			var recipiescardsbuttons = document.getElementsByClassName("recipe-link");
			var j =0
				recipiescardsbuttons[j].setAttribute('href', 'http://' + window.location.host+'/recipe/'+i);
			j++
			
		}
	}
}

function buttonSearch(Buttontype){	//this should trigger when the buttons in the header are pressed, but will need the searching system worked out

	console.log(Buttontype)

	var recipeContainer = document.querySelector(".recipes-container");

	if (recipeContainer){		//this should check to make sure there is a container
		while (recipeContainer.lastChild) {
			recipeContainer.removeChild(recipeContainer.lastChild);
		}
	}

	
  for (var i = 0; i < allRecipeElems.length; i++) {
    if(allRecipeElems[i].Type == Buttontype || Buttontype == "home" ){
			//console.log("test " + i)

			 var Recipehtml = Handlebars.templates.RecipeCard( {Name: allRecipeElems[i].Name, Author: allRecipeElems[i].Author, Description: allRecipeElems[i].Description, Type: allRecipeElems[i].Type} )     
			 var RecipeContainer = document.querySelector('main.recipes-container');

			RecipeContainer.insertAdjacentHTML('beforeend', Recipehtml)

			
			var recipiescardsbuttons = document.getElementsByClassName("recipe-link");
			var j =0
				recipiescardsbuttons[j].setAttribute('href', 'http://' + window.location.host+'/recipe/'+i);
			j++
		}
	}
}


function parseRecipieElem(RecipeElem) {
  var Recipe = {};

  var RecipeTextElem = RecipeElem.querySelector('.recipe-name');
  Recipe.Name = RecipeTextElem.textContent.trim();

  var RecipeAuthorLinkElem = RecipeElem.querySelector('.recipe-author');
  Recipe.Author = RecipeAuthorLinkElem.textContent.trim();

  var RecipeAuthorLinkElem = RecipeElem.querySelector('.recipe-description');
  Recipe.Description = RecipeAuthorLinkElem.textContent.trim();

  var RecipeAuthorLinkElem = RecipeElem.querySelector('.recipe-type');
  Recipe.Type = RecipeAuthorLinkElem.textContent.trim();
  
  //console.log("Name " + Recipe.Name)
  //console.log("Author " + Recipe.Author)
  //console.log("Description " + Recipe.Description)
  //console.log("Type " + Recipe.Type)
  //console.log("")

  return Recipe;
}

window.addEventListener("DOMContentLoaded", function () {	

  var recipeElemsCollection = document.getElementsByClassName('recipe-card');
  for (var i = 0; i < recipeElemsCollection.length; i++) {
    allRecipeElems.push(parseRecipieElem(recipeElemsCollection[i]));

  //console.log("Name " + allRecipeElems[i].Name)
  //console.log("Author " + allRecipeElems[i].Author)
  //console.log("Description " + allRecipeElems[i].Description)
  //console.log("Type " + allRecipeElems[i].Type)
  //console.log("")
  }

  if (document.getElementById('create-recipe-button')) { //this if statement is to make the buttons in the full recipe page not functionable and so it doesnt break things
	//this is for the header buttons for searching	
		var Searchbuttons = document.getElementsByClassName("navlink");
		Searchbuttons[1].addEventListener("click", function() { buttonSearch("Entrée"), document.querySelector(".active").classList.remove("active"), Searchbuttons[1].classList.add("active") });
		Searchbuttons[2].addEventListener("click", function() { buttonSearch("Breakfast"), document.querySelector(".active").classList.remove("active"), Searchbuttons[2].classList.add("active") });
		Searchbuttons[3].addEventListener("click", function() { buttonSearch("Side"), document.querySelector(".active").classList.remove("active"), Searchbuttons[3].classList.add("active") });
		Searchbuttons[4].addEventListener("click", function() { buttonSearch("Dessert"), document.querySelector(".active").classList.remove("active"), Searchbuttons[4].classList.add("active") });
		Searchbuttons[5].addEventListener("click", function() { buttonSearch("Uncategorized"), document.querySelector(".active").classList.remove("active"), Searchbuttons[5].classList.add("active") });
		Searchbuttons[0].addEventListener("click", function() { buttonSearch("home"), document.querySelector(".active").classList.remove("active"), Searchbuttons[0].classList.add("active") });

		//this should make it so you can click on a recipe card to go to its full recipie some CSS needs to be changed but it will work
		var recipiescardsbuttons = document.getElementsByClassName("recipe-link");
			for (var i = 0; i < recipiescardsbuttons.length; i++) {
				recipiescardsbuttons[i].setAttribute('href', 'http://' + window.location.host+'/recipe/'+i);
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
	}
	else{
	
		var Searchbuttons = document.getElementsByClassName("navlink");
		
		for (var i = 0; i < Searchbuttons.length; i++) {
			Searchbuttons[i].classList.add("hidden")
		}
			Searchbuttons[0].classList.remove("hidden")
			Searchbuttons[0].classList.remove("active")
			Searchbuttons[0].children[0].setAttribute('href', 'http://' + window.location.host)
	}
});

