import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileComponent = ({ part, onClick }: { part: any; onClick: () => void }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/${part.path}`);
    };

    return (
        <Card sx={{ width: 300, minWidth: 300, height: '150px', cursor: 'pointer', textAlign: 'center' }} onClick={onClick || handleNavigate} >
            <CardContent sx={{
                paddingTop: '30px'
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    {part.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {part.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProfileComponent;
