import { Divider } from "@mui/material";
import FooterComponent from "../features/products/components/Footer.component";
import HeaderComponent from "../features/products/components/Header.component";

const AboutPage = () => {
    return (
        <div>
            <HeaderComponent />
            <div style={{
                paddingBottom: '100px',
                paddingTop: '50px'
            }}>
                <div style={{ marginTop: '16px', fontSize: '50px', fontWeight: 'bold', color: '#2a2728', textAlign: 'center' }}>
                    About Mouton Cadet
                </div>
                <div style={{
                    width: '700px',
                    paddingTop: '10px',
                    paddingLeft: '600px'
                }}>
                    <Divider>
                    </Divider>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '600px', paddingRight: '600px', paddingTop: '15px' }}>
                    <b>Welcome to Mouton Cadet,</b> where tradition meets innovation in every bottle.
                    Since our inception, we've been dedicated to crafting exceptional wines that embody the essence of Bordeaux, France's renowned wine region.<br /><br />
                    Mouton Cadet is not just a wine; it's a legacy of expertise passed down through generations of winemakers.

                    Our story begins with a vision to create wines that capture the terroir of Bordeaux while pushing the boundaries of taste and quality.<br /><br />
                    Each vineyard is carefully selected to ensure that only the finest grapes find their way into our blends.
                    From the sun-drenched slopes of Saint-Émilion to the gravelly soils of Pauillac, every bottle of Mouton Cadet reflects the unique characteristics of its origins.<br /> <br />

                    At Mouton Cadet, we believe that great wine is made in the vineyard.
                    That's why we work hand in hand with our partner growers to cultivate grapes of the highest caliber.
                    Our winemaking team combines traditional techniques with modern innovation to produce wines that are both timeless and contemporary.<br /><br />

                    From our classic Bordeaux Rouge to our crisp Bordeaux Blanc, each wine in the Mouton Cadet range is a testament to our unwavering commitment to quality.
                    Whether you're savoring a glass with dinner or celebrating a special occasion, Mouton Cadet is the perfect choice for any moment.<br /><br />

                    Join us on a journey through the vineyards of Bordeaux and experience the magic of Mouton Cadet for yourself.
                    Cheers to tradition, innovation, and the timeless art of winemaking.
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}
export default AboutPage;