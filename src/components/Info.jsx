import React from "react";

function NeedAttention() {
    return (
        <div className="w-[700px] h-[150px] bg-[#1E2233] text-white p-4 rounded-[20px] border-2 border-[#FDD261] flex items-center justify-between mt-[30px]">
            <div className="flex flex-col items-start ml-2">
                <div className="flex items-center mb-4">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center mr-2 text-[12px] text-[#FDD261] border-2 border-[#FDD261]">
                        !
                    </span>
                    <span className="text-[#FDD261] text-[19px]">Needs Attention</span>
                </div>
                <div className="flex space-x-8">
                    <div>
                        <p className="text-[18px]">Marine Survey Required</p>
                        <p className="text-[14px] text-[#8A8C98]">Scheduled for 06/12/2025</p>
                        <a href="#" className="text-blue-400 text-sm">Review details link →</a>
                    </div>
                    <div>
                        <p className="text-[18px]">Loss Control Complete</p>
                        <p className="text-[14px] text-[#8A8C98]">Last inspection: 02/15/2025</p>
                        <a href="#" className="text-blue-400 text-sm">View report →</a>
                    </div>
                    <div>
                        <p className="text-[18px]">Claims Review Required</p>
                        <p className="text-[14px] text-[#8A8C98]">3 open claims // $245,000 TTL</p>
                        <a href="#" className="text-blue-400 text-sm">View claims →</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Info() {
    return (
        <div className="w-[1680px] h-[180px] text-white flex items-center justify-between p-4 ml-[80px]">
            <div className="flex flex-col">
                <p className="text-sm mb-5">
                    Dashboard // Accounts // <span className="text-blue-400">Maritime Logistics Corp</span>
                </p>                <div className="flex items-center">
                    <img
                        src="/src/assets/react.svg"
                        alt="Company Logo"
                        className="w-20 h-20 mr-4"
                    />
                    <div>
                        <h2 className="text-[42px]">Maritime Logistics Corp</h2>
                        <p className="text-[18px]">425 Harbor Boulevard, Suite 300<br />Seattle, WA 98104</p>
                    </div>
                </div>
            </div>
            <div className="flex mt-25">
                <div className="mr-11 relative left-[-130px]">
                    <div className="absolute left-[-10px] top-0 w-[2px] h-full bg-[#313B54]"></div>
                    <p className="text-sm text-[#8A8C98]">EXISTING ACCOUNT</p>
                    <p className="text-sm">54383</p>
                </div>
                <div className="mr-10 relative left-[-130px]">
                    <div className="absolute left-[-10px] top-0 w-[2px] h-full bg-[#313B54]"></div>
                    <p className="text-sm text-[#8A8C98]">BROKER</p>
                    <p className="text-sm ">Marsh McLennan</p>
                </div>
                <div className="relative left-[-130px]">
                    <div className="absolute left-[-10px] top-0 w-[2px] h-full bg-[#313B54]"></div>
                    <p className="text-sm text-[#8A8C98]">UNDERWRITER</p>
                    <p className="text-sm">Kate Johnson</p>
                </div>
            </div>
            <NeedAttention />
        </div>
    );
}

export default Info;