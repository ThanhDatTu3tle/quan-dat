/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Header.module.scss';
import config from '../../../config';
import Titles from './MenuTitles/MenuTitles';

const cx = classNames.bind(styles)

const Header: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    {/* <Link to={config.routes.home}> */}
                        <div className={cx('logo-background')}>
                            <p className={cx('logo-text')}>QUAN DAT</p>
                        </div>
                    {/* </Link> */}
                </div>
                <div className={cx('titles')}>
                    <Titles />
                </div>
                <div className={cx('languages')}>
                    <div className={cx('en')}>
                        EN
                    </div>
                    |
                    <div className={cx('vi')}>
                        <b>VI</b>
                    </div>
                </div>
                <div className={cx('phone-number')}>
                    <img className={cx('icons')} src='https://warningzone.com/wp-content/themes/oceanwp-child-theme-master/assets/images/phone-call.svg'/>
                    <p>1900 6096</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
