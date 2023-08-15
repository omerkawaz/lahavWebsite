import styles from "./Logo.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import handleLogoClick from "./handleLogoClick";

const LogoWhite = ({ width, height }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <span style={{ cursor: "pointer" }}>
      <img
        // style={{ padding: "10px 0", cursor: "pointer" }}
        className={styles.logo}
        src="/assets/logo-v2-white.svg"
        width={width || "100"}
        height={height || "100"}
        alt="להב טיפול הוליסטי"
        onClick={() => handleLogoClick(false, location, navigate)}
      />
    </span>
  );
};

export default LogoWhite;

// green - #7ba699;
// light green 97%  - #f5f8f7
// pink - #ffc6c7
// green - #5e5d5d;
