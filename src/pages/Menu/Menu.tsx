import * as React from 'react';
import classNames from "classnames/bind";

import styles from './Menu.module.scss';
import Category from '../../layouts/components/Category/Category';

const cx = classNames.bind(styles)

const Menu: React.FC<any> = () => {

    const categories = [
        {
            'name': 'QUAN DAT SIGNATURE',
            'foods': [
                {
                    'stt': 1,
                    'name': 'Bò Quan Dat',
                    'price': '215,000vnd'
                },
                {
                    'stt': 2,
                    'name': 'Tôm Sống Quan Dat',
                    'price': '155,000vnd'
                },
                {
                    'stt': 3,
                    'name': 'Dồi Sả Quan Dat',
                    'price': '190,000vnd'
                },
                {
                    'stt': 4,
                    'name': 'Ếch Núp Rơm',
                    'price': '175,000vnd'
                },
                {
                    'stt': 5,
                    'name': 'Bò Quan Dat',
                    'price': '140,000vnd'
                },
                {
                    'stt': 6,
                    'name': 'Cơm Chiên Dưa Bò',
                    'price': '155,000vnd'
                }
            ]
        },
        {
            'name': 'MEAT IS GREAT',
            'foods': [
                
            ]
        },
        {
            'name': 'SNACK FOR MORE',
            'foods': [
                
            ]
        },
        {
            'name': 'HOTPOT, FRIED RICE & NOODLES',
            'foods': [
                
            ]
        },
        {
            'name': 'GRILL FOR THRILLS',
            'foods': [
                
            ]
        },
        {
            'name': 'GREEN FOR LIFE',
            'foods': [
                
            ]
        },
        {
            'name': 'HELL YEAH, SNAIL',
            'foods': [
                
            ]
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
