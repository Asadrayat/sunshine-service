
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assest/banner.jpg';
import About from '../About/About';
import HomeService from './HomeService/HomeService';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/homeservice';
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
                        services.map(service => <HomeService
                            key={service._id}
                            service={service}
                        ></HomeService>)
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