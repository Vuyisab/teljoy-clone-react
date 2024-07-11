import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/top-nav/header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{ scrollBehavior: 'auto' }}>
      <Header />
      <Outlet />
      <footer>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Bazajoy &copy;
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
                <a className="nav-link" href="#">
                  Help
                </a>
                <a className="nav-link" href="#">
                  Legal
                </a>
                <a className="nav-link disabled" aria-disabled="true">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
