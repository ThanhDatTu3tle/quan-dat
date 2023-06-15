import config from "../../../../config";
import classNames from "classnames/bind";

import styles from './MenuTitles.module.scss';
import Titles, { TitleItem } from '../MenuTitles/Menu';

const cx = classNames.bind(styles)

const MenuTitles: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <Titles>
                <TitleItem title='Thực đơn' to={config.routes.menu} />
                <TitleItem title='Địa điểm' to={config.routes.location} />
                <TitleItem title='Đặt bàn' to={config.routes.booking} />
                <TitleItem title='Tin tức' to={config.routes.news} />
                <TitleItem title='Tuyển dụng' to={config.routes.recruit} />
                <TitleItem title='Giao hàng tận nơi' to={config.routes.delivery} />
            </Titles>
        </div>
    )
}

export default MenuTitles;
