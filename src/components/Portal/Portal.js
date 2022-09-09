import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Portal({ children, containerId }) {
    // console.log('ReactDOM', ReactDOM);
    const [wrapper, setWrapper] = useState();

    useEffect(() => {
        let portal = document.querySelector(`#${containerId}`);

        if (!portal) {
            portal = document.createElement('div');
            document.body.appendChild(portal);
        }
        setWrapper(portal);
        return () => {
            if (!containerId) {
                document.body.removeChild(portal);
            }
        };
    }, [containerId]);

    if (!wrapper) {
        return null;
    }
    return ReactDOM.createPortal(children, wrapper);
}

export default Portal;
