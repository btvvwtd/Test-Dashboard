import React, { useState } from 'react';
import accountsData from '../data/accounts.json'; // ⚠️ адаптуй шлях

function MyAccounts() {
    const [searchTerm, setSearchTerm] = useState('');

    const accounts = accountsData.filter(
        (account) =>
            account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            account.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status) =>
        status === 'Active' ? 'bg-green-500' : 'bg-blue-500';

    const getAppetiteBadge = () => 'bg-[#1e40af]';

    const getLossRatioClass = (lossRatio) => {
        const num = parseFloat(lossRatio);
        if (num <= 33) return { backgroundColor: '#3bb979' };
        if (num <= 50) return { backgroundColor: '#fdd261' };
        return { backgroundColor: '#b93b3b' };
    };

    const getStarsCount = (winnability) => {
        switch (winnability.toLowerCase()) {
            case 'very strong':
                return 5;
            case 'strong':
                return 4;
            case 'medium':
                return 3;
            default:
                return 0;
        }
    };

    return (
        <div
            className="w-[1680px] bg-[#1e2233] p-5 rounded-[20px] text-white font-inter max-w-full overflow-x-auto ml-[85px]"
            style={{ height: '390px' }}
        >
            {/* верхній блок з пошуком і кнопками */}
            <div className="flex flex-row items-center gap-2">
                <h2 className="text-xl font-semibold m-0 mr-2">My accounts</h2>
                <input
                    style={{ borderRadius: '20px', width: '250px' }}
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-2 py-1 bg-[#161b29] text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {['Filter', 'Sort', 'Group'].map((label) => (
                    <span
                        key={label}
                        className="text-[#3b82f6] text-sm font-medium text-center w-[100px] h-[28px] flex items-center justify-center rounded-[20px]"
                        style={{ border: '2px solid #3b82f6', background: '#1e2233' }}
                    >
                        {label}
                    </span>
                ))}
                <button
                    className="text-[#fff] text-sm font-medium text-center w-[100px] h-[28px] flex items-center justify-center"
                    style={{ borderRadius:'20px',border: '2px solid #3b82f6', background: '#3b82f6', appearance: 'none' }}
                >
                    + New
                </button>
            </div>

            {/* таблиця */}
            <div className="mt-5 flex flex-col overflow-y-auto" style={{ maxHeight: '300px' }}>
                <div className="grid grid-cols-[2fr_1.5fr_1.5fr_1.2fr_1fr_1fr_1fr_1fr_1fr_0.8fr_1.5fr] py-3 border-b border-[#1e2233] text-[#aab0c0] font-semibold text-xs bg-[#252a3d]">
                    <div className="pl-[5px]">ACCOUNT NAME/TYPE</div>
                    <div className="pl-[5px]">LINE</div>
                    <div className="pl-[5px]">BROKER</div>
                    <div className="pl-[5px]">RENEWAL DATE</div>
                    <div className="pl-[5px]">PREMIUM</div>
                    <div className="pl-[5px]">RATED PREMIUM</div>
                    <div className="pl-[5px] text-center">LOSS RATIO</div>
                    <div className="pl-[5px] text-center">APPETITE</div>
                    <div className="pl-[5px]">STATUS</div>
                    <div className="pl-[5px]">TRIAGE</div>
                    <div className="pl-[5px] text-center">WINNABILITY</div>
                </div>

                {accounts.map((account, idx) => (
                    <div
                        key={idx}
                        className={`grid grid-cols-[2fr_1.5fr_1.5fr_1.2fr_1fr_1fr_1fr_1fr_1fr_0.8fr_1.5fr] py-3 items-center text-sm border-b border-[#1e2233] ${
                            idx % 2 !== 0 ? 'bg-[#252A3D]' : ''
                        }`}
                    >
                        <div className="pl-[5px]">
                            <div className="text-white">{account.name}</div>
                            <div className="text-gray-400 text-xs">{account.type}</div>
                        </div>
                        <div className="pl-[5px] text-white">{account.type}</div>
                        <div className="pl-[5px] text-white">{account.broker}</div>
                        <div className="pl-[5px] text-white">{account.renewalDate}</div>
                        <div className="pl-[5px] text-[#3b82f6] text-[15px]">{account.premium}</div>
                        <div className="pl-[5px] text-white flex justify-center">{account.ratedPremium}</div>
                        <div className="pl-[5px] flex justify-center">
                            <span
                                style={{
                                    ...getLossRatioClass(account.lossRatio),
                                    padding: '0.25rem 1rem', // px-4 py-1
                                    borderRadius: '20px',
                                    color: 'white',
                                    fontSize: '0.75rem', // text-xs
                                    fontWeight: '500',
                                    display: 'inline-block',
                                }}
                            >
                                {account.lossRatio}
                            </span>
                        </div>
                        <div className="pl-[5px] flex justify-center">
                            <span className={`w-[85px] py-1 rounded-[20px] text-white text-xs font-medium text-center ${getAppetiteBadge()}`}>
                                {account.appetite.toUpperCase()}
                            </span>
                        </div>
                        <div className="pl-[5px] flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${getStatusColor(account.status)}`}></span>
                            <span className="text-white">{account.status}</span>
                        </div>
                        <div className="pl-[5px]">
                            <span
                                style={{
                                    border: '2px solid #3b82f6',
                                    borderRadius: '20px',
                                    padding: '4px 10px',
                                    display: 'inline-block',
                                    color: '#3b82f6',
                                }}
                            >
                                {account.triage}
                            </span>
                        </div>

                        {/* Останній стовпець WINNABILITY + ⋮ з абсолютним позиціонуванням */}
                        <div className="pl-[5px] flex justify-start relative">
                            <div className="flex items-center border border-[#3b82f6] rounded-[20px] px-2 py-1 max-w-max whitespace-nowrap">
                                {[...Array(4)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-2.5 h-2.5 rounded-full mr-1 ${
                                            i < getStarsCount(account.winnability) ? 'bg-blue-500' : 'bg-[#1e2a44]'
                                        }`}
                                    ></span>
                                ))}
                                <span className="ml-1 text-[#3b82f6] text-xs">{account.winnability}</span>
                            </div>

                            <div
                                className="text-white text-lg cursor-pointer select-none"
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '20px',
                                    height: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                ⋮
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyAccounts;
