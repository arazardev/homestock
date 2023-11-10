import React, { useRef } from 'react'

const ModalFromButton = ({dialogClass="", className, buttonText, children }) => {
	const modalElement = useRef();

	const handleShowModal = () => {
		modalElement.current.showModal();
	};

	const handleCloseModal = () => {
		modalElement.current.close();
	};

	return (
		<>
			<button className={className} onClick={handleShowModal}>{buttonText}</button>
			<dialog ref={modalElement} className={dialogClass}>
				<button className="close" onClick={handleCloseModal}>
					x
				</button>
				{children}
			</dialog>
		</>
	);
};

export default ModalFromButton