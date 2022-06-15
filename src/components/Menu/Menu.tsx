import React from 'react';
import clsx from 'clsx';

import './Menu.scss';
import { ClassNameProps } from '../../types';
import {
    ChatIcon,
    ExitIcon,
    HomeIcon,
    MarketIcon,
    SearchIcon,
    SettingsIcon
} from '../icons';
import MenuItem from './MenuItem';

const Menu: React.FC<ClassNameProps> = ({ className }) => {
    return (
        <div className={clsx('menu', className)}>
            <div className="menu__upper">
                <MenuItem>
                    <HomeIcon />
                </MenuItem>
                <MenuItem active={true}>
                    <MarketIcon />
                </MenuItem>
                <MenuItem>
                    <SearchIcon />
                </MenuItem>
            </div>

            <div className="menu__lower">
                <MenuItem>
                    <SettingsIcon />
                </MenuItem>
                <MenuItem>
                    <ChatIcon />
                </MenuItem>
                <MenuItem>
                    <ExitIcon />
                </MenuItem>
            </div>
        </div>
    );
};

export default Menu;
