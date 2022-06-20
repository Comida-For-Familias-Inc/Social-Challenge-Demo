import logo from './logo.svg';
import './App.css';
import {Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home"> Comida For Familias</Navbar.Brand>
          </Container>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <div>
        Hello Comida!!
      </div>
      </header>

    </div>
  );
}

export default App;
