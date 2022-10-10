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

const makeupNames = makeUps.map((makeUps) => makeUps.name);
const makeupPrices = makeUps.map((makeUps) => makeUps.price);
const makeupNamePrice = makeUps.map(
  (makeUps) => `${makeUps.name} : $ ${makeUps.price}`
);

const nailNames = nails.map((nails) => nails.name);
const nailPrices = nails.map((nails) => nails.price);
const nailNamePrice = nails.map((nails) => `${nails.name} : $ ${nails.price}`);

let totalPrice = 0;

// Funciones

function price() {
  alert("El precio total es: $" + totalPrice);
  let confirm = prompt(
    'Ingrese "Si" para confirmar su compra y realizar el pago'
  ).toLowerCase();
  if (confirm == "si") {
    alert("Gracias por su compra!");
  } else {
    alert("Gracias por su visita!");
  }
}

// Funciones para extraer el precio

function makeupPrice(totalPrice, id) {
  totalPrice = makeUps.find((makeUps) => makeUps.id === id).price;
  return totalPrice;
}

function nailPrice(totalPrice, id) {
  totalPrice = nails.find((nails) => nails.id === id).price;
  return totalPrice;
}

alert("Bienvenidos a MirQueen!");

let option = prompt(
  "En qué te puedo ayudar? Ingresá lo que necesitas \n - Servicios\n - Precios\n - Reserva\n ESC para salir"
).toLowerCase();

while (option != "esc") {
  if (option == "servicios") {
    let servicios = prompt(
      "Ingrese el servicio que desea comprar!\n Nuestros servicios son: \n - Maquillaje\n - Uñas"
    ).toLowerCase();
    if (servicios == "maquillaje") {
      let makeup = prompt(
        `Escribe el maquillaje que desea comprar: \n Nuestros maquillajes son: \n - ${makeupNames.join(
          "\n -"
        )}`
      ).toLowerCase();

      if (makeup === "maquillaje de dia") {
        totalPrice = makeupPrice(totalPrice, 1);
        price();
      } else if (makeup === "maquillaje de dia con toques resaltados") {
        totalPrice = makeupPrice(totalPrice, 2);
        price();
      } else if (makeup === "maquillaje teatral") {
        totalPrice = makeupPrice(totalPrice, 3);
        price();
      } else if (makeup === "maquillaje para fotos" || "maquillaje de noche") {
        totalPrice = makeupPrice(totalPrice, 4);
        price();
      } else {
        alert("Escribe una opción correcta!");
      }
    } else if (servicios == "uñas") {
      let nail = prompt(
        `Escribe la uña que desea comprar: \n Nuestras uñas son: \n - ${nailNames.join(
          "\n -"
        )}`
      ).toLowerCase();
      if (nail === "uñas en acrilico") {
        totalPrice = nailPrice(totalPrice, 1);
        price();
      } else if (nail === "uñas en acabado ballerina") {
        totalPrice = nailPrice(totalPrice, 2);
        price();
      } else if (nail === "uñas solares") {
        totalPrice = nailPrice(totalPrice, 3);
        price();
      } else if (nail === "uñas de porcelana") {
        totalPrice = nailPrice(totalPrice, 4);
        price();
      } else if (nail === "uñas gelificadas") {
        totalPrice = nailPrice(totalPrice, 5);
        price();
      } else {
        alert("Escribe una opción correcta.");
      }
    }
  } else if (option == "precios") {
    alert(
      `Los precios de nuestros servicios: \n Maquillajes: \n - ${makeupNamePrice.join(
        "\n -"
      )} \n Uñas: \n - ${nailNamePrice.join("\n -")}`
    );
  } else if (option == "reserva") {
    let reserve = prompt(
      "Ingresá la fecha y el horario que desea reservar el turno"
    );
    if (reserve == "") {
      alert("Ingresá la fecha y el horario.");
    } else {
      alert("Tu turno se registró para el día " + reserve);
    }
  } else {
    alert("Ingresá una opción correcta.");
  }
  option = prompt(
    "En qué te puedo ayudar? Ingresa lo que necesitas \n - Servicios\n - Precios\n - Reserva\n ESC para salir"
  ).toLowerCase();
}

// Responsive bar menu

document.getElementById("menu-icon").addEventListener("click", mostrar_menu);

function mostrar_menu() {
  document.querySelector(".navbar").classList.toggle("mostrar_menu");
}
