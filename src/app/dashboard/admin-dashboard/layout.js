import DashboardSidenav from '@/components/Dashboard-Sidenav/dashboardSidenav';
import React from 'react';

const AdimnDashboardLayout = ({children}) => {
    return (
        <section className='flex justify-between items-start'>
            <DashboardSidenav />
            <div className='w-full h-full'>

            {children}
            </div>
        </section>
    );
};

export default AdimnDashboardLayout;