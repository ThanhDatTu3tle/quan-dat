import * as React from 'react';
import { useState } from 'react';
import classNames from "classnames/bind";

import styles from './Category.module.scss';
import FoodInfo from '../../../components/FoodInfo/FoodInfo';

const cx = classNames.bind(styles)

const Category: React.FC<any> = ({ data }) => {

    const [open, setOpen] = useState(false);

    const handleShow = () => {
        setOpen(!open)
    }

    return (
        <div>
        {open === false ? (
                <>
                    <div className={cx('wrapper')} onClick={handleShow}>
                        <div className={cx('close')}>
                            <div className={cx('tab')}></div>
                            <div className={cx('content')}>
                                <p className={cx('text-content')}>
                                    {data.name}
                                </p>
                            </div>
                            <div className={cx('button')}>+</div>
                            <div className={cx('hide')}></div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={cx('wrapper')} onClick={handleShow}>
                        <div className={cx('close')}>
                            <div className={cx('tab')}></div>
                            <div className={cx('content')}>
                                <p className={cx('text-content')}>
                                    {data.name}
                                </p>
                            </div>
                            <div className={cx('button')}>+</div>
                            <div className={cx('hide')}></div>
                        </div>
                        <div className={cx('open')}>
                            <div className={cx('menu-category')}>
                                <div className={cx('title')}>
                                    <h1>{data.name}</h1>
                                </div>
                                {data.foods.map((food: any) => (
                                    <FoodInfo food={food}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        </div>
    )
}

export default Category;
