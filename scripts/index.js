var loadedRecipes;


// TODO:
// maybe fill global arrays with data ? or better: global objects to populate html when clicked on in the list
// fetch json
// parse data
// populate recipe list
// make recipe selection populate card
// populate recipe card and nutrition facts


function loadAllRecipes() {

    let jsonData;


    /*
// doesn't work
    let allRecipeJsonfileContents;
    
    let file = new File(bits,"allRecipes.json");
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    allRecipeJsonfileContents = reader.result;
  });
  reader.readAsText(file);

*/

    // TODO: fix this. Currently it gives a CORS error:
/*
fetch('allRecipes.json')
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData));
    */
    
    // TODO: delete this. it is temporary to get around the CORS error:
    jsonData = JSON.parse('{    "recipes": [        {            "title":"Keto No-bake Cookie Dough",            "notes":"based on <a href=\'https://google.com\'>somewhere</a> on the internet.",            "ingredients": ["1 cup almond flour","4 Tablespoons salted butter","2 Tablespoons Swerve","1 teapoon vanilla extract","1 pinch of salt"],            "tools": ["microwave","a small microwave bowl","a regular mixing bowl","fork for mixing","teaspoon","tablespoon","measuring cup","tupperware/container for storage"],            "directions": ["Melt butter in the small bowl for 15 seconds in the microwave.","Mix almond flour, salt, swerve together in another bowl.","Add the melted butter to the other bowl and mix thoroughly.","Add the vanilla and mix thoroughly.","Make into 12 equal sized balls.","Eat what you like and then place the rest in a tupperware in the fridge for later. They last about a week."],            "nutrition":{                "servingSize":"1 ball (there are 12 total in this recipe)",                "calories":"90",                "totalFatGrams":"8.7g",                "totalFatPercent":"?%",                "saturatedFatGrams":"2.8g",                "saturatedFatPercent":"?%",                "transFatGrams":"?g",                "polyunsaturatedFatGrams":"1.3g",                "monounsaturatedFatGrams":"3.9g",                "cholesterolMilligrams":"10.3mg",                "cholesterolPercent":"?%",                "sodiumMilligrams":"30.5mg",                "sodiumPercent":"?%",                "totalCarbsGrams":"4g",                "totalCarbsPercent":"?%",                "dietaryFiberGrams":"1.2g",                "dietaryFiberPercent":"?%",                "sugarsGrams":"0.5g",                "proteinGrams":"2g",                "vitaminDMicrograms":"0mcg",                "vitaminDPercent":"0%",                "calciumMilligrams":"26.3mg",                "calciumPercent":"?%",                "ironMilligrams":"0.4mg",                "ironPercent":"?%",                "potassiumMilligrams":"70mg",                "potassiumPercent":"?%",                "caffeineMilligrams":"0mg"            }        },{                    "title":"Banana Peanut Butter Bars",            "notes":"based on <a href=\'from https://www.powerhungry.com/2019/09/30/3-ingredient-banana-flax-bars-vegan\'>somewhere</a> on the internet. Makes 16 bars, 8g carbs each. Everyone loves these except me.",            "ingredients": ["1 cup (250 mL) mashed, very ripe bananas","2/3 cup (170 g) smooth peanut butter","1/2 cup (56 g) flaxseed meal","1 pinch of salt","34 chips (30g) of Ghiradelli 60% baking chocolate chips."],            "tools": ["medium bowl","fork for mixing","butter knife","measuring cups","parchment paper","aluminum foil","oven","large cutting board","tupperware/container for storage"],            "directions": ["Preheat oven to 325 degrees F","In a medium bowl, stir together the banana, nut butter, salt, and flaxseed meal until completley blended and smooth.","Place a large 12 inch square of parchment paper on top of a larger rectangle of aluminum foil.","Pour the batter onto the parchment paper and shape with a fork into a flat square. It should be about 9 x 9 inches. Leave enough of a border on the parchment paper on all sides for easy grip.","Bake in the preheated oven for 16 minutes until top appears dry and the center is firm to the touch.","Add chocolate chips on top of the peanut butter mixture.","Bake for 3 minutes.","Smooth out the chocolate chips with a fork.","Bake for 2 more minutes.","Take out and let cool completely on the counter.","Once cooled, transfer parchment paper with food onto cutting board.","Cut into 16 even sized bars.","Eat some and place the extra in refrigerator.","Once it\'s completely cold, freeze extra ones in the freezer (they\'ll last 6 months).","Thaw frozen ones on counter for 1 hour when ready to eat."],            "nutrition":{                "servingSize":"1 bar (total recipe makes 16 bars)",                "calories":"110",                "totalFatGrams":"?g",                "totalFatPercent":"?%",                "saturatedFatGrams":"?g",                "saturatedFatPercent":"?%",                "transFatGrams":"?g",                "polyunsaturatedFatGrams":"?g",                "monounsaturatedFatGrams":"?g",                "cholesterolMilligrams":"?mg",                "cholesterolPercent":"?%",                "sodiumMilligrams":"?mg",                "sodiumPercent":"?%",                "totalCarbsGrams":"8g",                "totalCarbsPercent":"?%",                "dietaryFiberGrams":"?g",                "dietaryFiberPercent":"?%",                "sugarsGrams":"?g",                "proteinGrams":"?g",                "vitaminDMicrograms":"?mcg",                "vitaminDPercent":"?%",                "calciumMilligrams":"?mg",                "calciumPercent":"?%",                "ironMilligrams":"?mg",                "ironPercent":"?%",                "potassiumMilligrams":"?mg",                "potassiumPercent":"?%",                "caffeineMilligrams":"?mg"            }        },{                    "title":"Generic recipe",            "notes":"based on something",            "ingredients": ["1 cup almond flour","4 Tablespoons salted butter","2 Tablespoons Swerve or 1/4 teaspoon liquid Stevia","1 teapoon vanilla extract","1 pinch of salt"],            "tools": ["microwave","a small microwave bowl","a regular mixing bowl","fork for mixing","teaspoon","tablespoon","measuring cup","tupperware/container for storage"],            "directions": ["Melt butter in the small bowl for 15 seconds in the microwave.","Mix almond flour, salt, swerve/stevia together in another bowl.","Add the melted butter to the other bowl and mix thoroughly.","Add the vanilla and mix thoroughly.","Make into 12 equal sized balls.","Eat what you like and then place the rest in a tupperware in the fridge for later. They last about a week."],            "nutrition":{                "servingSize":"?",                "calories":"?",                "totalFatGrams":"?g",                "totalFatPercent":"?%",                "saturatedFatGrams":"?g",                "saturatedFatPercent":"?%",                "transFatGrams":"?g",                "polyunsaturatedFatGrams":"?g",                "monounsaturatedFatGrams":"?g",                "cholesterolMilligrams":"?mg",                "cholesterolPercent":"?%",                "sodiumMilligrams":"?mg",                "sodiumPercent":"?%",                "totalCarbsGrams":"?g",                "totalCarbsPercent":"?%",                "dietaryFiberGrams":"?g",                "dietaryFiberPercent":"?%",                "sugarsGrams":"?g",                "proteinGrams":"?g",                "vitaminDMicrograms":"?mcg",                "vitaminDPercent":"?%",                "calciumMilligrams":"?mg",                "calciumPercent":"?%",                "ironMilligrams":"?mg",                "ironPercent":"?%",                "potassiumMilligrams":"?mg",                "potassiumPercent":"?%",                "caffeineMilligrams":"?mg"            }        }    ]}');
    
    // end delete
    
    const recipeLinksList = document.querySelector(".lcr-recipe-links-list");
    
    loadedRecipes = new Map();
    
    for(const recipeItem of jsonData.recipes) {
        
        let newRecipeData = {
            notes: recipeItem.notes,
            ingredients: recipeItem.ingredients,
            tools: recipeItem.tools,
            directions: recipeItem.directions,
            servingSize: recipeItem.nutrition.servingSize,
            calories: recipeItem.nutrition.calories,
            totalFatGrams: recipeItem.nutrition.totalFatGrams,
            totalFatPercent: recipeItem.nutrition.totalFatPercent,
            saturatedFatGrams: recipeItem.nutrition.saturatedFatGrams,
            saturatedFatPercent: recipeItem.nutrition.saturatedFatPercent,
            transFatGrams: recipeItem.nutrition.transFatGrams,
            polyunsaturatedFatGrams: recipeItem.nutrition.polyunsaturatedFatGrams,
            monounsaturatedFatGrams: recipeItem.nutrition.monounsaturatedFatGrams,
            cholesterolMilligrams: recipeItem.nutrition.cholesterolMilligrams,
            cholesterolPercent: recipeItem.nutrition.cholesterolPercent,
            sodiumMilligrams: recipeItem.nutrition.sodiumMilligrams,
            sodiumPercent: recipeItem.nutrition.sodiumPercent,
            totalCarbsGrams: recipeItem.nutrition.totalCarbsGrams,
            totalCarbsPercent: recipeItem.nutrition.totalCarbsPercent,
            dietaryFiberGrams: recipeItem.nutrition.dietaryFiberGrams,
            dietaryFiberPercent: recipeItem.nutrition.dietaryFiberPercent,
        };
        
        loadedRecipes.set(recipeItem.title, newRecipeData);
        
        const newListItemOuter = document.createElement("div");
        newListItemOuter.classList.add("lcr-recipe-links-list__item");
        
        const newListItemInner = document.createElement("div");
        newListItemInner.classList.add("lcr-recipe-links-list__link");
        
        newListItemInner.onclick =  function(){ switchToRecipe(recipeItem.title) };
        
        newListItemInner.textContent = recipeItem.title;
        
        newListItemOuter.appendChild(newListItemInner);
        recipeLinksList.appendChild(newListItemOuter);
    
    }
    
}

function setToText(htmlQuerySelector, textForInnerHTML) {
    (document.querySelector(htmlQuerySelector)).innerHTML = textForInnerHTML;
}

function setToList(htmlQuerySelector, listForInnerHTML) {
    const htmlElement = document.querySelector(htmlQuerySelector);
    htmlElement.innerHTML = "";
    
    for(const newItemText of listForInnerHTML) {
        const newLi = document.createElement("li");
        newLi.innerHTML = newItemText;
        htmlElement.append(newLi); 
    }
}

function switchToRecipe(whichRecipe) {
    
    // Set the recipe card's title:
    setToText(".lcr-recipe-card__title", whichRecipe);
    
    // Load recipe data:
    const newRecipeData = loadedRecipes.get(whichRecipe);
    
    // Set the recipe card's notes:
    setToText(".lcr-recipe-card__notes", newRecipeData.notes);
    
    // Set the recipe card's ingredients:
    setToList(".lcr-recipe-card__ingredients", newRecipeData.ingredients);
    
    // Set the recipe card's tools:
    setToList(".lcr-recipe-card__tools", newRecipeData.tools);
    
    // Set the recipe card's directions:
    setToList(".lcr-recipe-card__directions", newRecipeData.directions);
    
    // Set the recipe card's nutrition fact's serving size:
    setToText(".lcr-nutrition__serving-size-value", newRecipeData.servingSize);
    
    // Set the recipe card's nutrition fact's calories:
    setToText(".lcr-nutrition__calories-value", newRecipeData.calories);
    
    // Set the recipe card's nutrition fact's total fat grams:
    setToText(".lcr-nutrition__total-fat-grams-value", newRecipeData.totalFatGrams);
    
    // Set the recipe card's nutrition fact's total fat percentage:
    setToText(".lcr-nutrition__total-fat-percent-value", newRecipeData.totalFatPercent);
    
    // Set the recipe card's nutrition fact's saturated fat grams:
    setToText(".lcr-nutrition-saturatedFatGramsValue", newRecipeData.saturatedFatGrams);
    
    // Set the recipe card's nutrition fact's saturated fat percentage:
    setToText(".lcr-nutrition-saturatedFatPercentValue", newRecipeData.saturatedFatPercent);
    
    // Set the recipe card's nutrition fact's trans fat grams:
    setToText(".lcr-nutrition-transFatGramsValue", newRecipeData.transFatGrams);
    
    // Set the recipe card's nutrition fact's polyunsaturated fat grams:
    setToText(".lcr-nutrition-polyunsaturatedFatGramsValue", newRecipeData.polyunsaturatedFatGrams);
    
    // Set the recipe card's nutrition fact's monounsaturated fat grams:
    setToText(".lcr-nutrition-monounsaturatedFatGramsValue", newRecipeData.monounsaturatedFatGrams);
    
    // Set the recipe card's nutrition fact's cholesterol milligrams:
    setToText(".lcr-nutrition-cholesterolMilligramsValue", newRecipeData.cholesterolMilligrams);
    
    // Set the recipe card's nutrition fact's cholesterol percentage:
    setToText(".lcr-nutrition-cholesterolPercentValue", newRecipeData.cholesterolPercent);
    
    // Set the recipe card's nutrition fact's sodium milligrams:
    setToText(".lcr-nutrition-sodiumMilligramsValue", newRecipeData.sodiumMilligrams);
    
    // Set the recipe card's nutrition fact's sodium percentage:
    setToText(".lcr-nutrition-sodiumPercentValue", newRecipeData.sodiumPercent);
    
    // Set the recipe card's nutrition fact's total carbohydrate grams:
    setToText(".lcr-nutrition-totalCarbGramsValue", newRecipeData.totalCarbsGrams);
    
    // Set the recipe card's nutrition fact's total carbohydrate percentage:
    setToText(".lcr-nutrition-totalCarbPercentValue", newRecipeData.totalCarbsPercent);
    
    // Set the recipe card's nutrition fact's dietary fiber grams:
    setToText(".lcr-nutrition-dietaryFiberGramsValue", newRecipeData.dietaryFiberGrams);
    
    // Set the recipe card's nutrition fact's dietary fiber percentage:
    setToText(".lcr-nutrition-dietaryFiberPercentValue", newRecipeData.dietaryFiberPercent);
    
    
    
    
    
    
    
   
    
    
    // TODO: load the rest of the data into the nutrition facts
    
    // Show recipe card if hidden:
    const recipeCardContainer = document.querySelector(".lcr-recipe-card");
    recipeCardContainer.classList.remove("lcr-hidden");
    
}

loadAllRecipes();
