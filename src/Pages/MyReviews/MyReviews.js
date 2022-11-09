import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';


const MyReviews = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default MyReviews;