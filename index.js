const coffeeMenu = require("./coffee_data");

// 2 Print an array of all the drinks on the menu.
const printDrinks = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(printDrinks));



// 3  Print an array of drinks that cost 5 and under.
const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.log(itemsUnderFive);



// 4  Print an array of drinks that are priced at an even number. come back to this 
const evenPriceDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.log(evenPriceDrinks);



// 5 Print the total if you were to order one of every drink. 
const priceArray = [8, 5, 5, 9, 6, 7, 6, 8, 10];
const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalValue = priceArray.reduce(sumTotalCost);
console.log(totalValue);



// 6 Print an array with all the drinks that are seasonal.
const isSeasonal = (item) => {
    return item.seasonal === true;
}
const seasonalItems = coffeeMenu.filter(isSeasonal);
console.log(seasonalItems);


// 7 Print all the seasonal drinks with the words "with imported beans" after the item name. 
const printDrinksWithName = (item) => {
    return item.name + " with imported beans";
}
console.log(coffeeMenu.map(printDrinksWithName));