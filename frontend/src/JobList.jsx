import { useContext } from "react";
import JobCard from "./JobCard";
import AppliedJobsContext from "./AppliedJobsContext";

function JobList({ jobs, applyToJob }) {
    const appliedJobs = useContext(AppliedJobsContext);

    console.log("JobList appliedJobs: ", appliedJobs);

    return (
        <div className="JobList">
            {jobs.map((job) => {
                return (
                    <JobCard
                        key={job.id}
                        job={job}
                        applyToJob={applyToJob}
                        applied={appliedJobs.includes(job.id)}
                    />
                );
            })}
        </div>
    );
}

export default JobList;
