import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: "350px", margin: "auto" }}>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /><br /><br />

        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /><br /><br />

        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
        </div>
      )}
    </div>
  );
}

export default SignupForm;
