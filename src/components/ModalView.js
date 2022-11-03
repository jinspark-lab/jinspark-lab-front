import React from 'react';
import '../styles/ModalView.css';

// Single Item represent text
const ModalView = ({ visible, modalContent, onClickSubmit, onClickCancel }) => {
    if (!visible) {
        return null;
    }
    if (!onClickCancel) {
        return (
            <div className="modal-view">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                        {modalContent.title}
                        </h5>
                    </div>
                    <div className="modal-body">
                        <p>{modalContent.text}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onClickSubmit}>Accept</button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="modal-view">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">
                    {modalContent.title}
                    </h5>
                </div>
                <div className="modal-body">
                    <p>{modalContent.text}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={onClickSubmit}>Accept</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClickCancel}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ModalView;
