import React from 'react';
import './Blog.css';

function SubmitButton(props) {
	return (
      <div className="SubmitButton">
      <button onClick={props.submit}>Submit</button>
      </div>
    );
}

export default SubmitButton;