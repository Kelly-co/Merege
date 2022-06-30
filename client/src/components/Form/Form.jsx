import React from "react";
import { useForm } from "react-hook-form";
import Multiselect from "multiselect-react-dropdown";
import { staff } from "./Data";
import backgroundImage from "../../assets/images/background.png";
import "./Form.css";
import "../../App.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className=" form"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <form
        className="projects-form container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="form-header">Start your Project!</h1>
        <label className="form-titles">Project Name:</label>
        <input
          className="form-field"
          type="text"
          placeholder="Project Name"
          {...register("projectName", { required: true })}
        />
        {errors.projectName && <span>This field is required</span>}

        <label className="form-titles">Subject:</label>

        <input
          className="form-field"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <span>This field is required</span>}
        <label className="form-titles">Keys:</label>
        <input
          className="form-field"
          type="text"
          placeholder="Keys (type 3 keys)"
          {...register("keys", { required: true })}
        />
        {errors.keys && <span>This field is required</span>}
        <label className="form-titles">Collaborators:</label>
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
        <label className="form-titles">Languages:</label>
        <Multiselect
          isObject={false}
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          options={["React.js", "JavaScript", "TypeScript", "Python"]}
        />
        <label className="form-titles">Description:</label>
        <input
          className="form-field-description"
          type="text"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        {errors.keys && <span>This field is required</span>}
        <div className="form-links">
          <label className="form-titles">GitLab:</label>
          <input
            className="form-field-link"
            type="link"
            placeholder="https://"
          ></input>
          <label className="form-titles">Trello:</label>
          <input
            className="form-field-link"
            type="link"
            placeholder="https://"
          ></input>
        </div>
        <div className="form-date">
          <label className="form-titles">Start Date:</label>
          <input
            className="form-field"
            type="date"
            style={{ fontFamily: "Roboto, sans-serif", color: "grey" }}
          />
          <label className="form-titles">End Date:</label>
          <input
            className="form-field"
            type="date"
            style={{ fontFamily: "Roboto, sans-serif", color: "grey" }}
          />
        </div>
        <div className="btn-form-container">
          <button className="btn-form">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
