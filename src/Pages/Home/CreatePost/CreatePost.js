import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const date = new Date();
  const postDate = format(date, "Pp");

  const imgApi = process.env.REACT_APP_imgbb;

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgApi}`;
    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);

          const post = {
            text: data.text,
            image: imgData.data.url,
            postTime: postDate,
          };

          fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                console.log(data);
                alert("post created successfully");
                reset();
              }
              console.log(data);
            });
        }
      });
  };

  return (
    <div className="mt-5 ">
      <div className="shadow-lg mx-3 rounded-sm   p-10  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-Black">What's on your mind?</p>

          <textarea
            className=" p-2 my-4 border border-teal-600 w-full"
            name=""
            id=""
            cols=""
            rows=""
            {...register("text")}
          ></textarea>

          <input
            type="file"
            className="file-input file-input-bordered border-teal-600  file-input-teal-600 w-full "
            {...register("image")}
          />
          <div className="text-center">
            <input
              className="btn mt-4 bg-teal-600 border-2 border-white"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
