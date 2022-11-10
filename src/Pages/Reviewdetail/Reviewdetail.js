import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import ReviewrRow from '../ReviewrRow/ReviewrRow';

const Reviewdetail = () => {
    const { _id } = useLoaderData();
    // console.log(_id);
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
            })
    }, [_id])
    // console.log(user);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Feedback</th>
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