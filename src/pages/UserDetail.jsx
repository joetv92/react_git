import { useParams } from "react-router-dom";

function UserDetail() {
    const { id } = useParams();
    return <h1>User ID: {id}</h1>;
}

export default UserDetail;