import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../businesses/BusinessItem.module.scss';
import styles2 from '../businesses/BusinessList.module.scss';

const HomeList = ({ home }) => {
    return (
        // <div>{JSON.stringify(home)}</div>
        <div className={styles2['business-list']}>
            {home.map(home => {
                return (
                    <Link key={home.id} to={`/business/product?businessId=${home.id}`}>
                        <div key={home.id} className={styles['business-item']}>
                            <div className={styles['business-item-img']}>
                                <img src={home.src} alt={home.name}/>
                            </div>
                            <p><strong>{home.name}</strong></p>
                            <span>$$ {home.location}</span>
                            <div className={styles}>
                                <div>
                                    <span><strong>Open time:</strong> { home.openTime }hrs.</span> <br/>
                                    <span><strong>Close time:</strong> { home.closeTime }hrs.</span>
                                </div>
                                <div>4.5</div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default HomeList;