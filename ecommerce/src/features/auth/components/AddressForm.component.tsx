import { FC, FormEvent, useEffect } from 'react';

import {
    Box,
    Grid,
    TextField,
    InputLabel,
    Button,
    CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useInput from '../../../hooks/input/use-input';
import {
    validateAddressLength,
    validateCityLength,
    validateCountryLength,
    validateFirstNameLength,
    validateLastNameLength,
    validatePhoneNumberLength,
    validateStateLength,
    validateTitleLength,
    validateUserEmailLength,
    validateZipCodeLength,
} from '../../../shared/utils/validation/length';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { reset } from '../authSlice';
import { NewAddress } from '../models/NewAddress';

const AddressFormComponent: FC = () => {
    const {
        text: title,
        shouldDisplayError: titleHasError,
        textChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        clearHandler: titleClearHandler,
    } = useInput(validateTitleLength);

    const {
        text: firstName,
        shouldDisplayError: firstNameHasError,
        textChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        clearHandler: firstNameClearHandler,
    } = useInput(validateFirstNameLength);

    const {
        text: lastName,
        shouldDisplayError: lastNameHasError,
        textChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        clearHandler: lastNameClearHandler,
    } = useInput(validateLastNameLength);

    const {
        text: address,
        shouldDisplayError: addressHasError,
        textChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        clearHandler: addressClearHandler,
    } = useInput(validateAddressLength);

    const {
        text: country,
        shouldDisplayError: countryHasError,
        textChangeHandler: countryChangeHandler,
        inputBlurHandler: countryBlurHandler,
        clearHandler: countryClearHandler,
    } = useInput(validateCountryLength);

    const {
        text: city,
        shouldDisplayError: cityHasError,
        textChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        clearHandler: cityClearHandler,
    } = useInput(validateCityLength);

    const {
        text: state,
        shouldDisplayError: stateHasError,
        textChangeHandler: stateChangeHandler,
        inputBlurHandler: stateBlurHandler,
        clearHandler: stateClearHandler,
    } = useInput(validateStateLength);

    const {
        text: zipCode,
        shouldDisplayError: zipCodeHasError,
        textChangeHandler: zipCodeChangeHandler,
        inputBlurHandler: zipCodeBlurHandler,
        clearHandler: zipCodeClearHandler,
    } = useInput(validateZipCodeLength);

    const {
        text: phoneNumber,
        shouldDisplayError: phoneNumberHasError,
        textChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler,
        clearHandler: phoneNumberClearHandler,
    } = useInput(validatePhoneNumberLength);

    const {
        text: userEmail,
        shouldDisplayError: userEmailHasError,
        textChangeHandler: userEmailChangeHandler,
        inputBlurHandler: userEmailBlurHandler,
        clearHandler: userEmailClearHandler,
    } = useInput(validateUserEmailLength);

    const clearForm = () => {
        titleClearHandler();
        firstNameClearHandler();
        lastNameClearHandler();
        addressClearHandler();
        countryClearHandler();
        cityClearHandler();
        stateClearHandler();
        zipCodeClearHandler();
        phoneNumberClearHandler();
        userEmailClearHandler();
    };

    const dispatch = useAppDispatch();

    const { isLoading, isSuccess } = useAppSelector((state) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            dispatch(reset());
            clearForm();
            navigate('/address');
        }
    }, [isSuccess, dispatch]);

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            titleHasError ||
            firstNameHasError ||
            lastNameHasError ||
            addressHasError ||
            countryHasError ||
            cityHasError ||
            stateHasError ||
            zipCodeHasError ||
            phoneNumberHasError ||
            userEmailHasError
        )
            return;

        if (
            title.length === 0 ||
            firstName.length === 0 ||
            lastName.length === 0 ||
            address.length === 0 ||
            country.length === 0 ||
            city.length === 0 ||
            state.length === 0 ||
            zipCode.length === 0 ||
            phoneNumber.length === 0 ||
            userEmail.length === 0
        )
            return;

        const newAddress: NewAddress = {
            title,
            firstName,
            lastName,
            address,
            country,
            city,
            state,
            zipCode,
            phoneNumber,
            userEmail
        };

        // dispatch(addAddress(newAddress));
    };

    if (isLoading)
        return <CircularProgress sx={{ marginTop: '64px' }} color='primary' />;

    return (
        <div style={{
        }}>
            <Box
                sx={{
                    padding: 2,
                    width: '350px',
                    marginTop: 2,
                }}
            >
                <form onSubmit={onSubmitHandler}>
                    <Grid container direction='column' justifyContent='flex-start'>
                        <InputLabel
                            sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                            htmlFor='title'
                        >
                            Title
                        </InputLabel>
                        <TextField
                            value={title}
                            onChange={titleChangeHandler}
                            onBlur={titleBlurHandler}
                            error={titleHasError}
                            helperText={titleHasError ? 'Enter title' : ''}
                            type='text'
                            name='title'
                            id='title'
                            variant='outlined'
                            size='small'
                        />

                        <InputLabel
                            sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                            htmlFor='firstName'
                        >
                            Your name
                        </InputLabel>
                        <TextField
                            value={firstName}
                            onChange={firstNameChangeHandler}
                            onBlur={firstNameBlurHandler}
                            error={firstNameHasError}
                            helperText={firstNameHasError ? 'Enter your name' : ''}
                            type='text'
                            name='firstName'
                            id='firstName'
                            variant='outlined'
                            size='small'
                        />

                        <InputLabel
                            sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                            htmlFor='lastName'
                        >
                            Your surname
                        </InputLabel>
                        <TextField
                            value={lastName}
                            onChange={lastNameChangeHandler}
                            onBlur={lastNameBlurHandler}
                            error={lastNameHasError}
                            helperText={lastNameHasError ? 'Enter your surname' : ''}
                            type='lastName'
                            name='lastName'
                            id='lastName'
                            variant='outlined'
                            size='small'
                        />

                        <InputLabel
                            sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                            htmlFor='address'
                        >
                            Your address
                        </InputLabel>

                        <TextField
                            value={address}
                            onChange={addressChangeHandler}
                            onBlur={addressBlurHandler}
                            error={addressHasError}
                            helperText={addressHasError ? 'Enter your address' : ''}
                            type='address'
                            name='address'
                            id='address'
                            variant='outlined'
                            size='small'
                        />

                        <InputLabel
                            sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                            htmlFor='country'
                        >
                            Country
                        </InputLabel>
                        <TextField
                            value={country}
                            onChange={countryChangeHandler}
                            onBlur={countryBlurHandler}
                            error={countryHasError}
                            helperText={countryHasError ? 'Country' : ''}
                            type='country'
                            name='country'
                            id='country'
                            variant='outlined'
                            size='small'
                        />

                        <div style={{
                            display: 'flex',
                            gap: '8px'
                        }}>
                            <div>
                                <InputLabel
                                    sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                                    htmlFor='city'
                                >
                                    City
                                </InputLabel>
                                <TextField
                                    value={city}
                                    onChange={cityChangeHandler}
                                    onBlur={cityBlurHandler}
                                    error={cityHasError}
                                    helperText={cityHasError ? 'City' : ''}
                                    type='city'
                                    name='city'
                                    id='city'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                            <div>
                                <InputLabel
                                    sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                                    htmlFor='state'
                                >
                                    State
                                </InputLabel>
                                <TextField
                                    value={state}
                                    onChange={stateChangeHandler}
                                    onBlur={stateBlurHandler}
                                    error={stateHasError}
                                    helperText={stateHasError ? 'State' : ''}
                                    type='state'
                                    name='state'
                                    id='state'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                            <div>
                                <InputLabel
                                    sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                                    htmlFor='zipCode'
                                >
                                    Zip code
                                </InputLabel>
                                <TextField
                                    value={zipCode}
                                    onChange={zipCodeChangeHandler}
                                    onBlur={zipCodeBlurHandler}
                                    error={zipCodeHasError}
                                    helperText={zipCodeHasError ? 'Zip code' : ''}
                                    type='zipCode'
                                    name='zipCode'
                                    id='zipCode'
                                    variant='outlined'
                                    size='small'
                                />
                            </div>
                        </div>

                        <InputLabel
                            sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                            htmlFor='phoneNumber'
                        >
                            Phone number
                        </InputLabel>
                        <TextField
                            value={phoneNumber}
                            onChange={phoneNumberChangeHandler}
                            onBlur={phoneNumberBlurHandler}
                            error={phoneNumberHasError}
                            helperText={phoneNumberHasError ? 'Phone number' : ''}
                            type='phoneNumber'
                            name='phoneNumber'
                            id='phoneNumber'
                            variant='outlined'
                            size='small'
                        />

                        <InputLabel
                            sx={{ fontWeight: 'bold', marginTop: 1, color: '#000000' }}
                            htmlFor='userEmail'
                        >
                            Your email
                        </InputLabel>
                        <TextField
                            value={userEmail}
                            onChange={userEmailChangeHandler}
                            onBlur={userEmailBlurHandler}
                            error={userEmailHasError}
                            helperText={userEmailHasError ? 'Your email' : ''}
                            type='userEmail'
                            name='userEmail'
                            id='userEmail'
                            variant='outlined'
                            size='small'
                        />

                        <Button
                            id='addaddress-btn'
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
                            Add address
                        </Button>
                    </Grid>
                </form>
            </Box>
        </div>
    );
};

export default AddressFormComponent;
