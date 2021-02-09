// main loader
const foodID = "idMeal";
const foodName = "strMeal";
const catName = "strCategory";
const cookProcess = 'strInstructions';
const mealPic = 'strMealThumb';
const ingredient = 'strIngredient1';

const searchStr = document.getElementById('searchbox');
const searchBtn = document.getElementById('searchBtn');
const foodSection = document.getElementById('food-item');
const errorMessage = document.getElementById('sorry');
const gallery = document.getElementById('gallery');
const empty = '';

const searchMeal = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
const SearchIngredient = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

//event handle
searchBtn.addEventListener('click', function () {
    const searchKey = searchStr.value;
    if (searchKey == empty || 'null') {
        errorMessage.style.display = 'block';
    }
    else {
        console.log(searchKey);
        dataloader();
        gallery.style.display ='block';
    }
});

//API Loader
function dataloader(params) {
    fetch(searchMeal)
        .then(res => res.json())
        .then(data => showData(data));
};

//Result output
const showData = result =>{
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        console.log(item.foodName);
        const card = document.createElement('div');
        card.className = "card";

        const foodInfo =`
            <div>
                <img src="${mealPic}">
            </div>
            <div>
                <h3>${item.foodName}</h3>
                <p>${item.catName}</p>
                <p>${item.cookProcess}</p>
            </div>            
        `
        card.innerHTML = foodInfo;
        foodSection.appendChild(card);
    }
}




// API List

// Search meal by name
// 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'

// List all meals by first letter
// "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

// Lookup full meal details by id
// 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'

// Lookup a single random meal
// https://www.themealdb.com/api/json/v1/1/random.php

// List all meal categories
// https://www.themealdb.com/api/json/v1/1/categories.php

// List all Categories, Area, Ingredients
// https://www.themealdb.com/api/json/v1/1/list.php?c=list
// https://www.themealdb.com/api/json/v1/1/list.php?a=list
// https://www.themealdb.com/api/json/v1/1/list.php?i=list
// Filter by main ingredient
// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

// Filter by Category
// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// Filter by Area
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

// Add /preview to the end of the meal image URL
// 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview'
// Ingredient Thumbnail Images
// 'https://www.themealdb.com/images/ingredients/Lime.png'
// https://www.themealdb.com/images/ingredients/Lime-Small.png

// 


