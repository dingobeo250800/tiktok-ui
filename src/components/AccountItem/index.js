import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/Image';
const cx = classNames.bind(styles);

function AccountItem(props) {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://images.unsplash.com/photo1563365488-1e365499ba88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Natrue"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn Dinh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Dinhnguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
