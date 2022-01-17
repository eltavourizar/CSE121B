/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'Gustavo Urizar';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = 2022; 

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPhoto = 'images/myphoto.jpg'

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myPhoto);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFood = ['Pizza', 'Churrasco', 'Tacos', 'Burritos', 'Hamburguers'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favoriteFood

// Step 3: declare and instantiate a variable to hold another favorite food
const favoriteFood2 = 'Peruvian Ceviche'

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFood.push(favoriteFood2);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favoriteFood

// Step 6: remove the first element in the favorite foods array
favoriteFood.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood

// Step 8: remove the last element in the favorite foods array
favoriteFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFood


