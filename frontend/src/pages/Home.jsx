import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";
import Login from "../components/Login";

function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    setResult(null);
  };

  return (
    <div className="container">

      <div className="card">

        {/* HEADER */}
        <div className="header">
          <h1 className="title">🧠 Stroke Detection AI</h1>

          {user && (
            <div className="user-info">
              <img src={user.photo} alt="profile" />
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>

        {/* LOGIN */}
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <>
            <p className="welcome">Welcome, {user.name} 👋</p>

            {/* UPLOAD */}
            <UploadForm
              setResult={setResult}
              setLoading={setLoading}
            />

            {/* LOADER */}
            {loading && <Loader />}

            {/* RESULT */}
            {result && (
              <>
                <ResultCard result={result} />

                <button
                  className="reset-btn"
                  onClick={() => setResult(null)}
                >
                  🔄 Try Another Scan
                </button>
              </>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default Home;