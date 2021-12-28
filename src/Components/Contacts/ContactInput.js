import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ContactInput.module.css";
import ErrorModal from "../UI/ErrorModal";
const ContactInput = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [modalError, setmodalError] = useState();

  const getFirstname = (event) => {
    setFirstname(event.target.value);
  };
  const getLastname = (event) => {
    setLastname(event.target.value);
  };
  const getNumber = (event) => {
    setNumber(event.target.value);
  };
  const modalErrorCloseHandler = () => {
    setmodalError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      firstname.trim().length === 0 ||
      lastname.trim().length === 0 ||
      number.trim().length === 0
    ) {
      setmodalError({
        title: "Invalid Input",
        content: "Please Fill All The Inputs",
      });
      return;
    }
    if (number.length !== 11) {
      setmodalError({
        title: "Invalid Number",
        content: "Please Enter a Valid Number",
      });
      return;
    }
    props.contactsListHandler(firstname, lastname, number);
  };
  return (
    <div>
      {modalError && (
        <ErrorModal
          title={modalError.title}
          content={modalError.content}
          modalErrorCloseHandler={modalErrorCloseHandler}
        />
      )}
      <Card className={classes.container}>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="firstName" className="label">
              FirstName
            </label>
            <div>
              <input
                id="firstName"
                className="form-control"
                onChange={getFirstname}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">LastName</label>
            <div>
              <input
                className="form-control"
                id="lastName"
                onChange={getLastname}
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <div>
              <input
                type="number"
                className="form-control"
                id="number"
                onChange={getNumber}
              ></input>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactInput;
