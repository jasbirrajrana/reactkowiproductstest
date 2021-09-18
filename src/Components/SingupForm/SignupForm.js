import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitSignup } from "../../store/actions/authActions";
import style from "../../Styles/SignupForm.module.css";

const formTop = "https://cdn.kowi.in/products/Hero-items/Component 80.svg";
const formIcon = "https://cdn.kowi.in/products/Hero-items/Component 81.svg";

const SignupForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data) => {
    dispatch(submitSignup(data));
  };

  return (
    <div className={`container ${style.zIndexBox}`}>
      <div className="form-img">
        <label
          className={style.formTopImg}
          htmlFor="file-input"
          style={{ cursor: "pointer" }}>
          <img src={formTop} alt="" />
        </label>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="file"
              className={`form-control d-none my-3 ${style.own_input}`}
              id="file-input"
              {...register("pic", { required: true })}
              placeholder="Upload Image"
            />
            {errors.pic && errors.image.type === "required" && (
              <span>image is required</span>
            )}
            <input
              className={`form-control my-3 ${style.own_input}`}
              id="name"
              {...register("name", { required: true, maxLength: 30 })}
              placeholder="Enter Name"
            />
            {errors.name && errors.name.type === "required" && (
              <span>Name is required</span>
            )}
            <div className={` my-3 ${style.flexBox}`}>
              <input
                className={`form-control ${style.countryCode}`}
                placeholder="+91"
                readOnly
              />
              <input
                type="number"
                className={`form-control ${style.own_input}`}
                id="phone"
                {...register("mobno", { required: true, maxLength: 11 })}
                placeholder="Mobile No."
              />
            </div>
            {errors.mobno && errors.phone.type === "required" && (
              <span>Phone is required</span>
            )}
            <input
              className={`form-control my-3 ${style.own_input}`}
              id="email"
              {...register("email", { required: true, maxLength: 20 })}
              placeholder="Email"
            />
            {errors.email && errors.email.type === "required" && (
              <span>Email is required</span>
            )}
            <input
              className={`form-control my-3 ${style.own_input}`}
              id="password"
              {...register("password", { required: true, maxLength: 12 })}
              placeholder="Password"
            />
            {/* {errors.password && errors.password.type === "required" && (
              <span>Password is required</span>
            )} */}
            <div className="d-flex justify-content-start my-3">
              <label className="me-2" htmlFor="gender-male">
                <img src={formIcon} alt="icon" />
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  id="gender-male"
                  {...register("gender", { required: true })}
                  style={{ display: "none" }}></input>
              </label>

              <label className="me-2" htmlFor="gender-female">
                <img src={formIcon} alt="icon" />
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  id="gender-female"
                  {...register("gender", { required: true })}
                  style={{ display: "none" }}></input>
              </label>

              <label className="me-2" htmlFor="gender-others">
                <img src={formIcon} alt="icon" />
                <input
                  type="radio"
                  name="gender"
                  value="Prefer not to say"
                  id="gender-others"
                  {...register("gender", { required: true })}
                  style={{ display: "none" }}></input>
              </label>
            </div>
            {/* <input
            type="checkbox"
            id="checkbox"
            
          /> */}
            <small>
              I agree to all <a href="/#">terms</a> & <a href="/#">condition</a>
            </small>{" "}
            <br />
            <input className={style.formBtn} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
