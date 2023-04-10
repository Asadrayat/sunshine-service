import React, { useEffect, useState } from 'react';
import ServiceCart from './Service-cart/ServiceCart';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://sunshine-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 align-middle'>
            {
                services.map(service => <ServiceCart
                key={service.id}
                service ={service}
                ></ServiceCart>)
            }
        </div>
    );
};

export default Services;