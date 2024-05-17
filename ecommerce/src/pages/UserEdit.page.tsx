import HeaderComponent from '../features/products/components/Header.component';
import FooterComponent from '../features/products/components/Footer.component';
import { useAppSelector } from '../hooks/redux/hooks';
import { selectedUser } from '../features/auth/authSlice';
import { Divider } from '@mui/material';

const UserEditPage = () => {
    const { user } = useAppSelector(selectedUser);

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
            </div>
            <FooterComponent />
        </div>
    );
};

export default UserEditPage;
