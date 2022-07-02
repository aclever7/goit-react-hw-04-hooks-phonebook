import PropTypes from 'prop-types';
import {
  ContactList,
  ContactListItem,
  ContactListButton,
} from './Contact.styled';

function Contact({ handleContactFilter, deleteContact }) {
  return (
    <ContactList>
      {handleContactFilter.map(({ name, number, id }) => {
        return (
          <ContactListItem key={id}>
            {name}: {number}
            <ContactListButton
              type="button"
              id={id}
              onClick={() => deleteContact(id)}
            >
              Delete
            </ContactListButton>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
}

Contact.propTypes = {
  handleContactFilter: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
