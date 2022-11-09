import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const ReviewrRow = ({ view }) => {
    const {user} = useContext(AuthContext);
    console.log(view);
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={view?.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{view?.customer}</div>
                        <div className="text-sm opacity-50">{view?.email}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{view?.message}</span>
            </td>

        </tr>
    );
};

export default ReviewrRow;