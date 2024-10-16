// Función para mostrar/ocultar el submenú con animación
const toggleSubmenu = () => {
    const submenu = document.querySelector('.submenu');
    const isVisible = submenu.classList.contains('visible');
  
    if (isVisible) {
      // Inicia la animación de fade out
      submenu.classList.remove('visible');
    } else {
    //   Aplica la clase visible para el fade in
      submenu.classList.add('visible');
    }
  };
  
  // Función para cerrar el submenú si se hace clic fuera de él
  document.addEventListener('click', function (event) {
    const submenu = document.querySelector('.submenu');
    const isClickInside = submenu.contains(event.target);
    const isMenuButton = event.target.matches('a[href="#servicios"]');
  
    // Si el clic fue fuera del submenú y no en el botón del menú, lo cerramos con animación
    if (!isClickInside && !isMenuButton && submenu.classList.contains('visible')) {
      submenu.classList.remove('visible');
    }
  });



  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('userForm');
    const userInfo = document.getElementById('userInfo');
    const editBtn = document.getElementById('editBtn');

    // Timeout para abrir el modal automáticamente
    setTimeout(() => {
        modal.style.display = 'flex';
    }, 65000000);

    // Evento para abrir el modal al hacer clic en "Editar Información"
    editBtn.onclick = () => {
        modal.style.display = 'flex';
    };

    // Cerrar modal al hacer clic en el botón de cerrar
    closeBtn.onclick = () => {
        cerrarModal();
    };

    // Función para cerrar modal con animación fadeOut
    const cerrarModal = () => {
        modal.style.animation = 'fadeOut 0.5s';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    };

    // Maneja el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        
        userInfo.innerHTML = `<h3>¡Bienvenido, ${name} ${surname}!</h3>`;
        
        cerrarModal();
    });

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal();
        }
    };
});




document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('animatedHeader');
    const text = header.innerText; // Guardamos el texto original
    header.innerText = ''; // Limpiamos el contenido del h3

    let index = 0; // Índice para recorrer el texto
    const typingSpeed = 100; // Velocidad de escritura en milisegundos

    const typeWriter = () => {
        if (index < text.length) {
            header.innerText += text.charAt(index); // Añadimos la letra correspondiente
            index++;
            setTimeout(typeWriter, typingSpeed); // Llamamos a la función nuevamente después de un intervalo
        }
    };

    typeWriter(); // Inicia la función
});
