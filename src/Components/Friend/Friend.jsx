import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({ friend }) => {
    console.log(friend)

    const {id, name, email} = friend
    return (
        <div className="friend">
            <h3> Name : {name} </h3>
            <h3> email : {email} </h3>
            <p><Link to={`/friend/${id}`} friendId={friend.id}>Show Details</Link></p>
        </div>
    );
};

export default Friend;