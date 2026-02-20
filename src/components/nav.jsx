import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/Page1">Page1</Link> |{" "}
            <Link to="/Page2">Page2</Link> |{" "}
            <Link to="/Page3">Page3</Link>
        </nav>
    );
}

export default Navbar;