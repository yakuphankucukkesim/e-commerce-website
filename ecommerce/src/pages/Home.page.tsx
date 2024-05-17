import React, { useEffect, useState } from 'react';
import { Button, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks';
import { getCategories } from '../features/products/categorySlice';
import { getProducts } from '../features/products/productSlice';
import HeaderComponent from '../features/products/components/Header.component';
import ProductComponent from '../features/products/components/Product.component';
import FooterComponent from '../features/products/components/Footer.component';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 3;

  const { products } = useAppSelector((state) => state.product);
  const { categories } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory((prevSelectedCategory) =>
      prevSelectedCategory === categoryId ? null : categoryId
    );
    setCurrentPage(1);
  };

  const filteredProducts = products.filter(
    (product) => !selectedCategory || product.categories.includes(selectedCategory)
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const renderProducts = currentProducts.map((product) => (
    <ProductComponent key={product._id} product={product} />
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.length > 1 && pageNumbers.map((number) => (
    <Button
      key={number}
      sx={{
        margin: '0 5px',
        padding: '5px',
        backgroundColor: currentPage === number ? '#2a2728' : 'transparent',
        color: currentPage === number ? 'white' : '#2a2728',
        '&:hover': { backgroundColor: currentPage === number ? '#2a2728' : '#c0c0c0', color: '#fff' }
      }}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </Button>
  ));

  return (
    <div>
      <HeaderComponent />
      <div style={{ paddingBottom: '100px' }}>
        <div style={{ position: 'relative' }}>
          <img style={{ width: '100%', maxWidth: '100%' }} src="./wines.jpg" alt="wine" />
          <div style={{ position: 'absolute', top: '30%', left: '2%', color: 'white', fontSize: '80px', fontWeight: 'bold', textAlign: 'left', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)' }}>
            Organic wines
          </div>
          <div style={{ position: 'absolute', top: '57%', left: '2%', color: 'white', fontSize: '30px', fontWeight: 'bold', textAlign: 'left', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)' }}>
            Unlock the essence of elegance with Mouton Cadet
          </div>
          <div style={{ position: 'absolute', top: '70%', left: '2%', color: 'white', fontSize: '30px', fontWeight: 'bold', textAlign: 'left' }}>
            <Button
              sx={{
                bgcolor: '#2a2728',
                color: 'white',
                '&:hover': {
                  bgcolor: '#c0c0c0',
                },
                fontSize: '14px',
                fontWeight: 'bold',
                width: '200px'
              }}
              size='large'
              onClick={() => navigate('/collections')}
            >
              Discover our wines
            </Button>
          </div>
        </div>
        <div style={{ padding: '0 20px' }}>
          <div style={{ marginTop: '16px', fontSize: '2.5vw', fontWeight: 'bold', color: '#2a2728', textAlign: 'left', paddingLeft: '35px' }}>
            Certified organic wines
          </div>
          <div style={{ display: 'flex', gap: '20px', paddingTop: '10px', fontWeight: 'bold', fontSize: '1rem', color: 'rgba(42, 39, 40, 0.6)', justifyContent: 'left', paddingLeft: '35px' }}>
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category._id)}
                style={{
                  cursor: 'pointer',
                  color: category._id === selectedCategory ? 'black' : index === hoverIndex ? 'black' : 'rgba(42, 39, 40, 0.6)',
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {category.name}
              </div>
            ))}
          </div>
          <div style={{ paddingTop: '10px', width: '95%', paddingLeft: '35px' }}>
            <Divider />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', marginTop: '35px' }}>
            {renderProducts}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            {renderPageNumbers}
          </div>
        </div>
        <div style={{ padding: '0 20px', marginTop: '100px' }}>
          <Divider />
        </div>
        <div style={{ padding: '0 20px', marginTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <div style={{ maxWidth: '600px', textAlign: 'left' }}>
            <div style={{ fontSize: '2.5vw', fontWeight: 'bold', color: '#2a2728' }}>
              Wines that do good and taste good
            </div>
            <div style={{ paddingTop: '10px', color: 'rgba(42, 39, 40, 0.8)' }}>
              At Mouton Cadet, we produce wines hand-in-hand with certified organic winemakers who care about making wines that do good and taste good.
            </div>
            <div style={{ paddingTop: '10px', color: 'rgba(42, 39, 40, 0.8)' }}>
              We're on a mission to bring about transformation by making agriculture, consumerism and business a force for good. Our wines are organic, vegan and pesticide-free.
            </div>
          </div>
          <img style={{ maxWidth: '600px', marginLeft: '20px' }} src="./drinkingwine.jpg" alt="wine" />
        </div>
        <div style={{ padding: '0 20px', marginTop: '100px' }}>
          <Divider />
        </div>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginTop: '100px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', backgroundColor: 'white', width: '270px', padding: '20px', borderRadius: '3px' }}>
            <img style={{ height: '100px' }} src="./glass-and-bottle-of-wine.png" alt="wine" />
            <div>
              <div style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '20px' }}>Organic wines</div>
              <div style={{ marginTop: '5px', textAlign: 'center', fontSize: '13px' }}>
                Our wines are pesticide-free and produced hand-in-hand with Mouton Cadet winemakers across France
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: 'white', width: '270px', padding: '20px', borderRadius: '3px' }}>
            <img style={{ height: '100px' }} src="./thumbs-up.png" alt="wine" />
            <div>
              <div style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '20px' }}>Customer service</div>
              <div style={{ marginTop: '5px', textAlign: 'center', fontSize: '13px' }}>
                You can chat to us live online or drop us an email on contact@moutoncadet.com
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: 'white', width: '270px', padding: '20px', borderRadius: '3px' }}>
            <img style={{ height: '100px' }} src="./cargo-truck.png" alt="wine" />
            <div>
              <div style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '20px' }}>Fast delivery</div>
              <div style={{ marginTop: '5px', textAlign: 'center', fontSize: '13px' }}>
                We deliver within 48 hours in mainland France, either to your home or a collection point
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
