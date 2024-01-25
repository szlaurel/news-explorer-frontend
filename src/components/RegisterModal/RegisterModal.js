import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  handleRegister,
  alternateModalOpen,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      isOpen={isOpen}
      onClose={handleCloseModal}
      alternateButtonText="Sign in"
      alternateModalOpen={alternateModalOpen}
      buttonText="Sign up"
    >
      <span className="modal__span">Email</span>
      <input
        className="modal__input"
        name="email"
        type="email"
        placeholder="Enter email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <span className="modal__span">Password</span>
      <input
        className="modal__input"
        name="password"
        type="password"
        placeholder="Enter password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <span className="modal__span">Username</span>
      <input
        className="modal__input"
        name="username"
        type="text"
        placeholder="Enter username"
        id="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
    </ModalWithForm>
  );
};

export default RegisterModal;
