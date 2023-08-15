import styles from "./Logo.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import handleLogoClick from "./handleLogoClick";

const Logo = ({ width, height, closeBurger, scroll }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <span style={{ cursor: "pointer" }}>
      <img
        className={styles.logo}
        src="/assets/logo-v2.svg"
        width={width || scroll ? "80" : "150"}
        // height={height || "120"}
        alt="להב טיפול הוליסטי"
        onClick={() => handleLogoClick(closeBurger, location, navigate)}
      />
    </span>
  );
};

export default Logo;

// green - #7ba699;
// light green 97%  - #f5f8f7
// pink - #ffc6c7
// gray - #5e5d5d;
