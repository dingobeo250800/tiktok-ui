import React from 'react';
import className from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = className.bind(styles);

function Sidebar(props) {
    return <aside className={cx('wrapper')}>sidebar</aside>;
}

export default Sidebar;
