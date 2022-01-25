/**
 * Exercise 1
 * You have an array of animals in input that contains some repetitions.
 * Fill the second array with all the animals from the first array removing any duplicate
 *
 * The result should be: [ 'cat', 'mouse', 'monkey', 'elephant', 'dog', 'giraffe' ]
 *
 */
let animals = [
  "cat",
  "mouse",
  "monkey",
  "cat",
  "elephant",
  "dog",
  "mouse",
  "giraffe",
  "monkey",
  "monkey",
  "elephant",
];
let animalsNoDuplicates = [];


console.log(animalsNoDuplicates);

/**
 * Exercise 2
 * You have an array of colored products in input.
 * Fill the array redProducts with all red products.
 *
 * Expected output: [ 'Red T-Shirt', 'Red Skirt', 'red Sunglasses', 'Red Ribbon' ]
 */

let products = [
  "Red T-Shirt",
  "Blue Jeans",
  "Red Skirt",
  "red Sunglasses",
  "Red Ribbon",
  "Green Shoes",
  "green Jacket",
  "Yellow Hat",
];
let redProducts = [];


console.log(redProducts);

/**
 * Exercise 3
 * You have an array with a list of writers.
 * Fill the array writersLetterJ with the writers whose last name starts with the letter "J"
 * 
 * Expected output: [ 'Shirley Jackson', 'James Joyce' ]
 */

let writers = [
  "Mary Shelley",
  "Thomas Pynchon",
  "Patricia Lockwood",
  "Douglas Adams",
  "Bernardine Evaristo",
  "Shirley Jackson",
  "Margaret Atwood",
  "Kurt Vonnegut",
  "James Baldwin",
  "Stephen King",
  "Franz Kafka",
  "Isaac Asimov",
  "James Joyce",
];
let writersLetterJ = [];

console.log(writersLetterJ);


/**
 * Exercise 4
 * You have a string with a long text.
 * Fill the array longWords only with words that have more than 9 characters
 */

let text = "Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun Orbiting this at a distance of roughly ninety-two million miles is an utterly insignificant little blue green planet whose ape-descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea This planet has or rather had a problem which was this most of the people on it were unhappy for pretty much of the time Many solutions were suggested for this problem but most of these were largely concerned with the movements of small green pieces of paper which is odd because on the whole it wasn't the small green pieces of paper that were unhappy";
let longWords = [];

console.log(longWords);



/**
 * Exercise 5
 * Given a string containing a word in input, create another string containing the same word without vowels.
 * 
 * Input -> Output
 * 
 * "hello" -> "hll"
 * elephant -> "lphnt"
 * "JavaScript" -> "JvScrpt"
 * "AEIOU" -> ""
 * "BLABLA" -> "BLBL"
 */

let word = "hello";
let wordNoVowels = "";

console.log(wordNoVowels);

/**
 * Exercise 6
 * In input you have an array of words.
 * Fill another array with all the words from the first array with the first letter capitalized
 * 
 * Expected output: [ 'Table', 'Chair', 'Book', 'Tea', 'Coffee' ]
 */

let words2 = ["table", "chair", "book", "tea", "coffee"];
let capitalized = [];

console.log(capitalized);

/**
 * Exercise 7
 * You have an array that contains a list of products with their prices.
 * Fill another array with only the prices and calculate the sum of all the prices in another variable
 * 
 * Expected output:
 * prices: [ 9.99, 39, 29.99, 19.99 ]
 * total: 98.97
 */


let productWithPrices = ["T-shirt €9.99", "Jeans €39", "Sweater €29.99", "Hat €19.99"];
let prices = [];
let total = 0;


console.log(prices);
console.log(total);
