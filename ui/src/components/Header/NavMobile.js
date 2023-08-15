import React from "react";
import { SMobileNav, MobileUl, MobileLi, LinksContainer } from "./Header.style";
import nav from "./NavConfig";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Icon from "../../shared/Icon";

const NavMobile = ({ setBurgerMenu, scroll }) => {
  return (
    <SMobileNav scroll={scroll}>
      <MobileUl>
        {nav.map((item) =>
          item.id !== "store" ? (
            <Link
              key={item.id}
              onClick={() => setBurgerMenu(false)}
              style={{
                height: "30%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#505050",
                textDecoration: "none",
              }}
              to={item.route}
            >
              <MobileLi>{item.name}</MobileLi>
            </Link>
          ) : (
            <a
              key={item.id}
              target="_blank"
              href={item.route}
              style={{
                textDecoration: "none",
                height: "30%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#505050",
              }}
              rel="noreferrer"
            >
              <MobileLi>{item.name}</MobileLi>
            </a>
          )
        )}
        <LinksContainer>
          <Icon
            icon={<FaFacebook color="#f2f2f2" />}
            onClick={() =>
              window.open(
                "https://www.facebook.com/NaturalTherapyForYourChild",
                "_blank"
              )
            }
          />
          <Icon
            icon={<FaWhatsapp color="#f2f2f2" />}
            onClick={() => window.open("https://wa.me/+972543106929", "_blank")}
          />
          <Icon
            icon={<FaPhoneAlt color="#f2f2f2" size="0.8em" />}
            onClick={() => window.open("tel:+972543106929", "_blank", "_blank")}
          />
          <Icon
            icon={<FaLinkedin color="#f2f2f2" />}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/lahav-stendel-687353146/",
                "_blank"
              )
            }
          />
          <Icon
            icon={<FaInstagram color="#f2f2f2" />}
            onClick={() =>
              window.open("https://www.instagram.com/lahav_stendel/", "_blank")
            }
          />
        </LinksContainer>
      </MobileUl>
    </SMobileNav>
  );
};

export default NavMobile;
