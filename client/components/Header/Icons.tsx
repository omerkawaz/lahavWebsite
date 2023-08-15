import React from "react";
import Icon from "../shared/Icon/Icon";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
  // FaEnvelope,
} from "react-icons/fa";

const Icons = () => {
  return (
    <div>
      <Icon
        icon={<FaFacebook color="#3b5998" />}
        onClick={() =>
          window.open("https://www.facebook.com/SOULAHAV", "_blank")
        }
      />
      <Icon
        icon={<FaWhatsapp color="#25D366" />}
        onClick={() => window.open("https://wa.me/+972543106929", "_blank")}
      />
        <Icon
        icon={<FaPhoneAlt color="#44b212" size="0.8em"/>}
        onClick={() =>
          window.open(
            "tel:+972543106929", "_blank",
            "_blank"
          )
        }
      />
      <Icon
        icon={<FaLinkedin color="#007bb6" />}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/lahav-stendel-687353146/",
            "_blank"
          )
        }
      />
      <Icon
        icon={<FaInstagram color="#2a2a2a" />}
        onClick={() =>
          window.open("https://www.instagram.com/lahav_stendel/", "_blank")
        }
      />
      {/* <Icon icon={<FaEnvelope color="#dd4b39" />} /> */}
    </div>
  );
};

export default Icons;
