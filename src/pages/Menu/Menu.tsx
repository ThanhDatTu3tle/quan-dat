import * as React from 'react';
import classNames from "classnames/bind";

import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

const Menu: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <div className={cx('dot')}></div>
                <p className={cx('text-content')}>THỰC ĐƠN</p>
                <div className={cx('dot')}></div>
            </div>
        </div>
    )
}

export default Menu;
