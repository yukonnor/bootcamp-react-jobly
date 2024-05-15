import { Link } from "react-router-dom";
import JobCard from "./JobCard";

function JobList({ jobs }) {
    return (
        <div className="JobList">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}

export default JobList;
