import React, { useState, useEffect } from 'react';
import {Button} from 'kc-react-widgets';
import { Link } from 'react-router-dom';
import InputInfo from './InputInfo';
import './Share.css';
import SubmitButton from './SubmitButton';

function Share() {
  const [sharePosts, setSharePosts] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [officialInfo, setOfficialInfo] = useState('');
  const [date, setDate] = useState('');
  const [sidebarIsShowing, setSidebarIsShowing] = useState(true)
 

  function inputName(event) {
    setName(event.target.value);
    console.log('setName being clicked');
  }

  function inputAddress(event) {
    setAddress(event.target.value);
  }

  function inputOfficialInfo(event) {
    setOfficialInfo(event.target.value);
  }

  function inputDate(event) {
    setDate(event.target.value);
  }

  function submit() {
    setSidebarIsShowing(false);
  }

  function fetchPosts() {
    console.log('Fetching data from API');
    fetch('/api/mongodb/test_4/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        setSharePosts(data);
      });
  }

  function deleteArticle(documentId) {
    console.log('Sending DELETE for', documentId);
    // Do the DELETE, using "?_id=" to specify which document we are deleting
    fetch('/api/mongodb/test_4/?_id=' + documentId, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call method to refresh data
        fetchPosts();
      });
  }


  // Invoke fetchPosts on initial load
  useEffect(fetchPosts, []);

  return (

      <div className="Container">
        {sidebarIsShowing ?
          <div className="ComposeTemplate">
          <h1>My Information:</h1>

            <InputInfo

              InputDate
                date = {date}
                inputDate = {inputDate}

              InputName
                name = {name}
                inputName = {inputName}

              InputAddress
                address = {address}
                inputAddress = {inputAddress}

              InputOfficialInfo
                officialinfo = {officialInfo}
                inputOfficialInfo = {inputOfficialInfo}

            />

            <SubmitButton
            submit = {submit}
             />

            <Button
              type = "default"
              size = "medium"
              depth = "flat"
              shape = "square"
              style = {{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            <Link to="/compose/">←</Link>
            </Button>

      </div> : null}

      <div className="GenerateLetter">

      <div className="Share">
      <h1>Your Letter</h1>
      {
        sharePosts.map((post, index) => (
          <div className="Share-article" key={post._id}>

            <h1>{post.title}</h1>
            <p>{date}</p>
            <p>{address}</p>
            <br />
            <p>Dear {officialInfo},</p>
            <p>My name is {name}. {post.text}</p>
            <p>Sincerely,</p>
            <p>{name}</p>

            <div className="Share-articleActions">
              <div onClick={() => deleteArticle(post._id)}>
                <span alt="delete this">🗑</span>
              </div>
            </div>
          </div>
        ))
      }
      </div>

      <br />

      </div>
    </div>
  );
}

export default Share;
