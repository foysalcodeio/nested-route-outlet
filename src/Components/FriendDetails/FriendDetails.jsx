import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Name : {friend.name}</h1>
            <h2>Email : {friend.email}</h2>
            <h2>Web : {friend.website}</h2>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default FriendDetails;