import React from "react";



import { useForm } from "react-hook-form"
import { createPost } from "../services/services";

function Carlos() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        createPost(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <input {...register("text")} type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <input {...register("image")} type="text" className="form-control" id="tagline" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Carlos