import React from 'react';
import { useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';
import './Product.css'


const Product = () => {
    
    const {id} =  useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    
    const dispatch = useDispatch();
    const addProduct = (product) => {
        setProduct(product)
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false)
      };
      getProduct();

    },[id]);
    const Loading = () => {
        
        return (
            <SkeletonTheme/>
        )
    }
    
    const ShowProduct = () => {
        return (
            <div className="container">
                <div className="">
                    <div key={product.id} className="cont row">
                        <div className="col1  col-12 col-lg-6">
                            <img src={product.image} alt={product.title} height="300px" width={300} className="justify-content-center m-3"/>
                        </div>
                        <div className="col2 col-lg-6">
                            <h4 className="text-uppercase text-black-50">
                                {product.category}
                            </h4>
                            <h1 className="display-5">{product.title}</h1>
                            <p className="lead">
                                Rating {product.rating && product.rating.rate}
                                <i className='fa fa-star'> </i>
                            </p>
                            <h3 >
                                ${product.price}
                            </h3>
                            <p>
                                {product.description}
                            </p>
                            <Link to="" className="btn btn-outline-dark px-4 m-2" onClick={()=> addProduct(product)}>
                                Sumar al carrito
                            </Link>
                            <Link to="/cart" className="btn btn-dark ms-2 px-3 m-3">
                                Carrito de compras
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }


    return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading ? <Loading /> : <ShowProduct/>}
            </div>
        </div>
    </div>
  ) 
  
};

export default Product;
