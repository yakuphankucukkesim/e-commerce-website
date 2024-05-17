import { useNavigate } from "react-router-dom";

const AddAddressComponent = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            textAlign: 'left',
            width: '300px',
            height: '250px',
            border: '1px dashed rgba(42, 39, 40, 0.6)',
            borderRadius: '10px',
            cursor: 'pointer'
        }}
            onClick={() => navigate('/addaddress')}>
            <div style={{
                textAlign: 'center',
                fontSize: '100px'
            }}>
                +
            </div>
            <div style={{
                textAlign: 'center',
                fontSize: '35px',
                color: '#2a2728'
            }}>
                Add Address
            </div>
        </div>
    )
}
export default AddAddressComponent;