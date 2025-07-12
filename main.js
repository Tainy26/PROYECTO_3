import "./style.css";
import { Homeview } from "./components/Homeview/Homeview.js";
import { ProfileView } from "./pages/Profile/Profile.js";
import { initGallery } from "./components/Gallery/Gallery.js";
import { linkPage } from "./utils/linkpage.js";

const loadHome = () => {
  document.body.innerHTML = Homeview();
  initGallery();
  initListeners();
};

const initListeners = () => {
  linkPage("#profile-link", ProfileView);
  linkPage("#home-link", loadHome);
  linkPage("#home-icon", loadHome);


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

    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        const value = item.dataset.value;
        console.log("Seleccionaste:", value);
        menu.style.display = 'none';
      });
    });
  }

  // Notificaciones
  const notificationIcon = document.querySelector(".notifications > a");
  const notificationsLi = document.querySelector(".notifications");
  const tooltipSpan = notificationsLi.querySelector(".tooltip-text1");

  notificationIcon?.addEventListener("click", (e) => {
    e.preventDefault();
    notificationsLi.classList.toggle("active");
    tooltipSpan.style.display = notificationsLi.classList.contains("active") ? "none" : "flex";
  });

  // Mensajes
  const messagesAlertIcon = document.querySelector(".messages-alerts > a");
  const messagesLi = document.querySelector(".messages-alerts");
  const tooltipMessageSpan = messagesLi.querySelector(".tooltip-text1");

  messagesAlertIcon?.addEventListener("click", (e) => {
    e.preventDefault();
    messagesLi.classList.toggle("active");
    tooltipMessageSpan.style.display = messagesLi.classList.contains("active") ? "none" : "flex";
  });

  // Ajustes
  const settingsButton = document.getElementById('settings-btn');
  const settingsMenu = document.getElementById('settingsMenu');

  settingsButton?.addEventListener('click', (e) => {
    e.preventDefault();
    settingsMenu.style.display = settingsMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Cierre de menús si se hace clic fuera
  document.addEventListener("click", (e) => {
    if (!notificationIcon?.contains(e.target)) {
      notificationsLi?.classList.remove("active");
      tooltipSpan.style.display = "flex";
    }

    if (!messagesAlertIcon?.contains(e.target)) {
      messagesLi?.classList.remove("active");
      tooltipMessageSpan.style.display = "flex";
    }

    if (!settingsButton?.contains(e.target) && !settingsMenu?.contains(e.target)) {
      settingsMenu.style.display = 'none';
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadHome();

  // SPA: permite volver al home desde otras vistas
  window.addEventListener("navigate", (e) => {
    if (e.detail === "home") {
      const mainContent = document.querySelector("#main-content");
      mainContent.innerHTML = `
        <main>
          <ul id="gallery"></ul>
        </main>
      `;
      initGallery();
    }
  });
});
