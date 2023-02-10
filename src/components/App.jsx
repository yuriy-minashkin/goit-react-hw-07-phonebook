import { useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { isLoading, getError } from 'redux/selectors';
import css from './App.module.css';

const App = () => {
  const loader = useSelector(isLoading);
  const error = useSelector(getError);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {loader && <p>Loading contacts...</p>}
      {error && <p>Ooops... Error occured, try again later.</p>}
    </div>
  );
};

export { App };