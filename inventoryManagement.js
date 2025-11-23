const products =[ "laptop","phone","headphones","monitor"];
console.log(products);

// function to log the details of the first product
function logfirstproduct(){
  if(products.length === 0){
    console.log ("No product available");
    return; 
  }
  const firstproduct = products[0];
  console.log("first product Details:");
  console.log("name of the product: " + firstproduct);
  console.log("position:first item inn array");
}
  //call the function to log first product details
  logfirstproduct();

//adding an item to the array
products.push("keyboard");
console.log(products);

//update product name
products[2] = "wireless headphones";
console.log(products);

// remove an item from the array
 products.splice(1,1);   
 console.log(products);
