import { useState } from 'react';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'JOB_SEEKER'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch(
        'http://localhost:8080/api/users/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage('Registration successful!');
        setForm({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'JOB_SEEKER'
        });
      } else {
        setMessage(data.message || data.error || 'Registration failed!');
      }
    } catch (error) {
      setMessage('Unable to connect to the server.');
    }
  };

  return (
    <div className="register-container">
      <h2>Create Your CareerNest Account</h2>
      <p>Start your career journey with us.</p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="JOB_SEEKER">Job Seeker</option>
          <option value="RECRUITER">Recruiter</option>
        </select>

        <button type="submit">Create Account</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;