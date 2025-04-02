import ContactList from '../ContactList/ContactList';
import css from './App.module.css';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm />

      <SearchBox />
      <ContactList />
    </div>
  );
}
