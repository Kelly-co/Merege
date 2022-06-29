import React from "react";
import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Form.css";

const staff = { Munich: ["Jan"], Aveiro: ["José"] };

const defaultValues = {
  branches: Object.keys(staff)[0],
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });
  const onSubmit = (data) => console.log(data);

  const activeBranch = watch("branches");

  const branches = Object.keys(staff).map((el) => (
    <option value={el}>{el}</option>
  ));

  const collaborators = activeBranch
    ? staff[activeBranch].map((el) => <option value={el}>{el}</option>)
    : [];

  console.log("collaborators", collaborators);
  console.log("activeBranch", activeBranch);

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
      <select {...register("branches", { required: true })}>{branches}</select>
      <select {...register("collaborators", { required: true })}>
        {collaborators}
      </select>
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
