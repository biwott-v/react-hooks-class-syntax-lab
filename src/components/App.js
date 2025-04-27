// App.jsx
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import user from "../data/user";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="home">
          <Home 
            username={user.name}
            city={user.city}
            color={user.color}
          />
        </div>
        <div id="about">
          <About bio={user.bio} />
        </div>
        <Links 
          github={user.links.github}
          linkedin={user.links.linkedin}
        />
      </div>
    );
  }
}

export default App;