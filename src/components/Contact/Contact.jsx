import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <span className={styles.contactName}>{name}</span>
      <span className={styles.contactPhone}>{phone}</span>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
