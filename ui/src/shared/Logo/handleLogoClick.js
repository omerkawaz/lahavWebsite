const handleLogoClick = (closeBurger, location, navigate) => {
  if (closeBurger) {
    closeBurger();
  }

  if (location.pathname === "/") {
    window.scrollTo(0, 0);
  } else {
    navigate("/");
  }
};

export default handleLogoClick;
