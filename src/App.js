import "./App.css";
import ContactInput from "./Components/Contacts/ContactInput";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import ContactsList from "./Components/Contacts/ContactsList";

function App() {
  const [contactsList, setContactsList] = useState([]);
  const [contact, setContact] = useState({firstname : " " , lastname : " " , number : " "});

  const contactsListHandler = (firstname, lastname, number) => {
    setContactsList((prevContacts) => {
      return [
        ...prevContacts,
        { firstname, lastname, number, id: Math.random() },
      ];
    });
  };

  const handleDelete = (id) => {
    setContactsList(contactsList.filter((user) => user.id !== id));
  };

  const contactUpdate = (firstname , lastname , number) => {
    setContactsList([...contactsList , {id : Math.random().toString , ...contact}])
  }
  return (
    <div>
      <ContactInput contactsListHandler={contactsListHandler} />
      <ContactsList contactsList={contactsList} handleDelete={handleDelete} contactUpdate = {contactUpdate} />
    </div>
  );
}

export default App;
