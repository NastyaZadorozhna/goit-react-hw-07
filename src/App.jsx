import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from './redux/contactsSlice';
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css'

const App = () => {
const dispatch = useDispatch();
const loading = useSelector(selectLoading);
const error = useSelector(selectError);

useEffect(() =>{
  dispatch(fetchContacts());
}, [dispatch]);


  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Find contacts</h2>
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default App;
