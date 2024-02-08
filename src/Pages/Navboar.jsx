import { Link } from "react-router-dom";

const Navboar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="flex">
          <div>
            <Link to={"./"} className="line">
              <h1>Kalvium❤️</h1>
            </Link>
          </div>
          <div className="flex2">
            <Link to={"./About"} className="line">
              <h1>About</h1>
            </Link>
            <Link to={"./Register"} className="line">
              <h1>Register</h1>
            </Link>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
};

export default Navboar;
