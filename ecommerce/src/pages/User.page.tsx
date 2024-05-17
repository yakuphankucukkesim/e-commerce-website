import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../features/products/components/Header.component';
import ProfileComponent from '../features/products/components/Profile.component';
import FooterComponent from '../features/products/components/Footer.component';
import { useAppSelector } from '../hooks/redux/hooks';
import { selectedUser } from '../features/auth/authSlice';
import { Divider } from '@mui/material';

const UserPage = () => {

    const navigate = useNavigate();

    const { user } = useAppSelector(selectedUser);

    const address = {
        name: 'Your address',
        description: 'Edit or add your address',
    };

    const account = {
        name: 'Login & security',
        description: 'Edit login, name, and mobile number'
    }

    const handleNavigateAddress = () => {
        navigate('/address');
    };

    const handleNavigateAccount = () => {
        navigate('/account');
    };

    return (
        <div>
            <HeaderComponent />
            <div>
                <div
                    style={{
                        color: '#2a2728',
                        fontWeight: 'bold',
                        fontSize: '60px',
                        paddingLeft: '370px',
                        marginTop: '20px'
                    }}
                >
                    Hello, {user?.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : ''}
                </div>
                <div style={{
                    display: 'flex',
                    paddingTop: '40px',
                    justifyContent: 'space-around'
                }}>
                    <div style={{
                        width: '1155px',
                        backgroundColor: '#f8f4e9'
                    }}>
                        <Divider>
                        </Divider>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '48px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '48px',
                        paddingBottom: '100px'
                    }}
                >
                    <ProfileComponent part={address} onClick={handleNavigateAddress} />
                    <ProfileComponent part={account} onClick={handleNavigateAccount} />
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default UserPage;
