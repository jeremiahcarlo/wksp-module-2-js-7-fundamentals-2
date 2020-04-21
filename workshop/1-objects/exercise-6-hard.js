// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...

const dessertsArray = Object.values(favoriteDessert).sort();
const countedDesserts = {};
const rankedDesserts = [];

dessertsArray.forEach(dessert => {
    let count = 0;
    dessertsArray.forEach(dup => {
        if (dessert === dup) count += 1;
    });
    countedDesserts[dessert] = count;
});

Object.values(countedDesserts).forEach((dessertCount, id) => {
    const dessertName = Object.keys(countedDesserts)[id];
    rankedDesserts.push({
        dessertName: dessertName,
        dessertCount: dessertCount
    });
});

rankedDesserts.sort((a, b) => a.dessertCount < b.dessertCount ? 1 : -1);

console.log('YEEEEEEEEEHAW');
console.log('A) Dessert ranked from most to least popular.');
console.log('YEEEEEEEEEHAW');
rankedDesserts.forEach((item, id) => {
    console.log(`  ${id + 1}. ${item.dessertName}`);
});
console.log('YEEEEEEEEEHAW');

// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...

console.log('B) Who chose the same dessert?');
console.log('YEEEEEEEEEHAW');
Object.keys(countedDesserts).forEach(dessert => {
    let names = [];
    Object.keys(favoriteDessert).forEach(name => {
        if (favoriteDessert[name] === dessert) names.push(name);
    });
    console.log(`  - ${dessert}: ${names.join(', ')}`);
});
console.log('YEEEEEEEEEHAW');