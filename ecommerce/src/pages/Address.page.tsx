import HeaderComponent from '../features/products/components/Header.component';
import FooterComponent from '../features/products/components/Footer.component';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks';
import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAddresses } from '../features/products/addressSlice';
import { selectedUser } from '../features/auth/authSlice';
import AddressComponent from '../features/products/components/Address.component';
import AddAddressComponent from '../features/products/components/AddAddress.component';

const AddressPage = () => {
    const dispatch = useAppDispatch();

    const user = useAppSelector(selectedUser);

    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { addresses } = useAppSelector((state) => state.address);

    useEffect(() => {
        dispatch(getAddresses());
    }, [dispatch]);

    const filteredAddresses = addresses.filter((address) => address.userEmail === user.user?.email);

    return (
        <div>
            <HeaderComponent />
            <div style={{
                paddingBottom: '100px'
            }}>
                <div
                    style={{
                        color: '#2a2728',
                        fontWeight: 'bold',
                        fontSize: '60px',
                        marginTop: '20px',
                        textAlign: 'center'
                    }}
                >
                    Edit or add your address
                </div>
                <div style={{
                    display: 'flex',
                    paddingTop: '10px',
                    justifyContent: 'space-around'
                }}>
                    <div style={{
                        width: '1155px',
                        backgroundColor: '#f8f4e9'
                    }}>
                        <Divider />
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', paddingTop: '30px', justifyContent: 'center' }}>
                    <AddAddressComponent />
                    {filteredAddresses.map((address, index) => (
                        <div
                            key={index}
                        >
                            <AddressComponent key={address._id} address={address} />
                        </div>
                    ))}
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default AddressPage;
