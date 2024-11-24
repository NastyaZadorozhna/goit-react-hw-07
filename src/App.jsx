import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Find contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
