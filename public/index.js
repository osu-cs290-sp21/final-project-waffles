var allRecipeElements =[];

function showCreateRecipe(){
  var modalBackDrop = document.getElementById('modal-backdrop');
  var createRecipeModal = document.getElementById('create-recipe-modal');
  modalBackDrop.classList.remove('hidden');
} 

function closeCreateRecipe() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createRecipeModal = document.getElementById('create-recipe-modal');
  modalBackdrop.classList.add('hidden');
  createRecipeModal.classList.add('hidden');
  clearRecipeInputValues();
}

function clearRecipeInputValues() {
  var recipeInputElems = document.getElementsByClassName('recipe-input-element');
  for (var i = 0; i < recipeInputElems.length; i++) {
    var input = recipeInputElems[i].querySelector('input, textarea');
    input.value = '';
  }
}

function NewRecipeElem(recipeText, recipeAuthor) {
  var recipeTemplate = Handlebars.templates.recipe;
  var recipeData = {
    text: recipeText,
    author: recipeAuthor
  };
  return recipeTemplate(recipeData);
}

function getRecipeId() {
  var pathComponents = window.location.pathname.split('/');
  if (pathComponents[0] !== '' && pathComponents[1] !== 'recipes') {
    return null;
  }
return pathComponents[2];
}

function RecipesSearch() {
  var searchQuery = document.getElementById('navbar-search-input').value;
  searchQuery = searchQuery ? searchQuery.trim().toLowerCase(): '';
  var recipeContainer = document.querySelector('.recipes-container');
  while (recipeContainer.lastChild) {
    recipeContainer.removeChild(recipeContainer.lastChild);
  }
  allRecipeElems.forEach(function (recipeElem) {
    if (!searchQuery || recipeElem.textContent.toLowerCase().indexOf(searchQuery) !== -1) {
      recipeContainer.appendChild(recipeElem);
    }
  });
}

function storeRecipe(recipeID, text, author, callback) {
  var postURL = "/recipes/" + recipeID + "/addrecipes";
  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postURL);
  postRequest.setRequestHeader('Content-Type', 'application/json');
  postRequest.addEventListener('load', function (event) {
    var error;
    if (event.target.status !== 200) {
      error = event.target.response;
    }
    callback(error);
});


function insertNewRecipe(recipeText, recipeAuthor) {
  // Create a new recipe <article> element.
  var recipeText = document.getElementById('recipe-text-input').value || '';
  var recipeAttribution = document.getElementById('recipe-attribution-input').value || '';

  if (recipeText && recipeAttribution) {
    var recipeID= getRecipeid();
    if (recipeID) {
      console.log("== recipe ID:", recipeID);
      storerecipe(recipeID, recipeText, recipeAttribution, function (err) {
        if (err) {
          alert("Unable to save recipe. Got this error:\n\n" + err);
        }
        else {
          var recipeTemplate = Handlebars.templates.recipe;
          var templateArgs = {
            text: recipeText,
            author: recipeAttribution
        };
        var recipeHTML = recipeTemplate(templateArgs);
        var recipeContainer = document.querySelector('.recipe-container');
        recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);
        }
      });
    }
    closeCreaterecipe();
  }
  else {
    alert('Please enter both "recipe" and "author"!');
  }
var postBody = {
  text: text,
  author: author
  };
postRequest.send(JSON.stringify(postBody));
}
window.addEventListener('DOMContentLoaded', function () {
  var recipeElemsCollection = document.getElementsByClassName('recipe');
  for (var i = 0; i < recipeElemsCollection.length; i++) {
    allRecipeElems.push(recipeElemsCollection[i]);
  }
  var createRecipeButton = document.getElementById('create-recipe-button');
  createRecipeButton.addEventListener('click', showCreateRecipe);
  var modalCloseButton = document.querySelector('#create-recipe-modal .modal-close-button');
  modalCloseButton.addEventListener('click', closeCreateRecipe);
  var modalCancalButton = document.querySelector('#create-recipe-modal .modal-cancel-button');
  modalCancalButton.addEventListener('click', closeCreateRecipe);
  var modalAcceptButton = document.querySelector('#create-recipe-modal .modal-accept-button');
  modalAcceptButton.addEventListener('click', insertNewRecipe);
  var searchButton = document.getElementById('navbar-search-button');
  searchButton.addEventListener('click', RecipeSearch);
  var searchInput = document.getElementById('navbar-search-input');
  searchInput.addEventListener('input', RecipeSearch);
});
/*  
   * Create a new recipe-icon <div> element, insert plussquare with innerHTML
   * (which is safe in this case because we're not dealing with user input),
   * and add the div into the new recipe element.
   */
  var recipeIconElem = document.createElement('div');
  recipeIconElem.classList.add('recipe-icon');
  recipeIconElem.innerHTML = '<i class="fa fa-plus-square"></i>';
  recipeElem.appendChild(recipeIconElem);

  /*
   * Create a new recipe-content <div> element, and insert it into the new recipe
   * element.
   */
  var recipeContentElem = document.createElement('div');
  recipeContentElem.classList.add('recipe-content');
  recipeElem.appendChild(recipeContentElem);

  /*
   * Create a new recipe-text <p> element and add to it a text node containing
   * the recipe text value specified by the user.  Add the recipe-text <p> element
   * into the recipe-content element.
   */
  var recipeTextNode = document.createTextNode(recipeText);
  var recipeTextElem = document.createElement('p');
  recipeTextElem.classList.add('recipe-text');
  recipeTextElem.appendChild(recipeTextNode);
  recipeContentElem.appendChild(recipeTextElem);

  /*
   * Create a new recipe-author <p> element and add to it an <a> element
   * that itself contains a text node with the recipe author value
   * specified by the user.  Add the recipe-author <p> element into the
   * recipe-content element.
   */
  var recipeAuthorTextNode = document.createTextNode(recipeAuthor);
  var recipeAuthorLinkElem = document.createElement('a');
  recipeAuthorLinkElem.href = '#';
  recipeAuthorLinkElem.appendChild(recipeAuthorTextNode);
  var recipeAuthorElem = document.createElement('p');
  recipeAuthorElem.classList.add('recipe-author');
  recipeAuthorElem.appendChild(recipeAuthorLinkElem);
  recipeContentElem.appendChild(recipeAuthorElem);

  var recipeContainer = document.querySelector('main.recipe-container');
  recipeContainer.appendChild(recipeElem);
} 


var allRecipes = [];

/*
 * This function checks whether all of the required inputs were supplied by
 * the user and, if so, inserts a new recipe into the page using these inputs.
 * If the user did not supply a required input, they instead recieve an alert,
 * and no new recipe is inserted.
 */
function handleModalAcceptClick() {
  var recipeText = document.getElementById('recipe-text-input').value;
  var recipeAuthor = document.getElementById('recipe-author-input').value;

  /*
   * Only generate the new recipe if the user supplied values for both the recipe
   * text and the recipe author.  Give them an alert if they didn't.
   */
  if (recipeText && recipeAuthor) {
    allRecipes.push({
      text: recipeText,
      author: recipeAuthor
    });
    clearSearchAndReinsertRecipes();
    hideCreateRecipeModal();
  } else {
    alert('You must specify both the recipe name and the author of the recipe!');
  }
}


/*
 * This function clears the current search term, causing all recipes to be
 * re-inserted into the DOM.
 */
function clearSearchAndReinsertRecipes() {
  document.getElementById('navbar-search-input').value = "";
  doSearchUpdate();
}


/*
 * This function shows the modal to create a recipe when the "create recipe"
 * button is clicked.
 */
function showCreateRecipe() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createRecipeModal = document.getElementById('create-recipe-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createRecipeModal.classList.remove('hidden');
}


/*
 * This function clears any value present in any of the recipe input elements.
 */
function clearRecipeInputValues() {
  var recipeInputElems = document.getElementsByClassName('recipe-input-element');
  for (var i = 0; i < recipeInputElems.length; i++) {
    var input = recipeInputElems[i].querySelector('input, textarea');
    input.value = '';
  }
}


/*
 * This function hides the modal to create a recipe and clears any existing
 * values from the input fields whenever any of the modal close actions are
 * taken.
 */
function hideCreateRecipeModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createRecipeModal = document.getElementById('create-recipe-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createRecipeModal.classList.add('hidden');

  clearRecipeInputValues();
}


/*
 * A function that determines whether a given recipe matches a search query.
 * Returns true if the recipe matches the query and false otherwise.
 */
function recipeMatchesSearchQuery(recipe, searchQuery) {
  /*
   * An empty query matches all recipes.
   */
  if (!searchQuery) {
    return true;
  }

  /*
   * The search query matches the recipe if either the recipe's text or the recipe's
   * author contains the search query.
   */
  searchQuery = searchQuery.trim().toLowerCase();
  return (recipe.author + " " + recipe.text).toLowerCase().indexOf(searchQuery) >= 0;
}


/*
 * Perform a search over over all the recipes based on the search query the user
 * entered in the navbar.  Only display recipes that match the search query.
 * Display all recipes if the search query is empty.
 */
function doSearchUpdate() {
  /*
   * Grab the search query from the navbar search box.
   */
  var searchQuery = document.getElementById('navbar-search-input').value;

  /*
   * Remove all recipes from the DOM temporarily.
   */
  var recipeContainer = document.querySelector('.recipe-container');
  if (recipeContainer) {
    while (recipeContainer.lastChild) {
        recipeContainer.removeChild(recipeContainer.lastChild);
    }
  }

  /*
   * Loop through the collection of all recipes and add recipes back into the DOM
   * if they match the current search query.
   */
  allRecipes.forEach(function (recipe) {
    if (recipeMatchesSearchQuery(recipe, searchQuery)) {
      insertNewRecipe(recipe.text, recipe.author);
    }
  });
}


/*
 * This function parses an existing DOM element representing a single recipe
 * into an object representing that recipe and returns that object.  The object
 * is structured like this:
 *
 * {
 *   text: "...",
 *   author: "..."
 * }
 */
function parseRecipeElem(recipeElem) {
  var recipe = {};

  var recipeTextElem = recipeElem.querySelector('.recipe-text');
  recipe.text = recipeTextElem.textContent.trim();

  var recipeAuthorLinkElem = recipeElem.querySelector('.recipe-author a');
  recipe.author = recipeAuthorLinkElem.textContent.trim();

  return recipe;
}


/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function () {
  // Remember all of the existing recipes in an array that we can use for search.
  var recipeElemsCollection = document.getElementsByClassName('recipe');
  for (var i = 0; i < recipeElemsCollection.length; i++) {
    allRecipes.push(parseRecipeElem(recipeElemsCollection[i]));
  }

  var createRecipeButton = document.getElementById('create-recipe-button');
  if (createRecipeButton) {
    createRecipeButton.addEventListener('click', showCreateRecipe);
  }

  var modalCloseButton = document.querySelector('#create-recipe-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hideCreateRecipeModal);
  }

  var modalCancalButton = document.querySelector('#create-recipe-modal .modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', hideCreateRecipeModal);
  }

  var modalAcceptButton = document.querySelector('#create-recipe-modal .modal-accept-button');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }

  var searchButton = document.getElementById('navbar-search-button');
  if (searchButton) {
    searchButton.addEventListener('click', doSearchUpdate);
  }

  var searchInput = document.getElementById('navbar-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', doSearchUpdate);
  }
});