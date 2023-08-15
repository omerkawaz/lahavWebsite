import { useEffect, useState } from "react";
import Logo from "../../shared/Logo/Logo";
import HamburgerMenu from "react-hamburger-menu";
import { SHeader, MobileContainer } from "./Header.style";
import Nav from "./Nav";
import Icons from "./Icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "../../shared/Button";
import NavMobile from "./NavMobile";

// const debounce = (func, wait) => {
//   let timeout;

//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };

//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// };

const Header = () => {
  const matches = useMediaQuery("(min-width: 1025px)");
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const closeBurger = () => {
    setBurgerMenu(false);
  };

  const openWhatsapp = () =>
    window.open(
      "https://api.whatsapp.com/send?phone=+972543106929&text=היי, אשמח לשמוע פרטים נוספים על הטיפול שלך",
      "_blank"
    );

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 50) {
        setScroll(true);
      } else {
        // debounce(() => , 1000);
        setScroll(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div style={{ height: "85px", transition: "all 0.3s ease" }}>
      <SHeader scroll={scroll}>
        <Logo closeBurger={closeBurger} scroll={scroll} />
        {matches ? (
          <>
            <Nav />
            <Button
              style={{
                fontFamily: "Heebo', sans-serif",
                maxHeight: !scroll ? "50px" : "40px",
              }}
              onClick={openWhatsapp}
            >
              קביעת טיפול
            </Button>
            <Icons />
          </>
        ) : (
          <MobileContainer>
            <Button
              onClick={openWhatsapp}
              style={{
                marginLeft: "25px",
                fontFamily: "Heebo !important",
                maxHeight: !scroll ? "50px" : "40px",
              }}
            >
              קביעת טיפול
            </Button>
            <HamburgerMenu
              isOpen={burgerMenu}
              menuClicked={() => setBurgerMenu((cur) => !cur)}
              width={25}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="#7ba699"
              borderRadius={0}
              animationDuration={0.3}
            />
          </MobileContainer>
        )}
        {burgerMenu && (
          <NavMobile setBurgerMenu={setBurgerMenu} scroll={scroll} />
        )}
      </SHeader>
    </div>
  );
};

export default Header;
