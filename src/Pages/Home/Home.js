
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assest/banner.jpg';
import About from '../About/About';
// import ServiceCart from '../Services/Service-cart/ServiceCart';
import ServiceHomeCart from './ServiceHomeCart/ServiceHomeCart';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = 'https://sunshine-server.vercel.app/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <img className="rounded" src={banner} alt="" />
            <div>
                <p className='text-5xl font-bold text-center mt-20'>Catagories Of Truck That meets your need</p>
            </div>
            <div className='my-24'>
                <div className='grid grid-cols-3'>
                    {
                       services.map(srvc =><ServiceHomeCart
                        key={srvc._id}
                        srvc={srvc}
                       ></ServiceHomeCart>).slice(Math.max(services.length - 3, 0))
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to='services'><button className='btn btn-warning'>See All</button></Link>
                </div>
                <div className='my-24'>
                    <About></About>
                </div>
            </div>
        </div>
    );
};

export default Home;