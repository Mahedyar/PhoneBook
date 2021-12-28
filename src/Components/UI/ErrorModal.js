import Button from "./Button";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div onClick={props.modalErrorCloseHandler} className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <div>{props.title}</div>
        <div>{props.content}</div>
        <Button onClick = {props.modalErrorCloseHandler}>Close</Button>
      </Card>
    </div>
  );
};

export default ErrorModal;
