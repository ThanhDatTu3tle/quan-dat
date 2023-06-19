import * as React from 'react';
import classNames from "classnames/bind";

import styles from './FoodInfo.module.scss';

const cx = classNames.bind(styles)

const FoodInfo: React.FC<any> = ({ food }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('food-name')}>
                <span style={{color: '#ffba00'}}>{food.stt}.</span><p>{food.name}</p>
            </div>
            <div className={cx('food-price')}>
                <p>{food.price}</p>
            </div>
        </div>
    )
}

export default FoodInfo;
