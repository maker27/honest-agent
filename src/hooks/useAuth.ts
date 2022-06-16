import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuth, setToken } from '../store/authSlice';
import useLocalStorage from './useLocalStorage';

interface UseAuthResult {
    loading: boolean;
    error: string;
    token: string;
}

const useAuth = (): UseAuthResult => {
    const { loading, error, token } = useSelector(selectAuth);

    const [savedToken, saveToken] = useLocalStorage<string>('token', '');

    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            if (token !== savedToken) saveToken(token);
        } else {
            if (savedToken) dispatch(setToken(savedToken));
        }
    }, [token, saveToken, savedToken, dispatch]);

    return {
        loading,
        error,
        token
    };
};

export default useAuth;
