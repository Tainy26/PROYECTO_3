import "./Aside.css";

export const Aside = () => `
  <aside>
    <div class="container">
      <ul>
        <li>
          <a class="tooltip" href="#"><img src="/icons/pinterest.png" alt="Home" />
          <span class="tooltip-text">Home</span>
          </a>
        </li>
        <li>
          <a class="tooltip" href="#"><img src="/icons/home.png" alt="Home" />
          <span class="tooltip-text">Home</span>
          </a>
        </li>
        <li class="tooltip3">
          <a href="#"><img src="/icons/web-browser.png" alt="Web Browser" /></a>
            <div class="web-browser-container">
              <ul>
                <li><a href="#">Art</a></li>
                <li><a href="#">Pets</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Food & Drink</a></li>
                <li><a href="#">Women's Fashion</a></li>
                <li><a href="#">Home Decor</a></li>
                <li><a href="#">DIY</a></li>
                <li><a href="#">Quotes</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Fitness</a></li>
                <li><a href="#">Weddings</a></li>
              </ul>
            </div>
        </li>
        <li>
          <a class="tooltip1" href="#"><img src="/icons/add-r.svg" alt="Add" />
          <span class="tooltip-text1">Create</span>
          </a>
        </li>
        <li>
          <a class="tooltip1" href="#"><img src="/icons/bell.svg" alt="Notifications" />
          <span class="tooltip-text1">Updates</span>
          </a>
        </li>
        <li>
          <a class="tooltip1" href="#"><img class="messenger-revert" src="/icons/messenger.png" alt="Messages" />
          <span class="tooltip-text1">Messages</span>
          </a>
        </li>
        <div class="setting-icon">
          <a class="tooltip2" href="#"><img src="/icons/setting.png" alt="Settings" />
          <span class="tooltip-text2">More options</span>
          </a>
        </div>
      </ul>
    </div>
  </aside>
`;
