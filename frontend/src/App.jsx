import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import JoblyApi from "../api.js";
import useLocalStorage from "./hooks/useLocalStorage";
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
    const [user, setUser] = useLocalStorage("user", {});

    /* useEffect to get menue items from db.json upon inital render */

    useEffect(() => {
        async function getJobs() {
            let response = await await JoblyApi.request("jobs");
        }
        // getJobs();
        setIsLoading(false);
    }, []);

    /* useEffect to test user auth */

    // useEffect(() => {
    //     async function authUser() {
    //         let response = await await JoblyApi.authenticate("testadmin", "password");
    //         setUser((user) => ({ username: "testadmin", ...response }));
    //     }
    //     authUser();
    // }, []);

    /* authUser to authenticate username + password from Login form*/

    async function authUser(username, password) {
        let response = await await JoblyApi.authenticate(username, password);
        console.log("authUser response:", response);
        if (response && response.token) {
            setUser((user) => ({ username, ...response }));
        }
        return response;
    }

    /* registerUser to create a user from Signup form
    /  userObj is: { username, password, firstName, lastName, email } */

    async function registerUser(userObj) {
        let response = await await JoblyApi.register(userObj);
        console.log("registerUser response:", response);
        if (response && response.token) {
            setUser((user) => ({ username: userObj.username, ...response }));
        }
        return response;
    }

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar user={user} setUser={setUser} />
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home user={user} />} />
                        <Route exact path="/companies" element={<Companies />} />
                        <Route exact path="/companies/:companyHandle" element={<CompanyDetail />} />
                        <Route exact path="/jobs" element={<Jobs />} />
                        <Route
                            exact
                            path="/login"
                            element={<Login user={user} authUser={authUser} />}
                        />
                        <Route
                            exact
                            path="/signup"
                            element={<Signup user={user} registerUser={registerUser} />}
                        />
                        <Route exact path="/profile" element={<UserProfile />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
