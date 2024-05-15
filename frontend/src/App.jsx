import { useState, useEffect } from "react";
import JoblyApi from "../api.js";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    /* useEffect to get menue items from db.json upon inital render */

    useEffect(() => {
        async function getJobs() {
            let response = await await JoblyApi.request("jobs");
            console.log(response);
        }
        getJobs();
    }, []);

    return (
        <>
            <h1>React Jobly</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </>
    );
}

export default App;
