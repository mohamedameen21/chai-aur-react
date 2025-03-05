import React from "react";

function Logo({ width = '100px' }) {
  return (
    <img
      src="https://placehold.co/100x100?text=Logo"
      alt="logo"
      width={width}
    />
  );
}

export default Logo;
