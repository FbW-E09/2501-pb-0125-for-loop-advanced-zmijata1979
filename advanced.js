
let animals = [  "cat",
"mouse",
"monkey",
"cat",
"elephant",
"dog",
"mouse",
"giraffe",
"monkey",
"monkey",
"elephant",];



    let animalsNoDuplicate = [];
    for (let i = 0; i < animals.length; i++) {
        if (!animalsNoDuplicate.includes(animals[i])) {
            animalsNoDuplicate.push(animals[i]); 
        }
    }
    console.log(animalsNoDuplicate);



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
      for (let i = 0; i < products.length; i++) {
        if (products[i].toLowerCase().includes("red")) {
          redProducts.push(products[i]);
          
        }  

      }

  console.log(redProducts);

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
      for (let i = 0; i < writers.length; i++) {
        let split = writers[i].split(" ");
        if (split[1].startsWith('J')) {
            writersLetterJ.push(writers[i]);
        }
      }

      console.log(writersLetterJ);


      let text = "Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun Orbiting this at a distance of roughly ninety-two million miles is an utterly insignificant little blue green planet whose ape-descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea This planet has or rather had a problem which was this most of the people on it were unhappy for pretty much of the time Many solutions were suggested for this problem but most of these were largely concerned with the movements of small green pieces of paper which is odd because on the whole it wasn't the small green pieces of paper that were unhappy";
    let longWords = [];
    let splitTextToArray = text.split(" ");
    for (let i = 0; i < splitTextToArray.length; i++) {
      if(splitTextToArray[i].length > 8) {
        longWords.push(splitTextToArray[i]);
      }
    }

    console.log(longWords);

    withoutVowels = (string) => {
      let newWord = "";
      for(i = 0; i < string.length; i++) { 
        if(string[i].toLowerCase()!=="a" && string[i].toLowerCase()!=="e"  && string[i].toLowerCase()!=="i" 
        && string[i].toLowerCase()!=="o" && string[i].toLowerCase()!=="u") {
          newWord = newWord + string[i]; 
        }
        
      }
      return newWord;
  }

  console.log(withoutVowels("hello"));
  console.log(withoutVowels("elephant"));
  console.log(withoutVowels("JavaScript"));
  console.log(withoutVowels("AEIOU"));

  firstLetterCapitalized = (array) => {
    let newArray = [];
    for(i = 0; i < array.length; i++) {
      newArray[i] = array[i][0].toUpperCase() + array[i].substring(1);
    } 
    return newArray; 
  }    

  console.log(firstLetterCapitalized([ 'table', 'chair', 'book', 'tea', 'coffee' ]));

  let productWithPrices = ["T-shirt €9.99", "Jeans €39", "Sweater €29.99", "Hat €19.99"];
  let prices = [];
  let total = 0;

  for(i=0; i<productWithPrices.length; i++) {
    let price = productWithPrices[i].split(" €")[1];
    prices.push(price);
    total = total + parseFloat(price);
  }

  console.log(`prices: ${prices},\ntotal: ${total}`);
  console.log(`price:`, prices);
  console.log(`total:`, total);