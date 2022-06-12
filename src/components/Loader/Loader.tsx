import React from 'react';

import './Loader.scss';
import { RotationIcon } from '../icons';

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <RotationIcon />
            <div className="loader__label"></div>
        </div>
    );
};

export default Loader;
