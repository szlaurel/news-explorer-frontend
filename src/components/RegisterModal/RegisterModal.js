import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({
  handleCloseModal,
  isOpen,
  // handleRegister,
  alternateModalOpen,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);

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

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    setIsPasswordValid(passwordRegex.test(password));
  };

  /* -------------------------------------------------------------------------- */
  /*                                handle submit                               */
  /* -------------------------------------------------------------------------- */

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setShowSecondModal(true);
  };

  /* -------------------------------------------------------------------------- */
  /*                               component code                               */
  /* -------------------------------------------------------------------------- */

  // maybe make if both email validation and password validation
  // are false and they don't pass make the submit button disabled

  return showSecondModal ? (
    <ModalWithForm
      name="success"
      alternateButtonText="Sign in"
      buttonHidden
      onClose={handleCloseModal}
      alternateModalOpen={alternateModalOpen}
    >
      <h3 className="modal__title modal__title-success">
        Registration successfully completed!
      </h3>
    </ModalWithForm>
  ) : (
    <ModalWithForm
      name="register"
      title="Sign up"
      isOpen={isOpen}
      onClose={handleCloseModal}
      alternateButtonText="Sign in"
      alternateModalOpen={alternateModalOpen}
      buttonText="Sign up"
      isEmailValid={isEmailValid}
      onSubmit={handleRegisterSubmit}
    >
      <span className="modal__span">Email</span>
      <input
        className="modal__input"
        name="email"
        type="email"
        placeholder="Enter email"
        id="email"
        value={email}
        onBlur={validateEmail}
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

      <span
        className={
          !isPasswordValid ? 'modal__span_error' : 'modal__span_error-hidden'
        }
      >
        Invalid password
      </span>
      <span className="modal__span">Username</span>
      <input
        className="modal__input"
        name="username"
        type="text"
        placeholder="Enter username"
        id="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <span
        className={`modal__span_error modal__span_error-center ${email === 'example@test.com' ? '' : 'modal__span_error-hidden'}`}
      >
        This email is not available
      </span>
    </ModalWithForm>
  );
}

export default RegisterModal;

/* -------------------------------------------------------------------------- */
/*                           old registermodal code                           */
/* -------------------------------------------------------------------------- */

// return (
//   <>
//     <ModalWithForm
//       name="register"
//       title="Sign up"
//       isOpen={isOpen}
//       onClose={handleCloseModal}
//       alternateButtonText="Sign in"
//       alternateModalOpen={alternateModalOpen}
//       buttonText="Sign up"
//       isEmailValid={isEmailValid}
//       onSubmit={handleRegisterSubmit}
//     >
//       <span className="modal__span">Email</span>
//       <input
//         className="modal__input"
//         name="email"
//         type="email"
//         placeholder="Enter email"
//         id="email"
//         value={email}
//         onBlur={validateEmail}
//         onChange={handleEmailChange}
//       />
//       <span
//         className={
//           !isEmailValid ? 'modal__span_error' : 'modal__span_error-hidden'
//         }
//       >
//         Invalid email address
//       </span>
//       <span className="modal__span">Password</span>
//       <input
//         className="modal__input"
//         name="password"
//         type="password"
//         placeholder="Enter password"
//         id="password"
//         value={password}
//         onBlur={validatePassword}
//         onChange={handlePasswordChange}
//       />

//       <span
//         className={
//           !isPasswordValid ? 'modal__span_error' : 'modal__span_error-hidden'
//         }
//       >
//         Invalid password
//       </span>
//       <span className="modal__span">Username</span>
//       <input
//         className="modal__input"
//         name="username"
//         type="text"
//         placeholder="Enter username"
//         id="username"
//         value={username}
//         onChange={handleUsernameChange}
//       />
//       <span
//         className={`modal__span_error modal__span_error-center ${email === 'example@test.com' ? '' : 'modal__span_error-hidden'}`}
//       >
//         This email is not available
//       </span>
//     </ModalWithForm>
//     {showSecondModal && (
//       <ModalWithForm alternateButtonText="Sign in">
//         <h3 className="modal__title modal__title-successful">
//           Registration successfully completed!
//         </h3>
//       </ModalWithForm>
//     )}
//   </>
// );
