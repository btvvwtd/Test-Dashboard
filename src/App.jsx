import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Account from "./pages/Account.jsx";

function App() {
    return (
        <div className="bg-site-bg min-h-screen w-full">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/accounts" element={<Account />}  />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;