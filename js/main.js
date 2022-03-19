fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')

    // fetch('www.themealdb.com/api/json/v1/1/search.php?')
    .then(res => res.json())
    .then(data => displayCategory(data))



// function displayCategory(categories) {
//     console.log(categories);
//     const allCategories = categories.meals
//     const categoriesName = allCategories.map(category => category.strCategory);
//     console.log(categoriesName);
// }

// ==== Arrow Function ====
const displayCategory = categories => {
    const allCategories = categories.meals
    const categoriesName = allCategories.map(category => category.strCategory);
    // console.log(categoriesName);

    const categoriesDiv = document.getElementById('categories');

    categoriesName.forEach(categoryName => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        // const p = document.createElement('p');
        // p.innerText = categoryName;
        const categoryInfo = `
            
            <p>${categoryName}</p>
        `
        categoryDiv.innerHTML = categoryInfo;
        categoriesDiv.appendChild(categoryDiv);
    });
}
//==== img input not done to categoryInfo ====
// <img src = "${strMealThumb}">
// ===X===

// for (let i = 0; i < categoriesName.length; i++) {
//     const categoryName = categoriesName[i];
//     // console.log(categoryName);
//     const categoryDiv = document.createElement('div');
//     const p = document.createElement('p');
//     p.innerText = categoryName;
//     categoryDiv.appendChild(p);
//     categoriesDiv.appendChild(categoryDiv);

// }