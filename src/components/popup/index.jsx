import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import "../popup/style.css";
import CapsuleLogo from "../assests/capsule.png";
import SyrupLogo from "../assests/syrup.png";
import InjectionLogo from "../assests/injection.png";
import InsulinLogo from "../assests/insuline.png";



function Popup(props) {
  

  const getMedicationLogo = (type) => {
    switch (type) {
      case "Capsule":
        return CapsuleLogo;
      case "Syrup":
        return SyrupLogo;
      case "Injection":
        return InjectionLogo;
      case "Insulin":
        return InsulinLogo;
      default:
        return null;
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{fontFamily:"cursive"}}
    >
      <Modal.Header closeButton style={{ color: "black" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          Reminder!!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="div">
          <img
            src={getMedicationLogo(props.medicationType)} 
            alt={props.medicationType}
            style={{ width: 100, height: 100 }} 
          />
        </div>
        <div className="div2" style={{fontFamily:"cursive"}}>
          <h4 style={{color:"red"}}>Medication Alert!!!</h4>
          <p>TIME TO TAKE A MEDICATION</p>
          <h5>{props.medicationName}</h5> 
          <p>Scheduled Time: {props.medicationTime}</p> 
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outlined" style={{color:"black"}}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;