import React, { Component } from "react";
 
class Donate extends Component {
  render() {
    return (
      <div className="DonatePage">
        <h2>Thank You!</h2>
        <p>Donating to the Foundation gives
            more students the things that they need 
            to thrive. We accept the following Donations:
        </p>
        <ol>
          <li>Cash</li>
          <li>Check</li>
          <li>Card</li>
          <li>Items such as Gently Used TextBooks and Notes</li>
        </ol>
      </div>
    );
  }
}
 
export default Donate;