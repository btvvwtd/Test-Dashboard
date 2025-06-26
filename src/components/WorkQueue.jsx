import React, { useState } from 'react';
import tasks from '../data/tasks.json';

function statusColor(status) {
    switch (status.toLowerCase()) {
        case 'new':
            return 'bg-blue-600';
        case 'pending review':
            return 'bg-yellow-400';
        case 'completed':
            return 'bg-green-500';
        default:
            return 'bg-gray-400';
    }
}

function WorkQueue() {
    const [activeTab, setActiveTab] = useState('assigned');

    const filteredTasks = tasks.filter((task) => {
        if (activeTab === 'assigned') return true;
        if (activeTab === 'pending') return task.status.toLowerCase() === 'pending review';
        if (activeTab === 'referrals') return task.type.toLowerCase().includes('referral');
        return true;
    });

    const assignedCount = tasks.length;
    const pendingCount = tasks.filter(t => t.status.toLowerCase() === 'pending review').length;
    const referralsCount = tasks.filter(t => t.type.toLowerCase().includes('referral')).length;

    return (
        <div className="w-[1035px] bg-[#1e2233] p-5 rounded-[20px] text-white font-inter" style={{ marginLeft: '80px' }}>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold m-0">Work Queue</h2>
                <div className="flex gap-2">
                    {[
                        { key: 'assigned', label: 'Assigned to me', count: assignedCount },
                        { key: 'pending', label: 'Pending Review', count: pendingCount },
                        { key: 'referrals', label: 'Referrals', count: referralsCount },
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            style={{ borderRadius: '20px', background: '#0c0f17' }}
                            className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                                activeTab === tab.key ? 'bg-blue-600' : 'bg-[#1e2233]'
                            }`}
                        >
                            {tab.label} <span>({tab.count})</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-5 flex flex-col">
                <div className="grid grid-cols-[1.5fr_2fr_1.8fr_1.5fr_1.2fr_0.5fr] py-3 border-b border-[#1e2233] text-[#aab0c0] font-semibold text-xs bg-[#252a3d]">
                    <div className="pl-[5px]">Originator</div>
                    <div className="pl-[5px]">Client/Line</div>
                    <div className="pl-[5px]">Type</div>
                    <div className="pl-[5px]">Status</div>
                    <div className="pl-[5px]">Created</div>
                    <div></div>
                </div>

                {filteredTasks.map((task, idx) => (
                    <div
                        key={idx}
                        className={`grid grid-cols-[1.5fr_2fr_1.8fr_1.5fr_1.2fr_0.5fr] py-3 items-center text-sm border-b border-[#1e2233] ${
                            idx % 2 !== 0 ? 'bg-[#252A3D]' : ''
                        }`}
                    >
                        <div className="flex items-center gap-3 pl-[5px]">
                            <div className="bg-[#324169] rounded-full w-9 h-9 flex items-center justify-center font-semibold text-white">
                                {task.initials}
                            </div>
                            <span>{task.name}</span>
                        </div>
                        <div className="pl-[5px]">
                            <div className="font-medium">{task.client}</div>
                            <div className="text-xs text-[#aab0c0]">{task.line}</div>
                        </div>
                        <div className="text-[#e4e4e4] pl-[5px]">{task.type}</div>
                        <div className="flex items-center gap-2 font-medium pl-[5px]">
                            <span className={`w-2.5 h-2.5 rounded-full ${statusColor(task.status)}`} />
                            {task.status}

                        </div>
                        <div className="text-[#ccc] pl-[5px]">{task.date}</div>
                        <div className="text-lg text-left pl-3 cursor-pointer select-none">⋮</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkQueue;
