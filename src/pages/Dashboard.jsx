import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation'; // Додаємо Navigation
import WorkQueue from '../components/WorkQueue.jsx';
import PortfolioGoals from '../components/PortfolioGoals.jsx';
import QuickActions from '../components/QuickActions.jsx';
import MarketIntelligence from '../components/MarketIntelligence.jsx';
import MyAccounts from '../components/MyAccounts.jsx';

function Dashboard() {
    return (
        <div className="bg-site-bg w-full min-h-screen">
            <Header />
            <Navigation /> {/* Використовуємо Navigation */}
            <div className="flex flex-wrap gap-6 p-5 justify-start">
                <WorkQueue className="ml-0" />
                <PortfolioGoals />
                <div className="flex flex-col gap-6">
                    <QuickActions />
                    <MarketIntelligence />
                </div>
                <MyAccounts className="w-[1800px] h-[390px] max-w-full overflow-x-auto" />
            </div>
        </div>
    );
}

export default Dashboard;