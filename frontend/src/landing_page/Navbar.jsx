import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img
                        src="media/images/logo.svg"
                        alt="Logo"
                        style={{ maxWidth: "150px", height: "auto" }}
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/signup") ? "active" : ""}`}
                                aria-current={isActive("/signup") ? "page" : undefined}
                                to="/signup"
                            >
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                                aria-current={isActive("/about") ? "page" : undefined}
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/products") ? "active" : ""}`}
                                aria-current={isActive("/products") ? "page" : undefined}
                                to="/products"
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/pricing") ? "active" : ""}`}
                                aria-current={isActive("/pricing") ? "page" : undefined}
                                to="/pricing"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/support") ? "active" : ""}`}
                                aria-current={isActive("/support") ? "page" : undefined}
                                to="/support"
                            >
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
