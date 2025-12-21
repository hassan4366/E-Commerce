// Load cart in localstorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Select parent container
let cardSection = document.querySelector(".card-section");

if (cart.length > 0) {
  renderCart();
}

//put the cart in card 

function renderCart() {
  cardSection.innerHTML = `
    <div class="container">
      <h2 class="text-center my-4">Your Cart</h2>
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th>Product</th>
            <th>Img</th>
            <th>Price</th>
            <th>Qnt</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody id="cart-body"></tbody>
      </table>
      <h3 class="text-right mt-4">Total: <span id="final-total">0</span> EGP</h3>
    </div>
  `;

  let tbody = document.getElementById("cart-body");

  cart.forEach((p, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.name}</td>
      <td><img src="${p.img}" width="80"></td>
      <td>${p.price}</td>
      <td>${p.quantity}</td>
      <td>${p.price * p.quantity}</td>
      <td><button class="btn btn-danger remove" data-index="${index}">X</button></td>
    `;
    tbody.appendChild(row);
  });

  updateTotal();

  // remove the cart from card
  document.querySelectorAll(".remove").forEach((btn) => {
    btn.addEventListener("click", function () {
      let i = this.getAttribute("data-index");
      cart.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });
}

function updateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("final-total").innerText = total;
}
