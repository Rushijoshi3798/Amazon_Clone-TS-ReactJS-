import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Apni Dukan</Navbar.Brand>
          </Container>
          <Nav>
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
