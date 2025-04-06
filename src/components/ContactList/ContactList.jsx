import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilters } from '../../redux/filtersSlice';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, inputValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const inputValue = useSelector(selectNameFilters);
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
