import MButton from "@material-ui/core/Button";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const NewButton = styled(MButton)`
  font-family: "Heebo", sans-serif;
  span {
    font-family: "Heebo", sans-serif;
  }

  .MuiButton-label {
    font-family: "Heebo", sans-serif;
    font-weight: 500;
  }
`;

const StyledLoader = styled(Loader)`
  height: 25px;
  margin-right: 10px;
`;

const Button = (props) => {
  if (props.loading) {
    return (
      <NewButton
        disabled={props.disabled}
        onClick={props.onClick}
        style={{
          ...props.style,
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px f5f8f7",
          color: "white",
          height: 50,
          padding: "0 30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#ececec",
          width: props.width ? props.width : "100px",
          fontSize: "18px",
          fontFamily: "Heebo, sans-serif",
        }}
      >
        <span
          style={{
            marginLeft: props.marginLeft,
            fontFamily: "Heebo, sans-serif",
          }}
        >
          {props.children}
        </span>
        <StyledLoader type="TailSpin" color="#7ba699" height={25} width={25} />
      </NewButton>
    );
  }

  return (
    <NewButton
      onClick={props.onClick}
      style={{
        ...props.style,
        background: "#7ba699",
        color: "#fff",
        height: props.height ? props.height : "50px",
        width: props.width ? props.width : "100px",
        fontFamily: "Heebo, sans-serif",
      }}
    >
      {props.children}
    </NewButton>
  );
};

export default Button;
