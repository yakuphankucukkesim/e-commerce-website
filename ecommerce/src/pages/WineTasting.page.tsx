import { Divider } from "@mui/material";
import FooterComponent from "../features/products/components/Footer.component";
import HeaderComponent from "../features/products/components/Header.component";

const WineTastingPage = () => {
    return (
        <div>
            <HeaderComponent />
            <div style={{
                paddingBottom: '100px',
                paddingTop: '50px'
            }}>
                <div style={{ marginTop: '16px', fontSize: '50px', fontWeight: 'bold', color: '#2a2728', textAlign: 'center' }}>
                    Wine Tasting
                </div>
                <div style={{
                    width: '700px',
                    paddingTop: '10px',
                    paddingLeft: '600px'
                }}>
                    <Divider>
                    </Divider>
                </div>
                <div style={{ textAlign: 'center', paddingLeft: '600px', paddingRight: '600px', paddingTop: '15px' }}>
                    From swirling and sniffing to recognising the distinct characteristics imparted from our vineyards, our knowledgeable Cellar Door staff will take you through the finer points of wine tasting.

                    We offer various tasting options featuring our full range of wines.

                    Open: 10am to 5pm daily.
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}
export default WineTastingPage;