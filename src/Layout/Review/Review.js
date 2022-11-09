import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Review = () => {
    const { _id, title } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    <div className="toast">
                        <div className="alert alert-info">
                            <div>
                                <span>New message arrived.</span>
                            </div>
                        </div>
                    </div>
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div className='py-12'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl py-4">You are about to order: {title}</h2>
                {/* <h4 className="text-3xl">Price: {price}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full py-4  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input py-4 input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-6" placeholder="Your Message" required></textarea>

                <input className='btn btn-outline btn-warning mt-4' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Review;