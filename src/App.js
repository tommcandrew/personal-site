import React, { useState } from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Project from "./components/Project";
import Post from "./components/Post";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import "./styles/styles.scss";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [humburgerActive, setHamburgerActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = (e) => {
    if (e.target.tagName === "A") {
      setShowMenu(false);
      setHamburgerActive(false);
    }
  };
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
    setHamburgerActive((prevState) => (prevState ? false : true));
  };

  return (
    <div className="app__wrapper">
      <Burger
        humburgerActive={humburgerActive}
        toggleShowMenu={toggleShowMenu}
      />
      <HashRouter>
        {showMenu && (
          <Menu handleCloseMenu={handleCloseMenu} showMenu={showMenu} />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/portfolio"
            render={() => (
              <Portfolio
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            )}
          />
          <Route path={"/portfolio/:project"} component={Project} />
          <Route exact path="/blog" component={Blog} />
          <Route path={"/blog/:post"} component={Post} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
