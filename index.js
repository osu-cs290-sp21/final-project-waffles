window.onload = function() {
    var recipeCache = [];
    var recipes = document.getElementsByClassName('recipe'); /* collects recipes */
    var temp = document.getElementsByClassName('recipe-container');
    var rContainer = temp[0];
    var inputs = document.getElementsByTagName('input');
    var whiteList = [];
    var change = '';
    temp = null;
    recipeCache.length = 0;

    for (i = 0; i < inputs.length; i++) { /* goes through inputs */
        inputs[i].onkeyup = function() {
            z = document.getElementById("navbar-search-input").Value; /* gets inputs */
            whiteList.length = 0; /* clears whitelist */

            for (var i = 0;  i < recipeCache; i++) {
                rContainer.appendChild(recipeCache[i]);
                //console.log(recipeCache[i]);
            }
            recipeCache.length = 0; /* clear cache */

            recipes = document.getElementsByClassName('recipe'); /* gets the recipes */

            for( i = 0; i < recipes.length; i++) {
                if (recipes[i].textContent.includes(z)) { /* checks to see if string is includded in recipe textContent */
                    //console.log("Contains: ", z, " ", recipes[i]);
                    whiteList.push(recipes[i]); /* adds to whitelist */
                }
            }

            while (recipes.length > whiteList.length) {
                for (i = 0; i < recipes.length; i++) {
                    if (!whiteList.includes(recipes[i])) {
                        recipeCache.push(recipes[i]);
                        rContainer.removeChild(recipes[i]);
                    }
                }
            }
        };
    }
};

function search() {
    var recipeCache = [];
    var recipes = document.getElementsByClassName('recipe');
    var temp = document.getElementsByClassName('recipe-container');
    var rContainer = temp[0];
    temp = null;
    var inputs = document.getElementsByTagName('input');
    var whiteList = []; /* whitelist array thingy */
    recipeCache.length = 0;
    var change = ' ';
    z = document.getElementById("navbar-search-input"); /* Collects user input */
    whiteList.length = 0; /* Clears whitelist */

    for (var i = 0; i < recipeCache.length; i++) {
        rContainer.appendChild(recipeCache[i])
    }
    recipeCache.length = 0; /* clears cache */

    recipes = document.getElementsByClassName('recipe');
    var x = recipes.toLowerCase();
    document.write(x);

    for (i = 0; i < recipes.length; i++) {
        if (recipes.toLowerCase().includes(z)) {
            whiteList.push(recipes[i]);
        }
    }

    while (recipes.length > whiteList.length) {
        for (i = 0; i < recipes.length; i++) {
            if (!whiteList.includes(recipes[i])) {
                recipeCache.push(recipes[i]);
                rContainer.removeChild(recipes[i]);
            }
        }
    }
}

function makeRecipe(recName, recAuthor, recServing, recBake, recDesc, recIng, recInstr, recNote) {
    var name = recName;
    var auth = recAuthor;
    var serv = recServing;
    var bake = recBake;
    var desc = recDesc;
    var ingre = recIng;
    var instr = recInstr;
    var note = recNote;

    name = name.replace(/[\.,]/g, '');
    auth = auth.replace(/[\.,]/g, '');
    serv = serv.replace(/[\.,]/g, '');
    bake = bake.replace(/[\.,]/g, '');
    desc = desc.replace(/[\.,]/g, '');
    ingre = ingre.replace(/[\.,]/g, '');
    instr = instr.replace(/[\.,]/g, '');
    note = note.replace(/[\.,]/g, '');

    if (name == '') { 
        window.alert("[ERROR]: PLEASE ENTER RECIPE NAME!");
        return;
    }
    if (auth == '') { 
        window.alert("[ERROR]: PLEASE ENTER AN AUTHOR!");
        return;
    }
    if (serv == '') {
        window.alert("[ERROR]: PLEASE ENTER A SERVING SIZE!");
        return;
    }
    if (bake == '') {
        window.alert("[ERROR]: PLEASE ENTER THE AMOUNT OF TIME NEEDED TO BAKE/COOK!");
        return;
    }
    if (desc == '') {
        window.alert("[ERROR]: PLEASE ENTER A BRIEF DESCRIPTION OF THE DISH!");
        return;
    }
    if (ingre = '') {
        window.alert("[ERROR]: PLEASE ENTER A LIST OF INGREDIENTS USED IN THE RECIPE!");
        return;
    }
    if (instr = '') {
        window.alert("[ERROR]: PLEASE ENTER SOME COOKING/BAKING DIRECTIONS!");
        return;
    }
    if (note = '') {
        window.alert("Please enter any addition notes you may have, if you have none, please enter 'N/A' :)");
    }

    //console.log(y);
    //console.log(yText);
    var temp = document.getElementsByClassName('recipe-container');
    var rContainer = temp[0];
    temp = null;
    var t1 = document.createElement('card'); // creates new recipe
    t1.classList.add('recipe');
    var t2 = document.createElement('div');

    t1.appendChild(t2); // adds to bottom of the page
    t2.classList.add('recipe-icon');

    var t3 = document.createElement('i');
    t1.appendChild(t3); // add to bottom of webpage
    t3.classList.add('recipe-content');

    var t4 = document.createElement('w'); //create new recipe name
    t4.classList.add('recipe-text');
    var userTextInput1 = document.createTextNode(name);
    t4.appendChild(userTextInput1);
    t3.appendChild(t4);

    var t5 = document.createElement('w'); // create new recipe author
    t5.classList.add('recipe-author');
    var userInput = document.createTextNode(auth);


    var t6 = document.createElement('w'); // create serving size
    t6.classList.add('recipe-serving');
    var userTextInput2 = document.createTextNode(serv);

    var t7 = document.createElement('w'); //create bake time
    t7.classList.add('recipe-bake');
    var userTextInput3 = document.createTextNode(bake);

    var t8 = document.createElement('w'); //create recipe description
    t8.classList.add('recipe-description');
    var userTextInput4 = document.createTextNode(desc);

    var t9 = document.createElement('w'); //create recipe ingredients
    t9.classList.add('recipe-ingredient');
    var userTextInput5 = document.createTextNode(ingre);

    var t10 = document.createElement('w'); //create recipe instructions
    t10.classList.add('recipe-instruction');
    var userTextInput6 = document.createTextNode(instr);

    var t11 = document.createElement('w'); //create recipe notes
    t11.classList.add('recipe-note');
    var userTextInput7 = document.createTextNode(note);


    //var t12 = document.createElement('a');
    //t12.setAttribute('href', "#");
    //t12.appendChild(userInput);
    //t5.appendChild(t6);
    //t3.appendChild(t5);
    //rContainer.appendChild(t1);
    hidden(true);
}

function hidden(z) {
    if ( z == false) {
        document.getElementById('modal-backdrop').classList.remove("hidden");
        document.getElementById('create-recipe-modal').classList.remove("hidden");
    }
    else {
        document.getElementById('modal-backdrop').classList.add("hidden");
        document.getElementById('create-recipe-modal').classList.add("hidden");
        document.getElementById('recipe-text-input').value = "";
        document.getElementById('recip-attribution-input').value = "";
    }
}