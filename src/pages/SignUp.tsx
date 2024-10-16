import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button
} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../service/api';
import { useState } from 'react';

const Login = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [checked, setChecked] = useState(true);

    //   const handleChange = (event: any) => {
    //     setChecked(event.target.checked);
    //   };

    const signUpClick = async () => {
        const body = {
            userName: username,
            email,
            password
        }
        const response = await signup(body);
        if (response.status) {
            navigate('/login');
        } else {
            // show message to the user
            console.log('Signup failed')
        }
    }

    return (
        <div style={{ padding: 30 }}>
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField label="Username"  onChange={(e)=> setUsername(e.target.value)}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="email"  onChange={(e)=> setEmail(e.target.value)}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'}  onChange={(e)=> setPassword(e.target.value)}></TextField>
                    </Grid>
                    {/* <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                //   label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid> */}
          <Grid item xs={12}>
                        <Link to="/login" >
                           Already have an account?
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth onClick={() => signUpClick()}> Register </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Login;