import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const AddServices = () => {
    const { user } = useContext(AuthContext);
    const notify = () => toast("Services Successfully Added!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const weight = form.weight.value;
        const photoURL = form.photoURL.value;
        const fee = form.fee.value;
        const details = form.details.value;
        console.log(title, fee, photoURL);

        const services = {
            picture: photoURL,
            weight: weight,
            shipping_fee: fee,
            title: title,
            detail: details

        }
        fetch('https://sunshine-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(services)
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
            <form onSubmit={handleAddService}>
                <h2 className="text-4xl py-4">Add Your Services Here</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="title" type="text" placeholder="Title" className="input input-ghost w-full py-4  input-bordered" />
                    <input name="weight" type="text" placeholder="Weight in Kg" className="input input-ghost w-full  input-bordered" />
                    <input name="photoURL" type="text" placeholder="photoURL" className="input input-ghost w-full  input-bordered" />
                    <input name="fee" type="number" placeholder="Shipping_fee" className="input py-4 input-ghost w-full  input-bordered" />
                </div>
                <textarea name="details" className="textarea textarea-bordered h-24 w-full mt-6" placeholder="Service Details" required></textarea>
                <input className='btn btn-outline btn-warning mt-4' type="submit" value="Add Your Service" onClick={notify} ></input>
                <ToastContainer position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
            </form>
        </div>
    );
};

export default AddServices;