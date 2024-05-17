import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { AppBar, Badge, Box, Button, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { logout, selectedUser } from "../../auth/authSlice";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const { user } = useAppSelector(selectedUser);
  const { cart } = useAppSelector((state) => state.product);

  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(() => totalQty);
  }, [cart]);

  const logoutHandler = () => {
    dispatch(logout());
  }

  const handleSearchToggle = () => {
    setSearchOpen(prevState => !prevState);
  }

  const handleSearch = () => {
    // Arama işlemi
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' sx={{ backgroundColor: '#000000', height: '30px', top: 0 }}>
        <Toolbar onClick={() => navigate('/collections')} sx={{ justifyContent: 'center', alignItems: 'flex-start', cursor: 'pointer' }}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '15px',
              lineHeight: '30px',
            }}
          >
            Free delivery over €50! &#x1F377; &#128230; &#8594;
          </Typography>
        </Toolbar>
      </AppBar>

      <AppBar position='sticky' sx={{ backgroundColor: '#f8f4e9', color: 'white', padding: '4px', top: 30 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img
            onClick={() => navigate('/')}
            style={{
              width: '113px',
              height: '50px',
              paddingLeft: '30px',
              cursor: 'pointer',
            }}
            src='./pngegg2.png'
            alt='shop logo'
          />

          <div style={{
            display: 'flex',
            gap: '40px',
            paddingLeft: '40px'
          }}>
            <Button
              onClick={() => navigate('/')}
              sx={{
                fontWeight: 'bold',
                color: '#2a2728',
              }}
            >
              <Badge color='primary'>
                Home
              </Badge>
            </Button>

            <Button
              onClick={() => navigate('/collections')}
              sx={{
                fontWeight: 'bold',
                color: '#2a2728',
              }}
            >
              <Badge color='primary'>
                Wines
              </Badge>
            </Button>

            <Button
              onClick={() => navigate('/about')}
              sx={{
                fontWeight: 'bold',
                color: '#2a2728',
              }}
            >
              <Badge color='primary'>
                About
              </Badge>
            </Button>

            <Button
              onClick={() => navigate('/faq')}
              sx={{
                fontWeight: 'bold',
                color: '#2a2728',
              }}
            >
              <Badge color='primary'>
                FAQ
              </Badge>
            </Button>
          </div>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f8f4e9',
            borderRadius: '4px',
            width: '25%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(42, 39, 40, 0.6)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(42, 39, 40, 0.6)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgba(42, 39, 40, 0.6)',
              },
            },
          }}>
            {searchOpen && (
              <TextField
                fullWidth
                label="Search wine inventory"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleSearch} edge="end" sx={{ color: 'rgba(42, 39, 40, 0.6)' }} >
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            )}
          </Box>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              onClick={() => navigate('/tasting')}
              sx={{
                color: 'rgba(42, 39, 40, 0.6)',
                fontWeight: 'bold',
                fontFamily: 'sans-serif'
              }}
            >
              <Badge color='primary'>
                Wine tasting
              </Badge>
            </Button>

            <div>
              <Button
                onClick={handleSearchToggle}
                sx={{
                  cursor: 'pointer'
                }}>
                <SearchIcon fontSize="medium" sx={{ color: 'rgba(42, 39, 40, 0.6)' }} />
              </Button>
            </div>

            <div>
              <Button sx={{
                cursor: 'pointer',
              }}
                onClick={() => navigate('/user')}>
                <Badge color='primary'>
                  <PersonOutlinedIcon fontSize='medium' sx={{ color: 'rgba(42, 39, 40, 0.6)' }} />
                </Badge>
              </Button>
            </div>

            <Button
              onClick={() => navigate('/favorites')}
              sx={{
                color: 'white'
              }}
            >

              <Badge color='primary'>
                <FavoriteBorderOutlinedIcon fontSize='medium' sx={{ color: 'rgba(42, 39, 40, 0.6)' }} />
              </Badge>
            </Button>

            <Button
              onClick={() => navigate('/cart')}
              sx={{
                color: 'white',
              }}
            >
              <Badge
                badgeContent={cartCount}
                color='default'
                overlap="rectangular"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#000',
                    color: '#fff',
                  },
                }}
              >
                <ShoppingCartOutlinedIcon fontSize='medium' sx={{ color: 'rgba(42, 39, 40, 0.6)' }} />
              </Badge>
            </Button>
            <Button
              onClick={logoutHandler}
              sx={{
                color: 'rgba(42, 39, 40, 0.6)',
                fontWeight: 'bold',
                fontFamily: 'sans-serif'
              }}
            >
              <Badge color='primary'>
                Sign Out
              </Badge>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
