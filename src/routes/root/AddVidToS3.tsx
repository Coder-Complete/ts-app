// import React from "react";
import { useEffect, useState } from "react";

import ReactPlayer from "react-player";

function sendVid() {
  // send vid
  // set value of input to null
}

function AddVidToS3() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/video")
      .then((response) => response.json())
      .then((data) => {
        console.log("data from s3", data);
        setUrl(data);
      });
  }, []);
  return (
    <section>
      <input type="file" name="" id="" />
      <button onClick={sendVid}>Upload vid</button>

      {url.length > 0 && <ReactPlayer url={url} />}
    </section>
  );
}

export default AddVidToS3;
