import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function JobCard({ job }) {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">{job.title}</CardTitle>
                <CardText>
                    <p>
                        Company:{" "}
                        <Link to={`/companies/${job.companyHandle}`}>
                            <b>{job.companyName}</b>
                        </Link>
                    </p>
                    <p>
                        Salary: <b>{job.salary}</b>
                    </p>
                    <p>
                        Equity: <b>{job.equity}</b>
                    </p>
                </CardText>
                <Button>Apply</Button>
            </CardBody>
        </Card>
    );
}

export default JobCard;
