import { Link, useNavigate } from 'react-router-dom';
import './Friend.css'
const Friend = ({ friend }) => {
    // console.log(friend)


    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate(`/friend/${id}`)
    }

    const {id, name, email} = friend
    return (
        <div className="friend">
            <h3> Name : {name} </h3>
            <h3> email : {email} </h3>
            <button><Link to={`/friend/${id}`}>Show Details</Link></button>
            {/* or you can use UseNavigate instead navigate */}
            <button onClick={handleNavigation}>Nav Button</button>
        </div>
    );
};

export default Friend;