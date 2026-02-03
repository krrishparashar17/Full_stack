import { Navbar, Container, Button } from 'react-bootstrap';

const TopNavbar = ({ darkMode, toggleMode }) => {
  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
      <Container>
        <Navbar.Brand>
          🏏 Cricket Statsboard – <strong>Krrish</strong>
        </Navbar.Brand>
        <Button size="sm" onClick={toggleMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
