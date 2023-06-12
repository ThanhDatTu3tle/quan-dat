import config from "../../../../config";
import classNames from "classnames/bind";

import styles from './MenuTitles.module.scss';
import Titles, { TitleItem } from '../MenuTitles/Menu';

const cx = classNames.bind(styles)

const MenuTitles: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <Titles>
                <TitleItem title='Thực đơn' to={config.routes.menu} icon={null}  />
                <TitleItem title='Địa điểm' to={config.routes.location} icon={null}  />
                <TitleItem title='Đặt bàn' to={config.routes.booking} icon={null}  />
                <TitleItem title='Tin tức' to={config.routes.news} icon={null}  />
                <TitleItem title='Tuyển dụng' to={config.routes.recruit} icon={null}  />
                <TitleItem title='Giao hàng tận nơi' to={config.routes.delivery} icon={null}  />
            </Titles>
        </div>
    )
}

export default MenuTitles;
