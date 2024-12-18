document.addEventListener("DOMContentLoaded", () => {
    console.log("Page fully loaded and scripts ready!");
  });
  
  document.querySelector('.subscribe-btn').addEventListener('click', function () {
    const email = document.querySelector('.email-input').value;
    if (email === '') {
      alert('Por favor, ingresa tu correo electrónico.');
    } else {
      alert('¡Gracias por suscribirte!');
    }
  });
  