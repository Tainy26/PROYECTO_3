import "./style.css";
import {Homeview} from "./components/Homeview/Homeview.js"

// Renderiza toda la estructura del layout
document.body.innerHTML = Homeview();


// Manejar apertura/cierre del menú dropdown
const icon = document.querySelector('.dropdown-icon');
const menu = document.querySelector('.dropdown-menu');

if (icon && menu) {
  icon.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-dropdown')) {
      menu.style.display = 'none';
    }
  });

  // Manejar selección de ítems del menú
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      const value = item.dataset.value;
      console.log("Seleccionaste:", value);
      menu.style.display = 'none';
    });
  });
}


