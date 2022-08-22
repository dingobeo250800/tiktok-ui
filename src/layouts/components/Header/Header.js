import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import config from '~/config';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisV,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Tiếng 3 Miền',
                        data: [
                            { type: 'tiengViet', code: 'bac', title: 'Miền Bắc' },
                            { type: 'tiengViet', code: 'trung', title: 'Miền Trung' },
                            { type: 'tiengViet', code: 'nam', title: 'Miền Nam' },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header(props) {
    const userCurrent = true;

    //Handle logic
    const handlerMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle changle luaguage
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {userCurrent ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                            <Button primary rounded>
                                {' '}
                                Log out{' '}
                            </Button>
                        </>
                    )}
                    <Menu items={userCurrent ? userMenu : MENU_ITEMS} onChange={handlerMenuChange}>
                        {userCurrent ? (
                            <Image
                                className={cx('user-avatar')}
                                src="Dinhnguyen1"
                                alt="Nguyen Van A"
                                fallback="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-1/66608365_132655637948280_3274509166986657792_n.jpg?stp=cp0_dst-jpg_p40x40&amp;_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=jvFpAkScnIkAX-lPjb6&amp;_nc_ht=scontent.fhan2-2.fna&amp;oh=00_AT-jDzSIcphSUsDl4KTob5AGgVd20U9VO-Pj5zSwUwn_Ew&amp;oe=6304CC9E"
                            />
                        ) : (
                            <button className={cx('more-btn')}> {<FontAwesomeIcon icon={faEllipsisV} />}</button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
