console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];

function addItem(item) {
   basket.push(item);
   return true;
}
console.log('added item', true);

addItem("apples");

basket = ['mango', 'strawberries', 'pineapple'];

function listItems() {
  for (i = 0; i < basket.length; i++) {
  console.log('item in basket', basket[i]);
}

}
listItems();


function empty(basket) {
    while (basket.length > 0) {
        basket.pop();
    }
}

empty(basket);

console.log('emptied basket:', basket);

// Stretch Goals


// const maxItems = 5;

// function isFull() {
//     if (basket.length < maxItems) {
//         return false;
//     } else (basket.length >= maxItems); {
//         return true;
//     } 
// }

// console.log('checking basket', isFull());




















// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
