import AddressFormComponent from "../features/auth/components/AddressForm.component";
import FooterComponent from "../features/products/components/Footer.component";
import HeaderComponent from "../features/products/components/Header.component";

const AddAddressPage = () => {
    return (
        <div>
            <HeaderComponent />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    paddingBottom: '100px',
                }}>
                    <div style={{
                        color: '#2a2728',
                        fontWeight: 'bold',
                        fontSize: '60px',
                    }}>
                        Add a new address
                    </div>
                    <div style={{
                        paddingLeft: '80px'
                    }}>
                        <AddressFormComponent />
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}
export default AddAddressPage;