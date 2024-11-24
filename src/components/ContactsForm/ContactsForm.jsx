import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact, selectContacts  } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const validateName = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-ЯіїєІЇЄ' -]+$/u;
    return name.length > 1 && name.length < 30 && nameRegex.test(name);
  };


  const validatePhone = (phone) => {
    const phoneRegex = /^\+380\d{9}$/;
    return phoneRegex.test(phone);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const duplicate = contacts.find((contact) => contact.phone === phone);
    if (duplicate) {
      setError('A contact with this phone number already exists.');
      return;
    }


    if (!validateName(name)) {
      setError('The name should contain only letters and be between 2 and 30 characters long.');
      return;
    }
    if (!validatePhone(phone)) {
      setError('The phone number must be in the format +380XXXXXXXXX (12 digits).');
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
    {error && <p className={styles.error}>{error}</p>}
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Name"
      className={styles.input}
      required
    />
    <input
      type="tel"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="+380XXXXXXXXX"
      className={styles.input}
      required
    />
    <button type="submit" className={styles.button}>
      Add Contact
    </button>
  </form>
  );
};

export default ContactsForm;