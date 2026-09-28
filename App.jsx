import { useState } from "react";

function App() {
  const [post, setPost] = useState("");
  const [platform, setPlatform] = useState("Twitter");

  const limit = platform === "Twitter" ? 280 : 3000;
  const exceeded = post.length > limit;
  const remaining = limit - post.length;

  return (
    <main className="page">
      <section className="card">
        <div className="header">
          <h1>Post Composer</h1>
          <p>Create and validate your social media post.</p>
        </div>

        <label className="label">Select Platform</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="select"
        >
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>

        <label className="label">Write your post</label>
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Type your post here..."
          className={exceeded ? "textarea error-border" : "textarea"}
          rows="9"
        />

        <div className="counter">
          <span>
            Characters: <strong>{post.length}</strong> / {limit}
          </span>
          <span>{remaining >= 0 ? `${remaining} remaining` : `${Math.abs(remaining)} over limit`}</span>
        </div>

        {exceeded && (
          <div className="error">
            Error: Character limit exceeded for {platform}.
          </div>
        )}

        {!exceeded && post.length > 0 && (
          <div className="success">Post is within the allowed limit.</div>
        )}

        <div className="info">
          <strong>{platform} limit:</strong> {limit} characters
        </div>
      </section>
    </main>
  );
}

export default App;
