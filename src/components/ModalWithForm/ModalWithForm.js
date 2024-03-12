import './ModalWithForm.css';
import React, { useRef, useEffect } from 'react';
// import { useState } from 'react';

function ModalWithForm({
  children,
  name,
  onClose,
  title,
  alternateButtonText,
  buttonText,
  alternateModalOpen,
  idForEachCloseButton,
  isEmailValid,
  onSubmit,
  buttonHidden,
  // isPasswordValid,
}) {
  const ref = useRef();

  // const [checkInput, setCheckInput] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*              click outside modal and escape button modal code              */
  /* -------------------------------------------------------------------------- */

  const isButtonActive = isEmailValid ? '' : 'disabled';

  const buttonHiddenSwitch = buttonHidden ? 'modal__button-submit_hidden' : '';

  const buttonHideSpan = buttonHidden
    ? 'modal__alternate-span-text_hidden'
    : '';

  useEffect(() => {
    const checkIfOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    const checkIfEscPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('mousedown', checkIfOutsideClick);
    document.addEventListener('keyup', checkIfEscPress);
    return () => {
      document.removeEventListener('mousedown', checkIfOutsideClick);
      document.removeEventListener('keyup', checkIfEscPress);
    };
  }, [onClose]);

  return (
    <div className={`modal modal_type_${name}`}>
      <div className={`modal__container modal__container_${name}`} ref={ref}>
        <button
          type="button"
          onClick={onClose}
          className="modal__close"
          label="closeButton"
          id={idForEachCloseButton}
        />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          {/* <span className="modal__span_error">This email is not available</span> */}
          <button
            type="submit"
            className={`modal__button-submit ${buttonHiddenSwitch}`}
            disabled={isButtonActive}
          >
            {buttonText}
          </button>
          <div
            className={`modal__button-container modal__button-container_${name}`}
          >
            <span className={`modal__alternate-span-text ${buttonHideSpan}`}>
              or
            </span>
            <button
              type="button"
              className="modal__button-alternate"
              onClick={alternateModalOpen}
            >
              {alternateButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
