import "./Aside.css";

export const Aside = () => `
  <aside>
    <div class="container">
      <ul>
        <li>
          <a class="tooltip" href="#" id="home-link"><img src="/icons/pinterest.png" alt="Pinterest" />
          <span class="tooltip-text">Pinterest</span>
          </a>
        </li>
        <li>
          <a class="tooltip" href="#" id="home-icon"><img src="/icons/home.png" alt="Home" />
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
        <li class="tooltip1">
          <a href="#"><img src="/icons/add-r.svg" alt="Add" />
          <span class="tooltip-text1">Create</span>
          </a>
        </li>
        <li class="tooltip1 notifications">
          <a href="#"><img src="/icons/bell.svg" alt="Notifications" />
          <span class="tooltip-text1">Updates</span>
          </a>
          <div class="notifications-container">
            <ul>
              <p>Updates</p>
              <p>Seen</p>
              <li class="update1">
                <a href="#">
                  <img src="/icons/searchupdate.png" alt="Search Update"/>
                  <p>Still searching? Explore ideas related to <strong>Planes</strong></p>
                  <div class="more">
                    <p>15h</p>
                    <img src="/icons/more.png" alt="Settings"/>
                  </div>
                </a>
              </li>
              <li class="update2">
                <a href="#">
                  <img src="/icons/updatephoto1.jpg" alt="Update Photo 1"/>
                  <p>Your taste is excellent</p>
                  <div class="more2">
                    <p>1w</p>
                    <img src="/icons/more.png" alt="Settings"/>
                  </div>
                </a>
              </li>
              <li class="update2">
                <a href="#">
                  <img src="/icons/updatephoto2.jpg" alt="Update Photo 2"/>
                  <p>Love this for you</p>
                  <div class="more2">
                    <p>1w</p>
                    <img src="/icons/more.png" alt="Settings"/>
                  </div>
                </a>
              </li>
              <li class="update2">
                <a href="#">
                  <img src="/icons/updatephoto3.jpg" alt="Update Photo 3"/>
                  <p>Feels like your style</p>
                  <div class="more2">
                    <p>1w</p>
                    <img src="/icons/more.png" alt="Settings"/>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="tooltip1 messages-alerts">
          <a href="#"><img class="messenger-revert" src="/icons/messenger.png" alt="Messages" />
          <span class="tooltip-text1">Messages</span>
          </a>
          <div class="messages-container">
            <div class="top-messages">
              <img src="/icons/close.png" alt="Close Messages"/>
              <p>Messages</p>
              <img src="/icons/more.png" alt="More Messages"/>
            </div>
            <ul>
              <li class="write-icon">
                <a href="#">
                  <img src="/icons/write_white.png" alt="New Message"/>
                  <p>New message</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/icons/add-user.png" alt="Invite Friends"/>
                  <p>Invite your friends<br>Connect to start chatting</p>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <div class="setting-container">
          <div class="setting-icon">
            <a class="tooltip2" href="#" id="settings-btn">
              <img src="/icons/setting.png" alt="Settings" />
              <span class="tooltip-text2">More options</span>
            </a>
          </div>
        </div>
        <div class="settings-menu" id="settingsMenu">
          <ul>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Home feed tuner</a></li>
            <li><a href="#">Claimed external accounts</a></li>
            <li><a href="#">Reports and violations center</a></li>
            <li><a href="#">Your privacy rights</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Be a beta tester</a></li>
          </ul>
        </div>
      </ul>
    </div>
  </aside>
`;
