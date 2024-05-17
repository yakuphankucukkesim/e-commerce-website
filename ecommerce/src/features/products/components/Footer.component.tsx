import { Box, Divider, Link, Typography } from "@mui/material";
import React from 'react';

const FooterComponent = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#2a2728",
                color: "#fff",
                py: 3,
                px: 2,
                textAlign: "center",
            }}
        >
            <div style={{
                display: 'flex',
                paddingTop: '50px',
                justifyContent: 'space-around'
            }}>
                <div>
                    <Typography variant="body1">
                        <img
                            style={{
                                width: '113px',
                                height: '50px',
                                cursor: 'pointer',
                                filter: 'invert(100%)',
                            }}
                            src='./pngegg2.png'
                            alt='shop logo'
                        />
                    </Typography>
                    <Typography variant="body2" fontWeight={'bold'}>
                        Indulge in excellence, embrace the wine.
                    </Typography>
                </div>
                <div style={{
                    paddingTop: '15px'
                }}>
                    <Typography variant="body1">
                        <div style={{
                            fontWeight: 'bold'
                        }}>
                            Contact us
                        </div>
                    </Typography>
                    <Typography variant="body2">
                        <div>
                            contact@moutoncadet.com
                        </div>
                    </Typography>
                    <Typography variant="body2">
                        <div>
                            +33 6 12 34 56 78
                        </div>
                    </Typography>
                </div>
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
            <div style={{
                display: 'flex',
                paddingTop: '40px',
                justifyContent: 'space-around',
                paddingLeft: '250px',
                paddingRight: '250px',
                gap: '10px'
            }}>
                <div style={{
                    width: '400px',
                    textAlign: 'left',   
                }}>
                    <div>
                        Mouton Cadet is a prestigious French wine brand, representing the rich tradition of Bordeaux. Renowned for its quality, Mouton Cadet offers a range of wines to suit every palate. Particularly celebrated for its red wines, the brand expertly blends varietals such as Cabernet Sauvignon, Merlot, and Cabernet Franc to create balanced and flavorful profiles. With its long-standing expertise, Mouton Cadet is globally recognized as a preferred choice among wine enthusiasts for its commitment to excellence and distinctive offerings.
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        paddingTop: '10px',
                        gap: '9px'
                    }}>
                        <img
                            style={{
                                width: '45px',
                                height: '50px',
                                filter: 'invert(100%)',
                                paddingTop: '10px'
                            }}
                            src='./pngwing.com.png'
                            alt='shop logo'
                        />
                        <img
                            style={{
                                width: '30px',
                                height: '50px',
                                filter: 'invert(100%)',
                                paddingTop: '10px'
                            }}
                            src='./Certified_B_Corporation.png'
                            alt='shop logo'
                        />
                        <div style={{
                            paddingTop: '15px',
                            fontSize: '13px'
                        }}>
                            This company meets high standards of social and environmental impact.
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        marginBottom: '25px'
                    }}>Our wines</div>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Red
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        White
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Rosé
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Sparkling
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Cases
                    </Typography>
                </div>
                <div>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        marginBottom: '25px'
                    }}>Our brand</div>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        About
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Wine tasting
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Blog
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        B Corp
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        from Winemakers
                    </Typography>
                </div>
                <div>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        marginBottom: '25px'
                    }}>Access</div>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        My account
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Points of sale
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Professional access
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Weddings
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Careers
                    </Typography>
                </div>
                <div>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        marginBottom: '25px'
                    }}>Information</div>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        T&Cs
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Privacy policy
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        FAQ
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Shipping
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '20px',
                            cursor: 'pointer',
                            "&:hover": {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        Sitemap
                    </Typography>
                </div>
            </div>
            <div style={{
                display: 'flex',
                paddingTop: '50px',
                justifyContent: 'space-around',
            }}>
                <div style={{
                    fontSize: '12px',
                    paddingTop: '30px'
                }}>
                    © 2024, Mouton Cadet
                </div>
                <div>
                    <img
                        style={{
                            width: '300px',
                            height: '60px',
                            filter: 'invert(100%)',
                        }}
                        src='./creditcardlogo.png'
                        alt='shop logo'
                    />
                </div>
            </div>
        </Box>
    );
};

export default FooterComponent;
