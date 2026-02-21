import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Replace this with your backend public IP or domain
  const BACKEND_URL = "http://3.238.80.227:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BACKEND_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const err = await res.json();
        alert(`Error: ${err.error}`);
        return;
      }

      alert("User Registered!");
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      alert(`Request failed: ${error}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br /><br />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
