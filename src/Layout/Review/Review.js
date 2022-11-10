import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Review = () => {
    const { _id, title } = useLoaderData();

    const { user } = useContext(AuthContext);
    const pic = user?.photoURL;
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            message,
            photo: pic
        }
        fetch(`https://sunshine-server.vercel.app/reviews?service=${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Added Review Successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div className='py-12'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl py-4">Your Review Here {title}</h2>
                {/* <h4 className="text-3xl">Price: {price}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full py-4  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input py-4 input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-6" placeholder="Your Message" required></textarea>

                <input className='btn btn-outline btn-warning mt-4' type="submit" value="Place Your Review" />
            </form>
        </div>
    );
};

export default Review;