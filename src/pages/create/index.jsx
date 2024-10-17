import { useState } from "react";
import "./style.css";

export default function CreatePage() {
  let [id, setId] = useState("");
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");

  const submit = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify({ id, title, body }),
    });
  };

  return (
    <div className="container">
      <h1>Create Product</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          placeholder="id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button>SEND</button>
      </form>
    </div>
  );
}
