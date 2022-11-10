import React from 'react';

const MyReviewsDetails = ({ myreview, handleDelete }) => {

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
                            {/* The button to open modal */}
                            <label htmlFor="my-modal" onClick={() => handleDelete(myreview._id)} className="btn btn-ghost">X</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">You have Deleted successfully!</h3>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal" className="btn">Ok!</label>
                                    </div>
                                </div>
                            </div>
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