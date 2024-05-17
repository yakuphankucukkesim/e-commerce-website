import { FC, FormEvent, useEffect } from 'react';

import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import useInput from '../../../hooks/input/use-input';
import { validateEmail } from '../../../shared/utils/validation/email';
import { validatePasswordLength } from '../../../shared/utils/validation/length';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { login, reset } from '../authSlice';
import { LoginUser } from '../models/LoginUser.interface';

const SigninFormComponent: FC = () => {
  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const dispatch = useAppDispatch();

  const { isLoading, isSuccess, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (!isAuthenticated) return;
    navigate('/');
  }, [isAuthenticated]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailHasError || passwordHasError) return;

    if (email.length === 0 || password.length === 0) return;

    const loginUser: LoginUser = { email, password };

    dispatch(login(loginUser));
  };

  if (isLoading)
    return <CircularProgress sx={{ marginTop: '64px' }} color='primary' />;

  return (
    <div style={{
      height: '865px',
    }}>
      <Box
        sx={{
          border: 1,
          padding: 2,
          borderColor: '#cccccc',
          width: '350px',
          marginTop: 2,
        }}
      >
        <form onSubmit={onSubmitHandler}>
          <Grid container direction='column' justifyContent='flex-start'>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '35px',
                fontWeight: 'bold',
                color: '#2a2728'
              }}>
                Sign-In
              </div>
            </div>
            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
              htmlFor='email'
            >
              Email
            </InputLabel>
            <TextField
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailHasError}
              helperText={emailHasError ? 'Enter your email' : ''}
              type='email'
              name='email'
              id='email'
              variant='outlined'
              size='small'
            />

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
              htmlFor='password'
            >
              Password
            </InputLabel>
            <TextField
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={
                passwordHasError ? 'Minimum 6 characters required' : ''
              }
              type='password'
              name='password'
              id='password'
              variant='outlined'
              size='small'
              placeholder='Minimum 6 characters required'
            />

            <Button
              id='signin-btn'
              disabled={
                !validatePasswordLength(password) ||
                !validateEmail(email)
              }
              variant='contained'
              style={{
                marginTop: '16px',
                height: '31px',
                backgroundColor: '#2a2728',
                color: 'white',
                borderColor: '#a88734 #9c7e31 #846a29',
                textTransform: 'none',
                fontWeight: 'bold'
              }}
              type='submit'
            >
              Sign-In
            </Button>
          </Grid>
        </form>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <small>
            <span>By continuing, you agree to Mouton Cadet's</span>
          </small>
        </div>
        <div style={{ textAlign: 'center' }}>
          <small>
            <a href='#' style={{ textDecoration: 'none' }}>
              {' '}
              Conditions of use
            </a>{' '}
            and{' '}
            <a href='#' style={{ textDecoration: 'none' }}>
              Privacy policy
            </a>
          </small>
        </div>
        <div style={{ textAlign: 'center' }}>
          <small>
            <span>and certify that you are over 18 years old.</span>
          </small>
        </div>
      </Box>
      <div style={{ marginTop: '16px' }}>
        <Divider>
          <small style={{ color: '#767676' }}>New to Mouton Cadet?</small>
        </Divider>

        <Link
          id='register-link'
          to='/register'
          style={{ textDecoration: 'none', color: '#0000ee' }}
        >
          <Button
            variant='contained'
            style={{
              width: '100%',
              marginTop: '12px',
              height: '31px',
              backgroundColor: '#2a2728',
              color: 'white',
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SigninFormComponent;