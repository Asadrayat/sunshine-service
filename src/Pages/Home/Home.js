
import { Link } from 'react-router-dom';
import banner from '../../assest/banner.jpg'
import Services from '../Services/Services';
const Home = () => {

    return (
        <div >
            <img className="rounded" src={banner} alt="" />
            <div className='my-24'>
                <Services></Services>
                <div className='flex justify-center'>
                    <Link to='services'><button className='btn btn-warning'>See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;