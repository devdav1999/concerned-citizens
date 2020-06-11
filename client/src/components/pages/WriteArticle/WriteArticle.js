import React, { useState } from 'react';
import './WriteArticle.css';

function WriteArticle(props) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [officialInfo, setOfficialInfo] = useState('');
  const [reason, setReason] = useState('');
  const [content, setContent] = useState('');

  function inputContent(event) {
    setContent(event.target.value);
  }

  function inputName(event) {
    setName(event.target.value);
    console.log('inputName being clicked');
  }

  function inputAddress(event) {
    setAddress(event.target.value);

  }

  function inputOfficialInfo(event) {
    setOfficialInfo(event.target.value);
  }

  function inputReason(event) {
    setReason(event.target.value);
  }

  function submit() {
    console.log('submitted')
    const formData = {
      name: name,
      address: address,
      officialinfo: officialInfo,
      reason: reason,
      text: content,
    };
    // Can also be written:
    // const formData = {title, text: content};

    fetch('/api/mongodb/blogposts/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        props.history.push('/blog/');
      });
  }

  return (
    <div className="Container">
    <div className="WriteArticle">
      <h1>Write a letter as a concerned citizen</h1>
      <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={inputName}
        />
      <br />

      <input
          address="address"
          placeholder="Address"
          value={address}
          onChange={inputAddress}
        />
      <br />

      <input
          officialInfo="officialInfo"
          placeholder="Official's Name"
          value={officialInfo}
          onChange={inputOfficialInfo}
        />
      <br />

      <input
          reason="reason"
          placeholder="Reason Why You Are Writing"
          value={reason}
          onChange={inputReason}
        />
      <br />

      <textarea
          name="content"
          placeholder="Contents"
          value={content}
          onChange={inputContent}
        />

      <br />

      <button onClick={submit}>Submit</button>

    <div className="GenerateLetter">
      <br></br>

      Address: {address}

      <br></br>
      <br></br>
      Dear {officialInfo}, 
      <br></br>
      My name is {name} and I am writing to you because {reason}. {content}

      <br></br>
      <br></br>

      Sincerely,
      <br></br>
      {name}
    </div>

    </div>
    </div>
  );
}

export default WriteArticle;
