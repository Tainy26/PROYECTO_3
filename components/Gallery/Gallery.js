import "./Gallery.css";

let currentPage = 1;
let currentKeyword = "cars";
let isLoading = false;

const ACCESS_KEY = "CrPYyRUSRfVwsMAqKRnPr-Hpmd-Ec35ivkbaOMG2NMY";

export const Gallery = () => `
  <main>
    <ul id="gallery"></ul>
  </main>
`;

const getPhotos = async (keyword, page = 1) => {
  isLoading = true;
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${keyword}&client_id=${ACCESS_KEY}`
  );
  const data = await res.json();
  mapPhotos(data.results, page === 1);
  isLoading = false;
};

const mapPhotos = (photos, isFirstPage = false) => {
  const mappedPhotos = photos.map((photo) => ({
    alt: photo.alt_description,
    photo: photo.urls.regular,
    original_photo: photo.urls.raw,
  }));
  printPhotos(mappedPhotos, isFirstPage);
};

const printPhotos = (photos, isFirstPage = false) => {
  const container = document.querySelector("#gallery");
  if (isFirstPage) {
    container.innerHTML = "";
  }
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

export const initGallery = () => {
  const input = document.querySelector(".search-input");
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const keyword = input.value.trim();
      if (keyword) {
        currentKeyword = keyword;
        currentPage = 1;
        getPhotos(currentKeyword, currentPage);
      }
    }
  });

  getPhotos(currentKeyword, currentPage);


  window.addEventListener("scroll", () => {
    if (isLoading) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      currentPage++;
      getPhotos(currentKeyword, currentPage);
    }
  });
};
