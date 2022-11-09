import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import MyReviewsDetails from '../ReviewrRow/MyReviewsDetails/MyReviewsDetails';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
                console.log(data);
            })
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews?email=${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myreviews.filter(rvw => console.log(rvw));
                        setMyReviews(remaining);
                    }
                })
        }
    }
    return (
        <div>
            {
                myreviews.map(myreview => <MyReviewsDetails
                    key={myreview._id}
                    myreview={myreview}
                    handleDelete={handleDelete}
                ></MyReviewsDetails>)
            }
        </div>
    );
};

export default MyReviews;