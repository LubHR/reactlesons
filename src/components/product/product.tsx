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
        <div className={styles.divv}>
            <h3 >{id}. {title}</h3>
            <p>Опис - {description}</p>
            <h3>{price} hrn,{discountPercentage}</h3>
            <p>Raiting-{rating}, {stock}</p>
            <h3>Brand-{brand},Category-{category}</h3>
            <a href={thumbnail}>Link</a>
            <ul className={styles.productimg}>
                {
                images.map((image,index) => <img className={styles.image} key={index} src={image}/>)
                }
            </ul>
        </div>
    )
}

export default Product;