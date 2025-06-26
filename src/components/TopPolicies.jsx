import React from "react";
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

function MarineCargo() {
    return (
        <div className="w-[310px] h-[135px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[24px] mb-[10px]">Marine Cargo</h2>
            <div className="text-[15px] text-[#8a8b98] mb-[-3px]">Premium: $625,000</div>
            <div className="text-[15px] text-[#8a8b98] mb-[54px]">Eff.Date: 6/30/2026</div>
        </div>
    );
}

function GeneralLiability() {
    return (
        <div className="w-[310px] h-[135px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[24px] mb-[10px]">General Liability</h2>
            <div className="text-[15px] text-[#8a8b98] mb-[-3px]">Premium: $175,000</div>
            <div className="text-[15px] text-[#8a8b98] mb-[54px]">Eff.Date: 6/30/2026</div>
        </div>
    );
}

function WorkersComp() {
    return (
        <div className="w-[310px] h-[135px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[24px] mb-[10px]">Workers Comp</h2>
            <div className="text-[15px] text-[#8a8b98] mb-[-3px]">Premium: $75,000</div>
            <div className="text-[15px] text-[#8a8b98] mb-[54px]">Eff.Date: ---</div>
        </div>
    );
}

function Property() {
    return (
        <div className="w-[310px] h-[135px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[24px] mb-[10px]">Property</h2>
            <div className="text-[15px] text-[#8a8b98] mb-[-3px]">Premium: $64,829.83</div>
            <div className="text-[15px] text-[#8a8b98] mb-[54px]">Eff.Date: ---</div>
        </div>
    );
}

function Umbrella() {
    return (
        <div className="w-[310px] h-[135px] text-white bg-[#252a3d] font-sans rounded-[20px] p-4">
            <h2 className="text-[24px] mb-[10px]">Umbrella</h2>
            <div className="text-[15px] text-[#8a8b98] mb-[-3px]">Premium: $275,000</div>
            <div className="text-[15px] text-[#8a8b98] mb-[54px]">Eff.Date: 13/03/2026</div>
        </div>
    );
}

function TopPolicies() {
    return (
        <div className="py-6 px-0 w-full mx-0 ml-21 text-[10px]">
            <h1 className=" text-white mb-5 mx-6 ml-[15px]">Policies</h1>
            <div className="bg-[#1e2233] rounded-[20px] p-5 h-[175px] w-[1680px] text-white font-sans flex space-x-6">
                <MarineCargo />
                <GeneralLiability />
                <WorkersComp />
                <Property />
                <Umbrella />
            </div>
        </div>
    );
}

export default TopPolicies;