import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { createRoot } from 'react-dom/client';  
import "../popup/style.css"





function Popup(props) {
    
  const handleButton = () => {
     window.location.href="../medication/index.jsx"
     
  };
  return (
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Reminder!!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id='div' >
      <svg  id='pill' viewBox="-0.003 0 99.979 99.979" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.39991600000000005"></g><g id="SVGRepo_iconCarrier"><path fill="#EBECED" d="M92.869 7.105c9.478 9.476 9.478 24.832 0 34.308L41.411 92.869c-9.475 9.474-24.833 9.474-34.307 0-9.476-9.475-9.476-24.832 0-34.308L58.562 7.105c9.475-9.473 24.834-9.473 34.307 0z"></path><path fill="#3B97D3" d="M32.548 33.122L7.105 58.563c-9.476 9.476-9.476 24.833 0 34.308 9.474 9.475 24.832 9.475 34.307 0L66.85 67.43 32.548 33.122z"></path><path fill="#2086BF" d="M65.43 68.862L31.134 34.568l1.414-1.414 34.294 34.294z"></path><path fill="#55A6DC" d="M38.096 41.51L12.7 66.906a5.894 5.894 0 0 0 0 8.339 5.896 5.896 0 0 0 8.339 0l25.396-25.396-8.339-8.339z"></path><path fill="#EFF0F1" d="M75.244 12.7a5.897 5.897 0 0 0-8.343 0L39.51 40.096l8.339 8.339 27.396-27.396a5.899 5.899 0 0 0-.001-8.339z"></path><path fill="#4F9ED4" d="M47.862 48.444l-1.414 1.414-8.335-8.336 1.414-1.414z"></path></g></svg>
      </div>
      <div className='div2'>
        <h4>Medication Alert!!!</h4>
        <p>
          TIME TO TAKE A MEDICATION
        </p>
        <Button onClick={handleButton} >medication</Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  console.log("rendering")

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch 
      </Button>

      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
const iframeRoot = createRoot(iframe.contentWindow.document.body);
iframeRoot.render(<App />);
