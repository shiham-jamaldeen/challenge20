import React from "react";
//import background from "/assets/background-image.png";

//Header, that displays a background image in the header
function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/background-image.png"
        })`,
      }}
    >
      {/*the background image goes here */}
    </header>
  );
}
export default Header;
