import React from 'react';
import className from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu from './Menu';
import { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = className.bind(styles);

function Sidebar(props) {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title=" For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title=" Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItem
                    title=" LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            {/* <SuggestedAccounts label="Following accounts" /> */}
        </aside>
    );
}

export default Sidebar;
