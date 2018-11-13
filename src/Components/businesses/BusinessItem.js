import React from 'react';
import styles from './BusinessItem.module.scss';

const BusinessItem = (props) => {
    return(
        <>
            <div className={styles['business-item']}>
                <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9eb7a97f47b61a9f38ccc09c7f607d01&auto=format&fit=crop&w=500&q=60" alt=""/>
                <p>{props.name}</p>
                <span>$$ México</span>
                <div className={styles}>
                    <div>20-30 min</div>
                    <div>4.2</div>
                </div>
            </div>
            {/* <div className={styles['business-item']}>
                <img src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86c8c1fd5e9e5b384696472a095c42ac&auto=format&fit=crop&w=500&q=60" alt=""/>
                <p>Lorem ipsum dolor sit amet</p>
                <span>$$ México</span>
                <div className={styles}>
                    <div>20-30 min</div>
                    <div>4.2</div>
                </div>
            </div>
            <div className={styles['business-item']}>
                <img src="https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71cdddf5cc615224cf2c26614d20154d&auto=format&fit=crop&w=500&q=60" alt=""/>
                <p>Lorem ipsum dolor sit amet</p>
                <span>$$ México</span>
                <div className={styles}>
                    <div>20-30 min</div>
                    <div>4.2</div>
                </div>
            </div>
            <div className={styles['business-item']}>
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=500&q=60" alt=""/>
                <p>Lorem ipsum dolor sit amet</p>
                <span>$$ México</span>
                <div className={styles}>
                    <div>20-30 min</div>
                    <div>4.2</div>
                </div>
            </div>
            <div className={styles['business-item']}>
                <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9eb7a97f47b61a9f38ccc09c7f607d01&auto=format&fit=crop&w=500&q=60" alt=""/>
                <p>Lorem ipsum dolor sit amet</p>
                <span>$$ México</span>
                <div className={styles}>
                    <div>20-30 min</div>
                    <div>4.2</div>
                </div>
            </div>
            <div className={styles['business-item']}>
                <img src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86c8c1fd5e9e5b384696472a095c42ac&auto=format&fit=crop&w=500&q=60" alt=""/>
                <p>Lorem ipsum dolor sit amet</p>
                <span>$$ México</span>
                <div className={styles}>
                    <div>20-30 min</div>
                    <div>4.2</div>
                </div>
            </div>
            <div className={styles['business-item']}>
                <img src="https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71cdddf5cc615224cf2c26614d20154d&auto=format&fit=crop&w=500&q=60" alt=""/>
                <p>Lorem ipsum dolor sit amet</p>
                <span>$$ México</span>
                <div className={styles}>
                    <div>20-30 min</div>
                    <div>4.2</div>
                </div>
            </div>
            <div className={styles['business-item']}>
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=500&q=60" alt=""/>
                <p>Lorem ipsum dolor sit amet</p>
                <span>$$ México</span>
                <div className={styles}>
                    <div>20-30 min</div>
                    <div>4.2</div>
                </div>
            </div> */}
        </>
    )
}

export default BusinessItem;