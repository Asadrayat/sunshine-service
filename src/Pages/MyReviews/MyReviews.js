import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import MyReviewsDetails from '../ReviewrRow/MyReviewsDetails/MyReviewsDetails';


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`https://sunshine-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
                console.log(data);
            })
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`https://sunshine-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myreviews.filter(rvw => rvw._id !== id);
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