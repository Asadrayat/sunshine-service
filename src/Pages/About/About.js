import React from 'react';
import img from '../../assest/about.jpg'
const About = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:grid grid-cols-2">
                <img src={img} className="w-full rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Benefit of registering your wegon from our site!</h1>
                    <p className="py-6">We will to provide attarective rent. Fast bookings Benefit. Benefit of registering your vehicle from our site,

                        We will  provide attractive rent. Fast bookings at any pickup point.

                        Secured delivery of goods. Operating by well trained driver. Easiest way to find desiered truck

                        through online

                        Tracking the the vehicles speed location point.

                        You can choose your favourite driver through our site.

                        Young enterpreneurs are most beneficial as they find it difficult to transporting offline.</p>
                </div>
            </div>
        </div>

    );
};

export default About;