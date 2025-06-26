import React from 'react';

function MarketIntelligence() {
    return (
        <div className="bg-[#1e2233] rounded-[20px] p-6 h-[250] w-[300px] text-white font-sans">
            <h2 className="text-[14px] font-semibold mb-5">Market intelligence</h2>

            <div className="flex items-center text-[14px] pb-3 mb-3 border-b border-white/15">
                <span className="h-3 w-3 rounded-full inline-block mr-3 bg-[#E53935]"></span>
                <span>Rate hardening in Cyber market - +15% YoY</span>
            </div>

            <div className="flex items-center text-[14px] pb-3 mb-3 border-b border-white/15">
                <span className="h-3 w-3 rounded-full inline-block mr-3 bg-[#FFD600]"></span>
                <span>New capacity entering Marine market</span>
            </div>

            <div className="flex items-center text-[14px] pb-3 mb-3 border-b border-white/15">
                <span className="h-3 w-3 rounded-full inline-block mr-3 bg-[#1E88E5]"></span>
                <span>Environmental regulatory changes in CA</span>
            </div>
        </div>
    );
}

export default MarketIntelligence;