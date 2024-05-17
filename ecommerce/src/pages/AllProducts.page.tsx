import { useEffect, useState } from "react";
import HeaderComponent from "../features/products/components/Header.component";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";
import { getProducts } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";
import AllProductComponent from "../features/products/components/AllProducts.component";
import FooterComponent from "../features/products/components/Footer.component";

const AllProducts = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { products } = useAppSelector((state) => state.product);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => (
        <button
            key={number}
            style={{
                margin: '0 5px',
                padding: '5px',
                backgroundColor: currentPage === number ? '#2a2728' : 'transparent',
                color: currentPage === number ? 'white' : '#2a2728',
                border: 'none',
                cursor: 'pointer',
            }}
            onClick={() => setCurrentPage(number)}
        >
            {number}
        </button>
    ));

    return (
        <div>
            <HeaderComponent />
            <div style={{
                paddingLeft: '250px',
                paddingBottom: '100px',
                paddingTop: '50px'
            }}>
                <div style={{
                    fontSize: '70px',
                    fontWeight: 'bold',
                    color: '#2a2728'
                }}>
                    All products
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '10px',
                }}>
                    <div style={{
                        fontSize: '17px',
                        color: 'rgba(42, 39, 40, 0.6)',
                        paddingRight: '530px'
                    }}>
                        Discover the world of Mouton Cadet wines and order online.
                    </div>
                    <div style={{
                        textAlign: 'right',
                        marginRight: '200px',
                        color: 'rgba(42, 39, 40, 0.6)',
                    }}>
                        {products.length} products
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '48px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: '48px'
                }}>
                    {currentProducts.map((product) => (
                        <AllProductComponent key={product._id} product={product} />
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', paddingRight: '150px', paddingTop: '15px' }}>
                    {renderPageNumbers}
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}
export default AllProducts;
