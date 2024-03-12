import './LoginModal.css';
import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function LoginModal({
  handleCloseModal,
  isOpen,
  // handleLogin,
  alternateModalOpen,
}) {
  /* -------------------------------------------------------------------------- */
  /*                                  useStates                                 */
  /* -------------------------------------------------------------------------- */

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isValid, setIsValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  /* -------------------------------------------------------------------------- */
  /*                        handle validation and change                        */
  /* -------------------------------------------------------------------------- */

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    setIsPasswordValid(passwordRegex.test(password));
  };

  // might push the setter and the ability to pass

  /* -------------------------------------------------------------------------- */
  /*            To test if the inputs are getting values to sent them           */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                               component code                               */
  /* -------------------------------------------------------------------------- */

  return (
    <ModalWithForm
      name="login"
      title="Sign in"
      isOpen={isOpen}
      onClose={handleCloseModal}
      alternateButtonText="Sign up"
      alternateModalOpen={alternateModalOpen}
      buttonText="Sign in"
      isEmailValid={isEmailValid}
      isPasswordValid={isPasswordValid}
    >
      <span className="modal__span">Email</span>
      <input
        className="modal__input"
        name="email"
        type="email"
        placeholder="Enter email"
        id="email"
        onBlur={validateEmail}
        value={email}
        onChange={handleEmailChange}
      />
      <span
        className={
          !isEmailValid ? 'modal__span_error' : 'modal__span_error-hidden'
        }
      >
        Invalid email address
      </span>
      <span className="modal__span">Password</span>
      <input
        className="modal__input"
        name="password"
        type="password"
        placeholder="Enter password"
        id="password"
        value={password}
        onBlur={validatePassword}
        onChange={handlePasswordChange}
      />
      {/* this span isnt active yet until i connect it to authorization */}
      <span className="modal__span_error-hidden">Invalid Password</span>
    </ModalWithForm>
  );
}

export default LoginModal;
