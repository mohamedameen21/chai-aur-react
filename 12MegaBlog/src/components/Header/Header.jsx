import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  //   const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.slug}
                  className={`${
                    item.active
                      ? "text-white font-semibold hover:text-yellow-300 transition-colors duration-300"
                      : "text-gray-200 hover:text-white transition-colors duration-300"
                  } text-lg`}
                >
                  {item.name}
                </Link>
              ))}
              {authStatus && <LogoutButton />}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
