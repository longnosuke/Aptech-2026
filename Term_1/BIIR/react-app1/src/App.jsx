import profileImg from "./assets/cun.jpg";
import "./App.css";
import Ciao from "./Welcome";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Ciao />
      </header>

      <main className="app-main">
        <div className="grid-container">
          <div>
            <section className="profile-card">
              <h2>My Profile</h2>
              <img
                className="profile-avatar"
                src={profileImg}
                alt="Cun profile"
              />
              <ul className="profile-details">
                <li>
                  <strong>Name</strong>
                  <span>Cun</span>
                </li>
                <li>
                  <strong>Age</strong>
                  <span>5</span>
                </li>
                <li>
                  <strong>Location</strong>
                  <span>Vietnam</span>
                </li>
              </ul>
            </section>
            {/* <section className="greetings">
              <Greeting />
              <Hello name="Kitty" country="Vuong quoc Meo" age={1.5} />
            </section>*/}
          </div>
          <section className="products-section">
            <Products />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
