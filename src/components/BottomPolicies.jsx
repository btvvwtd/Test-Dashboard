import React, { useState } from 'react';

const policiesData = {
    "policies": [
        {
            "line": "Marine Cargo",
            "effDate": "6/30/2026",
            "expDate": "6/30/2027",
            "status": "Active",
            "expiringTech": "$587,500",
            "expiringPremium": "$605,000",
            "renewalTech": "$610,000",
            "renewalPremium": "$625,000",
            "rateChange": "3.3%",
            "lossRatio": "22%",
            "id": "17030212"
        },
        {
            "line": "General Liability",
            "effDate": "6/30/2026",
            "expDate": "6/30/2027",
            "status": "Active",
            "expiringTech": "$160,000",
            "expiringPremium": "$165,000",
            "renewalTech": "$170,000",
            "renewalPremium": "$175,000",
            "rateChange": "6.1%",
            "lossRatio": "55%",
            "id": "4651092"
        },
        {
            "line": "Workers Comp",
            "effDate": "Pending",
            "expDate": "Pending",
            "status": "Pending",
            "expiringTech": "$0",
            "expiringPremium": "$0",
            "renewalTech": "$73,500",
            "renewalPremium": "$75,000",
            "rateChange": "N/A",
            "lossRatio": "N/A",
            "id": "9182371"
        },
        {
            "line": "Umbrella",
            "effDate": "13/03/2026",
            "expDate": "13/03/2027",
            "status": "Active",
            "expiringTech": "$245,000",
            "expiringPremium": "$250,000",
            "renewalTech": "$267,500",
            "renewalPremium": "$275,000",
            "rateChange": "10.0%",
            "lossRatio": "78%",
            "id": "5274936"
        }
    ],
    "total": {
        "expiringTech": "$992,500",
        "expiringPremium": "$1,020,000",
        "renewalTech": "$1,121,000",
        "renewalPremium": "$1,150,000",
        "rateChange": "6.9%",
        "lossRatio": "58.3%"
    }
};

function BottomPolicies() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filter policies by search term and status
    const policies = policiesData.policies.filter(
        (policy) =>
            policy.line.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterStatus === 'All' || policy.status === filterStatus)
    );

    // Calculate dynamic totals based on filtered policies
    const calculateTotals = () => {
        const totalCount = policies.length;
        let expiringTechSum = 0;
        let expiringPremiumSum = 0;
        let renewalTechSum = 0;
        let renewalPremiumSum = 0;
        let rateChangeSum = 0;
        let lossRatioSum = 0;
        let validRateChanges = 0;
        let validLossRatios = 0;

        policies.forEach((policy) => {
            // Convert currency strings to numbers (remove $ and commas)
            expiringTechSum += parseFloat(policy.expiringTech.replace(/[$,]/g, '')) || 0;
            expiringPremiumSum += parseFloat(policy.expiringPremium.replace(/[$,]/g, '')) || 0;
            renewalTechSum += parseFloat(policy.renewalTech.replace(/[$,]/g, '')) || 0;
            renewalPremiumSum += parseFloat(policy.renewalPremium.replace(/[$,]/g, '')) || 0;

            // Handle rateChange and lossRatio (exclude N/A)
            if (policy.rateChange !== 'N/A') {
                rateChangeSum += parseFloat(policy.rateChange.replace('%', '')) || 0;
                validRateChanges += 1;
            }
            if (policy.lossRatio !== 'N/A') {
                lossRatioSum += parseFloat(policy.lossRatio.replace('%', '')) || 0;
                validLossRatios += 1;
            }
        });

        return {
            count: totalCount,
            expiringTech: `$${expiringTechSum.toLocaleString()}`,
            expiringPremium: `$${expiringPremiumSum.toLocaleString()}`,
            renewalTech: `$${renewalTechSum.toLocaleString()}`,
            renewalPremium: `$${renewalPremiumSum.toLocaleString()}`,
            rateChange: validRateChanges > 0 ? `${(rateChangeSum / validRateChanges).toFixed(1)}%` : 'N/A',
            lossRatio: validLossRatios > 0 ? `${(lossRatioSum / validLossRatios).toFixed(1)}%` : 'N/A'
        };
    };

    const totals = calculateTotals();

    const getStatusColor = (status) =>
        status === 'Active' ? 'bg-green-500' : status === 'Pending' ? 'bg-yellow-500' : 'bg-blue-500';

    const getLossRatioClass = (lossRatio) => {
        if (lossRatio === 'N/A') return {};
        const num = parseFloat(lossRatio) || 0;
        if (num <= 40) return { backgroundColor: '#3bb979' };
        if (num <= 60) return { backgroundColor: '#fdd261' };
        return { backgroundColor: '#b93b3b' };
    };

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleStatusFilter = (status) => {
        setFilterStatus(status);
        setIsFilterOpen(false);
    };

    return (
        <>
            <h2 className="text-[30px] mb-4 ml-[100px]">Policies</h2>
            <div
                className="w-[1680px] bg-[#1e2233] p-5 rounded-[20px] text-white font-inter max-w-full overflow-x-auto ml-[85px]"
                style={{ height: '390px' }}
            >
                {/* Search and buttons */}
                <div className="flex flex-row items-center gap-2 relative">
                    <input
                        style={{ borderRadius: '20px', width: '250px' }}
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-2 py-1 bg-[#161b29] text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <span
                        onClick={handleFilterClick}
                        className="text-[#3b82f6] text-sm font-medium text-center w-[100px] h-[28px] flex items-center justify-center rounded-[20px] cursor-pointer"
                        style={{ border: '2px solid #3b82f6', background: '#1e2233' }}
                    >
                        Filter
                    </span>
                    {isFilterOpen && (
                        <div
                            className="absolute top-10 left-[270px] bg-[#252a3d] p-4 rounded-[10px] shadow-lg z-10"
                            style={{ width: '150px' }}
                        >
                            <div className="flex flex-col gap-2 rounded-[20px]">
                                {['All', 'Active', 'Pending'].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => handleStatusFilter(status)}
                                        className="text-white text-sm hover:bg-[#1e2233] p-2 rounded"
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <span
                        className="text-[#3b82f6] text-sm font-medium text-center w-[100px] h-[28px] flex items-center justify-center rounded-[20px]"
                        style={{ border: '2px solid #3b82f6', background: '#1e2233' }}
                    >
                        Group
                    </span>
                </div>

                {/* Table */}
                <div className="mt-5 flex flex-col overflow-y-auto" style={{ maxHeight: '300px' }}>
                    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] py-3 border-b border-[#1e2233] text-[#aab0c0] font-semibold text-xs bg-[#252a3d]">
                        <div className="pl-[5px]">LINE</div>
                        <div className="pl-[5px]">EFF. DATE</div>
                        <div className="pl-[5px]">EXP. DATE</div>
                        <div className="pl-[5px]">STATUS</div>
                        <div className="pl-[5px]">EXPIRING TECH</div>
                        <div className="pl-[5px]">EXPIRING PREMIUM</div>
                        <div className="pl-[5px]">RENEWAL TECH</div>
                        <div className="pl-[5px]">RENEWAL PREMIUM</div>
                        <div className="pl-[5px] text-center">RATE CHANGE</div>
                        <div className="pl-[5px] text-center">LOSS RATIO</div>
                    </div>

                    {policies.map((policy, idx) => (
                        <div
                            key={idx}
                            className={`grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] py-3 items-center text-sm border-b border-[#1e2233] ${
                                idx % 2 !== 0 ? 'bg-[#252A3D]' : ''
                            }`}
                        >
                            <div className="pl-[5px] text-white">{policy.line}</div>
                            <div className="pl-[5px] text-white">{policy.effDate}</div>
                            <div className="pl-[5px] text-white">{policy.expDate}</div>
                            <div className="pl-[5px] flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${getStatusColor(policy.status)}`}></span>
                                <span className="text-white">{policy.status}</span>
                            </div>
                            <div className="pl-[5px] text-white">{policy.expiringTech}</div>
                            <div className="pl-[5px] text-white">{policy.expiringPremium}</div>
                            <div className="pl-[5px] text-white">{policy.renewalTech}</div>
                            <div className="pl-[5px] text-white">{policy.renewalPremium}</div>
                            <div className="pl-[5px] flex justify-center text-white">{policy.rateChange}</div>
                            <div className="pl-[5px] flex justify-center">
                                <span
                                    style={{
                                        ...getLossRatioClass(policy.lossRatio.replace('%', '')),
                                        ...(policy.lossRatio !== 'N/A' && {
                                            padding: '0.25rem 1rem',
                                            borderRadius: '20px',
                                            color: 'white',
                                            fontSize: '0.75rem',
                                            fontWeight: '500',
                                            display: 'inline-block',
                                        }),
                                    }}
                                >
                                    {policy.lossRatio}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Total Row */}
                    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] py-3 items-center text-sm border-t border-[#1e2233]">
                        <div className="pl-[5px]"></div>
                        <div className="pl-[5px]"></div>
                        <div className="pl-[5px]"></div>
                        <div className="pl-[5px] text-white font-semibold">TOTAL ({totals.count})</div>
                        <div className="pl-[5px] text-white font-semibold">{totals.expiringTech}</div>
                        <div className="pl-[5px] text-white font-semibold">{totals.expiringPremium}</div>
                        <div className="pl-[5px] text-white font-semibold">{totals.renewalTech}</div>
                        <div className="pl-[5px] text-white font-semibold">{totals.renewalPremium}</div>
                        <div className="pl-[5px] flex justify-center text-white font-semibold">{totals.rateChange}</div>
                        <div className="pl-[5px] flex justify-center">
                            <span
                                style={{
                                    ...getLossRatioClass(totals.lossRatio.replace('%', '')),
                                    ...(totals.lossRatio !== 'N/A' && {
                                        padding: '0.25rem 1rem',
                                        borderRadius: '20px',
                                        color: 'white',
                                        fontSize: '0.75rem',
                                        fontWeight: '500',
                                        display: 'inline-block',
                                    }),
                                }}
                            >
                                {totals.lossRatio}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BottomPolicies;