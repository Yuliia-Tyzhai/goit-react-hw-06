import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li className={styles.listItem} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
