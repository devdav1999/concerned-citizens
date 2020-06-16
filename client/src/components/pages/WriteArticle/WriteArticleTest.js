import React, { useState } from 'react';
import './WriteArticle.css';
import GenerateLetter from './GenerateLetter';
import SubmitButton from './SubmitButton';
import InputInfo from './InputInfo';

function WriteArticleTest(props) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [officialInfo, setOfficialInfo] = useState('');
  const [reason, setReason] = useState('');
  const [content, setContent] = useState('');

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

  function inputContent(event) {
    setContent(event.target.value);
  }

  function submit() {
    console.log('submitted')
    const formData = {
      name: name,
      address: address,
      officialinfo: officialInfo,
      reason: reason,
      content: content,
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
      <h1>My information:</h1>
      <InputInfo

       InfoName 
       InfoAddress
      />

      <input
          officialinfo="officialInfo"
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
      
      <div className="SubmitButton"> 
        <SubmitButton
          submit = {submit}
        />
      </div>
      </div>

    <div className="GenerateLetter">
      <GenerateLetter
        name = {name}
        address = {address}
        officialinfo = {officialInfo}
        reason = {reason}
        content = {content}
      />   

    </div>
    </div>
  );
}

export default WriteArticleTest;
