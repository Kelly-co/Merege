import React from "react";
import { useForm } from "react-hook-form";
import Multiselect from "multiselect-react-dropdown";
import { staff } from "./data";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("branches"));
  console.log("staff", staff);
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
      <label>Collaborators:</label>
      <Multiselect
        displayValue="collaborator"
        groupBy="city"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={staff}
        showCheckbox
      />
      <br />
      <label>Languages:</label>
      <Multiselect
        isObject={false}
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        options={["React.js", "JavaScript", "TypeScript", "Python"]}
      />
      <br />
      <label>Description:</label>
      <br />
      <input
        type="text"
        placeholder="Description"
        {...register("description", { required: true })}
      />
      {errors.keys && <span>This field is required</span>}
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
