import React from 'react';
import './Blog.css';

function GenerateLetter(props) {
	return (
      <div className="GenerateLetter">
      <p><strong>Address:</strong> {props.address}</p>
      <p>Dear {props.officialinfo}, </p>
      <p>My name is {props.name} and I am writing to you because {props.reason}.</p>
      <p>{props.content}</p>

      <p>Sincerely,</p>
      {props.name}

      </div>
    );
}

export default GenerateLetter;