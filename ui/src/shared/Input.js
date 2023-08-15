import styled from "styled-components";

const StyledInput = styled.input`
  padding: 16px 5px;
  border-radius: 4px;
  width: 100%;
  margin: 5px 0;
  border: 1px solid #7ba699;
  outline: none;
  background: none;

  &:focus {
    border: 1px solid #7ba699;
  }

  ::placeholder {
    color: #bbb;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #bbb;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #bbb;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 8px 16px;
  border-radius: 4px;
  width: 100%;
  margin: 5px 0;
  border: 1px solid #7ba699;
  outline: none;
  background: none;

  &:focus {
    border: 2px solid #7ba699;
  }

  ::placeholder {
    color: #bbb;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #bbb;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #bbb;
  }
`;

export const TextArea = ({
  placeholder,
  onChange,
  name,
  value,
  label,
  ...props
}) => {
  return (
    <div>
      <label style={{ color: "#7ba699", float: "right" }}>{label}</label>
      <StyledTextArea
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        {...props}
      />
    </div>
  );
};

const Input = ({
  type,
  placeholder,
  onChange,
  name,
  value,
  label,
  ...props
}) => {
  return (
    <div>
      <label style={{ color: "#7ba699", float: "right" }}>{label}</label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
