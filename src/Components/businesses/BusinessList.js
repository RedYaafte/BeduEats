import React from 'react';
import BusinessItem from './BusinessItem';
import styles from './BusinessList.module.scss';

const BusinessList = ({ businessCont }) => (
    <div className={styles['business-list']}>
        {businessCont.map( business => <BusinessItem key={business.id} business={business} /> )}
    </div>
)

export default BusinessList;