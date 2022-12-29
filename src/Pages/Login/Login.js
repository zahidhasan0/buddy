import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useContext(AuthProvider);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        reset();
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  };

  return (
    <div className="md:w-3/5 mx-2 md:mx-auto mt-12 p-3 border border-teal-600">
      <h2 className="text-3xl text-teal-600 mb-3 text-center font-bold">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-red-500 font-semibold">{error}</p>
        <div className="form-control my-2">
          <label className="label">
            <span className="label-text font-semibold ">Your Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Write your email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-500 font-semibold">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold ">Your Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            placeholder="Write your password. (must be 6 characters)"
            className="input input-bordered"
          />
          {errors.password && (
            <span className="text-red-500 font-semibold">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="form-control text-center my-2">
          <input
            className="btn bg-teal-600 my-3 text-center"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <div>
        <p className="text-primary ">
          Need an account?{" "}
          <Link className="font-bold" to="/register">
            Register
          </Link>
        </p>

        <button
          onClick={handleGoogleLogin}
          className="btn bg-teal-600 text-white w-full my-2"
        >
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
