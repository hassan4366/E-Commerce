//****======****
// ADD TO CART 
//****======****

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart function
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add product
function addToCart(product) {
  let exists = cart.find((item) => item.name === product.name);
  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push(product);
  }
  saveCart();
}

// Handle click buttons
document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let title = this.dataset.name;
    let price = Number(this.dataset.price);
    let img = this.dataset.img;

    let product = {
      name: title,
      price: price,
      img: img,
      quantity: 1,
    };

    addToCart(product);

    // Show alert When select the card
    alert("Product added successfully! You can continue shopping.");
  });
});
