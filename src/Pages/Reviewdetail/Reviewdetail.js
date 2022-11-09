import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import ReviewrRow from '../ReviewrRow/ReviewrRow';

const Reviewdetail = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/636b2a9685e513a1b48148b7/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
            })
    }, [user?.email])
    // console.log(user);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Feedback</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(view => <ReviewrRow
                            key={view._id}
                            view={view}
                        // handleDelete={handleDelete}
                        // handleStatusUpdate={handleStatusUpdate}
                        ></ReviewrRow>)
                    }
                </tbody>



            </table>
        </div>
    );
};

export default Reviewdetail;