import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './UserForm.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
// import avatar from '../../image/avatar.svg';
// import "firebase/auth";
// import { fetchProfile, initializeLoginFramework } from './LoginManager';
// import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { Form } from 'react-bootstrap';

const UserForm = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const profileData = {
        username: name,
        email: email,
        password: password,
    }
    // const loading = toast.loading('Adding...Please wait!');

    const onSubmit = data => {
        console.log(data);
        // const url = 'https://toprakserver.herokuapp.com/auth/register'
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'Application/json'
        //     },
        //     body: JSON.stringify(profileData)
        // })
        //     .then(res => {
        //         if (res) {
        //             // toast.dismiss(loading);
        //             // reset();
        //             return swal(`Successfully Sign Up`, `Welcome`, "success").then(res => history.push('/login'));
        //         }
        //         swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
        //     })
    }


    return (
        <div className='mt-5'>
            <div className="container">
                {props.update ?
                    <h2 className='text-center'>Update Management</h2>
                    :
                    <h2 className='text-center'>User Management</h2>
                }

                <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3"  >
                        <Form.Control defaultValue={name} type="text" {...register("firstName", { required: true })} placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Control type="text" {...register("lastName", { required: true })} placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Control type="text" {...register("userName", { required: true })} placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Control type="email" {...register("email", { required: true })} placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Control type="password" {...register("password", { required: true })} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        {props.update ?
                            <Form.Control style={{ backgroundColor: '#0075FF', color: '#FFFFFF' }} type="submit" value='Update User' />
                            :
                            <Form.Control style={{ backgroundColor: '#0075FF', color: '#FFFFFF' }} type="submit" value='Create User' />
                        }

                    </Form.Group>
                </Form>

                {/* <input onClick={signupForm} type="submit" class="login-btn" value="Sign Up" /> */}
            </div>
        </div>



    );
};

export default UserForm;

{/* <div className="form">
                        <img class="avatar" src='{avatar}' alt="" />
                        <h2>Welcome</h2>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>User Name</h5>
                                <input onChange={(e) => setName(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="text" name='username' />
                            </div>
                        </div>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="email" name='email' />
                            </div>
                        </div>
                        <div class="input-div two">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input onChange={(e) => setPassword(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="password" name='password' />
                            </div>
                        </div> */}