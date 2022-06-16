import React from 'react';
import { useSelector } from 'react-redux';

import './sass/global.scss';
import OrganizationPage from './pages/OrganizationPage';
import { selectAuth } from './store/authSlice';
import AuthPage from './pages/AuthPage';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const App: React.FC = () => {
    const { loading, error, token } = useSelector(selectAuth);

    if (loading) {
        return <Loader />;
    } else if (error) {
        return <ErrorMessage error={error} />;
    } else if (!token) {
        return <AuthPage />;
    }

    return <OrganizationPage />;
};

export default App;
