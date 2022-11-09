import React from 'react';

const MyReviewsDetails = ({ myreview ,handleDelete }) => {
    
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>

                    <tr>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Feedback</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {

                    }
                </tbody>
                <tr>
                    <th>
                        <label>
                            <button onClick={() => handleDelete(myreview._id)} className='btn btn-ghost'>X</button>
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={myreview?.photo} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{myreview?.customer}</div>
                                <div className="text-sm opacity-50">{myreview?.email}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-sm">{myreview?.message}</span>
                    </td>

                </tr>


            </table>
        </div>

    );
};

export default MyReviewsDetails;