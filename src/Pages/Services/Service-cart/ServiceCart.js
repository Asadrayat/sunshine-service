import React from 'react';

const ServiceCart = ({ service }) => {
    const {picture,title,shipping_fee,weight}= service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-56 w-full' src={picture} alt="Truck" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">Premium</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Weight : {weight}kg</div>
                    <div className="badge badge-outline">shipping_fee : ${shipping_fee}</div>
                </div>
                <div className="card-actions  ">
                    <button className='btn btn-outline btn-primary w-full'>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;