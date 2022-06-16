import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

import { RootState } from './index';
import { apiSlice } from './apiSlice';

interface AuthState {
    loading: boolean;
    error: string;
    login: string;
    token: string;
}

const initialState: AuthState = {
    loading: false,
    error: '',
    login: '',
    token: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state, action: PayloadAction<string>) {
            state.login = action.payload;
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(apiSlice.endpoints.getToken.matchPending, state => {
                state.loading = true;
            })
            .addMatcher(apiSlice.endpoints.getToken.matchRejected, state => {
                state.loading = false;
                state.error = 'Ошибка соединения с API. Попробуйте позже.';
            })
            .addMatcher<FetchBaseQueryMeta>(
                apiSlice.endpoints.getToken.matchFulfilled,
                (state, { meta }) => {
                    const headers = meta.baseQueryMeta.response.headers;
                    const authorizationHeader = headers.get('authorization');

                    if (authorizationHeader) {
                        state.token = authorizationHeader.replace(
                            /bearer /i,
                            ''
                        );
                    } else {
                        state.error = 'Ошибка получения токена с сервера';
                    }
                    state.loading = false;
                }
            );
    }
});

export const { setLogin, setToken } = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => state.auth;

export default authSlice.reducer;
