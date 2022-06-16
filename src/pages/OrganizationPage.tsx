import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './OrganizationPage.scss';
import Menu from '../components/Menu';
import Aside from '../components/Aside';
import { Organization } from '../containers';
import { selectCompanyId, setCompanyId } from '../store/organizationSlice';
import { defaultCompanyId } from '../constants';
import OrganizationsList from '../components/OrganizationsList';

const OrganizationPage: React.FC = () => {
    const companyId = useSelector(selectCompanyId);

    const dispatch = useDispatch();

    useEffect(() => {
        //simulate page choosing
        dispatch(setCompanyId(defaultCompanyId));
    }, [dispatch]);

    return (
        <div className="container">
            <Menu className="container__menu" />
            <Aside className="container__aside" />
            <div className="container__main">
                {companyId ? (
                    <Organization companyId={companyId} />
                ) : (
                    <OrganizationsList />
                )}
            </div>
        </div>
    );
};

export default OrganizationPage;
