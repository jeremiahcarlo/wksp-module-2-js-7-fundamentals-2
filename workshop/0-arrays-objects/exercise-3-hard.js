// Exercise 3 (hard)
// -------------------
const colors = ["red", "orange", "yellow", "green", "pink", "black", "gray", "blue", "violet"];

// The array above contains all the colors in the visible light spectrum but has some
// that don't belong. In case you've forgotten, the colors in the spectrum are:
// red, orange, yellow, green, blue, violet

// Write a script that removes the incorrect colors and output the corrected array to the console.

// You must console the colors array.
// NO for loops!
const colorArray = colors.map(color => color); 

colorArray.forEach((color) => {
    const spectrum = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

    if (!spectrum.includes(color)) {
        const currentPos = colors.indexOf(color);
        colors.splice(currentPos, 1);
    }
});
colors.forEach((item) => console.log(item));