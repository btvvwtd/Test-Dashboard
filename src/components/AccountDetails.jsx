import React from "react";
import { RocketLaunchIcon } from '@heroicons/react/24/solid';




function DesicionSupport() {
    return (
        <div className="w-[345px] h-[300px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[24px] mb-[20px] ml-[10px]">
                DESICION SUPPORT <span className="text-[20px] border border-white rounded-[5px] p-[4px 12px] ml-3 px-1">4</span>
            </h2>
            <div className="text-[18px] text-[#3b82f6] ml-[30px] mb-6"><a href="#">Winnability</a></div>
            <div className="text-[18px] text-[#e5e7eb] ml-[30px] mb-6">Exposure Review & Suggested Coverage</div>
            <div className="text-[18px] text-[#e5e7eb] ml-[30px] mb-6">Portfolio Strategy Alignment</div>
            <div className="text-[18px] text-[#e5e7eb] ml-[30px] mb-20">Broker Analytics</div>
            <div>
                <h2 className="text-[24px] mb-[40px] ml-[20px]">RISK ASSESSMENT <span className=" bg-[#252A38] rounded-[5px] ml-5.5 px-1">6</span></h2>
                <h2 className="text-[24px] ml-[20px]">DOCUMENTS AND COMPLIANCE <span className="bg-[#252A38] rounded-[5px] ml-20 px-1">2</span></h2>
            </div>
        </div>
    );
}

function OverallScore() {
    return (
        <div className="w-[360px] h-[150px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[24px] mb-[10px]">Overall Score</h2>
            <div className="flex items-center">
                <span className="text-[50px]">82%</span>
                <div className="ml-4 flex items-center text-[#3B82F6] text-[18px] rounded-[25px] border border-[#3B82F6] px-2 py-1">
                    <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-1"></span>
                    <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-1"></span>
                    <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-1"></span>
                    <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-1"></span>
                    Very Strong
                </div>
            </div>
        </div>
    );
}

function HistoricalTrend() {
    return (
        <div className="w-[350px] h-[150px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[24px] mb-[-40px]">Historical trend</h2>
            <div style={{ position: 'relative', width: '100%', height: '100%', }}>
                <svg width="100%" height="70%" style={{ position: 'absolute', bottom: 0 , marginBottom:'5px'}}>
                    <line x1="10%" y1="80%" x2="25%" y2="40%" style={{ stroke: '#3B82F6', strokeWidth: 2 }} />
                    <line x1="25%" y1="40%" x2="40%" y2="60%" style={{ stroke: '#3B82F6', strokeWidth: 2 }} />
                    <line x1="40%" y1="60%" x2="55%" y2="30%" style={{ stroke: '#3B82F6', strokeWidth: 2 }} />
                    <line x1="55%" y1="30%" x2="70%" y2="50%" style={{ stroke: '#3B82F6', strokeWidth: 2 }} />
                    <line x1="70%" y1="50%" x2="85%" y2="35%" style={{ stroke: '#3B82F6', strokeWidth: 2 }} />
                    <line x1="85%" y1="35%" x2="100%" y2="15%" style={{ stroke: '#3B82F6', strokeWidth: 2 }} />
                </svg>
                <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#8A8B98',
                    fontSize: '14px',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                }}>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>Now</span>
                </div>
            </div>
        </div>
    );
}

function Position() {
    const data = [        { label: "Your score", value: 82 },        { label: "Market Avg", value: 68 },        { label: "Top competitor", value: 88 },    ];

    return (
        <div className="bg-[#252a3d] rounded-[20px] p-3 h-[150px] w-[450px] text-white font-sans">
            <h2 className="text-[24px] mb-2">Position</h2>
            <div className="space-y-2">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center text-[16px]">
                        <div className="w-[234px] h-[20px] bg-[#2a2f43] rounded-full mr-4">
                            <div
                                className="h-[20px] rounded-r-full"
                                style={{
                                    background: 'linear-gradient(to right, #313853, #3b82f6)',
                                    width: `${item.value}%`,
                                    justifyContent: 'flex-end',
                                    paddingRight: '8px',
                                }}
                            ></div>
                        </div>
                        <span>{item.label}: {item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
function IncreasingWinnability() {
    const data = [
        { label: "Brokers relationship", value: 28 },
        { label: "Loss history", value: 22 },
        { label: "Industry growth", value: 16 },
        { label: "Multiline opportunity", value: 11 },
    ];

    return (
        <div className="w-[588px] h-[380px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[20px] mb-10 flex items-center font-semibold text-gray-300">
                <span className="w-8 h-8 rounded-full flex items-center justify-center mr-2 text-[12px] text-[#3BB979] bg-gradient-to-r from-transparent via-transparent to-transparent border-[2px] border-[#22c55e]">
                    ↑
                </span>
                Increasing Winnability
            </h2>

            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-5">
                        <div className="w-10 h-10 mt-1 rounded-full flex items-center justify-center text-[17px] font-medium text-[#3BB979] bg-gradient-to-r from-transparent via-transparent to-transparent border-[3px] border-[#22c55e]">
                            {index + 1}
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span className="text-[16px] text-gray-300">{item.label}</span>
                            <div className="flex items-center">
                                <div className="w-[270px] h-[16px] bg-[#2a2f43] rounded-r-full overflow-hidden mt-1">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#313853] to-[#3BB979] rounded-r-full"
                                        style={{ width: `${item.value}%` }}
                                    ></div>
                                </div>
                                <span className="ml-2 text-[14px] font-medium text-gray-400">+{item.value}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DecreasingWinnability() {
    const data = [
        { label: "Brokers relationship", value: 24 },
        { label: "Loss history", value: 18 },
        { label: "Industry growth", value: 13 },
        { label: "Multiline opportunity", value: 5 },
    ];

    return (
        <div className="w-[588px] h-[380px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[20px] mb-10 flex items-center font-semibold text-gray-300">
                <span className="w-8 h-8 rounded-full flex items-center justify-center mr-2 text-[12px] text-[#FDD261] bg-gradient-to-r from-transparent via-transparent to-transparent border-[2px] border-[#FDD261]">
                    ↓
                </span>
                Decreasing Winnability
            </h2>

            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-5">
                        <div className="w-10 h-10 mt-1 rounded-full flex items-center justify-center text-[17px] font-medium text-[#FDD261] bg-gradient-to-r from-transparent via-transparent to-transparent border-[3px] border-[#FDD261]">
                            {index + 1}
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span className="text-[16px] text-gray-300">{item.label}</span>
                            <div className="flex items-center">
                                <div className="w-[270px] h-[16px] bg-[#2a2f43] rounded-r-full overflow-hidden mt-1">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#313853] to-[#FDD261] rounded-r-full"
                                        style={{ width: `${item.value}%` }}
                                    ></div>
                                </div>
                                <span className="ml-2 text-[14px] font-medium text-gray-400">-{item.value}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function AiPowered() {
    return (
        <div className="w-[1200px] h-[330px] text-white bg-[#252a3d] font-sans rounded-[20px] p-6">
            <h2 className="text-[22px] font-medium flex items-center text-[#22c55e] mb-6">
                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                AI-Powered Recommendations
            </h2>

            <div className="space-y-8">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-white font-semibold text-[19px] mb-1">
                            Offer 5% premium discount in exchange for 3-year commitment
                        </p>
                        <p className="text-[#94a3b8] text-[19px] leading-relaxed max-w-[900px]">
                            Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.
                        </p>
                    </div>
                    <div className="button-wrapper w-[140px]">
                        <button className="text-[#1D2125] font-semibold px-6 py-2 "style={{
                            background:"#3BB979",
                            borderRadius:"30px",
                            padding:"10px 50px",
                            fontSize:"18px",
                            transform: 'translateY(35px)',
                        }}>
                            Apply
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-white font-semibold text-[19px] mb-1">
                            Propose risk control services for cargo handling procedures
                        </p>
                        <p className="text-[#94a3b8] text-[19px] leading-relaxed max-w-[900px]">
                            Can potentially reduce loss ratio by 15–20% based on similar maritime accounts in your portfolio.
                            Specific focus on loading/unloading operations would address the most frequent claim scenarios.
                        </p>
                    </div>
                    <div className="button-wrapper w-[140px] ">
                        <button className=" text-[#1D2125] font-semibold px-6 py-2" style={{
                            background:"#3BB979",
                            borderRadius:"30px",
                            padding:"10px 50px",
                            fontSize:"18px",
                            transform: 'translateY(35px)',
                        }}>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


function AccountDetails() {
    return (
        <div className="py-6 px-0 w-full mx-0 ml-21 text-[8px]">
            <h1 className="text-white mb-5 mx-6 ml-[15px]">Account Details</h1>
            <div className="bg-[#1e2233] rounded-[20px] p-6 h-[960px] w-[1680px] text-white font-sans flex flex-col">
                {/* Main container with flex column */}
                <div className="flex flex-row h-full"> {/* Ensure parent flex-row takes full height */}
                    {/* Left Column */}
                    <div className="w-[345px] mr-6">
                        <DesicionSupport />
                    </div>
                    <div className="border-l border-dashed border-gray-500 mx-6 min-h-full"></div> {/* Use min-h-full */}
                    {/* Right Column */}
                    <div className="flex-1 flex flex-col space-y-6">
                        <div className="flex space-x-6">
                            <OverallScore />
                            <HistoricalTrend />
                            <Position />
                        </div>
                        <div className="flex flex-row space-x-6">
                            <IncreasingWinnability />
                            <DecreasingWinnability />
                        </div>
                        <AiPowered />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountDetails;