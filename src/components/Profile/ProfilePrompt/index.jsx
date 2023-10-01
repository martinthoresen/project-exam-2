import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import baseUrl from "../../../utility/constants/baseUrl";
import updateProfile from "../../../update/putMedia";
import { loadKey, saveKey } from "../../../storage/localStorage";

function ProfilePrompt() {
  const userCreds = loadKey("data");
  const userName = userCreds["name"];
  const [show, setShow] = useState(false);

  const userData = loadKey("data");
  console.log(userData);
  const userAvatar = userData.avatar;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const schema = yup.object({
    avatar: yup.string().url("Please enter a valid url"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //console.log(errors.avatar.message);
  function onSubmit(data) {
    const updatedAvatar = { avatar: data.avatar };
    const updatedVenueManager = { venueManager: data.venueManager };
    updateProfile(baseUrl + `/holidaze/profiles/${userName}/media`, updatedAvatar);
    updateProfile(baseUrl + `/holidaze/profiles/${userName}`, updatedVenueManager);
  }

  return (
    <>
      <Button variant="outline-primary mt-2" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} className="border-0">
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Avatar</Form.Label>
              <Form.Control {...register("avatar")} defaultValue={userAvatar} />
              <p className="text-danger">{errors.avatar?.message}</p>
            </Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Group className="mb-3">
              <Form.Check {...register("venueManager")} type="checkbox" label="Venue Manager" defaultChecked={userData.venueManager} />
            </Form.Group>

            <Button type="submit">Update Profile</Button>
            <div id="update-container"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfilePrompt;
