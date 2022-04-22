import React, { useEffect, useState } from 'react';
import './Products.css'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [componentMounted, setComponentMounted] = useState(false)

     
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                
            }
            
            setComponentMounted(true)
        }
        getProducts();
    }, [componentMounted]);
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
    //filtro la data por categoria
    const filterProduct = (category) => {
        const filt = data.filter((item) => item.category === category);
        setFilter(filt);
        
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="container">
                    <div className="">
                        <div className="buttons  justify-content-center mb-5 pb-5 row">
                            <button className="btn btn-outline-dark m-2 col col-3 col-sm" onClick={()=>setFilter(data)}>All</button>
                            <button className="btn btn-outline-dark m-2 col col-3 col-sm" onClick={()=>filterProduct("men's clothing")}>Men`s Clothings</button>
                            <button className="btn btn-outline-dark m-2 col col-3 col-sm" onClick={()=>filterProduct("women's clothing")}>Woman Clothings</button>
                            <button className="btn btn-outline-dark m-2 col col-4 col-sm" onClick={()=>filterProduct("jewelery")}>Jewelery Clothings</button>
                            <button className="btn btn-outline-dark m-2 col col-4 col-sm" onClick={()=>filterProduct("electronics")}>Electronics</button>
                        </div>
                    </div>
                </div>
                <div className='cardd-total'>
                {filter.map((product) => {
                    return (
                        <div className='card' key={product.id}>
                            <div className="card-ind" >
                                
                                    <img src={product.image} className="" alt={product.title} />
                                    <div >
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                                        <p className="card-text fw-bolder">{product.price}</p>
                                        <Link to={`/product/${product.id}`} className="btn btn-outline-dark m-3">Detalle del producto</Link>
                                    </div>
                            
                            </div>

                        </div>

                    )
                })}
                </div>
                
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
                <div className="products-list row">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    );
}



export default Products;
