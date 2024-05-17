import { FC } from "react";
import { AddressDocument } from "../models/Address";
import { Divider } from "@mui/material";

interface AddressComponentProps {
    address: AddressDocument;
}

const AddressComponent: FC<AddressComponentProps> = ({ address }) => {
    return (
        <div style={{
            textAlign: 'left',
            width: '300px',
            height: '250px',
            border: '1px solid rgba(42, 39, 40, 0.6)',
            borderRadius: '10px',
        }}>
            <div style={{
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold'
            }}>{address.title}</div>
            <div style={{ color: 'rgba(42, 39, 40, 0.6)' }} >
                <Divider />
            </div>
            <div style={{
                margin: '10px',
                fontSize: '14px'
            }}>
                <div style={{
                    fontWeight: 'bold',
                    fontSize: '16px'
                }}>{address.firstName} {address.lastName}</div>
                <div>{address.address}, {address.state}</div>
                <div>{address.city}, {address.zipCode}</div>
                <div>{address.country}</div>
                <div>Phone Number: {address.phoneNumber}</div>
            </div>
        </div>
    )
}
export default AddressComponent;