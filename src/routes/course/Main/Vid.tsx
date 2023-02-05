import { useEffect, useState } from "react";

function Vid() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<Error>(null);
  useEffect(() => {
    fetch("http://localhost:3001/video")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("data from s3", data);
        setUrl(data);
      })
      .catch((e) => setError(e));
  }, []);

  return (
    <section>
      {error && (
        <h4 style={{ color: "red" }}>
          Error: {error.message}, {error.name}, {error.stack}
        </h4>
      )}
      {url.length > 0 && (
        <video src={url} controls width="320" height="240"></video>
      )}
    </section>
  );
}

export default Vid;
