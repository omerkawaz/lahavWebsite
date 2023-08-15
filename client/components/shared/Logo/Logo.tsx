import Image from "next/image";
import LogoPng from "../../../public/assets/logo-v2.svg";
import { useRouter } from "next/router";
import styles from "./Logo.module.css";

interface TImage {
  width?: string;
  height?: string;
  style?: {
    padding: string;
    cursor: string;
  };
  closeBurger?: () => void;
}

const Logo = ({ width, height, closeBurger }: TImage) => {
  const router = useRouter();

  const handleClick = () => {
    if(closeBurger){
      closeBurger()
    }
    router.push("/");

  };

  return (
    <span style={{ cursor: "pointer" }}>
        <Image
          // style={{ padding: "10px 0", cursor: "pointer" }}
          className={styles.logo}
          src={LogoPng}
          width={width}
          height={height}
          alt="להב טיפול הוליסטי"
          onClick={handleClick}
        />
   </span>
  );
};

export default Logo;

// green - #7ba699;
// light green 97%  - #f5f8f7
// pink - #ffc6c7
// green - #5e5d5d;
