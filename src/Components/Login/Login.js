import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitLogin } from "../../store/actions/authActions";
import style from "../../Styles/Login.module.css";

const Login = ({ handleShowRegister }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    dispatch(submitLogin(data));
  };

  return (
    <>
      <section>
        <div className="container">
          <h3 className={style.loginTitle}>Welcome Back</h3>
          <div className="row">
            <div className="col-md-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  className={`form-control my-3 ${style.own_input}`}
                  id="email"
                  {...register("email", { required: true, maxLength: 30 })}
                  placeholder="Email"
                />
                {errors.email && errors.email.type === "required" && (
                  <span>Email is required</span>
                )}
                <input
                  type="password"
                  className={`form-control my-3 ${style.own_input}`}
                  id="password"
                  {...register("password", { required: true, maxLength: 12 })}
                  placeholder="Password"
                />
                {errors.password && errors.password.type === "required" && (
                  <span>Password is required</span>
                )}
                <div className="d-flex justify-content-between">
                  <div className={style.remember}>
                    <input
                      type="checkbox"
                      id="checkbox"
                      {...register("checkbox", { required: true })}
                    />{" "}
                    <small>Remember Me</small> <br />
                    {errors.password && errors.password.type === "required" && (
                      <span>Please check the terms before submit</span>
                    )}{" "}
                    <br />
                  </div>
                  <div className={style.forgotPass}>
                    <a href="/">Forgot Password</a>
                  </div>
                </div>
                <input className={style.formBtn} type="submit" />
              </form>
              <p className={style.registerShow1}>
                Don't Have An Account{" "}
                <span
                  className={style.registerShow}
                  onClick={handleShowRegister}>
                  Register
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
