import React from "react";



const Modal = ({ onClose, currentPhoto}) => {
    const {name, category, description, index} = currentPhoto;

    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">
                    {name}
                </h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>
                    {description}
                </p>
                <button data-testid='close' onClick={onClose} type="button">
                    Close this Modal
                </button>
            </div>
        </div>
    );
}


export default Modal;