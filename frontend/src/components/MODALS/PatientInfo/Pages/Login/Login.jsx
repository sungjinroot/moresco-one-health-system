import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import morescoLogo from '../../assets/logo.png';
import './Login.css';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

function handleSubmit(event) {
    event.preventDefault();
    setError('');

if (!username.trim() || !password.trim()) {
    setError(' Please enter your correct larp.');
    return;
}

if (
    username.trim() === MORESCO_USERS.username && password === MORESCO_USERS.password
) { 
    localStorage.setItem('token', 'frontend-hardcoded-token');
    localStorage.setItem(
        'user',
        JSON.stringify({
            username: MORESCO_USERS.username,
            name: MORESCO_USERS.name,
            role: MORESCO_USERS.role,
        }),
    );
    navigate('/patients');
    return;
}
setError('Invalid username or password. ayg pataka diha larp');
}


  return (
    <div className="login-page">
      <Paper elevation={8} className="login-card">
        <div className="login-brand">
          <img src={morescoLogo} alt="MORESCO-1 Logo" className="login-logo" />
          <div>
            <Typography variant="h4" fontWeight={700}>
              MORESCO-1
            </Typography>
            <Typography variant="body1">
              Employee Health Information Tracking and Management System
            </Typography>
          </div>
        </div>

        <Box component="form" onSubmit={handleSubmit} className="login-form">
          <TextField
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
          />

          {error && <Alert severity="error">{error}</Alert>}

          <Button type="submit" variant="contained" size="large" fullWidth>
            Login
          </Button>

          <Typography variant="body2" color="text.secondary">
            Demo login: `admin` / `admin123`
          </Typography>
        </Box>
      </Paper>
    </div>
  );

}
export default Login;
