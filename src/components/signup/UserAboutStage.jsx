import React from "react";


const UserAboutStage = ({ previousStage, handleChange, userDetails, handleSubmit, beginUpload }) => (

  <>
    <h1> About me and Submit</h1>
    <button onClick={beginUpload}>Upload Image</button>
    <textarea
      name="bio"
      id="bio"
      cols="30"
      rows="10"
      placeholder="Tell us about yourself/ Add links to your music etc"
      value={userDetails.bio}
      onChange={handleChange}
    ></textarea>
    <button onClick={previousStage}>Back</button>
    <button onClick={handleSubmit}>Submit</button>
  </>
);

export { UserAboutStage };
