import React, { useEffect, useState } from 'react'
import { Navbar, Container, FormControl, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import useNavBarSearch from '../../Hooks2/Search/useNavBarSearch'
const NavBarLogin = () => {
    const [OnChangeSearch, Word] = useNavBarSearch();
    let word = "";
    if (localStorage.getItem("SearchWord") != null) {
      word = localStorage.getItem("SearchWord");
    }
       const initialMode = localStorage.getItem("darkMode") === "true";

       // Step 3: Set up state to track the current mode
       const [isDarkMode, setIsDarkMode] = useState(initialMode);
    // Step 3: Create functions to handle mode toggling
    const toggleMode = () => {
       const newMode = !isDarkMode;
       setIsDarkMode(newMode);

       // Step 3: Save the mode setting in local storage
       localStorage.setItem("darkMode", newMode);
    };
    useEffect(() => {
      if (isDarkMode) {
        document.querySelector("#root").classList.add("darktheme");
        document.querySelector("body").classList.add("darktheme");
      } else {
        document.querySelector("#root").classList.remove("darktheme");
        document.querySelector("body").classList.remove("darktheme");
      }
    }, [isDarkMode]);
    return (
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <div className="container-fluid container-lg">
          <Navbar.Brand>
            <a href="/">
              <img src={logo} className="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              type="search"
              placeholder="ابحث..."
              className="me-2  text-center forms"
              aria-label="Search"
              onChange={OnChangeSearch}
              value={word}
            />
            <Nav className="me-auto">
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>
              <Nav.Link
                href="/cart"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{ color: "white" }}
              >
                <img src={cart} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>العربه</p>
              </Nav.Link>
              <Nav.Link
                href="#"
                className="nav-text d-flex mt-3 justify-content-center dark-mode"
                style={{ color: "white" }}
                onClick={toggleMode}
              >
                <i
                  className={isDarkMode ? "fa-solid fa-moon dark" : "fa-regular fa-moon"}
                  style={{ fontSize: "23px" }}
                ></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
}

export default NavBarLogin
