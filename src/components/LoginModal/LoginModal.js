import "./LoginModal.css";
import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  handleLogin,
  alternateModalOpen,
}) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <ModalWithForm
      name="login"
      title="Sign in"
      isOpen={isOpen}
      onClose={handleCloseModal}
      alternateButtonText="Sign up"
      alternateModalOpen={alternateModalOpen}
      buttonText="Sign in"
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
    </ModalWithForm>
  );
};

export default LoginModal;
