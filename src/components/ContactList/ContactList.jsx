import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          phone={item.number}
        />
      ))}
    </ul>
  );
};
export default ContactList;