import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import JoblyApi from "../api";

function CompanyDetail() {
    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany] = useState([]);
    const { companyHandle } = useParams();

    /* useEffect to get company details from API upon inital render */

    useEffect(() => {
        async function getCompany() {
            let response = await await JoblyApi.getCompany(companyHandle);
            // console.log(response);
            setCompany(response);
            return response;
        }
        getCompany();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div className="CompanyDetail">
            <h1>{company.name}</h1>
            <p>{company.description}</p>
        </div>
    );
}

export default CompanyDetail;
