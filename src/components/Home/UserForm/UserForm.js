import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './UserForm.css'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const UserForm = (props) => {

    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5050/auth/register'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    // toast.dismiss(loading);
                    reset();
                    return swal(`Successfully Create User`).then(res => console.log('donne'));
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
    }

    return (
        <div className=''>
            <div className="container">
                {props.user ?
                    <h2 className='text-center'><FontAwesomeIcon icon={faUser} size='1x' /> Update Management</h2>
                    :
                    <h2 className='text-center mt-5'><FontAwesomeIcon icon={faUser} size='1x' /> User Management</h2>
                }
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3"  >
                        <input className='form-control' defaultValue={props.user && props.user.firstName} type="text" {...register("firstName", { required: true })} placeholder="First Name" />
                    </div>
                    <div className="mb-3"  >
                        <input className='form-control' defaultValue={props.user && props.user.lastName} type="text" {...register("lastName", { required: true })} placeholder="Last Name" />
                    </div>
                    <div className="mb-3"  >
                        <input className='form-control' defaultValue={props.user && props.user.userName} type="text" {...register("userName", { required: true })} placeholder="Username" />
                    </div>
                    <div className="mb-3"  >
                        <input className='form-control' defaultValue={props.user && props.user.email} type="email" {...register("email", { required: true })} placeholder="Email" />
                    </div>
                    <div className="mb-3"  >
                        <input className='form-control' defaultValue={props.user && props.user.password} type="password" {...register("password", { required: true })} placeholder="Password" />
                    </div>
                    <div className="mb-3"  >

                        <input className='form-control' style={{ backgroundColor: '#0075FF', color: '#FFFFFF' }} type="submit" value='Create User' />
                    </div>
                </form>
            </div>
        </div>



    );
};

export default UserForm;