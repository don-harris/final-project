import React from "react";
import PropTypes from "prop-types";
import { resetGame } from "../actions/round";

class Podium extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    //   backgroundColor: "rgba(0,0,0,0.3)",
      backgroundColor: "rgb(94, 97, 102)",
      padding: 50,
      zIndex: 1
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "white",
      borderRadius: '30px',
      maxWidth: '80%',
      maxHeight: '90%',
      minHeight: 300,
      margin: "auto",
      padding: '30px',
      display: 'block'
    };

    return <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        {this.props.children}
        </div>
      </div>
  }
};

Podium.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Podium;
