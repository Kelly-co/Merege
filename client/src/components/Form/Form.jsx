import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import Multiselect from "multiselect-react-dropdown";
import { staff } from "./Data";
import backgroundImage from "../../assets/images/background.png";
import "./Form.css";
import "../../App.css";

const Form = () => {
  const { user, projects, users } = useContext(ProjectsContext);

  console.log(users);

  const defaultValues = {
    projectName: "",
    subject: "",
    keys: "",
    description: "",
    collaborators: [{ name: "", branch: "" }],
    languages: [],
    gitLabLink: "",
    trelloLink: "",
    startDate: "",
    endDate: "",
  };

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

  const projectInfo = {
    projectName: formData.projectName,
    subject: formData.subject,
    branch: user?.branch,
    key1: formData.keys.substring(0, formData.keys.indexOf(" ")),
    key2: formData.keys.substring(
      formData.keys.indexOf(" ") + 1,
      formData.keys.lastIndexOf(" ")
    ),
    key3: formData.keys.substring(formData.keys.lastIndexOf(" ") + 1),
    language1: formData.languages[0],
    language2: formData.languages[1],
    language3: formData.languages[2],
    description: formData.description,
    start_date: formData.startDate,
    end_date: formData.endDate,
    trelloLink: formData.trelloLink,
    githubLink: formData.gitLabLink,
  };

  const creatorAssignment = {
    user_id: user?.id,
    project_id: projects?.length + 1,
  };

  console.log("formData", formData);
  const handleSubmission = () => {
    axios.post("projects/insert", projectInfo).then((response) => {
      console.log(response);
    });
    axios.post("projects/assign", creatorAssignment).then((response) => {
      console.log(response);
    });
    formData?.collaborators?.map((collaborator) => {
      const collaboratorAssignment = {
        user_id: collaborator.id,
        project_id: projects?.length + 1,
      };
      axios.post("projects/assign", collaboratorAssignment).then((response) => {
        console.log(response);
      });
    });
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
          displayValue="name"
          groupBy="branch"
          onRemove={(e) => setValue("collaborators", e)}
          onSelect={(e) => {
            setValue("collaborators", e);
          }}
          options={users}
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
