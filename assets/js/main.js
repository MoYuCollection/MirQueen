const service = {
  makeUp: {
    serviceName: "Maquillaje",
    price: 4500,
  },
  nail: {
    serviceName: "Uñas",
    price: 3000,
  },
};

let totalPrice = 0;

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

alert("Bienvenido a MirQueen!");

let option = prompt(
  "En qué te puedo ayudar? Ingresá lo que necesitas \n - Servicios\n - Precios\n - Reserva\n ESC para salir"
).toLowerCase();

while (option != "esc") {
  if (option == "servicios") {
    let servicios = prompt(
      "Ingrese el servicio que desea comprar!\n Nuestros servicios son: \n - Maquillaje\n - Uñas\n - Ambos"
    ).toLowerCase();
    if (servicios == "maquillaje") {
      totalPrice = service.makeUp.price;
      price(totalPrice);
    } else if (servicios == "uñas") {
      totalPrice = service.nail.price;
      price(totalPrice);
    } else if (servicios == "ambos") {
      totalPrice = service.makeUp.price + service.nail.price;
      price(totalPrice);
    }
  } else if (option == "precios") {
    alert(
      "Los precios de nuestros servicios: " +
        "\n - Maquillaje: $" +
        service.makeUp.price +
        "\n - Uñas: $" +
        service.nail.price
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

//! Swiper Slider (slider de maquillaje)
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Responsive bar menu

document.getElementById("menu-icon").addEventListener("click", mostrar_menu);

function mostrar_menu() {
  document.querySelector(".navbar").classList.toggle("mostrar_menu");
}
