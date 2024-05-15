import { Link, useParams } from "react-router-dom";

function CompanyDetail() {
    const { companyHandle } = useParams();
    return (
        <div>
            <h1>Company Detail</h1>
            <p>{companyHandle}</p>
        </div>
    );
}

export default CompanyDetail;
