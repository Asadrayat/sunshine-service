import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import Review from '../../Layout/Review/Review';
import Reviewdetail from '../Reviewdetail/Reviewdetail';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { title, weight, picture, detail, shipping_fee,_id } = useLoaderData();

  return (
    <div>
      <div className="hero lg:p-24 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={picture} className="w-sm-60 rounded-lg " />
          <div>
            <h1 className="lg:text-5xl text-2xl font-bold">{title}!</h1>
            <p className="lg:py-6 text-2xl font-semibold">Weight : {weight}kg</p>

            <p className="lg:py-6">{detail}</p>
            <p className='font-bold text-3xl '>Shipping_fee : ${shipping_fee}</p>
          </div>
        </div>
      </div>
      <div className='bg-base-200 p-6 my-12'>
        <p className='lg:lg:text-5xl text-2xl text-2xl text-center font-bold'>Review of {title}</p>
        <div className='flex justify-center gap-10 my-12'>
          {user ? <Review></Review> : <div>  <Link to='/login'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-warning ">Add Your Review</button></Link>  </div>}

        </div>
        <div>
          <Reviewdetail></Reviewdetail>
        </div>

      </div>
    </div>


  );
};

export default Checkout;