import {
    // Checkbox,
    Grid,
    TextField,
    // FormControlLabel,
    Paper,
    Button
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../service/authservice';

const Login = () => {
    let navigate = useNavigate();
    // const [checked, setChecked] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //   const handleChange = (event: any) => {
    //     setChecked(event.target.checked);
    //   };

    const loginClick = async () => {
        const body = {
            userName: email, password
        }
        const response = await login(body);
        if (response.status) {
            navigate('/books');
        } else {
            // show message to the user
            console.log('Login failed')
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
                        <TextField label="Email" onChange={(e) => setEmail(e.target.value)}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'} onChange={(e) => setPassword(e.target.value)}></TextField>
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
                        <Link to="/signup" >
                            Don't have an account yet?
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth onClick={() => loginClick()}> Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Login;