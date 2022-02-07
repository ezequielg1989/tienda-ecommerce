import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Product = () => {
    
    const {id} =  useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);  
    
    useEffect(() => {
      const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        console.log(response);
        setLoading(false)
      };
      getProduct();
    }, []);
    
    const Loading = () => {
        return (
            "loading..."
        )
    }
    
    const ShowProduct = () => {
        return (
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width={400}/>
            </div>
        )
    }


    return (
    <div>
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowProduct/>}
            </div>
        </div>
    </div>
  ) 
  
};

export default Product;
