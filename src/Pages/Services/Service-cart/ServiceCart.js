import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { _id, picture, title, detail, shipping_fee, weight } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='lg:h-56 h-48 w-3/4 lg:w-full' src={picture} alt="Truck" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">Premium</div>
                </h2>
                <p> {detail.length > 100 ?
                    `${detail.substring(0, 100)}...` : detail
                }</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Weight : {weight}Kg</div>
                    <div className="badge badge-outline">shipping_fee : ${shipping_fee}</div>
                </div>
                <div className="card-actions  ">
                    <Link to={`/projects/${_id}`}><button className='btn btn-outline btn-primary w-full'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;