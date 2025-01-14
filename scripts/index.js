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
    jsonData = JSON.parse('{ "recipes": [ { "title":"90 Second Almond Bread", "notes":"based on <a href=\'https://www.wholesomeyum.com/keto-90-second-bread-recipe/\'>somewhere</a> on the internet. This recipe makes 2 slices that are shaped like the bowl you use. Great for sandwiches!", "ingredients": ["1 Tablespoon salted butter","3 Tablespoons almond flour","1 teaspoon ground flax seed","1/2 teaspoon baking powder","1 large egg"], "tools": ["microwave","regular microwave-safe bowl","fork","big plate","butter knife"], "directions": ["In the microwave safe bowl, melt the butter in the microwave for 30 seconds.","Let it cool a minute.","Then add all of the dry ingredients to the bowl. Mix well.","Then add the egg and mix well again.","Put bowl into microwave for 90 seconds.","After it\'s done, turn bowl upside down onto a plate. It should just fall right off onto the plate.","With a knife, cut bread in half to make slices.","Eat it as is or put your favorite things inside it to make a delicious sandwich!"], "nutrition":{ "servingSize":"the whole bread", "calories":"331.2", "totalFatGrams":"30.1g", "totalFatPercent":"?%", "saturatedFatGrams":"9.9g", "saturatedFatPercent":"?%", "transFatGrams":"0.5g", "polyunsaturatedFatGrams":"5.9g", "monounsaturatedFatGrams":"11.9g", "cholesterolMilligrams":"217mg", "cholesterolPercent":"?%", "sodiumMilligrams":"408.2mg", "sodiumPercent":"?%", "totalCarbsGrams":"7.5g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"4.4g", "dietaryFiberPercent":"?%", "sugarsGrams":"1.2g", "proteinGrams":"12.1g", "vitaminDMicrograms":"1mcg", "vitaminDPercent":"?%", "calciumMilligrams":"239mg", "calciumPercent":"?%", "ironMilligrams":"2.4mg", "ironPercent":"?%", "potassiumMilligrams":"279.6mg", "potassiumPercent":"?%", "caffeineMilligrams":"0mg" } },{ "title":"Banana Peanut Butter Bars", "notes":"based on <a href=\'https://www.powerhungry.com/2019/09/30/3-ingredient-banana-flax-bars-vegan\'>somewhere</a> on the internet. Makes 16 bars, 8g carbs each. Everyone loves these except me.", "ingredients": ["1 cup (250 mL) mashed, very ripe bananas","2/3 cup (170 g) smooth peanut butter","1/2 cup (56 g) flaxseed meal","1 pinch of salt","34 chips (30g) of Ghiradelli 60% baking chocolate chips."], "tools": ["medium bowl","fork for mixing","butter knife","measuring cups","parchment paper","aluminum foil","oven","large cutting board","tupperware/container for storage"], "directions": ["Preheat oven to 325 degrees F","In a medium bowl, stir together the banana, nut butter, salt, and flaxseed meal until completley blended and smooth.","Place a large 12 inch square of parchment paper on top of a larger rectangle of aluminum foil.","Pour the batter onto the parchment paper and shape with a fork into a flat square. It should be about 9 x 9 inches. Leave enough of a border on the parchment paper on all sides for easy grip.","Bake in the preheated oven for 16 minutes until top appears dry and the center is firm to the touch.","Add chocolate chips on top of the peanut butter mixture.","Bake for 3 minutes.","Smooth out the chocolate chips with a fork.","Bake for 2 more minutes.","Take out and let cool completely on the counter.","Once cooled, transfer parchment paper with food onto cutting board.","Cut into 16 even sized bars.","Eat some and place the extra in refrigerator.","Once it\'s completely cold, freeze extra ones in the freezer (they\'ll last 6 months).","Thaw frozen ones on counter for 1 hour when ready to eat."], "nutrition":{ "servingSize":"1 bar (total recipe makes 16 bars)", "calories":"110", "totalFatGrams":"?g", "totalFatPercent":"?%", "saturatedFatGrams":"?g", "saturatedFatPercent":"?%", "transFatGrams":"?g", "polyunsaturatedFatGrams":"?g", "monounsaturatedFatGrams":"?g", "cholesterolMilligrams":"?mg", "cholesterolPercent":"?%", "sodiumMilligrams":"?mg", "sodiumPercent":"?%", "totalCarbsGrams":"8g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"?g", "dietaryFiberPercent":"?%", "sugarsGrams":"?g", "proteinGrams":"?g", "vitaminDMicrograms":"?mcg", "vitaminDPercent":"?%", "calciumMilligrams":"?mg", "calciumPercent":"?%", "ironMilligrams":"?mg", "ironPercent":"?%", "potassiumMilligrams":"?mg", "potassiumPercent":"?%", "caffeineMilligrams":"?mg" } },{ "title":"Coconut Frozen Fruit Smoothie", "notes":"based on generic smoothies and heavily modified to become low carb. Depending on how frozen the fruit is, this can become more like ice cream! Makes about 2.5 cups (5 servings). You can freeze the rest and eat it later.", "ingredients": ["1 cup coconut milk (unsweetened)","1/3 cup whole milk","47g frozen blueberries","52g frozen strawberries","40g frozen pinapple","38g frozen peach","46g frozen mango"], "tools": ["food scale to measure weight of fruit","blender","measuring cups","5 cups to hold smoothies","spoons"], "directions": ["Pour both liquids into the blender.","Add about half of the fruit (pick the largest pieces first).","Blend until smooth.","Then add the rest of the fruit.","Blend until smooth.","Pour 1/2 cup into each of the 5 cups.","Share or freeze the rest for later. When thawing from frozen, leave it in the fridge for at least 4 hours before eating."], "nutrition":{ "servingSize":"1/2 cup (total recipe makes 5 servings)", "calories":"42", "totalFatGrams":"1.4g", "totalFatPercent":"?%", "saturatedFatGrams":"1.1g", "saturatedFatPercent":"?%", "transFatGrams":"?g", "polyunsaturatedFatGrams":"?g", "monounsaturatedFatGrams":"?g", "cholesterolMilligrams":"2mg", "cholesterolPercent":"?%", "sodiumMilligrams":"7mg", "sodiumPercent":"?%", "totalCarbsGrams":"7g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"1.1g", "dietaryFiberPercent":"?%", "sugarsGrams":"5.5g", "proteinGrams":"0.8g", "vitaminDMicrograms":"7mcg", "vitaminDPercent":"?%", "calciumMilligrams":"42mg", "calciumPercent":"?%", "ironMilligrams":"0mg", "ironPercent":"?%", "potassiumMilligrams":"84mg", "potassiumPercent":"?%", "caffeineMilligrams":"?mg" } },{ "title":"Keto No-bake Cookie Dough", "notes":"based on and modified from a few different recipes on the internet.", "ingredients": ["1 cup almond flour","4 Tablespoons salted butter","2 Tablespoons Swerve","1 teapoon vanilla extract","1 pinch of salt"], "tools": ["microwave","a small microwave bowl","a regular mixing bowl","fork for mixing","teaspoon","tablespoon","measuring cup","tupperware/container for storage"], "directions": ["Melt butter in the small bowl for 15 seconds in the microwave.","Mix almond flour, salt, swerve together in another bowl.","Add the melted butter to the other bowl and mix thoroughly.","Add the vanilla and mix thoroughly.","Make into 12 equal sized balls.","Eat what you like and then place the rest in a tupperware in the fridge for later. They last about a week."], "nutrition":{ "servingSize":"1 ball (there are 12 total in this recipe)", "calories":"90", "totalFatGrams":"8.7g", "totalFatPercent":"?%", "saturatedFatGrams":"2.8g", "saturatedFatPercent":"?%", "transFatGrams":"?g", "polyunsaturatedFatGrams":"1.3g", "monounsaturatedFatGrams":"3.9g", "cholesterolMilligrams":"10.3mg", "cholesterolPercent":"?%", "sodiumMilligrams":"30.5mg", "sodiumPercent":"?%", "totalCarbsGrams":"4g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"1.2g", "dietaryFiberPercent":"?%", "sugarsGrams":"0.5g", "proteinGrams":"2g", "vitaminDMicrograms":"0mcg", "vitaminDPercent":"0%", "calciumMilligrams":"26.3mg", "calciumPercent":"?%", "ironMilligrams":"0.4mg", "ironPercent":"?%", "potassiumMilligrams":"70mg", "potassiumPercent":"?%", "caffeineMilligrams":"0mg" } },{ "title":"Quick Hollandaise Sauce", "notes":"based on <a href=\'https://www.allrecipes.com/recipe/233971/quick-and-easy-hollandaise-sauce-in-the-microwave/\'>somewhere</a> on the internet. This makes 2 generous servings.", "ingredients": ["2 egg yolks","1 Tablespoon lemon juice","1 pinch salt","1/4 cup melted butter salted"], "tools": ["microwave","2 microwave safe bowls","another small bowl for the whites","fork"], "directions": ["You\'ll only use the egg yolks. Separate out the yolks into 1 bowl and the whites into another bowl. You can then use the whites in another recipe or throw them away.", "Microwave the butter until melted. It takes about 30 seconds.","Let it cool a bit.","Then mix the egg yolks, salt, and lemon juice together.","Add them to the butter, mixing a lot to prevent the butter from cooking the eggs.","Then put that bowl into the microwave for 6 seconds.","Take it out and mix it well.","Do this again and again until you\'ve cooked it for about 24 seconds total","Pour onto your favorite food!"], "nutrition":{ "servingSize":"1/2 the recipe", "calories":"260.3", "totalFatGrams":"28.5g", "totalFatPercent":"?%", "saturatedFatGrams":"16.2g", "saturatedFatPercent":"?%", "transFatGrams":"1g", "polyunsaturatedFatGrams":"1.6g", "monounsaturatedFatGrams":"8g", "cholesterolMilligrams":"246mg", "cholesterolPercent":"?%", "sodiumMilligrams":"192mg", "sodiumPercent":"?%", "totalCarbsGrams":"1g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"0.1g", "dietaryFiberPercent":"?%", "sugarsGrams":"0.2g", "proteinGrams":"3g", "vitaminDMicrograms":"0.9mcg", "vitaminDPercent":"?%", "calciumMilligrams":"29.6mg", "calciumPercent":"?%", "ironMilligrams":"0.5mg", "ironPercent":"?%", "potassiumMilligrams":"33.6mg", "potassiumPercent":"?%", "caffeineMilligrams":"0mg" } },{ "title":"Shakshuka", "notes":"based on some random things I found online and forgot about, then heavily modified.", "ingredients": ["1 Tablespoons olive oil","1/4 cup dried onion flakes","3/4 cup water","1 teaspoon cumin","1/8 teaspoon garlic powder","1/4 teaspoon salt","1/8 teaspoon pepper","8 oz tomatoes (about 4 medium-small sized tomatoes)","4 eggs","1/2 cup baby spinach 1"], "tools": ["square glass 8x8 inch oven pan","oven","medium bowl","small bowl","cutting board","knife","measuring spoons","scale","pyrex measuring cup with pour spout"], "directions": ["Preheat oven to 400 degrees.","Add dried onion flakes and water into a medium bowl.","Add the cumin, garlic powder, salt and pepper into that bowl. Mix well.","On the cutting board, cut tomatoes into 3 big round parts, cutting off the green top.","Pour the olive oil into the glass pan. Coat the bottom evenly.","Add the cumin onion mix into the pan. Spread out evenly.","Add the tomatoes in a big X pattern so that there are 4 holes on the sides, created by the gaps in the X design.","Put into oven for 20 min.","Chop the spinach into small pieces about 1/2 cm x 1 cm strips. Set aside in a small bowl.","in the pyrex cup with a pour spout, crack 1 of the eggs. Try not to break the yolk. But it\'s ok if you do.","When the pan has been in for the full amount of time, pour the egg into 1 of the holes to the side of the X of tomatoes.","Repeat, pouring 1 egg at a time into each hole until all 4 holes are filled with an egg.","Bake for 10 minutes more.","Take out and sprinkle all the spinach evenly over the whole thing.","Serve each serving on 1/2 cup of riced cauliflower. The nutrition facts for the cauliflower are not included below."], "nutrition":{ "servingSize":"1/4 of the recipe", "calories":"119", "totalFatGrams":"8g", "totalFatPercent":"10%", "saturatedFatGrams":"1.9g", "saturatedFatPercent":"9%", "transFatGrams":"?g", "polyunsaturatedFatGrams":"?g", "monounsaturatedFatGrams":"?g", "cholesterolMilligrams":"164mg", "cholesterolPercent":"55%", "sodiumMilligrams":"218mg", "sodiumPercent":"9%", "totalCarbsGrams":"6g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"1.2g", "dietaryFiberPercent":"4%", "sugarsGrams":"3.2g", "proteinGrams":"6.6g", "vitaminDMicrograms":"15mcg", "vitaminDPercent":"?%", "calciumMilligrams":"48mg", "calciumPercent":"4%", "ironMilligrams":"1mg", "ironPercent":"8%", "potassiumMilligrams":"283mg", "potassiumPercent":"6%", "caffeineMilligrams":"?mg" } },{ "title":"Spinach and Cream", "notes":"based on <a href=\'https://www.marthastewart.com/317508/easy-creamed-spinach\'>somewhere</a> on the internet. This recipe makes about 13 servings. It freezes well.", "ingredients": ["30 oz (usually 3 10oz boxes) of frozen chopped spinach","2 tablespoons salted butter","1/4 cup chopped dried onion flakes","1/2 cup water","1 Tablespoon garlic salt","4 ounces (113g) neufchatel cheese","1/2 cup 1% milk","pinch ground pepper","pinch of nutmeg (optional)"], "tools": ["stove","big pot","colander","stirring spoon that can tolerate heat","measuring spoons","measuring cups","knife to cut butter and cheese","large freezer bags for storage"], "directions": ["Bring a large pot of water to a boil on high heat.","Then add the frozen spinach, and cook until thawed and boiling.","Drain in a colander and set aside.","In the now empty pot, turn heat to medium and add butter, onion flakes, water, garlic salt, and pepper.","Cook, stirring occasionally, until it bubbles and onion softens, 3 to 5 minutes.","Add the cheese and milk; cook, stirring, until cheese is melted and smooth.","Stir in the spinach.","Simmer over low heat until mixture thickens a little, 8 to 10 minutes.","Add nutmeg if you want.","Eat some right away.","Let the rest cool down and then you can put serving size lumps into a freezer bag and freeze. Then you can thaw a lump whenever you want."], "nutrition":{ "servingSize":"1/2 cup (total recipe makes about 13 servings)", "calories":"63", "totalFatGrams":"4.1g", "totalFatPercent":"?%", "saturatedFatGrams":"2.3g", "saturatedFatPercent":"?%", "transFatGrams":"0.1g", "polyunsaturatedFatGrams":"?g", "monounsaturatedFatGrams":"?g", "cholesterolMilligrams":"11.7mg", "cholesterolPercent":"?%", "sodiumMilligrams":"458mg", "sodiumPercent":"?%", "totalCarbsGrams":"5g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"1.7g", "dietaryFiberPercent":"?%", "sugarsGrams":"1.6g", "proteinGrams":"3.2g", "vitaminDMicrograms":"0.1mcg", "vitaminDPercent":"?%", "calciumMilligrams":"114.3mg", "calciumPercent":"?%", "ironMilligrams":"2.3mg", "ironPercent":"?%", "potassiumMilligrams":"358.3mg", "potassiumPercent":"?%", "caffeineMilligrams":"0mg" } },{ "title":"Moroccan Salad", "notes":"based on <a href=\'http://www.4kidsnus.com/blogtest/recipe/2008/11/19/disney_recipe_moroccan_cucumber_and_toma_9\'>somewhere</a> on the internet. This one is a favorite among our friends. It goes great with small bread slices (especially the almond bread). Total creation time: about 1 hour. This recipe makes about 3.75 cups. Makes a yummy snack or side dish.", "ingredients": ["1.5 cups fresh cucumber peeled, diced into 0.5 cm cubes (about 1 cucumber)", "1.5 cups fresh tomatoes diced into 0.5 cm cubes (about 2 tomatoes)","0.5 cups fresh onion diced into 0.5 cm cubes (about 1 onion)", "1 teaspoon finely chopped parsely (dried is fine)", "1 teaspoon finely chopped cilantro (dried is fine)", "2 Tablespoons extra virgin olive oil", "2 Tablespoons white vinegar", "0.25 teaspoon salt"], "tools": ["cutting board", "knife", "peeler", "big bowl with lid", "measuring spoons", "measuring cups", "refrigerator"], "directions": ["Dice cucumber and tomatoes and onion into small cubes.", "Finely chop parsley and cilantro if needed or use dried spices instead.", "Mix all ingredients together in a big bowl. put a lid on the bowl.", "Leave in refrigerator for at least an hour (longer = better).", "Serve cold. Best eaten with keto bread."], "nutrition":{ "servingSize":"1/4 cup (15 servings total)", "calories":"24", "totalFatGrams":"2g", "totalFatPercent":"?%", "saturatedFatGrams":"0.3g", "saturatedFatPercent":"?%", "transFatGrams":"0g", "polyunsaturatedFatGrams":"0.2g", "monounsaturatedFatGrams":"1.3g", "cholesterolMilligrams":"0mg", "cholesterolPercent":"0%", "sodiumMilligrams":"40mg", "sodiumPercent":"?%", "totalCarbsGrams":"1.8g", "totalCarbsPercent":"?%",  "dietaryFiberGrams":"0.4g", "dietaryFiberPercent":"?%", "sugarsGrams":"1g", "proteinGrams":"0.3g", "vitaminDMicrograms":"0mcg", "vitaminDPercent":"0%", "calciumMilligrams":"5.3mg", "calciumPercent":"?%", "ironMilligrams":"0.1mg", "ironPercent":"?%", "potassiumMilligrams":"67mg", "potassiumPercent":"?%", "caffeineMilligrams":"0mg" }  },{ "title":"Four Bean Chili", "notes":"I\'ve made a lot of variations on this and they\'re all delicious. Freezes great too.", "ingredients": ["1 Tablespoon garlic salt","2 Tablespoons dried oregano","1 Tablespoon olive oil","1 teaspoon cumin, ground","1 teaspoon coriander, ground","Two 15oz cans of tomato sauce (I used Safeway\'s Signature Select brand)","One 15oz can of black beans (I used Kroger brand)","One 15oz can Great Northern Beans (I used Great Value brand)","One 15oz can dark red kidney beans (I used Bush\'s brand)","One 15oz can Pinto Beans (I used Kroger brand)","2 cups of Vegetable Broth (I used Pacific Foods brand)","2 bay leaves"], "tools": ["instant pot (or a slow cooker)","can opener","measuring spoons","measuring cups"], "directions": ["Add everything except the bay leaves into the instant pot.","Stir well.","Then put the leaves on top of the chili.","Close the lid and press the Bean Chili option on the instant pot. Or cook in a slow cooker for at least 2 hours.","After it\'s done, take off lid, turn off cooker and let it cool a bit before serving.","It freezes really well!"], "nutrition":{ "servingSize":"1/2 cup", "calories":"76", "totalFatGrams":"0.6g", "totalFatPercent":"?%", "saturatedFatGrams":"0.1g", "saturatedFatPercent":"?%", "transFatGrams":"0g", "polyunsaturatedFatGrams":"0.1g", "monounsaturatedFatGrams":"0.4g", "cholesterolMilligrams":"0mg", "cholesterolPercent":"?%", "sodiumMilligrams":"483mg", "sodiumPercent":"?%", "totalCarbsGrams":"14g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"4g", "dietaryFiberPercent":"?%", "sugarsGrams":"2g", "proteinGrams":"4.5g", "vitaminDMicrograms":"0mcg", "vitaminDPercent":"?%", "calciumMilligrams":"44mg", "calciumPercent":"?%", "ironMilligrams":"1.3mg", "ironPercent":"?%", "potassiumMilligrams":"333mg", "potassiumPercent":"?%", "caffeineMilligrams":"0mg" }  },{ "title":"Low Carb Chocolate Cake", "notes":"This is based on a few recipes I found somewhere on the internet and then combined and modified. It turns out pretty good. I recommend spreading the Chocolate Butter Cream Cheese Frosting on top of it. Eat a slice with a Tablespoon of peanut butter for best results.", "ingredients": ["1.5 cups almond flour","1/4 cup + 2 Tablespoons unsweetened cocoa powder (I recommend Ghiradelli)","2.25 teaspoons baking powder","1/2 teaspoon salt","1/3 cup granulated erythritol","1/3 cup 1 percent milk","3 large eggs","1.5 teaspoon vanilla extract","butter for greasing pan"], "tools": ["an 8 inch round foil cake pan","oven","measuring cups and spoons","standing mixer like a KitchenAid or something"], "directions": ["Preheat oven to 350 degrees F.","Grease the pan.","Mix all ingredients together into the standing mixer.","Pour the batter into the cake pan.","Bake for 14 minutes.","test it with a toothpick in the middle. If it is still wet, bake 3 more minutes. Repeat until a toothpick comes out clean.","Let it cool to room temperature before frosting (if you want)."], "nutrition":{ "servingSize":"a slice that is 1/8 of the cake (NOT FROSTED)", "calories":"199", "totalFatGrams":"14g", "totalFatPercent":"?%", "saturatedFatGrams":"1.4g", "saturatedFatPercent":"?%", "transFatGrams":"0.01g", "polyunsaturatedFatGrams":"3.4g", "monounsaturatedFatGrams":"7.4g", "cholesterolMilligrams":"70.1mg", "cholesterolPercent":"?%", "sodiumMilligrams":"288mg", "sodiumPercent":"?%", "totalCarbsGrams":"15g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"3.7g", "dietaryFiberPercent":"?%", "sugarsGrams":"1.5g", "proteinGrams":"8g", "vitaminDMicrograms":"0.5mcg", "vitaminDPercent":"?%", "calciumMilligrams":"148mg", "calciumPercent":"?%", "ironMilligrams":"1.7mg", "ironPercent":"?%", "potassiumMilligrams":"242mg", "potassiumPercent":"?%", "caffeineMilligrams":"0mg" }  },{ "title":"Chocolate Butter Cream Cheese Frosting", "notes":"Based on several recipes I found online (I forgot the URLs). I modified to create this one to have far less sugar in it, giving it a richer taste that is still sweet. This will frost one 8 inch round cake.", "ingredients": ["1/4 cup salted butter","4 oz (113.4g) cream cheese, softened","1/2 cup Swerve confectioners sweetener (that just means powdered swerve)","1/2 teaspoon vanilla extract","1/8 cup unsweetened cocoa powder (I recommend Ghiradelli brand)"], "tools": ["microwave","regular sized microwavable bowl","a big standing mixer (like KitchenAid)","spatula","fridge","measuring spoons"], "directions": ["Melt the butter in the bowl in the microwave for 15 seconds until it is softened but not liquid.","Pour it into the big standing mixer bowl.","Melt the cream cheese in the bowl in the microwave for 15 seconds until it is softened.","Pour it into the big standing mixer bowl.","Add the rest of the ingredients into the big standing mixer bowl.","Turn on the mixer to very low speed until everything is fully mixed.","Then turn up the speed to medium for at least 2 minutes to give the frosting a nice whipped texture. Up to you for how whipped you like it.","Turn off mixer and unplug for safety.","Use the spatula to remove the frosting from the mixing tool. Then frost a cake or whatever you like!"], "nutrition":{ "servingSize":"1/8 of total frosting (about 8.5 teaspoons)", "calories":"106.4", "totalFatGrams":"11g", "totalFatPercent":"?%", "saturatedFatGrams":"6.7g", "saturatedFatPercent":"?%", "transFatGrams":"0.96g", "polyunsaturatedFatGrams":"0.4g", "monounsaturatedFatGrams":"2.8g", "cholesterolMilligrams":"30.8mg", "cholesterolPercent":"?%", "sodiumMilligrams":"108.5mg", "sodiumPercent":"?%", "totalCarbsGrams":"9.3g", "totalCarbsPercent":"?%", "dietaryFiberGrams":"0.5g", "dietaryFiberPercent":"?%", "sugarsGrams":"0.5g", "proteinGrams":"1.3g", "vitaminDMicrograms":"0mcg", "vitaminDPercent":"?%", "calciumMilligrams":"14.3mg", "calciumPercent":"?%", "ironMilligrams":"0.2mg", "ironPercent":"?%", "potassiumMilligrams":"25.1mg", "potassiumPercent":"?%", "caffeineMilligrams":"0mg" }  } ]}');
    
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
    
    // This site is no longer reliable. It contains errors on nutrition facts for a lot of foods:
    /*
    newListItemOuter = document.createElement("div");
    newListItemOuter.classList.add("lcr-recipe-links-list__item");
    newListItemInner = document.createElement("a");
    newListItemInner.classList.add("lcr-recipe-links-list__link");
    newListItemInner.textContent = "Recipe Nutrition Analyzer";
    newListItemInner.onclick = function(){ window.open('https://www.verywellfit.com/recipe-nutrition-analyzer-4157076') };
    newListItemOuter.appendChild(newListItemInner);
    recipeLinksList.appendChild(newListItemOuter);
    */
    
    newListItemOuter = document.createElement("div");
    newListItemOuter.classList.add("lcr-recipe-links-list__item");
    newListItemInner = document.createElement("a");
    newListItemInner.classList.add("lcr-recipe-links-list__link");
    newListItemInner.textContent = "Nutrition ix Facts of Foods";
    newListItemInner.onclick = function(){ window.open('https://www.nutritionix.com/food/tomato/2-cup-chopped-or-sliced') };
    newListItemOuter.appendChild(newListItemInner);
    recipeLinksList.appendChild(newListItemOuter);
    
    newListItemOuter = document.createElement("div");
    newListItemOuter.classList.add("lcr-recipe-links-list__item");
    newListItemInner = document.createElement("a");
    newListItemInner.classList.add("lcr-recipe-links-list__link");
    newListItemInner.textContent = "Food Volume Converter";
    newListItemInner.onclick = function(){ window.open('https://www.aqua-calc.com/calculate/food-volume-to-weight/substance/basil-coma-and-blank-fresh-blank--op-leaves-coma-and-blank-whole-cp-') };
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
