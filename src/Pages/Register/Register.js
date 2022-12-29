import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const Register = () => {
  const [error, setError] = useState("");

  const { signUp, updateUser } = useContext(AuthProvider);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const imgApi = process.env.REACT_APP_imgbb;

  const onSubmit = (data) => {
    const image = data.profilePic[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgApi}`;
    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.data.url);

        const buddyUser = {
          name: data.name,
          email: data.email,
          password: data.password,
          university: data.university,
          address: data.address,
          profilePic: imgData.data.url,
        };

        signUp(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);

            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(buddyUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  alert("User created successfully");
                  navigate("/");
                  updateUser({
                    displayName: buddyUser.name,
                    photoURL: buddyUser.profilePic,
                  });
                }
                console.log(data);
              });
          })
          .catch((error) => {
            setError(error.message);
            console.error(error);
          });
      });
  };

  return (
    <div className="md:w-3/5 mx-2 md:mx-auto mt-12 p-3 border border-teal-600">
      <h2 className="text-3xl text-teal-600 mb-3 text-center font-bold">
        Register
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{error}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Full Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Write your full name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-500 font-semibold">Name is required</span>
          )}
        </div>
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
              minLength: {
                value: 6,
                message: "Password must be six characters",
              },
              pattern: {
                value: /(?=.*[!@#$&*])/,
                message: "Password must be strong",
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
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold ">University Name</span>
          </label>
          <input
            type="text"
            defaultValue=""
            placeholder="Write your university name"
            className="input input-bordered"
            {...register("university")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold ">Your Address</span>
          </label>
          <input
            type="text"
            {...register("address", { required: true })}
            placeholder="Write your address here"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold ">
              Upload Profile Picture
            </span>
          </label>
          <input
            type="file"
            {...register("profilePic", { required: true })}
            placeholder=""
            className=" border border-gray-400 p-2 rounded-lg file-input-teal-600"
          />
        </div>

        <div className="form-control text-center">
          <input
            className="btn bg-teal-600 my-3 text-center"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <div>
        <p>
          Already have an account?{" "}
          <Link className="font-bold" to="/login">
            Login
          </Link>
        </p>
        <button className="btn bg-teal-600 text-white w-full my-2">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
