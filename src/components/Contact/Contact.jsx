import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps'; 
import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false); 
  const handleDelete = async () => {
    setIsDeleting(true); 
    try {
      await dispatch(deleteContact(id)).unwrap(); 
    } catch (error) {
      console.error('Failed to delete contact:', error);
    } finally {
      setIsDeleting(false); 
    }
  };

  return (
    <li className={styles.contactItem}>
      <span className={styles.contactName}>{name}</span>
      <span className={styles.contactPhone}>{phone}</span>
      <button
        onClick={handleDelete}
        className={styles.deleteButton}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

export default Contact;
