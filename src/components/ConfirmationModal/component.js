import React from 'react';

const ConfirmationModal = ({ title, isOpen, handleOk, handleCancel }) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal__content">
        <h2>{title}</h2>
        <button onClick={handleOk}>Ok</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  ) : null;
};

export default ConfirmationModal;
