import React from 'react';
import Button from '~/components/Button';
import Portal from '~/components/Portal';

function Following(props) {
    return (
        <div>
            Follow Page
            <Portal containerId="publish-btn">
                <Button primary>Portal</Button>
            </Portal>
        </div>
    );
}

export default Following;
