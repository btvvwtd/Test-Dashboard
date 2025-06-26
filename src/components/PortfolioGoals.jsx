import React from 'react';

const PortfolioGoals = () => {
    const data = [
        {
            label: "PORTFOLIO LOSS RATIO TARGET",
            target: 55, // Target percentage
            currentValue: 48.2, // Current percentage
            status: "-6.8% (GOOD)",
            statusColor: "text-green-500",
            triangleColor: "#3bb979",
            position: "31%", // Position of the current value on the bar
            barBackground: `
                linear-gradient(to right,
                    #22c55e 10%,
                    #22c55e 40%,
                    #facc15 30%,
                    #facc15 60%,
                    #dc2626 48.33%,
                    #dc2626 100%
                )
            `,
            triangleDirection: "borderBottom",
        },
        {
            label: "RENEWAL RETENTION",
            target: "85-90%", // Target range
            currentValue: 88, // Current percentage
            status: "ON TARGET",
            statusColor: "text-green-500",
            triangleColor: "#3bb979",
            position: "55%", // Position of the current value on the bar
            barBackground: `
                linear-gradient(to right,
                    #dc2626 0%,
                    #dc2626 20%,
                    #facc15 20%,
                    #facc15 55%,
                    #22c55e 55%,
                    #22c55e 70%,
                    #facc15 70%,
                    #facc15 100%
                )
            `,
            triangleDirection: "borderBottom",
        },
        {
            label: "NEW BUSINESS TARGET",
            target: 12, // Target in millions
            currentValue: 8.1, // Current in millions
            percentage: 67, // Percentage completion
            statusColor: "text-[#94a3b8]",
            barBackground: "linear-gradient(to left, #3b82f6, #313853)",
            barWidth: 195, // Total bar width in pixels
        },
        {
            label: "ANNUAL GWP TARGET",
            target: 42, // Target in millions
            currentValue: 22.4, // Current in millions
            percentage: 68, // Percentage completion
            statusColor: "text-[#94a3b8]",
            barBackground: "linear-gradient(to left, #3b82f6, #313853)",
            barWidth: 195, // Total bar width in pixels
        },
    ];

    return (
        <div className="bg-[#1e2233] p-6 rounded-[20px] max-w-[420px] w-[300px] h-[566px] text-white font-sans">
            <h2 className="text-xl mb-5">Portfolio goals</h2>

            {data.map((item, index) => (
                <div key={index} className="mb-6 relative">
                    <div className="text-xs text-slate-400">{item.label}</div>

                    {item.target && typeof item.target === "string" ? (
                        // Renewal Retention (range target)
                        <>
                            <div
                                className="text-xs text-gray-400 mb-2 text-[10px]"
                                style={{ marginLeft: "130px", marginTop: "10px" }}
                            >
                                TG: {item.target}
                            </div>
                            <div className="relative mt-1" style={{ position: "relative" }}>
                                <div
                                    className="h-6 rounded-[20px] overflow-hidden"
                                    style={{ background: item.barBackground }}
                                >
                                    <div
                                        className="h-6 flex items-center justify-center font-bold rounded-[20px] whitespace-nowrap text-white text-[13px]"
                                        style={{
                                            width: "15%",
                                            position: "absolute",
                                            left: item.position,
                                            top: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        {item.currentValue}%
                                    </div>
                                </div>
                                <div
                                    style={{
                                        position: "relative",
                                        marginTop: "2px",
                                        textAlign: "center",
                                        marginLeft: "60px",
                                    }}
                                >
                                    <div
                                        style={{
                                            margin: "0 auto",
                                            width: 0,
                                            height: 0,
                                            borderLeft: "9px solid transparent",
                                            borderRight: "9px solid transparent",
                                            [item.triangleDirection]: `11px solid ${item.triangleColor}`,
                                        }}
                                    />
                                    <div className={`${item.statusColor} mt-1 text-[11px]`}>
                                        {item.status}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : item.target && typeof item.target === "number" && item.percentage ? (
                        // New Business Target and Annual GWP Target (progress bar with $ values)
                        <>
                            <div className="relative mt-1 clear-both flex items-center">
                                <div className="h-6 rounded-r-[12px] overflow-hidden bg-[#1e293b] w-[195px] relative">
                                    <div
                                        className="h-6 flex items-center font-bold whitespace-nowrap text-white px-2 rounded-r-[12px] text-[13px]"
                                        style={{
                                            background: item.barBackground,
                                            width: `${(item.currentValue / item.target) * item.barWidth}px`,
                                            justifyContent: "flex-end",
                                            paddingRight: "8px",
                                        }}
                                    >
                                        ${item.currentValue}M
                                    </div>
                                </div>
                                <div className="ml-2 text-xs text-white/70 text-[16px]">${item.target}M</div>
                            </div>
                            <div
                                className="text-center mt-2 text-[12px]"
                                style={{ marginLeft: "-55px", color: item.statusColor }}
                            >
                                {item.percentage}%
                            </div>
                        </>
                    ) : (
                        // Portfolio Loss Ratio (with target triangle)
                        <>
                            <div
                                style={{
                                    position: "relative",
                                    textAlign: "center",
                                    marginBottom: "8px",
                                    marginTop: "10px",
                                }}
                            >
                                <div className="text-xs text-gray-400 mb-1">TG: {item.target}%</div>
                                <div
                                    style={{
                                        margin: "0 auto",
                                        width: 0,
                                        height: 0,
                                        borderLeft: "9px solid transparent",
                                        borderRight: "9px solid transparent",
                                        borderTop: "11px solid #3b82f6",
                                    }}
                                />
                            </div>
                            <div className="relative mt-1" style={{ position: "relative" }}>
                                <div
                                    className="h-6 rounded-[20px] overflow-hidden"
                                    style={{ background: item.barBackground }}
                                >
                                    <div
                                        className="h-6 flex items-center justify-center text-white font-bold rounded-[20px] whitespace-nowrap text-[13px]"
                                        style={{
                                            position: "absolute",
                                            left: item.position,
                                            transform: "translateX(-15%)",
                                            width: "20%",
                                            top: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        {item.currentValue}%
                                    </div>
                                </div>
                                <div
                                    style={{
                                        position: "relative",
                                        marginTop: "2px",
                                        textAlign: "center",
                                        marginLeft: "-50px",
                                    }}
                                >
                                    <div
                                        style={{
                                            margin: "0 auto",
                                            width: 0,
                                            height: 0,
                                            borderLeft: "9px solid transparent",
                                            borderRight: "9px solid transparent",
                                            [item.triangleDirection]: `11px solid ${item.triangleColor}`,
                                        }}
                                    />
                                    <div className={`${item.statusColor} mt-1 text-[11px]`}>
                                        {item.status}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PortfolioGoals;