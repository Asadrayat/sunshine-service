import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = ({ service }) => {
    const { picture, weight, shipping_fee, detail, _id, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-56 w-full' src={picture} alt="Truck" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">Premium</div>
                </h2>
                <p> {detail.length > 100 ?
                    `${detail.substring(0, 100)}...` : detail
                }</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline ">Weight : {weight}kg</div>
                    <div className="badge badge-outline mx-3">shipping_fee : ${shipping_fee}</div>
                </div>
                <div className="card-actions py-4  ">
                    <Link to={`/services/${_id}`}><button className='btn btn-outline btn-primary w-full'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeService;