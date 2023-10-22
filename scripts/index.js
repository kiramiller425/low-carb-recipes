/**
 * This document contains the JS for the low carb recipe site. Comments are in JSDoc form.
 *
 * @author: Kira Miller
 */

// This holds all the recipe data after it has been loaded:
var loadedRecipes;

/**
 * This does the initial load of all the recipes.
 */
function loadAllRecipes() {

    let jsonData;

    // TODO: fix this. Currently it gives a CORS error:
/*
fetch('allRecipes.json')
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData));
    */
    
    // TODO: delete this. it is temporary to get around the CORS error:
    jsonData = JSON.parse('{"recipes": [{"title":"90 Second Almond Bread","notes":"based on <a href=\'https://www.wholesomeyum.com/keto-90-second-bread-recipe/\'>somewhere</a> on the internet. This recipe makes 2 slices that are shaped like the bowl you use. Great for sandwiches!","ingredients": ["1 Tablespoon salted butter","3 Tablespoons almond flour","1 teaspoon ground flax seed","1/2 teaspoon baking powder","1 large egg"],"tools": ["microwave","regular microwave-safe bowl","fork","big plate","butter knife"],"directions": ["In the microwave safe bowl, melt the butter in the microwave for 30 seconds.","Let it cool a minute.","Then add all of the dry ingredients to the bowl. Mix well.","Then add the egg and mix well again.","Put bowl into microwave for 90 seconds.","After it\'s done, turn bowl upside down onto a plate. It should just fall right off onto the plate.","With a knife, cut bread in half to make slices.","Eat it as is or put your favorite things inside it to make a delicious sandwich!"],"nutrition":{"servingSize":"the whole bread","calories":"331.2","totalFatGrams":"30.1g","totalFatPercent":"?%","saturatedFatGrams":"9.9g","saturatedFatPercent":"?%","transFatGrams":"0.5g","polyunsaturatedFatGrams":"5.9g","monounsaturatedFatGrams":"11.9g","cholesterolMilligrams":"217mg","cholesterolPercent":"?%","sodiumMilligrams":"408.2mg","sodiumPercent":"?%","totalCarbsGrams":"7.5g","totalCarbsPercent":"?%","dietaryFiberGrams":"4.4g","dietaryFiberPercent":"?%","sugarsGrams":"1.2g","proteinGrams":"12.1g","vitaminDMicrograms":"1mcg","vitaminDPercent":"?%","calciumMilligrams":"239mg","calciumPercent":"?%","ironMilligrams":"2.4mg","ironPercent":"?%","potassiumMilligrams":"279.6mg","potassiumPercent":"?%","caffeineMilligrams":"0mg"}},{"title":"Banana Peanut Butter Bars","notes":"based on <a href=\'https://www.powerhungry.com/2019/09/30/3-ingredient-banana-flax-bars-vegan\'>somewhere</a> on the internet. Makes 16 bars, 8g carbs each. Everyone loves these except me.","ingredients": ["1 cup (250 mL) mashed, very ripe bananas","2/3 cup (170 g) smooth peanut butter","1/2 cup (56 g) flaxseed meal","1 pinch of salt","34 chips (30g) of Ghiradelli 60% baking chocolate chips."],"tools": ["medium bowl","fork for mixing","butter knife","measuring cups","parchment paper","aluminum foil","oven","large cutting board","tupperware/container for storage"],"directions": ["Preheat oven to 325 degrees F","In a medium bowl, stir together the banana, nut butter, salt, and flaxseed meal until completley blended and smooth.","Place a large 12 inch square of parchment paper on top of a larger rectangle of aluminum foil.","Pour the batter onto the parchment paper and shape with a fork into a flat square. It should be about 9 x 9 inches. Leave enough of a border on the parchment paper on all sides for easy grip.","Bake in the preheated oven for 16 minutes until top appears dry and the center is firm to the touch.","Add chocolate chips on top of the peanut butter mixture.","Bake for 3 minutes.","Smooth out the chocolate chips with a fork.","Bake for 2 more minutes.","Take out and let cool completely on the counter.","Once cooled, transfer parchment paper with food onto cutting board.","Cut into 16 even sized bars.","Eat some and place the extra in refrigerator.","Once it\'s completely cold, freeze extra ones in the freezer (they\'ll last 6 months).","Thaw frozen ones on counter for 1 hour when ready to eat."],"nutrition":{"servingSize":"1 bar (total recipe makes 16 bars)","calories":"110","totalFatGrams":"?g","totalFatPercent":"?%","saturatedFatGrams":"?g","saturatedFatPercent":"?%","transFatGrams":"?g","polyunsaturatedFatGrams":"?g","monounsaturatedFatGrams":"?g","cholesterolMilligrams":"?mg","cholesterolPercent":"?%","sodiumMilligrams":"?mg","sodiumPercent":"?%","totalCarbsGrams":"8g","totalCarbsPercent":"?%","dietaryFiberGrams":"?g","dietaryFiberPercent":"?%","sugarsGrams":"?g","proteinGrams":"?g","vitaminDMicrograms":"?mcg","vitaminDPercent":"?%","calciumMilligrams":"?mg","calciumPercent":"?%","ironMilligrams":"?mg","ironPercent":"?%","potassiumMilligrams":"?mg","potassiumPercent":"?%","caffeineMilligrams":"?mg"}},{"title":"Coconut Frozen Fruit Smoothie","notes":"based on generic smoothies and heavily modified to become low carb. Depending on how frozen the fruit is, this can become more like ice cream! Makes about 2.5 cups (5 servings). You can freeze the rest and eat it later.","ingredients": ["1 cup coconut milk (unsweetened)","1/3 cup whole milk","47g frozen blueberries","52g frozen strawberries","40g frozen pinapple","38g frozen peach","46g frozen mango"],"tools": ["food scale to measure weight of fruit","blender","measuring cups","5 cups to hold smoothies","spoons"],"directions": ["Pour both liquids into the blender.","Add about half of the fruit (pick the largest pieces first).","Blend until smooth.","Then add the rest of the fruit.","Blend until smooth.","Pour 1/2 cup into each of the 5 cups.","Share or freeze the rest for later. When thawing from frozen, leave it in the fridge for at least 4 hours before eating."],"nutrition":{"servingSize":"1/2 cup (total recipe makes 5 servings)","calories":"42","totalFatGrams":"1.4g","totalFatPercent":"?%","saturatedFatGrams":"1.1g","saturatedFatPercent":"?%","transFatGrams":"?g","polyunsaturatedFatGrams":"?g","monounsaturatedFatGrams":"?g","cholesterolMilligrams":"2mg","cholesterolPercent":"?%","sodiumMilligrams":"7mg","sodiumPercent":"?%","totalCarbsGrams":"7g","totalCarbsPercent":"?%","dietaryFiberGrams":"1.1g","dietaryFiberPercent":"?%","sugarsGrams":"5.5g","proteinGrams":"0.8g","vitaminDMicrograms":"7mcg","vitaminDPercent":"?%","calciumMilligrams":"42mg","calciumPercent":"?%","ironMilligrams":"0mg","ironPercent":"?%","potassiumMilligrams":"84mg","potassiumPercent":"?%","caffeineMilligrams":"?mg"}},{"title":"Quick Hollandaise Sauce","notes":"based on <a href=\'https://www.allrecipes.com/recipe/233971/quick-and-easy-hollandaise-sauce-in-the-microwave/\'>somewhere</a> on the internet. This makes 2 generous servings.","ingredients": ["2 egg yolks","1 Tablespoon lemon juice","1 pinch salt","1/4 cup melted butter salted"],"tools": ["microwave","2 microwave safe bowls","another small bowl for the whites","fork"],"directions": ["You\'ll only use the egg yolks. Separate out the yolks into 1 bowl and the whites into another bowl. You can then use the whites in another recipe or throw them away.", "Microwave the butter until melted. It takes about 30 seconds.","Let it cool a bit.","Then mix the egg yolks, salt, and lemon juice together.","Add them to the butter, mixing a lot to prevent the butter from cooking the eggs.","Then put that bowl into the microwave for 6 seconds.","Take it out and mix it well.","Do this again and again until you\'ve cooked it for about 24 seconds total","Pour onto your favorite food!"],"nutrition":{"servingSize":"1/2 the recipe","calories":"260.3","totalFatGrams":"28.5g","totalFatPercent":"?%","saturatedFatGrams":"16.2g","saturatedFatPercent":"?%","transFatGrams":"1g","polyunsaturatedFatGrams":"1.6g","monounsaturatedFatGrams":"8g","cholesterolMilligrams":"246mg","cholesterolPercent":"?%","sodiumMilligrams":"192mg","sodiumPercent":"?%","totalCarbsGrams":"1g","totalCarbsPercent":"?%","dietaryFiberGrams":"0.1g","dietaryFiberPercent":"?%","sugarsGrams":"0.2g","proteinGrams":"3g","vitaminDMicrograms":"0.9mcg","vitaminDPercent":"?%","calciumMilligrams":"29.6mg","calciumPercent":"?%","ironMilligrams":"0.5mg","ironPercent":"?%","potassiumMilligrams":"33.6mg","potassiumPercent":"?%","caffeineMilligrams":"0mg"}},{"title":"Keto No-bake Cookie Dough","notes":"based on and modified from a few different recipes on the internet.","ingredients": ["1 cup almond flour","4 Tablespoons salted butter","2 Tablespoons Swerve","1 teapoon vanilla extract","1 pinch of salt"],"tools": ["microwave","a small microwave bowl","a regular mixing bowl","fork for mixing","teaspoon","tablespoon","measuring cup","tupperware/container for storage"],"directions": ["Melt butter in the small bowl for 15 seconds in the microwave.","Mix almond flour, salt, swerve together in another bowl.","Add the melted butter to the other bowl and mix thoroughly.","Add the vanilla and mix thoroughly.","Make into 12 equal sized balls.","Eat what you like and then place the rest in a tupperware in the fridge for later. They last about a week."],"nutrition":{"servingSize":"1 ball (there are 12 total in this recipe)","calories":"90","totalFatGrams":"8.7g","totalFatPercent":"?%","saturatedFatGrams":"2.8g","saturatedFatPercent":"?%","transFatGrams":"?g","polyunsaturatedFatGrams":"1.3g","monounsaturatedFatGrams":"3.9g","cholesterolMilligrams":"10.3mg","cholesterolPercent":"?%","sodiumMilligrams":"30.5mg","sodiumPercent":"?%","totalCarbsGrams":"4g","totalCarbsPercent":"?%","dietaryFiberGrams":"1.2g","dietaryFiberPercent":"?%","sugarsGrams":"0.5g","proteinGrams":"2g","vitaminDMicrograms":"0mcg","vitaminDPercent":"0%","calciumMilligrams":"26.3mg","calciumPercent":"?%","ironMilligrams":"0.4mg","ironPercent":"?%","potassiumMilligrams":"70mg","potassiumPercent":"?%","caffeineMilligrams":"0mg"}},{"title":"Spinach and Cream","notes":"based on <a href=\'https://www.marthastewart.com/317508/easy-creamed-spinach\'>somewhere</a> on the internet. This recipe makes about 13 servings. It freezes well.","ingredients": ["30 oz (usually 3 10oz boxes) of frozen chopped spinach","2 tablespoons salted butter","1/4 cup chopped dried onion flakes","1/2 cup water","1 Tablespoon garlic salt","4 ounces (113g) neufchatel cheese","1/2 cup 1% milk","pinch ground pepper","pinch of nutmeg (optional)"],"tools": ["stove","big pot","colander","stirring spoon that can tolerate heat","measuring spoons","measuring cups","knife to cut butter and cheese","large freezer bags for storage"],"directions": ["Bring a large pot of water to a boil on high heat.","Then add the frozen spinach, and cook until thawed and boiling.","Drain in a colander and set aside.","In the now empty pot, turn heat to medium and add butter, onion flakes, water, garlic salt, and pepper.","Cook, stirring occasionally, until it bubbles and onion softens, 3 to 5 minutes.","Add the cheese and milk; cook, stirring, until cheese is melted and smooth.","Stir in the spinach.","Simmer over low heat until mixture thickens a little, 8 to 10 minutes.","Add nutmeg if you want.","Eat some right away.","Let the rest cool down and then you can put serving size lumps into a freezer bag and freeze. Then you can thaw a lump whenever you want."],"nutrition":{"servingSize":"1/2 cup (total recipe makes about 13 servings)","calories":"63","totalFatGrams":"4.1g","totalFatPercent":"?%","saturatedFatGrams":"2.3g","saturatedFatPercent":"?%","transFatGrams":"0.1g","polyunsaturatedFatGrams":"?g","monounsaturatedFatGrams":"?g","cholesterolMilligrams":"11.7mg","cholesterolPercent":"?%","sodiumMilligrams":"458mg","sodiumPercent":"?%","totalCarbsGrams":"5g","totalCarbsPercent":"?%","dietaryFiberGrams":"1.7g","dietaryFiberPercent":"?%","sugarsGrams":"1.6g","proteinGrams":"3.2g","vitaminDMicrograms":"0.1mcg","vitaminDPercent":"?%","calciumMilligrams":"114.3mg","calciumPercent":"?%","ironMilligrams":"2.3mg","ironPercent":"?%","potassiumMilligrams":"358.3mg","potassiumPercent":"?%","caffeineMilligrams":"0mg"}}]}');
    
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
            sugarsGrams: recipeItem.nutrition.sugarsGrams,
            proteinGrams: recipeItem.nutrition.proteinGrams,
            vitaminDMicrograms: recipeItem.nutrition.vitaminDMicrograms,
            vitaminDPercent: recipeItem.nutrition.vitaminDPercent,
            calciumMilligrams: recipeItem.nutrition.calciumMilligrams,
            calciumPercent: recipeItem.nutrition.calciumPercent,
            ironMilligrams: recipeItem.nutrition.ironMilligrams,
            ironPercent: recipeItem.nutrition.ironPercent,
            potassiumMilligrams: recipeItem.nutrition.potassiumMilligrams,
            potassiumPercent: recipeItem.nutrition.potassiumPercent,
            caffeineMilligrams: recipeItem.nutrition.caffeineMilligrams
        };
        
        loadedRecipes.set(recipeItem.title, newRecipeData);
        
        const newListItemOuter = document.createElement("div");
        newListItemOuter.classList.add("lcr-recipe-links-list__item");
        
        const newListItemInner = document.createElement("div");
        newListItemInner.classList.add("lcr-recipe-links-list__link");
        
        newListItemInner.onclick = function(){ switchToRecipe(recipeItem.title) };
        
        newListItemInner.textContent = recipeItem.title;
        
        newListItemOuter.appendChild(newListItemInner);
        recipeLinksList.appendChild(newListItemOuter);
    
    }
    
    // Append some helpful sites:
    const titleOfHelpfulSites = document.createElement("div");
    titleOfHelpfulSites.classList.add("lcr-recipe-links-list__title");
    titleOfHelpfulSites.textContent = "Helpful Sites:";
    recipeLinksList.appendChild(titleOfHelpfulSites);
    
    let newListItemOuter = document.createElement("div");
    newListItemOuter.classList.add("lcr-recipe-links-list__item");
    let newListItemInner = document.createElement("a");
    newListItemInner.classList.add("lcr-recipe-links-list__link");
    newListItemInner.textContent = "Just The Recipe .com";
    newListItemInner.onclick = function(){ window.open('https://www.justtherecipe.com') };
    newListItemOuter.appendChild(newListItemInner);
    recipeLinksList.appendChild(newListItemOuter);
    
    newListItemOuter = document.createElement("div");
    newListItemOuter.classList.add("lcr-recipe-links-list__item");
    newListItemInner = document.createElement("a");
    newListItemInner.classList.add("lcr-recipe-links-list__link");
    newListItemInner.textContent = "Recipe Nutrition Analyzer";
    newListItemInner.onclick = function(){ window.open('https://www.verywellfit.com/recipe-nutrition-analyzer-4157076') };
    newListItemOuter.appendChild(newListItemInner);
    recipeLinksList.appendChild(newListItemOuter);
    
    
    
      
    
    
}

/**
 * This is a utility method for setting the inner html to the text string.
 */
function setToText(htmlQuerySelector, textForInnerHTML) {
    (document.querySelector(htmlQuerySelector)).innerHTML = textForInnerHTML;
}

/**
 * This is a utility method for setting the inner html to a collection of LIs representing each item in the list of strings.
 */
function setToList(htmlQuerySelector, listForInnerHTML) {
    const htmlElement = document.querySelector(htmlQuerySelector);
    htmlElement.innerHTML = "";
    
    for(const newItemText of listForInnerHTML) {
        const newLi = document.createElement("li");
        newLi.innerHTML = newItemText;
        htmlElement.append(newLi); 
    }
}

/**
 * This switches the recipe to the one passed in, changing out the ingredients, directions, nutrition facts, etc. to the new one's information.
 */
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
    
    // Set the recipe card's nutrition fact's sugar grams:
    setToText(".lcr-nutrition-sugarsGramsValue", newRecipeData.sugarsGrams);
    
    // Set the recipe card's nutrition fact's protein grams:
    setToText(".lcr-nutrition-proteinGramsValue", newRecipeData.proteinGrams);
    
    // Set the recipe card's nutrition fact's vitamin D micrograms:
    setToText(".lcr-nutrition-vitaminDMicrogramsValue", newRecipeData.vitaminDMicrograms);
    
    // Set the recipe card's nutrition fact's vitamin D percentage:
    setToText(".lcr-nutrition-vitaminDPercentValue", newRecipeData.vitaminDPercent);
    
    // Set the recipe card's nutrition fact's calcium milligrams:
    setToText(".lcr-nutrition-calciumMilligramsValue", newRecipeData.calciumMilligrams);
    
    // Set the recipe card's nutrition fact's calcium percentage:
    setToText(".lcr-nutrition-calciumPercentValue", newRecipeData.calciumPercent);
    
    // Set the recipe card's nutrition fact's iron milligrams:
    setToText(".lcr-nutrition-ironMilligramsValue", newRecipeData.ironMilligrams);
    
    // Set the recipe card's nutrition fact's iron percentage:
    setToText(".lcr-nutrition-ironPercentValue", newRecipeData.ironPercent);
    
    // Set the recipe card's nutrition fact's potassium milligrams:
    setToText(".lcr-nutrition-potassiumMilligramsValue", newRecipeData.potassiumMilligrams);
    
    // Set the recipe card's nutrition fact's potassium percentage:
    setToText(".lcr-nutrition-potassiumPercentValue", newRecipeData.potassiumPercent);
   
    // Set the recipe card's nutrition fact's caffeine milligrams:
    setToText(".lcr-nutrition-caffeineMilligramsValue", newRecipeData.caffeineMilligrams);
    
    // Show recipe card if hidden:
    const recipeCardContainer = document.querySelector(".lcr-recipe-card");
    recipeCardContainer.classList.remove("lcr-hidden");
    
}

loadAllRecipes();
