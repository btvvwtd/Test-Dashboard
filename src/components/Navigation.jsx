import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        'Dashboard',
        'Accounts',
        'Brokers',
        'Submissions',
        'Organizations',
        'Goals & Rules',
        'Admin',
    ];

    const handleClick = (tab) => {
        if (tab === 'Accounts') {
            navigate('/accounts');
        } else if (tab === 'Dashboard') {
            navigate('/');
        } else {
            alert('This button is currently inactive');
        }
    };

    return (
        <nav className="flex gap-4 p-7 mt-20" style={{ marginLeft: '60px' }}>
            {tabs.map((tab) => {
                const isActive = location.pathname === (tab === 'Dashboard' ? '/' : `/${tab.toLowerCase()}`);
                const isDashboardOrAccounts = tab === 'Dashboard' || tab === 'Accounts';

                return (
                    <button
                        key={tab}
                        onClick={() => handleClick(tab)}
                        style={{ width:'145px', height:'50px',borderRadius: '20px',background:'#0C0F17' }}
                        className={`px-7 py-4 rounded-[20px] text-xl  duration-200 ${
                            isActive
                                ? `bg-[${isDashboardOrAccounts ? '#1E40AF' : '#0C0F17'}] text-white`
                                : 'bg-[#0C0F17] text-white hover:bg-[#0C0F17]'
                        }`}
                    >
                        {tab}
                    </button>
                );
            })}
        </nav>
    );
}

export default Navigation;