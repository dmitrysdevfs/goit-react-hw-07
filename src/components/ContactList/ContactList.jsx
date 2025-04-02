import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, inputValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const inputValue = useSelector(state => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, inputValue);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
}
