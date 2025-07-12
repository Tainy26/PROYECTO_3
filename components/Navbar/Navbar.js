import "./Navbar.css";

export const Navbar = () => `
  <nav>
    <div class="search-form">
      <form>
        <img src="/icons/search.png" class="search-icon" alt="Lupa" />
        <input type="search" class="search-input" placeholder="Search" />
      </form>
      <a href="#" id="profile-link">
      <img src="/icons/profile.jpg" alt="Profile" />
      </a>
      <div class="custom-dropdown">
            <img src="/icons/down-arrow.png" class="dropdown-icon" alt="Desplegar" />
            <div class="dropdown-menu">
                <p>Currently in </p>
                <div class="dropdown-item1">
                    <img src="/icons/profile.jpg" alt="Profile" />
                    <div class="personal-info">
                    <p class="name-account">Carlos Daniel</p>
                    <p>Personal</p>
                    <p>cdntapia@gmail.com</p>
                    </div>
                    <img class="check-icon" src="/icons/check.png" alt="Check" />
                </div>
                    <div class="dropdown-item2">Convert to business</div>
                        <p>Your accounts</p>
                    <div class="dropdown-item3">Add Pinterest account</div>
                    <div class="dropdown-item4">Log out</div>
            </div>
      </div>
    </div>
  </nav>
`;



