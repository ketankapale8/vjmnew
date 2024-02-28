import { useState } from "react";


const AddUser = () => {
//   const history = useHistory();
  const [data, setData] = useState({
    title: "",
    desc : "",  
    image: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  console.log(data)
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("title", data.title);
      formData.append("desc", data.desc);


      const res = await fetch(`https://vjmnewbackend.vercel.app/api/v1/posts/addblog`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ title: "", desc: "", image:'' });
        // history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter title"
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange("title")}
        />
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter desc"
          type="text"
          name="desc"
          value={data.desc}
          onChange={handleChange("desc")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
