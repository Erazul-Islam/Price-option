import { useLoaderData } from "react-router-dom";

const Product = () => {

    const Products = useLoaderData()
    console.log(Products)


    return (
        <div>
            
        </div>
    );
};

export default Product;