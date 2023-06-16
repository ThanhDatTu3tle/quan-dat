import * as React from 'react';
import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './Category.module.scss';

const cx = classNames.bind(styles)

const Category: React.FC<any> = ({ data }) => {

    // const [open, setOpen] = useState();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab')}></div>
            <div className={cx('content')}>
                <p className={cx('text-content')}>
                    {data.name}
                </p>
            </div>
            <div className={cx('button')}>+</div>
            <div className={cx('hide')}></div>
        </div>
    )
}

export default Category;
