/* eslint-disable no-unused-vars */
import React from "react";
import "./OnboardingStepTwo.css";
import thisIsWhoIam from "../../images/thisIsWhoIam.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { countries } from "../../utils/countries";
import { industries } from "../../utils/industries";
import { useNavigate } from "react-router-dom";

const OnboardingStepTwo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/onboarding/stepthree");
  };

  const [country, setCountry] = useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="flex h-screen font-inter">
      <div className="w-1/2">
        <div className="flex justify-end mt-5 mr-5 text-xs text-[#475569]">
          Have an account?
          <a
            href=" "
            className="no-underline hover:underline text-[#36A9E1] pl-1"
          >
            Sign in
          </a>
        </div>
        <div className="mx-14">
          <div className="flex justify-around mt-5 scale-50">
            <div className="bg-[#36A9E1] py-3 px-5 text-white rounded-full">
              1
            </div>
            <div className="w-full border-t border-[#E2E8F0] self-center "></div>
            <div className="bg-[#36A9E1] py-3 px-5 text-white rounded-full">
              2
            </div>
            <div className="w-full border-t border-[#E2E8F0] self-center "></div>
            <div className="bg-[#F1F5F9] py-3 px-5 rounded-full">3</div>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl pt-10 text-[#253165]">
              Hey Matthew, identity is everything so lets get to know each
              other...
            </h3>
            <p className="text-xs text-[#1E293B]">
              This question helps us to tailor results and services to better
              suit your organisation and industry but if you don't want to
              answer that's okay just{" "}
              <span className="no-underline hover:underline text-[#36A9E1] pl-1">
                click here to skip
              </span>
            </p>
          </div>
          <div className="flex-col mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="font-bold text-xl text-[#253165] mt-5">
                What industry are you in?
              </label>
              <br />
              <select
                name=""
                id=""
                className="mt-4 mb-4 border-[#6366F1] w-1/2"
                {...register("industry")}
              >
                <option value="">Search/Select</option>
                {industries.map((industry, index) => (
                  <option key={index}>{industry.industry}</option>
                ))}
              </select>
              <br />
              <label className="font-bold text-xl text-[#253165]">
                What size is your organisation?
              </label>
              <br />
              <input
                type="text"
                placeholder="Select"
                className="mt-4 mb-4 border-[#6366F1] w-1/2"
                {...register("sizeOrganisation")}
              />
              <h4 className="font-bold text-xl text-[#253165]">
                Company Address
              </h4>
              <div className="flex-col">
                <div className="mt-4 mb-4 w-11/12">
                  <label htmlFor="" className="text-sm">
                    Street Address
                    <span className="text-[#F43F5E] font-bold pl-1">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-[#6366F1] w-full"
                    {...register("streetAddress", { required: true })}
                  />
                  <span className="text-[#F43F5E]">
                    {errors.streetAddress?.type === "required" &&
                      " Street address is required"}
                  </span>
                </div>
                <div className="md:flex gap-4 justify-between w-11/12">
                  <div className="w-full">
                    <label htmlFor="" className="text-sm">
                      City
                      <span className="text-[#F43F5E] font-bold pl-1">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      className="border-[#6366F1] w-full"
                      {...register("city", { required: true })}
                    />
                    <span className="text-[#F43F5E]">
                      {errors.city?.type === "required" && "City is required"}
                    </span>
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-sm">
                      Postal Code
                      <span className="text-[#F43F5E] font-bold pl-1">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      className="border-[#6366F1] w-full"
                      {...register("postalCode", { required: true })}
                    />
                    <span className="text-[#F43F5E]">
                      {errors.postalCode?.type === "required" &&
                        "Postal code is required"}
                    </span>
                  </div>
                </div>

                <div className="mt-4 mb-4 w-11/12">
                  <label htmlFor="country" className="text-sm">
                    Country
                    <span className="text-[#F43F5E] font-bold pl-1">*</span>
                  </label>
                  <br />
                  <select
                    onChange={handleChange}
                    name=""
                    id=""
                    className="border-[#6366F1] w-full"
                    {...register("country", { required: true })}
                  >
                    <option value="">Search/Select</option>
                    {countries.map((country, index) => (
                      <option key={index}>{country.name}</option>
                    ))}
                  </select>
                  <span className="text-[#F43F5E]">
                    {errors.country?.type === "required" &&
                      "Country is required"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end py-14 lg:px-0 sm:px-6 pr-12">
                <button
                  type="submit"
                  value="submit"
                  className="flex items-center pt-3  bg-[#36A9E1] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded cursor-pointer"
                >
                  <p className=" text-sm font-medium leading-none mr-3">
                    Next step
                  </p>
                  <svg
                    width={14}
                    height={8}
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.1665 4H12.8332"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 7.33333L12.8333 4"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 0.666687L12.8333 4.00002"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <img src={thisIsWhoIam} alt="This is who i am" className="" />
      </div>
    </div>
  );
};

export default OnboardingStepTwo;

/*    */
