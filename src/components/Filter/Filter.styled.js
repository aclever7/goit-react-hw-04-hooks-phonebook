import styled from '@emotion/styled';

const FilterLabel = styled.label`
  display: flex;
  display: grid;
  display: contents;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid black;
  //   border-radius: 4px;
  font: inherit;
  letter-spacing: 0.01em;
  resize: none;
  margin-top: 8px;
  margin-bottom: 12px;
`;

export { FilterLabel, FilterInput };
