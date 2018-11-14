import React from 'react';
import styles from './BusinessItem.module.scss';

const BusinessItem = ({ business }) => {
    return(
        <>
            <div className={styles['business-item']}>
                <img src={business.src} alt=""/>
                <p>{business.name}</p>
                <span>$$ {business.location}</span>
                <div className={styles}>
                    <div>
                        <span><strong>Open time:</strong> { business.openTime }hrs.</span> <br/>
                        <span><strong>Close time:</strong> { business.closeTime }hrs.</span>
                    </div>
                    <div>4.2</div>
                </div>
            </div>
        </>
    )
}

export default BusinessItem;