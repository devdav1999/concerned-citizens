import React from 'react';
import './WriteArticle.css';

function InputInfo(props) {
	return (
      <div className="InputInfo">
        <div className="InputName">
          <input
            name="name"
            placeholder="Name"
            value={props.name}
            onChange={props.inputName}
          />
        <br />
        </div>
      </div>
    );
}

export default InputInfo;
