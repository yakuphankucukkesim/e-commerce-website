import { FC, FormEvent, useEffect } from 'react';

import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Button,
  Divider,
  CircularProgress,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import useInput from '../../../hooks/input/use-input';
import {
  validateNameLength,
  validatePasswordLength,
  validateSurname,
} from '../../../shared/utils/validation/length';
import { validateEmail } from '../../../shared/utils/validation/email';
import { NewUser } from '../models/NewUser';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { register, reset } from '../authSlice';

const RegistrationFormComponent: FC = () => {
  const {
    text: name,
    shouldDisplayError: nameHasError,
    textChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    clearHandler: nameClearHandler,
  } = useInput(validateNameLength);

  const {
    text: surname,
    shouldDisplayError: surnameHasError,
    textChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    clearHandler: surnameClearHandler,
  } = useInput(validateSurname);

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

  const {
    text: confirmPassword,
    shouldDisplayError: confirmPasswordHasError,
    textChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    clearHandler: confirmPasswordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    nameClearHandler();
    surnameClearHandler();
    emailClearHandler();
    passwordClearHandler();
    confirmPasswordClearHandler();
  };

  const dispatch = useAppDispatch();

  const { isLoading, isSuccess } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
      navigate('/signin');
    }
  }, [isSuccess, dispatch]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    if (
      nameHasError ||
      surnameHasError ||
      emailHasError ||
      passwordHasError ||
      confirmPasswordHasError
    )
      return;

    if (
      name.length === 0 ||
      surname.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    )
      return;

    const newUser: NewUser = {
      name,
      surname,
      email,
      password,
    };

    dispatch(register(newUser));
  };

  if (isLoading)
    return <CircularProgress sx={{ marginTop: '64px' }} color='primary' />;

  return (
    <div style={{
      height: '865px'
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
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '35px',
                  fontWeight: 'bold',
                  color: '#2a2728'
                }}>
                  Create account
                </div>
              </div>
            </div>
            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
              htmlFor='name'
            >
              Your name
            </InputLabel>
            <TextField
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              error={nameHasError}
              helperText={nameHasError ? 'Enter your name' : ''}
              type='text'
              name='name'
              id='name'
              variant='outlined'
              size='small'
            />

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
              htmlFor='surname'
            >
              Your surname
            </InputLabel>
            <TextField
              value={surname}
              onChange={surnameChangeHandler}
              onBlur={surnameBlurHandler}
              error={surnameHasError}
              helperText={surnameHasError ? 'Enter your surname' : ''}
              type='text'
              name='surname'
              id='surname'
              variant='outlined'
              size='small'
            />

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
              helperText={passwordHasError ? 'Minimum 6 characters required' : ''}
              type='password'
              name='password'
              id='password'
              variant='outlined'
              size='small'
              placeholder='Minimum 6 characters required'
            />

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: '#000000' }}
              htmlFor='confirmPassword'
            >
              Re-enter password
            </InputLabel>
            <TextField
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
              error={confirmPassword.length > 0 && password !== confirmPassword}
              helperText={
                confirmPassword.length > 0 && password !== confirmPassword
                  ? 'Passwords must match'
                  : ''
              }
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              variant='outlined'
              size='small'
            />
            <Button
              id='register-btn'
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
              Register
            </Button>
          </Grid>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <small>
            <span>By creating an account, you agree to Mouton Cadet's</span>
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
              Privacy policy,
            </a>
          </small>
        </div>

        <div style={{ textAlign: 'center' }}>
          <small>
            <span>and certify that you are over 18 years old.</span>
          </small>
        </div>

        <Divider sx={{ marginTop: '36px', marginBottom: '36px' }} />

        <div>
          <small>
            Already have an account?{' '}
            <Link
              to='/signin'
              style={{ textDecoration: 'none', color: '#0000ee' }}
            >
              Sign-in
            </Link>
          </small>
        </div>

        {/* <div>
        <small>
          Buying for work?
          <a href='#' style={{ textDecoration: 'none' }}>
            {' '}
            Create a free business acount
          </a>{' '}
        </small>
      </div> */}
      </Box>
    </div>
  );
};

export default RegistrationFormComponent;
