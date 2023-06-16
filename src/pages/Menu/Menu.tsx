import * as React from 'react';
import classNames from "classnames/bind";

import styles from './Menu.module.scss';
import Category from '../../layouts/components/Category/Category';

const cx = classNames.bind(styles)

const Menu: React.FC<any> = () => {

    const categories = [
        {
            'name': 'QUAN DAT SIGNATURE',
        },
        {
            'name': 'MEAT IS GREAT',
        },
        {
            'name': 'SNACK FOR MORE',
        },
        {
            'name': 'HOTPOT, FRIED RICE & NOODLES',
        },
        {
            'name': 'GRILL FOR THRILLS',
        },
        {
            'name': 'GREEN FOR LIFE',
        },
        {
            'name': 'HELL YEAH, SNAIL',
        }
    ]

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <div className={cx('dot')}></div>
                <p className={cx('text-content')}>THỰC ĐƠN</p>
                <div className={cx('dot')}></div>
            </div>

            {/* <Category data={category}/> */}
            {categories !== null ? (
                <>
                    <div className={cx('categories')}>
                        {categories.map((data) => (
                            <Category key={data} data={data} />
                        ))}
                    </div>
                </>
                ) : (
                <></>
                )
            }
        </div>
    )
}

export default Menu;
