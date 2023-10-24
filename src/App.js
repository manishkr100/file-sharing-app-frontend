import { useState, useEffect, useRef } from "react";
import "./App.css";
import { uploadFile } from "./service/api";
import Copybtn from "./Copybtn";
import shortenUrl from "./service/shortenurl";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
       // console.log(response);
        const longUrl = response.path;
        const shorturl = await shortenUrl(longUrl);
        setResult(shorturl);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button className="upload-btn" onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className="result">
          <a href={result} rel="" arget="_blank">
            {result}
          </a>
          <Copybtn isResult = {result}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
