import React from 'react';
import './Share.css';

function SubmitButton(props) {
	return (
      <div className="SubmitButton">
      <button onClick={props.submit}>Submit</button>
      </div>
    );
}

export default SubmitButton;