import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li ><a href='mailto:rubengerber605@gmail.com'><i className="fa-solid fa-envelope"  style={{ fontSize: '20px'  }}></i></a>    </li>
        <li> <a href='https://github.com/moncertic'> <i class="fa-brands fa-github" style={{ fontSize: '20px'  }}></i></a> </li>
        <li><a href='https://www.linkedin.com/in/ruben-gerber-93454a236/'><i class="fa-brands fa-linkedin-in" style={{ fontSize: '20px'  }}></i></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


