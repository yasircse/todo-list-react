import React from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const OptionModal = ({ selectedOption, closingModal }) => {
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Example Modal"
      closeTimeoutMS={200}
      className="modal"
    >
      <h1 className="modal__title">Selected Option</h1>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="sm-button" onClick={closingModal}>
        Ok
      </button>
    </Modal>
  );
};
export default OptionModal;
