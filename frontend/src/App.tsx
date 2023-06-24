import React, { useContext, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import AllRoutes from "./Routes/AllRoutes";
import { Store } from "./Store";
function App() {
  // const [count, setCount] = useState<number>(0);

  const {
    state: { mode },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" })
  };

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>Apni Dukan</Navbar.Brand>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === 'Light' ? 'fa fa-sun' : 'fa fa-moon'}></i>
            </Button>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <AllRoutes />
        </Container>
      </main>

      <footer>
        <div className="text-center">All Rights Reserved</div>
      </footer>
    </div>
  );
}

export default App;
