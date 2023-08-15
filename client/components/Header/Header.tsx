import { useState } from "react";
import Logo from "../shared/Logo/Logo";
import HamburgerMenu from "react-hamburger-menu";
import { SHeader, MobileContainer } from "./Header.style";
import Nav from "./Nav";
import Icons from "./Icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "../shared/Button/Button";
import NavMobile from "./NavMobile";
import Link from "next/link";

const Header = () => {
  const matches = useMediaQuery("(min-width: 1025px)");
  const [burgerMenu, setBurgerMenu] = useState(false);

  const closeBurger = () => {
    setBurgerMenu(false);
  };

  return (
    <SHeader>
      <Logo closeBurger={closeBurger} />
      {matches ? (
        <>
          <Nav />
            <Link href="/contact" passHref>
              <a>
                <Button>קביעת טיפול</Button>
              </a>
            </Link>
          <Icons />
        </>
      ) : (
        <MobileContainer>
          <Link href="/contact" passHref>
            <a onClick={closeBurger}>
              <Button
                style={{
                  marginLeft: "25px",
                  padding: "4px 8px",
                }}
              >
                קביעת טיפול
              </Button>
            </a>
          </Link>

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
      {burgerMenu && <NavMobile setBurgerMenu={setBurgerMenu} />}
    </SHeader>
  );
};

export default Header;
