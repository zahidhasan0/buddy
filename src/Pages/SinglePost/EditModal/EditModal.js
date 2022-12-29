import React from "react";
import { useForm } from "react-hook-form";

const EditModal = ({ singlePost }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/posts/${singlePost?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: data.text }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("successfully updated");
        }
      });
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

              <textarea
                {...register("text")}
                className="input input-bordered"
                defaultValue={singlePost.text}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <button className="btn">Submit</button>
          </form>
          <div className="modal-action">
            <label htmlFor="edit-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
