import React from 'react';
import './Share.css';

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

        <div className="InputAddress">
          <input
            name="address"
            placeholder="Address"
            value={props.address}
            onChange={props.inputAddress}
          />
        <br />
        </div>

        <div className="InputOfficialInfo">
          <input
            officialInfo="officialInfo"
            placeholder="Official's Name"
            value={props.officialInfo}
            onChange={props.inputOfficialInfo}
          />
        <br />
        </div>


      </div>
    );
}

export default InputInfo;