import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import JoblyApi from "../api.js";
import "./App.css";

// Route Components
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    /* useEffect to get menue items from db.json upon inital render */

    useEffect(() => {
        async function getJobs() {
            let response = await await JoblyApi.request("jobs");
            console.log(response);
        }
        getJobs();
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
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
