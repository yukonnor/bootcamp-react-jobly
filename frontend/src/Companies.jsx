import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "../api";
import CompanyList from "./CompanyList";

function Companies() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    /* useEffect to get companies from API upon inital render */

    useEffect(() => {
        async function getCompanies() {
            let response = await await JoblyApi.request("companies");
            // console.log(response);
            setCompanies(response.companies);
            return response;
        }
        getCompanies();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }
    return (
        <div>
            <h1>Companies</h1>
            <CompanyList companies={companies} />
        </div>
    );
}

export default Companies;
