import "./ModalWithForm.css";
import React from "react";

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
  return (
    <div className={`modal modal__type${name}`}>
      <div className="modal__container">
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
