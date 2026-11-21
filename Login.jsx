
import { useState } from 'react';

function Login() {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle login form submission
  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage('');
    setLoading(true);

    try {

      const response = await fetch(
        'http://localhost:8080/api/users/login',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (response.ok) {

        // Store JWT token
        sessionStorage.setItem('token', data.token);

        // Store user details
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            id: data.id,
            name: data.name,
            email: data.email,
            role: data.role
          })
        );

        setMessage(
          `Welcome, ${data.name}! Login successful.`
        );

        setForm({
          email: '',
          password: ''
        });

      } else {

        setMessage(
          data.message ||
          data.error ||
          'Invalid email or password.'
        );

      }

    } catch (error) {

      setMessage(
        'Unable to connect to the server.'
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="login-container">

      <h2>Welcome Back to CareerNest</h2>

      <p>Login to continue your career journey.</p>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>

          {loading ? 'Logging in...' : 'Login'}

        </button>

      </form>

      {message && <p>{message}</p>}

    </div>

  );
}

export default Login;
