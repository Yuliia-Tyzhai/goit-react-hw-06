import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  const onAddContact = newContact => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };

    const action = addContact(finalContact);
    dispatch(action);
  };
  const AddContactSchema = Yup.object({
    name: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
  });

  return (
    <Formik
      validationSchema={AddContactSchema}
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage
            className={styles.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={styles.label}>
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage
            className={styles.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
