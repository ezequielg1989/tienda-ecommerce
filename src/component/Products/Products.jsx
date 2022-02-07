import React, { useEffect, useState } from 'react';
import "./Products.css"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    
     
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(response);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();

    }, []);
    const Loading = () => {
        return (
            <div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                    <SkeletonTheme height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                    <SkeletonTheme height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                    <SkeletonTheme height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                    <SkeletonTheme height={350}/>
                </div>
            </div>
        )
    }

    const filterProduct = (category) => {
        console.log("hola");
        console.log(data);
        console.log("hola");
        const filt = data.filter((item) => item.category === category);
        console.log(filt);
        setFilter(filt);
        
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men´s Clothings</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Woman Clothings</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery Clothings</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div>
                            <div className="col-md-3">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-hrefp" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                                        <p className="card-text fw-bolder">{product.price}</p>
                                        <Link to={`/product/${product.id}`} className="btn btn-outline-dark">ADD href cart</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                })}
            </>
        );
    };
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">
                            Latest Product
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="products-list">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    );
}



export default Products;
