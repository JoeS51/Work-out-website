import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Login() {
  return (
    <div>
        <center>
            <h1>LOGIN</h1>
            <TextField id="standard-basic" label="Username" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
            <Button variant="contained">Submit</Button>
        </center>
    </div>
  );
}

export default Login;
