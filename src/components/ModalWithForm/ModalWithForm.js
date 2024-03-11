import "./ModalWithForm.css";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ModalWithForm = ({
  children,
  name,
  onClose,
  title,
  alternateButtonText,
  buttonText,
  onSubmit,
  alternateModalOpen,
  idForEachCloseButton,
}) => {
  const ref = useRef();

  /* -------------------------------------------------------------------------- */
  /*              click outside modal and escape button modal code              */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const checkIfOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    const checkIfEscPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("mousedown", checkIfOutsideClick);
    document.addEventListener("keyup", checkIfEscPress);
    return () => {
      document.removeEventListener("mousedown", checkIfOutsideClick);
      document.removeEventListener("keyup", checkIfEscPress);
    };
  }, [onClose]);

  return (
    <div className={`modal modal_type${name}`}>
      <div className="modal__container" ref={ref}>
        <button
          type="button"
          onClick={onClose}
          className="modal__close"
          id={idForEachCloseButton}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="modal__button-submit"
            disabled={true}
          >
            {buttonText}
          </button>
          <div className="modal__button-container">
            <span className="modal__alternate-span-text">or</span>
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
};

export default ModalWithForm;
