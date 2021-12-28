import classes from "../UI/ErrorModal.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import Button from "../UI/Button";

const ContactChangeModal = (props) => {
  const [firstnameChange, setFirstnameChange] = useState(props.firstname);
  const [lastnameChange, setLastnameChange] = useState(props.lastname);
  const [numberChange, setNumberChange] = useState(props.number);
  // const [currentContact , setCurrentContact] = useState({firstname : props.firstname , lastname : props.lastname , number : props.number})


  

  const newFirstname = (event) => {
    setFirstnameChange(event.target.value);
  };
  const newLastname = (event) => {
    setLastnameChange(event.target.value);
  };
  const newNumber = (event) => {
    setNumberChange(event.target.value);
  };

  // const contactUpdate = () => {
  //   setCurrentContact({firstname : firstnameChange , lastname : lastnameChange , number : numberChange})
  // }

  
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <form>
          <div className="form-group">
            <label htmlFor="firstName" className="label">
              FirstName
            </label>
            <div>
              <input
                name="firstName"
                id="firstName"
                className="form-control"
                onChange={newFirstname}
                value={firstnameChange}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">LastName</label>
            <div>
              <input
                name="lastName"
                className="form-control"
                id="lastName"
                onChange={newLastname}
                value={lastnameChange}
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <div>
              <input
                name="number"
                type="number"
                className="form-control"
                id="number"
                onChange={newNumber}
                value={numberChange}
              ></input>
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactChangeModal;
