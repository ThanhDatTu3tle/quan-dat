import classNames from "classnames/bind";

import styles from './Footer.module.scss';
import { Link } from "react-router-dom";
import config from "../../../config";
import { colors } from "@mui/material";

const cx = classNames.bind(styles)

const Footer: React.FC = () => {
    return (
        <div className={cx('wrapper')}> 
            <div className={cx('container')}>
                <div className={cx('subscribe-form')}>
                    <div className={cx('logo')}>
                        {/* <Link to={config.routes.home}> */}
                            <div className={cx('logo-background')}>
                                <p className={cx('logo-text')}>QUAN DAT</p>
                            </div>
                        {/* </Link> */}
                    </div>
                    <br />
                    <p>CÔNG TY CỔ PHẦN QUAN DAT</p>
                    <br />
                    <p>Địa chỉ: 72 Lý Tự Trọng, Q.1, TP HCM</p>
                    <br />
                    <p>Mail: Office@quandat.com</p>
                    <br />
                    <p>Hotline: 1900 6096</p>
                </div>
                <div className={cx('right-content')}>
                    <div className={cx('more-info')}>
                        <h3>Giấy chứng nhận CSĐĐKATTP</h3>
                        <br />
                        <p>
                            Số 1540/2020/ATTP-CNĐK do Ban Quản lý An toàn 
                            thực phẩm thành phố Hồ Chí Minh cấp ngày 
                            05/05/2020
                        </p>
                        <br />
                        <h3>Giấy chứng nhận ĐKKD</h3>
                        <br />
                        <p>Số 0315952588 do Sở Kế Hoạch và Đầu tư cấp ngày 09/10/2019</p>
                    </div>
                    <div className={cx('support')}> 
                        <h5 style={{color: '#ffba00'}}>ĐĂNG KÝ NHẬN TIN</h5>
                        <br />
                        Đăng ký nhận tin tức và ưu đãi mới nhất từ Warning Zone.
                        <form className={cx('subscribe-form')}>
                            <input type="hidden" />
                            <label>Email</label>
                            <i className="fas fa-angle-right"></i>
                        </form>
                    </div>
                </div>
            </div>

            <div className={cx('copyright')}>
                <div className={cx('copyright-container')}>
                    © 2022 QUAN DAT All Rights Reserved Site by LDCC
                    <div className={cx('icons')}>
                        <div className={cx('icon')}>
                            <a href="#">
                                <img style={{width: '30px'}} src="https://i.imgur.com/Ta82OHv.png"/>
                            </a>
                        </div>
                        <div className={cx('icon')}>
                            <a href="#">
                                <img style={{width: '30px'}} src="https://i.imgur.com/tTwBbCa.png"/>
                            </a>
                        </div>
                        <div className={cx('icon')}>
                            <a href="#">
                                <img style={{width: '30px'}} src="https://i.imgur.com/5R3L3cp.png"/>
                            </a>
                        </div>
                        <div className={cx('icon')}>
                            <a href="#">
                                <img style={{width: '30px'}} src="https://i.imgur.com/3uXwMQ6.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
