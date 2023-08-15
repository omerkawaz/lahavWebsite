import Loader from "react-loader-spinner";
import Text from "./Text";

const LoaderApp = ({ on }) => {
  return (
    <div
      style={{
        background: "white",
        // transform: "translate(50%,-50%)",
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100%",
        zIndex: on ? "99" : "-5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s ease",
        opacity: on ? "1" : "0",
      }}
    >
      <img src="/assets/hero.svg" alt="emoji" height="100" />
      <Text primary light md style={{ marginTop: "30px" }}>
        כמה רגעים ...
      </Text>
      <Loader
        type="MutatingDots"
        color="#c2d6d0"
        secondaryColor="#ffe8e8"
        height={100}
        width={100}
      />
    </div>
  );
};

export const Spinner = () => (
  <div>
    <Loader
      type="MutatingDots"
      color="#c2d6d0"
      secondaryColor="#ffe8e8"
      height={100}
      width={100}
    />
  </div>
);

export default LoaderApp;
