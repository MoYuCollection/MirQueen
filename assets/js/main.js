// Variables
const makeUps = [
  {
    id: 1,
    name: "Maquillaje de día",
    price: 3500,
  },
  {
    id: 2,
    name: "Maquillaje de día con toques resaltados",
    price: 4000,
  },
  {
    id: 3,
    name: "Maquillaje teatral",
    price: 6000,
  },
  {
    id: 4,
    name: "Maquillaje para fotos",
    price: 5500,
  },
  {
    id: 5,
    name: "Maquillaje de noche",
    price: 5500,
  },
];

const nails = [
  {
    id: 1,
    name: "Uñas en acrílico",
    price: 2500,
  },
  {
    id: 2,
    name: "Uñas en acabado ballerina",
    price: 2800,
  },
  {
    id: 3,
    name: "Uñas solares",
    price: 3000,
  },
  {
    id: 4,
    name: "Uñas de porcelana",
    price: 3150,
  },
  {
    id: 5,
    name: "Uñas gelificadas",
    price: 4200,
  },
];

// Responsive bar menu

document.getElementById("menu-icon").addEventListener("click", mostrar_menu);

function mostrar_menu() {
  document.querySelector(".navbar").classList.toggle("mostrar_menu");
}

// SHOPPING CART

// OPEN & CLOSE CART

const cartIconHeader = document.querySelector("#cart-icon-header");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIconHeader.addEventListener("click", () => {
  cart.classList.add("active");
});

cartClose.addEventListener("click", () => {
  cart.classList.remove("active");
});

// Start when the document is ready

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

// START
function start() {
  addEvents();
}

// UPDATE & RERENDER
function update() {
  addEvents();
  updateTotal();

  // Save cart to local storage
  localStorage.setItem("CART", JSON.stringify(itemsAdded));
}

// ADD EVENTS
function addEvents() {
  // Remove items from cart
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });

  // Change item quantity
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // Add item to cart
  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  // Buy Order
  const buy_btn = document.querySelector(".btn-buy");
  buy_btn.addEventListener("click", handle_buyOrder);
}

// HANDLE EVENTS FUNCTIONS
let itemsAdded = JSON.parse(localStorage.getItem("CART")) || [];
update();

function handle_addCartItem() {
  let product = this.parentElement;
  let title = product.querySelector(".product-name").innerHTML;
  let price = product.querySelector(".product-price").innerHTML;
  let imgSrc = product.querySelector(".product-img").src;

  let newToAdd = {
    title,
    price,
    imgSrc,
  };

  // handle item is already exist
  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("Este producto ya existe en tu carrito!");
    return;
  } else {
    itemsAdded.push(newToAdd);
  }

  // Add product to cart
  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );

  update();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); // to keep it integer

  update();
}

function handle_buyOrder() {
  if (itemsAdded.length <= 0) {
    alert(
      "Todavia no hay productos para comprar. \nPor favor, agregá productos en el carrito!"
    );
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("Tu compra ha sido realizada con éxito!");
  itemsAdded = [];

  update();
}

// UPDATE & RERENDER FUNTIONS

function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = cart.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });

  // keep 2 digits after the decimal point
  total = total.toFixed(2);

  totalElement.innerHTML = "$" + total;
}

// HTML COMPONENTS
function CartBoxComponent(title, price, imgSrc) {
  return `
  <div class="cart-box">
<img src="${imgSrc}" alt="" class="cart-img">
<div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <div class="cart-price">${price}</div>
  <input type="number" value="1" class="cart-quantity">
</div>
<!--remove cart -->
<i class="fa-solid fa-trash cart-remove"></i>
</div>`;
}
