import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { logoutUser } from "../../../auth/logoutUser";

function LogoutPrompt() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => logoutUser();
  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Log Out
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="border-0">
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" id="logout-button" onClick={handleLogout}>
            Log out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutPrompt;
