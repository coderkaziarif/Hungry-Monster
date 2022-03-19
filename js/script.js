const search = document.getElementById("search");
// const submit = document.getElementById("submit");
const mealEl = document.getElementById("meals");
const result = document.getElementsByClassName("result");
const single_mealEl = document.getElementById("single-meal");

// Search meals
function searchMeal(e) {
    e.preventDefault();

    // clear single meal
    single_mealEl.innerHTML = "";

    // get search meal
    const searchValue = search.value;

    // check for empty
    if (searchValue.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => {
                // result.innerHTML = `<h2>Search Recipe for ${searchValue}</h2>`;
                if (data.meals === null) {
                    result.innerHTML = `<h2>Search Recipe not found ${searchValue}</h2>`;
                } else {
                    mealEl.innerHTML = data.meals.map(meal => `
                    <div class="meal, card" onclick="displayMealInfo('${meal.idMeal}')">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="card-img-top">
                    <div class="meal-info, card-body" data-mealID="${meal.idMeal}">
                    <h3 class="text-dark">${meal.strMeal}</h3>
                    </div>
                    </div>
                    `)
                        .join("");
                }
            });
    } else {
        alert("please insert a value in search box");
    }
    document.getElementById("search").value = "";
}

const displayMealInfo = mealInfo => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealInfo}`
    fetch(url)
        .then(res => res.json())
        .then(data => detailsInfo(data.meals[0]))

    const detailsInfo = recipe => {
        const recipeDetails = document.getElementById('recipeInfo');
        recipeDetails.innerHTML = `
        <img src="${recipe.strMealThumb}">
        <h2>${recipe.strMeal}</h2>
        <h5>Instructions:</h5> <h6>${recipe.strInstructions}</h6>
        <br>
        <h5>Ingredients : </h5>
        <div class="ingredients">
        <p><i class="fa-solid fa-square-check"></i> ${recipe.strIngredient1}</p>
        <p><i class="fa-solid fa-square-check"></i> ${recipe.strIngredient2}</p>
        <p><i class="fa-solid fa-square-check"></i> ${recipe.strIngredient3}</p>
        <p><i class="fa-solid fa-square-check"></i> ${recipe.strIngredient4}</p>
        <p><i class="fa-solid fa-square-check"></i> ${recipe.strIngredient5}</p>
        <p><i class="fa-solid fa-square-check"></i> ${recipe.strIngredient6}</p>
        <p><i class="fa-solid fa-square-check"></i> ${recipe.strIngredient7}</p>
        <p><i class="fa-solid fa-square-check"></i> ${recipe.strIngredient8}</p>
        </div>
                                         
        `
        // ===== Hide category list & search btn ====
        mealEl.style.display = "none";
        const formSearch = document.getElementById('formSearch');
        formSearch.style.display = "none";
    }

}

// Event
form.addEventListener("submit", searchMeal);