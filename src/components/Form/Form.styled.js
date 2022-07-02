import styled from '@emotion/styled';

const StyledForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid black;
  //   border-radius: 4px;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: contents;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;
`;

const StyledInput = styled.input`
  padding: 8px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  //   border-radius: 4px;
  font: inherit;
  letter-spacing: 0.01em;
  resize: none;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  width: 100%;
  margin-left: auto;
  margin-top: 8px;
  //   border-radius: 4px;
  padding: 12px 24px;
  background-color: dodgerblue;
  color: white;
  font-weight: 900;
`;

export { StyledForm, StyledLabel, StyledInput, StyledButton };
