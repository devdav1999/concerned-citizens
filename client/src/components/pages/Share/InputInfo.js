import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Share.css';

function InputInfo(props) {
	return (
      <div className="InputInfo">

        <div className="InputDate">
          <input
            name="date"
            placeholder="Today's Date"
            value={props.date}
            onChange={props.inputDate}
          />
        <br />
        </div>

        <div className="InputName">
          <input
            name="name"
            placeholder="Your Name"
            value={props.name}
            onChange={props.inputName}
          />
        <br />
        </div>

        <div className="InputAddress">
          <TextareaAutosize
            name="address"
            placeholder="Official's Address"
            minRows={3}
            style={{borderColor: "black", backgroundColor: "white", color: "black", fontSize: 12}}
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