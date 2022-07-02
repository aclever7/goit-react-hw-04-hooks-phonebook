import styled from '@emotion/styled';

const ContactList = styled.ul`
  display: contents;
  justify-content: center;
  width: 400px;
`;

const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid lightgray;
  //   border-radius: 4px;
  margin-bottom: 8px;
  width: 100%;
`;

const ContactListButton = styled.button`
  margin-left: auto;
  //   border-radiu s: 4px;
  //   padding: 12px 24px;
  background-color: indianred;
  color: white;
  font-weight: 500;
`;

export { ContactList, ContactListItem, ContactListButton };
