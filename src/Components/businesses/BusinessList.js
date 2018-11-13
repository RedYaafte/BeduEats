import React from 'react';
import BusinessItem from './BusinessItem';
import styles from './BusinessList.module.scss';

const BusinessList = (props) => (
    <div className={styles['business-list']}>
        <BusinessItem name={props.name} />
    </div>
)

export default BusinessList;