import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const UserForm = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Headers />
                <input {...register("firstName")} placeholder="First name" />
                <input {...register("lastName")} placeholder="Last name" />
                <select {...register("category")}>
                    <option value="">Select...</option>
                    <option value="A">Category A</option>
                    <option value="B">Category B</option>
                </select>

                <p>{result}</p>
                <input type="submit" />
            </form>
        </div>
    );
};

export default UserForm;