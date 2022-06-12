import React from 'react';

import './sass/global.scss';
import './App.scss';
import Menu from './components/Menu';
import Aside from './components/Aside';
import Main from './components/Main';

const App: React.FC = () => {
    return (
        <div className="container">
            <Menu className="container__menu" />
            <Aside className="container__aside" />
            <Main className="container__main" />
        </div>
    );
};

export default App;
