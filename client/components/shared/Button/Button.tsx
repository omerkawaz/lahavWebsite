import MButton from "@material-ui/core/Button";
import Loader from "react-loader-spinner";
import styled from "styled-components";

interface ISButton {
  loading: boolean;
  children: any;
}

const StyledLoader = styled(Loader)`
  height: 25px;
  margin-right: 10px;
`;

const Button = (props: ISButton | any) => {
  if (props.loading) {
    return (
      <MButton
        disabled={props.disabled}
        onClick={props.onClick}
        style={{
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
          fontSize: '18px'
        }}
      >
        <span style={{ marginLeft: props.marginLeft }}>{props.children}</span>
        <StyledLoader type="TailSpin" color="#7ba699" height={25} width={25} />
      </MButton>
    );
  }

  return (
    <MButton
      onClick={props.onClick}
      style={{
        ...props.style,
        background: "#7ba699",
        color: "#fff",
        height: props.height ? props.height : "50px",
        width: props.width ? props.width : "100px",
      }}
    >
      {props.children}
    </MButton>
  );
};

export default Button;

// const SButton = styled.button<ISButton>`
//   padding: 8px 16px;
//   background: ${({ secondary }) => (secondary ? "#7ba699" : "none")};
//   cursor: pointer;
//   border: 1px solid #7ba699;
//   color: ${({ secondary }) => (secondary ? "#fff" : "#7ba699")};
//   border-radius: 4px;
//   transition: 0.3s ease;

//   &:hover {
//     color: ${({ secondary }) => (secondary ? "#7ba699" : "#fff")};
//     border: 1px solid #7ba699;
//     background: ${({ secondary }) => (secondary ? "none" : "#7ba699")};
//   }

//   &:active {
//     background: ${({ secondary }) => (secondary ? "none" : "#f5f8f7")};
//     color: ${({ secondary }) => (secondary ? "#658f82" : "#fff")};
//   }
// `;
