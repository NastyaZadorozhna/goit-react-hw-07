import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactsForm.module.css";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addContact({ name, number })).unwrap(); 
      setName('');
      setNumber('');
    } catch (error) {
      console.error('Failed to add contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
        value={number}
        onChange={(e) => setNumber(e.target.value)}
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
