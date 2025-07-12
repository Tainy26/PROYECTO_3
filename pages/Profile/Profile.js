import "./Profile.css";

export const ProfileView = () => {
  const mainContent = document.querySelector("#main-content");
  mainContent.innerHTML = `
    <div class="profile-container">
        <div class="top-content">
          <h1>Your saved ideas</h1>
          <a>
            <img src="/icons/profile.jpg" alt="Profile Icon" />
            <div class="text-content">
              <p class="name-user">Carlos Daniel</p>
              <p class="followers"> 0 following </p>
            </div>
            <button>View profile</button>
          </a>
        </div>
        <div class="middle-content">
            <button id="pins-btn">Pins</button>
            <button id="boards-btn">Boards</button>
        </div>
        <div class="middle-content2">
            <div class="left-content">
            <img src="/icons/filter.png" alt="Profile Icon" />
            <button id="group-btn">Group</button>
            </div>
            <button class="create-btn">Create</button>
        </div>
        <div class="board-container boards-board">
          <img src="/icons/boards.svg" alt="Boards" />
          <h3>Keep track of what inspires you</h3>
          <p>Boards help you organize the Pins you save into collections</p>
          <button>Create a board</button>
        </div>
        <div class="board-container pins-board hidden">
          <img src="/icons/lightbulb.svg" alt="Pins" />
          <h3>You haven't saved any Pins...yet</h3>
          <p>Save your favorite ideas so you can easily come back to them later</p>
          <button>Explore Pins</button>
        </div>
    </div>
  `;

const pinsBtn = document.querySelector("#pins-btn");
const boardsBtn = document.querySelector("#boards-btn");
const pinsBoard = document.querySelector(".pins-board");
const boardsBoard = document.querySelector(".boards-board");
const groupBtn = document.querySelector("#group-btn");

pinsBtn.addEventListener("click", () => {
  pinsBtn.classList.add("active");
  boardsBtn.classList.remove("active");
  pinsBoard.classList.remove("hidden");
  boardsBoard.classList.add("hidden");
  groupBtn.style.display = "none";
});

boardsBtn.addEventListener("click", () => {
  boardsBtn.classList.add("active");
  pinsBtn.classList.remove("active");
  boardsBoard.classList.remove("hidden");
  pinsBoard.classList.add("hidden");
  groupBtn.style.display = "block";
});

};


