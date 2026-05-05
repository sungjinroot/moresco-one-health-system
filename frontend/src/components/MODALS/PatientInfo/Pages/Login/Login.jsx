import { useState } from "react";
import {usenavigate} from "react-router-dom";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import morescoLogo from '../../assests/logo.png';
import './Login.css';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useState('');

function handleSubmit(event) {
    event.preventDefault();
    setError('');

if (!username.trim() || !password.trim()) {
    setError(' Please enter your correct larp.');
    return;
}

}

}
