let myFavFoods = ['burgers', 'pizza', 'tamales'];

function printFoodNames(arr) {
    for(i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}

module.exports = {
    printFoodNames,
    myFavFoods
}