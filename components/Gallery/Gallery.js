import "./Gallery.css";
import "../Navbar/Navbar";

export const Gallery = () => `
  <main>
    <ul id="gallery"></ul>
  </main>
`;

const ACCESS_KEY ="CrPYyRUSRfVwsMAqKRnPr-Hpmd-Ec35ivkbaOMG2NMY";


const getPhotos = async (keyword) => {
  const res = await fetch(`https://api.unsplash.com/search/photos?page=2&per_page=30&query=${keyword}&client_id=${ACCESS_KEY}`
  );

  const data = await res.json();
  mapPhotos(data.results);
};

const mapPhotos = (photos) => {
  const mappedPhotos = photos.map((photo) => ({
    alt: photo.alt_description,
    photo: photo.urls.regular,
    original_photo: photo.urls.raw,
  }))

  printPhotos(mappedPhotos);
};


const printPhotos = (photos) => {
  const container = document.querySelector("#gallery");
  container.innerHTML = "";

  for (const photo of photos) {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="photo-wrapper">

      <a href="${photo.original_photo}" target="_blank">
        <img src="${photo.photo}" alt="${photo.alt}"/>
      </a>
        <div class="overlay">
            <button class="save-btn">Save</button>
            <button class="more-btn">...</button>
        </div>
      </div>
    `;
    container.appendChild(li);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-input");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const keyword = input.value.trim();
      if (keyword) {
        getPhotos(keyword);
      }
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  getPhotos("cars");
});


