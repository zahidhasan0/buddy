import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EditModal = ({ singleUser }) => {
  const { register, handleSubmit } = useForm();
  const [setEditedProfilePic] = useState("");

  // console.log(singleUser);

  const imgApi = process.env.REACT_APP_imgbb;

  const editDetails = (data, imageUrl) => {
    const updatedUser = {
      name: data.name === "" ? singleUser.name : data?.name,
      // name: ''? data?.name: ,
      profilePic: "" ? singleUser.profilePic : imageUrl,
      address: data.address === "" ? singleUser.address : data?.address,
      university:
        data.university === "" ? singleUser.university : data?.university,
    };

    fetch(`http://localhost:5000/users?email=${singleUser?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("successfully updated");
          console.log(data);
        }
      });
  };

  const onSubmit = (data) => {
    const image = data.profilePic[0];
    console.log(image);

    if (data.profilePic[0]) {
      const formData = new FormData();
      formData.append("image", image);
      const imgUrl = `https://api.imgbb.com/1/upload?&key=${imgApi}`;
      fetch(imgUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            console.log(data);
            console.log(imgData.data.url);
            setEditedProfilePic(imgData.data.url);
            editDetails(data, imgData.data.url);
          }
        });
    } else {
      editDetails(data, singleUser.profilePic);
    }
  };

  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control my-2">
              <label className="label">
                <span className="label-text font-semibold ">Text</span>
              </label>

              <input
                type="file"
                {...register("profilePic")}
                className="input p-2 input-bordered"
              />
            </div>
            <div className="form-control my-2">
              <label className="label">
                <span className="label-text font-semibold ">Name</span>
              </label>

              <input
                type="text"
                defaultValue={singleUser.name}
                {...register("name")}
                className="input input-bordered"
              />
            </div>

            <div className="form-control my-2">
              <label className="label">
                <span className="label-text font-semibold ">Address</span>
              </label>

              <input
                type="text"
                defaultValue={singleUser.address}
                {...register("address")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control my-2">
              <label className="label">
                <span className="label-text font-semibold ">University</span>
              </label>

              <input
                type="text"
                defaultValue={singleUser.university}
                {...register("university")}
                className="input input-bordered"
              />
            </div>

            <button className="btn w-full mt-3">Submit</button>
          </form>
          <div className="modal-action">
            <label htmlFor="edit-modal" className="btn w-full">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
