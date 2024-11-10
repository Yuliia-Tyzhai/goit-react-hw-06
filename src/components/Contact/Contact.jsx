import React from 'react';
import styles from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = props => {
  const { id, name, number } = props;

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };
  return (
    <div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.number}>{number}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
