import React from "react";

function Profile(){
  let profileTop = {
    height: "180px",
    width: "400px",
    border: "1px solid lightgrey",
    backgroundColor: "#4287f5",
    position: 'absolute',
    zIndex: '-1'
  }
  let profileBottom = {
    height: "180px",
    width: "400px",
    border: "1px solid lightgrey",
    paddingTop: '100px',

  }
  let image = {
    marginLeft: '5%',
    height: '100px',
    width: '100px',
    borderRadius: '50%',
  }

  let name = {
    float: 'right',
    marginRight: '20%',
    marginTop: '20%',
    fontSize: '18',

  }

  let tweetsFollowingFololowers = {
    padding: '10px',
    fontSize: '14',
    marginLeft: '25px',
    marginTop: "100px",

  }

  let links = {
    marginTop: '25px'
  }

  return(
    <div>
      <div style={profileTop}>

      </div>
      <div style={profileBottom}>
      <img style={image}width="100" height="100"src="https://www.royalsmushicafe.dk/wp-content/uploads/2016/02/Profile-Placeholder.jpg"></img>
        <span style={name}><strong>Kelly A. Corrigan</strong></span>
        <div style={links}>
        <span style={tweetsFollowingFololowers}>TWEETS</span>
        <span style={tweetsFollowingFololowers}>FOLLOWING</span>
        <span style={tweetsFollowingFololowers}>FOLOLOWERS</span>
      </div>
      </div>

    </div>
  );
}

export default Profile;
