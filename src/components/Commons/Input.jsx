import { forwardRef } from "react";
import styled from "styled-components";

export const Input = forwardRef(
  ({ label, uniqueId, type, placeholder, width }, ref) => {
    return (
      <InputWrapper>
        <label htmlFor={uniqueId}>{label}</label>
        <StyledInput
          type={type}
          id={uniqueId}
          placeholder={placeholder}
          ref={ref}
          width={width}
        />
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  font-size: 1.4rem;
`;

const StyledInput = styled.input`
  width: ${(props) => (props.width ? props.width : "160px")};
  padding: 6px 8px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  unicode-bidi: isolate;
`;
