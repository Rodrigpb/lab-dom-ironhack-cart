// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity)
  //... your code goes here
  let subTotalValue = price * quantity;
  console.log(subTotalValue)
  product.querySelector('.subtotal span').innerHTML = subTotalValue;
  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  
  // ITERATION 2
  //... your code goes here
  let subTotal = 0;

  let allProducts = document.getElementsByClassName('product');
  [...allProducts].forEach(product => {
    subTotal += updateSubtotal(product)  
  });
  console.log([...allProducts])
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value > span').innerHTML = subTotal;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
