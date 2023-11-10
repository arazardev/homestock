import React, { useRef } from 'react'

const ModalFromButton = ({ buttonText, children }) => {
	const modalElement = useRef();

	const handleShowModal = () => {
		modalElement.current.showModal();
	};

	const handleCloseModal = () => {
		modalElement.current.close();
	};

	return (
		<>
			<button  onClick={handleShowModal}>{buttonText}</button>
			<dialog ref={modalElement}>
				<button className="close" onClick={handleCloseModal}>
					x
				</button>
				{children}
			</dialog>
		</>
	);
};

export default ModalFromButton