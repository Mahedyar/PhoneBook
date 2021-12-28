import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ContactChangeModal from "./ContactChangeModal";
import classes from "./ContactsList.module.css";

const ContactsList = (props) => {

  const [firstname , setFirstname] = useState()
  const [lastname , setLastname] = useState()
  const [number , setNumber] = useState()
  
  const [changeModal, setChangeModal] = useState();

  // const passingToChangeModal = (firstname, lastname, number) => {
  //   setChangeModal({
  //     Firstname: firstname,
  //     Lastname: lastname,
  //     Number: number,
  //   });
  // };
  const passingToChangeModal = () => {
    setChangeModal(true);
  };

  return (
    <div>
      <Card>
        {props.contactsList.map((contact) => (
          <div className={classes.contactContainer} key={contact.id}>
            <div> FirstName : {contact.firstname}</div>
            <div> LastName : {contact.lastname}</div>
            <div> Number : {contact.number}</div>
            <Button onClick = {()=>props.handleDelete(contact.id)}>Delete</Button>
            <Button onClick={passingToChangeModal}>Change</Button>
            
            {changeModal && (
              <ContactChangeModal
                firstname={contact.firstname}
                lastname={contact.lastname}
                number={contact.number}
                contactUpdate = {props.contactUpdate}
              />
            )}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ContactsList;
