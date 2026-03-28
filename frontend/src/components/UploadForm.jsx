import React, { useState } from "react";
import { uploadScan } from "../services/api";

function UploadForm({ setResult, setLoading }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    if (!file) return alert("Please select a file");

    setLoading(true);
    try {
      const data = await uploadScan(file);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Upload Brain Scan</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default UploadForm;