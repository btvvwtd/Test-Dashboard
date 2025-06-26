import React from "react";

function WinnabilityBlock() {
    return (
        <div className="bg-[#1e2233] rounded-[20px] p-6 h-[240px] w-[375px] text-white font-sans">
            <h2 className="text-[24px] mb-[-10px]">
                Winnability
                <span className="ml-4 inline-flex items-center text-[#3B82F6] text-[18px] px-2 py-1">
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-1"></span>
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-1"></span>
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-1"></span>
                <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-1"></span>
            </span>
            </h2>

            <div className="text-[50px] mb-[74px]">Very Strong</div>
            <a href="#" className="text-[#3b82f6] text-[12px]">See all factors →</a>
        </div>
    );
}

function LossRatioBlock() {
    return (
        <div className="bg-[#1e2233] rounded-[20px] p-6 h-[240px] w-[375px] text-white font-sans">
            <h2 className="text-[24px]  mb-[-10px]">Loss Ratio</h2>
            <div className="text-[50px]  mb-[74px]">25% <span className="text-[20px] text-[#8A8C98]">vs 42% target</span></div>
            <a href="#" className="text-[#3b82f6] text-[12px]">View history →</a>
        </div>
    );
}

function PremiumGrowthBlock() {
    return (
        <div className="bg-[#1e2233] rounded-[20px] p-6 h-[240px] w-[375px] text-white font-sans">
            <h2 className="text-[24px]  mb-[-10px]">Premium Growth</h2>
            <div className="text-[50px]  mb-[-10px]">12.4% <span className="text-[20px] text-[#8A8C98]">YoY increase</span></div>
            <div className="text-[20px] text-gray-400 mb-[54px]">$123M vs $150M Target</div>
            <a href="#" className="text-[#3b82f6] text-[12px]">View trend →</a>
        </div>
    );
}

function ExposureDistributionBlock() {
    const data = [
        { label: "Marine Cargo", value: 71.4 },
        { label: "General Liability", value: 20 },
        { label: "Workers Comp", value: 8.6 },
    ];

    return (
        <div className="bg-[#1e2233] rounded-[20px] p-6 h-[180px] w-[460px] text-white font-sans">
            <h2 className="text-[24px] mb-4">Exposure Distribution</h2>
            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center text-[16px]">
                        <div className="w-[234px] h-[22px] bg-[#2a2f43] rounded-full mr-3">
                            <div
                                className="h-[22px] rounded-r-full"
                                style={{
                                    background: 'linear-gradient(to left, #3b82f6, #313853)',
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


function PerformanceMetrics() {
    return (
        <div className=" py-6 px-0 w-full mx-0 text-[10px]">
            <h1 className="text-white mb-5 mx-6 ml-[100px]">Performance Metrics</h1>
            <div className="flex w-1680 mx-0 ml-[90px]">
                <div className="mr-3">
                    <WinnabilityBlock />
                </div>
                <div className="mx-3">
                    <LossRatioBlock />
                </div>
                <div className="mx-3">
                    <PremiumGrowthBlock />
                </div>
                <div className="ml-3">
                    <ExposureDistributionBlock />
                </div>
            </div>
        </div>
    );
}

export default PerformanceMetrics;