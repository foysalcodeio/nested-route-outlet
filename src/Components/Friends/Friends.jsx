import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
    const friends = useLoaderData()
    console.log(friends)
    return (
        <div>
            <h1>Total Friends length : {friends.length}</h1>
            <div>
                {
                    friends.map( friend => <Friend
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;