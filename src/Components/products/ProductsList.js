import React from 'react';
import styles from '../businesses/BusinessItem.module.scss';
import styles2 from '../businesses/BusinessList.module.scss';

const ProductsList = ({ products }) => {
    return (
        // <div>{JSON.stringify(products)}</div>
        <div className={styles2['business-list']}>
            {products.map(products => {
                return (
                    <div key={products.id} className={styles['business-item']}>
                        <div className={styles['business-item-img']}>
                            <img src={products.src} alt={products.name}/>
                        </div>
                        <p><strong>{products.name}</strong></p>
                        <p>{products.description}</p>
                        <span><strong>Price: </strong>${products.price}</span>
                        <div className={styles}>
                            <div>4.2</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsList;