import React from "react";

function QuickActions() {
    return (
        <div className="bg-[#1e2233] p-4 rounded-[20px] w-[300px] h-[250px] shadow-md overflow-hidden">
            <h2 className="text-white text-base font-semibold mb-2">Quick actions</h2>

            <div className="flex flex-col gap-1.5">
                <button className="hover:bg-[#0062cc] text-white font-medium py-0.5 text-xs rounded-full transition duration-200 w-full" style={{ background: '#007AFF', borderRadius: '20px' }}>
                    New Submission
                </button>
                <button className="hover:bg-[#0062cc] text-white font-medium py-0.5 text-xs rounded-full transition duration-200 w-full" style={{ background: '#007AFF', borderRadius: '20px' }}>
                    Quote Builder
                </button>
                <button className="hover:bg-[#0062cc] text-white font-medium py-0.5 text-xs rounded-full transition duration-200 w-full" style={{ background: '#007AFF', borderRadius: '20px' }}>
                    Risks Models
                </button>
                <button className="hover:bg-[#0062cc] text-white font-medium py-0.5 text-xs rounded-full transition duration-200 w-full" style={{ background: '#007AFF', borderRadius: '20px' }}>
                    Documents Upload
                </button>
            </div>
        </div>
    );
}

export default QuickActions;