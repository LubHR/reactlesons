import React, {FC} from "react";
import styles from './ProductStyle.module.css';

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export type ITypePropsProduct = IProductProps & {children?: React.ReactNode};

const Product:FC<ITypePropsProduct> = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) =>{
    return(
        <div>
            <h3>{id}. {title}</h3>
            <p>{description}</p>
            <h3>{price} hrn,{discountPercentage}</h3>
            <p>{rating}, {stock}</p>
            <h3>{brand},{category},thumbnail</h3>
            <img className={styles.productimg} src={images[0]} alt={title}/>
        </div>
    )
}

export default Product;