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
  );
  if (confirm == "Si") {
    alert("Gracias por su compra!");
  } else {
    alert("Gracias por su visita!");
  }
}

alert("Bienvenido a MirQueen!");

let option = prompt(
  "En qué te puedo ayudar? Ingresá lo que necesitas \n - Servicios\n - Precios\n - Reserva\n ESC para salir"
);

while (option != "ESC") {
  if (option == "Servicios") {
    let servicios = prompt(
      "Ingrese el servicio que desea comprar!\n Nuestros servicios son: \n - Maquillaje\n - Uñas\n - Ambos"
    );
    if (servicios == "Maquillaje") {
      totalPrice = service.makeUp.price;
      price(totalPrice);
    } else if (servicios == "Uñas") {
      totalPrice = service.nail.price;
      price(totalPrice);
    } else if (servicios == "Ambos") {
      totalPrice = service.makeUp.price + service.nail.price;
      price(totalPrice);
    }
  } else if (option == "Precios") {
    alert(
      "Los precios de nuestros servicios: " +
        "\n - Maquillaje: $" +
        service.makeUp.price +
        "\n - Uñas: $" +
        service.nail.price
    );
  } else if (option == "Reserva") {
    let reserve = prompt(
      "Ingresá la fecha y el horario que desea reservar el turno"
    );

    alert("Tu turno se registró para el día " + reserve);
  } else {
    alert("Ingresá una opción correcta.");
  }
  option = prompt(
    "En qué te puedo ayudar? Ingresa lo que necesitas \n - Servicios\n - Precio\n - Reserva\n ESC para salir"
  );
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
