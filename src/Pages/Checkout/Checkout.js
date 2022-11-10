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
      <div className="hero p-24 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={picture} className="max-w-sm rounded-lg shadow-5xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}!</h1>
            <p className="py-6 text-2xl font-semibold">Weight : {weight}kg</p>

            <p className="py-6">{detail}</p>
            <p className='font-bold text-3xl '>Shipping_fee : ${shipping_fee}</p>
          </div>
        </div>
      </div>
      <div className='bg-base-200 p-6 my-12'>
        <p className='text-5xl text-center font-bold'>Review of {title}</p>
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