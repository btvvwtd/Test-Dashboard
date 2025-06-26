import React from "react";

const steps = [
    { label: "Submitted", completed: true },
    { label: "Review", completed: true },
    { label: "Quote", completed: true },
    { label: "Bind", completed: true },
    { label: "Issue", completed: true },
    { label: "Renew", completed: false },
];

function AccountStatus() {
    return (
        <div className="font-sans">
            <h2 className="text-[25px] font-semibold text-white mb-4 ml-2">Account Status</h2>
            <div className="bg-[#1e2233] w-[960px] h-[160px] rounded-[20px] px-8 py-14 text-white">
                <div className="flex items-center justify-between relative">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center relative" style={{ width: `${100 / steps.length}%` }}>
                            {/* Іконка + лейбл */}
                            <div className="flex flex-col items-center z-10">
                                <div
                                    className={`w-6 h-6 rounded-full border flex items-center justify-center 
                                        ${step.completed ? "border-green-500" : "border-gray-500"}`}
                                >
                                    {step.completed ? (
                                        <svg
                                            className="w-3 h-3 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <div className="w-2 h-2 rounded-full bg-gray-500 opacity-50" />
                                    )}
                                </div>
                                <span className="mt-2 text-[18px] text-white whitespace-nowrap">{step.label}</span>
                            </div>

                            {/* Лінія між поточним і наступним етапом (тепер правильно центрована) */}
                            {index < steps.length - 1 && (
                                <div
                                    className={`absolute top-3 left-1/2 h-px border-t border-dashed 
            ${step.completed && steps[index + 1].completed ? "border-green-500" : "border-gray-500"}`}
                                    style={{
                                        marginLeft: "75px",
                                        width: "120px",  /* Регулюйте довжину лінії тут */
                                        transform: "translateX(-50%)", /* Центрує лінію відносно іконки */
                                    }}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ComplianceDocumentation() {
    return (
        <div className="flex flex-col items-center font-sans">
            <div className="w-[700px] flex justify-between items-center mb-4">
                <h2 className="text-[25px] font-semibold text-white ml-2">Compliance & Documentation
                    <a href="#" className="text-sm text-blue-400 hover:underline ml-3">See history →</a>
                </h2>
            </div>

            <div className="w-[700px] h-[160px] bg-[#1e2233] rounded-[20px] p-10 text-white">
                <div className="grid grid-cols-2 gap-y-7 gap-x-1 ">
                    {[
                        "KYC verification",
                        "Required Documentation",
                        "Regulatory approval",
                        "Financial Verification"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                            <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center">
                                <svg
                                    className="w-3 h-3 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-sm">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Visual() {
    return (
        <div className=" p-6 flex space-x-6 ml-[60px]">
            <AccountStatus />
            <ComplianceDocumentation />
        </div>
    );
}

export default Visual;