import React, { useState } from 'react';

// Define the four block components
function PolicyRenewal() {
    const handleButtonClick = () => {
        alert('Sorry, this button is inactive now');
    };

    return (
        <div className="w-[760px] h-[300px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4 ml-[20px] border-2 border-transparent bg-clip-padding transition-all duration-300 has-[h2]:border-gradient-to-r has-[h2]:from-blue-500 has-[h2]:via-purple-500 has-[h2]:to-pink-500">
            <h2 className="text-[22px] flex items-center mb-4">
                <button
                    className="custom-button mr-2 transition-colors"
                    style={{ backgroundColor: '#1e40af', color: 'white', padding: '2px 14px', borderRadius: '25px', fontSize: '13px', fontWeight: 'medium', transform: 'translateY(-1px)' }}
                    onClick={handleButtonClick}
                >
                    NEW
                </button>
                Policy Renewal - Auto Insurance 5/15/25
            </h2>

            <div className="text-[14px] mb-2">
                <span className="text-[#8a8c98]">Michael Roberts // Apr 5</span>
            </div>

            <p className="text-[18px] mb-4 text-[#e5e7eb]">
                Hello Arthur, I'm reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I've attached the current policy details and premium breakdown for your reference.
            </p>

            <div className="text-[14px] text-gray-400 mb-4 ml-8">
                3 attachments
            </div>

            <button
                className="custom-button mr-2 transition-colors ml-4"
                style={{ backgroundColor: '#3b82f6', color: 'white', padding: '7px 35px', borderRadius: '25px', fontSize: '13px', fontWeight: 'medium' }}
                onClick={handleButtonClick}
            >
                Reply
            </button>
        </div>
    );
}

function NewQuoteRequest() {
    const handleButtonClick = () => {
        alert('Sorry, this button is inactive now');
    };

    return (
        <div className="w-[760px] h-[300px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4 ml-[20px] border-2 border-transparent bg-clip-padding transition-all duration-300 has-[h2]:border-gradient-to-r has-[h2]:from-blue-500 has-[h2]:via-purple-500 has-[h2]:to-pink-500">
            <h2 className="text-[22px] mb-4">
                <button
                    className="custom-button mr-2 transition-colors"
                    style={{ backgroundColor: '#1e40af', color: 'white', padding: '2px 14px', borderRadius: '25px', fontSize: '13px', fontWeight: 'medium', transform: 'translateY(-3px)' }}
                    onClick={handleButtonClick}
                >
                    NEW
                </button>
                New Quote Request - Workers Comp Insurance
            </h2>

            <div className="text-[14px] mb-2">
                <span className="text-[#8a8c98]">Sarah Chen // Apr 5</span>
            </div>

            <p className="text-[18px] mb-4 text-[#e5e7eb]">
                Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I've completed the initial risk assessment based
            </p>

            <div className="mb-4">
                <button
                    className="custom-button mr-[35px] transition-colors"
                    style={{ backgroundColor: '#3bb979', color: 'white', padding: '7px 35px', borderRadius: '25px', fontSize: '13px', fontWeight: 'medium' }}
                    onClick={handleButtonClick}
                >
                    3 attachments
                </button>
            </div>

            <button
                className="custom-button mr-2 transition-colors"
                style={{ backgroundColor: '#3b82f6', color: 'white', padding: '7px 35px', borderRadius: '25px', fontSize: '13px', fontWeight: 'medium' }}
                onClick={handleButtonClick}
            >
                Reply
            </button>
        </div>
    );
}

function Fwd() {
    const handleButtonClick = () => {
        alert('Sorry, this button is inactive now');
    };

    return (
        <div className="w-[760px] h-[145px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4 border-2 border-transparent bg-clip-padding transition-all duration-300 has-[h2]:border-gradient-to-r has-[h2]:from-blue-500 has-[h2]:via-purple-500 has-[h2]:to-pink-500">
            <h2 className="text-[25px] mb-3">
                <button
                    className="custom-button mr-2 transition-colors"
                    style={{ backgroundColor: '#1e40af', color: 'white', padding: '2px 16px', borderRadius: '25px', fontSize: '16px', fontWeight: 'medium', transform: 'translateY(-4px)' }}
                    onClick={handleButtonClick}
                >
                    Responded
                </button>
                Fwd: New Submission - BPM Real Estate - EFF 4/1/24
            </h2>
            <div className="text-[14px] mb-2">
                <span className="text-[#8a8c98] mb-">Joshua Dunmire // May 25</span>
            </div>
            <p className="text-[18px] mb-2 text-[#e5e7eb]">
                Arthur, attached please find our submission for the above mentioned applicant. We have...
            </p>
        </div>
    );
}

function NewBusiness() {
    const handleButtonClick = () => {
        alert('Sorry, this button is inactive now');
    };

    return (
        <div className="w-[760px] h-[230px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4 border-2 border-transparent bg-clip-padding transition-all duration-300 has-[h2]:border-gradient-to-r has-[h2]:from-blue-500 has-[h2]:via-purple-500 has-[h2]:to-pink-500">
            <h2 className="text-[20px] mb-2">
                New Business: DPM Real Estate Group, LLC
            </h2>
            <div className="text-[14px] mb-2">
                <span className="text-[#8a8c98]">Isabel Kreller // Feb 28</span>
            </div>

            <p className="text-[18px] mb-4 text-[#e5e7eb]">
                Hello Arthur, I am pleased to present you with a submission on this client's upco...
            </p>
            <div className="mb-4">
                <button
                    className="custom-button mr-[35px] transition-colors"
                    style={{ backgroundColor: '#3bb979', color: 'white', padding: '7px 35px', borderRadius: '25px', fontSize: '13px', fontWeight: 'medium' }}
                    onClick={handleButtonClick}
                >
                    5 attachments
                </button>
            </div>

            <button
                className="custom-button mr-2 transition-colors"
                style={{ backgroundColor: '#3b82f6', color: 'white', padding: '7px 35px', borderRadius: '25px', fontSize: '13px', fontWeight: 'medium' }}
                onClick={handleButtonClick}
            >
                Reply
            </button>
        </div>
    );
}

function Communication() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleStatusFilter = (status) => {
        setFilterStatus(status);
        setIsFilterOpen(false);
    };

    const handleButtonClick = () => {
        alert('Sorry, this button is inactive now');
    };

    return (
        <div className="py-6 px-0 w-full mx-0 ml-21 text-[8px]">
            <h1 className="text-white mb-5 mx-6 ml-[15px] text-2xl">Communication</h1>
            <div className="bg-[#1e2233] rounded-[20px] p-6 h-[725px] w-[1680px] text-white font-sans relative">
                {/* Search and buttons */}
                <div className="absolute top-6 left-6 flex flex-row items-center gap-2 z-10">
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
                        onClick={handleButtonClick}
                    >
                        Filter
                    </span>
                    {isFilterOpen && (
                        <div
                            className="absolute top-10 left-[270px] bg-[#252a3d] p-4 rounded-[10px] shadow-lg z-10"
                            style={{ width: '150px' }}
                        >
                            <div className="flex flex-col gap-2">
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
                        onClick={handleButtonClick}
                    >
                        Group
                    </span>
                </div>

                {/* 2-column grid for the four blocks */}
                <div className="grid grid-cols-2 gap-6 mt-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <PolicyRenewal />
                        <NewQuoteRequest />
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        <Fwd />
                        <NewBusiness />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Communication;