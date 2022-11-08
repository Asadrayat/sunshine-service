
import { Link } from 'react-router-dom';
import banner from '../../assest/banner.jpg'
import banner2 from '../../assest//banner2.jpg'
import Services from '../Services/Services';
const Home = () => {

    return (
        <div >
            <img className="rounded" src={banner} alt="" />
            <div>
                <p className='text-5xl font-bold text-center mt-20'>Catagories Of Truck That meets your need</p>
            </div>
            <div className='my-24'>
                <Services></Services>
                <div className='flex justify-center'>
                    <Link to='services'><button className='btn btn-warning'>See All</button></Link>
                </div>
                <div className='my-24'>
                    <img src={banner2} alt="banner" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Home;