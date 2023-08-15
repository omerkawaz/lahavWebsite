import Image from "next/image";
import LogoPng from "../../../public/assets/logo-v2-white.svg";
import { useRouter } from "next/router";
import styles from './Logo.module.css';

interface TImage {
  width?: string;
  height?: string;
  style?: any;
}

const LogoWhite = ({ width, height }: TImage) => {
  const router = useRouter();

  return (
    <span style={{ cursor: "pointer" }}>
      <Image
        // style={{ padding: "10px 0", cursor: "pointer" }}
        className={styles.logo}
        src={LogoPng}
        width={width}
        height={height}
        alt="להב טיפול הוליסטי"
        onClick={() => router.push("/")}
      />
    </span>
  );
};

export default LogoWhite;

// green - #7ba699;
// light green 97%  - #f5f8f7
// pink - #ffc6c7
// green - #5e5d5d;
