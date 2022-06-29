import React from "react";
import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Project Name:</label>
      <br />
      <input
        type="text"
        placeholder="Project Name"
        {...register("projectName", { required: true })}
      />
      {errors.projectName && <span>This field is required</span>}
      <br />
      <label>Subject:</label>
      <br />
      <input
        type="text"
        placeholder="Subject"
        {...register("subject", { required: true })}
      />
      {errors.subject && <span>This field is required</span>}
      <br />
      <label>Keys:</label>
      <br />
      <input
        type="text"
        placeholder="Keys (type 3 keys)"
        {...register("keys", { required: true })}
      />
      {errors.keys && <span>This field is required</span>}
      <br />
      <label>Description:</label>
      <br />
      <input
        type="text"
        placeholder="Description"
        {...register("description")}
      />
      <br />
      <label>Start Date:</label>
      <br />
      <input type="date" />
      <br />
      <label>End Date:</label>
      <br />
      <input type="date" />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Form;
