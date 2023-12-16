import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthUserQuery } from '../redux/services/auth'
import Layout from '../components/Layout/Layout';

const PrivateRoutes = () => {
    const { data, isLoading, error } = useAuthUserQuery();
    console.log({ data, error });
    const { isAuth } = data || {};
    return (
        !isLoading && (isAuth ? <Layout><Outlet /></Layout> : < Navigate to="/login" />)
    )
}

export default PrivateRoutes