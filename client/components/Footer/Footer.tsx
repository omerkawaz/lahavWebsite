import Icon from "../shared/Icon/Icon";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
  FaWhatsapp,
  FaArrowAltCircleUp,
  // FaEnvelope,
} from "react-icons/fa";
import LogoWhite from "../shared/Logo/LogoWhite";

import StickyIcons from "../home/sticky-icons/StickyIcons";

const Footer = () => {
  // const goToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <div
          style={{
          background: "#7ba699",
          width: "100%",
          height: "100px",
          bottom: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 25px",
        }}
      >
        <LogoWhite />
        {/* <Icon icon={<FaArrowAltCircleUp color="#f2f2f2" />} onClick={goToTop} /> */}
        <div>
          <Icon
            icon={<FaFacebook color="#f2f2f2" />}
            onClick={() =>
              window.open("https://www.facebook.com/SOULAHAV", "_blank")
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
          {/* <Icon icon={<FaEnvelope color="#dd4b39" />} /> */}
        </div>
      </div>
      <StickyIcons />
    </>
  );
};

export default Footer;
