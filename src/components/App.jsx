import React from 'react';
// import './App.css'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const val = localStorage.getItem('contacts');
  //   const parsedVal = val ? JSON.parse(val) : [];
  //   return parsedVal.length
  //     ? parsedVal
  //     : [
  //         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //       ];
  // });

  // useEffect(() => {
  //   const stringifiedContacts = JSON.stringify(contacts);
  //   localStorage.setItem('contacts', stringifiedContacts);
  // }, [contacts]);

  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  // const dispatch = useDispatch();

  // const [filter, setFilter] = useState('');

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
