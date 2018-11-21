import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BusinessItem.module.scss';

const BusinessItem = ({ business }) => {
    return(
        <Link to={`/business/product?businessId=${business.id}`}>
            <div className={styles['business-item']}>
                <div className={styles['business-item-img']}>
                    <img src={business.src} alt={business.name}/>
                </div>
                <p><strong>{business.name}</strong></p>
                <span>$$ {business.location}</span>
                <div className={styles}>
                    <div>
                        <span><strong>Open time:</strong> { business.openTime }hrs.</span> <br/>
                        <span><strong>Close time:</strong> { business.closeTime }hrs.</span>
                    </div>
                    <div>4.5</div>
                </div>
            </div>
        </Link>
    )
}

export default BusinessItem;