import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div>
      <button className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutButton;
