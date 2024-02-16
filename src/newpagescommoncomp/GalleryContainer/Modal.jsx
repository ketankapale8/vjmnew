import React from 'react';
import './modal.css';

const Modal = ({children , show , onModalClose}) => {
   
  return (
    show && (
        <>
          <div className="modal-backdrop" onClick={onModalClose} />
          <div className={`modal-wrapper ${show ? "active" : ""}`}>
            <div className="modal-content">
              <div className="modal-header">
                <div onClick={onModalClose} className="modal-close">
                  X
                </div>
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </>
      )
  )
}

export default Modal