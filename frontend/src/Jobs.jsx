import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "reactstrap";
import JoblyApi from "../api";
import JobList from "./JobList";

function Jobs() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [searchParams, setSearchParams] = useState({});
    const INITIAL_STATE = { search: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /* useEffect to get jobs from API upon inital render */

    useEffect(() => {
        async function getJobs() {
            let response = await JoblyApi.request("jobs");
            setJobs(response.jobs);
            return response;
        }
        getJobs();
        setIsLoading(false);
    }, []);

    /* handleSearch updates the company list based on the search team submitted */

    const handleSearch = async (evt) => {
        evt.preventDefault();

        const searchParams = { title: formData.search };

        const response = await JoblyApi.request("jobs", searchParams);

        setJobs(response.jobs);
        setFormData(INITIAL_STATE);
    };

    /* Update local state w/ current state of input element */

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div>
            <h1>Jobs</h1>
            <Form onSubmit={handleSearch}>
                <Input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search..."
                    onChange={handleChange}
                />
                <Button>Search</Button>
            </Form>
            <JobList jobs={jobs} />
        </div>
    );
}

export default Jobs;
