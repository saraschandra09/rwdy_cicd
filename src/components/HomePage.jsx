import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { FaUserCircle } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="header">
        <div className="rwdy">
          <Link to="/" className="brand-title">RWDY</Link>
        </div>
        {/* Centered nav with equal spacing */}
        <nav className="nav-links">
          <Link to="/about-us">About Us</Link>
          <Link to="/Formals">Formals</Link>
          <Link to={isAuthenticated ? "/Casuals" : "/login"}>Casuals</Link>
          <Link to={isAuthenticated ? "/StreetWear" : "/login"}>StreetWear</Link>
          <Link to={isAuthenticated ? "/Addons" : "/login"}>Addons</Link>
        </nav>
        <div className="header-right">
          {!isAuthenticated ? (
            <div className="auth-buttons">
              <Link to="/login" className="auth-btn">Login</Link>
              <Link to="/signup" className="auth-btn">Sign Up</Link>
            </div>
          ) : (
            <div className="profile-menu">
              <button aria-label="profile" onClick={toggleDropdown}>
                <FaUserCircle className="profile-icon" size={28} />
              </button>
              {dropdownOpen && (
                <div className="dropdown">
                  <Link to="/cart" onClick={() => setDropdownOpen(false)}>Cart</Link>
                  <Link to="/orders" onClick={() => setDropdownOpen(false)}>Orders</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar */}
        
        {/* Mobile Drawer */}
        {mobileNavOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileNavOpen(false)} />
            <div className="absolute inset-y-0 left-0 w-72 max-w-[80%] bg-white shadow-xl p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-semibold">Menu</span>
                <button aria-label="Close navigation" className="p-2 rounded-md hover:bg-gray-100" onClick={() => setMobileNavOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
                </button>
              </div>
              <nav className="space-y-1" onClick={() => setMobileNavOpen(false)}>
                <Link to="/about-us" className="block px-3 py-2 rounded-md hover:bg-gray-100">About Us</Link>
                <Link to="/Formals" className="block px-3 py-2 rounded-md hover:bg-gray-100">Formals</Link>
                <Link to={isAuthenticated ? "/Casuals" : "/login"} className="block px-3 py-2 rounded-md hover:bg-gray-100">Casuals</Link>
                <Link to={isAuthenticated ? "/StreetWear" : "/login"} className="block px-3 py-2 rounded-md hover:bg-gray-100">StreetWear</Link>
                <Link to={isAuthenticated ? "/Addons" : "/login"} className="block px-3 py-2 rounded-md hover:bg-gray-100">Addons</Link>
                <Link to={isAuthenticated ? "/cart" : "/login"} className="block px-3 py-2 rounded-md hover:bg-gray-100">Cart</Link>
                <Link to={isAuthenticated ? "/orders" : "/login"} className="block px-3 py-2 rounded-md hover:bg-gray-100">Orders</Link>
              </nav>
              {!isAuthenticated && (
                <div className="mt-auto pt-4 border-t">
                  <div className="flex gap-2">
                    <Link to="/login" className="flex-1 text-center px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">Login</Link>
                    <Link to="/signup" className="flex-1 text-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">Sign Up</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-center text-sm text-gray-500">
          © RWDY. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;