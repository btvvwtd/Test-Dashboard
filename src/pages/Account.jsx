import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import TopPolicies from "../components/TopPolicies.jsx";
import BottomPolicies from "../components/BottomPolicies.jsx";
import PerformanceMetrics from "../components/PerformanceMetrics.jsx";
import Visual from "../components/Visual.jsx";
import AccountDetails from "../components/AccountDetails.jsx";
import Communication from "../components/Communication.jsx";
import Info from "../components/Info.jsx";

function Accounts() {
    return (
        <div className="bg-site-bg w-full min-h-screen">
            <Header />
            <Navigation />
            <Info />
            <PerformanceMetrics />
            <TopPolicies />
            <Visual />
            <AccountDetails />
            <Communication />
            <BottomPolicies/>
        </div>
    );
}

export default Accounts;