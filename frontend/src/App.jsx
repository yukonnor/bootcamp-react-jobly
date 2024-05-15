import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import JoblyApi from "../api.js";
import "./App.css";

// Route Components
import NavBar from "./NavBar";
import Home from "./Home";
import Companies from "./Companies.jsx";
import CompanyDetail from "./CompanyDetail.jsx";
import Jobs from "./Jobs.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import UserProfile from "./UserProfile.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    /* useEffect to get menue items from db.json upon inital render */

    useEffect(() => {
        async function getJobs() {
            let response = await await JoblyApi.request("jobs");
        }
        // getJobs();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/companies" element={<Companies />} />
                        <Route exact path="/companies/:companyHandle" element={<CompanyDetail />} />
                        <Route exact path="/jobs" element={<Jobs />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/profile" element={<UserProfile />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
