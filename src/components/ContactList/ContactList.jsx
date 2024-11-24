import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
