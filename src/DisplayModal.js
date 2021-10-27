// Your state includes the property show with the value of false. This allows you to hide the modal until a user prompts it to open. The functions showModal() updates your state with the .setState() method to change the value of your show property to true when a user opens the modal. Likewise, the .setState() method in your hideModal() function will close the modal and change the value in your show property to false.

import React, { Component } from "react";
import MovieModal from './MovieModal';
import './ModalStyling.css';

class DisplayModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
      this.props.setModalOpen(true)
      this.setState({ show: true });
    };

    hideModal = () => {
      this.props.setModalOpen(false)
      this.setState({ show: false });
    };
    
    render() {
        return (
          <main>
            <h1>React Modal</h1>
            <MovieModal show={this.state.show} handleClose={this.hideModal} movie={this.props.movie}>
              <p>Modal</p>
            </MovieModal>
            <button type="button" onClick={this.showModal}>
              Open
            </button>
          </main>
        );
    }
  }

    
    

export default DisplayModal