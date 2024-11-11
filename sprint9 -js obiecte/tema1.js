// Write a function that creates an object to hold information about your favorite recipe

function getRecipe(title, mumberOfPortions, incredients) {
    const recipe= {
        titlu: title,
        portions: mumberOfPortions,
        incredients: [...incredients],
    };

    return recipe;
}

const showRecipe = (recipe) => {
    console.log(`Our favorite recipe for today is: ${recipe.title}, for ${recipe.portions} portions, with the following beliefs:

 ${recipe.ingredients}.`);
}

const recipe1 = getRecipe("Pizza", 3, ['ham', 'cheese', 'ketchup']);
const recipe2 = getRecipe("salad", 5, ['tomatoes', 'cucumberg', 'cheese', 'salad', 'carrot']);

showRecipe(recipe1);
showRecipe(recipe2);