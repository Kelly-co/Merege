import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { staff } from "./Data";
import backgroundImage from "../../assets/images/background.png";
import "./Form.css";
import "../../App.css";

const Form = () => {
  const defaultValues = {
    projectName: "",
    subject: "",
    keys: "",
    description: "",
    collaborators: [{ collaborator: "", city: "" }],
    languages: [],
    gitLabLink: "",
    trelloLink: "",
    startDate: "",
    endDate: "",
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues });
  const [formData, setFormData] = useState(defaultValues);
  const onSubmit = (data) => console.log(data);

  watch((data) => setFormData(data));

  console.log("formData", formData);
  const handleSubmission = () => {
    axios.post("projects/insert", formData).then((response) => {
      console.log(response);
    });
    navigate("/dashboard");
  };

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
          onRemove={(e) => setValue("collaborators", e)}
          onSelect={(e) => {
            setValue("collaborators", e);
          }}
          options={staff}
          showCheckbox
          {...register("collaborators", { required: true })}
        />
        <label className="form-titles">Languages:</label>
        <Multiselect
          isObject={false}
          onRemove={(e) => setValue("languages", e)}
          onSelect={(e) => setValue("languages", e)}
          options={["React.js", "JavaScript", "TypeScript", "Python"]}
          {...register("languages", { required: true })}
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
            {...register("gitLabLink", { required: true })}
          ></input>
          <label className="form-titles">Trello:</label>
          <input
            className="form-field-link"
            type="link"
            placeholder="https://"
            {...register("trelloLink", { required: true })}
          ></input>
        </div>
        <div className="form-date">
          <label className="form-titles">Start Date:</label>
          <input
            className="form-field"
            type="date"
            style={{ fontFamily: "Roboto, sans-serif", color: "grey" }}
            {...register("startDate", { required: true })}
          />
          <label className="form-titles">End Date:</label>
          <input
            className="form-field"
            type="date"
            style={{ fontFamily: "Roboto, sans-serif", color: "grey" }}
            {...register("endDate", { required: true })}
          />
        </div>
        <div className="btn-form-container">
          <button className="btn-form" onClick={handleSubmission}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
