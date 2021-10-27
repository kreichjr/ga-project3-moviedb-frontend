// Your state includes the property show with the value of false. This allows you to hide the modal until a user prompts it to open. The functions showModal() updates your state with the .setState() method to change the value of your show property to true when a user opens the modal. Likewise, the .setState() method in your hideModal() function will close the modal and change the value in your show property to false.

import React from "react";
import MovieModal from './MovieModal';
import './ModalStyling.css';

function DisplayModal(props) {
  console.log('props', props)
  return (
    <main>
      <MovieModal show={props.show} handleClose={props.closeModal} movie={props.movie}>
        <p>Modal</p>
      </MovieModal>
    </main>
  );
}
  
export default DisplayModal