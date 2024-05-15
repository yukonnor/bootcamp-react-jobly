import { Link } from "react-router-dom";
import CompanyCard from "./CompanyCard";

function CompanyList({ companies }) {
    console.log("companies prop: ", companies);
    return (
        <div className="CompanyList">
            <h2>Company Search TBD</h2>
            {companies.map((company) => (
                <CompanyCard key={company.handle} company={company} />
            ))}
        </div>
    );
}

export default CompanyList;
